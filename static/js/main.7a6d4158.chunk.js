(this["webpackJsonpcollege-japanece-point"]=this["webpackJsonpcollege-japanece-point"]||[]).push([[0],[,,,,,,,,,,,,,function(e,a,t){},,,,,,,,,,function(e,a,t){},function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(1),n=t.n(c),s=t(17),i=t.n(s),r=(t(23),function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,52)).then((function(a){var t=a.getCLS,c=a.getFID,n=a.getFCP,s=a.getLCP,i=a.getTTFB;t(e),c(e),n(e),s(e),i(e)}))}),o=t(2),l=t(5),j=t(3),d=(t(24),t(0));function m(){return Object(d.jsxs)("div",{className:"footer",children:[Object(d.jsxs)("div",{className:"footer__form-container",children:[Object(d.jsx)("h3",{className:"footer__heading",children:"\u041f\u043e\u0434\u043f\u0438\u0448\u0438\u0441\u044c \u043d\u0430 \u0440\u0430\u0441\u0441\u044b\u043b\u043a\u0443"}),Object(d.jsx)("p",{className:"footer__subheading",children:"\u0431\u0443\u0434\u044c \u0432 \u043a\u0443\u0440\u0441\u0435 \u043d\u043e\u0432\u043e\u0441\u0442\u0435\u0439"}),Object(d.jsx)("input",{type:"text",className:"footer__email-input",placeholder:"Email"}),Object(d.jsx)("button",{className:"footer__send-btn",children:"Send"})]}),Object(d.jsxs)("div",{className:"footer__about-container",children:[Object(d.jsx)("img",{src:"/college-japanece-point/resources/Logo.svg",alt:"Japanese Point",className:"footer__logo"}),Object(d.jsx)("p",{className:"footer__about-text",children:"\xa9 2021, Egorov Ivan, Vernidub Artem"})]})]})}t(26),t(13);function b(e){return Object(d.jsxs)("div",{className:"game-card",children:[Object(d.jsx)("div",{className:"game-card__overlay"}),Object(d.jsxs)("div",{className:"img-container",children:[Object(d.jsx)("img",{className:"game-card__img",src:e.vertical[0],alt:""}),Object(d.jsx)("img",{className:"delete-button",src:"/college-japanece-point/resources/delete.svg",width:"24",height:"24",onClick:function(){fetch("https://japanese-point.herokuapp.com/api/v1/update/",{method:"POST",headers:{"Content-Type":"application/json"},body:'{"id": "'.concat(e.gameId,'", "isInCart":false}')}).then((function(a){return e.magiCounterSet(e.magicCounter+1)}))}})]}),Object(d.jsxs)("div",{className:"game-card__content-container",children:[Object(d.jsx)("div",{className:"game-card__name",children:e.gameName}),Object(d.jsx)("div",{className:"game-card__developer",children:e.gameDeveloper}),Object(d.jsxs)("div",{className:"price-container",children:[e.newPrice?Object(d.jsx)("div",{className:"game-card__discount-percent",children:"-"+new Intl.NumberFormat("en-GB",{style:"percent"}).format(e.newPrice/e.oldPrice)}):Object(d.jsx)(d.Fragment,{}),Object(d.jsx)("div",{className:e.newPrice?"old-price":"current-price",children:0===e.oldPrice?"Free":e.oldPrice+" rub"}),e.newPrice?Object(d.jsx)("div",{className:"new-price",children:e.newPrice+" rub"}):Object(d.jsx)(d.Fragment,{})]})]})]})}t(27);function p(e){return Object(d.jsx)("div",{className:"game-list",children:e.games})}t(28);function u(){return Object(d.jsx)("nav",{className:"navigation",children:Object(d.jsxs)("ul",{className:"navigation__list",children:[Object(d.jsx)(l.c,{className:"deactive",exact:!0,to:"/",children:Object(d.jsx)("li",{className:"navigation__logo-container",children:Object(d.jsx)("img",{className:"navigation__logo",src:"/college-japanece-point/resources/Logo.svg",alt:""})})}),Object(d.jsx)(l.c,{activeClassName:"active",exact:!0,to:"/",children:Object(d.jsx)("li",{className:"navigation__item2",children:"Home"})}),Object(d.jsx)(l.c,{activeClassName:"active",to:"/search",children:Object(d.jsx)("li",{className:"navigation__item3",children:"Search"})}),Object(d.jsx)(l.c,{activeClassName:"active",to:"/library",children:Object(d.jsx)("li",{className:"navigation__item4",children:"Library"})}),Object(d.jsx)(l.c,{activeClassName:"active",to:"/cart",className:"navigation__item5",children:Object(d.jsx)("li",{className:"navigation__cart-container",children:Object(d.jsx)("img",{className:"cart",src:"/college-japanece-point/resources/cart.svg",alt:""})})}),Object(d.jsx)(l.c,{activeClassName:"active",to:"/profile",children:Object(d.jsx)("li",{className:"navigation__user-container",children:Object(d.jsx)("img",{src:"/college-japanece-point/resources/user.svg",alt:""})})})]})})}t(34);function h(){var e=Object(c.useState)(0),a=Object(o.a)(e,2),t=a[0],n=a[1],s=Object(c.useState)(),i=Object(o.a)(s,2),r=i[0],l=i[1],j=Object(c.useState)(0),m=Object(o.a)(j,2),h=m[0],O=m[1];Object(c.useEffect)((function(){fetch("https://japanese-point.herokuapp.com/api/v1/search",{method:"POST",headers:{"Content-Type":"application/json"},body:'{"isInCart": true }'}).then((function(e){return e.json()})).then((function(e){return l(e)}))}),[h]),Object(c.useEffect)((function(){var e;e=r?r.reduce((function(e,a){return e+(a.isInSale?a.gameSalePrice:a.gamePrice)}),0):0,n(e)}),[r]);var g=null===r||void 0===r?void 0:r.map((function(e){return Object(d.jsx)(b,{gameDescription:e.gameDescription,gameDeveloper:e.developer,gameName:e.gameName,newPrice:e.gameSalePrice,oldPrice:e.gamePrice,vertical:e.images.vertical,gameId:e.id,magicCounter:h,magiCounterSet:O},e.gameName)}));return Object(d.jsxs)("div",{className:"cart-page",children:[Object(d.jsx)(u,{}),Object(d.jsxs)("div",{className:"cart-page-container",children:[Object(d.jsx)(p,{games:g}),Object(d.jsxs)("div",{className:"order-final",children:[Object(d.jsxs)("p",{className:"cart-page__price-container",children:["Total price: ",Object(d.jsx)("span",{className:"cart-page__price",children:t})]}),Object(d.jsx)("button",{className:"order-button",children:"ORDER"})]})]})]})}t(35),t(36);function O(e){return Object(d.jsx)("iframe",{className:"youtube-iframe-slideshow",src:e.video,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}function g(e){return Object(d.jsx)("div",{className:e.gameName===e.active?"slide":"notCurrent",children:e.isVideo?Object(d.jsx)(O,{video:e.gameName}):Object(d.jsx)("img",{src:e.gameName})})}t(37);function v(e){var a=Object(c.useState)([""]),t=Object(o.a)(a,2),n=t[0],s=t[1],i=Object(c.useState)(""),r=Object(o.a)(i,2),l=r[0],j=r[1],m=Object(c.useState)(),b=Object(o.a)(m,2),p=b[0],u=b[1];return Object(c.useEffect)((function(){var a;s(null===(a=e.videos)||void 0===a?void 0:a.concat(e.horizontal))}),[e]),Object(c.useEffect)((function(){l||j(null===n||void 0===n?void 0:n[0]);var e=null===n||void 0===n?void 0:n.map((function(e){return Object(d.jsx)(g,{isVideo:n[0]==e,gameName:e,active:l},e)}));u(e)}),[n,l]),Object(d.jsxs)("div",{className:"slideshow-wrapper",children:[Object(d.jsx)("div",{className:"slideshow",children:p}),Object(d.jsxs)("div",{className:"slideshow-controls",children:[Object(d.jsx)("div",{className:"left-btn",onClick:function(){var e=n.findIndex((function(e){return e===l}));j(e-1<0?n[n.length-1]:n[e-1])},children:"<"}),Object(d.jsx)("div",{className:"slideshow-controls__dots",children:null===n||void 0===n?void 0:n.map((function(e,a){return Object(d.jsx)("div",{className:e===l?"active-dot":"notactive-dot",onClick:function(){j(null===n||void 0===n?void 0:n[a])}})}))}),Object(d.jsx)("div",{className:"right-btn",onClick:function(){var e=n.findIndex((function(e){return e===l}));j(n[(e+1)%3])},children:">"})]})]})}t(38);function x(e){var a=Object(j.g)(),t=Object(c.useState)(),n=Object(o.a)(t,2),s=n[0],i=n[1];return Object(c.useEffect)((function(){fetch("https://japanese-point.herokuapp.com/api/v1/search",{method:"POST",headers:{"Content-Type":"application/json"},body:'{"id": "'.concat(a.gameId,'"}')}).then((function(e){return e.json()})).then((function(e){return i(e)}))}),[s]),Object(d.jsxs)("div",{className:"game-page",children:[Object(d.jsx)(u,{}),Object(d.jsxs)("div",{className:"game-page__content",children:[Object(d.jsxs)("div",{className:"game-page__nav-line",children:[Object(d.jsxs)("div",{className:"game-page__come-back",children:[Object(d.jsx)("img",{src:"#",alt:"",className:"game-page__back-arrow"}),Object(d.jsx)("p",{className:"game-page__back-text",children:"Return"})]}),Object(d.jsx)("div",{className:"game-page__text-separator"}),Object(d.jsx)("div",{className:"game-page__current-game",children:null===s||void 0===s?void 0:s[0].gameName})]}),Object(d.jsx)("div",{className:"game-page__game-title",children:null===s||void 0===s?void 0:s[0].gameName}),Object(d.jsxs)("div",{className:"game-page__main-info",children:[Object(d.jsx)("div",{className:"game-page__slideshow-container",children:Object(d.jsx)(v,{horizontal:null===s||void 0===s?void 0:s[0].images.horizontal,videos:null===s||void 0===s?void 0:s[0].videos})}),Object(d.jsxs)("div",{className:"game-page__buy-info",children:[Object(d.jsx)("img",{src:null===s||void 0===s?void 0:s[0].images.logo,alt:"",className:"game-page__logo"}),Object(d.jsxs)("div",{className:"price-container",children:[(null===s||void 0===s?void 0:s[0].gameSalePrice)?Object(d.jsx)("div",{className:"game-card__discount-percent",children:"-"+new Intl.NumberFormat("en-GB",{style:"percent"}).format((null===s||void 0===s?void 0:s[0].gameSalePrice)/(null===s||void 0===s?void 0:s[0].gamePrice))}):Object(d.jsx)(d.Fragment,{}),Object(d.jsx)("div",{className:(null===s||void 0===s?void 0:s[0].gameSalePrice)?"old-price":"current-price",children:0===(null===s||void 0===s?void 0:s[0].gamePrice)?"Free":(null===s||void 0===s?void 0:s[0].gamePrice)+" rub"}),(null===s||void 0===s?void 0:s[0].gameSalePrice)?Object(d.jsx)("div",{className:"new-price",children:(null===s||void 0===s?void 0:s[0].gameSalePrice)+" rub"}):Object(d.jsx)(d.Fragment,{})]}),(null===s||void 0===s?void 0:s[0].isInCart)?Object(d.jsx)("button",{className:"game-page__buy-button",children:"Already in cart"}):Object(d.jsx)("button",{className:"game-page__buy-button",onClick:function(){fetch("https://japanese-point.herokuapp.com/api/v1/update/",{method:"POST",headers:{"Content-Type":"application/json"},body:'{"id": "'.concat(a.gameId,'", "isInCart":true}')}).then((function(e){var a=s;a[0].isInCart=!0,i(a)}))},children:"Add to cart"})]})]})]})]})}t(39);function N(e){var a=Object(j.f)();return 1===a.pathname.length&&(a.pathname=""),Object(d.jsxs)(l.b,{className:"game-card",to:a.pathname+"/"+e.gameId,children:[Object(d.jsx)("div",{className:"img-container",children:Object(d.jsx)("img",{src:e.vertical[0],alt:""})}),Object(d.jsxs)("div",{className:"game-card__content-container",children:[Object(d.jsx)("div",{className:"game-card__name",children:e.gameName}),Object(d.jsx)("div",{className:"game-card__developer",children:e.gameDeveloper}),Object(d.jsxs)("div",{className:"price-container",children:[e.newPrice?Object(d.jsx)("div",{className:"game-card__discount-percent",children:"-"+new Intl.NumberFormat("en-GB",{style:"percent"}).format(e.newPrice/e.oldPrice)}):Object(d.jsx)(d.Fragment,{}),Object(d.jsx)("div",{className:e.newPrice?"old-price":"current-price",children:0===e.oldPrice?"Free":e.oldPrice+" rub"}),e.newPrice?Object(d.jsx)("div",{className:"new-price",children:e.newPrice+" rub"}):Object(d.jsx)(d.Fragment,{})]})]})]})}t(40);function _(e){return Object(d.jsx)("h2",{children:e.headingText})}t(41),t(42),t(43);function f(e){var a,t,n=Object(c.useState)(),s=Object(o.a)(n,2),i=s[0],r=s[1];return Object(c.useEffect)((function(){fetch("https://japanese-point.herokuapp.com/api/v1/search",{method:"POST",headers:{"Content-Type":"application/json"},body:'{"gameName": "'.concat(e.activeGameName,'"}')}).then((function(e){return e.json()})).then((function(e){r(e)}))}),[e]),Object(d.jsx)("div",{className:"home-slideshow-item",children:Object(d.jsx)("img",{src:null===i||void 0===i||null===(a=i[0])||void 0===a||null===(t=a.images)||void 0===t?void 0:t.horizontal[0],alt:"",className:"home-slideshow-item__image"})})}t(44);function P(e){return Object(d.jsxs)("div",{className:"home-slideshow-sidebar-item",children:[Object(d.jsxs)("div",{className:"home-slideshow-sidebar-item__content",children:[Object(d.jsx)("img",{src:e.vertical[0],alt:"",className:"home-slideshow-sidebar-item__img"}),Object(d.jsx)("p",{className:"home-slideshow-sidebar-item__name",children:e.gameName})]}),Object(d.jsx)("div",{className:e.gameName==e.activeSlideName?"home-slideshow-sidebar-item__progressbar-active":"home-slideshow-sidebar-item__progressbar"})]})}function S(){var e=Object(c.useState)([]),a=Object(o.a)(e,2),t=a[0],n=a[1],s=Object(c.useState)(0),i=Object(o.a)(s,2),r=i[0],l=i[1],j=Object(c.useState)(""),m=Object(o.a)(j,2),b=m[0],p=m[1];Object(c.useEffect)((function(){fetch("https://japanese-point.herokuapp.com/api/v1/search",{method:"POST",headers:{"Content-Type":"application/json"},body:'{"isInSale": true}'}).then((function(e){return e.json()})).then((function(e){n(e)}))}),[]),Object(c.useEffect)((function(){setTimeout((function(){var e;l(r+1),p(null===(e=t[r%4])||void 0===e?void 0:e.gameName)}),5e3)}),[r,t]);var u=null===t||void 0===t?void 0:t.map((function(e){return Object(d.jsx)(P,{gameName:e.gameName,vertical:e.images.vertical,activeSlideName:b},e.gameName)}));return Object(d.jsxs)("div",{className:"home-slideshow",children:[Object(d.jsx)("div",{className:"home-slideshow__active",children:Object(d.jsx)(f,{activeGameName:b})}),Object(d.jsx)("div",{className:"home-slideshow__sidebar",children:u})]})}function w(){var e=Object(c.useState)(),a=Object(o.a)(e,2),t=a[0],n=a[1],s=Object(c.useState)(),i=Object(o.a)(s,2),r=i[0],l=i[1];return Object(c.useEffect)((function(){fetch("https://japanese-point.herokuapp.com/api/v1/search",{method:"POST",headers:{"Content-Type":"application/json"},body:'{"isInSale": true }'}).then((function(e){return e.json()})).then((function(e){return l(e)}))}),[]),Object(c.useEffect)((function(){var e=null===r||void 0===r?void 0:r.map((function(e){return Object(d.jsx)(N,{gameId:e.id,gameDescription:e.gameDescription,gameDeveloper:e.developer,gameName:e.gameName,newPrice:e.gameSalePrice,oldPrice:e.gamePrice,vertical:e.images.vertical},e.id)}));n(e)}),[r]),Object(d.jsx)("div",{className:"main-page",children:Object(d.jsxs)("div",{className:"main-page__content",children:[Object(d.jsx)(u,{}),Object(d.jsx)("div",{className:"slideshow-layout",children:Object(d.jsx)(S,{})}),Object(d.jsxs)("div",{className:"main-page__sales-block",children:[Object(d.jsx)(_,{headingText:"\u0421\u043a\u0438\u0434\u043a\u0438"}),Object(d.jsx)("div",{className:"main-page__sales-wrapper",children:Object(d.jsx)("div",{className:"main-page__sales-spotlight-list",children:null===t||void 0===t?void 0:t.slice(0,4)})})]})]})})}t(45);function E(e){var a=Object(c.useState)({minutes:e.minutesInGame%60,hours:e.minutesInGame/60>>0,days:e.minutesInGame/1440>>0}),t=Object(o.a)(a,2),n=t[0],s=(t[1],Object(j.f)());return Object(d.jsxs)(l.b,{className:"game-card",to:s.pathname+"/"+e.gameId,children:[Object(d.jsx)("div",{className:"img-container",children:Object(d.jsx)("img",{src:e.vertical[0],alt:""})}),Object(d.jsxs)("div",{className:"game-card__content-container",children:[Object(d.jsx)("div",{className:"game-card__name",children:e.gameName}),Object(d.jsx)("div",{className:"game-card__developer",children:e.gameDeveloper}),Object(d.jsx)("div",{className:"time-container",children:"".concat(n.days," days ").concat(n.hours," hours ").concat(n.minutes," minutes")})]})]})}t(46);function y(e){return Object(d.jsx)("input",{type:"text",name:"searchString",id:"",className:"game-searchbar",placeholder:"Search",value:e.searchbarString,onChange:function(a){e.setSearchString(a.target.value)}})}t(47);function I(){var e=Object(c.useState)(""),a=Object(o.a)(e,2),t=a[0],n=a[1],s=Object(c.useState)([]),i=Object(o.a)(s,2),r=i[0],l=i[1];Object(c.useEffect)((function(){fetch("https://japanese-point.herokuapp.com/api/v1/search",{method:"POST",headers:{"Content-Type":"application/json"},body:'{"gameName": {"$regex": ".*'.concat(t,'.*" , "$options" : "i"  },\n              "bought": true}')}).then((function(e){return e.json()})).then((function(e){return l(e)}))}),[t]);var j=r.map((function(e){return Object(d.jsx)(E,{gameName:e.gameName,gameDescription:e.gameDescription,gameDeveloper:e.developer,minutesInGame:e.hoursInGame,gameId:e.id,vertical:e.images.vertical},e.gameName)}));return Object(d.jsxs)("div",{className:"library",children:[Object(d.jsx)(u,{}),Object(d.jsxs)("div",{className:"library-page-container",children:[Object(d.jsx)(y,{searchbarString:t,setSearchString:n}),Object(d.jsx)(p,{games:j})]})]})}t(48);function T(e){return Object(d.jsx)("div",{className:e.isEnding?"banner-container banner__ending":"banner-container",children:Object(d.jsxs)("div",{className:"banner",children:[Object(d.jsxs)("div",{className:"banner__top",children:[Object(d.jsx)("p",{className:"banner__text banner__top1",children:"JAPANESE POINT"}),Object(d.jsx)("p",{className:"banner__text banner__top2",children:"JAPANESE POINT"}),Object(d.jsx)("p",{className:"banner__text banner__top3",children:"JAPANESE POINT"}),Object(d.jsx)("p",{className:"banner__text banner__top4",children:"JAPANESE POINT"}),Object(d.jsx)("p",{className:"banner__text banner__top5",children:"JAPANESE POINT"})]}),Object(d.jsxs)("div",{className:"banner__midle",children:[Object(d.jsx)("img",{src:"/college-japanece-point/resources/loading_cube.png",className:"banner__cube-img",alt:""}),Object(d.jsx)("p",{className:"banner__text banner__midle-text",children:"JAPANESE POINT JAPANESE POINT JAPANESE POINT JAPANESE POINT JAPANESE POINT"})]}),Object(d.jsxs)("div",{className:"banner__bottom",children:[Object(d.jsx)("p",{className:"banner__text banner__bottom5",children:"JAPANESE POINT"}),Object(d.jsx)("p",{className:"banner__text banner__bottom4",children:"JAPANESE POINT"}),Object(d.jsx)("p",{className:"banner__text banner__bottom3",children:"JAPANESE POINT"}),Object(d.jsx)("p",{className:"banner__text banner__bottom2",children:"JAPANESE POINT"}),Object(d.jsx)("p",{className:"banner__text banner__bottom1",children:"JAPANESE POINT"})]})]})})}t(49);function C(){return Object(d.jsxs)("div",{className:"profile-page",children:[Object(d.jsx)(u,{}),Object(d.jsx)("div",{className:"profile-page__flex-container",children:Object(d.jsxs)("div",{className:"profile-page__container",children:[Object(d.jsxs)("div",{className:"profile-page__main",children:[Object(d.jsx)("img",{src:"/college-japanece-point/resources/placeholder_user.jpg",alt:"",className:"profile-page__avatar"}),Object(d.jsx)("p",{className:"profile-page__username",children:"Example_Username"})]}),Object(d.jsxs)("div",{className:"profile-page__data",children:[Object(d.jsx)("label",{htmlFor:"email",children:"Your email:"}),Object(d.jsx)("input",{type:"email",name:"email",id:"",value:"example@example.com",disabled:!0}),Object(d.jsx)("h2",{className:"profile-page__password-heading",children:"Change password"}),Object(d.jsx)("label",{htmlFor:"profile-page__password",children:"Your old password:"}),Object(d.jsx)("input",{type:"password",name:"profile-page__password",placeholder:"Enter old password",id:"",className:"profile-page__password"}),Object(d.jsx)("label",{htmlFor:"profile-page__password-new",children:"Your new password:"}),Object(d.jsx)("input",{type:"password",placeholder:"Enter new password",name:"",id:"",className:"profile-page__password-new"})]})]})})]})}t(50);function A(){var e=Object(c.useState)(""),a=Object(o.a)(e,2),t=a[0],n=a[1],s=Object(c.useState)([]),i=Object(o.a)(s,2),r=i[0],l=i[1];Object(c.useEffect)((function(){fetch("https://japanese-point.herokuapp.com/api/v1/search",{method:"POST",headers:{"Content-Type":"application/json"},body:'{"gameName": {"$regex": ".*'.concat(t,'.*", "$options" : "i"  }}')}).then((function(e){return e.json()})).then((function(e){return l(e)}))}),[t]);var j=r.map((function(e){return Object(d.jsx)(N,{gameId:e.id,gameName:e.gameName,gameDescription:e.gameDescription,gameDeveloper:e.developer,newPrice:e.gameSalePrice,oldPrice:e.gamePrice,vertical:e.images.vertical},e.gameName)}));return Object(d.jsxs)("div",{children:[Object(d.jsx)(u,{}),Object(d.jsxs)("div",{className:"search-page-container",children:[Object(d.jsx)(y,{searchbarString:t,setSearchString:n}),Object(d.jsx)(p,{games:j})]})]})}function k(){var e=Object(c.useState)(!0),a=Object(o.a)(e,2),t=a[0],n=a[1],s=Object(c.useState)(!t),i=Object(o.a)(s,2),r=i[0],b=i[1];return Object(c.useEffect)((function(){fetch("https://japanese-point.herokuapp.com/api/v1/search",{method:"POST",headers:{"Content-Type":"application/json"},body:"{}"}).then((function(e){setTimeout((function(){e.json(),b(!0),setTimeout((function(){return n(!1)}),3e3)}),3e3)}))}),[]),t?Object(d.jsx)(T,{isEnding:r}):Object(d.jsxs)(l.a,{basename:"/college-japanece-point",children:[Object(d.jsxs)(j.c,{children:[Object(d.jsx)(j.a,{exact:!0,path:"/",children:Object(d.jsx)(w,{})}),Object(d.jsx)(j.a,{path:"/search/:gameId",component:x}),Object(d.jsx)(j.a,{path:"/search",children:Object(d.jsx)(A,{})}),Object(d.jsx)(j.a,{path:"/library/:gameId",component:x}),Object(d.jsx)(j.a,{path:"/library",children:Object(d.jsx)(I,{})}),Object(d.jsx)(j.a,{path:"/cart",children:Object(d.jsx)(h,{})}),Object(d.jsx)(j.a,{path:"/profile",children:Object(d.jsx)(C,{})}),Object(d.jsx)(j.a,{path:"/:gameId",component:x})]}),Object(d.jsx)(m,{})]})}i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(k,{})}),document.getElementById("root")),r()}],[[51,1,2]]]);
//# sourceMappingURL=main.7a6d4158.chunk.js.map