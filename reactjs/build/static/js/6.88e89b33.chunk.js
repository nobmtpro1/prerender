(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[6,51],{290:function(e,t,n){"use strict";n.r(t);var r=n(5),i=n(2),c=n.n(i),o=n(14),a=n(10),u=n(1),s=n(64),l=n(314),d=n(28),v=n(21),h=n(56),f=n(0);function j(e){var t=e.width,n=void 0===t?"100%":t,r=e.src,i=e.type,c=e.link,o=e.muted,a=void 0===o||o,u=e.autoplay,s=void 0===u||u,l=e.loop,d=void 0===l||l,j=function(){return Object(f.jsx)("div",{className:"video-wrapper",children:Object(f.jsx)("video",{style:{width:n,height:h.isMobile?"auto":"100%"},className:"video-preview",muted:a,autoPlay:s,loop:d,children:Object(f.jsx)("source",{src:r,type:i})})})};return c?Object(f.jsx)(v.b,{to:c,children:j()}):j()}var b=Object(u.memo)(j),p=n(11),O=n(6),m=n(50);function g(e){var t=e.slides,n=e.dragOrAuto,i=void 0!==n&&n,v=e.maxWidth,h=e.maxHeight,j=e.hasText,g=void 0!==j&&j,x=Object(u.useState)(0),w=Object(a.a)(x,2),y=w[0],k=w[1],N=Object(u.useState)([]),S=Object(a.a)(N,2),D=S[0],E=S[1];Object(u.useEffect)((function(){function e(){return(e=Object(o.a)(c.a.mark((function e(){var n,r,i,o,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=null===m.a||void 0===m.a||null===(n=m.a.find((function(e){return"Product Detail Page"==e.name})))||void 0===n?void 0:n.path,i=[],o=[],(null===t||void 0===t?void 0:t.length)>0&&t.forEach((function(e,t){if(null===e||void 0===e?void 0:e.product){var n,r={};r.index=t,r.productLink=null===e||void 0===e?void 0:e.product,o.push(r);var c={url:"".concat(O.m).concat(null===e||void 0===e||null===(n=e.product)||void 0===n?void 0:n.id,"/"),method:"GET",body:null};i.push(Object(p.e)(c))}})),e.prev=4,a=[],e.next=8,Promise.all(i);case 8:e.sent.forEach((function(e){var t,n,i={};i.id=e.id,i.url=r.replace(":IDBrand",null===e||void 0===e||null===(t=e.brand_page)||void 0===t||null===(n=t.page_ptr)||void 0===n?void 0:n.slug).replace(":IDProduct",e.handle),a.push(i)})),E(a),e.next=15;break;case 13:e.prev=13,e.t0=e.catch(4);case 15:case"end":return e.stop()}}),e,null,[[4,13]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]);var M=d.b?135:d.a?120:window.innerHeight-192;return Object(f.jsx)("section",{className:"blk-carousel",children:Object(f.jsx)("div",{className:"carousel-block ".concat(g&&"has-text"),style:{maxWidth:v?"".concat(v,"px"):"",maxHeight:(M>737?737:M)+"px",height:M},children:Object(f.jsx)(l.a,{onSlideComplete:k,activeIndex:y,threshHold:d.a?100:500,transition:d.a?.2:.8,scaleOnDrag:!1,isSquare:!1,dragOrAuto:i,slideInterval:5e3,children:t.map((function(e,t){var n,c=null===D||void 0===D?void 0:D.find((function(t){var n;return(null===t||void 0===t?void 0:t.id)==(null===e||void 0===e||null===(n=e.product)||void 0===n?void 0:n.id)}));return Object(f.jsxs)("div",{className:"animated faster fadeIn",children:[i?Object(f.jsx)("a",{className:"nav-link-full-img",href:(null===e||void 0===e?void 0:e.link)?null===e||void 0===e||null===(n=e.link)||void 0===n?void 0:n.full_url:c?null===c||void 0===c?void 0:c.url:""}):"",e.video&&e.video.src.length?Object(f.jsx)(b,{src:e.video.src[0].src,type:e.video.src[0].type}):Object(f.jsx)(s.default,{data:Object(r.a)(Object(r.a)({},e.background),{},{maxHeight:h,maxWidth:v})}),(null===e||void 0===e?void 0:e.text)?Object(f.jsx)("div",{className:"content-slide",dangerouslySetInnerHTML:{__html:null===e||void 0===e?void 0:e.text}}):""]},t)}))})})})}t.default=Object(u.memo)(g)},314:function(e,t,n){"use strict";var r=n(10),i=n(1),c=n(0);var o=function(e){var t=e.child,n=e.sliderWidth,r=e.sliderHeight,o=e.scaleOnDrag,a=void 0!==o&&o,u=e.isSquareWrapper,s=void 0!==u&&u,l=Object(i.useRef)("slide"),d=function(){a&&(l.current.style.transform="scale(0.9)")},v=function(){a&&(l.current.style.transform="scale(1)")};return Object(c.jsx)("section",{className:"slide-styles",ref:l,style:{height:"".concat(s?l.current.clientWidth:window.innerHeight-192,"px")},children:Object(c.jsx)("div",{unselectable:"on",className:"slide-inner",style:{width:n||0,height:r&&!s?r:"".concat(l.current.clientWidth,"px")},onMouseDown:d,onMouseUp:v,onTouchStart:d,onTouchEnd:v,onMouseLeave:v,onDragStart:function(e){return e.preventDefault(),e.stopPropagation(),!1},children:t})})};function a(e){return e.type.includes("mouse")?e.pageX:e.touches[0].clientX}function u(e){return{width:e.current.clientWidth,height:e.current.clientHeight}}t.a=function(e){var t=e.children,n=e.onSlideComplete,s=e.onSlideStart,l=e.activeIndex,d=void 0===l?null:l,v=e.threshHold,h=void 0===v?100:v,f=e.transition,j=void 0===f?.3:f,b=e.scaleOnDrag,p=void 0!==b&&b,O=e.isSquare,m=void 0!==O&&O,g=e.dragOrAuto,x=void 0!==g&&g,w=e.slideInterval,y=void 0===w?5e3:w,k=Object(i.useState)({width:0,height:0}),N=Object(r.a)(k,2),S=N[0],D=N[1],E=Object(i.useRef)(!1),M=Object(i.useRef)(0),A=Object(i.useRef)(0),H=Object(i.useRef)(0),W=Object(i.useRef)(d||0),L=Object(i.useRef)("slider"),I=Object(i.useRef)(null),R=Object(i.useState)(!1),T=Object(r.a)(R,2),P=T[0],q=T[1],C=Object(i.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S.width;A.current=W.current*-e,H.current=A.current,U()}),[S.width]),_=function(){return L.current.style.transition="transform ".concat(j,"s ease-out")};function F(e){return function(t){_(),W.current=e,M.current=a(t),E.current=!0,I.current=requestAnimationFrame(J),L.current.style.cursor="grabbing",s&&s(W.current)}}function X(e){if(E.current){var t=a(e);A.current=H.current+t-M.current}}function z(){_(),cancelAnimationFrame(I.current),E.current=!1;var e=A.current-H.current;e<-h&&W.current<t.length-1&&(W.current+=1),e>h&&W.current>0&&(W.current-=1),_(),C(),L.current.style.cursor="grab",n&&n(W.current)}function J(){U(),E.current&&requestAnimationFrame(J)}function U(){L.current.style.transform="translateX(".concat(null===A||void 0===A?void 0:A.current,"px)")}Object(i.useEffect)((function(){d!==W.current&&(_(),W.current=d,C())}),[d,C]),Object(i.useLayoutEffect)((function(){var e=u(L);if(D(e),C(e.width),0==e.width&&0==e.height){var t=setInterval((function(){var e=u(L);D(e),C(e.width)}),100);return function(){return clearInterval(t)}}}),[C]),Object(i.useEffect)((function(){var e=function(){L.current.style.transition="none";var e=u(L),t=e.width,n=e.height;D({width:t,height:n}),C(t)},r=function(e){var r=e.key,i=["ArrowRight","ArrowLeft"].includes(r);i&&_(),i&&s&&s(W.current),"ArrowRight"===r&&W.current<t.length-1&&(W.current+=1),"ArrowLeft"===r&&W.current>0&&(W.current-=1),i&&n&&n(W.current),C()};return window.addEventListener("resize",e),window.addEventListener("keydown",r),function(){window.removeEventListener("resize",e),window.removeEventListener("keydown",r)}}),[t.length,C,n,s]);var B=function(){try{var e=d+1>=t.length?0:d+1;_(),n(e)}catch(r){}};return Object(i.useEffect)((function(){if(x){var e=setTimeout(B,y);if(P)return q(!1),function(){clearTimeout(e)}}}),[d]),Object(c.jsx)("div",{className:"".concat(x?"block-slider":"slider-wrapper"),children:x?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"slider-wrapper",children:Object(c.jsx)("ul",{className:"slider-styles",ref:L,children:t.map((function(e){return Object(c.jsx)("li",{onContextMenu:function(e){e.preventDefault(),e.stopPropagation()},className:"slide-outer",children:Object(c.jsx)(o,{child:e,sliderWidth:S.width,sliderHeight:S.height,scaleOnDrag:p,isSquareWrapper:m})},e.key)}))})}),Object(c.jsx)("div",{className:"group-dot",children:Array.from(Array(t.length).keys()).map((function(e,t){return Object(c.jsx)("div",{className:"owl-page",children:Object(c.jsx)("button",{className:"btn-dot ".concat(d==t?"btn-dot-active":""),onClick:function(){q(!0),n(t)}})},t)}))})]}):Object(c.jsx)("ul",{className:"slider-styles",ref:L,children:t.map((function(e,t){return Object(c.jsx)("li",{onTouchStart:F(t),onMouseDown:F(t),onTouchMove:X,onMouseMove:X,onTouchEnd:z,onMouseUp:z,onMouseLeave:function(){E.current&&z()},onContextMenu:function(e){e.preventDefault(),e.stopPropagation()},className:"slide-outer",children:Object(c.jsx)(o,{child:e,sliderWidth:S.width,sliderHeight:S.height,scaleOnDrag:p,isSquareWrapper:m})},e.key)}))})})}}}]);
//# sourceMappingURL=6.88e89b33.chunk.js.map