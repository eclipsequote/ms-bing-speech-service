!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r=e();for(var n in r)("object"==typeof exports?exports:t)[n]=r[n]}}("undefined"!=typeof self?self:this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,r){"use strict";var n=self.WebSocket,i=self.fetch,o=r(1),s=console.log,u=r(2),a=r(3),f=r(10),c=r(11),h=r(12),l={websocket:n,uuid:u,fetch:i,eventEmitter:o,debug:s,protocolHelper:a,messageParser:f,sendFile:c};t.exports=h(l)},function(t,e,r){var n;!function(e){"use strict";function i(){}function o(t,e){for(var r=t.length;r--;)if(t[r].listener===e)return r;return-1}function s(t){return function(){return this[t].apply(this,arguments)}}function u(t){return"function"==typeof t||t instanceof RegExp||!(!t||"object"!=typeof t)&&u(t.listener)}var a=i.prototype,f=e.EventEmitter;a.getListeners=function(t){var e,r,n=this._getEvents();if(t instanceof RegExp){e={};for(r in n)n.hasOwnProperty(r)&&t.test(r)&&(e[r]=n[r])}else e=n[t]||(n[t]=[]);return e},a.flattenListeners=function(t){var e,r=[];for(e=0;e<t.length;e+=1)r.push(t[e].listener);return r},a.getListenersAsObject=function(t){var e,r=this.getListeners(t);return r instanceof Array&&(e={},e[t]=r),e||r},a.addListener=function(t,e){if(!u(e))throw new TypeError("listener must be a function");var r,n=this.getListenersAsObject(t),i="object"==typeof e;for(r in n)n.hasOwnProperty(r)&&-1===o(n[r],e)&&n[r].push(i?e:{listener:e,once:!1});return this},a.on=s("addListener"),a.addOnceListener=function(t,e){return this.addListener(t,{listener:e,once:!0})},a.once=s("addOnceListener"),a.defineEvent=function(t){return this.getListeners(t),this},a.defineEvents=function(t){for(var e=0;e<t.length;e+=1)this.defineEvent(t[e]);return this},a.removeListener=function(t,e){var r,n,i=this.getListenersAsObject(t);for(n in i)i.hasOwnProperty(n)&&-1!==(r=o(i[n],e))&&i[n].splice(r,1);return this},a.off=s("removeListener"),a.addListeners=function(t,e){return this.manipulateListeners(!1,t,e)},a.removeListeners=function(t,e){return this.manipulateListeners(!0,t,e)},a.manipulateListeners=function(t,e,r){var n,i,o=t?this.removeListener:this.addListener,s=t?this.removeListeners:this.addListeners;if("object"!=typeof e||e instanceof RegExp)for(n=r.length;n--;)o.call(this,e,r[n]);else for(n in e)e.hasOwnProperty(n)&&(i=e[n])&&("function"==typeof i?o.call(this,n,i):s.call(this,n,i));return this},a.removeEvent=function(t){var e,r=typeof t,n=this._getEvents();if("string"===r)delete n[t];else if(t instanceof RegExp)for(e in n)n.hasOwnProperty(e)&&t.test(e)&&delete n[e];else delete this._events;return this},a.removeAllListeners=s("removeEvent"),a.emitEvent=function(t,e){var r,n,i,o,s=this.getListenersAsObject(t);for(o in s)if(s.hasOwnProperty(o))for(r=s[o].slice(0),i=0;i<r.length;i++)n=r[i],!0===n.once&&this.removeListener(t,n.listener),n.listener.apply(this,e||[])===this._getOnceReturnValue()&&this.removeListener(t,n.listener);return this},a.trigger=s("emitEvent"),a.emit=function(t){var e=Array.prototype.slice.call(arguments,1);return this.emitEvent(t,e)},a.setOnceReturnValue=function(t){return this._onceReturnValue=t,this},a._getOnceReturnValue=function(){return!this.hasOwnProperty("_onceReturnValue")||this._onceReturnValue},a._getEvents=function(){return this._events||(this._events={})},i.noConflict=function(){return e.EventEmitter=f,i},void 0!==(n=function(){return i}.call(e,r,e,t))&&(t.exports=n)}(this||{})},function(t,e,r){"use strict";function n(){var t=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var r=(t+16*Math.random())%16|0;return t=Math.floor(t/16),("x"==e?r:3&r|8).toString(16)})}t.exports=n},function(t,e,r){"use strict";(function(e){function n(t){return t.map(function(t){return t.key+":"+t.value+"\r\n"}).join("")+"\r\n"}var i=r(9),o={platform:{win32:"Windows",darwin:"macOS",linux:"Linux"},name:{win32:{10:"Windows 10",8:"Windows 8",7:"Windows 7"},darwin:{6:"Snow Leopard",7:"Lion",8:"Mountain Lion",9:"Mavericks",10:"Yosemite",11:"El Capitan",12:"Sierra",13:"High Sierra"}}},s={context:{system:{version:"1.0.000"},os:{platform:"",name:"",version:""},device:{manufacturer:"Unknown",model:"Unknown",version:"Unknown"}}},u={};u.createSpeechConfigPacket=function(t){var e=i.platform(),r=i.release(),u="win32"===e?r.split(".")[0]:r.split(".")[1],a=o.platform[e]||"Unknown",f=o.name[e]&&o.name[e][u]?o.name[e][u]:"Unknown";s.context.os={platform:a,name:f,version:r};var c=[];return c.push({key:"path",value:"speech.config"}),c.push({key:"x-timestamp",value:(new Date).toISOString()}),c.push({key:"content-type",value:"application/json; charset=utf-8"}),""+n(c)+JSON.stringify(s)},u.createTelemetryPacket=function(t,e){var r=[];return r.push({key:"path",value:"telemetry"}),r.push({key:"x-timestamp",value:(new Date).toISOString()}),r.push({key:"content-type",value:"application/json"}),r.push({key:"x-requestid",value:t}),""+n(r)+JSON.stringify(e)},u.createAudioPacket=function(t,r){var i=[];i.push({key:"path",value:"audio"}),i.push({key:"x-timestamp",value:(new Date).toISOString()}),i.push({key:"content-type",value:"audio/x-wav"}),i.push({key:"x-requestid",value:t});var o=n(i),s=new e(o),u=new e([o.length/256,o.length%256]),a=new e(r);return e.concat([u,s,a])},t.exports=u}).call(e,r(4).Buffer)},function(t,e,r){"use strict";(function(t){function n(){return o.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function i(t,e){if(n()<e)throw new RangeError("Invalid typed array length");return o.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e),t.__proto__=o.prototype):(null===t&&(t=new o(e)),t.length=e),t}function o(t,e,r){if(!(o.TYPED_ARRAY_SUPPORT||this instanceof o))return new o(t,e,r);if("number"==typeof t){if("string"==typeof e)throw new Error("If encoding is specified then the first argument must be a string");return f(this,t)}return s(this,t,e,r)}function s(t,e,r,n){if("number"==typeof e)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer?l(t,e,r,n):"string"==typeof e?c(t,e,r):p(t,e)}function u(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function a(t,e,r,n){return u(e),e<=0?i(t,e):void 0!==r?"string"==typeof n?i(t,e).fill(r,n):i(t,e).fill(r):i(t,e)}function f(t,e){if(u(e),t=i(t,e<0?0:0|g(e)),!o.TYPED_ARRAY_SUPPORT)for(var r=0;r<e;++r)t[r]=0;return t}function c(t,e,r){if("string"==typeof r&&""!==r||(r="utf8"),!o.isEncoding(r))throw new TypeError('"encoding" must be a valid string encoding');var n=0|d(e,r);t=i(t,n);var s=t.write(e,r);return s!==n&&(t=t.slice(0,s)),t}function h(t,e){var r=e.length<0?0:0|g(e.length);t=i(t,r);for(var n=0;n<r;n+=1)t[n]=255&e[n];return t}function l(t,e,r,n){if(e.byteLength,r<0||e.byteLength<r)throw new RangeError("'offset' is out of bounds");if(e.byteLength<r+(n||0))throw new RangeError("'length' is out of bounds");return e=void 0===r&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,r):new Uint8Array(e,r,n),o.TYPED_ARRAY_SUPPORT?(t=e,t.__proto__=o.prototype):t=h(t,e),t}function p(t,e){if(o.isBuffer(e)){var r=0|g(e.length);return t=i(t,r),0===t.length?t:(e.copy(t,0,0,r),t)}if(e){if("undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!=typeof e.length||H(e.length)?i(t,0):h(t,e);if("Buffer"===e.type&&Q(e.data))return h(t,e.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function g(t){if(t>=n())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+n().toString(16)+" bytes");return 0|t}function y(t){return+t!=t&&(t=0),o.alloc(+t)}function d(t,e){if(o.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var r=t.length;if(0===r)return 0;for(var n=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":case void 0:return G(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return J(t).length;default:if(n)return G(t).length;e=(""+e).toLowerCase(),n=!0}}function v(t,e,r){var n=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if(r>>>=0,e>>>=0,r<=e)return"";for(t||(t="utf8");;)switch(t){case"hex":return L(this,e,r);case"utf8":case"utf-8":return x(this,e,r);case"ascii":return O(this,e,r);case"latin1":case"binary":return U(this,e,r);case"base64":return P(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return B(this,e,r);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function m(t,e,r){var n=t[e];t[e]=t[r],t[r]=n}function w(t,e,r,n,i){if(0===t.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,isNaN(r)&&(r=i?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(i)return-1;r=t.length-1}else if(r<0){if(!i)return-1;r=0}if("string"==typeof e&&(e=o.from(e,n)),o.isBuffer(e))return 0===e.length?-1:b(t,e,r,n,i);if("number"==typeof e)return e&=255,o.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):b(t,[e],r,n,i);throw new TypeError("val must be string, number or Buffer")}function b(t,e,r,n,i){function o(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}var s=1,u=t.length,a=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return-1;s=2,u/=2,a/=2,r/=2}var f;if(i){var c=-1;for(f=r;f<u;f++)if(o(t,f)===o(e,-1===c?0:f-c)){if(-1===c&&(c=f),f-c+1===a)return c*s}else-1!==c&&(f-=f-c),c=-1}else for(r+a>u&&(r=u-a),f=r;f>=0;f--){for(var h=!0,l=0;l<a;l++)if(o(t,f+l)!==o(e,l)){h=!1;break}if(h)return f}return-1}function E(t,e,r,n){r=Number(r)||0;var i=t.length-r;n?(n=Number(n))>i&&(n=i):n=i;var o=e.length;if(o%2!=0)throw new TypeError("Invalid hex string");n>o/2&&(n=o/2);for(var s=0;s<n;++s){var u=parseInt(e.substr(2*s,2),16);if(isNaN(u))return s;t[r+s]=u}return s}function A(t,e,r,n){return X(G(e,t.length-r),t,r,n)}function _(t,e,r,n){return X(W(e),t,r,n)}function T(t,e,r,n){return _(t,e,r,n)}function S(t,e,r,n){return X(J(e),t,r,n)}function R(t,e,r,n){return X(q(e,t.length-r),t,r,n)}function P(t,e,r){return 0===e&&r===t.length?K.fromByteArray(t):K.fromByteArray(t.slice(e,r))}function x(t,e,r){r=Math.min(t.length,r);for(var n=[],i=e;i<r;){var o=t[i],s=null,u=o>239?4:o>223?3:o>191?2:1;if(i+u<=r){var a,f,c,h;switch(u){case 1:o<128&&(s=o);break;case 2:a=t[i+1],128==(192&a)&&(h=(31&o)<<6|63&a)>127&&(s=h);break;case 3:a=t[i+1],f=t[i+2],128==(192&a)&&128==(192&f)&&(h=(15&o)<<12|(63&a)<<6|63&f)>2047&&(h<55296||h>57343)&&(s=h);break;case 4:a=t[i+1],f=t[i+2],c=t[i+3],128==(192&a)&&128==(192&f)&&128==(192&c)&&(h=(15&o)<<18|(63&a)<<12|(63&f)<<6|63&c)>65535&&h<1114112&&(s=h)}}null===s?(s=65533,u=1):s>65535&&(s-=65536,n.push(s>>>10&1023|55296),s=56320|1023&s),n.push(s),i+=u}return k(n)}function k(t){var e=t.length;if(e<=$)return String.fromCharCode.apply(String,t);for(var r="",n=0;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=$));return r}function O(t,e,r){var n="";r=Math.min(t.length,r);for(var i=e;i<r;++i)n+=String.fromCharCode(127&t[i]);return n}function U(t,e,r){var n="";r=Math.min(t.length,r);for(var i=e;i<r;++i)n+=String.fromCharCode(t[i]);return n}function L(t,e,r){var n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);for(var i="",o=e;o<r;++o)i+=z(t[o]);return i}function B(t,e,r){for(var n=t.slice(e,r),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function M(t,e,r){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}function I(t,e,r,n,i,s){if(!o.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<s)throw new RangeError('"value" argument is out of bounds');if(r+n>t.length)throw new RangeError("Index out of range")}function C(t,e,r,n){e<0&&(e=65535+e+1);for(var i=0,o=Math.min(t.length-r,2);i<o;++i)t[r+i]=(e&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function Y(t,e,r,n){e<0&&(e=4294967295+e+1);for(var i=0,o=Math.min(t.length-r,4);i<o;++i)t[r+i]=e>>>8*(n?i:3-i)&255}function D(t,e,r,n,i,o){if(r+n>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function j(t,e,r,n,i){return i||D(t,e,r,4,3.4028234663852886e38,-3.4028234663852886e38),Z.write(t,e,r,n,23,4),r+4}function N(t,e,r,n,i){return i||D(t,e,r,8,1.7976931348623157e308,-1.7976931348623157e308),Z.write(t,e,r,n,52,8),r+8}function F(t){if(t=V(t).replace(tt,""),t.length<2)return"";for(;t.length%4!=0;)t+="=";return t}function V(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function z(t){return t<16?"0"+t.toString(16):t.toString(16)}function G(t,e){e=e||1/0;for(var r,n=t.length,i=null,o=[],s=0;s<n;++s){if((r=t.charCodeAt(s))>55295&&r<57344){if(!i){if(r>56319){(e-=3)>-1&&o.push(239,191,189);continue}if(s+1===n){(e-=3)>-1&&o.push(239,191,189);continue}i=r;continue}if(r<56320){(e-=3)>-1&&o.push(239,191,189),i=r;continue}r=65536+(i-55296<<10|r-56320)}else i&&(e-=3)>-1&&o.push(239,191,189);if(i=null,r<128){if((e-=1)<0)break;o.push(r)}else if(r<2048){if((e-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return o}function W(t){for(var e=[],r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}function q(t,e){for(var r,n,i,o=[],s=0;s<t.length&&!((e-=2)<0);++s)r=t.charCodeAt(s),n=r>>8,i=r%256,o.push(i),o.push(n);return o}function J(t){return K.toByteArray(F(t))}function X(t,e,r,n){for(var i=0;i<n&&!(i+r>=e.length||i>=t.length);++i)e[i+r]=t[i];return i}function H(t){return t!==t}/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
var K=r(6),Z=r(7),Q=r(8);e.Buffer=o,e.SlowBuffer=y,e.INSPECT_MAX_BYTES=50,o.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}(),e.kMaxLength=n(),o.poolSize=8192,o._augment=function(t){return t.__proto__=o.prototype,t},o.from=function(t,e,r){return s(null,t,e,r)},o.TYPED_ARRAY_SUPPORT&&(o.prototype.__proto__=Uint8Array.prototype,o.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&o[Symbol.species]===o&&Object.defineProperty(o,Symbol.species,{value:null,configurable:!0})),o.alloc=function(t,e,r){return a(null,t,e,r)},o.allocUnsafe=function(t){return f(null,t)},o.allocUnsafeSlow=function(t){return f(null,t)},o.isBuffer=function(t){return!(null==t||!t._isBuffer)},o.compare=function(t,e){if(!o.isBuffer(t)||!o.isBuffer(e))throw new TypeError("Arguments must be Buffers");if(t===e)return 0;for(var r=t.length,n=e.length,i=0,s=Math.min(r,n);i<s;++i)if(t[i]!==e[i]){r=t[i],n=e[i];break}return r<n?-1:n<r?1:0},o.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},o.concat=function(t,e){if(!Q(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return o.alloc(0);var r;if(void 0===e)for(e=0,r=0;r<t.length;++r)e+=t[r].length;var n=o.allocUnsafe(e),i=0;for(r=0;r<t.length;++r){var s=t[r];if(!o.isBuffer(s))throw new TypeError('"list" argument must be an Array of Buffers');s.copy(n,i),i+=s.length}return n},o.byteLength=d,o.prototype._isBuffer=!0,o.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)m(this,e,e+1);return this},o.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)m(this,e,e+3),m(this,e+1,e+2);return this},o.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)m(this,e,e+7),m(this,e+1,e+6),m(this,e+2,e+5),m(this,e+3,e+4);return this},o.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?x(this,0,t):v.apply(this,arguments)},o.prototype.equals=function(t){if(!o.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===o.compare(this,t)},o.prototype.inspect=function(){var t="",r=e.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,r).match(/.{2}/g).join(" "),this.length>r&&(t+=" ... ")),"<Buffer "+t+">"},o.prototype.compare=function(t,e,r,n,i){if(!o.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),e<0||r>t.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&e>=r)return 0;if(n>=i)return-1;if(e>=r)return 1;if(e>>>=0,r>>>=0,n>>>=0,i>>>=0,this===t)return 0;for(var s=i-n,u=r-e,a=Math.min(s,u),f=this.slice(n,i),c=t.slice(e,r),h=0;h<a;++h)if(f[h]!==c[h]){s=f[h],u=c[h];break}return s<u?-1:u<s?1:0},o.prototype.includes=function(t,e,r){return-1!==this.indexOf(t,e,r)},o.prototype.indexOf=function(t,e,r){return w(this,t,e,r,!0)},o.prototype.lastIndexOf=function(t,e,r){return w(this,t,e,r,!1)},o.prototype.write=function(t,e,r,n){if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e|=0,isFinite(r)?(r|=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var i=this.length-e;if((void 0===r||r>i)&&(r=i),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var o=!1;;)switch(n){case"hex":return E(this,t,e,r);case"utf8":case"utf-8":return A(this,t,e,r);case"ascii":return _(this,t,e,r);case"latin1":case"binary":return T(this,t,e,r);case"base64":return S(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return R(this,t,e,r);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},o.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var $=4096;o.prototype.slice=function(t,e){var r=this.length;t=~~t,e=void 0===e?r:~~e,t<0?(t+=r)<0&&(t=0):t>r&&(t=r),e<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t);var n;if(o.TYPED_ARRAY_SUPPORT)n=this.subarray(t,e),n.__proto__=o.prototype;else{var i=e-t;n=new o(i,void 0);for(var s=0;s<i;++s)n[s]=this[s+t]}return n},o.prototype.readUIntLE=function(t,e,r){t|=0,e|=0,r||M(t,e,this.length);for(var n=this[t],i=1,o=0;++o<e&&(i*=256);)n+=this[t+o]*i;return n},o.prototype.readUIntBE=function(t,e,r){t|=0,e|=0,r||M(t,e,this.length);for(var n=this[t+--e],i=1;e>0&&(i*=256);)n+=this[t+--e]*i;return n},o.prototype.readUInt8=function(t,e){return e||M(t,1,this.length),this[t]},o.prototype.readUInt16LE=function(t,e){return e||M(t,2,this.length),this[t]|this[t+1]<<8},o.prototype.readUInt16BE=function(t,e){return e||M(t,2,this.length),this[t]<<8|this[t+1]},o.prototype.readUInt32LE=function(t,e){return e||M(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},o.prototype.readUInt32BE=function(t,e){return e||M(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},o.prototype.readIntLE=function(t,e,r){t|=0,e|=0,r||M(t,e,this.length);for(var n=this[t],i=1,o=0;++o<e&&(i*=256);)n+=this[t+o]*i;return i*=128,n>=i&&(n-=Math.pow(2,8*e)),n},o.prototype.readIntBE=function(t,e,r){t|=0,e|=0,r||M(t,e,this.length);for(var n=e,i=1,o=this[t+--n];n>0&&(i*=256);)o+=this[t+--n]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*e)),o},o.prototype.readInt8=function(t,e){return e||M(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},o.prototype.readInt16LE=function(t,e){e||M(t,2,this.length);var r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},o.prototype.readInt16BE=function(t,e){e||M(t,2,this.length);var r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},o.prototype.readInt32LE=function(t,e){return e||M(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},o.prototype.readInt32BE=function(t,e){return e||M(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},o.prototype.readFloatLE=function(t,e){return e||M(t,4,this.length),Z.read(this,t,!0,23,4)},o.prototype.readFloatBE=function(t,e){return e||M(t,4,this.length),Z.read(this,t,!1,23,4)},o.prototype.readDoubleLE=function(t,e){return e||M(t,8,this.length),Z.read(this,t,!0,52,8)},o.prototype.readDoubleBE=function(t,e){return e||M(t,8,this.length),Z.read(this,t,!1,52,8)},o.prototype.writeUIntLE=function(t,e,r,n){if(t=+t,e|=0,r|=0,!n){I(this,t,e,r,Math.pow(2,8*r)-1,0)}var i=1,o=0;for(this[e]=255&t;++o<r&&(i*=256);)this[e+o]=t/i&255;return e+r},o.prototype.writeUIntBE=function(t,e,r,n){if(t=+t,e|=0,r|=0,!n){I(this,t,e,r,Math.pow(2,8*r)-1,0)}var i=r-1,o=1;for(this[e+i]=255&t;--i>=0&&(o*=256);)this[e+i]=t/o&255;return e+r},o.prototype.writeUInt8=function(t,e,r){return t=+t,e|=0,r||I(this,t,e,1,255,0),o.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=255&t,e+1},o.prototype.writeUInt16LE=function(t,e,r){return t=+t,e|=0,r||I(this,t,e,2,65535,0),o.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):C(this,t,e,!0),e+2},o.prototype.writeUInt16BE=function(t,e,r){return t=+t,e|=0,r||I(this,t,e,2,65535,0),o.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):C(this,t,e,!1),e+2},o.prototype.writeUInt32LE=function(t,e,r){return t=+t,e|=0,r||I(this,t,e,4,4294967295,0),o.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t):Y(this,t,e,!0),e+4},o.prototype.writeUInt32BE=function(t,e,r){return t=+t,e|=0,r||I(this,t,e,4,4294967295,0),o.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):Y(this,t,e,!1),e+4},o.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e|=0,!n){var i=Math.pow(2,8*r-1);I(this,t,e,r,i-1,-i)}var o=0,s=1,u=0;for(this[e]=255&t;++o<r&&(s*=256);)t<0&&0===u&&0!==this[e+o-1]&&(u=1),this[e+o]=(t/s>>0)-u&255;return e+r},o.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e|=0,!n){var i=Math.pow(2,8*r-1);I(this,t,e,r,i-1,-i)}var o=r-1,s=1,u=0;for(this[e+o]=255&t;--o>=0&&(s*=256);)t<0&&0===u&&0!==this[e+o+1]&&(u=1),this[e+o]=(t/s>>0)-u&255;return e+r},o.prototype.writeInt8=function(t,e,r){return t=+t,e|=0,r||I(this,t,e,1,127,-128),o.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[e]=255&t,e+1},o.prototype.writeInt16LE=function(t,e,r){return t=+t,e|=0,r||I(this,t,e,2,32767,-32768),o.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):C(this,t,e,!0),e+2},o.prototype.writeInt16BE=function(t,e,r){return t=+t,e|=0,r||I(this,t,e,2,32767,-32768),o.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):C(this,t,e,!1),e+2},o.prototype.writeInt32LE=function(t,e,r){return t=+t,e|=0,r||I(this,t,e,4,2147483647,-2147483648),o.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):Y(this,t,e,!0),e+4},o.prototype.writeInt32BE=function(t,e,r){return t=+t,e|=0,r||I(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),o.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):Y(this,t,e,!1),e+4},o.prototype.writeFloatLE=function(t,e,r){return j(this,t,e,!0,r)},o.prototype.writeFloatBE=function(t,e,r){return j(this,t,e,!1,r)},o.prototype.writeDoubleLE=function(t,e,r){return N(this,t,e,!0,r)},o.prototype.writeDoubleBE=function(t,e,r){return N(this,t,e,!1,r)},o.prototype.copy=function(t,e,r,n){if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);var i,s=n-r;if(this===t&&r<e&&e<n)for(i=s-1;i>=0;--i)t[i+e]=this[i+r];else if(s<1e3||!o.TYPED_ARRAY_SUPPORT)for(i=0;i<s;++i)t[i+e]=this[i+r];else Uint8Array.prototype.set.call(t,this.subarray(r,r+s),e);return s},o.prototype.fill=function(t,e,r,n){if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),1===t.length){var i=t.charCodeAt(0);i<256&&(t=i)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!o.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t&=255);if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0);var s;if("number"==typeof t)for(s=e;s<r;++s)this[s]=t;else{var u=o.isBuffer(t)?t:G(new o(t,n).toString()),a=u.length;for(s=0;s<r-e;++s)this[s+e]=u[s%a]}return this};var tt=/[^+\/0-9A-Za-z-_]/g}).call(e,r(5))},function(t,e){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){"use strict";function n(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");return"="===t[e-2]?2:"="===t[e-1]?1:0}function i(t){return 3*t.length/4-n(t)}function o(t){var e,r,i,o,s,u=t.length;o=n(t),s=new h(3*u/4-o),r=o>0?u-4:u;var a=0;for(e=0;e<r;e+=4)i=c[t.charCodeAt(e)]<<18|c[t.charCodeAt(e+1)]<<12|c[t.charCodeAt(e+2)]<<6|c[t.charCodeAt(e+3)],s[a++]=i>>16&255,s[a++]=i>>8&255,s[a++]=255&i;return 2===o?(i=c[t.charCodeAt(e)]<<2|c[t.charCodeAt(e+1)]>>4,s[a++]=255&i):1===o&&(i=c[t.charCodeAt(e)]<<10|c[t.charCodeAt(e+1)]<<4|c[t.charCodeAt(e+2)]>>2,s[a++]=i>>8&255,s[a++]=255&i),s}function s(t){return f[t>>18&63]+f[t>>12&63]+f[t>>6&63]+f[63&t]}function u(t,e,r){for(var n,i=[],o=e;o<r;o+=3)n=(t[o]<<16)+(t[o+1]<<8)+t[o+2],i.push(s(n));return i.join("")}function a(t){for(var e,r=t.length,n=r%3,i="",o=[],s=0,a=r-n;s<a;s+=16383)o.push(u(t,s,s+16383>a?a:s+16383));return 1===n?(e=t[r-1],i+=f[e>>2],i+=f[e<<4&63],i+="=="):2===n&&(e=(t[r-2]<<8)+t[r-1],i+=f[e>>10],i+=f[e>>4&63],i+=f[e<<2&63],i+="="),o.push(i),o.join("")}e.byteLength=i,e.toByteArray=o,e.fromByteArray=a;for(var f=[],c=[],h="undefined"!=typeof Uint8Array?Uint8Array:Array,l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",p=0,g=l.length;p<g;++p)f[p]=l[p],c[l.charCodeAt(p)]=p;c["-".charCodeAt(0)]=62,c["_".charCodeAt(0)]=63},function(t,e){e.read=function(t,e,r,n,i){var o,s,u=8*i-n-1,a=(1<<u)-1,f=a>>1,c=-7,h=r?i-1:0,l=r?-1:1,p=t[e+h];for(h+=l,o=p&(1<<-c)-1,p>>=-c,c+=u;c>0;o=256*o+t[e+h],h+=l,c-=8);for(s=o&(1<<-c)-1,o>>=-c,c+=n;c>0;s=256*s+t[e+h],h+=l,c-=8);if(0===o)o=1-f;else{if(o===a)return s?NaN:1/0*(p?-1:1);s+=Math.pow(2,n),o-=f}return(p?-1:1)*s*Math.pow(2,o-n)},e.write=function(t,e,r,n,i,o){var s,u,a,f=8*o-i-1,c=(1<<f)-1,h=c>>1,l=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:o-1,g=n?1:-1,y=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(u=isNaN(e)?1:0,s=c):(s=Math.floor(Math.log(e)/Math.LN2),e*(a=Math.pow(2,-s))<1&&(s--,a*=2),e+=s+h>=1?l/a:l*Math.pow(2,1-h),e*a>=2&&(s++,a/=2),s+h>=c?(u=0,s=c):s+h>=1?(u=(e*a-1)*Math.pow(2,i),s+=h):(u=e*Math.pow(2,h-1)*Math.pow(2,i),s=0));i>=8;t[r+p]=255&u,p+=g,u/=256,i-=8);for(s=s<<i|u,f+=i;f>0;t[r+p]=255&s,p+=g,s/=256,f-=8);t[r+p-g]|=128*y}},function(t,e){var r={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==r.call(t)}},function(t,e){e.endianness=function(){return"LE"},e.hostname=function(){return"undefined"!=typeof location?location.hostname:""},e.loadavg=function(){return[]},e.uptime=function(){return 0},e.freemem=function(){return Number.MAX_VALUE},e.totalmem=function(){return Number.MAX_VALUE},e.cpus=function(){return[]},e.type=function(){return"Browser"},e.release=function(){return"undefined"!=typeof navigator?navigator.appVersion:""},e.networkInterfaces=e.getNetworkInterfaces=function(){return{}},e.arch=function(){return"javascript"},e.platform=function(){return"browser"},e.tmpdir=e.tmpDir=function(){return"/tmp"},e.EOL="\n",e.homedir=function(){return"/"}},function(t,e,r){"use strict";t.exports.parse=function(t){var e={},r=t.split("\r\n"),n=!1;return r.forEach(function(t){var r=new String(t);if(r.startsWith("{"))n=!0,e.body=r;else if(n)e.body+=r;else{var i=r.split(":");2===i.length&&(e[i[0].trim().toLowerCase()]=i[1].trim())}}),e}},function(t,e,r){"use strict";function n(t){var e=this;return new Promise(function(r,n){t&&t.byteLength||n(new Error("could not send File: not a valid ArrayBuffer")),e.telemetry.Metrics.push({Start:(new Date).toISOString(),Name:"Microphone",End:""}),i.call(e,0,t,r)})}function i(t,e,r){var n=this,o=e.byteLength,s=t+32e3,u=e.slice(t,s);if(this.sendChunk(u),!(s<o))return r();t=s,setTimeout(function(){return i.call(n,t,e,r)},200)}t.exports=n},function(t,e,r){"use strict";(function(e){function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}();t.exports=function(t){var u=t.websocket,a=t.uuid,f=t.fetch,c=t.eventEmitter,h=t.protocolHelper,l=t.messageParser,p=t.sendFile,g=void 0,y=e&&e.env&&e.env.DEBUG,d={"turn.start":[],"speech.startDetected":[],"speech.hypothesis":[],"speech.endDetected":[],"speech.phrase":[],"speech.fragment":[],"turn.end":[]},v=["turn.start","turn.end","speech.phrase","speech.hypothesis","speech.fragment","speech.endDetected"],m={format:"simple",language:"en-US",mode:"conversation",issueTokenUrl:"https://api.cognitive.microsoft.com/sts/v1.0/issueToken",accessToken:null};return function(e){function w(e){r(this,w);var i=n(this,(w.__proto__||Object.getPrototypeOf(w)).call(this));i.options=Object.assign({},m,e),g=i.options.debug||y?t.debug:function(){};var o="wss://speech.platform.bing.com/speech/recognition/"+i.options.mode+"/cognitiveservices/v1?language="+i.options.language+"&format="+i.options.format;return i.customSpeech=!!i.options.serviceUrl,i.serviceUrl=i.options.serviceUrl||o,i.issueTokenUrl=i.options.issueTokenUrl,i.telemetry={Metrics:[],ReceivedMessages:d},i.currentTurnGuid=a().replace(/-/g,""),Object.assign(u.prototype,c.prototype),i}return i(w,e),s(w,[{key:"_resetTelemetry",value:function(t){var e=Array.isArray(t)&&t.indexOf("Metrics")>-1?[]:this.telemetry.Metrics,r=Array.isArray(t)&&t.indexOf("ReceivedMessages")>-1?d:this.telemetry.ReceivedMessages;this.telemetry.Metrics=e,this.telemetry.ReceivedMessages=r}},{key:"_sendToSocketServer",value:function(t){if(1!==this.connection.readyState)throw new Error("could not send: connection to service not open");this.connection.send(t)}},{key:"sendChunk",value:function(t){var e=h.createAudioPacket(this.currentTurnGuid,t);this._sendToSocketServer(e)}},{key:"sendStream",value:function(t){var e=this;return new Promise(function(r,n){e.telemetry.Metrics.push({Start:(new Date).toISOString(),Name:"Microphone",End:""}),t.on("data",e.sendChunk.bind(e)),t.on("end",function(){e.sendChunk(""),g("audio stream end"),r()})})}},{key:"_getAccessToken",value:function(){if(this.options.accessToken)return g("access token supplied via options"),Promise.resolve(this.options.accessToken);var t={method:"POST",headers:{"Ocp-Apim-Subscription-Key":this.options.subscriptionKey}};return g("requesting access token"),f(this.issueTokenUrl,t).then(function(t){return t.ok?t.text():t.json()})}},{key:"onMessage",value:function(t){var e=t.data,r=l.parse(e),n=r.path,i=r.body&&v.indexOf(n)>-1?JSON.parse(r.body):{};if(g(n),"turn.start"===n&&(this.turn.active=!0),"speech.phrase"===n&&this.emit("recognition",i),"speech.endDetected"===n){this.telemetry.Metrics.filter(function(t){return"Microphone"===t.Name}).pop().End=(new Date).toISOString()}if("turn.end"===n){this.turn.active=!1;var o=h.createTelemetryPacket(this.currentTurnGuid,this.telemetry);this._sendToSocketServer(o),this._resetTelemetry(["ReceivedMessages"]),this.currentTurnGuid=a().replace(/-/g,"")}this.telemetry.ReceivedMessages[n].push((new Date).toISOString()),this.emit(n,i),this.emit("data",JSON.stringify(e.utf8Data))}},{key:"start",value:function(){var t=this;return this.connectionGuid=a().replace(/-/g,""),this._getAccessToken().then(function(e){if("object"===(void 0===e?"undefined":o(e))){var r=e.message||"no additional details available.";return Promise.reject("accessToken error: "+r)}return g("access token request successful: "+e),t.telemetry.Metrics.push({Name:"Connection",Id:t.connectionGuid,Start:(new Date).toISOString(),End:""}),t._connectToWebsocket(e)})}},{key:"stop",value:function(){var t=this;return new Promise(function(e,r){if(!t.connection||1===!t.connection.readyState)return e();t.once("close",e),t.once("error",r),g("closing speech websocket connection"),t.connection.close()})}},{key:"_connectToWebsocket",value:function(t){g("opening websocket at:",this.serviceUrl);var e={Authorization:"Bearer "+t,"X-ConnectionId":this.connectionGuid},r="";if(this.customSpeech)r=this.serviceUrl;else{var n=Object.keys(e).map(function(t){return"&"+t.replace("-","")+"="+e[t]});r=""+this.serviceUrl+encodeURI(n.join(""))}var i=new u(r,null,null,e);return this._setUpClientEvents(i)}},{key:"_setUpClientEvents",value:function(t){var e=this;return new Promise(function(r,n){t.onmessage=e.onMessage.bind(e),t.onerror=function(t){e.emit("error",t),g("socket error:",t)},t.onclose=function(t){g("socket close:",t),e.emit("close",t),t&&1e3!==t.code&&n(t)},t.onopen=function(n){g("connected to websocket"),e.connection=t,e.sendFile=p.bind(e),e.turn={active:!1},e.telemetry.Metrics[0].End=(new Date).toISOString(),g("sending config packet");var i=h.createSpeechConfigPacket(e.connectionGuid);e._sendToSocketServer(i),e.emit("connect"),r()}})}}]),w}(c)}}).call(e,r(13))},function(t,e){function r(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function i(t){if(c===setTimeout)return setTimeout(t,0);if((c===r||!c)&&setTimeout)return c=setTimeout,setTimeout(t,0);try{return c(t,0)}catch(e){try{return c.call(null,t,0)}catch(e){return c.call(this,t,0)}}}function o(t){if(h===clearTimeout)return clearTimeout(t);if((h===n||!h)&&clearTimeout)return h=clearTimeout,clearTimeout(t);try{return h(t)}catch(e){try{return h.call(null,t)}catch(e){return h.call(this,t)}}}function s(){y&&p&&(y=!1,p.length?g=p.concat(g):d=-1,g.length&&u())}function u(){if(!y){var t=i(s);y=!0;for(var e=g.length;e;){for(p=g,g=[];++d<e;)p&&p[d].run();d=-1,e=g.length}p=null,y=!1,o(t)}}function a(t,e){this.fun=t,this.array=e}function f(){}var c,h,l=t.exports={};!function(){try{c="function"==typeof setTimeout?setTimeout:r}catch(t){c=r}try{h="function"==typeof clearTimeout?clearTimeout:n}catch(t){h=n}}();var p,g=[],y=!1,d=-1;l.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];g.push(new a(t,e)),1!==g.length||y||i(u)},a.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={},l.on=f,l.addListener=f,l.once=f,l.off=f,l.removeListener=f,l.removeAllListeners=f,l.emit=f,l.prependListener=f,l.prependOnceListener=f,l.listeners=function(t){return[]},l.binding=function(t){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(t){throw new Error("process.chdir is not supported")},l.umask=function(){return 0}}])});