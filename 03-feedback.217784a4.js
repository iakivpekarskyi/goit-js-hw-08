!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",r=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,y=Math.min,p=function(){return s.Date.now()};function b(e,t,n){var i,r,u,f,a,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function b(t){var n=i,o=r;return i=r=void 0,l=t,f=e.apply(o,n)}function h(e){return l=e,a=setTimeout(O,t),d?b(e):f}function w(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function O(){var e=p();if(w(e))return S(e);a=setTimeout(O,function(e){var n=t-(e-c);return s?y(n,u-(e-l)):n}(e))}function S(e){return a=void 0,v&&i?b(e):(i=r=void 0,f)}function T(){var e=p(),n=w(e);if(i=arguments,r=this,c=e,n){if(void 0===a)return h(c);if(s)return a=setTimeout(O,t),b(c)}return void 0===a&&(a=setTimeout(O,t)),f}return t=j(t)||0,g(n)&&(d=!!n.leading,u=(s="maxWait"in n)?m(j(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==a&&clearTimeout(a),l=0,i=c=r=a=void 0},T.flush=function(){return void 0===a?f:S(p())},T}function g(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(g(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=g(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var o=f.test(t);return o||a.test(t)?c(t.slice(2),o?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError(o);return g(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),b(e,t,{leading:i,maxWait:t,trailing:r})};var h=document.querySelector(".feedback-form"),w=document.querySelector('[name="email"]'),O=document.querySelector('[name="message"]'),S="feedback-form-state";h.addEventListener("input",e(t)((function(e){var t={email:w.value,message:O.value},n=localStorage.setItem(S,JSON.stringify(t));console.log(n)}),500)),h.addEventListener("submit",(function(e){e.preventDefault(),e.target.reset(),localStorage.removeItem(S)}))}();
//# sourceMappingURL=03-feedback.217784a4.js.map
