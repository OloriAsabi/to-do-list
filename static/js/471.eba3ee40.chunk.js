"use strict";(self.webpackChunkTo_do_List_App=self.webpackChunkTo_do_List_App||[]).push([[471],{471:function(t,e,n){n.r(e),n.d(e,{createSwipeBackGesture:function(){return o}});var r=n(9069),i=n(3127),u=n(236),o=(n(1045),function(t,e,n,o,a){var c=t.ownerDocument.defaultView,s=(0,i.i)(t),f=function(t){return s?-t.deltaX:t.deltaX},d=function(t){return s?-t.velocityX:t.velocityX};return(0,u.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(t){return function(t){var e=t.startX;return s?e>=c.innerWidth-50:e<=50}(t)&&e()},onStart:n,onMove:function(t){var e=f(t)/c.innerWidth;o(e)},onEnd:function(t){var e=f(t),n=c.innerWidth,i=e/n,u=d(t),o=u>=0&&(u>.2||e>n/2),s=(o?1-i:i)*n,h=0;if(s>5){var l=s/Math.abs(u);h=Math.min(l,540)}a(o,i<=0?.01:(0,r.k)(0,i,.9999),h)}})})}}]);
//# sourceMappingURL=471.eba3ee40.chunk.js.map