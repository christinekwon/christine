(()=>{"use strict";var n={7945:(n,e,t)=>{t.d(e,{Z:()=>m});var A=t(7537),o=t.n(A),i=t(3645),r=t.n(i),a=t(1667),l=t.n(a),c=new URL(t(4975),t.b),s=new URL(t(4098),t.b),d=new URL(t(4539),t.b),f=r()(o()),u=l()(c),p=l()(s),C=l()(d);f.push([n.id,"@font-face {\n    font-family: Chicago;\n    src: url("+u+");\n}\n\n@font-face {\n    font-family: Geneva;\n    src: url("+p+");\n}\n\n@font-face {\n    font-family: Smaragd;\n    src: url("+C+");\n}\n\nbody {\n    /* font-family: Chicago; */\n    font-family: Smaragd, Times, serif;\n    margin: 0;\n    padding: 0;\n    /* font-family: 'Times New Roman', Times, serif; */\n    /* font-family: 'Roboto Mono', monospace; */\n}\n\nhtml {\n    transition: 1s;\n    background: black;\n    color: white;\n}","",{version:3,sources:["webpack://./src/css/base.css"],names:[],mappings:"AAAA;IACI,oBAAoB;IACpB,4CAAiC;AACrC;;AAEA;IACI,mBAAmB;IACnB,4CAAqC;AACzC;;AAEA;IACI,oBAAoB;IACpB,4CAAsC;AAC1C;;AAEA;IACI,0BAA0B;IAC1B,kCAAkC;IAClC,SAAS;IACT,UAAU;IACV,kDAAkD;IAClD,2CAA2C;AAC/C;;AAEA;IACI,cAAc;IACd,iBAAiB;IACjB,YAAY;AAChB",sourcesContent:["@font-face {\n    font-family: Chicago;\n    src: url(../fonts/ChiKareGo2.ttf);\n}\n\n@font-face {\n    font-family: Geneva;\n    src: url(../fonts/FindersKeepers.ttf);\n}\n\n@font-face {\n    font-family: Smaragd;\n    src: url(../fonts/smaragd/Smaragd.otf);\n}\n\nbody {\n    /* font-family: Chicago; */\n    font-family: Smaragd, Times, serif;\n    margin: 0;\n    padding: 0;\n    /* font-family: 'Times New Roman', Times, serif; */\n    /* font-family: 'Roboto Mono', monospace; */\n}\n\nhtml {\n    transition: 1s;\n    background: black;\n    color: white;\n}"],sourceRoot:""}]);const m=f},8850:(n,e,t)=>{t.d(e,{Z:()=>a});var A=t(7537),o=t.n(A),i=t(3645),r=t.n(i)()(o());r.push([n.id,".header {\n    display: flex;\n    position: fixed;\n    top: 0;\n    /* padding: 1%; */\n    left: 0;\n    width: 100%;\n    height: 60px;\n    /* background-color: black; */\n    /* border: 2px solid blue; */\n}\n\n.header-link {\n    display: block;\n    /* border: solid 2px red; */\n    padding: 6px 16px;\n    /* margin: 25px; */\n    color: rgb(200, 0, 0);\n    font-size: 20px;\n    text-decoration: none;\n    transition: 0.5s;\n    /* background-color: black; */\n    line-height: 40px;\n}\n\n.header-left {\n    /* display: flex; */\n    position: absolute;\n    float: left;\n    /* left: 3%; */\n    /* width: fit-content; */\n    /* width: 100%; */\n    height: 40px;\n}\n\n.header-right {\n    text-align: right;\n    /* display: flex; */\n    position: absolute;\n    float: right;\n    right: 0%;\n    /* border: solid 2px blue; */\n}\n\n.header-link:hover {\n    color: red;\n}","",{version:3,sources:["webpack://./src/css/header.css"],names:[],mappings:"AAAA;IACI,aAAa;IACb,eAAe;IACf,MAAM;IACN,iBAAiB;IACjB,OAAO;IACP,WAAW;IACX,YAAY;IACZ,6BAA6B;IAC7B,4BAA4B;AAChC;;AAEA;IACI,cAAc;IACd,2BAA2B;IAC3B,iBAAiB;IACjB,kBAAkB;IAClB,qBAAqB;IACrB,eAAe;IACf,qBAAqB;IACrB,gBAAgB;IAChB,6BAA6B;IAC7B,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;IACnB,kBAAkB;IAClB,WAAW;IACX,cAAc;IACd,wBAAwB;IACxB,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;IACnB,kBAAkB;IAClB,YAAY;IACZ,SAAS;IACT,4BAA4B;AAChC;;AAEA;IACI,UAAU;AACd",sourcesContent:[".header {\n    display: flex;\n    position: fixed;\n    top: 0;\n    /* padding: 1%; */\n    left: 0;\n    width: 100%;\n    height: 60px;\n    /* background-color: black; */\n    /* border: 2px solid blue; */\n}\n\n.header-link {\n    display: block;\n    /* border: solid 2px red; */\n    padding: 6px 16px;\n    /* margin: 25px; */\n    color: rgb(200, 0, 0);\n    font-size: 20px;\n    text-decoration: none;\n    transition: 0.5s;\n    /* background-color: black; */\n    line-height: 40px;\n}\n\n.header-left {\n    /* display: flex; */\n    position: absolute;\n    float: left;\n    /* left: 3%; */\n    /* width: fit-content; */\n    /* width: 100%; */\n    height: 40px;\n}\n\n.header-right {\n    text-align: right;\n    /* display: flex; */\n    position: absolute;\n    float: right;\n    right: 0%;\n    /* border: solid 2px blue; */\n}\n\n.header-link:hover {\n    color: red;\n}"],sourceRoot:""}]);const a=r},8779:(n,e,t)=>{t.d(e,{Z:()=>a});var A=t(7537),o=t.n(A),i=t(3645),r=t.n(i)()(o());r.push([n.id,".title {\n    color: rgb(248, 237, 237);\n    width: 100%;\n    text-align: center;\n    display: block;\n    margin: 7vh auto;\n    font-size: 48px;\n    line-height: 72px;\n}\n\n.body-container {\n    font-family: 'Times New Roman', Times, serif;\n    display: block;\n    margin: 0 auto 10% auto;\n    width: 75%;\n}\n\na,\n.inline-link {\n    color: rgb(200, 0, 0);\n    transition: 0.5s\n}\n\na:hover,\n.inline-link:hover {\n    color: red;\n}\n\n.block {\n    display: block;\n    margin: 0 auto;\n    /* border: 2px solid red; */\n    padding: 2%;\n}\n\n.text-block {\n    line-height: 25px;\n}\n\nvideo {\n    display: block;\n    width: 75%;\n    margin: 0 auto;\n}\n\n.youtube-block {\n    position: relative;\n    /* border: 2px solid red; */\n    overflow: hidden;\n    width: 100%;\n}\n\n.youtube-block::after {\n    display: block;\n    content: \"\";\n    padding-top: 56.25%;\n}\n\niframe {\n    position: absolute;\n    top: 10%;\n    left: 10%;\n    width: 80%;\n    height: 80%;\n    /* display: block;\n    margin: 0 auto;\n    width: 100%; */\n}\n\nimg {\n    margin: 2% auto;\n    transition: 1s;\n}\n\n.image-duo>img {\n    margin: 2% auto;\n    max-width: 30%;\n    flex: 25%;\n}\n\n.image-duo {\n    display: flex;\n    flex-direction: row;\n    margin: 0 auto;\n    justify-content: center;\n}\n\n.image-trio>img {\n    margin: 2% auto;\n    max-width: 30%;\n    flex: 25%;\n}\n\n.image-trio {\n    display: flex;\n    flex-direction: row;\n    margin: 0 auto;\n    justify-content: center;\n}\n\n.image-solo>img {\n    display: block;\n    /* border: 2px red solid; */\n    width: 75%;\n}\n\n@media (max-width: 800px) {\n    .body-container {\n        width: 90%;\n    }\n    .image-trio {\n        flex-direction: column;\n    }\n    .image-duo {\n        flex-direction: column;\n    }\n    img {\n        min-width: 100%;\n        width: 100%;\n    }\n}","",{version:3,sources:["webpack://./src/css/project.css"],names:[],mappings:"AAAA;IACI,yBAAyB;IACzB,WAAW;IACX,kBAAkB;IAClB,cAAc;IACd,gBAAgB;IAChB,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,4CAA4C;IAC5C,cAAc;IACd,uBAAuB;IACvB,UAAU;AACd;;AAEA;;IAEI,qBAAqB;IACrB;AACJ;;AAEA;;IAEI,UAAU;AACd;;AAEA;IACI,cAAc;IACd,cAAc;IACd,2BAA2B;IAC3B,WAAW;AACf;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,cAAc;IACd,UAAU;IACV,cAAc;AAClB;;AAEA;IACI,kBAAkB;IAClB,2BAA2B;IAC3B,gBAAgB;IAChB,WAAW;AACf;;AAEA;IACI,cAAc;IACd,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,UAAU;IACV,WAAW;IACX;;kBAEc;AAClB;;AAEA;IACI,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,eAAe;IACf,cAAc;IACd,SAAS;AACb;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,cAAc;IACd,uBAAuB;AAC3B;;AAEA;IACI,eAAe;IACf,cAAc;IACd,SAAS;AACb;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,cAAc;IACd,uBAAuB;AAC3B;;AAEA;IACI,cAAc;IACd,2BAA2B;IAC3B,UAAU;AACd;;AAEA;IACI;QACI,UAAU;IACd;IACA;QACI,sBAAsB;IAC1B;IACA;QACI,sBAAsB;IAC1B;IACA;QACI,eAAe;QACf,WAAW;IACf;AACJ",sourcesContent:[".title {\n    color: rgb(248, 237, 237);\n    width: 100%;\n    text-align: center;\n    display: block;\n    margin: 7vh auto;\n    font-size: 48px;\n    line-height: 72px;\n}\n\n.body-container {\n    font-family: 'Times New Roman', Times, serif;\n    display: block;\n    margin: 0 auto 10% auto;\n    width: 75%;\n}\n\na,\n.inline-link {\n    color: rgb(200, 0, 0);\n    transition: 0.5s\n}\n\na:hover,\n.inline-link:hover {\n    color: red;\n}\n\n.block {\n    display: block;\n    margin: 0 auto;\n    /* border: 2px solid red; */\n    padding: 2%;\n}\n\n.text-block {\n    line-height: 25px;\n}\n\nvideo {\n    display: block;\n    width: 75%;\n    margin: 0 auto;\n}\n\n.youtube-block {\n    position: relative;\n    /* border: 2px solid red; */\n    overflow: hidden;\n    width: 100%;\n}\n\n.youtube-block::after {\n    display: block;\n    content: \"\";\n    padding-top: 56.25%;\n}\n\niframe {\n    position: absolute;\n    top: 10%;\n    left: 10%;\n    width: 80%;\n    height: 80%;\n    /* display: block;\n    margin: 0 auto;\n    width: 100%; */\n}\n\nimg {\n    margin: 2% auto;\n    transition: 1s;\n}\n\n.image-duo>img {\n    margin: 2% auto;\n    max-width: 30%;\n    flex: 25%;\n}\n\n.image-duo {\n    display: flex;\n    flex-direction: row;\n    margin: 0 auto;\n    justify-content: center;\n}\n\n.image-trio>img {\n    margin: 2% auto;\n    max-width: 30%;\n    flex: 25%;\n}\n\n.image-trio {\n    display: flex;\n    flex-direction: row;\n    margin: 0 auto;\n    justify-content: center;\n}\n\n.image-solo>img {\n    display: block;\n    /* border: 2px red solid; */\n    width: 75%;\n}\n\n@media (max-width: 800px) {\n    .body-container {\n        width: 90%;\n    }\n    .image-trio {\n        flex-direction: column;\n    }\n    .image-duo {\n        flex-direction: column;\n    }\n    img {\n        min-width: 100%;\n        width: 100%;\n    }\n}"],sourceRoot:""}]);const a=r},3645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",A=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),A&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),A&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,A,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(A)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(r[l]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);A&&r[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),e.push(s))}},e}},1667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},7537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var A=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(A),i="/*# ".concat(o," */");return[e].concat([i]).join("\n")}return[e].join("\n")}},3379:n=>{var e=[];function t(n){for(var t=-1,A=0;A<e.length;A++)if(e[A].identifier===n){t=A;break}return t}function A(n,A){for(var i={},r=[],a=0;a<n.length;a++){var l=n[a],c=A.base?l[0]+A.base:l[0],s=i[c]||0,d="".concat(c," ").concat(s);i[c]=s+1;var f=t(d),u={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==f)e[f].references++,e[f].updater(u);else{var p=o(u,A);A.byIndex=a,e.splice(a,0,{identifier:d,updater:p,references:1})}r.push(d)}return r}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=A(n=n||[],o=o||{});return function(n){n=n||[];for(var r=0;r<i.length;r++){var a=t(i[r]);e[a].references--}for(var l=A(n,o),c=0;c<i.length;c++){var s=t(i[c]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}i=l}}},569:n=>{var e={};n.exports=function(n,t){var A=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!A)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");A.appendChild(t)}},9216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},3565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},9037:n=>{var e,t=(e=[],function(n,t){return e[n]=t,e.filter(Boolean).join("\n")});function A(n,e,A,o){var i;if(A)i="";else{i="",o.supports&&(i+="@supports (".concat(o.supports,") {")),o.media&&(i+="@media ".concat(o.media," {"));var r=void 0!==o.layer;r&&(i+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),i+=o.css,r&&(i+="}"),o.media&&(i+="}"),o.supports&&(i+="}")}if(n.styleSheet)n.styleSheet.cssText=t(e,i);else{var a=document.createTextNode(i),l=n.childNodes;l[e]&&n.removeChild(l[e]),l.length?n.insertBefore(a,l[e]):n.appendChild(a)}}var o={singleton:null,singletonCounter:0};n.exports=function(n){var e=o.singletonCounter++,t=o.singleton||(o.singleton=n.insertStyleElement(n));return{update:function(n){A(t,e,!1,n)},remove:function(n){A(t,e,!0,n)}}}},4975:(n,e,t)=>{n.exports=t.p+"8e04a2c65ef398e7f618.ttf"},4098:(n,e,t)=>{n.exports=t.p+"9d7bcc52ca240cb2146f.ttf"},4539:(n,e,t)=>{n.exports=t.p+"e11895b18c03b33c9470.otf"}},e={};function t(A){var o=e[A];if(void 0!==o)return o.exports;var i=e[A]={id:A,exports:{}};return n[A](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var A in e)t.o(e,A)&&!t.o(n,A)&&Object.defineProperty(n,A,{enumerable:!0,get:e[A]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.p="/christine/",t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(3379),e=t.n(n),A=t(9037),o=t.n(A),i=t(569),r=t.n(i),a=t(3565),l=t.n(a),c=t(9216),s=t.n(c),d=t(7945),f={};f.setAttributes=l(),f.insert=r().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=s(),e()(d.Z,f),d.Z&&d.Z.locals&&d.Z.locals;var u=t(8779),p={};p.setAttributes=l(),p.insert=r().bind(null,"head"),p.domAPI=o(),p.insertStyleElement=s(),e()(u.Z,p),u.Z&&u.Z.locals&&u.Z.locals;var C=t(8850),m={};m.setAttributes=l(),m.insert=r().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=s(),e()(C.Z,m),C.Z&&C.Z.locals&&C.Z.locals})()})();
//# sourceMappingURL=project.76cf4c33fbb8e482c702.js.map