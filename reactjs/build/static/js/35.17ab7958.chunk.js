(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[35,17],{295:function(e,t,s){"use strict";s.r(t);var c=s(43),a=s(1),n=s(3),i=s.n(n),r=s(18),l=s(6),o=s(0),d=s(2),j=s(311),b=s(13),h=s(24),m=(s(437),s(363)),u=s(99),O=s(50),p=s(7),v=s(323),x=s(316),f=s(28);function w(e){var t=Object(d.useRef)(null),s=Object(d.useState)(!0),n=Object(l.a)(s,2),w=n[0],g=n[1],N=Object(d.useState)([]),y=Object(l.a)(N,2),_=y[0],k=y[1],S=Object(d.useState)([]),A=Object(l.a)(S,2),R=A[0],G=A[1],P=Object(d.useState)([]),T=Object(l.a)(P,2),B=T[0],C=T[1],F=Object(d.useState)({}),D=Object(l.a)(F,2),E=D[0],I=D[1],H=Object(d.useState)(!1),U=Object(l.a)(H,2),J=U[0],V=U[1],q=Object(d.useState)(!1),K=Object(l.a)(q,2),L=K[0],W=K[1],M=Object(d.useState)({password:"",confirm_password:""}),Q=Object(l.a)(M,2),Y=Q[0],z=Q[1],X=Object(d.useState)({password:""}),Z=Object(l.a)(X,2),$=Z[0],ee=Z[1],te=function(){var t=Object(r.a)(i.a.mark((function t(){var s,c,a,n,r,l,o,d,j,m;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(Object(h.isEmpty)(_)||Object(h.isEmpty)(B)||Object(h.isEmpty)(R)||Object(h.isEmpty)(E))){t.next=19;break}return s=[Object(b.d)(p.F)],t.prev=2,t.next=5,Promise.all(s);case 5:l=t.sent,o=l[0],d=Object(h.get)(o,"dynamic_links"),C(o.body),I(o.meta),k(null===d||void 0===d?void 0:d.navigation),G(null===d||void 0===d?void 0:d.footer),g(!1),(j=(null===e||void 0===e||null===(c=e.match)||void 0===c||null===(a=c.params)||void 0===a?void 0:a.id)?null===e||void 0===e||null===(n=e.match)||void 0===n||null===(r=n.params)||void 0===r?void 0:r.id:void 0)&&(m={url:"".concat(p.Q).concat(j,"/verify-uuid/"),method:"POST",body:null},Object(b.e)(m).then((function(e){e.success?V(!0):e.isError&&V(void 0)}))),t.next=19;break;case 17:t.prev=17,t.t0=t.catch(2);case 19:case"end":return t.stop()}}),t,null,[[2,17]])})));return function(){return t.apply(this,arguments)}}(),se=Object(f.g)();Object(d.useEffect)((function(){te()}),[]);var ce=function(e){z(Object(a.a)(Object(a.a)({},Y),{},Object(c.a)({},e.currentTarget.name,e.target.value)))},ae=function(){var e=function(){if(Y.password!=Y.confirm_password)return"Password confirmation doesn't match password"}();return ee(Object(a.a)(Object(a.a)({},$),{password:e})),!!e};return Object(o.jsxs)("div",{className:"site-forgotPassword",children:[w?Object(o.jsx)(u.default,{}):"",Object(o.jsx)("div",{style:{paddingBottom:"85px",minHeight:"81vh",paddingTop:"12%"},className:"container",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-6",children:Object(o.jsx)("img",{src:m.a,alt:"",className:"resp-ic"})}),Object(o.jsx)("div",{className:"col-6",children:1==J?L?Object(o.jsxs)("div",{className:"status-box",children:[Object(o.jsx)("img",{src:x.a,alt:""}),Object(o.jsx)("h3",{children:"Password change successful"}),Object(o.jsx)("h4",{style:{fontWeight:400},children:"Your password was successfully changed. redirect to home page"})]}):Object(o.jsxs)("div",{className:"form-forgot-password",children:[Object(o.jsx)("h1",{children:"Reset password"}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("div",{className:"col-12",children:Object(o.jsx)(O.a,{type:"password",for:"Password",label:"Password",name:"password",value:(null===Y||void 0===Y?void 0:Y.password)||"",handleChange:ce})}),Object(o.jsx)("div",{className:"col-12",style:{marginTop:16},children:Object(o.jsx)(O.a,{type:"password",for:"Confirm password",label:"Confirm password",name:"confirm_password",value:(null===Y||void 0===Y?void 0:Y.confirm_password)||"",validate:!0,handleChange:ce,validateContent:$.password})}),Object(o.jsx)("div",{className:"button-group",children:Object(o.jsx)("button",{className:"reset-btn",onClick:function(){var t,s,c,a,n=ae(),i=(null===e||void 0===e||null===(t=e.match)||void 0===t||null===(s=t.params)||void 0===s?void 0:s.id)?null===e||void 0===e||null===(c=e.match)||void 0===c||null===(a=c.params)||void 0===a?void 0:a.id:void 0;if(!n&&i){var r={url:"".concat(p.Q).concat(i,"/confirm/"),method:"POST",body:{password:Y.password,confirm_password:Y.confirm_password}};Object(b.e)(r).then((function(e){e.success?(Object(b.q)("Reset password successfully"),W(!0),setTimeout((function(){se.push("/")}),2e3)):e.isError&&Object(b.p)("Reset password fail, please try again")}))}},children:"Reset password"})})]})]}):0==J?Object(o.jsxs)("section",{className:"verify",children:[Object(o.jsx)("h4",{children:"Verifying"}),Object(o.jsxs)("div",{className:"lds-ellipsis",children:[Object(o.jsx)("div",{}),Object(o.jsx)("div",{}),Object(o.jsx)("div",{}),Object(o.jsx)("div",{})]})]}):Object(o.jsxs)("div",{className:"status-box",children:[Object(o.jsx)("img",{src:v.a,alt:""}),Object(o.jsx)("h3",{children:"OOP!"}),Object(o.jsx)("h4",{children:"Something went wrong. Please try again"})]})})]})}),Object(o.jsx)("div",{ref:t,children:Object(o.jsx)(j.default,{data:R})})]})}t.default=Object(d.memo)(w)},311:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s(2),n=s.p+"static/media/ic-facebook.1490317c.svg",i=s.p+"static/media/ic-insta.091b579b.svg",r=s.p+"static/media/ic-linkedin.fb119a0a.svg",l=s(24),o=s(31);var d=function(e){var t=e.data,s=void 0===t?{}:t,a=s.children;return Object(c.jsxs)("div",{className:"item-box",children:[(null===s||void 0===s?void 0:s.relative_url)?Object(c.jsx)(o.b,{to:null===s||void 0===s?void 0:s.relative_url,className:"py-1",children:s.title}):Object(c.jsx)("h3",{children:s.title}),Object(c.jsx)("ul",{children:Object(l.map)(a,(function(e,t){return Object(c.jsx)("li",{children:Object(c.jsxs)("a",{href:(null===e||void 0===e?void 0:e.external_url)?null===e||void 0===e?void 0:e.external_url:(null===e||void 0===e?void 0:e.relative_url)?null===e||void 0===e?void 0:e.relative_url:"/",className:"py-1",children:[Object(c.jsx)("span",{className:"icon-format material-icons",style:{top:0,left:-28},children:null===e||void 0===e?void 0:e.menu_icon}),Object(c.jsxs)("span",{children:[e.title," "]})]})},t)}))})]})},j=s(7);function b(e){var t=e.data,s=void 0===t?[]:t;return Object(c.jsx)("footer",{className:"blk-footer",children:Object(c.jsxs)("div",{className:"content container",children:[Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"item-box",children:[Object(c.jsx)("h3",{children:"contact"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsxs)("a",{children:[Object(c.jsx)("span",{className:"icon-format material-icons",style:{top:-4,left:-28},children:"call"}),j.I]})}),Object(c.jsx)("li",{children:"Sun - Thu 10.00 AM - 8.00 PM"}),Object(c.jsx)("li",{children:Object(c.jsxs)("a",{href:"mailto:support@sundora.com.bd",children:[Object(c.jsx)("span",{className:"icon-format material-icons",style:{top:-4,left:-28},children:"email"}),"support@sundora.com.bd"]})}),Object(c.jsx)("li",{style:{marginTop:"1rem"},children:Object(c.jsxs)("a",{href:"https://www.google.com/maps/search/".concat(encodeURI("Anabil Tower, Plot #3, Block - NW(J), Gulshan North Avenue, Kemal Ataturk Ave, Dhaka -1212, Bangladesh"),"/"),target:"_blank",rel:"noreferrer",children:[Object(c.jsx)("span",{className:"icon-format material-icons",style:{top:-4,left:-28},children:"location_on"}),Object(c.jsx)("p",{className:"location",children:"Anabil Tower, Plot #3, Block - NW(J), Gulshan North Avenue, Kemal Ataturk Ave, Dhaka -1212, Bangladesh"})]})})]}),Object(c.jsxs)("ul",{className:"social-group",children:[Object(c.jsx)("li",{children:Object(c.jsx)("a",{target:"__blank",href:"https://bd.linkedin.com/company/sundora?trk=public_profile_topcard-current-company",children:Object(c.jsx)("img",{className:"linkedin",src:r,width:35,height:22,alt:"ic-linkedin"})})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{target:"__blank",href:"https://www.facebook.com/sundorabeauty",children:Object(c.jsx)("img",{src:n,width:14,height:22.39,alt:"ic-facebook"})})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{target:"__blank",href:"https://www.instagram.com/sundorabeauty",children:Object(c.jsx)("img",{src:i,width:21,height:24,alt:"ic-instagram"})})})]})]}),Object(c.jsxs)("div",{className:"item-box",children:[Object(c.jsx)("h3",{children:"visit"}),Object(c.jsx)("ul",{children:Object(c.jsx)("li",{children:Object(c.jsx)("span",{children:Object(c.jsxs)("a",{href:"https://www.google.com/maps/search/".concat(encodeURI("Green City Square, Gr. Floor - Semi-basement, 750, Satmasjid Road, Dhanmondi"),"/"),target:"_blank",rel:"noreferrer",children:[Object(c.jsx)("span",{className:"icon-format material-icons",style:{top:-4,left:-28},children:"location_on"}),Object(c.jsx)("p",{className:"location",children:"Green City Square, Gr. Floor - Semi-basement, 750, Satmasjid Road, Dhanmondi"})]})})})}),Object(c.jsx)("ul",{children:Object(c.jsx)("li",{children:Object(c.jsx)("span",{children:Object(c.jsxs)("a",{href:"https://www.google.com/maps/search/".concat(encodeURI("Delvista, Banani Rd# 12, FL# 3, H# 44, Banani"),"/"),target:"_blank",rel:"noreferrer",children:[Object(c.jsx)("span",{className:"icon-format material-icons",style:{top:-4,left:-28},children:"location_on"}),Object(c.jsx)("p",{className:"location",children:"DELVISTA, FL# 3, H# 44,RD# 12, BANANI 1213, DHAKA"})]})})})}),Object(c.jsx)("ul",{children:Object(c.jsx)("li",{children:Object(c.jsxs)("span",{children:[" ",Object(c.jsxs)("a",{href:"https://www.google.com/maps/search/".concat(encodeURI("Ventura Agnibeena, Gr. Floor, H#38, Rd#12, Banani"),"/"),target:"_blank",rel:"noreferrer",children:[Object(c.jsx)("span",{className:"icon-format material-icons",style:{top:-4,left:-28},children:"location_on"}),Object(c.jsx)("p",{className:"location",children:"Ventura Agnibeena, Gr. Floor, H#38, Rd#12, Banani"})]})]})})}),Object(c.jsx)("ul",{children:Object(c.jsx)("li",{children:Object(c.jsxs)("span",{children:[" ",Object(c.jsxs)("a",{href:"https://www.google.com/maps/search/".concat(encodeURI("Casablanca, 114 Gulshan Ave, Gr. Floor, Gulshan"),"/"),target:"_blank",rel:"noreferrer",children:[Object(c.jsx)("span",{className:"icon-format material-icons",style:{top:-4,left:-28},children:"location_on"}),Object(c.jsx)("p",{className:"location",children:"Casablanca, 114 Gulshan Ave, Gr. Floor, Gulshan"})]})]})})})]})]}),Object(c.jsx)("div",{children:Object(l.map)(s,(function(e,t){return Object(c.jsx)(d,{data:e},t)}))})]})})}t.default=Object(a.memo)(b)},316:function(e,t,s){"use strict";t.a=s.p+"static/media/successful-payment.08385652.svg"},323:function(e,t,s){"use strict";t.a=s.p+"static/media/cancel-payment.f939aa43.svg"},363:function(e,t,s){"use strict";t.a=s.p+"static/media/reset-password.e195328f.png"},437:function(e,t,s){}}]);
//# sourceMappingURL=35.17ab7958.chunk.js.map