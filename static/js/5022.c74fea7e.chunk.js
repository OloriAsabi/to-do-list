"use strict";(self.webpackChunkTo_do_List_App=self.webpackChunkTo_do_List_App||[]).push([[5022],{5022:function(t,e,n){n.r(e),n.d(e,{createSwipeBackGesture:function(){return o}});var r=n(1811),i=n(9507),u=n(7909),o=function(t,e,n,o,a){var c=t.ownerDocument.defaultView,s=(0,i.i)(t),f=function(t){return s?-t.deltaX:t.deltaX};return(0,u.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(t){return function(t){var e=t.startX;return s?e>=c.innerWidth-50:e<=50}(t)&&e()},onStart:n,onMove:function(t){var e=f(t)/c.innerWidth;o(e)},onEnd:function(t){var e=f(t),n=c.innerWidth,i=e/n,u=function(t){return s?-t.velocityX:t.velocityX}(t),o=u>=0&&(u>.2||e>n/2),d=(o?1-i:i)*n,h=0;if(d>5){var l=d/Math.abs(u);h=Math.min(l,540)}a(o,i<=0?.01:(0,r.j)(0,i,.9999),h)}})}}}]);
//# sourceMappingURL=5022.c74fea7e.chunk.js.map