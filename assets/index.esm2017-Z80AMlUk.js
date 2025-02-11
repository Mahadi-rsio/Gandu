import{L as Uu,_ as qu,C as Bu,r as Li,h as ju,F as zu,j as xt,k as Ku,l as $u,m as Gu,n as Bn,o as Qu,p as Wu,q as Hu,S as Xu}from"./index-dfc2d82f-DsbbIDgC.js";var Oi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zt,ko;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,m){function p(){}p.prototype=m.prototype,E.D=m.prototype,E.prototype=new p,E.prototype.constructor=E,E.C=function(y,T,I){for(var g=Array(arguments.length-2),bt=2;bt<arguments.length;bt++)g[bt-2]=arguments[bt];return m.prototype[T].apply(y,g)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,m,p){p||(p=0);var y=Array(16);if(typeof m=="string")for(var T=0;16>T;++T)y[T]=m.charCodeAt(p++)|m.charCodeAt(p++)<<8|m.charCodeAt(p++)<<16|m.charCodeAt(p++)<<24;else for(T=0;16>T;++T)y[T]=m[p++]|m[p++]<<8|m[p++]<<16|m[p++]<<24;m=E.g[0],p=E.g[1],T=E.g[2];var I=E.g[3],g=m+(I^p&(T^I))+y[0]+3614090360&4294967295;m=p+(g<<7&4294967295|g>>>25),g=I+(T^m&(p^T))+y[1]+3905402710&4294967295,I=m+(g<<12&4294967295|g>>>20),g=T+(p^I&(m^p))+y[2]+606105819&4294967295,T=I+(g<<17&4294967295|g>>>15),g=p+(m^T&(I^m))+y[3]+3250441966&4294967295,p=T+(g<<22&4294967295|g>>>10),g=m+(I^p&(T^I))+y[4]+4118548399&4294967295,m=p+(g<<7&4294967295|g>>>25),g=I+(T^m&(p^T))+y[5]+1200080426&4294967295,I=m+(g<<12&4294967295|g>>>20),g=T+(p^I&(m^p))+y[6]+2821735955&4294967295,T=I+(g<<17&4294967295|g>>>15),g=p+(m^T&(I^m))+y[7]+4249261313&4294967295,p=T+(g<<22&4294967295|g>>>10),g=m+(I^p&(T^I))+y[8]+1770035416&4294967295,m=p+(g<<7&4294967295|g>>>25),g=I+(T^m&(p^T))+y[9]+2336552879&4294967295,I=m+(g<<12&4294967295|g>>>20),g=T+(p^I&(m^p))+y[10]+4294925233&4294967295,T=I+(g<<17&4294967295|g>>>15),g=p+(m^T&(I^m))+y[11]+2304563134&4294967295,p=T+(g<<22&4294967295|g>>>10),g=m+(I^p&(T^I))+y[12]+1804603682&4294967295,m=p+(g<<7&4294967295|g>>>25),g=I+(T^m&(p^T))+y[13]+4254626195&4294967295,I=m+(g<<12&4294967295|g>>>20),g=T+(p^I&(m^p))+y[14]+2792965006&4294967295,T=I+(g<<17&4294967295|g>>>15),g=p+(m^T&(I^m))+y[15]+1236535329&4294967295,p=T+(g<<22&4294967295|g>>>10),g=m+(T^I&(p^T))+y[1]+4129170786&4294967295,m=p+(g<<5&4294967295|g>>>27),g=I+(p^T&(m^p))+y[6]+3225465664&4294967295,I=m+(g<<9&4294967295|g>>>23),g=T+(m^p&(I^m))+y[11]+643717713&4294967295,T=I+(g<<14&4294967295|g>>>18),g=p+(I^m&(T^I))+y[0]+3921069994&4294967295,p=T+(g<<20&4294967295|g>>>12),g=m+(T^I&(p^T))+y[5]+3593408605&4294967295,m=p+(g<<5&4294967295|g>>>27),g=I+(p^T&(m^p))+y[10]+38016083&4294967295,I=m+(g<<9&4294967295|g>>>23),g=T+(m^p&(I^m))+y[15]+3634488961&4294967295,T=I+(g<<14&4294967295|g>>>18),g=p+(I^m&(T^I))+y[4]+3889429448&4294967295,p=T+(g<<20&4294967295|g>>>12),g=m+(T^I&(p^T))+y[9]+568446438&4294967295,m=p+(g<<5&4294967295|g>>>27),g=I+(p^T&(m^p))+y[14]+3275163606&4294967295,I=m+(g<<9&4294967295|g>>>23),g=T+(m^p&(I^m))+y[3]+4107603335&4294967295,T=I+(g<<14&4294967295|g>>>18),g=p+(I^m&(T^I))+y[8]+1163531501&4294967295,p=T+(g<<20&4294967295|g>>>12),g=m+(T^I&(p^T))+y[13]+2850285829&4294967295,m=p+(g<<5&4294967295|g>>>27),g=I+(p^T&(m^p))+y[2]+4243563512&4294967295,I=m+(g<<9&4294967295|g>>>23),g=T+(m^p&(I^m))+y[7]+1735328473&4294967295,T=I+(g<<14&4294967295|g>>>18),g=p+(I^m&(T^I))+y[12]+2368359562&4294967295,p=T+(g<<20&4294967295|g>>>12),g=m+(p^T^I)+y[5]+4294588738&4294967295,m=p+(g<<4&4294967295|g>>>28),g=I+(m^p^T)+y[8]+2272392833&4294967295,I=m+(g<<11&4294967295|g>>>21),g=T+(I^m^p)+y[11]+1839030562&4294967295,T=I+(g<<16&4294967295|g>>>16),g=p+(T^I^m)+y[14]+4259657740&4294967295,p=T+(g<<23&4294967295|g>>>9),g=m+(p^T^I)+y[1]+2763975236&4294967295,m=p+(g<<4&4294967295|g>>>28),g=I+(m^p^T)+y[4]+1272893353&4294967295,I=m+(g<<11&4294967295|g>>>21),g=T+(I^m^p)+y[7]+4139469664&4294967295,T=I+(g<<16&4294967295|g>>>16),g=p+(T^I^m)+y[10]+3200236656&4294967295,p=T+(g<<23&4294967295|g>>>9),g=m+(p^T^I)+y[13]+681279174&4294967295,m=p+(g<<4&4294967295|g>>>28),g=I+(m^p^T)+y[0]+3936430074&4294967295,I=m+(g<<11&4294967295|g>>>21),g=T+(I^m^p)+y[3]+3572445317&4294967295,T=I+(g<<16&4294967295|g>>>16),g=p+(T^I^m)+y[6]+76029189&4294967295,p=T+(g<<23&4294967295|g>>>9),g=m+(p^T^I)+y[9]+3654602809&4294967295,m=p+(g<<4&4294967295|g>>>28),g=I+(m^p^T)+y[12]+3873151461&4294967295,I=m+(g<<11&4294967295|g>>>21),g=T+(I^m^p)+y[15]+530742520&4294967295,T=I+(g<<16&4294967295|g>>>16),g=p+(T^I^m)+y[2]+3299628645&4294967295,p=T+(g<<23&4294967295|g>>>9),g=m+(T^(p|~I))+y[0]+4096336452&4294967295,m=p+(g<<6&4294967295|g>>>26),g=I+(p^(m|~T))+y[7]+1126891415&4294967295,I=m+(g<<10&4294967295|g>>>22),g=T+(m^(I|~p))+y[14]+2878612391&4294967295,T=I+(g<<15&4294967295|g>>>17),g=p+(I^(T|~m))+y[5]+4237533241&4294967295,p=T+(g<<21&4294967295|g>>>11),g=m+(T^(p|~I))+y[12]+1700485571&4294967295,m=p+(g<<6&4294967295|g>>>26),g=I+(p^(m|~T))+y[3]+2399980690&4294967295,I=m+(g<<10&4294967295|g>>>22),g=T+(m^(I|~p))+y[10]+4293915773&4294967295,T=I+(g<<15&4294967295|g>>>17),g=p+(I^(T|~m))+y[1]+2240044497&4294967295,p=T+(g<<21&4294967295|g>>>11),g=m+(T^(p|~I))+y[8]+1873313359&4294967295,m=p+(g<<6&4294967295|g>>>26),g=I+(p^(m|~T))+y[15]+4264355552&4294967295,I=m+(g<<10&4294967295|g>>>22),g=T+(m^(I|~p))+y[6]+2734768916&4294967295,T=I+(g<<15&4294967295|g>>>17),g=p+(I^(T|~m))+y[13]+1309151649&4294967295,p=T+(g<<21&4294967295|g>>>11),g=m+(T^(p|~I))+y[4]+4149444226&4294967295,m=p+(g<<6&4294967295|g>>>26),g=I+(p^(m|~T))+y[11]+3174756917&4294967295,I=m+(g<<10&4294967295|g>>>22),g=T+(m^(I|~p))+y[2]+718787259&4294967295,T=I+(g<<15&4294967295|g>>>17),g=p+(I^(T|~m))+y[9]+3951481745&4294967295,E.g[0]=E.g[0]+m&4294967295,E.g[1]=E.g[1]+(T+(g<<21&4294967295|g>>>11))&4294967295,E.g[2]=E.g[2]+T&4294967295,E.g[3]=E.g[3]+I&4294967295}n.prototype.u=function(E,m){m===void 0&&(m=E.length);for(var p=m-this.blockSize,y=this.B,T=this.h,I=0;I<m;){if(T==0)for(;I<=p;)i(this,E,I),I+=this.blockSize;if(typeof E=="string"){for(;I<m;)if(y[T++]=E.charCodeAt(I++),T==this.blockSize){i(this,y),T=0;break}}else for(;I<m;)if(y[T++]=E[I++],T==this.blockSize){i(this,y),T=0;break}}this.h=T,this.o+=m},n.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var m=1;m<E.length-8;++m)E[m]=0;var p=8*this.o;for(m=E.length-8;m<E.length;++m)E[m]=p&255,p/=256;for(this.u(E),E=Array(16),m=p=0;4>m;++m)for(var y=0;32>y;y+=8)E[p++]=this.g[m]>>>y&255;return E};function o(E,m){var p=h;return Object.prototype.hasOwnProperty.call(p,E)?p[E]:p[E]=m(E)}function u(E,m){this.h=m;for(var p=[],y=!0,T=E.length-1;0<=T;T--){var I=E[T]|0;y&&I==m||(p[T]=I,y=!1)}this.g=p}var h={};function f(E){return-128<=E&&128>E?o(E,function(m){return new u([m|0],0>m?-1:0)}):new u([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return A;if(0>E)return b(d(-E));for(var m=[],p=1,y=0;E>=p;y++)m[y]=E/p|0,p*=4294967296;return new u(m,0)}function _(E,m){if(E.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(E.charAt(0)=="-")return b(_(E.substring(1),m));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var p=d(Math.pow(m,8)),y=A,T=0;T<E.length;T+=8){var I=Math.min(8,E.length-T),g=parseInt(E.substring(T,T+I),m);8>I?(I=d(Math.pow(m,I)),y=y.j(I).add(d(g))):(y=y.j(p),y=y.add(d(g)))}return y}var A=f(0),P=f(1),S=f(16777216);r=u.prototype,r.m=function(){if(N(this))return-b(this).m();for(var E=0,m=1,p=0;p<this.g.length;p++){var y=this.i(p);E+=(0<=y?y:4294967296+y)*m,m*=4294967296}return E},r.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(k(this))return"0";if(N(this))return"-"+b(this).toString(E);for(var m=d(Math.pow(E,6)),p=this,y="";;){var T=rt(p,m).g;p=$(p,T.j(m));var I=((0<p.g.length?p.g[0]:p.h)>>>0).toString(E);if(p=T,k(p))return I+y;for(;6>I.length;)I="0"+I;y=I+y}},r.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function k(E){if(E.h!=0)return!1;for(var m=0;m<E.g.length;m++)if(E.g[m]!=0)return!1;return!0}function N(E){return E.h==-1}r.l=function(E){return E=$(this,E),N(E)?-1:k(E)?0:1};function b(E){for(var m=E.g.length,p=[],y=0;y<m;y++)p[y]=~E.g[y];return new u(p,~E.h).add(P)}r.abs=function(){return N(this)?b(this):this},r.add=function(E){for(var m=Math.max(this.g.length,E.g.length),p=[],y=0,T=0;T<=m;T++){var I=y+(this.i(T)&65535)+(E.i(T)&65535),g=(I>>>16)+(this.i(T)>>>16)+(E.i(T)>>>16);y=g>>>16,I&=65535,g&=65535,p[T]=g<<16|I}return new u(p,p[p.length-1]&-2147483648?-1:0)};function $(E,m){return E.add(b(m))}r.j=function(E){if(k(this)||k(E))return A;if(N(this))return N(E)?b(this).j(b(E)):b(b(this).j(E));if(N(E))return b(this.j(b(E)));if(0>this.l(S)&&0>E.l(S))return d(this.m()*E.m());for(var m=this.g.length+E.g.length,p=[],y=0;y<2*m;y++)p[y]=0;for(y=0;y<this.g.length;y++)for(var T=0;T<E.g.length;T++){var I=this.i(y)>>>16,g=this.i(y)&65535,bt=E.i(T)>>>16,Se=E.i(T)&65535;p[2*y+2*T]+=g*Se,K(p,2*y+2*T),p[2*y+2*T+1]+=I*Se,K(p,2*y+2*T+1),p[2*y+2*T+1]+=g*bt,K(p,2*y+2*T+1),p[2*y+2*T+2]+=I*bt,K(p,2*y+2*T+2)}for(y=0;y<m;y++)p[y]=p[2*y+1]<<16|p[2*y];for(y=m;y<2*m;y++)p[y]=0;return new u(p,0)};function K(E,m){for(;(E[m]&65535)!=E[m];)E[m+1]+=E[m]>>>16,E[m]&=65535,m++}function G(E,m){this.g=E,this.h=m}function rt(E,m){if(k(m))throw Error("division by zero");if(k(E))return new G(A,A);if(N(E))return m=rt(b(E),m),new G(b(m.g),b(m.h));if(N(m))return m=rt(E,b(m)),new G(b(m.g),m.h);if(30<E.g.length){if(N(E)||N(m))throw Error("slowDivide_ only works with positive integers.");for(var p=P,y=m;0>=y.l(E);)p=Dt(p),y=Dt(y);var T=it(p,1),I=it(y,1);for(y=it(y,2),p=it(p,2);!k(y);){var g=I.add(y);0>=g.l(E)&&(T=T.add(p),I=g),y=it(y,1),p=it(p,1)}return m=$(E,T.j(m)),new G(T,m)}for(T=A;0<=E.l(m);){for(p=Math.max(1,Math.floor(E.m()/m.m())),y=Math.ceil(Math.log(p)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),I=d(p),g=I.j(m);N(g)||0<g.l(E);)p-=y,I=d(p),g=I.j(m);k(I)&&(I=P),T=T.add(I),E=$(E,g)}return new G(T,E)}r.A=function(E){return rt(this,E).h},r.and=function(E){for(var m=Math.max(this.g.length,E.g.length),p=[],y=0;y<m;y++)p[y]=this.i(y)&E.i(y);return new u(p,this.h&E.h)},r.or=function(E){for(var m=Math.max(this.g.length,E.g.length),p=[],y=0;y<m;y++)p[y]=this.i(y)|E.i(y);return new u(p,this.h|E.h)},r.xor=function(E){for(var m=Math.max(this.g.length,E.g.length),p=[],y=0;y<m;y++)p[y]=this.i(y)^E.i(y);return new u(p,this.h^E.h)};function Dt(E){for(var m=E.g.length+1,p=[],y=0;y<m;y++)p[y]=E.i(y)<<1|E.i(y-1)>>>31;return new u(p,E.h)}function it(E,m){var p=m>>5;m%=32;for(var y=E.g.length-p,T=[],I=0;I<y;I++)T[I]=0<m?E.i(I+p)>>>m|E.i(I+p+1)<<32-m:E.i(I+p);return new u(T,E.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,ko=n,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=d,u.fromString=_,zt=u}).apply(typeof Oi<"u"?Oi:typeof self<"u"?self:typeof window<"u"?window:{});var bn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var No,$e,xo,Ln,Ur,Mo,Lo,Oo;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,a,l){return s==Array.prototype||s==Object.prototype||(s[a]=l.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof bn=="object"&&bn];for(var a=0;a<s.length;++a){var l=s[a];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var n=e(this);function i(s,a){if(a)t:{var l=n;s=s.split(".");for(var c=0;c<s.length-1;c++){var v=s[c];if(!(v in l))break t;l=l[v]}s=s[s.length-1],c=l[s],a=a(c),a!=c&&a!=null&&t(l,s,{configurable:!0,writable:!0,value:a})}}function o(s,a){s instanceof String&&(s+="");var l=0,c=!1,v={next:function(){if(!c&&l<s.length){var w=l++;return{value:a(w,s[w]),done:!1}}return c=!0,{done:!0,value:void 0}}};return v[Symbol.iterator]=function(){return v},v}i("Array.prototype.values",function(s){return s||function(){return o(this,function(a,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},h=this||self;function f(s){var a=typeof s;return a=a!="object"?a:s?Array.isArray(s)?"array":a:"null",a=="array"||a=="object"&&typeof s.length=="number"}function d(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function _(s,a,l){return s.call.apply(s.bind,arguments)}function A(s,a,l){if(!s)throw Error();if(2<arguments.length){var c=Array.prototype.slice.call(arguments,2);return function(){var v=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(v,c),s.apply(a,v)}}return function(){return s.apply(a,arguments)}}function P(s,a,l){return P=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:A,P.apply(null,arguments)}function S(s,a){var l=Array.prototype.slice.call(arguments,1);return function(){var c=l.slice();return c.push.apply(c,arguments),s.apply(this,c)}}function k(s,a){function l(){}l.prototype=a.prototype,s.aa=a.prototype,s.prototype=new l,s.prototype.constructor=s,s.Qb=function(c,v,w){for(var C=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)C[Q-2]=arguments[Q];return a.prototype[v].apply(c,C)}}function N(s){const a=s.length;if(0<a){const l=Array(a);for(let c=0;c<a;c++)l[c]=s[c];return l}return[]}function b(s,a){for(let l=1;l<arguments.length;l++){const c=arguments[l];if(f(c)){const v=s.length||0,w=c.length||0;s.length=v+w;for(let C=0;C<w;C++)s[v+C]=c[C]}else s.push(c)}}class ${constructor(a,l){this.i=a,this.j=l,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function K(s){return/^[\s\xa0]*$/.test(s)}function G(){var s=h.navigator;return s&&(s=s.userAgent)?s:""}function rt(s){return rt[" "](s),s}rt[" "]=function(){};var Dt=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function it(s,a,l){for(const c in s)a.call(l,s[c],c,s)}function E(s,a){for(const l in s)a.call(void 0,s[l],l,s)}function m(s){const a={};for(const l in s)a[l]=s[l];return a}const p="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,a){let l,c;for(let v=1;v<arguments.length;v++){c=arguments[v];for(l in c)s[l]=c[l];for(let w=0;w<p.length;w++)l=p[w],Object.prototype.hasOwnProperty.call(c,l)&&(s[l]=c[l])}}function T(s){var a=1;s=s.split(":");const l=[];for(;0<a&&s.length;)l.push(s.shift()),a--;return s.length&&l.push(s.join(":")),l}function I(s){h.setTimeout(()=>{throw s},0)}function g(){var s=cr;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class bt{constructor(){this.h=this.g=null}add(a,l){const c=Se.get();c.set(a,l),this.h?this.h.next=c:this.g=c,this.h=c}}var Se=new $(()=>new su,s=>s.reset());class su{constructor(){this.next=this.g=this.h=null}set(a,l){this.h=a,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let Ce,De=!1,cr=new bt,Ls=()=>{const s=h.Promise.resolve(void 0);Ce=()=>{s.then(iu)}};var iu=()=>{for(var s;s=g();){try{s.h.call(s.g)}catch(l){I(l)}var a=Se;a.j(s),100>a.h&&(a.h++,s.next=a.g,a.g=s)}De=!1};function Ft(){this.s=this.s,this.C=this.C}Ft.prototype.s=!1,Ft.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ft.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ht(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}ht.prototype.h=function(){this.defaultPrevented=!0};var ou=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const l=()=>{};h.addEventListener("test",l,a),h.removeEventListener("test",l,a)}catch{}return s}();function be(s,a){if(ht.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var l=this.type=s.type,c=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget){if(Dt){t:{try{rt(a.nodeName);var v=!0;break t}catch{}v=!1}v||(a=null)}}else l=="mouseover"?a=s.fromElement:l=="mouseout"&&(a=s.toElement);this.relatedTarget=a,c?(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:au[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&be.aa.h.call(this)}}k(be,ht);var au={2:"touch",3:"pen",4:"mouse"};be.prototype.h=function(){be.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var fn="closure_listenable_"+(1e6*Math.random()|0),uu=0;function lu(s,a,l,c,v){this.listener=s,this.proxy=null,this.src=a,this.type=l,this.capture=!!c,this.ha=v,this.key=++uu,this.da=this.fa=!1}function dn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function mn(s){this.src=s,this.g={},this.h=0}mn.prototype.add=function(s,a,l,c,v){var w=s.toString();s=this.g[w],s||(s=this.g[w]=[],this.h++);var C=dr(s,a,c,v);return-1<C?(a=s[C],l||(a.fa=!1)):(a=new lu(a,this.src,w,!!c,v),a.fa=l,s.push(a)),a};function fr(s,a){var l=a.type;if(l in s.g){var c=s.g[l],v=Array.prototype.indexOf.call(c,a,void 0),w;(w=0<=v)&&Array.prototype.splice.call(c,v,1),w&&(dn(a),s.g[l].length==0&&(delete s.g[l],s.h--))}}function dr(s,a,l,c){for(var v=0;v<s.length;++v){var w=s[v];if(!w.da&&w.listener==a&&w.capture==!!l&&w.ha==c)return v}return-1}var mr="closure_lm_"+(1e6*Math.random()|0),gr={};function Os(s,a,l,c,v){if(Array.isArray(a)){for(var w=0;w<a.length;w++)Os(s,a[w],l,c,v);return null}return l=qs(l),s&&s[fn]?s.K(a,l,d(c)?!!c.capture:!1,v):hu(s,a,l,!1,c,v)}function hu(s,a,l,c,v,w){if(!a)throw Error("Invalid event type");var C=d(v)?!!v.capture:!!v,Q=_r(s);if(Q||(s[mr]=Q=new mn(s)),l=Q.add(a,l,c,C,w),l.proxy)return l;if(c=cu(),l.proxy=c,c.src=s,c.listener=l,s.addEventListener)ou||(v=C),v===void 0&&(v=!1),s.addEventListener(a.toString(),c,v);else if(s.attachEvent)s.attachEvent(Us(a.toString()),c);else if(s.addListener&&s.removeListener)s.addListener(c);else throw Error("addEventListener and attachEvent are unavailable.");return l}function cu(){function s(l){return a.call(s.src,s.listener,l)}const a=fu;return s}function Fs(s,a,l,c,v){if(Array.isArray(a))for(var w=0;w<a.length;w++)Fs(s,a[w],l,c,v);else c=d(c)?!!c.capture:!!c,l=qs(l),s&&s[fn]?(s=s.i,a=String(a).toString(),a in s.g&&(w=s.g[a],l=dr(w,l,c,v),-1<l&&(dn(w[l]),Array.prototype.splice.call(w,l,1),w.length==0&&(delete s.g[a],s.h--)))):s&&(s=_r(s))&&(a=s.g[a.toString()],s=-1,a&&(s=dr(a,l,c,v)),(l=-1<s?a[s]:null)&&pr(l))}function pr(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[fn])fr(a.i,s);else{var l=s.type,c=s.proxy;a.removeEventListener?a.removeEventListener(l,c,s.capture):a.detachEvent?a.detachEvent(Us(l),c):a.addListener&&a.removeListener&&a.removeListener(c),(l=_r(a))?(fr(l,s),l.h==0&&(l.src=null,a[mr]=null)):dn(s)}}}function Us(s){return s in gr?gr[s]:gr[s]="on"+s}function fu(s,a){if(s.da)s=!0;else{a=new be(a,this);var l=s.listener,c=s.ha||s.src;s.fa&&pr(s),s=l.call(c,a)}return s}function _r(s){return s=s[mr],s instanceof mn?s:null}var yr="__closure_events_fn_"+(1e9*Math.random()>>>0);function qs(s){return typeof s=="function"?s:(s[yr]||(s[yr]=function(a){return s.handleEvent(a)}),s[yr])}function ct(){Ft.call(this),this.i=new mn(this),this.M=this,this.F=null}k(ct,Ft),ct.prototype[fn]=!0,ct.prototype.removeEventListener=function(s,a,l,c){Fs(this,s,a,l,c)};function _t(s,a){var l,c=s.F;if(c)for(l=[];c;c=c.F)l.push(c);if(s=s.M,c=a.type||a,typeof a=="string")a=new ht(a,s);else if(a instanceof ht)a.target=a.target||s;else{var v=a;a=new ht(c,s),y(a,v)}if(v=!0,l)for(var w=l.length-1;0<=w;w--){var C=a.g=l[w];v=gn(C,c,!0,a)&&v}if(C=a.g=s,v=gn(C,c,!0,a)&&v,v=gn(C,c,!1,a)&&v,l)for(w=0;w<l.length;w++)C=a.g=l[w],v=gn(C,c,!1,a)&&v}ct.prototype.N=function(){if(ct.aa.N.call(this),this.i){var s=this.i,a;for(a in s.g){for(var l=s.g[a],c=0;c<l.length;c++)dn(l[c]);delete s.g[a],s.h--}}this.F=null},ct.prototype.K=function(s,a,l,c){return this.i.add(String(s),a,!1,l,c)},ct.prototype.L=function(s,a,l,c){return this.i.add(String(s),a,!0,l,c)};function gn(s,a,l,c){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();for(var v=!0,w=0;w<a.length;++w){var C=a[w];if(C&&!C.da&&C.capture==l){var Q=C.listener,ot=C.ha||C.src;C.fa&&fr(s.i,C),v=Q.call(ot,c)!==!1&&v}}return v&&!c.defaultPrevented}function Bs(s,a,l){if(typeof s=="function")l&&(s=P(s,l));else if(s&&typeof s.handleEvent=="function")s=P(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:h.setTimeout(s,a||0)}function js(s){s.g=Bs(()=>{s.g=null,s.i&&(s.i=!1,js(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class du extends Ft{constructor(a,l){super(),this.m=a,this.l=l,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:js(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ke(s){Ft.call(this),this.h=s,this.g={}}k(ke,Ft);var zs=[];function Ks(s){it(s.g,function(a,l){this.g.hasOwnProperty(l)&&pr(a)},s),s.g={}}ke.prototype.N=function(){ke.aa.N.call(this),Ks(this)},ke.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Tr=h.JSON.stringify,mu=h.JSON.parse,gu=class{stringify(s){return h.JSON.stringify(s,void 0)}parse(s){return h.JSON.parse(s,void 0)}};function Er(){}Er.prototype.h=null;function $s(s){return s.h||(s.h=s.i())}function Gs(){}var Ne={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function vr(){ht.call(this,"d")}k(vr,ht);function Ir(){ht.call(this,"c")}k(Ir,ht);var Yt={},Qs=null;function pn(){return Qs=Qs||new ct}Yt.La="serverreachability";function Ws(s){ht.call(this,Yt.La,s)}k(Ws,ht);function xe(s){const a=pn();_t(a,new Ws(a))}Yt.STAT_EVENT="statevent";function Hs(s,a){ht.call(this,Yt.STAT_EVENT,s),this.stat=a}k(Hs,ht);function yt(s){const a=pn();_t(a,new Hs(a,s))}Yt.Ma="timingevent";function Xs(s,a){ht.call(this,Yt.Ma,s),this.size=a}k(Xs,ht);function Me(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){s()},a)}function Le(){this.g=!0}Le.prototype.xa=function(){this.g=!1};function pu(s,a,l,c,v,w){s.info(function(){if(s.g)if(w)for(var C="",Q=w.split("&"),ot=0;ot<Q.length;ot++){var j=Q[ot].split("=");if(1<j.length){var ft=j[0];j=j[1];var dt=ft.split("_");C=2<=dt.length&&dt[1]=="type"?C+(ft+"="+j+"&"):C+(ft+"=redacted&")}}else C=null;else C=w;return"XMLHTTP REQ ("+c+") [attempt "+v+"]: "+a+`
`+l+`
`+C})}function _u(s,a,l,c,v,w,C){s.info(function(){return"XMLHTTP RESP ("+c+") [ attempt "+v+"]: "+a+`
`+l+`
`+w+" "+C})}function ue(s,a,l,c){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+Tu(s,l)+(c?" "+c:"")})}function yu(s,a){s.info(function(){return"TIMEOUT: "+a})}Le.prototype.info=function(){};function Tu(s,a){if(!s.g)return a;if(!a)return null;try{var l=JSON.parse(a);if(l){for(s=0;s<l.length;s++)if(Array.isArray(l[s])){var c=l[s];if(!(2>c.length)){var v=c[1];if(Array.isArray(v)&&!(1>v.length)){var w=v[0];if(w!="noop"&&w!="stop"&&w!="close")for(var C=1;C<v.length;C++)v[C]=""}}}}return Tr(l)}catch{return a}}var _n={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ys={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ar;function yn(){}k(yn,Er),yn.prototype.g=function(){return new XMLHttpRequest},yn.prototype.i=function(){return{}},Ar=new yn;function Ut(s,a,l,c){this.j=s,this.i=a,this.l=l,this.R=c||1,this.U=new ke(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Js}function Js(){this.i=null,this.g="",this.h=!1}var Zs={},wr={};function Rr(s,a,l){s.L=1,s.v=In(kt(a)),s.m=l,s.P=!0,ti(s,null)}function ti(s,a){s.F=Date.now(),Tn(s),s.A=kt(s.v);var l=s.A,c=s.R;Array.isArray(c)||(c=[String(c)]),mi(l.i,"t",c),s.C=0,l=s.j.J,s.h=new Js,s.g=ki(s.j,l?a:null,!s.m),0<s.O&&(s.M=new du(P(s.Y,s,s.g),s.O)),a=s.U,l=s.g,c=s.ca;var v="readystatechange";Array.isArray(v)||(v&&(zs[0]=v.toString()),v=zs);for(var w=0;w<v.length;w++){var C=Os(l,v[w],c||a.handleEvent,!1,a.h||a);if(!C)break;a.g[C.key]=C}a=s.H?m(s.H):{},s.m?(s.u||(s.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,a)):(s.u="GET",s.g.ea(s.A,s.u,null,a)),xe(),pu(s.i,s.u,s.A,s.l,s.R,s.m)}Ut.prototype.ca=function(s){s=s.target;const a=this.M;a&&Nt(s)==3?a.j():this.Y(s)},Ut.prototype.Y=function(s){try{if(s==this.g)t:{const dt=Nt(this.g);var a=this.g.Ba();const ce=this.g.Z();if(!(3>dt)&&(dt!=3||this.g&&(this.h.h||this.g.oa()||vi(this.g)))){this.J||dt!=4||a==7||(a==8||0>=ce?xe(3):xe(2)),Pr(this);var l=this.g.Z();this.X=l;e:if(ei(this)){var c=vi(this.g);s="";var v=c.length,w=Nt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Jt(this),Oe(this);var C="";break e}this.h.i=new h.TextDecoder}for(a=0;a<v;a++)this.h.h=!0,s+=this.h.i.decode(c[a],{stream:!(w&&a==v-1)});c.length=0,this.h.g+=s,this.C=0,C=this.h.g}else C=this.g.oa();if(this.o=l==200,_u(this.i,this.u,this.A,this.l,this.R,dt,l),this.o){if(this.T&&!this.K){e:{if(this.g){var Q,ot=this.g;if((Q=ot.g?ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!K(Q)){var j=Q;break e}}j=null}if(l=j)ue(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Vr(this,l);else{this.o=!1,this.s=3,yt(12),Jt(this),Oe(this);break t}}if(this.P){l=!0;let At;for(;!this.J&&this.C<C.length;)if(At=Eu(this,C),At==wr){dt==4&&(this.s=4,yt(14),l=!1),ue(this.i,this.l,null,"[Incomplete Response]");break}else if(At==Zs){this.s=4,yt(15),ue(this.i,this.l,C,"[Invalid Chunk]"),l=!1;break}else ue(this.i,this.l,At,null),Vr(this,At);if(ei(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),dt!=4||C.length!=0||this.h.h||(this.s=1,yt(16),l=!1),this.o=this.o&&l,!l)ue(this.i,this.l,C,"[Invalid Chunked Response]"),Jt(this),Oe(this);else if(0<C.length&&!this.W){this.W=!0;var ft=this.j;ft.g==this&&ft.ba&&!ft.M&&(ft.j.info("Great, no buffering proxy detected. Bytes received: "+C.length),Nr(ft),ft.M=!0,yt(11))}}else ue(this.i,this.l,C,null),Vr(this,C);dt==4&&Jt(this),this.o&&!this.J&&(dt==4?Si(this.j,this):(this.o=!1,Tn(this)))}else Ou(this.g),l==400&&0<C.indexOf("Unknown SID")?(this.s=3,yt(12)):(this.s=0,yt(13)),Jt(this),Oe(this)}}}catch{}finally{}};function ei(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Eu(s,a){var l=s.C,c=a.indexOf(`
`,l);return c==-1?wr:(l=Number(a.substring(l,c)),isNaN(l)?Zs:(c+=1,c+l>a.length?wr:(a=a.slice(c,c+l),s.C=c+l,a)))}Ut.prototype.cancel=function(){this.J=!0,Jt(this)};function Tn(s){s.S=Date.now()+s.I,ni(s,s.I)}function ni(s,a){if(s.B!=null)throw Error("WatchDog timer not null");s.B=Me(P(s.ba,s),a)}function Pr(s){s.B&&(h.clearTimeout(s.B),s.B=null)}Ut.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(yu(this.i,this.A),this.L!=2&&(xe(),yt(17)),Jt(this),this.s=2,Oe(this)):ni(this,this.S-s)};function Oe(s){s.j.G==0||s.J||Si(s.j,s)}function Jt(s){Pr(s);var a=s.M;a&&typeof a.ma=="function"&&a.ma(),s.M=null,Ks(s.U),s.g&&(a=s.g,s.g=null,a.abort(),a.ma())}function Vr(s,a){try{var l=s.j;if(l.G!=0&&(l.g==s||Sr(l.h,s))){if(!s.K&&Sr(l.h,s)&&l.G==3){try{var c=l.Da.g.parse(a)}catch{c=null}if(Array.isArray(c)&&c.length==3){var v=c;if(v[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<s.F)Sn(l),Pn(l);else break t;kr(l),yt(18)}}else l.za=v[1],0<l.za-l.T&&37500>v[2]&&l.F&&l.v==0&&!l.C&&(l.C=Me(P(l.Za,l),6e3));if(1>=ii(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else te(l,11)}else if((s.K||l.g==s)&&Sn(l),!K(a))for(v=l.Da.g.parse(a),a=0;a<v.length;a++){let j=v[a];if(l.T=j[0],j=j[1],l.G==2)if(j[0]=="c"){l.K=j[1],l.ia=j[2];const ft=j[3];ft!=null&&(l.la=ft,l.j.info("VER="+l.la));const dt=j[4];dt!=null&&(l.Aa=dt,l.j.info("SVER="+l.Aa));const ce=j[5];ce!=null&&typeof ce=="number"&&0<ce&&(c=1.5*ce,l.L=c,l.j.info("backChannelRequestTimeoutMs_="+c)),c=l;const At=s.g;if(At){const Dn=At.g?At.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Dn){var w=c.h;w.g||Dn.indexOf("spdy")==-1&&Dn.indexOf("quic")==-1&&Dn.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(Cr(w,w.h),w.h=null))}if(c.D){const xr=At.g?At.g.getResponseHeader("X-HTTP-Session-Id"):null;xr&&(c.ya=xr,W(c.I,c.D,xr))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-s.F,l.j.info("Handshake RTT: "+l.R+"ms")),c=l;var C=s;if(c.qa=bi(c,c.J?c.ia:null,c.W),C.K){oi(c.h,C);var Q=C,ot=c.L;ot&&(Q.I=ot),Q.B&&(Pr(Q),Tn(Q)),c.g=C}else Pi(c);0<l.i.length&&Vn(l)}else j[0]!="stop"&&j[0]!="close"||te(l,7);else l.G==3&&(j[0]=="stop"||j[0]=="close"?j[0]=="stop"?te(l,7):br(l):j[0]!="noop"&&l.l&&l.l.ta(j),l.v=0)}}xe(4)}catch{}}var vu=class{constructor(s,a){this.g=s,this.map=a}};function ri(s){this.l=s||10,h.PerformanceNavigationTiming?(s=h.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function si(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function ii(s){return s.h?1:s.g?s.g.size:0}function Sr(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function Cr(s,a){s.g?s.g.add(a):s.h=a}function oi(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}ri.prototype.cancel=function(){if(this.i=ai(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function ai(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const l of s.g.values())a=a.concat(l.D);return a}return N(s.i)}function Iu(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(f(s)){for(var a=[],l=s.length,c=0;c<l;c++)a.push(s[c]);return a}a=[],l=0;for(c in s)a[l++]=s[c];return a}function Au(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(f(s)||typeof s=="string"){var a=[];s=s.length;for(var l=0;l<s;l++)a.push(l);return a}a=[],l=0;for(const c in s)a[l++]=c;return a}}}function ui(s,a){if(s.forEach&&typeof s.forEach=="function")s.forEach(a,void 0);else if(f(s)||typeof s=="string")Array.prototype.forEach.call(s,a,void 0);else for(var l=Au(s),c=Iu(s),v=c.length,w=0;w<v;w++)a.call(void 0,c[w],l&&l[w],s)}var li=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function wu(s,a){if(s){s=s.split("&");for(var l=0;l<s.length;l++){var c=s[l].indexOf("="),v=null;if(0<=c){var w=s[l].substring(0,c);v=s[l].substring(c+1)}else w=s[l];a(w,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function Zt(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof Zt){this.h=s.h,En(this,s.j),this.o=s.o,this.g=s.g,vn(this,s.s),this.l=s.l;var a=s.i,l=new qe;l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),hi(this,l),this.m=s.m}else s&&(a=String(s).match(li))?(this.h=!1,En(this,a[1]||"",!0),this.o=Fe(a[2]||""),this.g=Fe(a[3]||"",!0),vn(this,a[4]),this.l=Fe(a[5]||"",!0),hi(this,a[6]||"",!0),this.m=Fe(a[7]||"")):(this.h=!1,this.i=new qe(null,this.h))}Zt.prototype.toString=function(){var s=[],a=this.j;a&&s.push(Ue(a,ci,!0),":");var l=this.g;return(l||a=="file")&&(s.push("//"),(a=this.o)&&s.push(Ue(a,ci,!0),"@"),s.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&s.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&s.push("/"),s.push(Ue(l,l.charAt(0)=="/"?Vu:Pu,!0))),(l=this.i.toString())&&s.push("?",l),(l=this.m)&&s.push("#",Ue(l,Cu)),s.join("")};function kt(s){return new Zt(s)}function En(s,a,l){s.j=l?Fe(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function vn(s,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);s.s=a}else s.s=null}function hi(s,a,l){a instanceof qe?(s.i=a,Du(s.i,s.h)):(l||(a=Ue(a,Su)),s.i=new qe(a,s.h))}function W(s,a,l){s.i.set(a,l)}function In(s){return W(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Fe(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Ue(s,a,l){return typeof s=="string"?(s=encodeURI(s).replace(a,Ru),l&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Ru(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var ci=/[#\/\?@]/g,Pu=/[#\?:]/g,Vu=/[#\?]/g,Su=/[#\?@]/g,Cu=/#/g;function qe(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function qt(s){s.g||(s.g=new Map,s.h=0,s.i&&wu(s.i,function(a,l){s.add(decodeURIComponent(a.replace(/\+/g," ")),l)}))}r=qe.prototype,r.add=function(s,a){qt(this),this.i=null,s=le(this,s);var l=this.g.get(s);return l||this.g.set(s,l=[]),l.push(a),this.h+=1,this};function fi(s,a){qt(s),a=le(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function di(s,a){return qt(s),a=le(s,a),s.g.has(a)}r.forEach=function(s,a){qt(this),this.g.forEach(function(l,c){l.forEach(function(v){s.call(a,v,c,this)},this)},this)},r.na=function(){qt(this);const s=Array.from(this.g.values()),a=Array.from(this.g.keys()),l=[];for(let c=0;c<a.length;c++){const v=s[c];for(let w=0;w<v.length;w++)l.push(a[c])}return l},r.V=function(s){qt(this);let a=[];if(typeof s=="string")di(this,s)&&(a=a.concat(this.g.get(le(this,s))));else{s=Array.from(this.g.values());for(let l=0;l<s.length;l++)a=a.concat(s[l])}return a},r.set=function(s,a){return qt(this),this.i=null,s=le(this,s),di(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},r.get=function(s,a){return s?(s=this.V(s),0<s.length?String(s[0]):a):a};function mi(s,a,l){fi(s,a),0<l.length&&(s.i=null,s.g.set(le(s,a),N(l)),s.h+=l.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(var l=0;l<a.length;l++){var c=a[l];const w=encodeURIComponent(String(c)),C=this.V(c);for(c=0;c<C.length;c++){var v=w;C[c]!==""&&(v+="="+encodeURIComponent(String(C[c]))),s.push(v)}}return this.i=s.join("&")};function le(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function Du(s,a){a&&!s.j&&(qt(s),s.i=null,s.g.forEach(function(l,c){var v=c.toLowerCase();c!=v&&(fi(this,c),mi(this,v,l))},s)),s.j=a}function bu(s,a){const l=new Le;if(h.Image){const c=new Image;c.onload=S(Bt,l,"TestLoadImage: loaded",!0,a,c),c.onerror=S(Bt,l,"TestLoadImage: error",!1,a,c),c.onabort=S(Bt,l,"TestLoadImage: abort",!1,a,c),c.ontimeout=S(Bt,l,"TestLoadImage: timeout",!1,a,c),h.setTimeout(function(){c.ontimeout&&c.ontimeout()},1e4),c.src=s}else a(!1)}function ku(s,a){const l=new Le,c=new AbortController,v=setTimeout(()=>{c.abort(),Bt(l,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:c.signal}).then(w=>{clearTimeout(v),w.ok?Bt(l,"TestPingServer: ok",!0,a):Bt(l,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(v),Bt(l,"TestPingServer: error",!1,a)})}function Bt(s,a,l,c,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),c(l)}catch{}}function Nu(){this.g=new gu}function xu(s,a,l){const c=l||"";try{ui(s,function(v,w){let C=v;d(v)&&(C=Tr(v)),a.push(c+w+"="+encodeURIComponent(C))})}catch(v){throw a.push(c+"type="+encodeURIComponent("_badmap")),v}}function An(s){this.l=s.Ub||null,this.j=s.eb||!1}k(An,Er),An.prototype.g=function(){return new wn(this.l,this.j)},An.prototype.i=function(s){return function(){return s}}({});function wn(s,a){ct.call(this),this.D=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(wn,ct),r=wn.prototype,r.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=a,this.readyState=1,je(this)},r.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(a.body=s),(this.D||h).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Be(this)),this.readyState=0},r.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,je(this)),this.g&&(this.readyState=3,je(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;gi(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function gi(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}r.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?Be(this):je(this),this.readyState==3&&gi(this)}},r.Ra=function(s){this.g&&(this.response=this.responseText=s,Be(this))},r.Qa=function(s){this.g&&(this.response=s,Be(this))},r.ga=function(){this.g&&Be(this)};function Be(s){s.readyState=4,s.l=null,s.j=null,s.v=null,je(s)}r.setRequestHeader=function(s,a){this.u.append(s,a)},r.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var l=a.next();!l.done;)l=l.value,s.push(l[0]+": "+l[1]),l=a.next();return s.join(`\r
`)};function je(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(wn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function pi(s){let a="";return it(s,function(l,c){a+=c,a+=":",a+=l,a+=`\r
`}),a}function Dr(s,a,l){t:{for(c in l){var c=!1;break t}c=!0}c||(l=pi(l),typeof s=="string"?l!=null&&encodeURIComponent(String(l)):W(s,a,l))}function X(s){ct.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(X,ct);var Mu=/^https?$/i,Lu=["POST","PUT"];r=X.prototype,r.Ha=function(s){this.J=s},r.ea=function(s,a,l,c){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ar.g(),this.v=this.o?$s(this.o):$s(Ar),this.g.onreadystatechange=P(this.Ea,this);try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(w){_i(this,w);return}if(s=l||"",l=new Map(this.headers),c)if(Object.getPrototypeOf(c)===Object.prototype)for(var v in c)l.set(v,c[v]);else if(typeof c.keys=="function"&&typeof c.get=="function")for(const w of c.keys())l.set(w,c.get(w));else throw Error("Unknown input type for opt_headers: "+String(c));c=Array.from(l.keys()).find(w=>w.toLowerCase()=="content-type"),v=h.FormData&&s instanceof h.FormData,!(0<=Array.prototype.indexOf.call(Lu,a,void 0))||c||v||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,C]of l)this.g.setRequestHeader(w,C);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ei(this),this.u=!0,this.g.send(s),this.u=!1}catch(w){_i(this,w)}};function _i(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.m=5,yi(s),Rn(s)}function yi(s){s.A||(s.A=!0,_t(s,"complete"),_t(s,"error"))}r.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,_t(this,"complete"),_t(this,"abort"),Rn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Rn(this,!0)),X.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Ti(this):this.bb())},r.bb=function(){Ti(this)};function Ti(s){if(s.h&&typeof u<"u"&&(!s.v[1]||Nt(s)!=4||s.Z()!=2)){if(s.u&&Nt(s)==4)Bs(s.Ea,0,s);else if(_t(s,"readystatechange"),Nt(s)==4){s.h=!1;try{const C=s.Z();t:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var l;if(!(l=a)){var c;if(c=C===0){var v=String(s.D).match(li)[1]||null;!v&&h.self&&h.self.location&&(v=h.self.location.protocol.slice(0,-1)),c=!Mu.test(v?v.toLowerCase():"")}l=c}if(l)_t(s,"complete"),_t(s,"success");else{s.m=6;try{var w=2<Nt(s)?s.g.statusText:""}catch{w=""}s.l=w+" ["+s.Z()+"]",yi(s)}}finally{Rn(s)}}}}function Rn(s,a){if(s.g){Ei(s);const l=s.g,c=s.v[0]?()=>{}:null;s.g=null,s.v=null,a||_t(s,"ready");try{l.onreadystatechange=c}catch{}}}function Ei(s){s.I&&(h.clearTimeout(s.I),s.I=null)}r.isActive=function(){return!!this.g};function Nt(s){return s.g?s.g.readyState:0}r.Z=function(){try{return 2<Nt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),mu(a)}};function vi(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Ou(s){const a={};s=(s.g&&2<=Nt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let c=0;c<s.length;c++){if(K(s[c]))continue;var l=T(s[c]);const v=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const w=a[v]||[];a[v]=w,w.push(l)}E(a,function(c){return c.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ze(s,a,l){return l&&l.internalChannelParams&&l.internalChannelParams[s]||a}function Ii(s){this.Aa=0,this.i=[],this.j=new Le,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ze("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ze("baseRetryDelayMs",5e3,s),this.cb=ze("retryDelaySeedMs",1e4,s),this.Wa=ze("forwardChannelMaxRetries",2,s),this.wa=ze("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new ri(s&&s.concurrentRequestLimit),this.Da=new Nu,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Ii.prototype,r.la=8,r.G=1,r.connect=function(s,a,l,c){yt(0),this.W=s,this.H=a||{},l&&c!==void 0&&(this.H.OSID=l,this.H.OAID=c),this.F=this.X,this.I=bi(this,null,this.W),Vn(this)};function br(s){if(Ai(s),s.G==3){var a=s.U++,l=kt(s.I);if(W(l,"SID",s.K),W(l,"RID",a),W(l,"TYPE","terminate"),Ke(s,l),a=new Ut(s,s.j,a),a.L=2,a.v=In(kt(l)),l=!1,h.navigator&&h.navigator.sendBeacon)try{l=h.navigator.sendBeacon(a.v.toString(),"")}catch{}!l&&h.Image&&(new Image().src=a.v,l=!0),l||(a.g=ki(a.j,null),a.g.ea(a.v)),a.F=Date.now(),Tn(a)}Di(s)}function Pn(s){s.g&&(Nr(s),s.g.cancel(),s.g=null)}function Ai(s){Pn(s),s.u&&(h.clearTimeout(s.u),s.u=null),Sn(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&h.clearTimeout(s.s),s.s=null)}function Vn(s){if(!si(s.h)&&!s.s){s.s=!0;var a=s.Ga;Ce||Ls(),De||(Ce(),De=!0),cr.add(a,s),s.B=0}}function Fu(s,a){return ii(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=a.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=Me(P(s.Ga,s,a),Ci(s,s.B)),s.B++,!0)}r.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const v=new Ut(this,this.j,s);let w=this.o;if(this.S&&(w?(w=m(w),y(w,this.S)):w=this.S),this.m!==null||this.O||(v.H=w,w=null),this.P)t:{for(var a=0,l=0;l<this.i.length;l++){e:{var c=this.i[l];if("__data__"in c.map&&(c=c.map.__data__,typeof c=="string")){c=c.length;break e}c=void 0}if(c===void 0)break;if(a+=c,4096<a){a=l;break t}if(a===4096||l===this.i.length-1){a=l+1;break t}}a=1e3}else a=1e3;a=Ri(this,v,a),l=kt(this.I),W(l,"RID",s),W(l,"CVER",22),this.D&&W(l,"X-HTTP-Session-Id",this.D),Ke(this,l),w&&(this.O?a="headers="+encodeURIComponent(String(pi(w)))+"&"+a:this.m&&Dr(l,this.m,w)),Cr(this.h,v),this.Ua&&W(l,"TYPE","init"),this.P?(W(l,"$req",a),W(l,"SID","null"),v.T=!0,Rr(v,l,null)):Rr(v,l,a),this.G=2}}else this.G==3&&(s?wi(this,s):this.i.length==0||si(this.h)||wi(this))};function wi(s,a){var l;a?l=a.l:l=s.U++;const c=kt(s.I);W(c,"SID",s.K),W(c,"RID",l),W(c,"AID",s.T),Ke(s,c),s.m&&s.o&&Dr(c,s.m,s.o),l=new Ut(s,s.j,l,s.B+1),s.m===null&&(l.H=s.o),a&&(s.i=a.D.concat(s.i)),a=Ri(s,l,1e3),l.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Cr(s.h,l),Rr(l,c,a)}function Ke(s,a){s.H&&it(s.H,function(l,c){W(a,c,l)}),s.l&&ui({},function(l,c){W(a,c,l)})}function Ri(s,a,l){l=Math.min(s.i.length,l);var c=s.l?P(s.l.Na,s.l,s):null;t:{var v=s.i;let w=-1;for(;;){const C=["count="+l];w==-1?0<l?(w=v[0].g,C.push("ofs="+w)):w=0:C.push("ofs="+w);let Q=!0;for(let ot=0;ot<l;ot++){let j=v[ot].g;const ft=v[ot].map;if(j-=w,0>j)w=Math.max(0,v[ot].g-100),Q=!1;else try{xu(ft,C,"req"+j+"_")}catch{c&&c(ft)}}if(Q){c=C.join("&");break t}}}return s=s.i.splice(0,l),a.D=s,c}function Pi(s){if(!s.g&&!s.u){s.Y=1;var a=s.Fa;Ce||Ls(),De||(Ce(),De=!0),cr.add(a,s),s.v=0}}function kr(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=Me(P(s.Fa,s),Ci(s,s.v)),s.v++,!0)}r.Fa=function(){if(this.u=null,Vi(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=Me(P(this.ab,this),s)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,yt(10),Pn(this),Vi(this))};function Nr(s){s.A!=null&&(h.clearTimeout(s.A),s.A=null)}function Vi(s){s.g=new Ut(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var a=kt(s.qa);W(a,"RID","rpc"),W(a,"SID",s.K),W(a,"AID",s.T),W(a,"CI",s.F?"0":"1"),!s.F&&s.ja&&W(a,"TO",s.ja),W(a,"TYPE","xmlhttp"),Ke(s,a),s.m&&s.o&&Dr(a,s.m,s.o),s.L&&(s.g.I=s.L);var l=s.g;s=s.ia,l.L=1,l.v=In(kt(a)),l.m=null,l.P=!0,ti(l,s)}r.Za=function(){this.C!=null&&(this.C=null,Pn(this),kr(this),yt(19))};function Sn(s){s.C!=null&&(h.clearTimeout(s.C),s.C=null)}function Si(s,a){var l=null;if(s.g==a){Sn(s),Nr(s),s.g=null;var c=2}else if(Sr(s.h,a))l=a.D,oi(s.h,a),c=1;else return;if(s.G!=0){if(a.o)if(c==1){l=a.m?a.m.length:0,a=Date.now()-a.F;var v=s.B;c=pn(),_t(c,new Xs(c,l)),Vn(s)}else Pi(s);else if(v=a.s,v==3||v==0&&0<a.X||!(c==1&&Fu(s,a)||c==2&&kr(s)))switch(l&&0<l.length&&(a=s.h,a.i=a.i.concat(l)),v){case 1:te(s,5);break;case 4:te(s,10);break;case 3:te(s,6);break;default:te(s,2)}}}function Ci(s,a){let l=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(l*=2),l*a}function te(s,a){if(s.j.info("Error code "+a),a==2){var l=P(s.fb,s),c=s.Xa;const v=!c;c=new Zt(c||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||En(c,"https"),In(c),v?bu(c.toString(),l):ku(c.toString(),l)}else yt(2);s.G=0,s.l&&s.l.sa(a),Di(s),Ai(s)}r.fb=function(s){s?(this.j.info("Successfully pinged google.com"),yt(2)):(this.j.info("Failed to ping google.com"),yt(1))};function Di(s){if(s.G=0,s.ka=[],s.l){const a=ai(s.h);(a.length!=0||s.i.length!=0)&&(b(s.ka,a),b(s.ka,s.i),s.h.i.length=0,N(s.i),s.i.length=0),s.l.ra()}}function bi(s,a,l){var c=l instanceof Zt?kt(l):new Zt(l);if(c.g!="")a&&(c.g=a+"."+c.g),vn(c,c.s);else{var v=h.location;c=v.protocol,a=a?a+"."+v.hostname:v.hostname,v=+v.port;var w=new Zt(null);c&&En(w,c),a&&(w.g=a),v&&vn(w,v),l&&(w.l=l),c=w}return l=s.D,a=s.ya,l&&a&&W(c,l,a),W(c,"VER",s.la),Ke(s,c),c}function ki(s,a,l){if(a&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Ca&&!s.pa?new X(new An({eb:l})):new X(s.pa),a.Ha(s.J),a}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ni(){}r=Ni.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Cn(){}Cn.prototype.g=function(s,a){return new Et(s,a)};function Et(s,a){ct.call(this),this.g=new Ii(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(s?s["X-WebChannel-Client-Profile"]=a.va:s={"X-WebChannel-Client-Profile":a.va}),this.g.S=s,(s=a&&a.Sb)&&!K(s)&&(this.g.m=s),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!K(a)&&(this.g.D=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new he(this)}k(Et,ct),Et.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Et.prototype.close=function(){br(this.g)},Et.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var l={};l.__data__=s,s=l}else this.u&&(l={},l.__data__=Tr(s),s=l);a.i.push(new vu(a.Ya++,s)),a.G==3&&Vn(a)},Et.prototype.N=function(){this.g.l=null,delete this.j,br(this.g),delete this.g,Et.aa.N.call(this)};function xi(s){vr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){t:{for(const l in a){s=l;break t}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}k(xi,vr);function Mi(){Ir.call(this),this.status=1}k(Mi,Ir);function he(s){this.g=s}k(he,Ni),he.prototype.ua=function(){_t(this.g,"a")},he.prototype.ta=function(s){_t(this.g,new xi(s))},he.prototype.sa=function(s){_t(this.g,new Mi)},he.prototype.ra=function(){_t(this.g,"b")},Cn.prototype.createWebChannel=Cn.prototype.g,Et.prototype.send=Et.prototype.o,Et.prototype.open=Et.prototype.m,Et.prototype.close=Et.prototype.close,Oo=function(){return new Cn},Lo=function(){return pn()},Mo=Yt,Ur={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},_n.NO_ERROR=0,_n.TIMEOUT=8,_n.HTTP_ERROR=6,Ln=_n,Ys.COMPLETE="complete",xo=Ys,Gs.EventType=Ne,Ne.OPEN="a",Ne.CLOSE="b",Ne.ERROR="c",Ne.MESSAGE="d",ct.prototype.listen=ct.prototype.K,$e=Gs,X.prototype.listenOnce=X.prototype.L,X.prototype.getLastError=X.prototype.Ka,X.prototype.getLastErrorCode=X.prototype.Ba,X.prototype.getStatus=X.prototype.Z,X.prototype.getResponseJson=X.prototype.Oa,X.prototype.getResponseText=X.prototype.oa,X.prototype.send=X.prototype.ea,X.prototype.setWithCredentials=X.prototype.Ha,No=X}).apply(typeof bn<"u"?bn:typeof self<"u"?self:typeof window<"u"?window:{});const Fi="@firebase/firestore",Ui="4.7.7";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let we="11.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne=new Uu("@firebase/firestore");function fe(){return ne.logLevel}function D(r,...t){if(ne.logLevel<=xt.DEBUG){const e=t.map(ns);ne.debug(`Firestore (${we}): ${r}`,...e)}}function Lt(r,...t){if(ne.logLevel<=xt.ERROR){const e=t.map(ns);ne.error(`Firestore (${we}): ${r}`,...e)}}function _e(r,...t){if(ne.logLevel<=xt.WARN){const e=t.map(ns);ne.warn(`Firestore (${we}): ${r}`,...e)}}function ns(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(r="Unexpected state"){const t=`FIRESTORE (${we}) INTERNAL ASSERTION FAILED: `+r;throw Lt(t),new Error(t)}function z(r,t){r||L()}function F(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends zu{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Yu{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(gt.UNAUTHENTICATED))}shutdown(){}}class Ju{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Zu{constructor(t){this.t=t,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){z(this.o===void 0);let n=this.i;const i=f=>this.i!==n?(n=this.i,e(f)):Promise.resolve();let o=new Kt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Kt,t.enqueueRetryable(()=>i(this.currentUser))};const u=()=>{const f=o;t.enqueueRetryable(async()=>{await f.promise,await i(this.currentUser)})},h=f=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(f=>h(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?h(f):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Kt)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(z(typeof n.accessToken=="string"),new Fo(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return z(t===null||typeof t=="string"),new gt(t)}}class tl{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class el{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new tl(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class qi{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nl{constructor(t,e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,ju(t)&&t.settings.appCheckToken&&(this.V=t.settings.appCheckToken)}start(t,e){z(this.o===void 0);const n=o=>{o.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.R;return this.R=o.token,D("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>n(o))};const i=o=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new qi(this.V));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(z(typeof e.token=="string"),this.R=e.token,new qi(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const i=rl(40);for(let o=0;o<i.length;++o)n.length<20&&i[o]<e&&(n+=t.charAt(i[o]%62))}return n}}function U(r,t){return r<t?-1:r>t?1:0}function Br(r,t){const e=qr().encode(r),n=qr().encode(t);for(let i=0;i<Math.min(e.length,n.length);i++){const o=U(e[i],n[i]);if(o!==0)return o}return U(e.length,n.length)}function ye(r,t,e){return r.length===t.length&&r.every((n,i)=>e(n,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi=-62135596800,ji=1e6;class et{static now(){return et.fromMillis(Date.now())}static fromDate(t){return et.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*ji);return new et(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new x(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new x(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Bi)throw new x(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new x(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ji}_compareTo(t){return this.seconds===t.seconds?U(this.nanoseconds,t.nanoseconds):U(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-Bi;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{static fromTimestamp(t){return new O(t)}static min(){return new O(new et(0,0))}static max(){return new O(new et(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi="__name__";class Rt{constructor(t,e,n){e===void 0?e=0:e>t.length&&L(),n===void 0?n=t.length-e:n>t.length-e&&L(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return Rt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Rt?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const o=Rt.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return U(t.length,e.length)}static compareSegments(t,e){const n=Rt.isNumericId(t),i=Rt.isNumericId(e);return n&&!i?-1:!n&&i?1:n&&i?Rt.extractNumericId(t).compare(Rt.extractNumericId(e)):Br(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return zt.fromString(t.substring(4,t.length-2))}}class Y extends Rt{construct(t,e,n){return new Y(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new x(V.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(i=>i.length>0))}return new Y(e)}static emptyPath(){return new Y([])}}const sl=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends Rt{construct(t,e,n){return new ut(t,e,n)}static isValidIdentifier(t){return sl.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===zi}static keyField(){return new ut([zi])}static fromServerFormat(t){const e=[];let n="",i=0;const o=()=>{if(n.length===0)throw new x(V.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let u=!1;for(;i<t.length;){const h=t[i];if(h==="\\"){if(i+1===t.length)throw new x(V.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const f=t[i+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new x(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=f,i+=2}else h==="`"?(u=!u,i++):h!=="."||u?(n+=h,i++):(o(),i++)}if(o(),u)throw new x(V.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ut(e)}static emptyPath(){return new ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(Y.fromString(t))}static fromName(t){return new M(Y.fromString(t).popFirst(5))}static empty(){return new M(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Y.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Y.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new Y(t.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je=-1;function il(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=O.fromTimestamp(n===1e9?new et(e+1,0):new et(e,n));return new $t(i,M.empty(),t)}function ol(r){return new $t(r.readTime,r.key,Je)}class $t{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new $t(O.min(),M.empty(),Je)}static max(){return new $t(O.max(),M.empty(),Je)}}function al(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(r.documentKey,t.documentKey),e!==0?e:U(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ul="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ll{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Re(r){if(r.code!==V.FAILED_PRECONDITION||r.message!==ul)throw r;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&L(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new R((n,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(n,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(n,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof R?e:R.resolve(e)}catch(e){return R.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):R.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):R.reject(e)}static resolve(t){return new R((e,n)=>{e(t)})}static reject(t){return new R((e,n)=>{n(t)})}static waitFor(t){return new R((e,n)=>{let i=0,o=0,u=!1;t.forEach(h=>{++i,h.next(()=>{++o,u&&o===i&&e()},f=>n(f))}),u=!0,o===i&&e()})}static or(t){let e=R.resolve(!1);for(const n of t)e=e.next(i=>i?R.resolve(i):n());return e}static forEach(t,e){const n=[];return t.forEach((i,o)=>{n.push(e.call(this,i,o))}),this.waitFor(n)}static mapArray(t,e){return new R((n,i)=>{const o=t.length,u=new Array(o);let h=0;for(let f=0;f<o;f++){const d=f;e(t[d]).next(_=>{u[d]=_,++h,h===o&&n(u)},_=>i(_))}})}static doWhile(t,e){return new R((n,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):n()};o()})}}function hl(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Pe(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.oe(n),this._e=n=>e.writeSequenceNumber(n))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}Zn.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs=-1;function tr(r){return r==null}function jn(r){return r===0&&1/r==-1/0}function cl(r){return typeof r=="number"&&Number.isInteger(r)&&!jn(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo="";function fl(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=Ki(t)),t=dl(r.get(e),t);return Ki(t)}function dl(r,t){let e=t;const n=r.length;for(let i=0;i<n;i++){const o=r.charAt(i);switch(o){case"\0":e+="";break;case qo:e+="";break;default:e+=o}}return e}function Ki(r){return r+qo+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function se(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function Bo(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(t,e){this.comparator=t,this.root=e||at.EMPTY}insert(t,e){return new H(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,at.BLACK,null,null))}remove(t){return new H(this.comparator,this.root.remove(t,this.comparator).copy(null,null,at.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(i===0)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new kn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new kn(this.root,t,this.comparator,!1)}getReverseIterator(){return new kn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new kn(this.root,t,this.comparator,!0)}}class kn{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?n(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class at{constructor(t,e,n,i,o){this.key=t,this.value=e,this.color=n??at.RED,this.left=i??at.EMPTY,this.right=o??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,o){return new at(t??this.key,e??this.value,n??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const o=n(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,n),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return at.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw L();const t=this.left.check();if(t!==this.right.check())throw L();return t+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw L()}get value(){throw L()}get color(){throw L()}get left(){throw L()}get right(){throw L()}copy(t,e,n,i,o){return this}insert(t,e,n){return new at(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t){this.comparator=t,this.data=new H(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Gi(this.data.getIterator())}getIteratorFrom(t){return new Gi(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof nt)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new nt(this.comparator);return e.data=t,e}}class Gi{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this.fields=t,t.sort(ut.comparator)}static empty(){return new wt([])}unionWith(t){let e=new nt(ut.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new wt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ye(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new jo("Invalid base64 string: "+o):o}}(t);return new lt(e)}static fromUint8Array(t){const e=function(i){let o="";for(let u=0;u<i.length;++u)o+=String.fromCharCode(i[u]);return o}(t);return new lt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return U(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const ml=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gt(r){if(z(!!r),typeof r=="string"){let t=0;const e=ml.exec(r);if(z(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:J(r.seconds),nanos:J(r.nanos)}}function J(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Qt(r){return typeof r=="string"?lt.fromBase64String(r):lt.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo="server_timestamp",Ko="__type__",$o="__previous_value__",Go="__local_write_time__";function ss(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[Ko])===null||e===void 0?void 0:e.stringValue)===zo}function er(r){const t=r.mapValue.fields[$o];return ss(t)?er(t):t}function Ze(r){const t=Gt(r.mapValue.fields[Go].timestampValue);return new et(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(t,e,n,i,o,u,h,f,d){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=h,this.longPollingOptions=f,this.useFetchStreams=d}}const zn="(default)";class tn{constructor(t,e){this.projectId=t,this.database=e||zn}static empty(){return new tn("","")}get isDefaultDatabase(){return this.database===zn}isEqual(t){return t instanceof tn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo="__type__",pl="__max__",Nn={mapValue:{}},Wo="__vector__",Kn="value";function Wt(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?ss(r)?4:yl(r)?9007199254740991:_l(r)?10:11:L()}function St(r,t){if(r===t)return!0;const e=Wt(r);if(e!==Wt(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return Ze(r).isEqual(Ze(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const u=Gt(i.timestampValue),h=Gt(o.timestampValue);return u.seconds===h.seconds&&u.nanos===h.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(i,o){return Qt(i.bytesValue).isEqual(Qt(o.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(i,o){return J(i.geoPointValue.latitude)===J(o.geoPointValue.latitude)&&J(i.geoPointValue.longitude)===J(o.geoPointValue.longitude)}(r,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return J(i.integerValue)===J(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const u=J(i.doubleValue),h=J(o.doubleValue);return u===h?jn(u)===jn(h):isNaN(u)&&isNaN(h)}return!1}(r,t);case 9:return ye(r.arrayValue.values||[],t.arrayValue.values||[],St);case 10:case 11:return function(i,o){const u=i.mapValue.fields||{},h=o.mapValue.fields||{};if($i(u)!==$i(h))return!1;for(const f in u)if(u.hasOwnProperty(f)&&(h[f]===void 0||!St(u[f],h[f])))return!1;return!0}(r,t);default:return L()}}function en(r,t){return(r.values||[]).find(e=>St(e,t))!==void 0}function Te(r,t){if(r===t)return 0;const e=Wt(r),n=Wt(t);if(e!==n)return U(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return U(r.booleanValue,t.booleanValue);case 2:return function(o,u){const h=J(o.integerValue||o.doubleValue),f=J(u.integerValue||u.doubleValue);return h<f?-1:h>f?1:h===f?0:isNaN(h)?isNaN(f)?0:-1:1}(r,t);case 3:return Qi(r.timestampValue,t.timestampValue);case 4:return Qi(Ze(r),Ze(t));case 5:return Br(r.stringValue,t.stringValue);case 6:return function(o,u){const h=Qt(o),f=Qt(u);return h.compareTo(f)}(r.bytesValue,t.bytesValue);case 7:return function(o,u){const h=o.split("/"),f=u.split("/");for(let d=0;d<h.length&&d<f.length;d++){const _=U(h[d],f[d]);if(_!==0)return _}return U(h.length,f.length)}(r.referenceValue,t.referenceValue);case 8:return function(o,u){const h=U(J(o.latitude),J(u.latitude));return h!==0?h:U(J(o.longitude),J(u.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return Wi(r.arrayValue,t.arrayValue);case 10:return function(o,u){var h,f,d,_;const A=o.fields||{},P=u.fields||{},S=(h=A[Kn])===null||h===void 0?void 0:h.arrayValue,k=(f=P[Kn])===null||f===void 0?void 0:f.arrayValue,N=U(((d=S==null?void 0:S.values)===null||d===void 0?void 0:d.length)||0,((_=k==null?void 0:k.values)===null||_===void 0?void 0:_.length)||0);return N!==0?N:Wi(S,k)}(r.mapValue,t.mapValue);case 11:return function(o,u){if(o===Nn.mapValue&&u===Nn.mapValue)return 0;if(o===Nn.mapValue)return 1;if(u===Nn.mapValue)return-1;const h=o.fields||{},f=Object.keys(h),d=u.fields||{},_=Object.keys(d);f.sort(),_.sort();for(let A=0;A<f.length&&A<_.length;++A){const P=Br(f[A],_[A]);if(P!==0)return P;const S=Te(h[f[A]],d[_[A]]);if(S!==0)return S}return U(f.length,_.length)}(r.mapValue,t.mapValue);default:throw L()}}function Qi(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return U(r,t);const e=Gt(r),n=Gt(t),i=U(e.seconds,n.seconds);return i!==0?i:U(e.nanos,n.nanos)}function Wi(r,t){const e=r.values||[],n=t.values||[];for(let i=0;i<e.length&&i<n.length;++i){const o=Te(e[i],n[i]);if(o)return o}return U(e.length,n.length)}function Ee(r){return jr(r)}function jr(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const n=Gt(e);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return Qt(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return M.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let n="[",i=!0;for(const o of e.values||[])i?i=!1:n+=",",n+=jr(o);return n+"]"}(r.arrayValue):"mapValue"in r?function(e){const n=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const u of n)o?o=!1:i+=",",i+=`${u}:${jr(e.fields[u])}`;return i+"}"}(r.mapValue):L()}function On(r){switch(Wt(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=er(r);return t?16+On(t):16;case 5:return 2*r.stringValue.length;case 6:return Qt(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((i,o)=>i+On(o),0)}(r.arrayValue);case 10:case 11:return function(n){let i=0;return se(n.fields,(o,u)=>{i+=o.length+On(u)}),i}(r.mapValue);default:throw L()}}function zr(r){return!!r&&"integerValue"in r}function is(r){return!!r&&"arrayValue"in r}function Hi(r){return!!r&&"nullValue"in r}function Xi(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Fn(r){return!!r&&"mapValue"in r}function _l(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[Qo])===null||e===void 0?void 0:e.stringValue)===Wo}function We(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return se(r.mapValue.fields,(e,n)=>t.mapValue.fields[e]=We(n)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=We(r.arrayValue.values[e]);return t}return Object.assign({},r)}function yl(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===pl}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t){this.value=t}static empty(){return new vt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Fn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=We(e)}setAll(t){let e=ut.emptyPath(),n={},i=[];t.forEach((u,h)=>{if(!e.isImmediateParentOf(h)){const f=this.getFieldsMap(e);this.applyChanges(f,n,i),n={},i=[],e=h.popLast()}u?n[h.lastSegment()]=We(u):i.push(h.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,n,i)}delete(t){const e=this.field(t.popLast());Fn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return St(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];Fn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){se(e,(i,o)=>t[i]=o);for(const i of n)delete t[i]}clone(){return new vt(We(this.value))}}function Ho(r){const t=[];return se(r.fields,(e,n)=>{const i=new ut([e]);if(Fn(n)){const o=Ho(n.mapValue).fields;if(o.length===0)t.push(i);else for(const u of o)t.push(i.child(u))}else t.push(i)}),new wt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t,e,n,i,o,u,h){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=o,this.data=u,this.documentState=h}static newInvalidDocument(t){return new pt(t,0,O.min(),O.min(),O.min(),vt.empty(),0)}static newFoundDocument(t,e,n,i){return new pt(t,1,e,O.min(),n,i,0)}static newNoDocument(t,e){return new pt(t,2,e,O.min(),O.min(),vt.empty(),0)}static newUnknownDocument(t,e){return new pt(t,3,e,O.min(),O.min(),vt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(O.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=vt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=O.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof pt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(t,e){this.position=t,this.inclusive=e}}function Yi(r,t,e){let n=0;for(let i=0;i<r.position.length;i++){const o=t[i],u=r.position[i];if(o.field.isKeyField()?n=M.comparator(M.fromName(u.referenceValue),e.key):n=Te(u,e.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function Ji(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!St(r.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(t,e="asc"){this.field=t,this.dir=e}}function Tl(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{}class tt extends Xo{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new vl(t,e,n):e==="array-contains"?new wl(t,n):e==="in"?new Rl(t,n):e==="not-in"?new Pl(t,n):e==="array-contains-any"?new Vl(t,n):new tt(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new Il(t,n):new Al(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Te(e,this.value)):e!==null&&Wt(this.value)===Wt(e)&&this.matchesComparison(Te(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return L()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ct extends Xo{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}static create(t,e){return new Ct(t,e)}matches(t){return Yo(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function Yo(r){return r.op==="and"}function Jo(r){return El(r)&&Yo(r)}function El(r){for(const t of r.filters)if(t instanceof Ct)return!1;return!0}function Kr(r){if(r instanceof tt)return r.field.canonicalString()+r.op.toString()+Ee(r.value);if(Jo(r))return r.filters.map(t=>Kr(t)).join(",");{const t=r.filters.map(e=>Kr(e)).join(",");return`${r.op}(${t})`}}function Zo(r,t){return r instanceof tt?function(n,i){return i instanceof tt&&n.op===i.op&&n.field.isEqual(i.field)&&St(n.value,i.value)}(r,t):r instanceof Ct?function(n,i){return i instanceof Ct&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((o,u,h)=>o&&Zo(u,i.filters[h]),!0):!1}(r,t):void L()}function ta(r){return r instanceof tt?function(e){return`${e.field.canonicalString()} ${e.op} ${Ee(e.value)}`}(r):r instanceof Ct?function(e){return e.op.toString()+" {"+e.getFilters().map(ta).join(" ,")+"}"}(r):"Filter"}class vl extends tt{constructor(t,e,n){super(t,e,n),this.key=M.fromName(n.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class Il extends tt{constructor(t,e){super(t,"in",e),this.keys=ea("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Al extends tt{constructor(t,e){super(t,"not-in",e),this.keys=ea("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function ea(r,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(n=>M.fromName(n.referenceValue))}class wl extends tt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return is(e)&&en(e.arrayValue,this.value)}}class Rl extends tt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&en(this.value.arrayValue,e)}}class Pl extends tt{constructor(t,e){super(t,"not-in",e)}matches(t){if(en(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!en(this.value.arrayValue,e)}}class Vl extends tt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!is(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>en(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(t,e=null,n=[],i=[],o=null,u=null,h=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=o,this.startAt=u,this.endAt=h,this.le=null}}function Zi(r,t=null,e=[],n=[],i=null,o=null,u=null){return new Sl(r,t,e,n,i,o,u)}function os(r){const t=F(r);if(t.le===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>Kr(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(o){return o.field.canonicalString()+o.dir}(n)).join(","),tr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Ee(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Ee(n)).join(",")),t.le=e}return t.le}function as(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!Tl(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!Zo(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!Ji(r.startAt,t.startAt)&&Ji(r.endAt,t.endAt)}function $r(r){return M.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(t,e=null,n=[],i=[],o=null,u="F",h=null,f=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=o,this.limitType=u,this.startAt=h,this.endAt=f,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function Cl(r,t,e,n,i,o,u,h){return new nr(r,t,e,n,i,o,u,h)}function us(r){return new nr(r)}function to(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Dl(r){return r.collectionGroup!==null}function He(r){const t=F(r);if(t.he===null){t.he=[];const e=new Set;for(const o of t.explicitOrderBy)t.he.push(o),e.add(o.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let h=new nt(ut.comparator);return u.filters.forEach(f=>{f.getFlattenedFilters().forEach(d=>{d.isInequality()&&(h=h.add(d.field))})}),h})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.he.push(new Gn(o,n))}),e.has(ut.keyField().canonicalString())||t.he.push(new Gn(ut.keyField(),n))}return t.he}function Pt(r){const t=F(r);return t.Pe||(t.Pe=bl(t,He(r))),t.Pe}function bl(r,t){if(r.limitType==="F")return Zi(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Gn(i.field,o)});const e=r.endAt?new $n(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new $n(r.startAt.position,r.startAt.inclusive):null;return Zi(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function Gr(r,t,e){return new nr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function rr(r,t){return as(Pt(r),Pt(t))&&r.limitType===t.limitType}function na(r){return`${os(Pt(r))}|lt:${r.limitType}`}function de(r){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(i=>ta(i)).join(", ")}]`),tr(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(i=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(i)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Ee(i)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Ee(i)).join(",")),`Target(${n})`}(Pt(r))}; limitType=${r.limitType})`}function sr(r,t){return t.isFoundDocument()&&function(n,i){const o=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):M.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)}(r,t)&&function(n,i){for(const o of He(n))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(r,t)&&function(n,i){for(const o of n.filters)if(!o.matches(i))return!1;return!0}(r,t)&&function(n,i){return!(n.startAt&&!function(u,h,f){const d=Yi(u,h,f);return u.inclusive?d<=0:d<0}(n.startAt,He(n),i)||n.endAt&&!function(u,h,f){const d=Yi(u,h,f);return u.inclusive?d>=0:d>0}(n.endAt,He(n),i))}(r,t)}function kl(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function ra(r){return(t,e)=>{let n=!1;for(const i of He(r)){const o=Nl(i,t,e);if(o!==0)return o;n=n||i.field.isKeyField()}return 0}}function Nl(r,t,e){const n=r.field.isKeyField()?M.comparator(t.key,e.key):function(o,u,h){const f=u.data.field(o),d=h.data.field(o);return f!==null&&d!==null?Te(f,d):L()}(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return L()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[i,o]of n)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(i===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return n.length===1?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){se(this.inner,(e,n)=>{for(const[i,o]of n)t(i,o)})}isEmpty(){return Bo(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl=new H(M.comparator);function Ot(){return xl}const sa=new H(M.comparator);function Ge(...r){let t=sa;for(const e of r)t=t.insert(e.key,e);return t}function ia(r){let t=sa;return r.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function ee(){return Xe()}function oa(){return Xe()}function Xe(){return new ie(r=>r.toString(),(r,t)=>r.isEqual(t))}const Ml=new H(M.comparator),Ll=new nt(M.comparator);function q(...r){let t=Ll;for(const e of r)t=t.add(e);return t}const Ol=new nt(U);function Fl(){return Ol}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:jn(t)?"-0":t}}function aa(r){return{integerValue:""+r}}function Ul(r,t){return cl(t)?aa(t):ls(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(){this._=void 0}}function ql(r,t,e){return r instanceof nn?function(i,o){const u={fields:{[Ko]:{stringValue:zo},[Go]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&ss(o)&&(o=er(o)),o&&(u.fields[$o]=o),{mapValue:u}}(e,t):r instanceof rn?la(r,t):r instanceof sn?ha(r,t):function(i,o){const u=ua(i,o),h=eo(u)+eo(i.Ie);return zr(u)&&zr(i.Ie)?aa(h):ls(i.serializer,h)}(r,t)}function Bl(r,t,e){return r instanceof rn?la(r,t):r instanceof sn?ha(r,t):e}function ua(r,t){return r instanceof Qn?function(n){return zr(n)||function(o){return!!o&&"doubleValue"in o}(n)}(t)?t:{integerValue:0}:null}class nn extends ir{}class rn extends ir{constructor(t){super(),this.elements=t}}function la(r,t){const e=ca(t);for(const n of r.elements)e.some(i=>St(i,n))||e.push(n);return{arrayValue:{values:e}}}class sn extends ir{constructor(t){super(),this.elements=t}}function ha(r,t){let e=ca(t);for(const n of r.elements)e=e.filter(i=>!St(i,n));return{arrayValue:{values:e}}}class Qn extends ir{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function eo(r){return J(r.integerValue||r.doubleValue)}function ca(r){return is(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(t,e){this.field=t,this.transform=e}}function zl(r,t){return r.field.isEqual(t.field)&&function(n,i){return n instanceof rn&&i instanceof rn||n instanceof sn&&i instanceof sn?ye(n.elements,i.elements,St):n instanceof Qn&&i instanceof Qn?St(n.Ie,i.Ie):n instanceof nn&&i instanceof nn}(r.transform,t.transform)}class Kl{constructor(t,e){this.version=t,this.transformResults=e}}class Mt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Mt}static exists(t){return new Mt(void 0,t)}static updateTime(t){return new Mt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Un(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class or{}function fa(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new ma(r.key,Mt.none()):new un(r.key,r.data,Mt.none());{const e=r.data,n=vt.empty();let i=new nt(ut.comparator);for(let o of t.fields)if(!i.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?n.delete(o):n.set(o,u),i=i.add(o)}return new oe(r.key,n,new wt(i.toArray()),Mt.none())}}function $l(r,t,e){r instanceof un?function(i,o,u){const h=i.value.clone(),f=ro(i.fieldTransforms,o,u.transformResults);h.setAll(f),o.convertToFoundDocument(u.version,h).setHasCommittedMutations()}(r,t,e):r instanceof oe?function(i,o,u){if(!Un(i.precondition,o))return void o.convertToUnknownDocument(u.version);const h=ro(i.fieldTransforms,o,u.transformResults),f=o.data;f.setAll(da(i)),f.setAll(h),o.convertToFoundDocument(u.version,f).setHasCommittedMutations()}(r,t,e):function(i,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function Ye(r,t,e,n){return r instanceof un?function(o,u,h,f){if(!Un(o.precondition,u))return h;const d=o.value.clone(),_=so(o.fieldTransforms,f,u);return d.setAll(_),u.convertToFoundDocument(u.version,d).setHasLocalMutations(),null}(r,t,e,n):r instanceof oe?function(o,u,h,f){if(!Un(o.precondition,u))return h;const d=so(o.fieldTransforms,f,u),_=u.data;return _.setAll(da(o)),_.setAll(d),u.convertToFoundDocument(u.version,_).setHasLocalMutations(),h===null?null:h.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(A=>A.field))}(r,t,e,n):function(o,u,h){return Un(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):h}(r,t,e)}function Gl(r,t){let e=null;for(const n of r.fieldTransforms){const i=t.data.field(n.field),o=ua(n.transform,i||null);o!=null&&(e===null&&(e=vt.empty()),e.set(n.field,o))}return e||null}function no(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&ye(n,i,(o,u)=>zl(o,u))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class un extends or{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class oe extends or{constructor(t,e,n,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function da(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}}),t}function ro(r,t,e){const n=new Map;z(r.length===e.length);for(let i=0;i<e.length;i++){const o=r[i],u=o.transform,h=t.data.field(o.field);n.set(o.field,Bl(u,h,e[i]))}return n}function so(r,t,e){const n=new Map;for(const i of r){const o=i.transform,u=e.data.field(i.field);n.set(i.field,ql(o,u,t))}return n}class ma extends or{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ql extends or{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&$l(o,t,n[i])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Ye(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Ye(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=oa();return this.mutations.forEach(i=>{const o=t.get(i.key),u=o.overlayedDocument;let h=this.applyToLocalView(u,o.mutatedFields);h=e.has(i.key)?null:h;const f=fa(u,h);f!==null&&n.set(i.key,f),u.isValidDocument()||u.convertToNoDocument(O.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),q())}isEqual(t){return this.batchId===t.batchId&&ye(this.mutations,t.mutations,(e,n)=>no(e,n))&&ye(this.baseMutations,t.baseMutations,(e,n)=>no(e,n))}}class hs{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){z(t.mutations.length===n.length);let i=function(){return Ml}();const o=t.mutations;for(let u=0;u<o.length;u++)i=i.insert(o[u].key,n[u].version);return new hs(t,e,n,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z,B;function Yl(r){switch(r){case V.OK:return L();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return L()}}function ga(r){if(r===void 0)return Lt("GRPC error has no .code"),V.UNKNOWN;switch(r){case Z.OK:return V.OK;case Z.CANCELLED:return V.CANCELLED;case Z.UNKNOWN:return V.UNKNOWN;case Z.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Z.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Z.INTERNAL:return V.INTERNAL;case Z.UNAVAILABLE:return V.UNAVAILABLE;case Z.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Z.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Z.NOT_FOUND:return V.NOT_FOUND;case Z.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Z.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Z.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Z.ABORTED:return V.ABORTED;case Z.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Z.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Z.DATA_LOSS:return V.DATA_LOSS;default:return L()}}(B=Z||(Z={}))[B.OK=0]="OK",B[B.CANCELLED=1]="CANCELLED",B[B.UNKNOWN=2]="UNKNOWN",B[B.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",B[B.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",B[B.NOT_FOUND=5]="NOT_FOUND",B[B.ALREADY_EXISTS=6]="ALREADY_EXISTS",B[B.PERMISSION_DENIED=7]="PERMISSION_DENIED",B[B.UNAUTHENTICATED=16]="UNAUTHENTICATED",B[B.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",B[B.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",B[B.ABORTED=10]="ABORTED",B[B.OUT_OF_RANGE=11]="OUT_OF_RANGE",B[B.UNIMPLEMENTED=12]="UNIMPLEMENTED",B[B.INTERNAL=13]="INTERNAL",B[B.UNAVAILABLE=14]="UNAVAILABLE",B[B.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl=new zt([4294967295,4294967295],0);function io(r){const t=qr().encode(r),e=new ko;return e.update(t),new Uint8Array(e.digest())}function oo(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new zt([e,n],0),new zt([i,o],0)]}class cs{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Qe(`Invalid padding: ${e}`);if(n<0)throw new Qe(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new Qe(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new Qe(`Invalid padding when bitmap length is 0: ${e}`);this.Ee=8*t.length-e,this.de=zt.fromNumber(this.Ee)}Ae(t,e,n){let i=t.add(e.multiply(zt.fromNumber(n)));return i.compare(Jl)===1&&(i=new zt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.de).toNumber()}Re(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.Ee===0)return!1;const e=io(t),[n,i]=oo(e);for(let o=0;o<this.hashCount;o++){const u=this.Ae(n,i,o);if(!this.Re(u))return!1}return!0}static create(t,e,n){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),u=new cs(o,i,e);return n.forEach(h=>u.insert(h)),u}insert(t){if(this.Ee===0)return;const e=io(t),[n,i]=oo(e);for(let o=0;o<this.hashCount;o++){const u=this.Ae(n,i,o);this.Ve(u)}}Ve(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class Qe extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(t,e,n,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const i=new Map;return i.set(t,ln.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new ar(O.min(),i,new H(U),Ot(),q())}}class ln{constructor(t,e,n,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new ln(n,e,q(),q(),q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(t,e,n,i){this.me=t,this.removedTargetIds=e,this.key=n,this.fe=i}}class pa{constructor(t,e){this.targetId=t,this.ge=e}}class _a{constructor(t,e,n=lt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class ao{constructor(){this.pe=0,this.ye=uo(),this.we=lt.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(t){t.approximateByteSize()>0&&(this.be=!0,this.we=t)}Fe(){let t=q(),e=q(),n=q();return this.ye.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:L()}}),new ln(this.we,this.Se,t,e,n)}Me(){this.be=!1,this.ye=uo()}xe(t,e){this.be=!0,this.ye=this.ye.insert(t,e)}Oe(t){this.be=!0,this.ye=this.ye.remove(t)}Ne(){this.pe+=1}Be(){this.pe-=1,z(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class Zl{constructor(t){this.ke=t,this.qe=new Map,this.Qe=Ot(),this.$e=xn(),this.Ue=xn(),this.Ke=new H(U)}We(t){for(const e of t.me)t.fe&&t.fe.isFoundDocument()?this.Ge(e,t.fe):this.ze(e,t.key,t.fe);for(const e of t.removedTargetIds)this.ze(e,t.key,t.fe)}je(t){this.forEachTarget(t,e=>{const n=this.He(e);switch(t.state){case 0:this.Je(e)&&n.Ce(t.resumeToken);break;case 1:n.Be(),n.De||n.Me(),n.Ce(t.resumeToken);break;case 2:n.Be(),n.De||this.removeTarget(e);break;case 3:this.Je(e)&&(n.Le(),n.Ce(t.resumeToken));break;case 4:this.Je(e)&&(this.Ye(e),n.Ce(t.resumeToken));break;default:L()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.qe.forEach((n,i)=>{this.Je(i)&&e(i)})}Ze(t){const e=t.targetId,n=t.ge.count,i=this.Xe(e);if(i){const o=i.target;if($r(o))if(n===0){const u=new M(o.path);this.ze(e,u,pt.newNoDocument(u,O.min()))}else z(n===1);else{const u=this.et(e);if(u!==n){const h=this.tt(t),f=h?this.nt(h,t,u):1;if(f!==0){this.Ye(e);const d=f===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,d)}}}}}tt(t){const e=t.ge.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:o=0}=e;let u,h;try{u=Qt(n).toUint8Array()}catch(f){if(f instanceof jo)return _e("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw f}try{h=new cs(u,i,o)}catch(f){return _e(f instanceof Qe?"BloomFilter error: ":"Applying bloom filter failed: ",f),null}return h.Ee===0?null:h}nt(t,e,n){return e.ge.count===n-this.st(t,e.targetId)?0:2}st(t,e){const n=this.ke.getRemoteKeysForTarget(e);let i=0;return n.forEach(o=>{const u=this.ke.it(),h=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;t.mightContain(h)||(this.ze(e,o,null),i++)}),i}ot(t){const e=new Map;this.qe.forEach((o,u)=>{const h=this.Xe(u);if(h){if(o.current&&$r(h.target)){const f=new M(h.target.path);this._t(f).has(u)||this.ut(u,f)||this.ze(u,f,pt.newNoDocument(f,t))}o.ve&&(e.set(u,o.Fe()),o.Me())}});let n=q();this.Ue.forEach((o,u)=>{let h=!0;u.forEachWhile(f=>{const d=this.Xe(f);return!d||d.purpose==="TargetPurposeLimboResolution"||(h=!1,!1)}),h&&(n=n.add(o))}),this.Qe.forEach((o,u)=>u.setReadTime(t));const i=new ar(t,e,this.Ke,this.Qe,n);return this.Qe=Ot(),this.$e=xn(),this.Ue=xn(),this.Ke=new H(U),i}Ge(t,e){if(!this.Je(t))return;const n=this.ut(t,e.key)?2:0;this.He(t).xe(e.key,n),this.Qe=this.Qe.insert(e.key,e),this.$e=this.$e.insert(e.key,this._t(e.key).add(t)),this.Ue=this.Ue.insert(e.key,this.ct(e.key).add(t))}ze(t,e,n){if(!this.Je(t))return;const i=this.He(t);this.ut(t,e)?i.xe(e,1):i.Oe(e),this.Ue=this.Ue.insert(e,this.ct(e).delete(t)),this.Ue=this.Ue.insert(e,this.ct(e).add(t)),n&&(this.Qe=this.Qe.insert(e,n))}removeTarget(t){this.qe.delete(t)}et(t){const e=this.He(t).Fe();return this.ke.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ne(t){this.He(t).Ne()}He(t){let e=this.qe.get(t);return e||(e=new ao,this.qe.set(t,e)),e}ct(t){let e=this.Ue.get(t);return e||(e=new nt(U),this.Ue=this.Ue.insert(t,e)),e}_t(t){let e=this.$e.get(t);return e||(e=new nt(U),this.$e=this.$e.insert(t,e)),e}Je(t){const e=this.Xe(t)!==null;return e||D("WatchChangeAggregator","Detected inactive target",t),e}Xe(t){const e=this.qe.get(t);return e&&e.De?null:this.ke.lt(t)}Ye(t){this.qe.set(t,new ao),this.ke.getRemoteKeysForTarget(t).forEach(e=>{this.ze(t,e,null)})}ut(t,e){return this.ke.getRemoteKeysForTarget(t).has(e)}}function xn(){return new H(M.comparator)}function uo(){return new H(M.comparator)}const th={asc:"ASCENDING",desc:"DESCENDING"},eh={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},nh={and:"AND",or:"OR"};class rh{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Qr(r,t){return r.useProto3Json||tr(t)?t:{value:t}}function Wn(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ya(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function sh(r,t){return Wn(r,t.toTimestamp())}function Vt(r){return z(!!r),O.fromTimestamp(function(e){const n=Gt(e);return new et(n.seconds,n.nanos)}(r))}function fs(r,t){return Wr(r,t).canonicalString()}function Wr(r,t){const e=function(i){return new Y(["projects",i.projectId,"databases",i.database])}(r).child("documents");return t===void 0?e:e.child(t)}function Ta(r){const t=Y.fromString(r);return z(wa(t)),t}function Hr(r,t){return fs(r.databaseId,t.path)}function Mr(r,t){const e=Ta(t);if(e.get(1)!==r.databaseId.projectId)throw new x(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new x(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new M(va(e))}function Ea(r,t){return fs(r.databaseId,t)}function ih(r){const t=Ta(r);return t.length===4?Y.emptyPath():va(t)}function Xr(r){return new Y(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function va(r){return z(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function lo(r,t,e){return{name:Hr(r,t),fields:e.value.mapValue.fields}}function oh(r,t){let e;if("targetChange"in t){t.targetChange;const n=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:L()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(d,_){return d.useProto3Json?(z(_===void 0||typeof _=="string"),lt.fromBase64String(_||"")):(z(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array),lt.fromUint8Array(_||new Uint8Array))}(r,t.targetChange.resumeToken),u=t.targetChange.cause,h=u&&function(d){const _=d.code===void 0?V.UNKNOWN:ga(d.code);return new x(_,d.message||"")}(u);e=new _a(n,i,o,h||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const i=Mr(r,n.document.name),o=Vt(n.document.updateTime),u=n.document.createTime?Vt(n.document.createTime):O.min(),h=new vt({mapValue:{fields:n.document.fields}}),f=pt.newFoundDocument(i,o,u,h),d=n.targetIds||[],_=n.removedTargetIds||[];e=new qn(d,_,f.key,f)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const i=Mr(r,n.document),o=n.readTime?Vt(n.readTime):O.min(),u=pt.newNoDocument(i,o),h=n.removedTargetIds||[];e=new qn([],h,u.key,u)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const i=Mr(r,n.document),o=n.removedTargetIds||[];e=new qn([],o,i,null)}else{if(!("filter"in t))return L();{t.filter;const n=t.filter;n.targetId;const{count:i=0,unchangedNames:o}=n,u=new Xl(i,o),h=n.targetId;e=new pa(h,u)}}return e}function ah(r,t){let e;if(t instanceof un)e={update:lo(r,t.key,t.value)};else if(t instanceof ma)e={delete:Hr(r,t.key)};else if(t instanceof oe)e={update:lo(r,t.key,t.data),updateMask:ph(t.fieldMask)};else{if(!(t instanceof Ql))return L();e={verify:Hr(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(o,u){const h=u.transform;if(h instanceof nn)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(h instanceof rn)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:h.elements}};if(h instanceof sn)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:h.elements}};if(h instanceof Qn)return{fieldPath:u.field.canonicalString(),increment:h.Ie};throw L()}(0,n))),t.precondition.isNone||(e.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:sh(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:L()}(r,t.precondition)),e}function uh(r,t){return r&&r.length>0?(z(t!==void 0),r.map(e=>function(i,o){let u=i.updateTime?Vt(i.updateTime):Vt(o);return u.isEqual(O.min())&&(u=Vt(o)),new Kl(u,i.transformResults||[])}(e,t))):[]}function lh(r,t){return{documents:[Ea(r,t.path)]}}function hh(r,t){const e={structuredQuery:{}},n=t.path;let i;t.collectionGroup!==null?(i=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=Ea(r,i);const o=function(d){if(d.length!==0)return Aa(Ct.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const u=function(d){if(d.length!==0)return d.map(_=>function(P){return{field:me(P.field),direction:dh(P.dir)}}(_))}(t.orderBy);u&&(e.structuredQuery.orderBy=u);const h=Qr(r,t.limit);return h!==null&&(e.structuredQuery.limit=h),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{ht:e,parent:i}}function ch(r){let t=ih(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let i=null;if(n>0){z(n===1);const _=e.from[0];_.allDescendants?i=_.collectionId:t=t.child(_.collectionId)}let o=[];e.where&&(o=function(A){const P=Ia(A);return P instanceof Ct&&Jo(P)?P.getFilters():[P]}(e.where));let u=[];e.orderBy&&(u=function(A){return A.map(P=>function(k){return new Gn(ge(k.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(P))}(e.orderBy));let h=null;e.limit&&(h=function(A){let P;return P=typeof A=="object"?A.value:A,tr(P)?null:P}(e.limit));let f=null;e.startAt&&(f=function(A){const P=!!A.before,S=A.values||[];return new $n(S,P)}(e.startAt));let d=null;return e.endAt&&(d=function(A){const P=!A.before,S=A.values||[];return new $n(S,P)}(e.endAt)),Cl(t,i,u,o,h,"F",f,d)}function fh(r,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Ia(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=ge(e.unaryFilter.field);return tt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=ge(e.unaryFilter.field);return tt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=ge(e.unaryFilter.field);return tt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=ge(e.unaryFilter.field);return tt.create(u,"!=",{nullValue:"NULL_VALUE"});default:return L()}}(r):r.fieldFilter!==void 0?function(e){return tt.create(ge(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return L()}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return Ct.create(e.compositeFilter.filters.map(n=>Ia(n)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return L()}}(e.compositeFilter.op))}(r):L()}function dh(r){return th[r]}function mh(r){return eh[r]}function gh(r){return nh[r]}function me(r){return{fieldPath:r.canonicalString()}}function ge(r){return ut.fromServerFormat(r.fieldPath)}function Aa(r){return r instanceof tt?function(e){if(e.op==="=="){if(Xi(e.value))return{unaryFilter:{field:me(e.field),op:"IS_NAN"}};if(Hi(e.value))return{unaryFilter:{field:me(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Xi(e.value))return{unaryFilter:{field:me(e.field),op:"IS_NOT_NAN"}};if(Hi(e.value))return{unaryFilter:{field:me(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:me(e.field),op:mh(e.op),value:e.value}}}(r):r instanceof Ct?function(e){const n=e.getFilters().map(i=>Aa(i));return n.length===1?n[0]:{compositeFilter:{op:gh(e.op),filters:n}}}(r):L()}function ph(r){const t=[];return r.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function wa(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(t,e,n,i,o=O.min(),u=O.min(),h=lt.EMPTY_BYTE_STRING,f=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=h,this.expectedCount=f}withSequenceNumber(t){return new jt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new jt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new jt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new jt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(t){this.Tt=t}}function yh(r){const t=ch({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Gr(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(){this.Tn=new Eh}addToCollectionParentIndex(t,e){return this.Tn.add(e),R.resolve()}getCollectionParents(t,e){return R.resolve(this.Tn.getEntries(e))}addFieldIndex(t,e){return R.resolve()}deleteFieldIndex(t,e){return R.resolve()}deleteAllFieldIndexes(t){return R.resolve()}createTargetIndexes(t,e){return R.resolve()}getDocumentsMatchingTarget(t,e){return R.resolve(null)}getIndexType(t,e){return R.resolve(0)}getFieldIndexes(t,e){return R.resolve([])}getNextCollectionGroupToUpdate(t){return R.resolve(null)}getMinOffset(t,e){return R.resolve($t.min())}getMinOffsetFromCollectionGroup(t,e){return R.resolve($t.min())}updateCollectionGroup(t,e,n){return R.resolve()}updateIndexEntries(t,e){return R.resolve()}}class Eh{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new nt(Y.comparator),o=!i.has(n);return this.index[e]=i.add(n),o}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new nt(Y.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Ra=41943040;class Tt{static withCacheSize(t){return new Tt(t,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tt.DEFAULT_COLLECTION_PERCENTILE=10,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Tt.DEFAULT=new Tt(Ra,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Tt.DISABLED=new Tt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(t){this.$n=t}next(){return this.$n+=2,this.$n}static Un(){return new ve(0)}static Kn(){return new ve(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co="LruGarbageCollector",vh=1048576;function fo([r,t],[e,n]){const i=U(r,e);return i===0?U(t,n):i}class Ih{constructor(t){this.Hn=t,this.buffer=new nt(fo),this.Jn=0}Yn(){return++this.Jn}Zn(t){const e=[t,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();fo(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Ah{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(t){D(co,`Garbage collection scheduled in ${t}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Pe(e)?D(co,"Ignoring IndexedDB error during garbage collection: ",e):await Re(e)}await this.er(3e5)})}}class wh{constructor(t,e){this.tr=t,this.params=e}calculateTargetCount(t,e){return this.tr.nr(t).next(n=>Math.floor(e/100*n))}nthSequenceNumber(t,e){if(e===0)return R.resolve(Zn.ae);const n=new Ih(e);return this.tr.forEachTarget(t,i=>n.Zn(i.sequenceNumber)).next(()=>this.tr.rr(t,i=>n.Zn(i))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.tr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.tr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(D("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(ho)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(D("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ho):this.ir(t,e))}getCacheSize(t){return this.tr.getCacheSize(t)}ir(t,e){let n,i,o,u,h,f,d;const _=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(A=>(A>this.params.maximumSequenceNumbersToCollect?(D("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),i=this.params.maximumSequenceNumbersToCollect):i=A,u=Date.now(),this.nthSequenceNumber(t,i))).next(A=>(n=A,h=Date.now(),this.removeTargets(t,n,e))).next(A=>(o=A,f=Date.now(),this.removeOrphanedDocuments(t,n))).next(A=>(d=Date.now(),fe()<=xt.DEBUG&&D("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-_}ms
	Determined least recently used ${i} in `+(h-u)+`ms
	Removed ${o} targets in `+(f-h)+`ms
	Removed ${A} documents in `+(d-f)+`ms
Total Duration: ${d-_}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:A})))}}function Rh(r,t){return new wh(r,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(){this.changes=new ie(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,pt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?R.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(n=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(n!==null&&Ye(n.mutation,i,wt.empty(),et.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,q()).next(()=>n))}getLocalViewOfDocuments(t,e,n=q()){const i=ee();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,n).next(o=>{let u=Ge();return o.forEach((h,f)=>{u=u.insert(h,f.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const n=ee();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,q()))}populateOverlays(t,e,n){const i=[];return n.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((u,h)=>{e.set(u,h)})})}computeViews(t,e,n,i){let o=Ot();const u=Xe(),h=function(){return Xe()}();return e.forEach((f,d)=>{const _=n.get(d.key);i.has(d.key)&&(_===void 0||_.mutation instanceof oe)?o=o.insert(d.key,d):_!==void 0?(u.set(d.key,_.mutation.getFieldMask()),Ye(_.mutation,d,_.mutation.getFieldMask(),et.now())):u.set(d.key,wt.empty())}),this.recalculateAndSaveOverlays(t,o).next(f=>(f.forEach((d,_)=>u.set(d,_)),e.forEach((d,_)=>{var A;return h.set(d,new Vh(_,(A=u.get(d))!==null&&A!==void 0?A:null))}),h))}recalculateAndSaveOverlays(t,e){const n=Xe();let i=new H((u,h)=>u-h),o=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const h of u)h.keys().forEach(f=>{const d=e.get(f);if(d===null)return;let _=n.get(f)||wt.empty();_=h.applyToLocalView(d,_),n.set(f,_);const A=(i.get(h.batchId)||q()).add(f);i=i.insert(h.batchId,A)})}).next(()=>{const u=[],h=i.getReverseIterator();for(;h.hasNext();){const f=h.getNext(),d=f.key,_=f.value,A=oa();_.forEach(P=>{if(!o.has(P)){const S=fa(e.get(P),n.get(P));S!==null&&A.set(P,S),o=o.add(P)}}),u.push(this.documentOverlayCache.saveOverlays(t,d,A))}return R.waitFor(u)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,i){return function(u){return M.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Dl(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,i):this.getDocumentsMatchingCollectionQuery(t,e,n,i)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next(o=>{const u=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-o.size):R.resolve(ee());let h=Je,f=o;return u.next(d=>R.forEach(d,(_,A)=>(h<A.largestBatchId&&(h=A.largestBatchId),o.get(_)?R.resolve():this.remoteDocumentCache.getEntry(t,_).next(P=>{f=f.insert(_,P)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,f,d,q())).next(_=>({batchId:h,changes:ia(_)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next(n=>{let i=Ge();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,n,i){const o=e.collectionGroup;let u=Ge();return this.indexManager.getCollectionParents(t,o).next(h=>R.forEach(h,f=>{const d=function(A,P){return new nr(P,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)}(e,f.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,n,i).next(_=>{_.forEach((A,P)=>{u=u.insert(A,P)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,n,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,o,i))).next(u=>{o.forEach((f,d)=>{const _=d.getKey();u.get(_)===null&&(u=u.insert(_,pt.newInvalidDocument(_)))});let h=Ge();return u.forEach((f,d)=>{const _=o.get(f);_!==void 0&&Ye(_.mutation,d,wt.empty(),et.now()),sr(e,d)&&(h=h.insert(f,d))}),h})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(t){this.serializer=t,this.dr=new Map,this.Ar=new Map}getBundleMetadata(t,e){return R.resolve(this.dr.get(e))}saveBundleMetadata(t,e){return this.dr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:Vt(i.createTime)}}(e)),R.resolve()}getNamedQuery(t,e){return R.resolve(this.Ar.get(e))}saveNamedQuery(t,e){return this.Ar.set(e.name,function(i){return{name:i.name,query:yh(i.bundledQuery),readTime:Vt(i.readTime)}}(e)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(){this.overlays=new H(M.comparator),this.Rr=new Map}getOverlay(t,e){return R.resolve(this.overlays.get(e))}getOverlays(t,e){const n=ee();return R.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&n.set(i,o)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((i,o)=>{this.Et(t,e,o)}),R.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.Rr.get(n);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Rr.delete(n)),R.resolve()}getOverlaysForCollection(t,e,n){const i=ee(),o=e.length+1,u=new M(e.child("")),h=this.overlays.getIteratorFrom(u);for(;h.hasNext();){const f=h.getNext().value,d=f.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&f.largestBatchId>n&&i.set(f.getKey(),f)}return R.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let o=new H((d,_)=>d-_);const u=this.overlays.getIterator();for(;u.hasNext();){const d=u.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>n){let _=o.get(d.largestBatchId);_===null&&(_=ee(),o=o.insert(d.largestBatchId,_)),_.set(d.getKey(),d)}}const h=ee(),f=o.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((d,_)=>h.set(d,_)),!(h.size()>=i)););return R.resolve(h)}Et(t,e,n){const i=this.overlays.get(n.key);if(i!==null){const u=this.Rr.get(i.largestBatchId).delete(n.key);this.Rr.set(i.largestBatchId,u)}this.overlays=this.overlays.insert(n.key,new Hl(e,n));let o=this.Rr.get(e);o===void 0&&(o=q(),this.Rr.set(e,o)),this.Rr.set(e,o.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(){this.sessionToken=lt.EMPTY_BYTE_STRING}getSessionToken(t){return R.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,R.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(){this.Vr=new nt(st.mr),this.gr=new nt(st.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(t,e){const n=new st(t,e);this.Vr=this.Vr.add(n),this.gr=this.gr.add(n)}yr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.wr(new st(t,e))}Sr(t,e){t.forEach(n=>this.removeReference(n,e))}br(t){const e=new M(new Y([])),n=new st(e,t),i=new st(e,t+1),o=[];return this.gr.forEachInRange([n,i],u=>{this.wr(u),o.push(u.key)}),o}Dr(){this.Vr.forEach(t=>this.wr(t))}wr(t){this.Vr=this.Vr.delete(t),this.gr=this.gr.delete(t)}vr(t){const e=new M(new Y([])),n=new st(e,t),i=new st(e,t+1);let o=q();return this.gr.forEachInRange([n,i],u=>{o=o.add(u.key)}),o}containsKey(t){const e=new st(t,0),n=this.Vr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class st{constructor(t,e){this.key=t,this.Cr=e}static mr(t,e){return M.comparator(t.key,e.key)||U(t.Cr,e.Cr)}static pr(t,e){return U(t.Cr,e.Cr)||M.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Fr=1,this.Mr=new nt(st.mr)}checkEmpty(t){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,i){const o=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new Wl(o,e,n,i);this.mutationQueue.push(u);for(const h of i)this.Mr=this.Mr.add(new st(h.key,o)),this.indexManager.addToCollectionParentIndex(t,h.key.path.popLast());return R.resolve(u)}lookupMutationBatch(t,e){return R.resolve(this.Or(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.Nr(n),o=i<0?0:i;return R.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?rs:this.Fr-1)}getAllMutationBatches(t){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new st(e,0),i=new st(e,Number.POSITIVE_INFINITY),o=[];return this.Mr.forEachInRange([n,i],u=>{const h=this.Or(u.Cr);o.push(h)}),R.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new nt(U);return e.forEach(i=>{const o=new st(i,0),u=new st(i,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([o,u],h=>{n=n.add(h.Cr)})}),R.resolve(this.Br(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let o=n;M.isDocumentKey(o)||(o=o.child(""));const u=new st(new M(o),0);let h=new nt(U);return this.Mr.forEachWhile(f=>{const d=f.key.path;return!!n.isPrefixOf(d)&&(d.length===i&&(h=h.add(f.Cr)),!0)},u),R.resolve(this.Br(h))}Br(t){const e=[];return t.forEach(n=>{const i=this.Or(n);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){z(this.Lr(e.batchId,"removed")===0),this.mutationQueue.shift();let n=this.Mr;return R.forEach(e.mutations,i=>{const o=new st(i.key,e.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Mr=n})}qn(t){}containsKey(t,e){const n=new st(e,0),i=this.Mr.firstAfterOrEqual(n);return R.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,R.resolve()}Lr(t,e){return this.Nr(t)}Nr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Or(t){const e=this.Nr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(t){this.kr=t,this.docs=function(){return new H(M.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),o=i?i.size:0,u=this.kr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return R.resolve(n?n.document.mutableCopy():pt.newInvalidDocument(e))}getEntries(t,e){let n=Ot();return e.forEach(i=>{const o=this.docs.get(i);n=n.insert(i,o?o.document.mutableCopy():pt.newInvalidDocument(i))}),R.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let o=Ot();const u=e.path,h=new M(u.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(h);for(;f.hasNext();){const{key:d,value:{document:_}}=f.getNext();if(!u.isPrefixOf(d.path))break;d.path.length>u.length+1||al(ol(_),n)<=0||(i.has(_.key)||sr(e,_))&&(o=o.insert(_.key,_.mutableCopy()))}return R.resolve(o)}getAllFromCollectionGroup(t,e,n,i){L()}qr(t,e){return R.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new xh(this)}getSize(t){return R.resolve(this.size)}}class xh extends Ph{constructor(t){super(),this.Ir=t}applyChanges(t){const e=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?e.push(this.Ir.addEntry(t,i)):this.Ir.removeEntry(n)}),R.waitFor(e)}getFromCache(t,e){return this.Ir.getEntry(t,e)}getAllFromCache(t,e){return this.Ir.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(t){this.persistence=t,this.Qr=new ie(e=>os(e),as),this.lastRemoteSnapshotVersion=O.min(),this.highestTargetId=0,this.$r=0,this.Ur=new ds,this.targetCount=0,this.Kr=ve.Un()}forEachTarget(t,e){return this.Qr.forEach((n,i)=>e(i)),R.resolve()}getLastRemoteSnapshotVersion(t){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return R.resolve(this.$r)}allocateTargetId(t){return this.highestTargetId=this.Kr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.$r&&(this.$r=e),R.resolve()}zn(t){this.Qr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Kr=new ve(e),this.highestTargetId=e),t.sequenceNumber>this.$r&&(this.$r=t.sequenceNumber)}addTargetData(t,e){return this.zn(e),this.targetCount+=1,R.resolve()}updateTargetData(t,e){return this.zn(e),R.resolve()}removeTargetData(t,e){return this.Qr.delete(e.target),this.Ur.br(e.targetId),this.targetCount-=1,R.resolve()}removeTargets(t,e,n){let i=0;const o=[];return this.Qr.forEach((u,h)=>{h.sequenceNumber<=e&&n.get(h.targetId)===null&&(this.Qr.delete(u),o.push(this.removeMatchingKeysForTargetId(t,h.targetId)),i++)}),R.waitFor(o).next(()=>i)}getTargetCount(t){return R.resolve(this.targetCount)}getTargetData(t,e){const n=this.Qr.get(e)||null;return R.resolve(n)}addMatchingKeys(t,e,n){return this.Ur.yr(e,n),R.resolve()}removeMatchingKeys(t,e,n){this.Ur.Sr(e,n);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(u=>{o.push(i.markPotentiallyOrphaned(t,u))}),R.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Ur.br(e),R.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Ur.vr(e);return R.resolve(n)}containsKey(t,e){return R.resolve(this.Ur.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(t,e){this.Wr={},this.overlays={},this.Gr=new Zn(0),this.zr=!1,this.zr=!0,this.jr=new bh,this.referenceDelegate=t(this),this.Hr=new Mh(this),this.indexManager=new Th,this.remoteDocumentCache=function(i){return new Nh(i)}(n=>this.referenceDelegate.Jr(n)),this.serializer=new _h(e),this.Yr=new Ch(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Dh,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Wr[t.toKey()];return n||(n=new kh(e,this.referenceDelegate),this.Wr[t.toKey()]=n),n}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(t,e,n){D("MemoryPersistence","Starting transaction:",t);const i=new Lh(this.Gr.next());return this.referenceDelegate.Zr(),n(i).next(o=>this.referenceDelegate.Xr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}ei(t,e){return R.or(Object.values(this.Wr).map(n=>()=>n.containsKey(t,e)))}}class Lh extends ll{constructor(t){super(),this.currentSequenceNumber=t}}class ms{constructor(t){this.persistence=t,this.ti=new ds,this.ni=null}static ri(t){return new ms(t)}get ii(){if(this.ni)return this.ni;throw L()}addReference(t,e,n){return this.ti.addReference(n,e),this.ii.delete(n.toString()),R.resolve()}removeReference(t,e,n){return this.ti.removeReference(n,e),this.ii.add(n.toString()),R.resolve()}markPotentiallyOrphaned(t,e){return this.ii.add(e.toString()),R.resolve()}removeTarget(t,e){this.ti.br(e.targetId).forEach(i=>this.ii.add(i.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.ii.add(o.toString()))}).next(()=>n.removeTargetData(t,e))}Zr(){this.ni=new Set}Xr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.ii,n=>{const i=M.fromPath(n);return this.si(t,i).next(o=>{o||e.removeEntry(i,O.min())})}).next(()=>(this.ni=null,e.apply(t)))}updateLimboDocument(t,e){return this.si(t,e).next(n=>{n?this.ii.delete(e.toString()):this.ii.add(e.toString())})}Jr(t){return 0}si(t,e){return R.or([()=>R.resolve(this.ti.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.ei(t,e)])}}class Hn{constructor(t,e){this.persistence=t,this.oi=new ie(n=>fl(n.path),(n,i)=>n.isEqual(i)),this.garbageCollector=Rh(this,e)}static ri(t,e){return new Hn(t,e)}Zr(){}Xr(t){return R.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}nr(t){const e=this.sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(n=>e.next(i=>n+i))}sr(t){let e=0;return this.rr(t,n=>{e++}).next(()=>e)}rr(t,e){return R.forEach(this.oi,(n,i)=>this.ar(t,n,i).next(o=>o?R.resolve():e(i)))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.qr(t,u=>this.ar(t,u,e).next(h=>{h||(n++,o.removeEntry(u,O.min()))})).next(()=>o.apply(t)).next(()=>n)}markPotentiallyOrphaned(t,e){return this.oi.set(e,t.currentSequenceNumber),R.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.oi.set(n,t.currentSequenceNumber),R.resolve()}removeReference(t,e,n){return this.oi.set(n,t.currentSequenceNumber),R.resolve()}updateLimboDocument(t,e){return this.oi.set(e,t.currentSequenceNumber),R.resolve()}Jr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=On(t.data.value)),e}ar(t,e,n){return R.or([()=>this.persistence.ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.oi.get(e);return R.resolve(i!==void 0&&i>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Hi=n,this.Ji=i}static Yi(t,e){let n=q(),i=q();for(const o of e.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new gs(t,e.fromCache,n,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return Wu()?8:hl(Hu())>0?6:4}()}initialize(t,e){this.ns=t,this.indexManager=e,this.Zi=!0}getDocumentsMatchingQuery(t,e,n,i){const o={result:null};return this.rs(t,e).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.ss(t,e,i,n).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new Oh;return this._s(t,e,u).next(h=>{if(o.result=h,this.Xi)return this.us(t,e,u,h.size)})}).next(()=>o.result)}us(t,e,n,i){return n.documentReadCount<this.es?(fe()<=xt.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",de(e),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),R.resolve()):(fe()<=xt.DEBUG&&D("QueryEngine","Query:",de(e),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.ts*i?(fe()<=xt.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",de(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Pt(e))):R.resolve())}rs(t,e){if(to(e))return R.resolve(null);let n=Pt(e);return this.indexManager.getIndexType(t,n).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=Gr(e,null,"F"),n=Pt(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(o=>{const u=q(...o);return this.ns.getDocuments(t,u).next(h=>this.indexManager.getMinOffset(t,n).next(f=>{const d=this.cs(e,h);return this.ls(e,d,u,f.readTime)?this.rs(t,Gr(e,null,"F")):this.hs(t,d,e,f)}))})))}ss(t,e,n,i){return to(e)||i.isEqual(O.min())?R.resolve(null):this.ns.getDocuments(t,n).next(o=>{const u=this.cs(e,o);return this.ls(e,u,n,i)?R.resolve(null):(fe()<=xt.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),de(e)),this.hs(t,u,e,il(i,Je)).next(h=>h))})}cs(t,e){let n=new nt(ra(t));return e.forEach((i,o)=>{sr(t,o)&&(n=n.add(o))}),n}ls(t,e,n,i){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}_s(t,e,n){return fe()<=xt.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",de(e)),this.ns.getDocumentsMatchingQuery(t,e,$t.min(),n)}hs(t,e,n,i){return this.ns.getDocumentsMatchingQuery(t,n,i).next(o=>(e.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps="LocalStore",Uh=3e8;class qh{constructor(t,e,n,i){this.persistence=t,this.Ps=e,this.serializer=i,this.Ts=new H(U),this.Is=new ie(o=>os(o),as),this.Es=new Map,this.ds=t.getRemoteDocumentCache(),this.Hr=t.getTargetCache(),this.Yr=t.getBundleCache(),this.As(n)}As(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Sh(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ts))}}function Bh(r,t,e,n){return new qh(r,t,e,n)}async function Va(r,t){const e=F(r);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let i;return e.mutationQueue.getAllMutationBatches(n).next(o=>(i=o,e.As(t),e.mutationQueue.getAllMutationBatches(n))).next(o=>{const u=[],h=[];let f=q();for(const d of i){u.push(d.batchId);for(const _ of d.mutations)f=f.add(_.key)}for(const d of o){h.push(d.batchId);for(const _ of d.mutations)f=f.add(_.key)}return e.localDocuments.getDocuments(n,f).next(d=>({Rs:d,removedBatchIds:u,addedBatchIds:h}))})})}function jh(r,t){const e=F(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const i=t.batch.keys(),o=e.ds.newChangeBuffer({trackRemovals:!0});return function(h,f,d,_){const A=d.batch,P=A.keys();let S=R.resolve();return P.forEach(k=>{S=S.next(()=>_.getEntry(f,k)).next(N=>{const b=d.docVersions.get(k);z(b!==null),N.version.compareTo(b)<0&&(A.applyToRemoteDocument(N,d),N.isValidDocument()&&(N.setReadTime(d.commitVersion),_.addEntry(N)))})}),S.next(()=>h.mutationQueue.removeMutationBatch(f,A))}(e,n,t,o).next(()=>o.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(h){let f=q();for(let d=0;d<h.mutationResults.length;++d)h.mutationResults[d].transformResults.length>0&&(f=f.add(h.batch.mutations[d].key));return f}(t))).next(()=>e.localDocuments.getDocuments(n,i))})}function Sa(r){const t=F(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Hr.getLastRemoteSnapshotVersion(e))}function zh(r,t){const e=F(r),n=t.snapshotVersion;let i=e.Ts;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const u=e.ds.newChangeBuffer({trackRemovals:!0});i=e.Ts;const h=[];t.targetChanges.forEach((_,A)=>{const P=i.get(A);if(!P)return;h.push(e.Hr.removeMatchingKeys(o,_.removedDocuments,A).next(()=>e.Hr.addMatchingKeys(o,_.addedDocuments,A)));let S=P.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(A)!==null?S=S.withResumeToken(lt.EMPTY_BYTE_STRING,O.min()).withLastLimboFreeSnapshotVersion(O.min()):_.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(_.resumeToken,n)),i=i.insert(A,S),function(N,b,$){return N.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=Uh?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(P,S,_)&&h.push(e.Hr.updateTargetData(o,S))});let f=Ot(),d=q();if(t.documentUpdates.forEach(_=>{t.resolvedLimboDocuments.has(_)&&h.push(e.persistence.referenceDelegate.updateLimboDocument(o,_))}),h.push(Kh(o,u,t.documentUpdates).next(_=>{f=_.Vs,d=_.fs})),!n.isEqual(O.min())){const _=e.Hr.getLastRemoteSnapshotVersion(o).next(A=>e.Hr.setTargetsMetadata(o,o.currentSequenceNumber,n));h.push(_)}return R.waitFor(h).next(()=>u.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,f,d)).next(()=>f)}).then(o=>(e.Ts=i,o))}function Kh(r,t,e){let n=q(),i=q();return e.forEach(o=>n=n.add(o)),t.getEntries(r,n).next(o=>{let u=Ot();return e.forEach((h,f)=>{const d=o.get(h);f.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(h)),f.isNoDocument()&&f.version.isEqual(O.min())?(t.removeEntry(h,f.readTime),u=u.insert(h,f)):!d.isValidDocument()||f.version.compareTo(d.version)>0||f.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(f),u=u.insert(h,f)):D(ps,"Ignoring outdated watch update for ",h,". Current version:",d.version," Watch version:",f.version)}),{Vs:u,fs:i}})}function $h(r,t){const e=F(r);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=rs),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}function Gh(r,t){const e=F(r);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return e.Hr.getTargetData(n,t).next(o=>o?(i=o,R.resolve(i)):e.Hr.allocateTargetId(n).next(u=>(i=new jt(t,u,"TargetPurposeListen",n.currentSequenceNumber),e.Hr.addTargetData(n,i).next(()=>i))))}).then(n=>{const i=e.Ts.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.Ts=e.Ts.insert(n.targetId,n),e.Is.set(t,n.targetId)),n})}async function Yr(r,t,e){const n=F(r),i=n.Ts.get(t),o=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",o,u=>n.persistence.referenceDelegate.removeTarget(u,i))}catch(u){if(!Pe(u))throw u;D(ps,`Failed to update sequence numbers for target ${t}: ${u}`)}n.Ts=n.Ts.remove(t),n.Is.delete(i.target)}function mo(r,t,e){const n=F(r);let i=O.min(),o=q();return n.persistence.runTransaction("Execute query","readwrite",u=>function(f,d,_){const A=F(f),P=A.Is.get(_);return P!==void 0?R.resolve(A.Ts.get(P)):A.Hr.getTargetData(d,_)}(n,u,Pt(t)).next(h=>{if(h)return i=h.lastLimboFreeSnapshotVersion,n.Hr.getMatchingKeysForTargetId(u,h.targetId).next(f=>{o=f})}).next(()=>n.Ps.getDocumentsMatchingQuery(u,t,e?i:O.min(),e?o:q())).next(h=>(Qh(n,kl(t),h),{documents:h,gs:o})))}function Qh(r,t,e){let n=r.Es.get(t)||O.min();e.forEach((i,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)}),r.Es.set(t,n)}class go{constructor(){this.activeTargetIds=Fl()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}bs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Wh{constructor(){this.ho=new go,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.ho.Ds(t),this.Po[t]||"not-current"}updateQueryState(t,e,n){this.Po[t]=e}removeLocalQueryTarget(t){this.ho.vs(t)}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){delete this.Po[t]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(t){return this.ho.activeTargetIds.has(t)}start(){return this.ho=new go,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{To(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const po="ConnectivityMonitor";class _o{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(t){this.Vo.push(t)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){D(po,"Network connectivity changed: AVAILABLE");for(const t of this.Vo)t(0)}Ro(){D(po,"Network connectivity changed: UNAVAILABLE");for(const t of this.Vo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mn=null;function Jr(){return Mn===null?Mn=function(){return 268435456+Math.round(2147483648*Math.random())}():Mn++,"0x"+Mn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr="RestConnection",Xh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Yh{get fo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=e+"://"+t.host,this.yo=`projects/${n}/databases/${i}`,this.wo=this.databaseId.database===zn?`project_id=${n}`:`project_id=${n}&database_id=${i}`}So(t,e,n,i,o){const u=Jr(),h=this.bo(t,e.toUriEncodedString());D(Lr,`Sending RPC '${t}' ${u}:`,h,n);const f={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(f,i,o),this.vo(t,h,f,n).then(d=>(D(Lr,`Received RPC '${t}' ${u}: `,d),d),d=>{throw _e(Lr,`RPC '${t}' ${u} failed with error: `,d,"url: ",h,"request:",n),d})}Co(t,e,n,i,o,u){return this.So(t,e,n,i,o)}Do(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+we}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((i,o)=>t[o]=i),n&&n.headers.forEach((i,o)=>t[o]=i)}bo(t,e){const n=Xh[t];return`${this.po}/v1/${e}:${n}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(t){this.Fo=t.Fo,this.Mo=t.Mo}xo(t){this.Oo=t}No(t){this.Bo=t}Lo(t){this.ko=t}onMessage(t){this.qo=t}close(){this.Mo()}send(t){this.Fo(t)}Qo(){this.Oo()}$o(){this.Bo()}Uo(t){this.ko(t)}Ko(t){this.qo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt="WebChannelConnection";class Zh extends Yh{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,e,n,i){const o=Jr();return new Promise((u,h)=>{const f=new No;f.setWithCredentials(!0),f.listenOnce(xo.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case Ln.NO_ERROR:const _=f.getResponseJson();D(mt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(_)),u(_);break;case Ln.TIMEOUT:D(mt,`RPC '${t}' ${o} timed out`),h(new x(V.DEADLINE_EXCEEDED,"Request time out"));break;case Ln.HTTP_ERROR:const A=f.getStatus();if(D(mt,`RPC '${t}' ${o} failed with status:`,A,"response text:",f.getResponseText()),A>0){let P=f.getResponseJson();Array.isArray(P)&&(P=P[0]);const S=P==null?void 0:P.error;if(S&&S.status&&S.message){const k=function(b){const $=b.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf($)>=0?$:V.UNKNOWN}(S.status);h(new x(k,S.message))}else h(new x(V.UNKNOWN,"Server responded with status "+f.getStatus()))}else h(new x(V.UNAVAILABLE,"Connection failed."));break;default:L()}}finally{D(mt,`RPC '${t}' ${o} completed.`)}});const d=JSON.stringify(i);D(mt,`RPC '${t}' ${o} sending request:`,i),f.send(e,"POST",d,n,15)})}Wo(t,e,n){const i=Jr(),o=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=Oo(),h=Lo(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(f.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(f.useFetchStreams=!0),this.Do(f.initMessageHeaders,e,n),f.encodeInitMessageHeaders=!0;const _=o.join("");D(mt,`Creating RPC '${t}' stream ${i}: ${_}`,f);const A=u.createWebChannel(_,f);let P=!1,S=!1;const k=new Jh({Fo:b=>{S?D(mt,`Not sending because RPC '${t}' stream ${i} is closed:`,b):(P||(D(mt,`Opening RPC '${t}' stream ${i} transport.`),A.open(),P=!0),D(mt,`RPC '${t}' stream ${i} sending:`,b),A.send(b))},Mo:()=>A.close()}),N=(b,$,K)=>{b.listen($,G=>{try{K(G)}catch(rt){setTimeout(()=>{throw rt},0)}})};return N(A,$e.EventType.OPEN,()=>{S||(D(mt,`RPC '${t}' stream ${i} transport opened.`),k.Qo())}),N(A,$e.EventType.CLOSE,()=>{S||(S=!0,D(mt,`RPC '${t}' stream ${i} transport closed`),k.Uo())}),N(A,$e.EventType.ERROR,b=>{S||(S=!0,_e(mt,`RPC '${t}' stream ${i} transport errored:`,b),k.Uo(new x(V.UNAVAILABLE,"The operation could not be completed")))}),N(A,$e.EventType.MESSAGE,b=>{var $;if(!S){const K=b.data[0];z(!!K);const G=K,rt=(G==null?void 0:G.error)||(($=G[0])===null||$===void 0?void 0:$.error);if(rt){D(mt,`RPC '${t}' stream ${i} received error:`,rt);const Dt=rt.status;let it=function(p){const y=Z[p];if(y!==void 0)return ga(y)}(Dt),E=rt.message;it===void 0&&(it=V.INTERNAL,E="Unknown error status: "+Dt+" with message "+rt.message),S=!0,k.Uo(new x(it,E)),A.close()}else D(mt,`RPC '${t}' stream ${i} received:`,K),k.Ko(K)}}),N(h,Mo.STAT_EVENT,b=>{b.stat===Ur.PROXY?D(mt,`RPC '${t}' stream ${i} detected buffering proxy`):b.stat===Ur.NOPROXY&&D(mt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{k.$o()},0),k}}function Or(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(r){return new rh(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(t,e,n=1e3,i=1.5,o=6e4){this.Ti=t,this.timerId=e,this.Go=n,this.zo=i,this.jo=o,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(t){this.cancel();const e=Math.floor(this.Ho+this.e_()),n=Math.max(0,Date.now()-this.Yo),i=Math.max(0,e-n);i>0&&D("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ho} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,i,()=>(this.Yo=Date.now(),t())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo="PersistentStream";class Da{constructor(t,e,n,i,o,u,h,f){this.Ti=t,this.n_=n,this.r_=i,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=h,this.listener=f,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Ca(t,e)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(t){this.E_(),this.stream.send(t)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(t,e){this.E_(),this.d_(),this.a_.cancel(),this.i_++,t!==4?this.a_.reset():e&&e.code===V.RESOURCE_EXHAUSTED?(Lt(e.toString()),Lt("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):e&&e.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Lo(e)}A_(){}auth(){this.state=1;const t=this.R_(this.i_),e=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.i_===e&&this.V_(n,i)},n=>{t(()=>{const i=new x(V.UNKNOWN,"Fetching auth token failed: "+n.message);return this.m_(i)})})}V_(t,e){const n=this.R_(this.i_);this.stream=this.f_(t,e),this.stream.xo(()=>{n(()=>this.listener.xo())}),this.stream.No(()=>{n(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(i=>{n(()=>this.m_(i))}),this.stream.onMessage(i=>{n(()=>++this.__==1?this.g_(i):this.onNext(i))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(t){return D(yo,`close with error: ${t}`),this.stream=null,this.close(4,t)}R_(t){return e=>{this.Ti.enqueueAndForget(()=>this.i_===t?e():(D(yo,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class tc extends Da{constructor(t,e,n,i,o,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,u),this.serializer=o}f_(t,e){return this.connection.Wo("Listen",t,e)}g_(t){return this.onNext(t)}onNext(t){this.a_.reset();const e=oh(this.serializer,t),n=function(o){if(!("targetChange"in o))return O.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?O.min():u.readTime?Vt(u.readTime):O.min()}(t);return this.listener.p_(e,n)}y_(t){const e={};e.database=Xr(this.serializer),e.addTarget=function(o,u){let h;const f=u.target;if(h=$r(f)?{documents:lh(o,f)}:{query:hh(o,f).ht},h.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){h.resumeToken=ya(o,u.resumeToken);const d=Qr(o,u.expectedCount);d!==null&&(h.expectedCount=d)}else if(u.snapshotVersion.compareTo(O.min())>0){h.readTime=Wn(o,u.snapshotVersion.toTimestamp());const d=Qr(o,u.expectedCount);d!==null&&(h.expectedCount=d)}return h}(this.serializer,t);const n=fh(this.serializer,t);n&&(e.labels=n),this.I_(e)}w_(t){const e={};e.database=Xr(this.serializer),e.removeTarget=t,this.I_(e)}}class ec extends Da{constructor(t,e,n,i,o,u){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,u),this.serializer=o}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(t,e){return this.connection.Wo("Write",t,e)}g_(t){return z(!!t.streamToken),this.lastStreamToken=t.streamToken,z(!t.writeResults||t.writeResults.length===0),this.listener.D_()}onNext(t){z(!!t.streamToken),this.lastStreamToken=t.streamToken,this.a_.reset();const e=uh(t.writeResults,t.commitTime),n=Vt(t.commitTime);return this.listener.v_(n,e)}C_(){const t={};t.database=Xr(this.serializer),this.I_(t)}b_(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>ah(this.serializer,n))};this.I_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{}class rc extends nc{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.F_=!1}M_(){if(this.F_)throw new x(V.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,e,n,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.So(t,Wr(e,n),i,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new x(V.UNKNOWN,o.toString())})}Co(t,e,n,i,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.Co(t,Wr(e,n),i,u,h,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new x(V.UNKNOWN,u.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class sc{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(t){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.L_("Offline")))}set(t){this.Q_(),this.x_=0,t==="Online"&&(this.N_=!1),this.L_(t)}L_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}k_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Lt(e),this.N_=!1):D("OnlineStateTracker",e)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re="RemoteStore";class ic{constructor(t,e,n,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=o,this.z_.To(u=>{n.enqueueAndForget(async()=>{ae(this)&&(D(re,"Restarting streams for network reachability change."),await async function(f){const d=F(f);d.W_.add(4),await hn(d),d.j_.set("Unknown"),d.W_.delete(4),await lr(d)}(this))})}),this.j_=new sc(n,i)}}async function lr(r){if(ae(r))for(const t of r.G_)await t(!0)}async function hn(r){for(const t of r.G_)await t(!1)}function ba(r,t){const e=F(r);e.K_.has(t.targetId)||(e.K_.set(t.targetId,t),Es(e)?Ts(e):Ve(e).c_()&&ys(e,t))}function _s(r,t){const e=F(r),n=Ve(e);e.K_.delete(t),n.c_()&&ka(e,t),e.K_.size===0&&(n.c_()?n.P_():ae(e)&&e.j_.set("Unknown"))}function ys(r,t){if(r.H_.Ne(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(O.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Ve(r).y_(t)}function ka(r,t){r.H_.Ne(t),Ve(r).w_(t)}function Ts(r){r.H_=new Zl({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>r.K_.get(t)||null,it:()=>r.datastore.serializer.databaseId}),Ve(r).start(),r.j_.B_()}function Es(r){return ae(r)&&!Ve(r).u_()&&r.K_.size>0}function ae(r){return F(r).W_.size===0}function Na(r){r.H_=void 0}async function oc(r){r.j_.set("Online")}async function ac(r){r.K_.forEach((t,e)=>{ys(r,t)})}async function uc(r,t){Na(r),Es(r)?(r.j_.q_(t),Ts(r)):r.j_.set("Unknown")}async function lc(r,t,e){if(r.j_.set("Online"),t instanceof _a&&t.state===2&&t.cause)try{await async function(i,o){const u=o.cause;for(const h of o.targetIds)i.K_.has(h)&&(await i.remoteSyncer.rejectListen(h,u),i.K_.delete(h),i.H_.removeTarget(h))}(r,t)}catch(n){D(re,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Xn(r,n)}else if(t instanceof qn?r.H_.We(t):t instanceof pa?r.H_.Ze(t):r.H_.je(t),!e.isEqual(O.min()))try{const n=await Sa(r.localStore);e.compareTo(n)>=0&&await function(o,u){const h=o.H_.ot(u);return h.targetChanges.forEach((f,d)=>{if(f.resumeToken.approximateByteSize()>0){const _=o.K_.get(d);_&&o.K_.set(d,_.withResumeToken(f.resumeToken,u))}}),h.targetMismatches.forEach((f,d)=>{const _=o.K_.get(f);if(!_)return;o.K_.set(f,_.withResumeToken(lt.EMPTY_BYTE_STRING,_.snapshotVersion)),ka(o,f);const A=new jt(_.target,f,d,_.sequenceNumber);ys(o,A)}),o.remoteSyncer.applyRemoteEvent(h)}(r,e)}catch(n){D(re,"Failed to raise snapshot:",n),await Xn(r,n)}}async function Xn(r,t,e){if(!Pe(t))throw t;r.W_.add(1),await hn(r),r.j_.set("Offline"),e||(e=()=>Sa(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{D(re,"Retrying IndexedDB access"),await e(),r.W_.delete(1),await lr(r)})}function xa(r,t){return t().catch(e=>Xn(r,e,t))}async function hr(r){const t=F(r),e=Ht(t);let n=t.U_.length>0?t.U_[t.U_.length-1].batchId:rs;for(;hc(t);)try{const i=await $h(t.localStore,n);if(i===null){t.U_.length===0&&e.P_();break}n=i.batchId,cc(t,i)}catch(i){await Xn(t,i)}Ma(t)&&La(t)}function hc(r){return ae(r)&&r.U_.length<10}function cc(r,t){r.U_.push(t);const e=Ht(r);e.c_()&&e.S_&&e.b_(t.mutations)}function Ma(r){return ae(r)&&!Ht(r).u_()&&r.U_.length>0}function La(r){Ht(r).start()}async function fc(r){Ht(r).C_()}async function dc(r){const t=Ht(r);for(const e of r.U_)t.b_(e.mutations)}async function mc(r,t,e){const n=r.U_.shift(),i=hs.from(n,t,e);await xa(r,()=>r.remoteSyncer.applySuccessfulWrite(i)),await hr(r)}async function gc(r,t){t&&Ht(r).S_&&await async function(n,i){if(function(u){return Yl(u)&&u!==V.ABORTED}(i.code)){const o=n.U_.shift();Ht(n).h_(),await xa(n,()=>n.remoteSyncer.rejectFailedWrite(o.batchId,i)),await hr(n)}}(r,t),Ma(r)&&La(r)}async function To(r,t){const e=F(r);e.asyncQueue.verifyOperationInProgress(),D(re,"RemoteStore received new credentials");const n=ae(e);e.W_.add(3),await hn(e),n&&e.j_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.W_.delete(3),await lr(e)}async function pc(r,t){const e=F(r);t?(e.W_.delete(2),await lr(e)):t||(e.W_.add(2),await hn(e),e.j_.set("Unknown"))}function Ve(r){return r.J_||(r.J_=function(e,n,i){const o=F(e);return o.M_(),new tc(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(r.datastore,r.asyncQueue,{xo:oc.bind(null,r),No:ac.bind(null,r),Lo:uc.bind(null,r),p_:lc.bind(null,r)}),r.G_.push(async t=>{t?(r.J_.h_(),Es(r)?Ts(r):r.j_.set("Unknown")):(await r.J_.stop(),Na(r))})),r.J_}function Ht(r){return r.Y_||(r.Y_=function(e,n,i){const o=F(e);return o.M_(),new ec(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(r.datastore,r.asyncQueue,{xo:()=>Promise.resolve(),No:fc.bind(null,r),Lo:gc.bind(null,r),D_:dc.bind(null,r),v_:mc.bind(null,r)}),r.G_.push(async t=>{t?(r.Y_.h_(),await hr(r)):(await r.Y_.stop(),r.U_.length>0&&(D(re,`Stopping write stream with ${r.U_.length} pending writes`),r.U_=[]))})),r.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(t,e,n,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=o,this.deferred=new Kt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,i,o){const u=Date.now()+n,h=new vs(t,e,u,i,o);return h.start(n),h}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(V.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Is(r,t){if(Lt("AsyncQueue",`${t}: ${r}`),Pe(r))return new x(V.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{static emptySet(t){return new pe(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||M.comparator(e.key,n.key):(e,n)=>M.comparator(e.key,n.key),this.keyedMap=Ge(),this.sortedSet=new H(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof pe)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new pe;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(){this.Z_=new H(M.comparator)}track(t){const e=t.doc.key,n=this.Z_.get(e);n?t.type!==0&&n.type===3?this.Z_=this.Z_.insert(e,t):t.type===3&&n.type!==1?this.Z_=this.Z_.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.Z_=this.Z_.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.Z_=this.Z_.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.Z_=this.Z_.remove(e):t.type===1&&n.type===2?this.Z_=this.Z_.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.Z_=this.Z_.insert(e,{type:2,doc:t.doc}):L():this.Z_=this.Z_.insert(e,t)}X_(){const t=[];return this.Z_.inorderTraversal((e,n)=>{t.push(n)}),t}}class Ie{constructor(t,e,n,i,o,u,h,f,d){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=h,this.excludesMetadataChanges=f,this.hasCachedResults=d}static fromInitialDocuments(t,e,n,i,o){const u=[];return e.forEach(h=>{u.push({type:0,doc:h})}),new Ie(t,e,pe.emptySet(e),u,n,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&rr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==n[i].type||!e[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(t=>t.ra())}}class yc{constructor(){this.queries=vo(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(e,n){const i=F(e),o=i.queries;i.queries=vo(),o.forEach((u,h)=>{for(const f of h.ta)f.onError(n)})})(this,new x(V.ABORTED,"Firestore shutting down"))}}function vo(){return new ie(r=>na(r),rr)}async function Tc(r,t){const e=F(r);let n=3;const i=t.query;let o=e.queries.get(i);o?!o.na()&&t.ra()&&(n=2):(o=new _c,n=t.ra()?0:1);try{switch(n){case 0:o.ea=await e.onListen(i,!0);break;case 1:o.ea=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(u){const h=Is(u,`Initialization of query '${de(t.query)}' failed`);return void t.onError(h)}e.queries.set(i,o),o.ta.push(t),t.sa(e.onlineState),o.ea&&t.oa(o.ea)&&As(e)}async function Ec(r,t){const e=F(r),n=t.query;let i=3;const o=e.queries.get(n);if(o){const u=o.ta.indexOf(t);u>=0&&(o.ta.splice(u,1),o.ta.length===0?i=t.ra()?0:1:!o.na()&&t.ra()&&(i=2))}switch(i){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function vc(r,t){const e=F(r);let n=!1;for(const i of t){const o=i.query,u=e.queries.get(o);if(u){for(const h of u.ta)h.oa(i)&&(n=!0);u.ea=i}}n&&As(e)}function Ic(r,t,e){const n=F(r),i=n.queries.get(t);if(i)for(const o of i.ta)o.onError(e);n.queries.delete(t)}function As(r){r.ia.forEach(t=>{t.next()})}var Zr,Io;(Io=Zr||(Zr={}))._a="default",Io.Cache="cache";class Ac{constructor(t,e,n){this.query=t,this.aa=e,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=n||{}}oa(t){if(!this.options.includeMetadataChanges){const n=[];for(const i of t.docChanges)i.type!==3&&n.push(i);t=new Ie(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ua?this.la(t)&&(this.aa.next(t),e=!0):this.ha(t,this.onlineState)&&(this.Pa(t),e=!0),this.ca=t,e}onError(t){this.aa.error(t)}sa(t){this.onlineState=t;let e=!1;return this.ca&&!this.ua&&this.ha(this.ca,t)&&(this.Pa(this.ca),e=!0),e}ha(t,e){if(!t.fromCache||!this.ra())return!0;const n=e!=="Offline";return(!this.options.Ta||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}la(t){if(t.docChanges.length>0)return!0;const e=this.ca&&this.ca.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}Pa(t){t=Ie.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ua=!0,this.aa.next(t)}ra(){return this.options.source!==Zr.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(t){this.key=t}}class Fa{constructor(t){this.key=t}}class wc{constructor(t,e){this.query=t,this.fa=e,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=q(),this.mutatedKeys=q(),this.ya=ra(t),this.wa=new pe(this.ya)}get Sa(){return this.fa}ba(t,e){const n=e?e.Da:new Eo,i=e?e.wa:this.wa;let o=e?e.mutatedKeys:this.mutatedKeys,u=i,h=!1;const f=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((_,A)=>{const P=i.get(_),S=sr(this.query,A)?A:null,k=!!P&&this.mutatedKeys.has(P.key),N=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let b=!1;P&&S?P.data.isEqual(S.data)?k!==N&&(n.track({type:3,doc:S}),b=!0):this.va(P,S)||(n.track({type:2,doc:S}),b=!0,(f&&this.ya(S,f)>0||d&&this.ya(S,d)<0)&&(h=!0)):!P&&S?(n.track({type:0,doc:S}),b=!0):P&&!S&&(n.track({type:1,doc:P}),b=!0,(f||d)&&(h=!0)),b&&(S?(u=u.add(S),o=N?o.add(_):o.delete(_)):(u=u.delete(_),o=o.delete(_)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const _=this.query.limitType==="F"?u.last():u.first();u=u.delete(_.key),o=o.delete(_.key),n.track({type:1,doc:_})}return{wa:u,Da:n,ls:h,mutatedKeys:o}}va(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,i){const o=this.wa;this.wa=t.wa,this.mutatedKeys=t.mutatedKeys;const u=t.Da.X_();u.sort((_,A)=>function(S,k){const N=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L()}};return N(S)-N(k)}(_.type,A.type)||this.ya(_.doc,A.doc)),this.Ca(n),i=i!=null&&i;const h=e&&!i?this.Fa():[],f=this.pa.size===0&&this.current&&!i?1:0,d=f!==this.ga;return this.ga=f,u.length!==0||d?{snapshot:new Ie(this.query,t.wa,o,u,t.mutatedKeys,f===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),Ma:h}:{Ma:h}}sa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new Eo,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(t){return!this.fa.has(t)&&!!this.wa.has(t)&&!this.wa.get(t).hasLocalMutations}Ca(t){t&&(t.addedDocuments.forEach(e=>this.fa=this.fa.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.fa=this.fa.delete(e)),this.current=t.current)}Fa(){if(!this.current)return[];const t=this.pa;this.pa=q(),this.wa.forEach(n=>{this.xa(n.key)&&(this.pa=this.pa.add(n.key))});const e=[];return t.forEach(n=>{this.pa.has(n)||e.push(new Fa(n))}),this.pa.forEach(n=>{t.has(n)||e.push(new Oa(n))}),e}Oa(t){this.fa=t.gs,this.pa=q();const e=this.ba(t.documents);return this.applyChanges(e,!0)}Na(){return Ie.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const ws="SyncEngine";class Rc{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Pc{constructor(t){this.key=t,this.Ba=!1}}class Vc{constructor(t,e,n,i,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.La={},this.ka=new ie(h=>na(h),rr),this.qa=new Map,this.Qa=new Set,this.$a=new H(M.comparator),this.Ua=new Map,this.Ka=new ds,this.Wa={},this.Ga=new Map,this.za=ve.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function Sc(r,t,e=!0){const n=Ka(r);let i;const o=n.ka.get(t);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Na()):i=await Ua(n,t,e,!0),i}async function Cc(r,t){const e=Ka(r);await Ua(e,t,!0,!1)}async function Ua(r,t,e,n){const i=await Gh(r.localStore,Pt(t)),o=i.targetId,u=r.sharedClientState.addLocalQueryTarget(o,e);let h;return n&&(h=await Dc(r,t,o,u==="current",i.resumeToken)),r.isPrimaryClient&&e&&ba(r.remoteStore,i),h}async function Dc(r,t,e,n,i){r.Ha=(A,P,S)=>async function(N,b,$,K){let G=b.view.ba($);G.ls&&(G=await mo(N.localStore,b.query,!1).then(({documents:E})=>b.view.ba(E,G)));const rt=K&&K.targetChanges.get(b.targetId),Dt=K&&K.targetMismatches.get(b.targetId)!=null,it=b.view.applyChanges(G,N.isPrimaryClient,rt,Dt);return wo(N,b.targetId,it.Ma),it.snapshot}(r,A,P,S);const o=await mo(r.localStore,t,!0),u=new wc(t,o.gs),h=u.ba(o.documents),f=ln.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",i),d=u.applyChanges(h,r.isPrimaryClient,f);wo(r,e,d.Ma);const _=new Rc(t,e,u);return r.ka.set(t,_),r.qa.has(e)?r.qa.get(e).push(t):r.qa.set(e,[t]),d.snapshot}async function bc(r,t,e){const n=F(r),i=n.ka.get(t),o=n.qa.get(i.targetId);if(o.length>1)return n.qa.set(i.targetId,o.filter(u=>!rr(u,t))),void n.ka.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Yr(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),e&&_s(n.remoteStore,i.targetId),ts(n,i.targetId)}).catch(Re)):(ts(n,i.targetId),await Yr(n.localStore,i.targetId,!0))}async function kc(r,t){const e=F(r),n=e.ka.get(t),i=e.qa.get(n.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),_s(e.remoteStore,n.targetId))}async function Nc(r,t,e){const n=qc(r);try{const i=await function(u,h){const f=F(u),d=et.now(),_=h.reduce((S,k)=>S.add(k.key),q());let A,P;return f.persistence.runTransaction("Locally write mutations","readwrite",S=>{let k=Ot(),N=q();return f.ds.getEntries(S,_).next(b=>{k=b,k.forEach(($,K)=>{K.isValidDocument()||(N=N.add($))})}).next(()=>f.localDocuments.getOverlayedDocuments(S,k)).next(b=>{A=b;const $=[];for(const K of h){const G=Gl(K,A.get(K.key).overlayedDocument);G!=null&&$.push(new oe(K.key,G,Ho(G.value.mapValue),Mt.exists(!0)))}return f.mutationQueue.addMutationBatch(S,d,$,h)}).next(b=>{P=b;const $=b.applyToLocalDocumentSet(A,N);return f.documentOverlayCache.saveOverlays(S,b.batchId,$)})}).then(()=>({batchId:P.batchId,changes:ia(A)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(i.batchId),function(u,h,f){let d=u.Wa[u.currentUser.toKey()];d||(d=new H(U)),d=d.insert(h,f),u.Wa[u.currentUser.toKey()]=d}(n,i.batchId,e),await cn(n,i.changes),await hr(n.remoteStore)}catch(i){const o=Is(i,"Failed to persist write");e.reject(o)}}async function qa(r,t){const e=F(r);try{const n=await zh(e.localStore,t);t.targetChanges.forEach((i,o)=>{const u=e.Ua.get(o);u&&(z(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?u.Ba=!0:i.modifiedDocuments.size>0?z(u.Ba):i.removedDocuments.size>0&&(z(u.Ba),u.Ba=!1))}),await cn(e,n,t)}catch(n){await Re(n)}}function Ao(r,t,e){const n=F(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const i=[];n.ka.forEach((o,u)=>{const h=u.view.sa(t);h.snapshot&&i.push(h.snapshot)}),function(u,h){const f=F(u);f.onlineState=h;let d=!1;f.queries.forEach((_,A)=>{for(const P of A.ta)P.sa(h)&&(d=!0)}),d&&As(f)}(n.eventManager,t),i.length&&n.La.p_(i),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function xc(r,t,e){const n=F(r);n.sharedClientState.updateQueryState(t,"rejected",e);const i=n.Ua.get(t),o=i&&i.key;if(o){let u=new H(M.comparator);u=u.insert(o,pt.newNoDocument(o,O.min()));const h=q().add(o),f=new ar(O.min(),new Map,new H(U),u,h);await qa(n,f),n.$a=n.$a.remove(o),n.Ua.delete(t),Rs(n)}else await Yr(n.localStore,t,!1).then(()=>ts(n,t,e)).catch(Re)}async function Mc(r,t){const e=F(r),n=t.batch.batchId;try{const i=await jh(e.localStore,t);ja(e,n,null),Ba(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await cn(e,i)}catch(i){await Re(i)}}async function Lc(r,t,e){const n=F(r);try{const i=await function(u,h){const f=F(u);return f.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let _;return f.mutationQueue.lookupMutationBatch(d,h).next(A=>(z(A!==null),_=A.keys(),f.mutationQueue.removeMutationBatch(d,A))).next(()=>f.mutationQueue.performConsistencyCheck(d)).next(()=>f.documentOverlayCache.removeOverlaysForBatchId(d,_,h)).next(()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,_)).next(()=>f.localDocuments.getDocuments(d,_))})}(n.localStore,t);ja(n,t,e),Ba(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await cn(n,i)}catch(i){await Re(i)}}function Ba(r,t){(r.Ga.get(t)||[]).forEach(e=>{e.resolve()}),r.Ga.delete(t)}function ja(r,t,e){const n=F(r);let i=n.Wa[n.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),n.Wa[n.currentUser.toKey()]=i}}function ts(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.qa.get(t))r.ka.delete(n),e&&r.La.Ja(n,e);r.qa.delete(t),r.isPrimaryClient&&r.Ka.br(t).forEach(n=>{r.Ka.containsKey(n)||za(r,n)})}function za(r,t){r.Qa.delete(t.path.canonicalString());const e=r.$a.get(t);e!==null&&(_s(r.remoteStore,e),r.$a=r.$a.remove(t),r.Ua.delete(e),Rs(r))}function wo(r,t,e){for(const n of e)n instanceof Oa?(r.Ka.addReference(n.key,t),Oc(r,n)):n instanceof Fa?(D(ws,"Document no longer in limbo: "+n.key),r.Ka.removeReference(n.key,t),r.Ka.containsKey(n.key)||za(r,n.key)):L()}function Oc(r,t){const e=t.key,n=e.path.canonicalString();r.$a.get(e)||r.Qa.has(n)||(D(ws,"New document in limbo: "+e),r.Qa.add(n),Rs(r))}function Rs(r){for(;r.Qa.size>0&&r.$a.size<r.maxConcurrentLimboResolutions;){const t=r.Qa.values().next().value;r.Qa.delete(t);const e=new M(Y.fromString(t)),n=r.za.next();r.Ua.set(n,new Pc(e)),r.$a=r.$a.insert(e,n),ba(r.remoteStore,new jt(Pt(us(e.path)),n,"TargetPurposeLimboResolution",Zn.ae))}}async function cn(r,t,e){const n=F(r),i=[],o=[],u=[];n.ka.isEmpty()||(n.ka.forEach((h,f)=>{u.push(n.Ha(f,t,e).then(d=>{var _;if((d||e)&&n.isPrimaryClient){const A=d?!d.fromCache:(_=e==null?void 0:e.targetChanges.get(f.targetId))===null||_===void 0?void 0:_.current;n.sharedClientState.updateQueryState(f.targetId,A?"current":"not-current")}if(d){i.push(d);const A=gs.Yi(f.targetId,d);o.push(A)}}))}),await Promise.all(u),n.La.p_(i),await async function(f,d){const _=F(f);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",A=>R.forEach(d,P=>R.forEach(P.Hi,S=>_.persistence.referenceDelegate.addReference(A,P.targetId,S)).next(()=>R.forEach(P.Ji,S=>_.persistence.referenceDelegate.removeReference(A,P.targetId,S)))))}catch(A){if(!Pe(A))throw A;D(ps,"Failed to update sequence numbers: "+A)}for(const A of d){const P=A.targetId;if(!A.fromCache){const S=_.Ts.get(P),k=S.snapshotVersion,N=S.withLastLimboFreeSnapshotVersion(k);_.Ts=_.Ts.insert(P,N)}}}(n.localStore,o))}async function Fc(r,t){const e=F(r);if(!e.currentUser.isEqual(t)){D(ws,"User change. New user:",t.toKey());const n=await Va(e.localStore,t);e.currentUser=t,function(o,u){o.Ga.forEach(h=>{h.forEach(f=>{f.reject(new x(V.CANCELLED,u))})}),o.Ga.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await cn(e,n.Rs)}}function Uc(r,t){const e=F(r),n=e.Ua.get(t);if(n&&n.Ba)return q().add(n.key);{let i=q();const o=e.qa.get(t);if(!o)return i;for(const u of o){const h=e.ka.get(u);i=i.unionWith(h.view.Sa)}return i}}function Ka(r){const t=F(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=qa.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Uc.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=xc.bind(null,t),t.La.p_=vc.bind(null,t.eventManager),t.La.Ja=Ic.bind(null,t.eventManager),t}function qc(r){const t=F(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Mc.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Lc.bind(null,t),t}class Yn{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=ur(t.databaseInfo.databaseId),this.sharedClientState=this.Za(t),this.persistence=this.Xa(t),await this.persistence.start(),this.localStore=this.eu(t),this.gcScheduler=this.tu(t,this.localStore),this.indexBackfillerScheduler=this.nu(t,this.localStore)}tu(t,e){return null}nu(t,e){return null}eu(t){return Bh(this.persistence,new Fh,t.initialUser,this.serializer)}Xa(t){return new Pa(ms.ri,this.serializer)}Za(t){return new Wh}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Yn.provider={build:()=>new Yn};class Bc extends Yn{constructor(t){super(),this.cacheSizeBytes=t}tu(t,e){z(this.persistence.referenceDelegate instanceof Hn);const n=this.persistence.referenceDelegate.garbageCollector;return new Ah(n,t.asyncQueue,e)}Xa(t){const e=this.cacheSizeBytes!==void 0?Tt.withCacheSize(this.cacheSizeBytes):Tt.DEFAULT;return new Pa(n=>Hn.ri(n,e),this.serializer)}}class es{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Ao(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Fc.bind(null,this.syncEngine),await pc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new yc}()}createDatastore(t){const e=ur(t.databaseInfo.databaseId),n=function(o){return new Zh(o)}(t.databaseInfo);return function(o,u,h,f){return new rc(o,u,h,f)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,i,o,u,h){return new ic(n,i,o,u,h)}(this.localStore,this.datastore,t.asyncQueue,e=>Ao(this.syncEngine,e,0),function(){return _o.D()?new _o:new Hh}())}createSyncEngine(t,e){return function(i,o,u,h,f,d,_){const A=new Vc(i,o,u,h,f,d);return _&&(A.ja=!0),A}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const o=F(i);D(re,"RemoteStore shutting down."),o.W_.add(5),await hn(o),o.z_.shutdown(),o.j_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}es.provider={build:()=>new es};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.iu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.iu(this.observer.error,t):Lt("Uncaught Error in snapshot listener:",t.toString()))}su(){this.muted=!0}iu(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt="FirestoreClient";class zc{constructor(t,e,n,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=gt.UNAUTHENTICATED,this.clientId=Uo.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,async u=>{D(Xt,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(n,u=>(D(Xt,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Kt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Is(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Fr(r,t){r.asyncQueue.verifyOperationInProgress(),D(Xt,"Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener(async i=>{n.isEqual(i)||(await Va(t.localStore,i),n=i)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function Ro(r,t){r.asyncQueue.verifyOperationInProgress();const e=await Kc(r);D(Xt,"Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(n=>To(t.remoteStore,n)),r.setAppCheckTokenChangeListener((n,i)=>To(t.remoteStore,i)),r._onlineComponents=t}async function Kc(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){D(Xt,"Using user provided OfflineComponentProvider");try{await Fr(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;_e("Error using user provided cache. Falling back to memory cache: "+e),await Fr(r,new Yn)}}else D(Xt,"Using default OfflineComponentProvider"),await Fr(r,new Bc(void 0));return r._offlineComponents}async function $a(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(D(Xt,"Using user provided OnlineComponentProvider"),await Ro(r,r._uninitializedComponentsProvider._online)):(D(Xt,"Using default OnlineComponentProvider"),await Ro(r,new es))),r._onlineComponents}function $c(r){return $a(r).then(t=>t.syncEngine)}async function Gc(r){const t=await $a(r),e=t.eventManager;return e.onListen=Sc.bind(null,t.syncEngine),e.onUnlisten=bc.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Cc.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=kc.bind(null,t.syncEngine),e}function Qc(r,t,e={}){const n=new Kt;return r.asyncQueue.enqueueAndForget(async()=>function(o,u,h,f,d){const _=new jc({next:P=>{_.su(),u.enqueueAndForget(()=>Ec(o,A));const S=P.docs.has(h);!S&&P.fromCache?d.reject(new x(V.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&P.fromCache&&f&&f.source==="server"?d.reject(new x(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(P)},error:P=>d.reject(P)}),A=new Ac(us(h.path),_,{includeMetadataChanges:!0,Ta:!0});return Tc(o,A)}(await Gc(r),r.asyncQueue,t,e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wc(r,t,e){if(!e)throw new x(V.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function Hc(r,t,e,n){if(t===!0&&n===!0)throw new x(V.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function Vo(r){if(!M.isDocumentKey(r))throw new x(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Ps(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":L()}function on(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new x(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Ps(r);throw new x(V.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa="firestore.googleapis.com",So=!0;class Co{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new x(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Qa,this.ssl=So}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:So;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Ra;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<vh)throw new x(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Hc("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ga((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new x(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new x(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new x(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Vs{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Co({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new x(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new x(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Co(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Yu;switch(n.type){case"firstParty":return new el(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new x(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Po.get(e);n&&(D("ComponentProvider","Removing Datastore"),Po.delete(e),n.terminate())}(this),Promise.resolve()}}function Xc(r,t,e,n={}){var i;const o=(r=on(r,Vs))._getSettings(),u=`${t}:${e}`;if(o.host!==Qa&&o.host!==u&&_e("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},o),{host:u,ssl:!1})),n.mockUserToken){let h,f;if(typeof n.mockUserToken=="string")h=n.mockUserToken,f=gt.MOCK_USER;else{h=Qu(n.mockUserToken,(i=r._app)===null||i===void 0?void 0:i.options.projectId);const d=n.mockUserToken.sub||n.mockUserToken.user_id;if(!d)throw new x(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new gt(d)}r._authCredentials=new Ju(new Fo(h,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Ss(this.firestore,t,this._query)}}class It{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new an(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new It(this.firestore,t,this._key)}}class an extends Ss{constructor(t,e,n){super(t,e,us(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new It(this.firestore,null,new M(t))}withConverter(t){return new an(this.firestore,t,this._path)}}function _f(r,t,...e){if(r=Bn(r),arguments.length===1&&(t=Uo.newId()),Wc("doc","path",t),r instanceof Vs){const n=Y.fromString(t,...e);return Vo(n),new It(r,null,new M(n))}{if(!(r instanceof It||r instanceof an))throw new x(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Y.fromString(t,...e));return Vo(n),new It(r.firestore,r instanceof an?r.converter:null,new M(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do="AsyncQueue";class bo{constructor(t=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Ca(this,"async_queue_retry"),this.Su=()=>{const n=Or();n&&D(Do,"Visibility state changed to "+n.visibilityState),this.a_.t_()},this.bu=t;const e=Or();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Du(),this.vu(t)}enterRestrictedMode(t){if(!this.mu){this.mu=!0,this.yu=t||!1;const e=Or();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Su)}}enqueue(t){if(this.Du(),this.mu)return new Promise(()=>{});const e=new Kt;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Vu.push(t),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(t){if(!Pe(t))throw t;D(Do,"Operation failed with retryable error: "+t)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(t){const e=this.bu.then(()=>(this.pu=!0,t().catch(n=>{this.gu=n,this.pu=!1;const i=function(u){let h=u.message||"";return u.stack&&(h=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),h}(n);throw Lt("INTERNAL UNHANDLED ERROR: ",i),n}).then(n=>(this.pu=!1,n))));return this.bu=e,e}enqueueAfterDelay(t,e,n){this.Du(),this.wu.indexOf(t)>-1&&(e=0);const i=vs.createAndSchedule(this,t,e,n,o=>this.Fu(o));return this.fu.push(i),i}Du(){this.gu&&L()}verifyOperationInProgress(){}async Mu(){let t;do t=this.bu,await t;while(t!==this.bu)}xu(t){for(const e of this.fu)if(e.timerId===t)return!0;return!1}Ou(t){return this.Mu().then(()=>{this.fu.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.fu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Mu()})}Nu(t){this.wu.push(t)}Fu(t){const e=this.fu.indexOf(t);this.fu.splice(e,1)}}class Cs extends Vs{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new bo,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new bo(t),this._firestoreClient=void 0,await t}}}function yf(r,t){const e=typeof r=="object"?r:Ku(),n=typeof r=="string"?r:zn,i=$u(e,"firestore").getImmediate({identifier:n});if(!i._initialized){const o=Gu("firestore");o&&Xc(i,...o)}return i}function Wa(r){if(r._terminated)throw new x(V.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Yc(r),r._firestoreClient}function Yc(r){var t,e,n;const i=r._freezeSettings(),o=function(h,f,d,_){return new gl(h,f,d,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,Ga(_.experimentalLongPollingOptions),_.useFetchStreams)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,i);r._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),r._firestoreClient=new zc(r._authCredentials,r._appCheckCredentials,r._queue,o,r._componentsProvider&&function(h){const f=h==null?void 0:h._online.build();return{_offline:h==null?void 0:h._offline.build(f),_online:f}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ae(lt.fromBase64String(t))}catch(e){throw new x(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ae(lt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new x(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new x(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new x(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return U(this._lat,t._lat)||U(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,i){if(n.length!==i.length)return!1;for(let o=0;o<n.length;++o)if(n[o]!==i[o])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc=/^__.*__$/;class Zc{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new oe(t,this.data,this.fieldMask,e,this.fieldTransforms):new un(t,this.data,e,this.fieldTransforms)}}function Ha(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L()}}class xs{constructor(t,e,n,i,o,u){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=i,o===void 0&&this.Bu(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(t){return new xs(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.ku({path:n,Qu:!1});return i.$u(t),i}Uu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.ku({path:n,Qu:!1});return i.Bu(),i}Ku(t){return this.ku({path:void 0,Qu:!0})}Wu(t){return Jn(t,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Bu(){if(this.path)for(let t=0;t<this.path.length;t++)this.$u(this.path.get(t))}$u(t){if(t.length===0)throw this.Wu("Document fields must not be empty");if(Ha(this.Lu)&&Jc.test(t))throw this.Wu('Document fields cannot begin and end with "__"')}}class tf{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||ur(t)}ju(t,e,n,i=!1){return new xs({Lu:t,methodName:e,zu:n,path:ut.emptyPath(),Qu:!1,Gu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ef(r){const t=r._freezeSettings(),e=ur(r._databaseId);return new tf(r._databaseId,!!t.ignoreUndefinedProperties,e)}function nf(r,t,e,n,i,o={}){const u=r.ju(o.merge||o.mergeFields?2:0,t,e,i);Za("Data must be an object, but it was:",u,n);const h=Ya(n,u);let f,d;if(o.merge)f=new wt(u.fieldMask),d=u.fieldTransforms;else if(o.mergeFields){const _=[];for(const A of o.mergeFields){const P=rf(t,A,e);if(!u.contains(P))throw new x(V.INVALID_ARGUMENT,`Field '${P}' is specified in your field mask but missing from your input data.`);of(_,P)||_.push(P)}f=new wt(_),d=u.fieldTransforms.filter(A=>f.covers(A.field))}else f=null,d=u.fieldTransforms;return new Zc(new vt(h),f,d)}class Ms extends bs{_toFieldTransform(t){return new jl(t.path,new nn)}isEqual(t){return t instanceof Ms}}function Xa(r,t){if(Ja(r=Bn(r)))return Za("Unsupported field value:",t,r),Ya(r,t);if(r instanceof bs)return function(n,i){if(!Ha(i.Lu))throw i.Wu(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Wu(`${n._methodName}() is not currently supported inside arrays`);const o=n._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.Qu&&t.Lu!==4)throw t.Wu("Nested arrays are not supported");return function(n,i){const o=[];let u=0;for(const h of n){let f=Xa(h,i.Ku(u));f==null&&(f={nullValue:"NULL_VALUE"}),o.push(f),u++}return{arrayValue:{values:o}}}(r,t)}return function(n,i){if((n=Bn(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Ul(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const o=et.fromDate(n);return{timestampValue:Wn(i.serializer,o)}}if(n instanceof et){const o=new et(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Wn(i.serializer,o)}}if(n instanceof ks)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ae)return{bytesValue:ya(i.serializer,n._byteString)};if(n instanceof It){const o=i.databaseId,u=n.firestore._databaseId;if(!u.isEqual(o))throw i.Wu(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:fs(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof Ns)return function(u,h){return{mapValue:{fields:{[Qo]:{stringValue:Wo},[Kn]:{arrayValue:{values:u.toArray().map(d=>{if(typeof d!="number")throw h.Wu("VectorValues must only contain numeric values.");return ls(h.serializer,d)})}}}}}}(n,i);throw i.Wu(`Unsupported field value: ${Ps(n)}`)}(r,t)}function Ya(r,t){const e={};return Bo(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):se(r,(n,i)=>{const o=Xa(i,t.qu(n));o!=null&&(e[n]=o)}),{mapValue:{fields:e}}}function Ja(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof et||r instanceof ks||r instanceof Ae||r instanceof It||r instanceof bs||r instanceof Ns)}function Za(r,t,e){if(!Ja(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const n=Ps(e);throw n==="an object"?t.Wu(r+" a custom object"):t.Wu(r+" "+n)}}function rf(r,t,e){if((t=Bn(t))instanceof Ds)return t._internalPath;if(typeof t=="string")return tu(r,t);throw Jn("Field path arguments must be of type string or ",r,!1,void 0,e)}const sf=new RegExp("[~\\*/\\[\\]]");function tu(r,t,e){if(t.search(sf)>=0)throw Jn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new Ds(...t.split("."))._internalPath}catch{throw Jn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function Jn(r,t,e,n,i){const o=n&&!n.isEmpty(),u=i!==void 0;let h=`Function ${t}() called with invalid data`;e&&(h+=" (via `toFirestore()`)"),h+=". ";let f="";return(o||u)&&(f+=" (found",o&&(f+=` in field ${n}`),u&&(f+=` in document ${i}`),f+=")"),new x(V.INVALID_ARGUMENT,h+r+f)}function of(r,t){return r.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(t,e,n,i,o){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new It(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new af(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(nu("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class af extends eu{data(){return super.data()}}function nu(r,t){return typeof t=="string"?tu(r,t):t instanceof Ds?t._internalPath:t._delegate._internalPath}class uf{convertValue(t,e="none"){switch(Wt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return J(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Qt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw L()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return se(t,(i,o)=>{n[i]=this.convertValue(o,e)}),n}convertVectorValue(t){var e,n,i;const o=(i=(n=(e=t.fields)===null||e===void 0?void 0:e[Kn].arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.map(u=>J(u.doubleValue));return new Ns(o)}convertGeoPoint(t){return new ks(J(t.latitude),J(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=er(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Ze(t));default:return null}}convertTimestamp(t){const e=Gt(t);return new et(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Y.fromString(t);z(wa(n));const i=new tn(n.get(1),n.get(3)),o=new M(n.popFirst(5));return i.isEqual(e)||Lt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(r,t,e){let n;return n=r?r.toFirestore(t):t,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ru extends eu{constructor(t,e,n,i,o,u){super(t,e,n,i,u),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new cf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(nu("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class cf extends ru{data(t={}){return super.data(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tf(r){r=on(r,It);const t=on(r.firestore,Cs);return Qc(Wa(t),r._key).then(e=>mf(t,r,e))}class ff extends uf{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ae(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new It(this.firestore,null,e)}}function Ef(r,t,e){r=on(r,It);const n=on(r.firestore,Cs),i=lf(r.converter,t);return df(n,[nf(ef(n),"setDoc",r._key,i,r.converter!==null,e).toMutation(r._key,Mt.none())])}function df(r,t){return function(n,i){const o=new Kt;return n.asyncQueue.enqueueAndForget(async()=>Nc(await $c(n),i,o)),o.promise}(Wa(r),t)}function mf(r,t,e){const n=e.docs.get(t._key),i=new ff(r);return new ru(r,i,t._key,n,new hf(e.hasPendingWrites,e.fromCache),t.converter)}function vf(){return new Ms("serverTimestamp")}(function(t,e=!0){(function(i){we=i})(Xu),qu(new Bu("firestore",(n,{instanceIdentifier:i,options:o})=>{const u=n.getProvider("app").getImmediate(),h=new Cs(new Zu(n.getProvider("auth-internal")),new nl(u,n.getProvider("app-check-internal")),function(d,_){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new x(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new tn(d.options.projectId,_)}(u,i),u);return o=Object.assign({useFetchStreams:e},o),h._setSettings(o),h},"PUBLIC").setMultipleInstances(!0)),Li(Fi,Ui,t),Li(Fi,Ui,"esm2017")})();export{vf as a,Tf as b,_f as d,yf as g,Ef as s};
