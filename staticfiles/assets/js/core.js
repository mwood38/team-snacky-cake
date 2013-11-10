Ember.TEMPLATES.application=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f,h="";return b.buffer.push('\n            <div class="backdrop" '),e={target:a},f={target:"STRING"},b.buffer.push(l(c.action.call(a,"closeUp",{hash:{target:"TandemApp.author"},contexts:[a],types:["ID"],hashContexts:e,hashTypes:f,data:b}))),b.buffer.push('></div>\n            <div class="userbox">\n                <img '),e={src:a},f={src:"STRING"},b.buffer.push(l(c.bindAttr.call(a,{hash:{src:"TandemApp.author.avatar_url"},contexts:[],types:[],hashContexts:e,hashTypes:f,data:b}))),b.buffer.push(' width="80" height="80">\n                <p>\n                    <strong>'),f={},e={},b.buffer.push(l(c._triageMustache.call(a,"TandemApp.author.displayName",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:f,data:b}))),b.buffer.push("</strong><br>\n                    "),f={},e={},d=c["if"].call(a,"TandemApp.author.email",{hash:{},inverse:m.noop,fn:m.program(2,g,b),contexts:[a],types:["ID"],hashContexts:e,hashTypes:f,data:b}),(d||0===d)&&b.buffer.push(d),b.buffer.push('\n                    <a href="/logout">Logout</a>\n                </p>\n            </div>\n        '),h}function g(a,b){var d,e,f="";return b.buffer.push("\n                        "),d={},e={},b.buffer.push(l(c._triageMustache.call(a,"TandemApp.author.email",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push("<br>\n                    "),f}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var h,i,j,k="",l=this.escapeExpression,m=this;return e.buffer.push('<header>\n    <div class="container">\n        <img src="/assets/img/logo_md.png" style="margin-right:20px;float:left;">\n        <h2>\n            Tandem\n        </h2>\n        <h4>\n            Collaborative Writing '),e.buffer.push('\n        </h4>\n        <a href="javascript:;" class="userboxanchor" '),i={target:b},j={target:"STRING"},e.buffer.push(l(c.action.call(b,"openUp",{hash:{target:"TandemApp.author"},contexts:[b],types:["ID"],hashContexts:i,hashTypes:j,data:e}))),e.buffer.push(">&gt; "),j={},i={},e.buffer.push(l(c._triageMustache.call(b,"TandemApp.author.displayName",{hash:{},contexts:[b],types:["ID"],hashContexts:i,hashTypes:j,data:e}))),e.buffer.push("</a>\n        "),j={},i={},h=c["if"].call(b,"TandemApp.author.open",{hash:{},inverse:m.noop,fn:m.program(1,f,e),contexts:[b],types:["ID"],hashContexts:i,hashTypes:j,data:e}),(h||0===h)&&e.buffer.push(h),e.buffer.push('\n    </div>\n</header>\n\n<div class="container">\n\n'),j={},i={},e.buffer.push(l(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashContexts:i,hashTypes:j,data:e}))),e.buffer.push("\n\n</div>"),k}),Ember.TEMPLATES.index=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f="";return b.buffer.push('\n		<div class="book col-lg-2 col-md-3 col-sm-4 col-xs-6" '),d={style:a},e={style:"STRING"},b.buffer.push(m(c.bindAttr.call(a,{hash:{style:"book.background"},contexts:[],types:[],hashContexts:d,hashTypes:e,data:b}))),b.buffer.push('>\n			<p class="title">'),e={},d={},b.buffer.push(m(c._triageMustache.call(a,"book.displayShortTitle",{hash:{},contexts:[a],types:["ID"],hashContexts:d,hashTypes:e,data:b}))),b.buffer.push('</p>\n			<p class="author">'),e={},d={},b.buffer.push(m(c._triageMustache.call(a,"book.owner",{hash:{},contexts:[a],types:["ID"],hashContexts:d,hashTypes:e,data:b}))),b.buffer.push("</p>\n		</div>\n	"),f}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var g,h,i,j,k,l="",m=this.escapeExpression,n=c.helperMissing,o=this;return e.buffer.push('\n\n<div class="col-md-6 col-sm-6 col-xs-6 add-book-form">\n    <div class="input-group">\n        '),i={value:b,type:b,"class":b,placeholder:b},j={value:"ID",type:"STRING","class":"STRING",placeholder:"STRING"},k={hash:{value:"bookName",type:"text","class":"form-control",placeholder:"New Book Title"},contexts:[],types:[],hashContexts:i,hashTypes:j,data:e},e.buffer.push(m((g=c.input||b.input,g?g.call(b,k):n.call(b,"input",k)))),e.buffer.push("\n        <span class=\"input-group-btn\">\n            <button id=\"addBook\" class='btn btn-default' type='button' "),j={},i={},e.buffer.push(m(c.action.call(b,"createBook",{hash:{},contexts:[b],types:["STRING"],hashContexts:i,hashTypes:j,data:e}))),e.buffer.push('>Create</button>\n        </span>\n    </div>\n</div>\n\n<div class="bookList">\n    <h3>Works in Progress:</h3>\n	'),j={},i={},h=c.each.call(b,"book","in","controller.books.content",{hash:{},inverse:o.noop,fn:o.program(1,f,e),contexts:[b,b,b],types:["ID","ID","ID"],hashContexts:i,hashTypes:j,data:e}),(h||0===h)&&e.buffer.push(h),e.buffer.push("\n</div>\n"),l}),Ember.TEMPLATES.monkey=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{},e.buffer.push("<h1>MONKEY</h1>")});var TandemApplication=Ember.Application.extend({initSocket:function(){var a=this;this.set("socket",io.connect()),this.get("socket").on("setupUser",function(b){a.set("author",a.AuthorModel.create(b._json))})}});TandemApplication.reopen({IndexController:Ember.ArrayController.extend({actions:{createBook:function(){var a={};a.title=this.get("bookName"),""!=a.title&&TandemApp.get("socket").emit("addBook",a)}}})}),TandemApplication.reopen({BookController:Ember.ArrayController.extend({content:[],init:function(){var a=this;TandemApp.get("socket").emit("getAllBooks"),TandemApp.get("socket").on("foundBooks",function(b){b.forEach(function(b){a.get("content").pushObject(TandemApp.BookModel.create(b))})})}})}),TandemApplication.reopen({AuthorModel:Ember.Object.extend({displayName:function(){var a="Unnamed";return a=this.get("company")||a,a=this.get("login")||a,a=this.get("name")||a}.property("name","login","company"),openUp:function(){this.set("open",!0)},closeUp:function(){this.set("open",!1)}})}),TandemApplication.reopen({BookModel:Ember.Object.extend({displayShortTitle:function(){var a=this.get("title");return a.length>40&&(a=a.substring(0,40)+"..."),a}.property("title"),background:function(){return colors=["#A6592D","#A64029","#400101","#A62929","#57493E","#E4DDBD","#A6A38C","#316481","#437DA5"],background="background-color:",background+=colors[Math.floor(Math.random()*colors.length)]}.property("background")})}),TandemApplication.reopen({IndexRoute:Ember.Route.extend({setupController:function(a){a.set("books",this.controllerFor("book"))}})}),TandemApplication.BaseView=Ember.View.extend({didInsertElement:function(){return this.$().hide(),this.$().fadeIn(),this._super()}}),TandemApplication.reopen({ApplicationView:TandemApplication.BaseView.extend({templateName:"application"})}),TandemApplication.reopen({IndexView:TandemApplication.BaseView.extend({templateName:"index"})});var TandemApp=TandemApplication.create({});TandemApp.Router.map(function(){}),TandemApp.initSocket();