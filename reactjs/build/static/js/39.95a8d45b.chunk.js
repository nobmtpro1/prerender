(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[39,16],{241:function(e,t,a){"use strict";a.r(t);var c=a(54),s=a(5),n=a(2),l=a.n(n),i=a(14),r=a(10),o=a(1),j=a(245),d=a(11),b=a(17),m=(a(596),a(332)),h=a(66),O=a(39),u=a(6),x=a(255),p=a(0);var v=function(e){var t=e.classes;return Object(p.jsxs)("div",{className:"lds-roller ".concat(t||""),style:{transform:"scale(0.5)",bottom:"-5px",left:"-35px"},children:[Object(p.jsx)("div",{}),Object(p.jsx)("div",{}),Object(p.jsx)("div",{}),Object(p.jsx)("div",{}),Object(p.jsx)("div",{}),Object(p.jsx)("div",{}),Object(p.jsx)("div",{}),Object(p.jsx)("div",{})]})};function f(){var e=Object(o.useRef)(null),t=Object(o.useState)(!0),a=Object(r.a)(t,2),n=a[0],f=a[1],g=Object(o.useState)([]),w=Object(r.a)(g,2),N=w[0],k=w[1],y=Object(o.useState)([]),_=Object(r.a)(y,2),A=_[0],S=_[1],G=Object(o.useState)([]),R=Object(r.a)(G,2),E=R[0],P=R[1],B=Object(o.useState)({}),F=Object(r.a)(B,2),C=F[0],D=F[1],I=Object(o.useState)(!1),T=Object(r.a)(I,2),H=T[0],U=T[1],J=Object(o.useState)({email:""}),L=Object(r.a)(J,2),q=L[0],K=L[1],M=Object(o.useState)({email:""}),V=Object(r.a)(M,2),W=V[0],z=V[1],Q=Object(o.useState)(!1),X=Object(r.a)(Q,2),Y=X[0],Z=X[1],$=function(){var e=Object(i.a)(l.a.mark((function e(){var t,a,c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(Object(b.isEmpty)(N)||Object(b.isEmpty)(E)||Object(b.isEmpty)(A)||Object(b.isEmpty)(C))){e.next=17;break}return t=[Object(d.d)(u.E)],e.prev=2,e.next=5,Promise.all(t);case 5:a=e.sent,c=a[0],s=Object(b.get)(c,"dynamic_links"),P(c.body),D(c.meta),k(null===s||void 0===s?void 0:s.navigation),S(null===s||void 0===s?void 0:s.footer),f(!1),e.next=17;break;case 15:e.prev=15,e.t0=e.catch(2);case 17:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){$()}),[]);var ee=function(){var e=q.email?0==Object(d.t)(q.email.trim())?"Please enter valid email":void 0:"Please enter email";return z(Object(s.a)(Object(s.a)({},W),{email:e})),!!e};return Object(p.jsxs)("div",{className:"site-forgotPassword",children:[n?Object(p.jsx)(h.default,{}):"",Object(p.jsx)("div",{className:"container section-container",children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-sm-12 col-lg-6",children:Object(p.jsx)("img",{src:m.a,alt:"",className:"resp-ic"})}),Object(p.jsx)("div",{className:"col-sm-12 col-lg-6",children:H?Object(p.jsxs)("div",{className:"status-box",children:[Object(p.jsx)("img",{src:x.a,alt:""}),Object(p.jsx)("h3",{children:"Password reset request sent"}),Object(p.jsx)("h4",{children:"A password reset message was sent to your email address. Please click the link in that message to countinue"})]}):Object(p.jsxs)("div",{className:"form-forgot-password",children:[Object(p.jsx)("h1",{children:"Forgot your password"}),Object(p.jsx)("p",{children:"Enter the email address and we will send you a link to reset your password."}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)(O.a,{type:"text",for:"email",name:"email",label:"Enter email",value:q.email,handleChange:function(e){K(Object(s.a)(Object(s.a)({},q),{},Object(c.a)({},e.currentTarget.name,e.target.value)))},validate:!!W.email,validateContent:W.email}),Object(p.jsxs)("div",{className:"button-group",children:[Object(p.jsx)("div",{className:"loader-container",children:Y&&Object(p.jsx)(v,{classes:"loader"})}),Object(p.jsx)("button",{className:"reset-btn",disabled:Y,onClick:function(){if(!ee()){var e;Z(!0);var t={url:u.M,method:"POST",body:{email:null===(e=q.email)||void 0===e?void 0:e.toLowerCase()}};Object(d.e)(t).then((function(e){e.success?U(!0):e.isError})).finally((function(){Z(!1)}))}},children:"Reset password"})]})]})]})})]})}),Object(p.jsx)("div",{ref:e,children:Object(p.jsx)(j.default,{data:A})})]})}t.default=Object(o.memo)(f)},245:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.p+"static/media/ic-facebook.1490317c.svg",n=a.p+"static/media/ic-insta.091b579b.svg",l=a.p+"static/media/ic-linkedin.fb119a0a.svg",i=a(17),r=a(21),o=a(0);var j=function(e){var t=e.data,a=void 0===t?{}:t,c=a.children;return Object(o.jsxs)("div",{className:"item-box",children:[(null===a||void 0===a?void 0:a.relative_url)?Object(o.jsx)(r.b,{to:null===a||void 0===a?void 0:a.relative_url,className:"py-1",children:a.title}):Object(o.jsx)("h3",{children:a.title}),Object(o.jsx)("ul",{children:Object(i.map)(c,(function(e,t){return Object(o.jsx)("li",{children:Object(o.jsxs)("a",{href:(null===e||void 0===e?void 0:e.external_url)?null===e||void 0===e?void 0:e.external_url:(null===e||void 0===e?void 0:e.relative_url)?null===e||void 0===e?void 0:e.relative_url:"/",className:"py-1",children:[Object(o.jsx)("span",{className:"icon-format material-icons",style:{top:0,left:-28},children:null===e||void 0===e?void 0:e.menu_icon}),Object(o.jsxs)("span",{children:[e.title," "]})]})},t)}))})]})},d=a(6);function b(e){var t=e.data,a=void 0===t?[]:t;return Object(o.jsx)("footer",{className:"blk-footer",children:Object(o.jsxs)("div",{className:"content container",children:[Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"item-box",children:[Object(o.jsx)("h3",{children:"contact"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsxs)("a",{children:[Object(o.jsx)("span",{className:"icon-format material-icons",style:{top:-4,left:-28},children:"call"}),d.H]})}),Object(o.jsx)("li",{children:"Sun - Thu 10.00 AM - 8.00 PM"}),Object(o.jsx)("li",{children:Object(o.jsxs)("a",{href:"mailto:support@sundora.com.bd",children:[Object(o.jsx)("span",{className:"icon-format material-icons",style:{top:-4,left:-28},children:"email"}),"support@sundora.com.bd"]})}),Object(o.jsx)("li",{style:{marginTop:"1rem"},children:Object(o.jsxs)("a",{href:"https://www.google.com/maps/search/".concat(encodeURI("Anabil Tower, Plot #3, Block - NW(J), Gulshan North Avenue, Kemal Ataturk Ave, Dhaka -1212, Bangladesh"),"/"),target:"_blank",rel:"noreferrer",children:[Object(o.jsx)("span",{className:"icon-format material-icons",style:{top:-4,left:-28},children:"location_on"}),Object(o.jsx)("p",{className:"location",children:"Anabil Tower, Plot #3, Block - NW(J), Gulshan North Avenue, Kemal Ataturk Ave, Dhaka -1212, Bangladesh"})]})})]}),Object(o.jsxs)("ul",{className:"social-group",children:[Object(o.jsx)("li",{children:Object(o.jsx)("a",{target:"__blank",href:"https://bd.linkedin.com/company/sundora?trk=public_profile_topcard-current-company",children:Object(o.jsx)("img",{className:"linkedin",src:l,alt:"ic-linkedin"})})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{target:"__blank",href:"https://www.facebook.com/sundorabeauty",children:Object(o.jsx)("img",{src:s,width:14,height:22.39,alt:"ic-facebook"})})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{target:"__blank",href:"https://www.instagram.com/sundorabeauty",children:Object(o.jsx)("img",{src:n,width:21,height:24,alt:"ic-instagram"})})})]})]}),Object(o.jsxs)("div",{className:"item-box",children:[Object(o.jsx)("h3",{children:"visit"}),Object(o.jsx)("ul",{children:Object(o.jsx)("li",{children:Object(o.jsx)("span",{children:Object(o.jsxs)("a",{href:"https://www.google.com/maps/search/".concat(encodeURI("Green City Square, Gr. Floor - Semi-basement, 750, Satmasjid Road, Dhanmondi"),"/"),target:"_blank",rel:"noreferrer",children:[Object(o.jsx)("span",{className:"icon-format material-icons",style:{top:-4,left:-28},children:"location_on"}),Object(o.jsx)("p",{className:"location",children:"Green City Square, Gr. Floor - Semi-basement, 750, Satmasjid Road, Dhanmondi"})]})})})}),Object(o.jsx)("ul",{children:Object(o.jsx)("li",{children:Object(o.jsx)("span",{children:Object(o.jsxs)("a",{href:"https://www.google.com/maps/search/".concat(encodeURI("Delvista, Banani Rd# 12, FL# 3, H# 44, Banani"),"/"),target:"_blank",rel:"noreferrer",children:[Object(o.jsx)("span",{className:"icon-format material-icons",style:{top:-4,left:-28},children:"location_on"}),Object(o.jsx)("p",{className:"location",children:"DELVISTA, FL# 3, H# 44,RD# 12, BANANI 1213, DHAKA"})]})})})}),Object(o.jsx)("ul",{children:Object(o.jsx)("li",{children:Object(o.jsxs)("span",{children:[" ",Object(o.jsxs)("a",{href:"https://www.google.com/maps/search/".concat(encodeURI("Ventura Agnibeena, Gr. Floor, H#38, Rd#12, Banani"),"/"),target:"_blank",rel:"noreferrer",children:[Object(o.jsx)("span",{className:"icon-format material-icons",style:{top:-4,left:-28},children:"location_on"}),Object(o.jsx)("p",{className:"location",children:"Ventura Agnibeena, Gr. Floor, H#38, Rd#12, Banani"})]})]})})}),Object(o.jsx)("ul",{children:Object(o.jsx)("li",{children:Object(o.jsxs)("span",{children:[" ",Object(o.jsxs)("a",{href:"https://www.google.com/maps/search/".concat(encodeURI("Casablanca, 114 Gulshan Ave, Gr. Floor, Gulshan"),"/"),target:"_blank",rel:"noreferrer",children:[Object(o.jsx)("span",{className:"icon-format material-icons",style:{top:-4,left:-28},children:"location_on"}),Object(o.jsx)("p",{className:"location",children:"Casablanca, 114 Gulshan Ave, Gr. Floor, Gulshan"})]})]})})})]})]}),Object(o.jsx)("div",{children:Object(i.map)(a,(function(e,t){return Object(o.jsx)(j,{data:e},t)}))})]})})}t.default=Object(c.memo)(b)},255:function(e,t,a){"use strict";t.a=a.p+"static/media/successful-payment.08385652.svg"},332:function(e,t,a){"use strict";t.a=a.p+"static/media/reset-password.e195328f.png"},596:function(e,t,a){}}]);
//# sourceMappingURL=39.95a8d45b.chunk.js.map