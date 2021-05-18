(this["webpackJsonpcollege-japanece-point"]=this["webpackJsonpcollege-japanece-point"]||[]).push([[0],{22:function(e,c,a){},23:function(e,c,a){},25:function(e,c,a){},31:function(e,c,a){},32:function(e,c,a){},33:function(e,c,a){},34:function(e,c,a){},35:function(e,c,a){"use strict";a.r(c);var i=a(1),s=a.n(i),r=a(16),n=a.n(r),t=(a(22),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,36)).then((function(c){var a=c.getCLS,i=c.getFID,s=c.getFCP,r=c.getLCP,n=c.getTTFB;a(e),i(e),s(e),r(e),n(e)}))}),d=a(7),l=a(2),o=a(10),m=(a(23),a(0));function j(e){return Object(m.jsxs)("div",{className:"game-card",children:[Object(m.jsx)("div",{className:"img-container",children:Object(m.jsx)("img",{src:"/resources/placeholder_200x250.png",alt:""})}),Object(m.jsxs)("div",{className:"game-card__content-container",children:[Object(m.jsx)("div",{children:e.gameName}),Object(m.jsx)("div",{className:"game-card__developer",children:e.gameDeveloper}),Object(m.jsx)("div",{className:"game-card__description",children:e.gameDescription}),Object(m.jsxs)("div",{className:"price-container",children:[Object(m.jsx)("div",{className:"old-price",children:e.oldPrice}),Object(m.jsx)("div",{className:"new-price",children:e.newPrice})]})]})]})}a(25);function g(){return Object(m.jsx)("nav",{className:"navigation",children:Object(m.jsxs)("ul",{className:"navigation__list",children:[Object(m.jsx)("li",{className:"navigation__item1",children:Object(m.jsx)(d.b,{to:"/",children:"Japanece Point"})}),Object(m.jsx)("li",{className:"navigation__item2",children:Object(m.jsx)(d.b,{to:"/",children:"Home"})}),Object(m.jsx)("li",{className:"navigation__item3",children:Object(m.jsx)(d.b,{to:"/search",children:"Search for games"})}),Object(m.jsx)("li",{className:"navigation__item4",children:Object(m.jsx)(d.b,{to:"/library",children:"Library"})}),Object(m.jsx)("li",{className:"navigation__item5",children:Object(m.jsx)(d.b,{to:"/cart",children:"Cart Icon"})}),Object(m.jsx)("li",{className:"navigation__item6",children:Object(m.jsx)(d.b,{to:"/profile",children:"User Icon"})})]})})}a(31);function u(e){return Object(m.jsx)("h2",{children:e.headingText})}a(32);function b(e){return Object(m.jsxs)("div",{className:e.gameName===e.active?"slide":"notCurrent",children:[Object(m.jsx)("img",{src:"/resources/placeholder_1200x700.png",alt:""}),Object(m.jsx)("p",{className:"game-name",children:e.gameName}),Object(m.jsx)("p",{className:"game-description",children:"Placeholder game description"})]})}a(33);function p(){var e=Object(i.useState)(["Final Fantasy","Dragon ball","Naruto"]),c=Object(o.a)(e,2),a=c[0],s=(c[1],Object(i.useState)(a[0])),r=Object(o.a)(s,2),n=r[0],t=r[1];var d=a.map((function(e){return Object(m.jsx)(b,{gameName:e,active:n},e)}));return Object(m.jsx)("div",{className:"slideshow-wrapper",children:Object(m.jsxs)("div",{className:"slideshow",children:[d,Object(m.jsx)("div",{className:"left-btn",onClick:function(){var e=a.findIndex((function(e){return e===n}));t(e-1<0?a[a.length-1]:a[e-1])},children:"<"}),Object(m.jsx)("div",{className:"right-btn",onClick:function(){var e=a.findIndex((function(e){return e===n}));t(a[(e+1)%3])},children:">"})]})})}var h=[{gameName:"Final Fantasy",developer:"Square Enix",gameDescription:"Some game description",gamePrice:3e3,currency:"\u0440\u0443\u0431",isInSale:!0,gameSalePrice:1500,images:["./resources/images/ff/ff_1.jpg, ./resources/images/ff/ff_2.jpg"],videos:["./resources/videos/ff/ff_1.mp4"]},{gameName:"Naruto",developer:"Bandai namco",gameDescription:"Some game description",gamePrice:4e3,currency:"\u0440\u0443\u0431",isInSale:!1,gameSalePrice:null,images:["./resources/images/naruto/naruto_1.jpg, ./resources/images/naruto/naruto_2.jpg"],videos:["./resources/videos/naruto/naruto_1.mp4"]},{gameName:"Dragon's Dogma",developer:"Campcom",gameDescription:"Some game description",gamePrice:1500,currency:"\u0440\u0443\u0431",isInSale:!0,gameSalePrice:300,images:["./resources/images/dd/dd_1.jpg, ./resources/images/dd/dd_2.jpg"],videos:["./resources/videos/dd/dd_1.mp4"]},{gameName:"Dragon Quest",developer:"Square Enix",gameDescription:"Some game description",gamePrice:2500,currency:"\u0440\u0443\u0431",isInSale:!0,gameSalePrice:1e3,images:["./resources/images/dq/dq_1.jpg, ./resources/images/dq/dq_2.jpg"],videos:["./resources/videos/dq/dq_1.mp4"]},{gameName:"Doki Doki Literature club",developer:"Team Salvato",gameDescription:"Some game description",gamePrice:0,currency:"\u0440\u0443\u0431",isInSale:!1,gameSalePrice:null,images:["./resources/images/ddlc/ddlc_1.jpg, ./resources/images/ddlc/ddlc_2.jpg"],videos:["./resources/videos/ddlc/ddlc_1.mp4"]},{gameName:"Fire Emblem",developer:"Nintendo",gameDescription:"Some game description",gamePrice:5e3,currency:"\u0440\u0443\u0431",isInSale:!0,gameSalePrice:2500,images:["./resources/images/ddlc/ddlc_1.jpg, ./resources/images/ddlc/ddlc_2.jpg"],videos:["./resources/videos/ddlc/ddlc_1.mp4"]}];a(34);function x(){var e=Object(i.useState)(h),c=Object(o.a)(e,2),a=c[0],s=(c[1],a.map((function(e){if(e.isInSale)return Object(m.jsx)(j,{gameDescription:e.gameDescription,gameDeveloper:e.developer,gameName:e.gameName,newPrice:e.gameSalePrice,oldPrice:e.gamePrice},e.gameName)})).filter((function(e){return void 0!==e})));return console.log(s),Object(m.jsxs)("div",{className:"main-page",children:[Object(m.jsx)(g,{}),Object(m.jsx)("div",{className:"slideshow-layout",children:Object(m.jsx)(p,{})}),Object(m.jsx)(u,{headingText:"\u0421\u043a\u0438\u0434\u043a\u0438"}),Object(m.jsx)("div",{className:"main-page__sales-wrapper",children:Object(m.jsx)("div",{className:"main-page__sales-spotlight-list",children:s.slice(0,4)})})]})}function O(){return Object(m.jsx)("div",{children:Object(m.jsx)(g,{})})}function v(){return Object(m.jsx)("div",{children:Object(m.jsx)(g,{})})}function f(){return Object(m.jsx)("div",{children:Object(m.jsx)(g,{})})}function _(){return Object(m.jsx)("div",{children:Object(m.jsx)(g,{})})}n.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(d.a,{children:Object(m.jsxs)(l.c,{children:[Object(m.jsx)(l.a,{exact:!0,path:"/",children:Object(m.jsx)(x,{})}),Object(m.jsx)(l.a,{path:"/search",children:Object(m.jsx)(O,{})}),Object(m.jsx)(l.a,{path:"/library",children:Object(m.jsx)(v,{})}),Object(m.jsx)(l.a,{path:"/cart",children:Object(m.jsx)(f,{})}),Object(m.jsx)(l.a,{path:"/profile",children:Object(m.jsx)(_,{})})]})})}),document.getElementById("root")),t()}},[[35,1,2]]]);
//# sourceMappingURL=main.5948453b.chunk.js.map