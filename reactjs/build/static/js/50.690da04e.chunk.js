(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[50],{343:function(e,i,n){"use strict";n.r(i);var o=n(1),t=n(3),l=n.n(t),d=n(18),r=n(6),c=n(0),a=n(2),u=n(98),s=n(353),v=n(42),h=n(31),p=n(87);function f(e){var i=e.width,n=void 0===i?"100%":i,o=e.src,t=e.type,l=e.link,d=e.muted,r=void 0===d||d,a=e.autoplay,u=void 0===a||a,s=e.loop,v=void 0===s||s,f=function(){return Object(c.jsx)("div",{className:"video-wrapper",children:Object(c.jsx)("video",{style:{width:n,height:p.isMobile?"auto":"100%"},className:"video-preview",muted:r,autoPlay:u,loop:v,children:Object(c.jsx)("source",{src:o,type:t})})})};return l?Object(c.jsx)(h.b,{to:l,children:f()}):f()}var j=Object(a.memo)(f),b=n(13),m=n(7),x=n(77),O=n(20);function g(e){var i,n=e.slides,t=e.dragOrAuto,h=void 0!==t&&t,p=e.maxWidth,f=e.maxHeight,g=e.hasText,y=void 0!==g&&g,_=Object(a.useState)(0),k=Object(r.a)(_,2),w=k[0],N=k[1],H=Object(a.useState)([]),I=Object(r.a)(H,2),S=I[0],E=I[1],P=Object(O.c)((function(e){return null===e||void 0===e?void 0:e.userReducer}));Object(a.useEffect)((function(){function e(){return(e=Object(d.a)(l.a.mark((function e(){var i,o,t,d,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=null===x.a||void 0===x.a||null===(i=x.a.find((function(e){return"Product Detail Page"==e.name})))||void 0===i?void 0:i.path,t=[],d=[],(null===n||void 0===n?void 0:n.length)>0&&n.forEach((function(e,i){if(null===e||void 0===e?void 0:e.product){var n,o={};o.index=i,o.productLink=null===e||void 0===e?void 0:e.product,d.push(o);var l={url:"".concat(m.n).concat(null===e||void 0===e||null===(n=e.product)||void 0===n?void 0:n.id,"/"),method:"GET",body:null};t.push(Object(b.e)(l))}})),e.prev=4,r=[],e.next=8,Promise.all(t);case 8:e.sent.forEach((function(e){var i,n,t={};t.id=e.id,t.url=o.replace(":IDBrand",null===e||void 0===e||null===(i=e.brand_page)||void 0===i||null===(n=i.page_ptr)||void 0===n?void 0:n.slug).replace(":IDProduct",e.handle),r.push(t)})),E(r),e.next=15;break;case 13:e.prev=13,e.t0=e.catch(4);case 15:case"end":return e.stop()}}),e,null,[[4,13]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]);var D=v.c?135:v.a?120:window.innerHeight-192;return Object(c.jsx)("section",{className:"blk-carousel",children:Object(c.jsx)("div",{className:"carousel-block ".concat(y&&"has-text"),style:{maxWidth:p?"".concat(p,"px"):"",maxHeight:(D>737?737:D)+"px",height:D},children:Object(c.jsx)(s.a,{onSlideComplete:N,activeIndex:w,threshHold:v.a?100:500,transition:v.a?.2:.8,scaleOnDrag:!1,isSquare:!1,dragOrAuto:h,slideInterval:5e3,children:null===n||void 0===n||null===(i=n.filter((function(e){return!("logged_in_user_only"==(null===e||void 0===e?void 0:e.show_only_for_user)&&!(null===P||void 0===P?void 0:P.user))&&("guest_user_only"!=(null===e||void 0===e?void 0:e.show_only_for_user)||!(null===P||void 0===P?void 0:P.user))})))||void 0===i?void 0:i.map((function(e,i){var n=null===S||void 0===S?void 0:S.find((function(i){var n;return(null===i||void 0===i?void 0:i.id)==(null===e||void 0===e||null===(n=e.product)||void 0===n?void 0:n.id)}));return Object(c.jsxs)("div",{className:"animated faster fadeIn",children:[h?Object(c.jsx)("a",{className:"nav-link-full-img",onClick:function(){var i;return function(e,i){if(i){var n=document.querySelectorAll(".btn-login");null===n||void 0===n||n.forEach((function(e){e.click()}))}else e&&(window.location.href=e)}((null===e||void 0===e?void 0:e.link)?null===e||void 0===e||null===(i=e.link)||void 0===i?void 0:i.full_url:n?null===n||void 0===n?void 0:n.url:"",null===e||void 0===e?void 0:e.login_popup)}}):"",e.video&&e.video.src.length?Object(c.jsx)(j,{src:e.video.src[0].src,type:e.video.src[0].type}):Object(c.jsx)(u.default,{data:Object(o.a)(Object(o.a)({},e.background),{},{maxHeight:f,maxWidth:p})}),(null===e||void 0===e?void 0:e.text)?Object(c.jsx)("div",{className:"content-slide",dangerouslySetInnerHTML:{__html:null===e||void 0===e?void 0:e.text}}):""]},i)}))})})})}i.default=Object(a.memo)(g)}}]);
//# sourceMappingURL=50.690da04e.chunk.js.map