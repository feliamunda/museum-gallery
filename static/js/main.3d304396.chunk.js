(this["webpackJsonpmuseum-gallery"]=this["webpackJsonpmuseum-gallery"]||[]).push([[0],[,,,,,,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),r=n(4),a=n.n(r),s=(n(9),n(2)),o=n(0);var l=function(t){return Object(o.jsxs)("figure",{className:t.className,children:[Object(o.jsx)("img",{src:t.src,alt:t.alt,className:t.shrinkHeight?"shrink-height":""}),Object(o.jsxs)("figcaption",{children:[t.caption,t.copyright?" - Copyright: "+t.copyright:""]})]})};n(11);function u(t){var e=!!t.isRandom&&t.isRandom,n=Object(c.useState)([]),i=Object(s.a)(n,2),r=i[0],a=i[1],u=Object(c.useState)(""),h=Object(s.a)(u,2),j=h[0],b=h[1],f=Object(c.useState)(!1),d=Object(s.a)(f,2),m=d[0],g=d[1];Object(c.useEffect)((function(){var t=j;""===j&&(t="https://api.harvardartmuseums.org/".concat("image","?apikey=").concat("b4bb385f-460c-4a90-9922-d049bb8fdda2").concat(e?"&sort=random":"")),fetch(t).then((function(t){return t.json()})).then((function(t){b(t.info.next),g(!1),a(r.concat(t.records))})).catch((function(t){return console.log("Error whiling consulting Api")}))}),[m]);return Object(o.jsx)("section",{className:"gallery",onScroll:function(t){t.target.scrollWidth-5e3<t.target.scrollLeft&&g(!0)},children:function(){var t=[];return r.length>0&&r.forEach((function(e){var n="",c=!1;null!=e.caption&&""===n&&(n=e.caption),null!=e.renditionnumber&&""===n&&(n=e.renditionnumber),e.height>e.width&&(c=!0),t.push(Object(o.jsx)("div",{className:"frame-container",children:Object(o.jsx)(l,{className:"frame",src:e.baseimageurl,alt:"Alt",caption:n,copyright:e.copyright,shrinkHeight:c})},e.imageid))})),t}()})}n(12);function h(){return Object(o.jsx)("footer",{children:Object(o.jsxs)("span",{children:["Developed by ",Object(o.jsx)("a",{href:"https://github.com/feliamunda",children:"Feliamunda"})]})})}var j=function(t){return Object(o.jsx)("h1",{className:t.className,children:t.title})};n(13);function b(t){return Object(o.jsx)("header",{children:Object(o.jsx)(j,{title:t.title,className:"header-title"})})}n(14);function f(){return Object(o.jsxs)("div",{className:"main-container",children:[Object(o.jsx)(b,{title:"Museum Gallery"}),Object(o.jsx)(u,{}),Object(o.jsx)(h,{})]})}var d=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(f,{})})},m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,r=e.getLCP,a=e.getTTFB;n(t),c(t),i(t),r(t),a(t)}))};a.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(d,{})}),document.getElementById("root")),m()}],[[15,1,2]]]);
//# sourceMappingURL=main.3d304396.chunk.js.map