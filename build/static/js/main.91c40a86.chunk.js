(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},12:function(e,t,n){e.exports=n(27)},17:function(e,t,n){},19:function(e,t,n){},23:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(10),r=n.n(c),i=(n(17),n(1)),l=n(2),s=n(4),u=n(3),p=n(5),m=n(11),h=n.n(m),d=(n(19),n(7)),f=(n(23),function(e){function t(e,n){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e,n))).state={center:[-.113049,51.498568],zoom:14,fov:0,pitch:0,bearing:0},a.map=null,a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){this.MapInit()}},{key:"componentWillReceiveProps",value:function(){}},{key:"shouldComponentUpdate",value:function(){}},{key:"componentWillUpdate",value:function(){}},{key:"componentDidUpdate",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"MapInit",value:function(){this.map=new d.a("map",{center:this.state.center,zoom:this.state.zoom,baseLayer:new d.b("base",{urlTemplate:"http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",subdomains:["a","b","c","d"],attribution:'&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'})})}},{key:"render",value:function(){return o.a.createElement("div",{id:"map",className:"Map-container"})}}]),t}(a.Component)),v=(n(25),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={date:new Date},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval(function(){return e.tick()},1e3)}},{key:"componentWillMount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){return o.a.createElement("div",{className:"clock-div"},o.a.createElement("h2",null,"Now is \xa0",this.state.date.getFullYear(),"-",this.state.date.getMonth()+1,"-",this.state.date.getDate()," \xa0",this.state.date.getHours(),":",this.state.date.getMinutes(),":",this.state.date.getSeconds()))}}]),t}(a.Component)),k=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).handleClick=function(e){alert("hello react")},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("div",{className:"App-map"},o.a.createElement(f,null)),o.a.createElement("img",{src:h.a,className:"App-logo",alt:"logo"}),o.a.createElement("div",{className:"Bottom-container"},o.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React"),"\xa0\xa0",o.a.createElement("a",{className:"App-link",href:"https://maptalks.org",target:"_blank",rel:"noopener noreferrer"},"Learn Maptalks"),o.a.createElement("div",{className:"App-button",onClick:this.handleClick},"Click Me"),o.a.createElement(v,null))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,2,1]]]);
//# sourceMappingURL=main.91c40a86.chunk.js.map