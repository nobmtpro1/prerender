(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[45],{237:function(e,t,c){"use strict";c.r(t);var l=c(2),s=c.n(l),i=c(14),d=c(10),a=c(17),n=c(1),r=c(20),j=c(63),o=(c(598),c(6)),b=c(11),h=c(265),x=c.n(h),u=c(0);t.default=function(){var e,t,c,l,h,O,m,p,v,N,y,g,f,_,w,T,R,E,k,D,I,P,S,B,M,C=Object(n.useState)(null),q=Object(d.a)(C,2),F=q[0],H=q[1],A=Object(r.i)().id,G=function(){var e=Object(i.a)(s.a.mark((function e(){var t,c,l,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Object(a.isEmpty)(F)){e.next=15;break}return t={url:"".concat(o.h).concat(A,"/"),method:"GET",body:null},c=[Object(b.e)(t)],e.prev=3,e.next=6,Promise.all(c);case 6:l=e.sent,i=l[0],H(null===i||void 0===i?void 0:i.data),window.addEventListener("afterprint",(function(){window.close()})),window.print(),e.next=15;break;case 13:e.prev=13,e.t0=e.catch(3);case 15:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){G()}),[]);var J=Object(a.reduce)(null===F||void 0===F||null===(e=F.order)||void 0===e?void 0:e.line_items,(function(e,t){return e+t.quantity}),0);return Object(u.jsxs)("section",{className:"receipt",children:[Object(u.jsxs)("div",{className:"header-receipt",children:[Object(u.jsx)("img",{className:"py-2",src:j.a,width:"150",alt:"logo-sundora"}),Object(u.jsx)("p",{children:"Sundora"}),Object(u.jsx)("p",{children:"Banani 2 Outlet"}),Object(u.jsx)("p",{children:"House No #38, Road No#12, Block E, Banani-1212"}),Object(u.jsx)("p",{children:"01979793041"}),Object(u.jsx)("p",{children:"www.sundora.com.bd"}),Object(u.jsx)("p",{children:"BIN-002884759-0101"}),Object(u.jsx)("p",{children:"Musak 6.3"})]}),Object(u.jsx)("div",{className:"inf-receipt",children:Object(u.jsx)("p",{children:(null===F||void 0===F?void 0:F.order)&&(null===F||void 0===F||null===(t=F.order)||void 0===t?void 0:t.created_at)?x()(null===F||void 0===F||null===(c=F.order)||void 0===c?void 0:c.created_at).utcOffset(null===F||void 0===F||null===(l=F.order)||void 0===l?void 0:l.created_at).format("DD-MM-yyyy hh:mm a"):"-"})}),Object(u.jsxs)("div",{className:"inf-customer",children:[Object(u.jsxs)("p",{children:["Order ID: #6",null===F||void 0===F||null===(h=F.order)||void 0===h?void 0:h.order_number]}),Object(u.jsxs)("p",{children:["Customer: ",null===F||void 0===F||null===(O=F.user)||void 0===O?void 0:O.first_name," ",null===F||void 0===F||null===(m=F.user)||void 0===m?void 0:m.last_name]}),Object(u.jsxs)("p",{children:["Company Name: ",null!=(null===F||void 0===F?void 0:F.company_name)?null===F||void 0===F?void 0:F.company_name:"-"]}),Object(u.jsxs)("p",{children:["Phone Number: ",(null===F||void 0===F||null===(p=F.user)||void 0===p?void 0:p.phone)||"-"]}),Object(u.jsxs)("p",{children:["E-Mail: ",(null===F||void 0===F||null===(v=F.user)||void 0===v?void 0:v.email)||"-"]})]}),Object(u.jsx)("div",{className:"item-list",children:Object(u.jsx)("div",{className:"table",children:Object(u.jsx)("table",{children:Object(u.jsxs)("tbody",{children:[Object(u.jsxs)("tr",{className:"tabletitle",children:[Object(u.jsx)("td",{className:"title",children:Object(u.jsx)("p",{children:"Product ID / Item Name"})}),Object(u.jsx)("td",{className:"Hours text-right",children:Object(u.jsx)("p",{children:"Qty."})}),Object(u.jsx)("td",{className:"item",children:Object(u.jsx)("p",{children:"Price"})}),Object(u.jsx)("td",{className:"Disc text-right",children:Object(u.jsx)("p",{children:"Discount"})}),Object(u.jsx)("td",{className:"Rate text-right",children:Object(u.jsx)("p",{children:"Total"})})]}),Object(a.map)(null===F||void 0===F||null===(N=F.order)||void 0===N?void 0:N.line_items,(function(e,t){return Object(u.jsxs)("tr",{className:"service",children:[Object(u.jsx)("td",{className:"tableitem nameProduct",children:Object(u.jsxs)("p",{className:"itemtex",children:[Object(u.jsxs)("span",{children:[null===e||void 0===e?void 0:e.sku," / "]}),Object(u.jsx)("span",{children:null===e||void 0===e?void 0:e.name})]})}),Object(u.jsx)("td",{className:"tableitem",children:Object(u.jsx)("p",{className:"itemtext text-right",children:null===e||void 0===e?void 0:e.quantity})}),Object(u.jsx)("td",{className:"tableitem",children:Object(u.jsx)("p",{className:"price",children:(null===e||void 0===e?void 0:e.price)?Object(b.l)(null===e||void 0===e?void 0:e.price):""})}),Object(u.jsx)("td",{className:"tableitem",children:Object(u.jsx)("p",{className:"itemtext text-right",children:(null===e||void 0===e?void 0:e.total_discount)?"-"+Object(b.l)(null===e||void 0===e?void 0:e.total_discount):""})}),Object(u.jsx)("td",{className:"tableitem",children:Object(u.jsx)("p",{className:"itemtext text-right",children:(null===e||void 0===e?void 0:e.price)?Object(b.l)((null===e||void 0===e?void 0:e.price)*(null===e||void 0===e?void 0:e.quantity)-(null===e||void 0===e?void 0:e.total_discount)):""})})]},t)})),Object(u.jsxs)("tr",{className:"tabletitle foot",children:[Object(u.jsx)("td",{style:{paddingTop:16}}),Object(u.jsx)("td",{style:{paddingTop:16}}),Object(u.jsx)("td",{style:{paddingTop:16}}),Object(u.jsx)("td",{className:"Rate",style:{paddingTop:16},children:Object(u.jsx)("p",{className:"text-right",children:"Sub Total"})}),Object(u.jsx)("td",{className:"payment",style:{paddingTop:16},children:Object(u.jsx)("p",{className:"text-right",children:(null===F||void 0===F||null===(y=F.order)||void 0===y?void 0:y.subtotal_without_discount)?Object(b.l)(null===F||void 0===F||null===(g=F.order)||void 0===g?void 0:g.subtotal_without_discount):""})})]}),(null===F||void 0===F||null===(f=F.order)||void 0===f?void 0:f.current_total_discounts)?Object(u.jsxs)("tr",{className:"tabletitle foot",children:[Object(u.jsx)("td",{style:{paddingTop:16}}),Object(u.jsx)("td",{style:{paddingTop:16}}),Object(u.jsx)("td",{style:{paddingTop:16}}),(null===F||void 0===F||null===(_=F.order)||void 0===_||null===(w=_.discount_codes)||void 0===w?void 0:w.length)?Object(u.jsx)("td",{className:"Rate",style:{paddingTop:16},children:Object(u.jsx)("p",{className:"text-right",children:"Discount:"})}):Object(u.jsx)("td",{style:{paddingTop:16}}),Object(u.jsx)("td",{className:"payment",style:{paddingTop:16},children:Object(u.jsx)("p",{className:"text-right",children:(null===F||void 0===F||null===(T=F.order)||void 0===T||null===(R=T.discount_codes)||void 0===R?void 0:R.length)?"- "+Object(b.l)(null===F||void 0===F||null===(E=F.order)||void 0===E?void 0:E.discount_codes[0].amount):""})})]}):null,Object(u.jsxs)("tr",{className:"tabletitle foot",children:[Object(u.jsx)("td",{}),Object(u.jsx)("td",{}),Object(u.jsx)("td",{})]}),Object(u.jsxs)("tr",{className:"tabletitle foot",children:[Object(u.jsx)("td",{}),Object(u.jsx)("td",{}),Object(u.jsx)("td",{}),Object(u.jsx)("td",{className:"Rate",children:Object(u.jsx)("p",{className:"text-right",children:"VAT (5%)"})}),Object(u.jsx)("td",{className:"payment",children:Object(u.jsx)("p",{className:"text-right",children:(null===F||void 0===F||null===(k=F.order)||void 0===k?void 0:k.total_tax)?Object(b.l)(null===F||void 0===F||null===(D=F.order)||void 0===D?void 0:D.total_tax):""})})]}),Object(u.jsxs)("tr",{className:"tabletitle foot",children:[Object(u.jsx)("td",{}),Object(u.jsx)("td",{}),Object(u.jsx)("td",{}),Object(u.jsx)("td",{className:"Rate",children:Object(u.jsx)("p",{className:"text-right",children:"SHIPPING FEE"})}),Object(u.jsx)("td",{className:"payment",children:Object(u.jsx)("p",{className:"text-right",children:(null===F||void 0===F||null===(I=F.order)||void 0===I?void 0:I.total_shipping)&&parseFloat(null===F||void 0===F||null===(P=F.order)||void 0===P?void 0:P.total_shipping)>0?Object(u.jsx)("span",{children:Object(b.l)(null===F||void 0===F||null===(S=F.order)||void 0===S?void 0:S.total_shipping)}):Object(u.jsx)("span",{className:"free-shipping",children:"FREE"})})})]}),Object(u.jsxs)("tr",{className:"tabletitle foot",children:[Object(u.jsx)("td",{}),Object(u.jsx)("td",{}),Object(u.jsx)("td",{}),Object(u.jsx)("td",{className:"Rate",children:Object(u.jsx)("p",{className:"text-right",children:"Total"})}),Object(u.jsx)("td",{className:"payment",children:Object(u.jsx)("p",{className:"text-right",children:(null===F||void 0===F||null===(B=F.order)||void 0===B?void 0:B.current_total_price)?Object(b.l)(null===F||void 0===F||null===(M=F.order)||void 0===M?void 0:M.current_total_price):""})})]}),Object(u.jsxs)("tr",{className:"tabletitle foot",children:[Object(u.jsx)("td",{}),Object(u.jsx)("td",{}),Object(u.jsx)("td",{}),Object(u.jsx)("td",{className:"Rate",children:Object(u.jsx)("p",{className:"text-right",children:"Number of items sold"})}),Object(u.jsx)("td",{className:"payment",children:Object(u.jsx)("p",{className:"text-right",children:J||""})})]}),Object(u.jsxs)("tr",{className:"tabletitle foot",children:[Object(u.jsx)("td",{}),Object(u.jsx)("td",{}),Object(u.jsx)("td",{}),Object(u.jsx)("td",{className:"Rate",children:Object(u.jsx)("p",{className:"text-right",children:"Cash"})}),Object(u.jsx)("td",{className:"payment",children:Object(u.jsx)("p",{className:"text-right",children:"-"})})]}),Object(u.jsxs)("tr",{className:"tabletitle foot",children:[Object(u.jsx)("td",{}),Object(u.jsx)("td",{}),Object(u.jsx)("td",{}),Object(u.jsx)("td",{className:"Rate",children:Object(u.jsx)("p",{className:"text-right",children:"MTB"})}),Object(u.jsx)("td",{className:"payment",children:Object(u.jsx)("p",{className:"text-right",children:"-"})})]}),Object(u.jsxs)("tr",{className:"tabletitle foot",children:[Object(u.jsx)("td",{}),Object(u.jsx)("td",{}),Object(u.jsx)("td",{}),Object(u.jsx)("td",{className:"Rate",children:Object(u.jsx)("p",{className:"text-right",children:"Change Amount"})}),Object(u.jsx)("td",{className:"payment",children:Object(u.jsx)("p",{className:"text-right",children:"-"})})]})]})})})}),Object(u.jsx)("div",{className:"inf-foot",children:Object(u.jsxs)("p",{children:["If you are not completely satisfied with your Sundora purchases. you may return the merchandise with your receipt and the original form of payment. We will be glad to credit you in the same form of payment with which your purchase was made when you return your item within 7 days of the purchase date. ",Object(u.jsx)("br",{})," ",Object(u.jsx)("br",{})," Sundora shall not accept returns without a receipt or where the product has been opened/damaged in any way."]})})]})}},598:function(e,t,c){}}]);
//# sourceMappingURL=45.23798081.chunk.js.map