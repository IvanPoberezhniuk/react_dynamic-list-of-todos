(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a(22)},19:function(e,t,a){},20:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(4),c=a.n(r),s=(a(19),a(20),a(1)),l=a(5),i=a(2),u=a.n(i),d=a(10),m=a(6),E=a(7),_=a(8),b=a(11),f=a(9),p=a(12),h="https://jsonplaceholder.typicode.com",j=function(){return fetch("".concat(h,"/todos")).then(function(e){return e.json()})},B=function(){return fetch("".concat(h,"/users")).then(function(e){return e.json()})},O=function(e){var t=e.task;return o.a.createElement(o.a.Fragment,null,o.a.createElement("td",{className:"todos__td"},t.id),o.a.createElement("td",{className:"todos__td"},o.a.createElement("input",{className:"todo__checkbox",type:"checkbox",defaultChecked:t.completed})),o.a.createElement("td",{className:"todos__td"},t.title))},T=function(e){var t=e.user;return o.a.createElement(o.a.Fragment,null,o.a.createElement("td",{className:"todos__td"},t.name),o.a.createElement("td",{className:"todos__td"},t.email))},Y={BY_ID:"id",BY_COMPLETE:"completed",BY_TITLE:"title",BY_NAME:"name",BY_EMAIL:"email"},I=function(e){function t(){var e,a;return Object(E.a)(this,t),(a=Object(b.a)(this,Object(f.a)(t).call(this))).loadTodos=function(){var e=Object(m.a)(u.a.mark(function e(t){var n,o,r,c,s;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({buttonInnerText:"Loading...",buttonDisabled:!0}),e.prev=1,e.next=4,Promise.all([j(),B()]);case 4:n=e.sent,o=Object(d.a)(n,2),r=o[0],c=o[1],s=a.joinTodosAndUsers(r,c),a.setState({todos:s,isLoaded:!0}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),a.setState({buttonStyle:"error",buttonInnerText:"".concat(e.t0.message)});case 15:case"end":return e.stop()}},e,null,[[1,12]])}));return function(t){return e.apply(this,arguments)}}(),a.joinTodosAndUsers=function(e,t){return e.map(function(e){return Object(l.a)({},e,{user:t.find(function(t){return t.id===e.userId})})})},a.sortBy=function(e){var t,n=(t={},Object(s.a)(t,Y.BY_ID,function(t,n){return"asc"===a.state.direction[e]?parseFloat(t.id)-parseFloat(n.id):parseFloat(n.id)-parseFloat(t.id)}),Object(s.a)(t,Y.BY_COMPLETE,function(t,n){return"asc"===a.state.direction[e]?t.completed-n.completed:n.completed-t.completed}),Object(s.a)(t,Y.BY_TITLE,function(t,n){return"asc"===a.state.direction[e]?t.title.localeCompare(n.title):n.title.localeCompare(t.title)}),Object(s.a)(t,Y.BY_NAME,function(t,n){return"asc"===a.state.direction[e]?t.user.name.localeCompare(n.user.name):n.user.name.localeCompare(t.user.name)}),Object(s.a)(t,Y.BY_EMAIL,function(t,n){return"asc"===a.state.direction[e]?t.user.email.localeCompare(n.user.email):n.user.email.localeCompare(t.user.email)}),t);return a.state.todos.sort(n[e])},a.state={todos:[],isLoaded:!1,buttonStyle:"",buttonInnerText:"Click...( \u0361\xb0 \u035c\u0296 \u0361\xb0)",sortField:Y.BY_ID,direction:(e={},Object(s.a)(e,Y.BY_ID,"asc"),Object(s.a)(e,Y.BY_COMPLETE,"asc"),Object(s.a)(e,Y.BY_TITLE,"asc"),Object(s.a)(e,Y.BY_NAME,"asc"),Object(s.a)(e,Y.BY_EMAIL,"asc"),e),buttonDisabled:!1},a.handleSort=function(e){a.setState(function(t){return{sortField:e,direction:Object.assign(t.direction,Object(s.a)({},e,"asc"===t.direction[e]?"desc":"asc"))}})},a}return Object(p.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.sortField,n=t.buttonInnerText,r=t.isLoaded,c=t.buttonStyle,s=t.buttonDisabled,l=this.sortBy(a);return o.a.createElement(o.a.Fragment,null,r?o.a.createElement("table",null,o.a.createElement("thead",null,o.a.createElement("tr",{className:"todo__row"},o.a.createElement("th",{className:"todos__th",onClick:function(){return e.handleSort(Y.BY_ID)}},"Id"),o.a.createElement("th",{className:"todos__th",onClick:function(){return e.handleSort(Y.BY_COMPLETE)}},"\u2714"),o.a.createElement("th",{className:"todos__th",onClick:function(){return e.handleSort(Y.BY_TITLE)}},"Title"),o.a.createElement("th",{className:"todos__th",onClick:function(){return e.handleSort(Y.BY_NAME)}},"Name"),o.a.createElement("th",{className:"todos__th",onClick:function(){return e.handleSort(Y.BY_EMAIL)}},"Email"))),o.a.createElement("tbody",null,l.map(function(t){return o.a.createElement("tr",{className:"todo__row",key:t.id},o.a.createElement(O,{task:t,onSort:e.handleSort}),o.a.createElement(T,{user:t.user}))}))):o.a.createElement("button",{className:"loadTodosButton "+c,onClick:this.loadTodos,disabled:s},n))}}]),t}(n.Component);var N=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(I,null))};c.a.render(o.a.createElement(N,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.abb32340.chunk.js.map