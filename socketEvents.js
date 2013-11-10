var Book = require('./models/Book'),
    Author = require('./models/Author')
    extend = require('util-extend'),
    git = require('gift'),
    fs = require('fs'),
    mkdirp = require('mkdirp'),
    path = require('path'),
    exec = require('child_process').exec,
    mongoose = require('mongoose'),
    ObjectId = mongoose.Types.ObjectId;

function SocketEvents(socket) {
    this.socket = socket;
    if (this.socket.user !== undefined) {
        this.user = socket.user;
    }
};

SocketEvents.prototype.addBook = function(data) {
    var username = this.user.username,
        title = data.title,
        that = this,
        fileName = 'chapter1.txt',
        colors = ['#F2BBA7', '#29698C', '#64A562', '#69BFAF', '#0FA68A', '#BBBBBB', '#F2C1F4'],
        p;

    if (!username) throw new Error('No username provided');

    p = path.join('/repos', username, stripSpaces(title));
    firstFile = path.join(p, fileName);

    fs.exists(p, function(exists) {
        if (exists) throw new Error('Repo Exists for user ' + username);

        mkdirp(p, function(err) {
            if (err) throw err;

            git.init(p, function (err, repo) {
                if (err) throw err;

                // Create an intro file and make initial commit.
                fs.writeFile(firstFile, 'Welcome to Tandem. Start writing!', function(err) {
                    if (err) throw err;

                    repo.add(firstFile, function(err) {
                        if (err) throw err;

                        repo.commit('Initial Commit', {
                            a: true
                        }, function(err) {
                            if (err) throw err;
                        });
                    });
                });

                Author.findOne({username: username}, function (err, author) {
                    if (err) throw err;

                    var book = new Book({
                        title: title,
                        owner: author.username,
                        path: p,
                        chapters: [{
                            title: 'Chapter 1',
                            fileName: fileName,
                            number: 1
                        }],
                        color: colors[Math.floor(Math.random() * colors.length)]
                    });

                    book.save(function (err, b) {
                        if (err) throw err;

                        Author.update({username: username}, {$push: {books: b}}, function (err, numAffected, rawResponse) {
                            if (err) throw err;

                            that.socket.emit('bookAdded', b);
                        });
                    });
                });
            });
        });
    });
};

SocketEvents.prototype.deleteBook = function(data) {
    var bookId = new ObjectId(data._id),
        self = this;

    Author.find().where('books').in([bookId]).exec(function(err, authors) {
        if (err) console.error(err);

        authors.forEach(function(author) {
            author.books.splice(author.books.indexOf(bookId),1);
            author.save();
        });

        Book.findById(bookId, function(err, book) {
            if (err) console.log(err);

            if (book.path && book.path !== '/') {
                // remove every file in the repo
                var bash = 'rm -rf ' + book.path;
                exec(bash);
            }
        });

        Book.remove({ _id: bookId }, function (err) {
            if (err) console.log(err);

            self.socket.emit('bookDeleted', { message: true });
        });
    });
};

SocketEvents.prototype.getBook = function(data) {
    var self = this,
        username = this.user.username,
        // title = stripSpaces(data.title),
        id = data._id,
        repo, p, chapters;

    if (!username) throw new Error('No username provided');

    // p = path.join('/repos', username, title);
    // What information about the repo do we want?
    // Commits?
//     repo = git(p);
//     repo.tree().blobs(function(err, f) {
//         if (err) throw err;
//         // map over this to get stuff?
//         files = f.map(function(file) {
//             console.log('found file: ');
//             console.log(file);
//             return file.name;
//         });

//         repo.chapters = files;

        Book.findOne({ _id: id }, function(err, book) {
            if (err) throw err;
// console.log('book');
// console.log(book);
            // book = extend(repo, book);
            self.socket.emit('viewBook', book);
        });
    // });
};

SocketEvents.prototype.getAllBooks = function(data) {
    var username = this.user.username,
        that = this;

    Author.findOne({ username: username })
    .populate('books')
    .exec(function (err, author) {
        if (err) throw err;

        var books = author.books;

        that.socket.emit('foundBooks', books);
    });
};

SocketEvents.prototype.saveBook = function(data) {
    var self = this,
        message = data.message,
        repo;

    repo = git(socket.book.path);

    repo.commit(message, function(err) {
        if (err) throw err;

        self.socket.emit('bookSaved', {success: true});
    });
};

SocketEvents.prototype.addChapter = function(data) {
    var that = this,
        username = this.user.username,
        bookId = new ObjectId(data.bookId),
        number = data.number,
        title = data.title,
        fileName = stripSpaces(title) + '.txt';

    if (!username) throw new Error('No username provided');

    Book.findOne({_id: bookId}, function (err, book) {
        if (err) throw new Error('Book could not be located');

        repo = git(book.path);
        filepath = path.join(book.path, fileName);

        fs.exists(book.path, function(exists) {
            if (!exists) throw new Error('Book path does not exits');

            fs.writeFile(filepath, 'Start writing chapter ' + title + ' now!', function(err) {
                if (err) throw err;

                repo.add(fileName, function(err) {
                    if (err) throw err;

                    repo.commit('Initial commit of new chapter: ' + title, {
                        a: false
                    }, function(err) {
                        if (err) throw err;

                        if (book.chapters === undefined) book.chapters = [];

                        book.chapters.push({
                            title: title,
                            number: number
                        });

                        book.save(function (err, book) {
                            if (err) throw err;

                            that.socket.emit('chapterCreate', book);
                        });
                    });
                });
            });
        });
    });

};

var stripSpaces = function(str) {
    return str.replace(/\s/g, '')
              .replace(/\W/g, '');
};

module.exports = SocketEvents;