(this.webpackJsonpclock=this.webpackJsonpclock||[]).push([[0],{12:function(e,t,n){e.exports=n(23)},17:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(7),s=n.n(c),r=(n(17),n(8)),i=n(9),l=n(11),u=n(10),m=n(3),d=n(2),h=function(e){var t=e.title.toLowerCase();return o.a.createElement("div",{className:"timer-container"},o.a.createElement("h2",{id:"".concat(t,"-label")},e.title," Length"),o.a.createElement("div",{className:"flex actions-wrapper"},o.a.createElement("button",{id:"".concat(t,"-decrement"),onClick:e.handleDecrease},o.a.createElement(m.a,{icon:d.a})),o.a.createElement("span",{id:"".concat(t,"-length")},e.count),o.a.createElement("button",{id:"".concat(t,"-increment"),onClick:e.handleIncrease},o.a.createElement(m.a,{icon:d.d}))))},k=document.getElementById("beep"),C=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).state={breakCount:5,sessionCount:25,clockCount:1500,currentTimer:"Session",isPlaying:!1},e.handlePlayPause=function(){e.state.isPlaying?(clearInterval(e.loop),e.setState({isPlaying:!1})):(e.setState({isPlaying:!0}),e.loop=setInterval((function(){var t=e.state,n=t.clockCount,a=t.currentTimer,o=t.breakCount,c=t.sessionCount;0===n?(e.setState({currentTimer:"Session"===a?"Break":"Session",clockCount:"Session"===a?60*o:60*c}),k.play()):e.setState({clockCount:n-1})}),1e3))},e.handleReset=function(){e.setState({breakCount:5,sessionCount:25,clockCount:1500,currentTimer:"Session",isPlaying:!1}),clearInterval(e.loop),k.pause(),k.currentTime=0},e.convertToTime=function(e){var t=Math.floor(e/60),n=e%60;return n=n<10?"0"+n:n,"".concat(t=t<10?"0"+t:t,":").concat(n)},e.handleBreakDecrease=function(){var t=e.state,n=t.breakCount,a=t.isPlaying,o=t.currentTimer;n>1&&(a||"Break"!==o?e.setState({breakCount:n-1}):e.setState({breakCount:n-1,clockCount:60*(n-1)}))},e.handleBreakIncrease=function(){var t=e.state,n=t.breakCount,a=t.isPlaying,o=t.currentTimer;n<60&&(a||"Break"!==o?e.setState({breakCount:n+1}):e.setState({breakCount:n+1,clockCount:60*(n+1)}))},e.handleSessionDecrease=function(){var t=e.state,n=t.sessionCount,a=t.isPlaying,o=t.currentTimer;n>1&&(a||"Session"!==o?e.setState({sessionCount:n-1}):e.setState({sessionCount:n-1,clockCount:60*(n-1)}))},e.handleSessionIncrease=function(){var t=e.state,n=t.sessionCount,a=t.isPlaying,o=t.currentTimer;n<60&&(a||"Session"!==o?e.setState({sessionCount:n+1}):e.setState({sessionCount:n+1,clockCount:60*(n+1)}))},e.loop=void 0,e}return Object(i.a)(n,[{key:"componentWillUnmount",value:function(){clearInterval(this.loop)}},{key:"render",value:function(){var e=this.state,t=e.breakCount,n=e.sessionCount,a=e.clockCount,c=e.currentTimer,s=e.isPlaying,r={title:"Break",count:t,handleDecrease:this.handleBreakDecrease,handleIncrease:this.handleBreakIncrease},i={title:"Session",count:n,handleDecrease:this.handleSessionDecrease,handleIncrease:this.handleSessionIncrease};return o.a.createElement("div",null,o.a.createElement("div",{className:"flex"},o.a.createElement(h,r),o.a.createElement(h,i)),o.a.createElement("div",{className:"clock-container"},o.a.createElement("h1",{id:"timer-label"},c),o.a.createElement("span",{id:"time-left"},this.convertToTime(a)),o.a.createElement("div",{className:"flex"},o.a.createElement("button",{id:"start_stop",onClick:this.handlePlayPause},o.a.createElement(m.a,{icon:s?d.b:d.c})),o.a.createElement("button",{id:"reset",onClick:this.handleReset},o.a.createElement(m.a,{icon:d.e})))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.b3a72140.chunk.js.map