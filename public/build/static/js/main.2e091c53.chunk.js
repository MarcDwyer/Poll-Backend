(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e,t,a){e.exports=a(316)},111:function(e,t,a){},316:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(64),c=a.n(r),l=(a(111),a(318)),i=a(320),o=a(319);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=a(8),m=a.n(u),p=a(22),d=a(17),h=a(18),f=a(20),v=a(19),b=a(21),E=a(99),y=a.n(E),g=a(317),N=a(14),w=function(e){function t(){return Object(d.a)(this,t),Object(f.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"navbar-fixed"},s.a.createElement("nav",{className:"fixer"},s.a.createElement("div",{className:"nav-flex"},s.a.createElement(g.a,{to:"/",className:"brand-logo left"},"Fetcher's Poll"),s.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},s.a.createElement("li",{className:"dropper"},s.a.createElement(N.Modal,{header:"Welcome to Marc Dwyer's poll app!",trigger:s.a.createElement(N.Button,{className:"dropper-btn"},"Features")},s.a.createElement("ul",null,s.a.createElement("li",{style:{listStyle:"circle",marginLeft:"15px"}},"Web Sockets update you in real time"),s.a.createElement("li",{style:{listStyle:"circle",marginLeft:"15px"}},"Polls saved to Mongodb for persisted data"),s.a.createElement("li",{style:{listStyle:"circle",marginLeft:"15px"}},"Making a poll is so easy you dont even notice how good it is"))))))))}}]),t}(s.a.Component),k=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(f.a)(this,Object(v.a)(t).call(this,e))).handleChange=function(e){a.setState({isChecked:e.target.name})},a.handleSubmit=function(){var e=Object(p.a)(m.a.mark(function e(t){var n,s,r,c;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={_id:a.props.match.params.id,question:a.state.isChecked},e.next=4,fetch("/api/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 4:200===e.sent.status&&(s=a.state,r=s.isChecked,c=s.questions,a.setState({isComplete:!0,submitted:c[r]},function(){a.state.ws.send(JSON.stringify(n)),a.props.history.push("/poll/results/".concat(a.state.questions.Id))}));case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.renderQuestions=function(){var e=a.state.questions;return Object.values(e).filter(function(e){return e.question}).map(function(e,t){var n=e.question;if(n)return s.a.createElement("div",{key:y()(),className:"pollquest"},s.a.createElement(N.Input,{name:"quest".concat(t),type:"radio",checked:a.state.isChecked==="quest".concat(t),onChange:a.handleChange,label:n}))})},a.state={isChecked:"quest0",isComplete:!1,submitted:null,questions:null,ws:new WebSocket("wss://".concat(document.location.host,"/sockets/").concat(a.props.match.params.id))},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentWillUnmount",value:function(){this.state.ws.close()}},{key:"componentDidMount",value:function(){var e=Object(p.a)(m.a.mark(function e(){var t,a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/getpoll",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.props.match.params.id)});case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.setState({questions:a});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){this.state.ws;return this.state.questions?s.a.createElement("div",null,s.a.createElement(w,null),s.a.createElement("div",{className:"contained"},s.a.createElement("div",{className:"poll"},s.a.createElement("h4",null,this.state.questions.title),s.a.createElement("div",{className:"actualpoll"},s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("ul",null,this.renderQuestions()),s.a.createElement("div",{className:"resp-buttons"},s.a.createElement("button",{type:"submit",className:"waves-effect waves-light btn pollbtn"},"Submit Answer!"))))))):s.a.createElement("div",null,s.a.createElement(w,null),s.a.createElement("div",{className:"contained"},s.a.createElement("div",{className:"preloader-wrapper big active"},s.a.createElement("div",{className:"spinner-layer spinner-blue-only"},s.a.createElement("div",{className:"circle-clipper left"},s.a.createElement("div",{className:"circle"})),s.a.createElement("div",{className:"gap-patch"},s.a.createElement("div",{className:"circle"})),s.a.createElement("div",{className:"circle-clipper right"},s.a.createElement("div",{className:"circle"}))))))}}]),t}(n.Component),O=a(48),j=a(105),C=a(9),S=a(49),q=a(100),x=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(f.a)(this,Object(v.a)(t).call(this,e))).handleCB=function(){var e=Object(p.a)(m.a.mark(function e(t){var n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("auth",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:e.sent.success&&a.setState({captcha:!0});case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.handleChange=function(e){a.setState(Object(C.a)({},e.target.name,e.target.value))},a.renderInput=function(){return Object.keys(a.state).filter(function(e){return e.startsWith("quest")}).map(function(e,t){if(t<a.state.number)return s.a.createElement("div",{key:t,className:"row"},s.a.createElement("div",{className:"input-field col s10"},s.a.createElement("input",{value:a.state[e],className:a.state.error?"redder":"",type:"text",name:e,onChange:a.handleChange,placeholder:a.state.error||"Questions #".concat(t+1),autoComplete:"off"})))})},a.handleSubmit=function(){var e=Object(p.a)(m.a.mark(function e(t){var n,s,r,c,l,i,o,u,p;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=a.state,s=n.quest0,r=n.quest1,c=n.title,l=n.captcha,0!==s.length&&0!==r.length&&0!==c.length){e.next=7;break}return a.setState({error:"Please enter questions"}),e.abrupt("return");case 7:if(l){e.next=10;break}return a.setState({error:"Captcha Auth Failed"}),e.abrupt("return");case 10:return i=Object.keys(a.state).filter(function(e){return e.startsWith("quest")}),o=i.filter(function(e){if(a.state[e].length>0)return a.state[e]}).map(function(e){var t;return t={},Object(C.a)(t,e,a.state[e]),Object(C.a)(t,"count",0),t}).reduce(function(e,t,n){var s=Object.keys(t),r=Object(j.a)(s,2),c=r[0],l=r[1];return e[c]=Object(C.a)({question:t[c]},l,0),e.title=a.state.title,e},{}),e.next=14,fetch("/api/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});case 14:return u=e.sent,e.next=17,u.json();case 17:p=e.sent,a.setState({id:p,isComplete:!0,quest0:"",quest1:"",quest2:"",quest3:"",quest4:""});case 19:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.state={error:null,number:2,id:null,title:"",isComplete:!1,copied:!1,captcha:!1},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentWillMount",value:function(){for(var e=this,t=function(t){var a="quest".concat(t);e.setState(function(e){return Object(O.a)({},e,Object(C.a)({},a,""))})},a=0;a<5;a++)t(a)}},{key:"componentDidUpdate",value:function(e,t){var a=this;!function(){var e=a.state.number,t="quest".concat(e-1);if(a.state[t]&&0!==a.state[t].length){for(var n=0,s=Object.keys(a.state).filter(function(e){return e.startsWith("quest")}),r=a.state,c=0;c<r.number;c++)r[s[c]]&&r[s[c]].length>0&&n++;n===a.state.number&&a.setState({number:a.state.number+1})}}()}},{key:"render",value:function(){var e=this;return this.state.isComplete?s.a.createElement("div",null,s.a.createElement(w,null),s.a.createElement("div",{className:"contained"},s.a.createElement("div",{className:"poll"},s.a.createElement("h4",null,"Poll Submitted"),s.a.createElement("i",{className:"fa fa-check"}),s.a.createElement("div",{className:"resp-buttons"},s.a.createElement(g.a,{to:"/poll/survey/".concat(this.state.id),className:"waves-effect waves-light btn pollbtn"},"View Poll"),s.a.createElement(S.CopyToClipboard,Object(C.a)({text:this.state.value,onCopy:function(){return e.setState({copied:!0})}},"text","https://".concat(window.location.host,"/poll/survey/").concat(this.state.id)),s.a.createElement("button",{className:"waves-effect waves-light btn purple accent-1 copy"},"Click to copy post url")))))):s.a.createElement("div",null,s.a.createElement(w,null),s.a.createElement("div",{className:"contained"},s.a.createElement("div",{className:"poll"},s.a.createElement("h4",null,"Create a poll"),s.a.createElement("div",{className:"actualpoll"},s.a.createElement("div",{className:"check"},s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("input",{name:"title",value:this.state.title,type:"text",onChange:this.handleChange,autoComplete:"off",className:this.state.error?"redder":""}),s.a.createElement("label",{className:"active"},"Enter a title"))),s.a.createElement("ul",{className:"marginthis"},this.renderInput()),s.a.createElement("div",{className:"resp-buttons"},s.a.createElement(q.ReCaptcha,{sitekey:"6LeMcYUUAAAAALOdfvlBa3Fv6rwnM7G6Id_ks2Ao",action:"action_name",verifyCallback:this.handleCB}),s.a.createElement("button",{className:"waves-effect waves-light btn pollbtn"},"Submit poll"))))))))}}]),t}(n.Component),D=a(101),T=a.n(D),W=a(102),M=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(f.a)(this,Object(v.a)(t).call(this,e))).renderResults=function(){var e=a.state.questions;if(!e)return s.a.createElement("li",{className:"thevotes"},s.a.createElement("span",null,"Loading results..."));var t=Object.values(e).filter(function(e){return e.question}),n=t.map(function(e){return e.question}),r=t.map(function(e){return e.count}),c=t.reduce(function(e,t){return e+t.count},0),l={labels:n,datasets:[{label:e.title,backgroundColor:"rgba(153,210,227,0.4)",borderColor:"rgba(122,168,181,1)",borderWidth:1,hoverBackgroundColor:"rgba(153,210,227,.85)",hoverBorderColor:"rgba(122,168,181,1)",data:r}]},i={scales:{yAxes:[{ticks:{beginAtZero:!0,suggestedMin:0,suggestedMax:c,stepSize:1}}]}};return s.a.createElement(W.a,{data:l,options:i})},a.state={questions:null,ws:new WebSocket("wss://".concat(document.location.host,"/sockets/").concat(a.props.match.params.id)),socketData:null},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentWillUnmount",value:function(){this.state.ws.close()}},{key:"componentDidMount",value:function(){var e=Object(p.a)(m.a.mark(function e(){var t,a,n=this;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.state.ws.addEventListener("message",function(e){n.setState({socketData:JSON.parse(e.data)})}),e.next=3,fetch("/api/getpoll",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.props.match.params.id)});case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,this.setState({questions:a});case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(e,t){var a=this.state,n=a.socketData,s=a.questions;if(n&&n._id===this.props.match.params.id&&t.socketData!==this.state.socketData){var r=n.question,c=s[n.question];c.count=c.count+1;var l=T()(this.state,{questions:Object(C.a)({},r,{$set:Object(O.a)({},c)})});this.setState(l)}}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement(w,null),s.a.createElement("div",{className:"contained"},s.a.createElement("div",{className:"poll"},s.a.createElement("h4",null,"The results are in!"),s.a.createElement("div",{className:"actualpoll"},s.a.createElement("div",{className:"check"},s.a.createElement("ul",null,this.renderResults())),s.a.createElement("div",{className:"resp-buttons"},s.a.createElement(g.a,{to:"/",className:"waves-effect waves-light btn pollbtn"},"Create new poll"),s.a.createElement("div",{className:"share"},s.a.createElement(N.Dropdown,{trigger:s.a.createElement(N.Button,{className:"btn purple accent-1"},"Share")},s.a.createElement(S.CopyToClipboard,Object(C.a)({text:this.state.value,onCopy:function(){return e.setState({copied:!0})}},"text","https://".concat(document.location.host,"/poll/survey/").concat(this.props.match.params.id)),s.a.createElement(N.NavItem,null,"Copy url")))))))))}}]),t}(n.Component);c.a.render(s.a.createElement(l.a,null,s.a.createElement(i.a,null,s.a.createElement(o.a,{exact:!0,path:"/poll/survey/:id",component:k}),s.a.createElement(o.a,{exact:!0,path:"/poll/results/:id",component:M}),s.a.createElement(o.a,{path:"/",component:x}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[106,2,1]]]);
//# sourceMappingURL=main.2e091c53.chunk.js.map