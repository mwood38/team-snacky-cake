Ember.TEMPLATES.application=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f,h="";return b.buffer.push('\n            <div class="backdrop" '),e={target:a},f={target:"STRING"},b.buffer.push(l(c.action.call(a,"closeUp",{hash:{target:"TandemApp.author"},contexts:[a],types:["ID"],hashContexts:e,hashTypes:f,data:b}))),b.buffer.push('></div>\n            <div class="userbox">\n                <img '),e={src:a},f={src:"STRING"},b.buffer.push(l(c.bindAttr.call(a,{hash:{src:"TandemApp.author.avatar_url"},contexts:[],types:[],hashContexts:e,hashTypes:f,data:b}))),b.buffer.push(' width="80" height="80">\n                <p>\n                    <strong>'),f={},e={},b.buffer.push(l(c._triageMustache.call(a,"TandemApp.author.displayName",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:f,data:b}))),b.buffer.push("</strong><br>\n                    "),f={},e={},d=c["if"].call(a,"TandemApp.author.email",{hash:{},inverse:m.noop,fn:m.program(2,g,b),contexts:[a],types:["ID"],hashContexts:e,hashTypes:f,data:b}),(d||0===d)&&b.buffer.push(d),b.buffer.push('\n                    <a href="/logout">Logout</a>\n                </p>\n            </div>\n        '),h}function g(a,b){var d,e,f="";return b.buffer.push("\n                        "),d={},e={},b.buffer.push(l(c._triageMustache.call(a,"TandemApp.author.email",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push("<br>\n                    "),f}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var h,i,j,k="",l=this.escapeExpression,m=this;return e.buffer.push('<header>\n    <div class="container">\n        <img src="/assets/img/logo_md.png" style="margin-right:20px;float:left;">\n        <h2>\n            Tandem\n        </h2>\n        <h4>\n            Collaborative Writing '),e.buffer.push('\n        </h4>\n        <a href="javascript:;" class="userboxanchor" '),i={target:b},j={target:"STRING"},e.buffer.push(l(c.action.call(b,"openUp",{hash:{target:"TandemApp.author"},contexts:[b],types:["ID"],hashContexts:i,hashTypes:j,data:e}))),e.buffer.push(">&gt; "),j={},i={},e.buffer.push(l(c._triageMustache.call(b,"TandemApp.author.displayName",{hash:{},contexts:[b],types:["ID"],hashContexts:i,hashTypes:j,data:e}))),e.buffer.push("</a>\n        "),j={},i={},h=c["if"].call(b,"TandemApp.author.open",{hash:{},inverse:m.noop,fn:m.program(1,f,e),contexts:[b],types:["ID"],hashContexts:i,hashTypes:j,data:e}),(h||0===h)&&e.buffer.push(h),e.buffer.push("\n    </div>\n</header>\n\n<div class=\"container\">\n<div class='error text-danger'>"),j={},i={},e.buffer.push(l(c._triageMustache.call(b,"TandemApp.error",{hash:{},contexts:[b],types:["ID"],hashContexts:i,hashTypes:j,data:e}))),e.buffer.push("</div>\n"),j={},i={},e.buffer.push(l(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashContexts:i,hashTypes:j,data:e}))),e.buffer.push("\n\n</div>"),k}),Ember.TEMPLATES.book=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f="";return b.buffer.push("\n            "),d={},e={},b.buffer.push(m(c._triageMustache.call(a,"chapter.title",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push("<br>\n        "),f}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var g,h,i,j,k,l="",m=this.escapeExpression,n=c.helperMissing,o=this;return e.buffer.push('<br>\n<a href="#/">Book List</a> | '),i={},j={},e.buffer.push(m(c._triageMustache.call(b,"controller.book.title",{hash:{},contexts:[b],types:["ID"],hashContexts:j,hashTypes:i,data:e}))),e.buffer.push('\n<br><br>\n\n\n\n<div id="chapterlist" '),j={"class":b},i={"class":"STRING"},e.buffer.push(m(c.bindAttr.call(b,{hash:{"class":"controller.book.chaptersOpen:chaptersOpen:chaptersClose"},contexts:[],types:[],hashContexts:j,hashTypes:i,data:e}))),e.buffer.push(">\n    <form "),j={on:b},i={on:"STRING"},e.buffer.push(m(c.action.call(b,"createChapter",{hash:{on:"submit"},contexts:[b],types:["ID"],hashContexts:j,hashTypes:i,data:e}))),e.buffer.push(' style="margin-top:3px;">\n        <div class="container">\n        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 add-book-form">\n            <div class="input-group">\n                    '),j={value:b,type:b,"class":b,placeholder:b},i={value:"ID",type:"STRING","class":"STRING",placeholder:"STRING"},k={hash:{value:"controller.newChapterTitle",type:"text","class":"form-control",placeholder:"New Chapter Title"},contexts:[],types:[],hashContexts:j,hashTypes:i,data:e},e.buffer.push(m((g=c.input||b.input,g?g.call(b,k):n.call(b,"input",k)))),e.buffer.push('\n                    <span class="input-group-btn">\n                        <button id="addChapter" class=\'btn btn-default\' type=\'submit\'>Create</button>\n                    </span>\n            </div>\n        </div>\n        </div>\n    </form>\n\n\n    <div class="scrollingchapters">\n        '),i={},j={},h=c.each.call(b,"chapter","in","controller.book.realChapters",{hash:{},inverse:o.noop,fn:o.program(1,f,e),contexts:[b,b,b],types:["ID","ID","ID"],hashContexts:j,hashTypes:i,data:e}),(h||0===h)&&e.buffer.push(h),e.buffer.push('\n    </div>\n    <div class="holder">\n        <div class="tabbie">\n            <div '),j={target:b},i={target:"STRING"},e.buffer.push(m(c.action.call(b,"toggleChapter",{hash:{target:"controller.book"},contexts:[b],types:["ID"],hashContexts:j,hashTypes:i,data:e}))),e.buffer.push(">\n                chapterlist\n            </div>\n        </div>\n    </div>\n</div>\n\n"),j={valueBinding:b},i={valueBinding:"STRING"},e.buffer.push(m(c.view.call(b,"Ember.TextArea",{hash:{valueBinding:"controller.book.chapterContentNew"},contexts:[b],types:["ID"],hashContexts:j,hashTypes:i,data:e}))),l}),Ember.TEMPLATES.index=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f,i,j,k="";return b.buffer.push("\n		    "),b.buffer.push("\n		    <li>\n		    	<figure class='book'>\n					<!-- Front -->\n\n					<ul class='hardcover_front'>\n						<li>\n							<div class=\"coverDesign\" "),f={style:a},i={style:"STRING"},b.buffer.push(o(c.bindAttr.call(a,{hash:{style:"book.background"},contexts:[],types:[],hashContexts:f,hashTypes:i,data:b}))),b.buffer.push('>\n								<span class="ribbon" style="display:none;">NEW</span>\n								<h1>'),i={},f={},b.buffer.push(o(c._triageMustache.call(a,"book.displayShortTitle",{hash:{},contexts:[a],types:["ID"],hashContexts:f,hashTypes:i,data:b}))),b.buffer.push("</h1>\n								<p>by: "),i={},f={},b.buffer.push(o(c._triageMustache.call(a,"book.owner",{hash:{},contexts:[a],types:["ID"],hashContexts:f,hashTypes:i,data:b}))),b.buffer.push("</p>\n							</div>\n						</li>\n						<li></li>\n					</ul>\n\n					<!-- Pages -->\n\n					<ul class='page'>\n						<li></li>\n						<li>\n							"),f={"class":a},i={"class":"STRING"},j={hash:{"class":"btn"},inverse:p.noop,fn:p.program(2,g,b),contexts:[a,a],types:["STRING","ID"],hashContexts:f,hashTypes:i,data:b},d=c.linkTo||a.linkTo,e=d?d.call(a,"book","book",j):q.call(a,"linkTo","book","book",j),(e||0===e)&&b.buffer.push(e),b.buffer.push("\n							"),i={},f={},e=c["if"].call(a,"book.isOwner",{hash:{},inverse:p.noop,fn:p.program(4,h,b),contexts:[a],types:["ID"],hashContexts:f,hashTypes:i,data:b}),(e||0===e)&&b.buffer.push(e),b.buffer.push("\n						</li>\n						<li></li>\n						<li></li>\n						<li></li>\n					</ul>\n\n					<!-- Back -->\n\n					<ul class='hardcover_back'>\n						<li></li>\n						<li></li>\n					</ul>\n					<ul class='book_spine'>\n						<li></li>\n						<li></li>\n					</ul>\n				</figure>\n			</li>\n					\n		"),k}function g(a,b){b.buffer.push("\n								Edit\n							")}function h(a,b){var d,e,f="";return b.buffer.push('\n								<a class="btn" href="#" '),d={target:a},e={target:"STRING"},b.buffer.push(o(c.action.call(a,"deleteBook",{hash:{target:"book"},contexts:[a],types:["ID"],hashContexts:d,hashTypes:e,data:b}))),b.buffer.push(">Delete</a>\n							"),f}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var i,j,k,l,m,n="",o=this.escapeExpression,p=this,q=c.helperMissing;return e.buffer.push("\n<form "),k={on:b},l={on:"STRING"},e.buffer.push(o(c.action.call(b,"createBook",{hash:{on:"submit"},contexts:[b],types:["ID"],hashContexts:k,hashTypes:l,data:e}))),e.buffer.push('>\n	<div class="col-md-6 col-sm-6 col-xs-6 add-book-form">\n	    <div class="input-group">\n		        '),k={value:b,type:b,"class":b,placeholder:b},l={value:"ID",type:"STRING","class":"STRING",placeholder:"STRING"},m={hash:{value:"bookName",type:"text","class":"form-control",placeholder:"New Book Title"},contexts:[],types:[],hashContexts:k,hashTypes:l,data:e},e.buffer.push(o((i=c.input||b.input,i?i.call(b,m):q.call(b,"input",m)))),e.buffer.push('\n		        <span class="input-group-btn">\n		            <button id="addBook" class=\'btn btn-default\' type=\'submit\'>Create</button>\n		        </span>\n	    </div>\n	</div>\n</form>\n\n\n\n\n\n\n<div class="bookList">\n    <h3>Works in Progress:</h3>\n    <ul class="align">\n		'),l={},k={},j=c.each.call(b,"book","in","controller.books.content",{hash:{},inverse:p.noop,fn:p.program(1,f,e),contexts:[b,b,b],types:["ID","ID","ID"],hashContexts:k,hashTypes:l,data:e}),(j||0===j)&&e.buffer.push(j),e.buffer.push("\n	</ul>\n</div>\n"),n}),Ember.TEMPLATES.monkey=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{},e.buffer.push("<h1>MONKEY</h1>")});var TandemApplication=Ember.Application.extend({initSocket:function(){var a=this;this.set("socket",io.connect()),this.get("socket").on("setupUser",function(b){a.set("author",a.AuthorModel.create(b._json))}),this.get("socket").on("error",function(b){a.set("error",b.message)})}});Ember.LinkView.reopen({attributeBindings:["style"]}),TandemApplication.reopen({IndexController:Ember.ArrayController.extend({actions:{createBook:function(){var a={};a.title=this.get("bookName"),""!=a.title&&(TandemApp.get("socket").emit("addBook",a),this.set("bookName",""))}}})}),TandemApplication.reopen({BookController:Ember.ArrayController.extend({content:[],intervalID:!1,init:function(){var a=this;TandemApp.get("socket").emit("getAllBooks"),TandemApp.get("socket").on("foundBooks",function(b){b.forEach(function(b){a.addBook(b)})}),TandemApp.get("socket").on("bookAdded",function(b){a.addBook(b)}),TandemApp.get("socket").on("bookDeleted",function(b){if(""!==b._id){var c=a.get("content").filterProperty("id",b._id);c.length>0&&a.get("content").removeObject(c[0])}}),TandemApp.get("socket").on("chapterCreated",function(b){a.get("content").forEach(function(a){if(a.get("id")===b._id){var c=Ember.Object.create({title:b.title,number:b.idx});a.get("chapterObjects.content").pushObject(c)}})}),TandemApp.get("socket").on("viewChapter",function(b){a.set("book.chapterContentOld",b.contents),a.set("book.chapterContentNew",b.contents);var c=function(){var b=new diff_match_patch,d=b.patch_make(a.get("book.chapterContentOld"),a.get("book.chapterContentNew")),e=b.patch_toText(d);e.length&&(TandemApp.get("socket").emit("updateChapter",{_id:a.get("book.id"),idx:a.get("book.currentChapter"),diff:e}),console.log(e),a.set("book.chapterContentOld",a.get("book.chapterContentNew"))),setTimeout(c,500)};setTimeout(c,500)})},addBook:function(a){a.id=a._id,delete a._id,this.get("content").pushObject(TandemApp.BookModel.create(a))},actions:{createChapter:function(){TandemApp.get("socket").emit("addChapter",{_id:this.get("book.id"),title:this.get("newChapterTitle")}),this.set("newChapterTitle","")}}})}),TandemApplication.reopen({AuthorModel:Ember.Object.extend({displayName:function(){var a="Unnamed";return a=this.get("company")||a,a=this.get("login")||a,a=this.get("name")||a}.property("name","login","company"),openUp:function(){this.set("open",!0)},closeUp:function(){this.set("open",!1)}})}),function(){var a=[],b=[],c=!1,d=Ember.Object.extend({chapterContentOld:"",chapterContentNew:"Loading...",chapterObjects:null,init:function(){var b=this;return this.set("chapterObjects",Ember.ArrayController.create({sortProperties:["number"],sortAscending:!0,content:[]})),this.get("chapters").forEach(function(a){b.get("chapterObjects.content").pushObject(Ember.Object.create(a))}),a.push(this),this._super()},displayShortTitle:function(){var a=this.get("title");return a.length>40&&(a=a.substring(0,40)+"..."),a}.property("title"),background:function(){var a=this.get("color")||"#69BFAF";return"background-color:"+a}.property("background"),toggleChapter:function(){this.set("chaptersOpen",!this.get("chaptersOpen"))},deleteBook:function(){var a=confirm("Are you sure you want to delete "+this.title+"?"),b={};b._id=this.get("id"),a&&TandemApp.get("socket").emit("deleteBook",b)},startEditingChapter:function(a){TandemApp.get("socket").emit("getChapter",{_id:this.get("id"),idx:a}),this.set("currentChapter",a)},isOwner:function(){return this.get("owner")===TandemApp.author.get("login")}.property("owner"),realChapters:function(){return console.log(this.get("chapterObjects.arrangedContent")),this.get("chapterObjects.arrangedContent")}.property("chapterObjects.@each")});TandemApplication.reopen({BookModel:d}),d.reopenClass({find:function(d){c||(TandemApp.get("socket").on("viewBook",function(c){c.id=c._id,delete c._id;var d=TandemApp.BookModel.create(c);a.push(d),b.forEach(function(a){a.id===c.id&&a.resolve(d)})}),c=!0);var e;if(a.forEach(function(a){a.get("id")===d&&(e=a)}),!e){var f=$.Deferred();return f.id=d,TandemApp.get("socket").emit("getBook",{_id:d}),b.push(f),f}return e}})}(),TandemApplication.reopen({BookRoute:Ember.Route.extend({setupController:function(a,b){b.set("chaptersOpen",!1),b.startEditingChapter(0),a.set("book",b)}})}),TandemApplication.reopen({IndexRoute:Ember.Route.extend({setupController:function(a){a.set("books",this.controllerFor("book"))}})}),TandemApplication.BaseView=Ember.View.extend({didInsertElement:function(){return this.$().hide(),this.$().fadeIn(),this._super()}}),TandemApplication.reopen({ApplicationView:TandemApplication.BaseView.extend({templateName:"application"})}),TandemApplication.reopen({BookView:TandemApplication.BaseView.extend({init:function(){this._super()},templateName:"book"})}),TandemApplication.reopen({IndexView:TandemApplication.BaseView.extend({templateName:"index"})});var TandemApp=TandemApplication.create({});TandemApp.Router.map(function(){this.resource("book",{path:"/:book_id"})}),TandemApp.initSocket();