(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[41],{259:function(e,c,t){"use strict";c.a=t.p+"static/media/successful-payment.08385652.svg"},268:function(e,c,t){"use strict";c.a=t.p+"static/media/cancel-payment.f939aa43.svg"},390:function(e,c,t){},610:function(e,c,t){"use strict";t.r(c);var s=t(10),a=t(1),o=(t(390),t(20)),i=t(21),r=t(259),n=t(268),d=t(19),l=t(18),j=t(11),u=t(6),b=t(55),h=t(0);c.default=function(){var e=Object(a.useState)(null),c=Object(s.a)(e,2),t=c[0],O=c[1],v=Object(a.useState)(!1),x=Object(s.a)(v,2),m=x[0],f=x[1],g=Object(a.useState)(!1),k=Object(s.a)(g,2),p=k[0],y=k[1],S=Object(a.useState)("Orders pay on delivery"),N=Object(s.a)(S,2),I=N[0],P=N[1],_=Object(d.c)(),E=Object(o.i)(),T=E.status,w=E.id;return Object(a.useEffect)((function(){var e={url:"".concat(u.R).concat(w,"/order_verify/"),method:"POST",body:null};if("success"==T){var c=!!localStorage.getItem("sundora_guest_id");c&&y(!0),Object(j.e)(e).then((function(e){if(e.success){var t,s,a,o,i,r,n={url:"".concat(u.h).concat(null===e||void 0===e||null===(t=e.data)||void 0===t||null===(s=t.order)||void 0===s?void 0:s.uuid,"/"),method:"GET",body:null};(null===e||void 0===e||null===(a=e.data)||void 0===a||null===(o=a.order)||void 0===o?void 0:o.shipping)||P("Cash on pickup"),O(!0),f(!0),Object(j.e)(n).then((function(e){var c=e.data;Object(b.c)(c)})),(null===e||void 0===e||null===(i=e.data)||void 0===i||null===(r=i.user)||void 0===r?void 0:r.guest)&&localStorage.removeItem("sundoraToken"),localStorage.removeItem("id_checkout"),c&&localStorage.removeItem("sundora_guest_id"),_(Object(l.d)())}else e.isError&&(O(!0),f(!1))})).catch((function(){return f(!1)}))}else O(!0),f(!0)}),[]),Object(h.jsxs)("section",{className:"section-PaymentSuccessPage",children:[t?"success"==T&&m?Object(h.jsxs)("div",{className:"status-box done",children:[Object(h.jsx)("img",{src:r.a,alt:""}),Object(h.jsx)("h3",{children:"THANK YOU!"}),Object(h.jsx)("h4",{children:I}),p?Object(h.jsx)(i.b,{to:"/",children:"Back to home"}):Object(h.jsx)(i.b,{to:"/account/order-history",children:"View orders"})]}):"cancel"==T?Object(h.jsxs)("div",{className:"status-box done",children:[Object(h.jsx)("img",{src:n.a,alt:""}),Object(h.jsx)("h4",{children:"Your order cancelled"}),Object(h.jsx)(i.b,{to:"/checkout",children:"Back to checkout"})]}):"failed"==T?Object(h.jsxs)("div",{className:"status-box done",children:[Object(h.jsx)("img",{src:n.a,alt:""}),Object(h.jsx)("h3",{children:"OOP!"}),Object(h.jsx)("h4",{children:"Your order was failed. Please try again"}),Object(h.jsx)(i.b,{to:"/checkout",children:"Back to checkout"})]}):"":Object(h.jsxs)("section",{className:"verify",children:[Object(h.jsx)("h4",{children:"Searching for verify order"}),Object(h.jsxs)("div",{className:"lds-ellipsis",children:[Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{})]})]}),t&&!m?Object(h.jsxs)("div",{className:"status-box done",children:[Object(h.jsx)("img",{src:n.a,alt:""}),Object(h.jsx)("h4",{children:"VERIFICATION FAILED"}),Object(h.jsx)("h4",{children:"Your order is incorrect. Please try again"}),Object(h.jsx)(i.b,{to:"/checkout",children:"Back to checkout"})]}):""]})}}}]);
//# sourceMappingURL=41.0b92b637.chunk.js.map