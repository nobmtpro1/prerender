(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[15],{340:function(e,n,a){"use strict";a.r(n);var c=a(0),r=a(2),l=a(24),t=["#","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];function i(e){var n=e.data,a=Object(l.reduce)(n.brands,(function(e,n){var a=n.name[0];return("#"==a||"#"!=a&&-1==t.indexOf(a))&&(a="#"),e[a]?e[a].children.push(n):e[a]={group:a,children:[n]},e}),{}),r=Object.values(a);return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("section",{className:"blk-all-brands container",children:[Object(c.jsx)("div",{className:"box-title",children:Object(c.jsx)("h1",{children:null===n||void 0===n?void 0:n.headline})}),Object(c.jsx)("div",{className:"box-alphabet",children:Object(l.map)(t,(function(e,n){return Object(c.jsx)("div",{className:"box-alphabet__detail",children:Object(c.jsx)("a",{href:"#".concat(e),children:e})},n)}))}),Object(c.jsx)("div",{className:"box-all-brands",children:r.sort((function(e,n){return e.group.localeCompare(n.group)})).map((function(e,n){return Object(c.jsxs)("div",{id:e.group,className:"box-all-brands__detail",children:[Object(c.jsx)("h2",{children:e.group}),Object(c.jsx)("ul",{children:Object(l.map)(e.children,(function(e,n){var a,r;return Object(c.jsx)("li",{children:Object(c.jsx)("a",{className:"".concat((null===e||void 0===e||null===(a=e.brand_page)||void 0===a?void 0:a.relative_url)?"":"un-active"),href:null===e||void 0===e||null===(r=e.brand_page)||void 0===r?void 0:r.relative_url,dangerouslySetInnerHTML:{__html:e.name}})},n)}))})]},n)}))})]})})}n.default=Object(r.memo)(i)}}]);
//# sourceMappingURL=15.c214bd61.chunk.js.map