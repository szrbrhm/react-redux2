(this["webpackJsonpreact-redux2"]=this["webpackJsonpreact-redux2"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),u=n(5),o=n.n(u),a=(n(14),n(15),n(4)),b=n(2),i="SELL_LAPTOP",s="SELL_PHONE",j="SELL_WATCH",O="SELL_COMP",l=n(1),p=function(){var e=Object(r.useState)(1),t=Object(a.a)(e,2),n=t[0],c=t[1],u=Object(b.d)((function(e){return e.computer.numberOfComputers})),o=Object(b.c)();return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h2",{children:"Computers -- Hooks ---"}),Object(l.jsxs)("h3",{children:["Number Of Computer : ",u]}),Object(l.jsx)("input",{type:"number",value:n,onChange:function(e){return c(e.target.value)}}),Object(l.jsx)("button",{onClick:function(){return o(function(){return{type:O,payload:arguments.length>0&&void 0!==arguments[0]?arguments[0]:1}}(n))},children:"Sell Computer"})]})},h=Object(b.b)((function(e){return{numberOfLaptops:e.laptop.numberOfLaptops}}),(function(e){return{sellLaptop:function(t){return e(function(){return{type:i,payload:arguments.length>0&&void 0!==arguments[0]?arguments[0]:1}}(t))}}}))((function(e){var t=Object(r.useState)(1),n=Object(a.a)(t,2),c=n[0],u=n[1];return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h2",{children:"Laptops Pure Redux"}),Object(l.jsxs)("h3",{children:["Number Of Laptops : ",e.numberOfLaptops]}),Object(l.jsx)("input",{type:"number",value:c,onChange:function(e){return u(e.target.value)}}),Object(l.jsx)("button",{onClick:function(){return e.sellLaptop(c)},children:"Sell Laptop"})]})})),d=function(){var e=Object(r.useState)(1),t=Object(a.a)(e,2),n=t[0],c=t[1],u=Object(b.d)((function(e){return e.phone.numberOfPhone})),o=Object(b.c)();return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h2",{children:"Phones -- Hooks ---"}),Object(l.jsxs)("h3",{children:["Number Of Phones : ",u]}),Object(l.jsx)("input",{type:"number",value:n,onChange:function(e){return c(e.target.value)}}),Object(l.jsx)("button",{onClick:function(){return o(function(){return{type:s,payload:arguments.length>0&&void 0!==arguments[0]?arguments[0]:1}}(n))},children:"Sell Phone"})]})},f=function(){var e=Object(r.useState)(1),t=Object(a.a)(e,2),n=t[0],c=t[1],u=Object(b.d)((function(e){return e.watch.numberOfWatch})),o=Object(b.c)();return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h2",{children:"Watch -- Hooks ---"}),Object(l.jsxs)("h3",{children:["Number Of Watches : ",u]}),Object(l.jsx)("input",{type:"number",value:n,onChange:function(e){return c(e.target.value)}}),Object(l.jsx)("button",{onClick:function(){return o(function(){return{type:j,payload:arguments.length>0&&void 0!==arguments[0]?arguments[0]:1}}(n))},children:"Sell Watch"})]})};var m=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Clarus Shop"}),Object(l.jsx)(h,{}),Object(l.jsx)(d,{}),Object(l.jsx)(p,{}),Object(l.jsx)(f,{})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,u=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),u(e),o(e)}))},x=n(8),g=n(3),L={numberOfComputers:400},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;return t.type===O?Object(g.a)(Object(g.a)({},e),{},{numberOfComputers:e.numberOfComputers-t.payload}):e},C={numberOfLaptops:100},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;return t.type===i?(e.numberOfLaptops>0?e.numberOfLaptops=e.numberOfLaptops-t.payload:alert("0'dan k\xfcc\xfck olamaz"),Object(g.a)({},e)):e},P={numberOfPhone:200},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;return t.type===s?Object(g.a)(Object(g.a)({},e),{},{numberOfPhone:e.numberOfPhone-t.payload}):e},N={numberOfWatch:300},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;return t.type===j?Object(g.a)(Object(g.a)({},e),{},{numberOfWatch:e.numberOfWatch-t.payload}):e},E=Object(x.a)({laptop:S,phone:k,computer:y,watch:W}),H=Object(x.b)(E);o.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(b.a,{store:H,children:Object(l.jsx)(m,{})})}),document.getElementById("root")),v()}},[[23,1,2]]]);
//# sourceMappingURL=main.dfb8d230.chunk.js.map