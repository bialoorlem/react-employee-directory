(this.webpackJsonpreactemployeedirectory=this.webpackJsonpreactemployeedirectory||[]).push([[0],{42:function(e,t,a){e.exports=a(72)},47:function(e,t,a){},48:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},49:function(e,t,a){},67:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(12),o=a.n(r);a(47),a(48),a(49);var c=function(){return l.a.createElement("footer",null,l.a.createElement("p",{id:"example"},"Made by Elliot Trejo"))},u=a(21),i=a(22),m=a(35),s=a.n(m);function d(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)([]),c=Object(i.a)(o,2);c[0],c[1];return Object(n.useEffect)((function(){s.a.get("https://randomuser.me/api/?results=5").then((function(e){console.log("res",e.data.results),r(e.data.results)}))}),[]),console.log("data >>>>> ",a),l.a.createElement("table",{class:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("button",{onClick:function(){console.log("name array",a),r(function(e){return e.sort((function(e,t){return e.name.first<t.name.first?-1:1})),console.log(e),Object(u.a)(e)}(a))}}),"First Name"),l.a.createElement("td",null,"Last Name"),l.a.createElement("td",null,"UID"),l.a.createElement("td",null,"Gender"),l.a.createElement("td",null,"E-mail"),l.a.createElement("td",null,l.a.createElement("button",{onClick:function(){console.log("first array",a),r(function(e){return e.sort((function(e,t){return e.dob.age<t.dob.age?-1:1})),console.log(e),Object(u.a)(e)}(a))}}),"Age"))),l.a.createElement("tbody",null,a.map((function(e){return l.a.createElement("tr",{key:e.login.uuid},l.a.createElement("td",null,e.name.first),l.a.createElement("td",null,e.name.last),l.a.createElement("td",null,e.login.uuid),l.a.createElement("td",null,e.gender),l.a.createElement("td",null,e.email),l.a.createElement("td",null,e.dob.age))}))))}var E=a(76),f=a(78),g=a(77),p=a(41),b=a(75);a(67);var h=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(E.a,{bg:"dark",variant:"dark"},l.a.createElement(E.a.Brand,{href:"#home"},"Welcome to the Employee Directory"),l.a.createElement(f.a,{className:"mr-auto"}),l.a.createElement(g.a,{inline:!0},l.a.createElement(p.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),l.a.createElement(b.a,{variant:"outline-info"},"Search"))),l.a.createElement(d,null),l.a.createElement(c,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(71);o.a.render(l.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[42,1,2]]]);
//# sourceMappingURL=main.5a258d39.chunk.js.map