(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{30:function(e,t,s){},31:function(e,t,s){},32:function(e,t,s){},33:function(e,t,s){},35:function(e,t,s){},36:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){},44:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),a=s(16),i=s.n(a),r=(s(30),s(31),s(32),s(24)),l=(s(33),s(0)),j=function(){var e=(new Date).toLocaleTimeString(),t=Object(c.useState)(e),s=Object(r.a)(t,2),n=s[0],a=s[1];return setInterval((function(){e=(new Date).toLocaleTimeString(),a(e)}),1e3),Object(l.jsx)("h1",{className:"Time",children:n})},d=function(){return Object(l.jsx)("div",{className:"Header",children:Object(l.jsxs)("div",{className:"Header_logo",children:[Object(l.jsx)("div",{className:"Header_logo_img",children:Object(l.jsx)("img",{className:"Header_logo_img_i",src:"./Images/Logo.png",alt:"header_logo"})}),Object(l.jsx)("div",{className:"Header_logo_text",children:"DAY BOOK+"}),Object(l.jsx)("div",{children:Object(l.jsx)(j,{})})]})})},b=(s(35),function(){return Object(l.jsxs)("div",{className:"Sidebar",children:[Object(l.jsx)("div",{className:"Sidebar_nav",children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"/News",children:" News"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"/Todo",children:" Todo"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"/Crypto",children:" Crypto"})})]})}),Object(l.jsx)("hr",{})]})}),o=s(20),h=s(2),O=s(14),m=s(17),x=s(18),u=s(19),p=s(25),v=s(23),g=(s(36),function(e){Object(p.a)(s,e);var t=Object(v.a)(s);function s(e){var c;return Object(x.a)(this,s),(c=t.call(this,e)).state={newItem:"",list:[]},c}return Object(u.a)(s,[{key:"updateInput",value:function(e,t){this.setState(Object(m.a)({},e,t))}},{key:"addItem",value:function(){var e={id:1+Math.random(),value:this.state.newItem.slice()},t=Object(O.a)(this.state.list);t.push(e),this.setState({list:t,newItem:""})}},{key:"deleteItem",value:function(e){var t=Object(O.a)(this.state.list).filter((function(t){return t.id!==e}));this.setState({list:t})}},{key:"render",value:function(){var e=this;return Object(l.jsx)("div",{className:"App_block",children:Object(l.jsx)("div",{className:"AppTodo",children:Object(l.jsxs)("div",{className:"TodoContent",children:[Object(l.jsx)("div",{className:"TodoHeader",children:"To-Do list"}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{className:"TodoInput",children:[Object(l.jsx)("input",{className:"Input",type:"text",placeholder:"Enter",value:this.state.newItem,onChange:function(t){return e.updateInput("newItem",t.target.value)}}),Object(l.jsx)("button",{className:"btn-in",onClick:function(){return e.addItem()},children:"Add"})]}),Object(l.jsx)("br",{}),Object(l.jsx)("ul",{children:this.state.list.map((function(t){return Object(l.jsxs)("li",{className:"Output",children:[t.value,Object(l.jsx)("button",{className:"btn-del",onClick:function(){return e.deleteItem(t.id)},children:"Delete"})]},t.id)}))})]})})})}}]),s}(c.Component)),N=(s(37),function(){return Object(l.jsx)("div",{className:"News_block",children:Object(l.jsx)("div",{className:"News",children:Object(l.jsxs)("div",{className:"NewsCard",children:[Object(l.jsxs)("div",{className:"Card_1",children:[Object(l.jsx)("span",{className:"Card_title",children:"Bloknot-Taganrog"}),Object(l.jsxs)("div",{class:"contacts",children:[Object(l.jsxs)("div",{className:"icon",children:[Object(l.jsx)("img",{src:"Images/web.png",alt:"web-link"}),Object(l.jsx)("a",{href:"https://bloknot-taganrog.ru/"})]}),Object(l.jsxs)("div",{className:"icon",children:[Object(l.jsx)("img",{src:"Images/instagram.png",alt:"instagram-link"}),Object(l.jsx)("a",{href:"https://www.instagram.com/bloknot.taganrog/"})]})]})]}),Object(l.jsxs)("div",{className:"Card_2",children:[Object(l.jsx)("span",{className:"Card_title",children:"LIfe-News"}),Object(l.jsxs)("div",{class:"contacts",children:[Object(l.jsxs)("div",{className:"icon",children:[Object(l.jsx)("img",{src:"Images/web.png",alt:"web-link"}),Object(l.jsx)("a",{href:"https://life.ru/"})]}),Object(l.jsxs)("div",{className:"icon",children:[Object(l.jsx)("img",{src:"Images/instagram.png",alt:"instagram-link"}),Object(l.jsx)("a",{href:"https://www.instagram.com/lifenews_ru/"})]})]})]}),Object(l.jsxs)("div",{className:"Card_3",children:[Object(l.jsx)("span",{className:"Card_title",children:"Rbc"}),Object(l.jsx)("div",{class:"contacts",children:Object(l.jsxs)("div",{className:"icon",children:[Object(l.jsx)("img",{src:"Images/web.png",alt:"web-link"}),Object(l.jsx)("a",{href:"https://www.rbc.ru/"})]})})]}),Object(l.jsxs)("div",{className:"Card_4",children:[Object(l.jsx)("span",{className:"Card_title",children:"Habr-news"}),Object(l.jsx)("div",{class:"contacts",children:Object(l.jsxs)("div",{className:"icon",children:[Object(l.jsx)("img",{src:"Images/web.png",alt:"web-link"}),Object(l.jsx)("a",{href:"https://habr.com/ru/news/"})]})})]}),Object(l.jsxs)("div",{className:"Card_5",children:[Object(l.jsx)("span",{className:"Card_title",children:"Cryptocurrency-news"}),Object(l.jsx)("div",{class:"contacts",children:Object(l.jsxs)("div",{className:"icon",children:[Object(l.jsx)("img",{src:"Images/web.png",alt:"web-link"}),Object(l.jsx)("a",{href:"https://ru.investing.com/news/cryptocurrency-news"})]})})]}),Object(l.jsxs)("div",{className:"Card_6",children:[Object(l.jsx)("span",{className:"Card_title",children:"BBC-travel"}),Object(l.jsx)("div",{class:"contacts",children:Object(l.jsxs)("div",{className:"icon",children:[Object(l.jsx)("img",{src:"Images/web.png",alt:"web-link"}),Object(l.jsx)("a",{href:"https://www.bbc.com/travel"})]})})]})]})})})}),w=(s(38),function(){return Object(l.jsx)("div",{className:"News_block"})}),f=function(){return Object(l.jsx)(o.a,{children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(d,{}),Object(l.jsx)(b,{}),Object(l.jsxs)("div",{children:[Object(l.jsx)(h.a,{path:"/Todo",component:g}),Object(l.jsx)(h.a,{path:"/News",component:N}),Object(l.jsx)(h.a,{path:"/Crypto",component:w})]})]})})},C=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,45)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;s(e),c(e),n(e),a(e),i(e)}))};i.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),C()}},[[44,1,2]]]);
//# sourceMappingURL=main.9bb886b6.chunk.js.map