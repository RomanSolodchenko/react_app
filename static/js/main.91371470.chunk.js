(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{30:function(e,t,s){},31:function(e,t,s){},32:function(e,t,s){},33:function(e,t,s){},35:function(e,t,s){},41:function(e,t,s){},42:function(e,t,s){},43:function(e,t,s){},44:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),a=s(21),i=s.n(a),r=(s(30),s(11)),j=s(12),l=s(15),d=s(14),b=(s(31),s(32),s(25)),o=(s(33),s(0)),h=function(){var e=(new Date).toLocaleTimeString(),t=Object(c.useState)(e),s=Object(b.a)(t,2),n=s[0],a=s[1];return setInterval((function(){e=(new Date).toLocaleTimeString(),a(e)}),1e3),Object(o.jsx)("h1",{className:"Time",children:n})},O=function(){return Object(o.jsx)("div",{className:"Header",children:Object(o.jsxs)("div",{className:"Header_logo",children:[Object(o.jsx)("div",{className:"Header_logo_img",children:Object(o.jsx)("img",{className:"Header_logo_img_i",src:"./Images/Logo.png",alt:"header_logo"})}),Object(o.jsx)("div",{className:"Header_logo_text",children:"DAY BOOK"}),Object(o.jsx)("div",{children:Object(o.jsx)(h,{})})]})})},m=(s(35),s(8)),x=function(){return Object(o.jsxs)("div",{className:"Sidebar",children:[Object(o.jsx)("div",{className:"Sidebar_nav",children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(m.b,{to:"/News",children:" News "})}),Object(o.jsx)("li",{children:Object(o.jsx)(m.b,{to:"/Todo",children:" Todo"})}),Object(o.jsx)("li",{children:Object(o.jsx)(m.b,{to:"/Crypto",children:" Crypto"})})]})}),Object(o.jsx)("hr",{})]})},u=s(2),p=s(19),v=s(24),g=(s(41),function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var c;return Object(r.a)(this,s),(c=t.call(this,e)).state={newItem:"",list:[]},c}return Object(j.a)(s,[{key:"updateInput",value:function(e,t){this.setState(Object(v.a)({},e,t))}},{key:"addItem",value:function(){var e={id:1+Math.random(),value:this.state.newItem.slice()},t=Object(p.a)(this.state.list);t.push(e),this.setState({list:t,newItem:""})}},{key:"deleteItem",value:function(e){var t=Object(p.a)(this.state.list).filter((function(t){return t.id!==e}));this.setState({list:t})}},{key:"render",value:function(){var e=this;return Object(o.jsx)("div",{className:"App_block",children:Object(o.jsx)("div",{className:"AppTodo",children:Object(o.jsxs)("div",{className:"TodoContent",children:[Object(o.jsx)("div",{className:"TodoHeader",children:"To-Do list"}),Object(o.jsx)("br",{}),Object(o.jsxs)("div",{className:"TodoInput",children:[Object(o.jsx)("input",{className:"Input",type:"text",placeholder:"Enter",value:this.state.newItem,onChange:function(t){return e.updateInput("newItem",t.target.value)}}),Object(o.jsx)("button",{className:"btn-in",onClick:function(){return e.addItem()},children:"Add"})]}),Object(o.jsx)("br",{}),Object(o.jsx)("ul",{children:this.state.list.map((function(t){return Object(o.jsxs)("li",{className:"Output",children:[t.value,Object(o.jsx)("button",{className:"btn-del",onClick:function(){return e.deleteItem(t.id)},children:"Delete"})]},t.id)}))})]})})})}}]),s}(c.Component)),N=(s(42),function(){return Object(o.jsx)("div",{className:"News_block",children:Object(o.jsx)("div",{className:"News",children:Object(o.jsxs)("div",{className:"NewsCard",children:[Object(o.jsxs)("div",{className:"Card_1",children:[Object(o.jsx)("span",{className:"Card_title",children:"Bloknot-Taganrog"}),Object(o.jsxs)("div",{class:"contacts",children:[Object(o.jsxs)("div",{className:"icon",children:[Object(o.jsx)("img",{src:"Images/web.png",alt:"web-link"}),Object(o.jsx)("a",{href:"https://bloknot-taganrog.ru/"})]}),Object(o.jsxs)("div",{className:"icon",children:[Object(o.jsx)("img",{src:"Images/instagram.png",alt:"instagram-link"}),Object(o.jsx)("a",{href:"https://www.instagram.com/bloknot.taganrog/"})]})]})]}),Object(o.jsxs)("div",{className:"Card_2",children:[Object(o.jsx)("span",{className:"Card_title",children:"LIfe-News"}),Object(o.jsxs)("div",{class:"contacts",children:[Object(o.jsxs)("div",{className:"icon",children:[Object(o.jsx)("img",{src:"Images/web.png",alt:"web-link"}),Object(o.jsx)("a",{href:"https://life.ru/"})]}),Object(o.jsxs)("div",{className:"icon",children:[Object(o.jsx)("img",{src:"Images/instagram.png",alt:"instagram-link"}),Object(o.jsx)("a",{href:"https://www.instagram.com/lifenews_ru/"})]})]})]}),Object(o.jsxs)("div",{className:"Card_3",children:[Object(o.jsx)("span",{className:"Card_title",children:"Rbc"}),Object(o.jsx)("div",{class:"contacts",children:Object(o.jsxs)("div",{className:"icon",children:[Object(o.jsx)("img",{src:"Images/web.png",alt:"web-link"}),Object(o.jsx)("a",{href:"https://www.rbc.ru/"})]})})]}),Object(o.jsxs)("div",{className:"Card_4",children:[Object(o.jsx)("span",{className:"Card_title",children:"Habr-news"}),Object(o.jsx)("div",{class:"contacts",children:Object(o.jsxs)("div",{className:"icon",children:[Object(o.jsx)("img",{src:"Images/web.png",alt:"web-link"}),Object(o.jsx)("a",{href:"https://habr.com/ru/news/"})]})})]}),Object(o.jsxs)("div",{className:"Card_5",children:[Object(o.jsx)("span",{className:"Card_title",children:"Cryptocurrency-news"}),Object(o.jsx)("div",{class:"contacts",children:Object(o.jsxs)("div",{className:"icon",children:[Object(o.jsx)("img",{src:"Images/web.png",alt:"web-link"}),Object(o.jsx)("a",{href:"https://ru.investing.com/news/cryptocurrency-news"})]})})]}),Object(o.jsxs)("div",{className:"Card_6",children:[Object(o.jsx)("span",{className:"Card_title",children:"BBC-travel"}),Object(o.jsx)("div",{class:"contacts",children:Object(o.jsxs)("div",{className:"icon",children:[Object(o.jsx)("img",{src:"Images/web.png",alt:"web-link"}),Object(o.jsx)("a",{href:"https://www.bbc.com/travel"})]})})]})]})})})}),w=(s(43),function(){return Object(o.jsx)("div",{className:"News_block"})}),f=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(j.a)(s,[{key:"render",value:function(){return Object(o.jsx)(m.a,{basename:"/",children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(O,{}),Object(o.jsx)(x,{}),Object(o.jsxs)("div",{children:[Object(o.jsx)(u.a,{exact:!0,path:"/Todo",component:g}),Object(o.jsx)(u.a,{exact:!0,path:"/News",component:N}),Object(o.jsx)(u.a,{path:"/Crypto",component:w})]})]})})}}]),s}(c.Component),C=f,I=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,45)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;s(e),c(e),n(e),a(e),i(e)}))};i.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(C,{})}),document.getElementById("root")),I()}},[[44,1,2]]]);
//# sourceMappingURL=main.91371470.chunk.js.map