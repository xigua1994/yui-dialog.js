!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.YuiDialog=n():t.YuiDialog=n()}(window,function(){return function(t){var n={};function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(o,i,function(n){return t[n]}.bind(null,i));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=2)}([function(t,n,e){(t.exports=e(1)(!1)).push([t.i,"",""])},function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map(function(n){var e=function(t,n){var e=t[1]||"",o=t[3];if(!o)return e;if(n&&"function"==typeof btoa){var i=(a=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),c=o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"});return[e].concat(c).concat([i]).join("\n")}var a;return[e].join("\n")}(n,t);return n[2]?"@media "+n[2]+"{"+e+"}":e}).join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},i=0;i<this.length;i++){var c=this[i][0];null!=c&&(o[c]=!0)}for(i=0;i<t.length;i++){var a=t[i];null!=a[0]&&o[a[0]]||(e&&!a[2]?a[2]=e:e&&(a[2]="("+a[2]+") and ("+e+")"),n.push(a))}},n}},function(t,n,e){"use strict";var o;e.r(n);var i,c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(console.log(o),o)return o;var n=Object.assign({msg:"this is a toast",position:"bottom",duration:1500,className:""},t),e=document.createElement("div");return e.classList="yui-toast yui-toast__".concat(n.position," ").concat(n.className),e.innerHTML='<span class="yui-toast-msg">'.concat(n.msg,"</span>"),document.body.appendChild(e),setTimeout(function(){e.remove(),o=!1},n.duration),o=e,e};function a(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)}function r(){return document.createElement("div")}function s(t,n){var e=document.createElement("div");return e.classList="yui-mask",e}function u(){var t=document.documentElement.scrollTop;document.body.classList.add("yui-dialog__body"),document.body.style.top=-t+"px"}function l(){document.body.classList.remove("yui-dialog__body");var t=Math.abs(parseFloat(document.body.style.top));document.documentElement.scrollTop=t}function d(t,n,e,o){t.addEventListener(e,function(t){for(var e=t.currentTarget,i=t.target;!i.matches(n);){if(i===e){i=null;break}i=i.parentNode}i&&o.call(i,Array.prototype.slice.call(arguments))},!1)}var f,p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(i)return i;var n=Object.assign({message:"操作成功",title:"这是一个标题",showConfirmButton:!0,showCancelButton:!0,showMask:!0,closeOnClickMask:!0,styleType:a()?"ios":"android",confirmButtonText:"确定",cancelButtonText:"取消",isBodyFixed:!0},t),e=r();if(u(),n.showMask){var o=s(n.closeOnClickMask);n.closeOnClickMask&&o.addEventListener("click",function(t){i=!1,l(),e.remove()},!1),e.appendChild(o)}var c,f=n.title?'<div class="yui-dialog__header"><div class="yui-dialog__title">'.concat(n.title,"</div></div>"):"",p='<div class="yui-dialog__content"><div class="yui-dialog__msg">'.concat(n.message,"</div></div>");(n.showCancelButton||n.showConfirmButton)&&(c='<div class="yui-dialog__footer '.concat("ios"==n.styleType?"yui-border-top-1px":"",'">').concat(n.showCancelButton?'<div class="yui-dialog__btn yui-cancle-btn '.concat("ios"==n.styleType?"yui-border-left-1px":"",'">').concat(n.cancelButtonText,"</div>"):"","\n      ").concat(n.showConfirmButton?'<div class="yui-dialog__btn yui-confirm-btn">'.concat(n.confirmButtonText,"</div>"):"","\n    </div>"));var m=document.createElement("div");return m.classList="yui-dialog yui-dialog-".concat(n.styleType),m.innerHTML=f+p+c,e.appendChild(m),document.body.appendChild(e),n.showCancelButton&&d(e,".yui-cancle-btn","click",function(t){"function"==typeof n.clickCancleFn&&n.clickCancleFn(),l(),e.remove(),i=!1}),n.showConfirmButton&&d(e,".yui-confirm-btn","click",function(t){"function"==typeof n.clickConfirmFn&&n.clickConfirmFn(),l(),e.remove(),i=!1}),i=e,e};var m,y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(f)return f;var n=Object.assign({html:"这是一个popup",showMask:!0,closeOnClickMask:!0,styleType:a()?"ios":"android",isBodyFixed:!0},t),e=r();if(u(),n.showMask){var o=s(n.closeOnClickMask);n.closeOnClickMask&&o.addEventListener("click",function(t){f=!1,e.remove(),l()},!1),e.appendChild(o)}var i='<div class="yui-dialog__content"><div class="yui-dialog__msg yui-popup__msg">'.concat(n.html,"</div></div>"),c=document.createElement("div");return c.classList="yui-dialog yui-dialog-".concat(n.styleType),c.innerHTML=i,e.appendChild(c),document.body.appendChild(e),f=e,e};var v=function(t){if(m)return m;var n=Object.assign({showMask:!0,closeOnClickMask:!0,styleType:a()?"ios":"android",actions:["操作一","操作二","操作三","操作四","操作五"],showCancle:!1,className:""},t),e=r();if(u(),n.showMask){var o=s(n.closeOnClickMask);n.closeOnClickMask&&o.addEventListener("click",function(t){m=!1,l(),e.remove()},!1),e.appendChild(o)}var i=document.createElement("div");i.classList="yui-actionsheet yui-actionsheet-".concat(n.styleType," ").concat(n.className);var c="".concat(n.actions.map(function(t,n){return'<div data-item="'.concat(n,'" class="yui-actionsheets-item yui-border-bottom-1px">').concat(t,"</div>")}).join(""));i.innerHTML=c,e.appendChild(i),d(i,".yui-actionsheets-item","click",function(t){var o=this.getAttribute("data-item");n.clickOnItem(o),e.remove(),l(),m=!1}),document.body.appendChild(e)};e(0),n.default={toast:c,confirm:p,popup:y,actionSheet:v}}]).default});