(()=>{var n={7945:(n,e,t)=>{"use strict";t.d(e,{Z:()=>h});var o=t(7537),r=t.n(o),i=t(3645),a=t.n(i),A=t(1667),c=t.n(A),s=new URL(t(4975),t.b),l=new URL(t(4098),t.b),p=new URL(t(4539),t.b),d=a()(r()),f=c()(s),u=c()(l),C=c()(p);d.push([n.id,"@font-face {\n    font-family: Chicago;\n    src: url("+f+");\n}\n\n@font-face {\n    font-family: Geneva;\n    src: url("+u+");\n}\n\n@font-face {\n    font-family: Smaragd;\n    src: url("+C+");\n}\n\nbody {\n    /* font-family: Chicago; */\n    font-family: Smaragd, Times, serif;\n    margin: 0;\n    padding: 0;\n    /* font-family: 'Times New Roman', Times, serif; */\n    /* font-family: 'Roboto Mono', monospace; */\n}\n\nhtml {\n    transition: 1s;\n    background: black;\n    color: white;\n}","",{version:3,sources:["webpack://./src/css/base.css"],names:[],mappings:"AAAA;IACI,oBAAoB;IACpB,4CAAiC;AACrC;;AAEA;IACI,mBAAmB;IACnB,4CAAqC;AACzC;;AAEA;IACI,oBAAoB;IACpB,4CAAsC;AAC1C;;AAEA;IACI,0BAA0B;IAC1B,kCAAkC;IAClC,SAAS;IACT,UAAU;IACV,kDAAkD;IAClD,2CAA2C;AAC/C;;AAEA;IACI,cAAc;IACd,iBAAiB;IACjB,YAAY;AAChB",sourcesContent:["@font-face {\n    font-family: Chicago;\n    src: url(../fonts/ChiKareGo2.ttf);\n}\n\n@font-face {\n    font-family: Geneva;\n    src: url(../fonts/FindersKeepers.ttf);\n}\n\n@font-face {\n    font-family: Smaragd;\n    src: url(../fonts/smaragd/Smaragd.otf);\n}\n\nbody {\n    /* font-family: Chicago; */\n    font-family: Smaragd, Times, serif;\n    margin: 0;\n    padding: 0;\n    /* font-family: 'Times New Roman', Times, serif; */\n    /* font-family: 'Roboto Mono', monospace; */\n}\n\nhtml {\n    transition: 1s;\n    background: black;\n    color: white;\n}"],sourceRoot:""}]);const h=d},3089:(n,e,t)=>{"use strict";t.d(e,{Z:()=>A});var o=t(7537),r=t.n(o),i=t(3645),a=t.n(i)()(r());a.push([n.id,".border-image {\n    position: absolute;\n    transition: filter 1s ease;\n    stroke: blue;\n    stroke-width: 20px;\n    min-width: 70px;\n}\n\n.outer-accordion:hover .border-image {\n    filter: invert(1);\n}\n\n.corner {\n    width: 5vw;\n    z-index: 2;\n}\n\n.vertical,\n.horizontal {\n    z-index: 1;\n}\n\n.vertical {\n    width: 10%;\n    height: 100%;\n}\n\n.horizontal {\n    width: 100%;\n    height: 34.5%;\n}\n\n.tl-border-image {\n    top: 0;\n    left: 0;\n    transform: rotate(180deg);\n    transform: scaleY(-1);\n}\n\n.tr-border-image {\n    top: 0;\n    right: 0;\n    transform: rotate(180deg);\n}\n\n.br-border-image {\n    bottom: 0;\n    right: 0;\n    transform: rotate(90deg);\n    transform: scaleX(-1);\n}\n\n.bl-border-image {\n    bottom: 0;\n    left: 0;\n}\n\n.top-border-image {\n    top: 0;\n    left: 0;\n}\n\n.right-border-image {\n    top: 0;\n    right: 0;\n}\n\n.bottom-border-image {\n    bottom: 0;\n    left: 0;\n}\n\n.left-border-image {\n    top: 0;\n    left: 0;\n}","",{version:3,sources:["webpack://./src/css/border-images.css"],names:[],mappings:"AAAA;IACI,kBAAkB;IAClB,0BAA0B;IAC1B,YAAY;IACZ,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,UAAU;IACV,UAAU;AACd;;AAEA;;IAEI,UAAU;AACd;;AAEA;IACI,UAAU;IACV,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,MAAM;IACN,OAAO;IACP,yBAAyB;IACzB,qBAAqB;AACzB;;AAEA;IACI,MAAM;IACN,QAAQ;IACR,yBAAyB;AAC7B;;AAEA;IACI,SAAS;IACT,QAAQ;IACR,wBAAwB;IACxB,qBAAqB;AACzB;;AAEA;IACI,SAAS;IACT,OAAO;AACX;;AAEA;IACI,MAAM;IACN,OAAO;AACX;;AAEA;IACI,MAAM;IACN,QAAQ;AACZ;;AAEA;IACI,SAAS;IACT,OAAO;AACX;;AAEA;IACI,MAAM;IACN,OAAO;AACX",sourcesContent:[".border-image {\n    position: absolute;\n    transition: filter 1s ease;\n    stroke: blue;\n    stroke-width: 20px;\n    min-width: 70px;\n}\n\n.outer-accordion:hover .border-image {\n    filter: invert(1);\n}\n\n.corner {\n    width: 5vw;\n    z-index: 2;\n}\n\n.vertical,\n.horizontal {\n    z-index: 1;\n}\n\n.vertical {\n    width: 10%;\n    height: 100%;\n}\n\n.horizontal {\n    width: 100%;\n    height: 34.5%;\n}\n\n.tl-border-image {\n    top: 0;\n    left: 0;\n    transform: rotate(180deg);\n    transform: scaleY(-1);\n}\n\n.tr-border-image {\n    top: 0;\n    right: 0;\n    transform: rotate(180deg);\n}\n\n.br-border-image {\n    bottom: 0;\n    right: 0;\n    transform: rotate(90deg);\n    transform: scaleX(-1);\n}\n\n.bl-border-image {\n    bottom: 0;\n    left: 0;\n}\n\n.top-border-image {\n    top: 0;\n    left: 0;\n}\n\n.right-border-image {\n    top: 0;\n    right: 0;\n}\n\n.bottom-border-image {\n    bottom: 0;\n    left: 0;\n}\n\n.left-border-image {\n    top: 0;\n    left: 0;\n}"],sourceRoot:""}]);const A=a},6560:(n,e,t)=>{"use strict";t.d(e,{Z:()=>A});var o=t(7537),r=t.n(o),i=t(3645),a=t.n(i)()(r());a.push([n.id,"html {\n    background-color: black;\n    /* scroll-behavior: smooth; */\n}\n\nbody {\n    width: 100vw;\n}\n\n#cover {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100vw;\n    height: 100vh;\n    z-index: 10;\n    background: black;\n    pointer-events: none;\n    /* transition: 1s; */\n}\n\n.name {\n    color: rgb(200, 0, 0);\n    color: white;\n    width: 100%;\n    text-align: center;\n    display: block;\n    margin: 3% auto;\n    font-size: 6vw;\n    text-transform: uppercase;\n    text-decoration: none;\n    transition: 0.5s;\n}\n\n.seal {\n    display: block;\n    width: 20%;\n    margin: 5% auto;\n    filter: grayscale(100%);\n    border-radius: 5px;\n}\n\n.seal:hover {\n    filter: grayscale(0%);\n}\n\n.box {\n    position: relative;\n    width: 110%;\n    height: 10%;\n    border: solid 2px white;\n    padding: 10px;\n    /* background-color: red; */\n}\n\np {\n    /* font-family: Geneva, Times, serif; */\n    font-family: 'Times New Roman', Times, serif;\n    font-size: 16px;\n}\n\n.accordion {\n    scroll-snap-align: 0;\n    text-transform: uppercase;\n    z-index: 5;\n    position: relative;\n    margin: 0;\n    /* width: 80%; */\n    border: none;\n    text-align: left;\n    outline: none;\n    /* border: solid 1px white; */\n    background-color: transparent;\n    transition: background-color 1s ease, box-shadow 1s ease, color 1s ease;\n}\n\n.outer-accordion {\n    position: relative;\n    background-color: transparent;\n    color: #ffffff;\n    padding: 75px 75px;\n    cursor: pointer;\n    font-size: 18px;\n    box-shadow: inset 0 0 0 4px white, inset 0 0 0 6px black, inset 0 0 0 8px white;\n    /* outline: 5px solid red; */\n}\n\n.inner-accordion {\n    /* width: 70%; */\n    display: block;\n    /* margin: 0 10vw; */\n    padding: 15px;\n    color: #ffffff;\n    cursor: pointer;\n    font-size: 14px;\n    background-color: #000000;\n}\n\n.active.outer-accordion {\n    background-color: #ffffff;\n    box-shadow: inset 0 0 0 4px black, inset 0 0 0 6px white, inset 0 0 0 8px black;\n    color: black;\n}\n\n.active.inner-accordion {\n    background-color: #ffffff;\n    color: black;\n}\n\n.outer-accordion::after {\n    content: '\\002B';\n    font-weight: 900;\n    color: white;\n    font-size: 18px;\n    float: right;\n    margin-left: 5px;\n    margin-top: -5px;\n}\n\n.inner-accordion::after {\n    content: '\\002B';\n    font-weight: 900;\n    color: white;\n    font-size: 15px;\n    float: right;\n    margin-left: 5px;\n    margin-top: -2px;\n}\n\n\n/* .outer-accordion:after {\n    color: #ffffff;\n}\n\n.inner-accordion:after {\n    color: #ffffff;\n} */\n\n\n/* Unicode character for \"minus\" sign (-) */\n\n.active::after {\n    content: \"\\2212\";\n    font-weight: 900;\n    color: black;\n}\n\n.panel {\n    /* padding: 0 18px;  */\n    /* display: block; */\n    margin: 0 auto;\n    width: auto;\n    background-color: transparent;\n    max-height: 0;\n    overflow: hidden;\n    transition: max-height 1s ease;\n}\n\n.outer-panel {\n    /* border: 2px solid red; */\n    width: 100%;\n}\n\n.inner-panel {\n    /* background-color: red; */\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    /* padding: 0 15px; */\n}\n\n.text-only-panel {\n    padding: 0 15px;\n    /* margin: 15px auto; */\n    /* margin: 15px auto; */\n    width: 70%;\n    /* border: 2px solid white; */\n    background-color: rgb(0, 0, 0);\n    color: white;\n}\n\n.half-panel {\n    flex: 50%;\n    width: 100%;\n    margin: 0 auto;\n    display: block;\n    justify-content: center;\n}\n\n.inner-left-panel {\n    /* float: left; */\n    padding: 0 15px;\n    /* margin: 15px auto; */\n    margin: 15px auto;\n    background-color: rgb(0, 0, 0);\n    /* border: 2px solid white; */\n    color: white;\n    /* hor offset, vert offset, blur rad, spread rad */\n    /* box-shadow: 3px 3px 8px 1px white; */\n}\n\n.inner-right-panel {\n    /* float: right; */\n    display: block\n    /* box-shadow: inset 0 0 5px 3px #ffffff; */\n}\n\n.image-block,\n.video-block {\n    width: 90%;\n    display: block;\n    margin: 30px auto;\n    padding: 5px;\n    border: solid 4px white;\n    box-shadow: inset 0 0 0 4px black, inset 0 0 0 5px white;\n    /* box-shadow: 0 0 5px 3px #ffffff; */\n    /* box-shadow: inset 0 0 10px #ffffff; */\n    transition: 1s;\n}\n\n.half-panel {\n    /* overflow: auto; */\n    /* border: 1px solid red; */\n    display: block;\n    max-width: 44%;\n    height: 100%;\n    transition: 1s;\n    /* height: max-content; */\n    /* flex-grow: 1; */\n}\n\n@media screen and (min-width: 801px) {\n    .name:hover {\n        color: red;\n    }\n    .outer-accordion:hover {\n        background-color: #ffffff;\n        box-shadow: inset 0 0 0 4px black, inset 0 0 0 6px white, inset 0 0 0 8px black;\n        color: black;\n    }\n    .outer-accordion:hover:after {\n        filter: invert(1);\n    }\n    .active.outer-accordion:hover:after {\n        filter: invert(0);\n    }\n    .inner-accordion:hover:after {\n        filter: invert(1);\n    }\n    .inner-accordion:hover {\n        color: black;\n        background-color: white;\n    }\n    .active.inner-accordion:hover:after {\n        filter: invert(0);\n    }\n    .inner-accordion:hover {\n        box-shadow: inset 0 0 0 2px white;\n    }\n    .inner-panel {\n        /* display: block; */\n        /* position: relative; */\n        /* border: 1px solid pink; */\n        transition: 1s;\n        overflow: auto;\n        height: auto;\n    }\n    .inner-left-panel {\n        /* overflow: hidden; */\n        /* padding: 0px 15px; */\n    }\n}\n\n@media screen and (max-width: 600px) {\n    .inner-panel {\n        flex-direction: column;\n        width: 100%;\n    }\n    .half-panel {\n        min-width: 80%;\n        width: 100%;\n    }\n    .inner-left-panel {\n        width: 100%;\n        margin: 15px auto 0px auto;\n    }\n    .inner-right-panel {\n        padding: 0px;\n        margin: 0 auto;\n    }\n    .image-block,\n    .video-block {\n        width: 95%;\n        display: block;\n        margin: 15px auto;\n        /* margin: 10px auto; */\n        /* padding: 5px; */\n        border: solid 4px white;\n        /* box-shadow: inset 0 0 0 4px black, inset 0 0 0 5px white; */\n        /* box-shadow: 0 0 5px 3px #ffffff; */\n        /* box-shadow: inset 0 0 10px #ffffff; */\n        transition: 1s;\n    }\n}\n\n.text-block {\n    margin: 15px 0 15px 0;\n}\n\na {\n    color: red;\n}","",{version:3,sources:["webpack://./src/css/work.css"],names:[],mappings:"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",sourcesContent:["html {\n    background-color: black;\n    /* scroll-behavior: smooth; */\n}\n\nbody {\n    width: 100vw;\n}\n\n#cover {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100vw;\n    height: 100vh;\n    z-index: 10;\n    background: black;\n    pointer-events: none;\n    /* transition: 1s; */\n}\n\n.name {\n    color: rgb(200, 0, 0);\n    color: white;\n    width: 100%;\n    text-align: center;\n    display: block;\n    margin: 3% auto;\n    font-size: 6vw;\n    text-transform: uppercase;\n    text-decoration: none;\n    transition: 0.5s;\n}\n\n.seal {\n    display: block;\n    width: 20%;\n    margin: 5% auto;\n    filter: grayscale(100%);\n    border-radius: 5px;\n}\n\n.seal:hover {\n    filter: grayscale(0%);\n}\n\n.box {\n    position: relative;\n    width: 110%;\n    height: 10%;\n    border: solid 2px white;\n    padding: 10px;\n    /* background-color: red; */\n}\n\np {\n    /* font-family: Geneva, Times, serif; */\n    font-family: 'Times New Roman', Times, serif;\n    font-size: 16px;\n}\n\n.accordion {\n    scroll-snap-align: 0;\n    text-transform: uppercase;\n    z-index: 5;\n    position: relative;\n    margin: 0;\n    /* width: 80%; */\n    border: none;\n    text-align: left;\n    outline: none;\n    /* border: solid 1px white; */\n    background-color: transparent;\n    transition: background-color 1s ease, box-shadow 1s ease, color 1s ease;\n}\n\n.outer-accordion {\n    position: relative;\n    background-color: transparent;\n    color: #ffffff;\n    padding: 75px 75px;\n    cursor: pointer;\n    font-size: 18px;\n    box-shadow: inset 0 0 0 4px white, inset 0 0 0 6px black, inset 0 0 0 8px white;\n    /* outline: 5px solid red; */\n}\n\n.inner-accordion {\n    /* width: 70%; */\n    display: block;\n    /* margin: 0 10vw; */\n    padding: 15px;\n    color: #ffffff;\n    cursor: pointer;\n    font-size: 14px;\n    background-color: #000000;\n}\n\n.active.outer-accordion {\n    background-color: #ffffff;\n    box-shadow: inset 0 0 0 4px black, inset 0 0 0 6px white, inset 0 0 0 8px black;\n    color: black;\n}\n\n.active.inner-accordion {\n    background-color: #ffffff;\n    color: black;\n}\n\n.outer-accordion::after {\n    content: '\\002B';\n    font-weight: 900;\n    color: white;\n    font-size: 18px;\n    float: right;\n    margin-left: 5px;\n    margin-top: -5px;\n}\n\n.inner-accordion::after {\n    content: '\\002B';\n    font-weight: 900;\n    color: white;\n    font-size: 15px;\n    float: right;\n    margin-left: 5px;\n    margin-top: -2px;\n}\n\n\n/* .outer-accordion:after {\n    color: #ffffff;\n}\n\n.inner-accordion:after {\n    color: #ffffff;\n} */\n\n\n/* Unicode character for \"minus\" sign (-) */\n\n.active::after {\n    content: \"\\2212\";\n    font-weight: 900;\n    color: black;\n}\n\n.panel {\n    /* padding: 0 18px;  */\n    /* display: block; */\n    margin: 0 auto;\n    width: auto;\n    background-color: transparent;\n    max-height: 0;\n    overflow: hidden;\n    transition: max-height 1s ease;\n}\n\n.outer-panel {\n    /* border: 2px solid red; */\n    width: 100%;\n}\n\n.inner-panel {\n    /* background-color: red; */\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    /* padding: 0 15px; */\n}\n\n.text-only-panel {\n    padding: 0 15px;\n    /* margin: 15px auto; */\n    /* margin: 15px auto; */\n    width: 70%;\n    /* border: 2px solid white; */\n    background-color: rgb(0, 0, 0);\n    color: white;\n}\n\n.half-panel {\n    flex: 50%;\n    width: 100%;\n    margin: 0 auto;\n    display: block;\n    justify-content: center;\n}\n\n.inner-left-panel {\n    /* float: left; */\n    padding: 0 15px;\n    /* margin: 15px auto; */\n    margin: 15px auto;\n    background-color: rgb(0, 0, 0);\n    /* border: 2px solid white; */\n    color: white;\n    /* hor offset, vert offset, blur rad, spread rad */\n    /* box-shadow: 3px 3px 8px 1px white; */\n}\n\n.inner-right-panel {\n    /* float: right; */\n    display: block\n    /* box-shadow: inset 0 0 5px 3px #ffffff; */\n}\n\n.image-block,\n.video-block {\n    width: 90%;\n    display: block;\n    margin: 30px auto;\n    padding: 5px;\n    border: solid 4px white;\n    box-shadow: inset 0 0 0 4px black, inset 0 0 0 5px white;\n    /* box-shadow: 0 0 5px 3px #ffffff; */\n    /* box-shadow: inset 0 0 10px #ffffff; */\n    transition: 1s;\n}\n\n.half-panel {\n    /* overflow: auto; */\n    /* border: 1px solid red; */\n    display: block;\n    max-width: 44%;\n    height: 100%;\n    transition: 1s;\n    /* height: max-content; */\n    /* flex-grow: 1; */\n}\n\n@media screen and (min-width: 801px) {\n    .name:hover {\n        color: red;\n    }\n    .outer-accordion:hover {\n        background-color: #ffffff;\n        box-shadow: inset 0 0 0 4px black, inset 0 0 0 6px white, inset 0 0 0 8px black;\n        color: black;\n    }\n    .outer-accordion:hover:after {\n        filter: invert(1);\n    }\n    .active.outer-accordion:hover:after {\n        filter: invert(0);\n    }\n    .inner-accordion:hover:after {\n        filter: invert(1);\n    }\n    .inner-accordion:hover {\n        color: black;\n        background-color: white;\n    }\n    .active.inner-accordion:hover:after {\n        filter: invert(0);\n    }\n    .inner-accordion:hover {\n        box-shadow: inset 0 0 0 2px white;\n    }\n    .inner-panel {\n        /* display: block; */\n        /* position: relative; */\n        /* border: 1px solid pink; */\n        transition: 1s;\n        overflow: auto;\n        height: auto;\n    }\n    .inner-left-panel {\n        /* overflow: hidden; */\n        /* padding: 0px 15px; */\n    }\n}\n\n@media screen and (max-width: 600px) {\n    .inner-panel {\n        flex-direction: column;\n        width: 100%;\n    }\n    .half-panel {\n        min-width: 80%;\n        width: 100%;\n    }\n    .inner-left-panel {\n        width: 100%;\n        margin: 15px auto 0px auto;\n    }\n    .inner-right-panel {\n        padding: 0px;\n        margin: 0 auto;\n    }\n    .image-block,\n    .video-block {\n        width: 95%;\n        display: block;\n        margin: 15px auto;\n        /* margin: 10px auto; */\n        /* padding: 5px; */\n        border: solid 4px white;\n        /* box-shadow: inset 0 0 0 4px black, inset 0 0 0 5px white; */\n        /* box-shadow: 0 0 5px 3px #ffffff; */\n        /* box-shadow: inset 0 0 10px #ffffff; */\n        transition: 1s;\n    }\n}\n\n.text-block {\n    margin: 15px 0 15px 0;\n}\n\na {\n    color: red;\n}"],sourceRoot:""}]);const A=a},3645:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var A=0;A<this.length;A++){var c=this[A][0];null!=c&&(a[c]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},1667:n=>{"use strict";n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},7537:n=>{"use strict";n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),i="/*# ".concat(r," */");return[e].concat([i]).join("\n")}return[e].join("\n")}},6047:(n,e,t)=>{n.exports=t.p+"portfolio.mp4"},1286:(n,e,t)=>{n.exports=t.p+"variations.mp4"},826:(n,e,t)=>{n.exports=t.p+"butterfly.mp4"},3668:(n,e,t)=>{n.exports=t.p+"dyson.mp4"},9721:(n,e,t)=>{n.exports=t.p+"fabric.mp4"},1124:(n,e,t)=>{n.exports=t.p+"garden.mp4"},4334:(n,e,t)=>{n.exports=t.p+"garlic.mp4"},8498:(n,e,t)=>{n.exports=t.p+"mac.mp4"},1841:(n,e,t)=>{n.exports=t.p+"megan.mp4"},7671:(n,e,t)=>{n.exports=t.p+"munyang.mp4"},3100:(n,e,t)=>{n.exports=t.p+"octopus.mp4"},8145:(n,e,t)=>{n.exports=t.p+"piano.mp4"},1355:(n,e,t)=>{n.exports=t.p+"spiral.mp4"},8415:(n,e,t)=>{n.exports=t.p+"flower.png"},2693:(n,e,t)=>{n.exports=t.p+"microseasons.png"},7502:(n,e,t)=>{n.exports=t.p+"rhythm.png"},9032:(n,e,t)=>{n.exports=t.p+"sequencer.png"},5536:(n,e,t)=>{n.exports=t.p+"variations.png"},4982:(n,e,t)=>{n.exports=t.p+"christmas.png"},8669:(n,e,t)=>{n.exports=t.p+"raytracer.png"},7349:(n,e,t)=>{n.exports=t.p+"spiral.png"},4235:(n,e,t)=>{n.exports=t.p+"ttr.png"},763:(n,e,t)=>{n.exports=t.p+"alpaca0.png"},8476:(n,e,t)=>{n.exports=t.p+"alpaca1.png"},9177:(n,e,t)=>{n.exports=t.p+"bluetooth.jpg"},138:(n,e,t)=>{n.exports=t.p+"e2e.jpg"},1102:(n,e,t)=>{n.exports=t.p+"geolocation.png"},135:(n,e,t)=>{n.exports=t.p+"plugin.png"},5107:(n,e,t)=>{n.exports=t.p+"tigerride.png"},3375:(n,e,t)=>{n.exports=t.p+"tokitalk.png"},1410:(n,e,t)=>{n.exports=t.p+"hackprinceton.png"},2735:(n,e,t)=>{n.exports=t.p+"tinder.jpg"},3379:n=>{"use strict";var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],A=0;A<n.length;A++){var c=n[A],s=o.base?c[0]+o.base:c[0],l=i[s]||0,p="".concat(s," ").concat(l);i[s]=l+1;var d=t(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)e[d].references++,e[d].updater(f);else{var u=r(f,o);o.byIndex=A,e.splice(A,0,{identifier:p,updater:u,references:1})}a.push(p)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var A=t(i[a]);e[A].references--}for(var c=o(n,r),s=0;s<i.length;s++){var l=t(i[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=c}}},569:n=>{"use strict";var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},9216:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},3565:(n,e,t)=>{"use strict";n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},9037:n=>{"use strict";var e,t=(e=[],function(n,t){return e[n]=t,e.filter(Boolean).join("\n")});function o(n,e,o,r){var i;if(o)i="";else{i="",r.supports&&(i+="@supports (".concat(r.supports,") {")),r.media&&(i+="@media ".concat(r.media," {"));var a=void 0!==r.layer;a&&(i+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),i+=r.css,a&&(i+="}"),r.media&&(i+="}"),r.supports&&(i+="}")}if(n.styleSheet)n.styleSheet.cssText=t(e,i);else{var A=document.createTextNode(i),c=n.childNodes;c[e]&&n.removeChild(c[e]),c.length?n.insertBefore(A,c[e]):n.appendChild(A)}}var r={singleton:null,singletonCounter:0};n.exports=function(n){var e=r.singletonCounter++,t=r.singleton||(r.singleton=n.insertStyleElement(n));return{update:function(n){o(t,e,!1,n)},remove:function(n){o(t,e,!0,n)}}}},7899:(n,e,t)=>{var o={"./2D/microseasons.png":2693,"./2D/portfolio.mp4":6047,"./2D/rhythm.png":7502,"./2D/sequencer.png":9032,"./2D/variations.mp4":1286,"./2D/variations.png":5536,"./3D/butterfly.mp4":826,"./3D/christmas.png":4982,"./3D/dyson.mp4":3668,"./3D/fabric.mp4":9721,"./3D/garden.mp4":1124,"./3D/garlic.mp4":4334,"./3D/mac.mp4":8498,"./3D/megan.mp4":1841,"./3D/munyang.mp4":7671,"./3D/octopus.mp4":3100,"./3D/piano.mp4":8145,"./3D/raytracer.png":8669,"./3D/spiral.mp4":1355,"./3D/spiral.png":7349,"./3D/ttr.png":4235,"./CS/alpaca0.png":763,"./CS/alpaca1.png":8476,"./CS/bluetooth.jpg":9177,"./CS/e2e.jpg":138,"./CS/geolocation.png":1102,"./CS/plugin.png":135,"./CS/tigerride.png":5107,"./CS/tokitalk.png":3375,"./GD/hackprinceton.png":1410,"./GD/tinder.jpg":2735};function r(n){var e=i(n);return t(e)}function i(n){if(!t.o(o,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return o[n]}r.keys=function(){return Object.keys(o)},r.resolve=i,n.exports=r,r.id=7899},4975:(n,e,t)=>{"use strict";n.exports=t.p+"8e04a2c65ef398e7f618.ttf"},4098:(n,e,t)=>{"use strict";n.exports=t.p+"9d7bcc52ca240cb2146f.ttf"},4539:(n,e,t)=>{"use strict";n.exports=t.p+"e11895b18c03b33c9470.otf"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.p="/christine/",t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{"use strict";var n=t(3379),e=t.n(n),o=t(9037),r=t.n(o),i=t(569),a=t.n(i),A=t(3565),c=t.n(A),s=t(9216),l=t.n(s),p=t(7945),d={};d.setAttributes=c(),d.insert=a().bind(null,"head"),d.domAPI=r(),d.insertStyleElement=l(),e()(p.Z,d),p.Z&&p.Z.locals&&p.Z.locals;var f=t(6560),u={};u.setAttributes=c(),u.insert=a().bind(null,"head"),u.domAPI=r(),u.insertStyleElement=l(),e()(f.Z,u),f.Z&&f.Z.locals&&f.Z.locals;var C=t(3089),h={};h.setAttributes=c(),h.insert=a().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=l(),e()(C.Z,h),C.Z&&C.Z.locals&&C.Z.locals;var g=t(8415),m=t.n(g);const B=t.p+"ffef8aca3d4378e923b951cbff07bd3d.json",b=t.p+"6e171942967bc2d7984695df83805027.json",x=t.p+"d756d59a4158c7e3e06ab61d6b428729.json",I=t.p+"f7758deacc678db362dfc2fc701f4478.json";function v(n){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},v(n)}function y(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function w(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?y(Object(t),!0).forEach((function(e){k(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function k(n,e,t){return(e=function(n){var e=function(n,e){if("object"!==v(n)||null===n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var o=t.call(n,"string");if("object"!==v(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"===v(e)?e:String(e)}(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function E(n,e){var t="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=function(n,e){if(n){if("string"==typeof n)return S(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?S(n,e):void 0}}(n))||e&&n&&"number"==typeof n.length){t&&(n=t);var o=0,r=function(){};return{s:r,n:function(){return o>=n.length?{done:!0}:{done:!1,value:n[o++]}},e:function(n){throw n},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,A=!1;return{s:function(){t=t.call(n)},n:function(){var n=t.next();return a=n.done,n},e:function(n){A=!0,i=n},f:function(){try{a||null==t.return||t.return()}finally{if(A)throw i}}}}function S(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,o=new Array(e);t<e;t++)o[t]=n[t];return o}document.body.onload=function(){setTimeout((function(){document.getElementById("cover").style.transition="2s",document.getElementById("cover").style.opacity="0"}),500)},Y=(j=t(7899)).keys().map(j),Object.entries(Y).map((function(n){return n[1].default}));var j,Y,Q,D=E(document.getElementsByClassName("corner"));try{for(D.s();!(Q=D.n()).done;)Q.value.src=m()}catch(n){D.e(n)}finally{D.f()}var O,z={},U=document.getElementsByClassName("accordion"),L=document.getElementsByClassName("panel"),M=document.querySelector(".outer-accordion").offsetHeight/2,T="../data/",Z=(O=[B,b,x,I]).length,q=1;function W(n){n.target.classList.toggle("active");var e=n.target.nextElementSibling;if(function(n,e){if(e.classList.contains("inner-panel")&&H(n.parentElement,n),e.classList.contains("outer-panel")){var t,o=E(document.getElementsByClassName("outer-accordion"));try{for(o.s();!(t=o.n()).done;){var r=t.value;r.isEqualNode(n)||(r.classList.remove("active"),r.nextElementSibling.style.transition="max-height "+q+"s ease",r.nextElementSibling.style.maxHeight=null,H(r.nextElementSibling))}}catch(n){o.e(n)}finally{o.f()}}}(n.target,e),e)if(e.style.maxHeight){e.style.maxHeight=null;var t,o=E(e.children);try{for(o.s();!(t=o.n()).done;){var r=t.value,i=r.classList;i.contains("accordion")&&i.remove("active"),i.contains("panel")&&(r.style.maxHeight=null)}}catch(n){o.e(n)}finally{o.f()}e.style.transition="max-height "+q+"s ease"}else{var a;a=Math.max(1,Math.min(5,e.scrollHeight/M)),e.style.transition="max-height "+a+"s ease",e.classList.contains("inner-panel")?(e.style.maxHeight=3*e.scrollHeight+"px",n.target.parentElement.style.maxHeight=Math.max(n.target.parentElement.scrollHeight+e.scrollHeight,3*e.scrollHeight)+"px"):e.style.maxHeight=3*e.scrollHeight+"px"}}function H(n,e){var t,o,r=n.children;for(o=0;o<r.length;o++)if(t=r[o],e&&t.isEqualNode(e))o++;else{var i=t.classList;i.contains("active")&&i.remove("active"),i.contains("panel")&&(t.style.maxHeight=null,t.style.transition="max-height "+q+"s ease")}}function N(n,e){var t=e.type,o=document.getElementById(t).nextElementSibling,r=document.createElement("div");r.classList.add("accordion","inner-accordion"),r.innerHTML=e.title,o.appendChild(r);var i=document.createElement("div");i.id=n,i.classList.add("panel","inner-panel");var a,A,c,s,l,p=e.media;if(p){A=document.createElement("div"),a=document.createElement("div");var d,f=E(p);try{for(f.s();!(d=f.n()).done;){var u=d.value,C=u.type;"image"==C&&A.appendChild(P(u.url.slice(3))),"video"==C&&A.appendChild((c=u.url.slice(3),s=void 0,l=void 0,s=document.createElement("video"),(l=document.createElement("source")).src=c,l.type="video/mp4",s.autoplay=!0,s.muted=!0,s.loop=!0,s.classList.add("video-block"),s.classList.add("block"),s.src=c,s.appendChild(l),s))}}catch(n){f.e(n)}finally{f.f()}a.classList.add("inner-left-panel","half-panel"),A.classList.add("inner-right-panel","half-panel"),i.appendChild(a),i.appendChild(A)}else i.classList.add("text-only-panel"),i.classList.add("active");var h,g=E(e.description);try{for(g.s();!(h=g.n()).done;){var m=h.value,B=void 0;"img"==m.type&&(B=P(m.content)),m.type,"youtube"==m.type&&(B=R(m.content)),"link"==m.type?B=X(m.content):"text"==m.type&&(B=G(m.content)),p?a.appendChild(B):i.appendChild(B)}}catch(n){g.e(n)}finally{g.f()}var b=e.tools;if(b){var x=G("tools used: "+b);p?a.appendChild(x):i.appendChild(x)}var I=e.date,v=I.slice(0,2),y=G("Date: "+I.slice(-2)+".20"+v);p?a.appendChild(y):i.appendChild(y),o.appendChild(i)}function P(n){var e=document.createElement("img");return e.classList.add("image-block"),e.classList.add("block"),e.src=n,e}function R(n){var e=document.createElement("iframe");return e.classList.add("video_block"),e.classList.add("block"),e.src=n,e.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",e.frameBorder="0",e.title="YouTube video player",e}function X(n){var e=document.createElement("a");return e.classList.add("link-block"),e.classList.add("block"),e.href=n,e.target="_blank",e.innerHTML="link",e}function G(n){var e=document.createElement("p");return e.classList.add("text-block"),e.classList.add("block"),e.innerHTML=n,e}!function(){for(var n=[],e=0;e<Z;e++)n.push(fetch(O[e]).then((function(n){return n.json()})));Promise.all(n).then((function(n){var e,t,o=E(n);try{for(o.s();!(e=o.n()).done;){var r=e.value;z=w(w({},z),r)}}catch(n){o.e(n)}finally{o.f()}for(var i in z)N(i,z[i]);for(var a=0;a<U.length;a++)U[a].addEventListener("click",W);var A,c=E(L);try{for(c.s();!(A=c.n()).done;){var s=A.value;t=Math.max(1,Math.min(5,Math.floor(s.scrollHeight/M))),s.style.transition="max-height "+t+"s ease"}}catch(n){c.e(n)}finally{c.f()}})).catch((function(n){console.error("Error:",n)}))}()})()})();
//# sourceMappingURL=work.e9323a4f3a67b4d8ee07.js.map