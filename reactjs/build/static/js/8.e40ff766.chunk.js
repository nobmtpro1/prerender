(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[8],{313:function(e,a,t){"use strict";t.r(a);var n=t(54),c=t(5),l=t(10),i=t(17),r=t(1),d=t(270),s=t(64),o=t(0);function u(e){var a=e.config,t=e.name,n=Object(r.useState)(!1),c=Object(l.a)(n,2),d=c[0],s=c[1],u=Object(r.useCallback)((function(e){e&&(e.submit(),s(!0))}),[s]);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("iframe",{name:t}),!d&&Object(o.jsx)("form",{target:t,action:a.url,method:a.method,ref:function(e){u(e)},onLoad:function(){},children:Object.keys(a.data).map((function(e){return"checkboxes"==a.data[e].type||"multiselect"==a.data[e].type?function(e,a){return Object(o.jsx)(o.Fragment,{children:null===a||void 0===a?void 0:a.value.split(",").map((function(a,t){return Object(o.jsx)("input",{type:"hidden",name:e,value:Object(i.trim)(a)},"".concat(e,"_").concat(t))}))})}(e,a.data[e]):"checkbox"==a.data[e].type&&"true"!=a.data[e].value?Object(o.jsx)(o.Fragment,{}):Object(o.jsx)("input",{type:"hidden",name:e,value:"string"===typeof a.data[e].value?a.data[e].value:JSON.stringify(a.data[e].value)},e)}))})]})}var j=Object(r.memo)(u),m=t(11),b=t(39),v=t(65),O=t.n(v);function f(e){var a=e.content,t=void 0===a?{}:a,u=e.formField,v=void 0===u?{}:u,f=e.url,h=void 0===f?"":f,p=Object(r.useState)({}),x=Object(l.a)(p,2),_=x[0],g=x[1],y=Object(r.useState)(!1),N=Object(l.a)(y,2),q=N[0],k=N[1],F=Object(r.useState)(!1),S=Object(l.a)(F,2),C=S[0],w=S[1],T=function(e){g(Object(c.a)(Object(c.a)({},_),{},Object(n.a)({},e.currentTarget.name,Object(c.a)(Object(c.a)({},_[e.currentTarget.name]),{},{value:Object(i.trim)(e.target.value)}))))},I=function(e){var a=e.target.checked?"true":"";g(Object(c.a)(Object(c.a)({},_),{},Object(n.a)({},e.target.name,Object(c.a)(Object(c.a)({},_[e.target.name]),{},{value:Object(i.trim)(a)}))))};return Object(r.useEffect)((function(){if(Object(i.isArray)(null===v||void 0===v?void 0:v.values)){var e={};v.values.map((function(a){var t=null===a||void 0===a?void 0:a.default_value;if("hidden"==a.field_type&&""==t&&(t="default"),"radio"==a.field_type){var n=Object(i.split)(null===a||void 0===a?void 0:a.choices,",");if(t=n.length>0?n[0]:"",""!=(null===a||void 0===a?void 0:a.default_value)){var c=Object(i.findIndex)(n,(function(e){return e==e.default_value}));-1!=c&&(t=n[c])}}e[null===a||void 0===a?void 0:a.clean_name]={value:t,type:a.field_type}})),g(e)}}),[v]),Object(o.jsxs)("section",{className:"blk-form-field",children:[Object(o.jsx)(s.default,{data:null===t||void 0===t?void 0:t.background}),Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)("img",{src:d.a,loading:"lazy",alt:"Sundora logotype"}),Object(o.jsx)("h3",{dangerouslySetInnerHTML:{__html:null===t||void 0===t?void 0:t.text}}),Object(o.jsx)("h2",{className:"".concat(q?"":"d-none"),children:"Thank you!"}),Object(o.jsxs)("form",{className:"".concat(q?"d-none":""),onSubmit:function(e){e.preventDefault(),w(!0),k(!0),Object(m.q)("Successfully joined")},children:[C?Object(o.jsx)("div",{className:"d-nonesx",children:Object(o.jsx)(j,{name:"collectEmailForm",config:{url:Object(m.m)(h),method:"post",data:_}})}):"",Object(o.jsx)("div",{className:"rowgroup",children:Object(i.map)(null===v||void 0===v?void 0:v.values,(function(e,a){var t,l,r;switch(e.field_type){case"singleline":case"multiline":case"email":case"url":case"date":case"number":return Object(o.jsxs)("div",{className:"form-group ".concat("date"==e.field_type?"off-focus-label":""),children:[Object(o.jsxs)("label",{htmlFor:e.clean_name,className:"text-help animated faster fade-in",children:[e.help_text,"\xa0",Object(o.jsx)("span",{className:"text-danger",children:e.required?"*":""})]}),Object(o.jsx)(b.a,{type:"multiline"!=e.field_type?e.field_type:"textarea",for:e.clean_name,required:e.required,name:e.clean_name,label:e.help_text,value:_.hasOwnProperty(e.clean_name)?null===(t=_[e.clean_name])||void 0===t?void 0:t.value:e.clean_name,validate:!1,validateContent:"",handleChange:T})]},a);case"datetime":return Object(o.jsxs)("div",{className:"form-group off-focus-label",children:[Object(o.jsxs)("label",{htmlFor:e.clean_name,className:"text-help animated faster fade-in",children:[e.help_text,"\xa0",Object(o.jsx)("span",{className:"text-danger",children:e.required?"*":""})]}),Object(o.jsx)(b.a,{type:"datetime-local",for:e.clean_name,name:e.clean_name,label:e.help_text,required:e.required,value:_.hasOwnProperty(e.clean_name)?null===(l=_[e.clean_name])||void 0===l?void 0:l.value:e.clean_name,validate:!1,validateContent:"",handleChange:T})]},a);case"checkbox":return Object(o.jsxs)("div",{className:"form-group-radio",children:[Object(o.jsxs)("label",{htmlFor:e.clean_name,className:"text-help animated faster fade-in",children:[e.help_text,"\xa0",Object(o.jsx)("span",{className:"text-danger",children:e.required?"*":""})]}),Object(o.jsx)("input",{type:e.field_type,id:e.clean_name,name:e.clean_name,value:null===(r=_[e.clean_name])||void 0===r?void 0:r.value,required:e.required,onChange:I}),Object(o.jsx)("label",{className:"text-choise",htmlFor:e.clean_name,children:e.choices})]},a);case"radio":case"checkboxes":return Object(o.jsxs)("div",{className:"form-group-radio",children:[Object(o.jsxs)("label",{htmlFor:e.clean_name,className:"text-help animated faster fade-in",children:[e.help_text,"\xa0",Object(o.jsx)("span",{className:"text-danger",children:e.required?"*":""})]}),Object(o.jsx)("div",{className:"row p-3 pt-0",children:null===e||void 0===e?void 0:e.choices.split(",").map((function(a,t){var l;return Object(o.jsxs)("div",{className:"col-6 group-item",children:[Object(o.jsx)("input",{type:"checkboxes"==e.field_type?"checkbox":e.field_type,id:"".concat(e.clean_name,"_").concat(t),name:"".concat(e.clean_name),value:a,defaultChecked:!("radio"!=e.field_type||!e.required||0!=t),required:!!e.required&&""==(null===(l=_[e.clean_name])||void 0===l?void 0:l.value),onChange:function(a){"checkboxes"!=e.field_type?T(a):function(e,a,t){var l,r,d,s=null===t||void 0===t||null===(l=t.target)||void 0===l?void 0:l.value,o=_[e]?null===(r=_[e])||void 0===r?void 0:r.value:"",u=Object(i.split)(o,",");(null===t||void 0===t||null===(d=t.target)||void 0===d?void 0:d.checked)?u.includes(s)||u.push(s):u=Object(i.filter)(u,(function(e){return e!=s})),u=Object(i.filter)(u,(function(e){return""!=e})),g(Object(c.a)(Object(c.a)({},_),{},Object(n.a)({},e,Object(c.a)(Object(c.a)({},_[e]),{},{value:Object(i.trim)(Object(i.join)(u,","))}))))}(e.clean_name,e.field_type,a)}}),Object(o.jsx)("label",{className:"text-choise",htmlFor:e.clean_name,children:a})]},t)}))})]},a);case"hidden":return Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)(b.a,{type:"hidden",for:"",name:e.clean_name,label:"",required:e.required,value:e.default_value,validate:!1,validateContent:"",handleChange:T})},a);case"dropdown":case"multiselect":return Object(o.jsxs)("div",{className:"form-group select-group",children:[Object(o.jsxs)("label",{htmlFor:e.clean_name,className:"text-help animated faster fade-in",children:[e.help_text,"\xa0",Object(o.jsx)("span",{className:"text-danger",children:e.required?"*":""})]}),Object(o.jsx)(O.a,{placeholder:"Select",className:"primary-select",name:e.clean_name,required:e.required,searchable:!1,labelField:"name",onChange:function(a){var t,l;"multiselect"!=e.field_type?(t=e.clean_name,e.field_type,l=a,g(Object(c.a)(Object(c.a)({},_),{},Object(n.a)({},t,Object(c.a)(Object(c.a)({},_[t]),{},{value:Object(i.trim)(l[0].name)}))))):function(e,a,t){var l=Object(i.map)(t,(function(e){return null===e||void 0===e?void 0:e.name}));g(Object(c.a)(Object(c.a)({},_),{},Object(n.a)({},e,Object(c.a)(Object(c.a)({},_[e]),{},{value:Object(i.trim)(Object(i.join)(l,","))}))))}(e.clean_name,e.field_type,a)},valueField:"name",options:null===e||void 0===e?void 0:e.choices.split(",").map((function(e,a){return{id:a,name:e}})),multi:"multiselect"==e.field_type,values:[]})]},a)}}))}),Object(o.jsx)("p",{dangerouslySetInnerHTML:{__html:null===t||void 0===t?void 0:t.footer},className:"footer"}),Object(o.jsx)("button",{type:"submit",className:"btn-submit",value:"Submit",children:"Submit"})]})]})]})}a.default=Object(r.memo)(f)}}]);
//# sourceMappingURL=8.e40ff766.chunk.js.map