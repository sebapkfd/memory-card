(this["webpackJsonpmemory-card"]=this["webpackJsonpmemory-card"]||[]).push([[0],{11:function(e,c,t){},12:function(e,c,t){"use strict";t.r(c);var r=t(0),a=t(1),s=t.n(a),n=t(5),d=t.n(n),l=(t(11),t(2)),o=t(3),i=function(){return Object(r.jsxs)("div",{className:"Title",children:[Object(r.jsx)("h1",{className:"TitleText",children:"Memory Card Game"}),Object(r.jsx)("a",{href:"https://github.com/sebapkfd/memory-card",target:"_blank",rel:"noreferrer",children:Object(r.jsx)("img",{src:"https://img.icons8.com/fluent-systems-filled/24/ffffff/github.png",alt:"Github"})})]})},j=function(e){var c=e.score,t=e.bestScore;return Object(r.jsxs)("div",{className:"ScoreBoard",children:[Object(r.jsxs)("h2",{className:"CurrentScore",children:["Current Score: ",c]}),Object(r.jsxs)("h2",{className:"BestScore",children:["Best Score: ",t]})]})},m=function(e){var c=e.card,t=e.select,a=e.clean,s={color:"white",backgroundColor:"".concat(c.cardName)};return Object(r.jsx)("div",{className:"Card",onClick:function(){c.selected?a():t(c.cardName)},style:s,children:Object(r.jsx)("h3",{children:c.cardName})})},b=function(e){var c=e.setScore,t=e.resetScore,s=e.cards;return Object(a.useEffect)((function(){for(var e=s.length-1;e>0;e--){var c=Math.floor(Math.random()*(e+1)),t=[s[c],s[e]];s[e]=t[0],s[c]=t[1]}}),[s]),Object(r.jsx)("div",{className:"Cardboard",children:s.map((function(e){return Object(r.jsx)(m,{card:e,select:c,clean:t},e.cardName)}))})};var u=function(){var e=Object(a.useState)(0),c=Object(o.a)(e,2),t=c[0],s=c[1],n=Object(a.useState)(0),d=Object(o.a)(n,2),m=d[0],u=d[1],f=Object(a.useState)([{cardName:"Crimson",selected:!1},{cardName:"Navy",selected:!1},{cardName:"Green",selected:!1},{cardName:"Gold",selected:!1},{cardName:"Orange",selected:!1},{cardName:"Purple",selected:!1},{cardName:"Brown",selected:!1},{cardName:"Pink",selected:!1},{cardName:"Gray",selected:!1},{cardName:"Olive",selected:!1},{cardName:"Aqua",selected:!1},{cardName:"Teal",selected:!1}]),O=Object(o.a)(f,2),h=O[0],N=O[1];return Object(a.useEffect)((function(){m<=t&&u(t)}),[m,t]),Object(r.jsxs)("div",{className:"Game",children:[Object(r.jsx)(i,{}),Object(r.jsx)(j,{score:t,bestScore:m}),Object(r.jsx)(b,{score:t,setScore:function(e){var c=h.map((function(c){return c.cardName===e?Object(l.a)(Object(l.a)({},c),{},{selected:!c.selected}):c}));N(c),s(t+1)},resetScore:function(){s(0);var e=h.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{selected:!1})}));N(e)},cards:h})]})};var f=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(u,{})})};d.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(f,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.24a6d41e.chunk.js.map