(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(30)},24:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),o=n(5),i=n.n(o),a=(n(24),n(6)),s=n(7),u=n(10),l=n(8),p=n(11),m=n(3),h=n(9),f=n(2),d=n(18),v={display:"flex",flexDirection:"column"},g={display:"flex",justifyContent:"center",alignItems:"center",marginTop:20,marginBottom:20},y={textAlign:"center",margin:0},C={marginLeft:20,marginRight:20,fontSize:40};function b(){return function(e){return fetch("https://api.github.com/zen").then(function(e){return e.text()}).then(function(t){return e({type:"FETCH_MOTTO",motto:t})})}}var E=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).timer={type:"",intv:null},n.resetTimer=function(){n.timer.type&&(clearInterval(n.timer.intv),n.timer={type:"",intv:null})},n.increase=function(){n.props.cnt<t.MAXCNT&&(n.props.dispatch({type:"INC"}),n.props.dispatch(b()))},n.increasePerSec=function(){"INC"!==n.timer.type&&(n.increase(),n.resetTimer(),n.timer={type:"INC",intv:setInterval(function(){n.increase(),n.props.cnt>=t.MAXCNT&&n.resetTimer()},1e3)})},n.decrease=function(){n.props.cnt>t.MINCNT&&(n.props.dispatch({type:"DEC"}),n.props.dispatch(b()))},n.decreasePerSec=function(){"DEC"!==n.timer.type&&(n.decrease(),n.resetTimer(),n.timer={type:"DEC",intv:setInterval(function(){n.decrease(),n.props.cnt<=t.MINCNT&&n.resetTimer()},1e3)})},n.forceError=function(){n.props.dispatch({type:"THROW_ERROR",errorMsg:"Nothing, just test this catcher. Having fun!"})},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{style:Object(m.a)({},v,{width:150})},c.a.createElement("h2",{style:y},"Counter"),c.a.createElement("div",null,this.props.motto),c.a.createElement("div",{style:g},c.a.createElement("button",{onClick:this.decrease},"-"),c.a.createElement("div",{style:C},this.props.cnt),c.a.createElement("button",{onClick:this.increase},"+")),c.a.createElement("div",{style:g},c.a.createElement("button",{onClick:this.decreasePerSec},"-1/s"),c.a.createElement("button",{onClick:this.increasePerSec},"+1/s")),c.a.createElement("button",{onClick:this.forceError},"kick an error!"))}}]),t}(r.PureComponent);E.MAXCNT=20,E.MINCNT=0;var O=Object(h.b)(function(e){return{cnt:e.counter.cnt,motto:e.motto}})(E),T=(n(29),Object(f.d)(Object(f.c)({env:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errorMsg:""},t=arguments.length>1?arguments[1]:void 0;return"THROW_ERROR"===t.type?Object(m.a)({},e,{errorMsg:t.errorMsg}):e},counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cnt:0};switch((arguments.length>1?arguments[1]:void 0).type){case"INC":return Object(m.a)({},e,{cnt:Math.min(e.cnt+1,O.MAXCNT)});case"DEC":return Object(m.a)({},e,{cnt:Math.max(e.cnt-1,O.MINCNT)});default:return e}},motto:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return"FETCH_MOTTO"===t.type?t.motto:e}}),Object(f.a)(d.a,function(e){return function(t){return function(n){console.log("dispatching",n);var r=t(n);return console.log("next state",e.getState()),r}}},function(e){return function(t){return function(n){try{var r=t(n),c=e.getState();if(c.env.errorMsg)throw new Error(c.env.errorMsg);return r}catch(o){throw o}}}}))),j=function(e){function t(){return Object(a.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(h.a,{store:T},c.a.createElement("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}},c.a.createElement(O,null)))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.a621c0aa.chunk.js.map