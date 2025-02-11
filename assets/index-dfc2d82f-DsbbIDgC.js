(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const h of l)if(h.type==="childList")for(const v of h.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&a(v)}).observe(document,{childList:!0,subtree:!0});function r(l){const h={};return l.integrity&&(h.integrity=l.integrity),l.referrerPolicy&&(h.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?h.credentials="include":l.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function a(l){if(l.ep)return;l.ep=!0;const h=r(l);fetch(l.href,h)}})();function Ko(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var _n={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */var Jo=_n.exports,_i;function Xo(){return _i||(_i=1,function(i){(function(e,r){i.exports=e.document?r(e,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return r(a)}})(typeof window<"u"?window:Jo,function(e,r){var a=[],l=Object.getPrototypeOf,h=a.slice,v=a.flat?function(t){return a.flat.call(t)}:function(t){return a.concat.apply([],t)},I=a.push,E=a.indexOf,R={},G=R.toString,X=R.hasOwnProperty,ie=X.toString,me=ie.call(Object),M={},$=function(n){return typeof n=="function"&&typeof n.nodeType!="number"&&typeof n.item!="function"},we=function(n){return n!=null&&n===n.window},H=e.document,on={type:!0,src:!0,nonce:!0,noModule:!0};function dt(t,n,s){s=s||H;var o,u,f=s.createElement("script");if(f.text=t,n)for(o in on)u=n[o]||n.getAttribute&&n.getAttribute(o),u&&f.setAttribute(o,u);s.head.appendChild(f).parentNode.removeChild(f)}function Oe(t){return t==null?t+"":typeof t=="object"||typeof t=="function"?R[G.call(t)]||"object":typeof t}var Rt="3.7.1",Ot=/HTML$/i,c=function(t,n){return new c.fn.init(t,n)};c.fn=c.prototype={jquery:Rt,constructor:c,length:0,toArray:function(){return h.call(this)},get:function(t){return t==null?h.call(this):t<0?this[t+this.length]:this[t]},pushStack:function(t){var n=c.merge(this.constructor(),t);return n.prevObject=this,n},each:function(t){return c.each(this,t)},map:function(t){return this.pushStack(c.map(this,function(n,s){return t.call(n,s,n)}))},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(c.grep(this,function(t,n){return(n+1)%2}))},odd:function(){return this.pushStack(c.grep(this,function(t,n){return n%2}))},eq:function(t){var n=this.length,s=+t+(t<0?n:0);return this.pushStack(s>=0&&s<n?[this[s]]:[])},end:function(){return this.prevObject||this.constructor()},push:I,sort:a.sort,splice:a.splice},c.extend=c.fn.extend=function(){var t,n,s,o,u,f,d=arguments[0]||{},m=1,g=arguments.length,_=!1;for(typeof d=="boolean"&&(_=d,d=arguments[m]||{},m++),typeof d!="object"&&!$(d)&&(d={}),m===g&&(d=this,m--);m<g;m++)if((t=arguments[m])!=null)for(n in t)o=t[n],!(n==="__proto__"||d===o)&&(_&&o&&(c.isPlainObject(o)||(u=Array.isArray(o)))?(s=d[n],u&&!Array.isArray(s)?f=[]:!u&&!c.isPlainObject(s)?f={}:f=s,u=!1,d[n]=c.extend(_,f,o)):o!==void 0&&(d[n]=o));return d},c.extend({expando:"jQuery"+(Rt+Math.random()).replace(/\D/g,""),isReady:!0,error:function(t){throw new Error(t)},noop:function(){},isPlainObject:function(t){var n,s;return!t||G.call(t)!=="[object Object]"?!1:(n=l(t),n?(s=X.call(n,"constructor")&&n.constructor,typeof s=="function"&&ie.call(s)===me):!0)},isEmptyObject:function(t){var n;for(n in t)return!1;return!0},globalEval:function(t,n,s){dt(t,{nonce:n&&n.nonce},s)},each:function(t,n){var s,o=0;if(xt(t))for(s=t.length;o<s&&n.call(t[o],o,t[o])!==!1;o++);else for(o in t)if(n.call(t[o],o,t[o])===!1)break;return t},text:function(t){var n,s="",o=0,u=t.nodeType;if(!u)for(;n=t[o++];)s+=c.text(n);return u===1||u===11?t.textContent:u===9?t.documentElement.textContent:u===3||u===4?t.nodeValue:s},makeArray:function(t,n){var s=n||[];return t!=null&&(xt(Object(t))?c.merge(s,typeof t=="string"?[t]:t):I.call(s,t)),s},inArray:function(t,n,s){return n==null?-1:E.call(n,t,s)},isXMLDoc:function(t){var n=t&&t.namespaceURI,s=t&&(t.ownerDocument||t).documentElement;return!Ot.test(n||s&&s.nodeName||"HTML")},merge:function(t,n){for(var s=+n.length,o=0,u=t.length;o<s;o++)t[u++]=n[o];return t.length=u,t},grep:function(t,n,s){for(var o,u=[],f=0,d=t.length,m=!s;f<d;f++)o=!n(t[f],f),o!==m&&u.push(t[f]);return u},map:function(t,n,s){var o,u,f=0,d=[];if(xt(t))for(o=t.length;f<o;f++)u=n(t[f],f,s),u!=null&&d.push(u);else for(f in t)u=n(t[f],f,s),u!=null&&d.push(u);return v(d)},guid:1,support:M}),typeof Symbol=="function"&&(c.fn[Symbol.iterator]=a[Symbol.iterator]),c.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(t,n){R["[object "+n+"]"]=n.toLowerCase()});function xt(t){var n=!!t&&"length"in t&&t.length,s=Oe(t);return $(t)||we(t)?!1:s==="array"||n===0||typeof n=="number"&&n>0&&n-1 in t}function Y(t,n){return t.nodeName&&t.nodeName.toLowerCase()===n.toLowerCase()}var Un=a.pop,$s=a.sort,qs=a.splice,Z="[\\x20\\t\\r\\n\\f]",Nt=new RegExp("^"+Z+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Z+"+$","g");c.contains=function(t,n){var s=n&&n.parentNode;return t===s||!!(s&&s.nodeType===1&&(t.contains?t.contains(s):t.compareDocumentPosition&&t.compareDocumentPosition(s)&16))};var Ws=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function Vs(t,n){return n?t==="\0"?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t}c.escapeSelector=function(t){return(t+"").replace(Ws,Vs)};var xe=H,jn=I;(function(){var t,n,s,o,u,f=jn,d,m,g,_,S,A=c.expando,w=0,k=0,F=pn(),K=pn(),q=pn(),se=pn(),re=function(p,y){return p===y&&(u=!0),0},Ie="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",Se="(?:\\\\[\\da-fA-F]{1,6}"+Z+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",z="\\["+Z+"*("+Se+")(?:"+Z+"*([*^$|!~]?=)"+Z+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Se+"))|)"+Z+"*\\]",at=":("+Se+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+z+")*)|.*)\\)|)",J=new RegExp(Z+"+","g"),ne=new RegExp("^"+Z+"*,"+Z+"*"),$t=new RegExp("^"+Z+"*([>+~]|"+Z+")"+Z+"*"),tr=new RegExp(Z+"|>"),Ce=new RegExp(at),qt=new RegExp("^"+Se+"$"),Ae={ID:new RegExp("^#("+Se+")"),CLASS:new RegExp("^\\.("+Se+")"),TAG:new RegExp("^("+Se+"|[*])"),ATTR:new RegExp("^"+z),PSEUDO:new RegExp("^"+at),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+Z+"*(even|odd|(([+-]|)(\\d*)n|)"+Z+"*(?:([+-]|)"+Z+"*(\\d+)|))"+Z+"*\\)|)","i"),bool:new RegExp("^(?:"+Ie+")$","i"),needsContext:new RegExp("^"+Z+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+Z+"*((?:-\\d)?\\d*)"+Z+"*\\)|)(?=[^-]|$)","i")},ze=/^(?:input|select|textarea|button)$/i,Ge=/^h\d$/i,pe=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,nr=/[+~]/,Le=new RegExp("\\\\[\\da-fA-F]{1,6}"+Z+"?|\\\\([^\\r\\n\\f])","g"),Me=function(p,y){var b="0x"+p.slice(1)-65536;return y||(b<0?String.fromCharCode(b+65536):String.fromCharCode(b>>10|55296,b&1023|56320))},Bo=function(){Ke()},$o=mn(function(p){return p.disabled===!0&&Y(p,"fieldset")},{dir:"parentNode",next:"legend"});function qo(){try{return d.activeElement}catch{}}try{f.apply(a=h.call(xe.childNodes),xe.childNodes),a[xe.childNodes.length].nodeType}catch{f={apply:function(y,b){jn.apply(y,h.call(b))},call:function(y){jn.apply(y,h.call(arguments,1))}}}function Q(p,y,b,T){var C,P,O,N,x,W,U,B=y&&y.ownerDocument,V=y?y.nodeType:9;if(b=b||[],typeof p!="string"||!p||V!==1&&V!==9&&V!==11)return b;if(!T&&(Ke(y),y=y||d,g)){if(V!==11&&(x=pe.exec(p)))if(C=x[1]){if(V===9)if(O=y.getElementById(C)){if(O.id===C)return f.call(b,O),b}else return b;else if(B&&(O=B.getElementById(C))&&Q.contains(y,O)&&O.id===C)return f.call(b,O),b}else{if(x[2])return f.apply(b,y.getElementsByTagName(p)),b;if((C=x[3])&&y.getElementsByClassName)return f.apply(b,y.getElementsByClassName(C)),b}if(!se[p+" "]&&(!_||!_.test(p))){if(U=p,B=y,V===1&&(tr.test(p)||$t.test(p))){for(B=nr.test(p)&&rr(y.parentNode)||y,(B!=y||!M.scope)&&((N=y.getAttribute("id"))?N=c.escapeSelector(N):y.setAttribute("id",N=A)),W=Wt(p),P=W.length;P--;)W[P]=(N?"#"+N:":scope")+" "+gn(W[P]);U=W.join(",")}try{return f.apply(b,B.querySelectorAll(U)),b}catch{se(p,!0)}finally{N===A&&y.removeAttribute("id")}}}return yi(p.replace(Nt,"$1"),y,b,T)}function pn(){var p=[];function y(b,T){return p.push(b+" ")>n.cacheLength&&delete y[p.shift()],y[b+" "]=T}return y}function ye(p){return p[A]=!0,p}function wt(p){var y=d.createElement("fieldset");try{return!!p(y)}catch{return!1}finally{y.parentNode&&y.parentNode.removeChild(y),y=null}}function Wo(p){return function(y){return Y(y,"input")&&y.type===p}}function Vo(p){return function(y){return(Y(y,"input")||Y(y,"button"))&&y.type===p}}function mi(p){return function(y){return"form"in y?y.parentNode&&y.disabled===!1?"label"in y?"label"in y.parentNode?y.parentNode.disabled===p:y.disabled===p:y.isDisabled===p||y.isDisabled!==!p&&$o(y)===p:y.disabled===p:"label"in y?y.disabled===p:!1}}function ct(p){return ye(function(y){return y=+y,ye(function(b,T){for(var C,P=p([],b.length,y),O=P.length;O--;)b[C=P[O]]&&(b[C]=!(T[C]=b[C]))})})}function rr(p){return p&&typeof p.getElementsByTagName<"u"&&p}function Ke(p){var y,b=p?p.ownerDocument||p:xe;return b==d||b.nodeType!==9||!b.documentElement||(d=b,m=d.documentElement,g=!c.isXMLDoc(d),S=m.matches||m.webkitMatchesSelector||m.msMatchesSelector,m.msMatchesSelector&&xe!=d&&(y=d.defaultView)&&y.top!==y&&y.addEventListener("unload",Bo),M.getById=wt(function(T){return m.appendChild(T).id=c.expando,!d.getElementsByName||!d.getElementsByName(c.expando).length}),M.disconnectedMatch=wt(function(T){return S.call(T,"*")}),M.scope=wt(function(){return d.querySelectorAll(":scope")}),M.cssHas=wt(function(){try{return d.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),M.getById?(n.filter.ID=function(T){var C=T.replace(Le,Me);return function(P){return P.getAttribute("id")===C}},n.find.ID=function(T,C){if(typeof C.getElementById<"u"&&g){var P=C.getElementById(T);return P?[P]:[]}}):(n.filter.ID=function(T){var C=T.replace(Le,Me);return function(P){var O=typeof P.getAttributeNode<"u"&&P.getAttributeNode("id");return O&&O.value===C}},n.find.ID=function(T,C){if(typeof C.getElementById<"u"&&g){var P,O,N,x=C.getElementById(T);if(x){if(P=x.getAttributeNode("id"),P&&P.value===T)return[x];for(N=C.getElementsByName(T),O=0;x=N[O++];)if(P=x.getAttributeNode("id"),P&&P.value===T)return[x]}return[]}}),n.find.TAG=function(T,C){return typeof C.getElementsByTagName<"u"?C.getElementsByTagName(T):C.querySelectorAll(T)},n.find.CLASS=function(T,C){if(typeof C.getElementsByClassName<"u"&&g)return C.getElementsByClassName(T)},_=[],wt(function(T){var C;m.appendChild(T).innerHTML="<a id='"+A+"' href='' disabled='disabled'></a><select id='"+A+"-\r\\' disabled='disabled'><option selected=''></option></select>",T.querySelectorAll("[selected]").length||_.push("\\["+Z+"*(?:value|"+Ie+")"),T.querySelectorAll("[id~="+A+"-]").length||_.push("~="),T.querySelectorAll("a#"+A+"+*").length||_.push(".#.+[+~]"),T.querySelectorAll(":checked").length||_.push(":checked"),C=d.createElement("input"),C.setAttribute("type","hidden"),T.appendChild(C).setAttribute("name","D"),m.appendChild(T).disabled=!0,T.querySelectorAll(":disabled").length!==2&&_.push(":enabled",":disabled"),C=d.createElement("input"),C.setAttribute("name",""),T.appendChild(C),T.querySelectorAll("[name='']").length||_.push("\\["+Z+"*name"+Z+"*="+Z+`*(?:''|"")`)}),M.cssHas||_.push(":has"),_=_.length&&new RegExp(_.join("|")),re=function(T,C){if(T===C)return u=!0,0;var P=!T.compareDocumentPosition-!C.compareDocumentPosition;return P||(P=(T.ownerDocument||T)==(C.ownerDocument||C)?T.compareDocumentPosition(C):1,P&1||!M.sortDetached&&C.compareDocumentPosition(T)===P?T===d||T.ownerDocument==xe&&Q.contains(xe,T)?-1:C===d||C.ownerDocument==xe&&Q.contains(xe,C)?1:o?E.call(o,T)-E.call(o,C):0:P&4?-1:1)}),d}Q.matches=function(p,y){return Q(p,null,null,y)},Q.matchesSelector=function(p,y){if(Ke(p),g&&!se[y+" "]&&(!_||!_.test(y)))try{var b=S.call(p,y);if(b||M.disconnectedMatch||p.document&&p.document.nodeType!==11)return b}catch{se(y,!0)}return Q(y,d,null,[p]).length>0},Q.contains=function(p,y){return(p.ownerDocument||p)!=d&&Ke(p),c.contains(p,y)},Q.attr=function(p,y){(p.ownerDocument||p)!=d&&Ke(p);var b=n.attrHandle[y.toLowerCase()],T=b&&X.call(n.attrHandle,y.toLowerCase())?b(p,y,!g):void 0;return T!==void 0?T:p.getAttribute(y)},Q.error=function(p){throw new Error("Syntax error, unrecognized expression: "+p)},c.uniqueSort=function(p){var y,b=[],T=0,C=0;if(u=!M.sortStable,o=!M.sortStable&&h.call(p,0),$s.call(p,re),u){for(;y=p[C++];)y===p[C]&&(T=b.push(C));for(;T--;)qs.call(p,b[T],1)}return o=null,p},c.fn.uniqueSort=function(){return this.pushStack(c.uniqueSort(h.apply(this)))},n=c.expr={cacheLength:50,createPseudo:ye,match:Ae,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(p){return p[1]=p[1].replace(Le,Me),p[3]=(p[3]||p[4]||p[5]||"").replace(Le,Me),p[2]==="~="&&(p[3]=" "+p[3]+" "),p.slice(0,4)},CHILD:function(p){return p[1]=p[1].toLowerCase(),p[1].slice(0,3)==="nth"?(p[3]||Q.error(p[0]),p[4]=+(p[4]?p[5]+(p[6]||1):2*(p[3]==="even"||p[3]==="odd")),p[5]=+(p[7]+p[8]||p[3]==="odd")):p[3]&&Q.error(p[0]),p},PSEUDO:function(p){var y,b=!p[6]&&p[2];return Ae.CHILD.test(p[0])?null:(p[3]?p[2]=p[4]||p[5]||"":b&&Ce.test(b)&&(y=Wt(b,!0))&&(y=b.indexOf(")",b.length-y)-b.length)&&(p[0]=p[0].slice(0,y),p[2]=b.slice(0,y)),p.slice(0,3))}},filter:{TAG:function(p){var y=p.replace(Le,Me).toLowerCase();return p==="*"?function(){return!0}:function(b){return Y(b,y)}},CLASS:function(p){var y=F[p+" "];return y||(y=new RegExp("(^|"+Z+")"+p+"("+Z+"|$)"))&&F(p,function(b){return y.test(typeof b.className=="string"&&b.className||typeof b.getAttribute<"u"&&b.getAttribute("class")||"")})},ATTR:function(p,y,b){return function(T){var C=Q.attr(T,p);return C==null?y==="!=":y?(C+="",y==="="?C===b:y==="!="?C!==b:y==="^="?b&&C.indexOf(b)===0:y==="*="?b&&C.indexOf(b)>-1:y==="$="?b&&C.slice(-b.length)===b:y==="~="?(" "+C.replace(J," ")+" ").indexOf(b)>-1:y==="|="?C===b||C.slice(0,b.length+1)===b+"-":!1):!0}},CHILD:function(p,y,b,T,C){var P=p.slice(0,3)!=="nth",O=p.slice(-4)!=="last",N=y==="of-type";return T===1&&C===0?function(x){return!!x.parentNode}:function(x,W,U){var B,V,L,te,de,oe=P!==O?"nextSibling":"previousSibling",ge=x.parentNode,ke=N&&x.nodeName.toLowerCase(),Et=!U&&!N,ae=!1;if(ge){if(P){for(;oe;){for(L=x;L=L[oe];)if(N?Y(L,ke):L.nodeType===1)return!1;de=oe=p==="only"&&!de&&"nextSibling"}return!0}if(de=[O?ge.firstChild:ge.lastChild],O&&Et){for(V=ge[A]||(ge[A]={}),B=V[p]||[],te=B[0]===w&&B[1],ae=te&&B[2],L=te&&ge.childNodes[te];L=++te&&L&&L[oe]||(ae=te=0)||de.pop();)if(L.nodeType===1&&++ae&&L===x){V[p]=[w,te,ae];break}}else if(Et&&(V=x[A]||(x[A]={}),B=V[p]||[],te=B[0]===w&&B[1],ae=te),ae===!1)for(;(L=++te&&L&&L[oe]||(ae=te=0)||de.pop())&&!((N?Y(L,ke):L.nodeType===1)&&++ae&&(Et&&(V=L[A]||(L[A]={}),V[p]=[w,ae]),L===x)););return ae-=C,ae===T||ae%T===0&&ae/T>=0}}},PSEUDO:function(p,y){var b,T=n.pseudos[p]||n.setFilters[p.toLowerCase()]||Q.error("unsupported pseudo: "+p);return T[A]?T(y):T.length>1?(b=[p,p,"",y],n.setFilters.hasOwnProperty(p.toLowerCase())?ye(function(C,P){for(var O,N=T(C,y),x=N.length;x--;)O=E.call(C,N[x]),C[O]=!(P[O]=N[x])}):function(C){return T(C,0,b)}):T}},pseudos:{not:ye(function(p){var y=[],b=[],T=ar(p.replace(Nt,"$1"));return T[A]?ye(function(C,P,O,N){for(var x,W=T(C,null,N,[]),U=C.length;U--;)(x=W[U])&&(C[U]=!(P[U]=x))}):function(C,P,O){return y[0]=C,T(y,null,O,b),y[0]=null,!b.pop()}}),has:ye(function(p){return function(y){return Q(p,y).length>0}}),contains:ye(function(p){return p=p.replace(Le,Me),function(y){return(y.textContent||c.text(y)).indexOf(p)>-1}}),lang:ye(function(p){return qt.test(p||"")||Q.error("unsupported lang: "+p),p=p.replace(Le,Me).toLowerCase(),function(y){var b;do if(b=g?y.lang:y.getAttribute("xml:lang")||y.getAttribute("lang"))return b=b.toLowerCase(),b===p||b.indexOf(p+"-")===0;while((y=y.parentNode)&&y.nodeType===1);return!1}}),target:function(p){var y=e.location&&e.location.hash;return y&&y.slice(1)===p.id},root:function(p){return p===m},focus:function(p){return p===qo()&&d.hasFocus()&&!!(p.type||p.href||~p.tabIndex)},enabled:mi(!1),disabled:mi(!0),checked:function(p){return Y(p,"input")&&!!p.checked||Y(p,"option")&&!!p.selected},selected:function(p){return p.parentNode&&p.parentNode.selectedIndex,p.selected===!0},empty:function(p){for(p=p.firstChild;p;p=p.nextSibling)if(p.nodeType<6)return!1;return!0},parent:function(p){return!n.pseudos.empty(p)},header:function(p){return Ge.test(p.nodeName)},input:function(p){return ze.test(p.nodeName)},button:function(p){return Y(p,"input")&&p.type==="button"||Y(p,"button")},text:function(p){var y;return Y(p,"input")&&p.type==="text"&&((y=p.getAttribute("type"))==null||y.toLowerCase()==="text")},first:ct(function(){return[0]}),last:ct(function(p,y){return[y-1]}),eq:ct(function(p,y,b){return[b<0?b+y:b]}),even:ct(function(p,y){for(var b=0;b<y;b+=2)p.push(b);return p}),odd:ct(function(p,y){for(var b=1;b<y;b+=2)p.push(b);return p}),lt:ct(function(p,y,b){var T;for(b<0?T=b+y:b>y?T=y:T=b;--T>=0;)p.push(T);return p}),gt:ct(function(p,y,b){for(var T=b<0?b+y:b;++T<y;)p.push(T);return p})}},n.pseudos.nth=n.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})n.pseudos[t]=Wo(t);for(t in{submit:!0,reset:!0})n.pseudos[t]=Vo(t);function vi(){}vi.prototype=n.filters=n.pseudos,n.setFilters=new vi;function Wt(p,y){var b,T,C,P,O,N,x,W=K[p+" "];if(W)return y?0:W.slice(0);for(O=p,N=[],x=n.preFilter;O;){(!b||(T=ne.exec(O)))&&(T&&(O=O.slice(T[0].length)||O),N.push(C=[])),b=!1,(T=$t.exec(O))&&(b=T.shift(),C.push({value:b,type:T[0].replace(Nt," ")}),O=O.slice(b.length));for(P in n.filter)(T=Ae[P].exec(O))&&(!x[P]||(T=x[P](T)))&&(b=T.shift(),C.push({value:b,type:P,matches:T}),O=O.slice(b.length));if(!b)break}return y?O.length:O?Q.error(p):K(p,N).slice(0)}function gn(p){for(var y=0,b=p.length,T="";y<b;y++)T+=p[y].value;return T}function mn(p,y,b){var T=y.dir,C=y.next,P=C||T,O=b&&P==="parentNode",N=k++;return y.first?function(x,W,U){for(;x=x[T];)if(x.nodeType===1||O)return p(x,W,U);return!1}:function(x,W,U){var B,V,L=[w,N];if(U){for(;x=x[T];)if((x.nodeType===1||O)&&p(x,W,U))return!0}else for(;x=x[T];)if(x.nodeType===1||O)if(V=x[A]||(x[A]={}),C&&Y(x,C))x=x[T]||x;else{if((B=V[P])&&B[0]===w&&B[1]===N)return L[2]=B[2];if(V[P]=L,L[2]=p(x,W,U))return!0}return!1}}function ir(p){return p.length>1?function(y,b,T){for(var C=p.length;C--;)if(!p[C](y,b,T))return!1;return!0}:p[0]}function zo(p,y,b){for(var T=0,C=y.length;T<C;T++)Q(p,y[T],b);return b}function vn(p,y,b,T,C){for(var P,O=[],N=0,x=p.length,W=y!=null;N<x;N++)(P=p[N])&&(!b||b(P,T,C))&&(O.push(P),W&&y.push(N));return O}function sr(p,y,b,T,C,P){return T&&!T[A]&&(T=sr(T)),C&&!C[A]&&(C=sr(C,P)),ye(function(O,N,x,W){var U,B,V,L,te=[],de=[],oe=N.length,ge=O||zo(y||"*",x.nodeType?[x]:x,[]),ke=p&&(O||!y)?vn(ge,te,p,x,W):ge;if(b?(L=C||(O?p:oe||T)?[]:N,b(ke,L,x,W)):L=ke,T)for(U=vn(L,de),T(U,[],x,W),B=U.length;B--;)(V=U[B])&&(L[de[B]]=!(ke[de[B]]=V));if(O){if(C||p){if(C){for(U=[],B=L.length;B--;)(V=L[B])&&U.push(ke[B]=V);C(null,L=[],U,W)}for(B=L.length;B--;)(V=L[B])&&(U=C?E.call(O,V):te[B])>-1&&(O[U]=!(N[U]=V))}}else L=vn(L===N?L.splice(oe,L.length):L),C?C(null,N,L,W):f.apply(N,L)})}function or(p){for(var y,b,T,C=p.length,P=n.relative[p[0].type],O=P||n.relative[" "],N=P?1:0,x=mn(function(B){return B===y},O,!0),W=mn(function(B){return E.call(y,B)>-1},O,!0),U=[function(B,V,L){var te=!P&&(L||V!=s)||((y=V).nodeType?x(B,V,L):W(B,V,L));return y=null,te}];N<C;N++)if(b=n.relative[p[N].type])U=[mn(ir(U),b)];else{if(b=n.filter[p[N].type].apply(null,p[N].matches),b[A]){for(T=++N;T<C&&!n.relative[p[T].type];T++);return sr(N>1&&ir(U),N>1&&gn(p.slice(0,N-1).concat({value:p[N-2].type===" "?"*":""})).replace(Nt,"$1"),b,N<T&&or(p.slice(N,T)),T<C&&or(p=p.slice(T)),T<C&&gn(p))}U.push(b)}return ir(U)}function Go(p,y){var b=y.length>0,T=p.length>0,C=function(P,O,N,x,W){var U,B,V,L=0,te="0",de=P&&[],oe=[],ge=s,ke=P||T&&n.find.TAG("*",W),Et=w+=ge==null?1:Math.random()||.1,ae=ke.length;for(W&&(s=O==d||O||W);te!==ae&&(U=ke[te])!=null;te++){if(T&&U){for(B=0,!O&&U.ownerDocument!=d&&(Ke(U),N=!g);V=p[B++];)if(V(U,O||d,N)){f.call(x,U);break}W&&(w=Et)}b&&((U=!V&&U)&&L--,P&&de.push(U))}if(L+=te,b&&te!==L){for(B=0;V=y[B++];)V(de,oe,O,N);if(P){if(L>0)for(;te--;)de[te]||oe[te]||(oe[te]=Un.call(x));oe=vn(oe)}f.apply(x,oe),W&&!P&&oe.length>0&&L+y.length>1&&c.uniqueSort(x)}return W&&(w=Et,s=ge),de};return b?ye(C):C}function ar(p,y){var b,T=[],C=[],P=q[p+" "];if(!P){for(y||(y=Wt(p)),b=y.length;b--;)P=or(y[b]),P[A]?T.push(P):C.push(P);P=q(p,Go(C,T)),P.selector=p}return P}function yi(p,y,b,T){var C,P,O,N,x,W=typeof p=="function"&&p,U=!T&&Wt(p=W.selector||p);if(b=b||[],U.length===1){if(P=U[0]=U[0].slice(0),P.length>2&&(O=P[0]).type==="ID"&&y.nodeType===9&&g&&n.relative[P[1].type]){if(y=(n.find.ID(O.matches[0].replace(Le,Me),y)||[])[0],y)W&&(y=y.parentNode);else return b;p=p.slice(P.shift().value.length)}for(C=Ae.needsContext.test(p)?0:P.length;C--&&(O=P[C],!n.relative[N=O.type]);)if((x=n.find[N])&&(T=x(O.matches[0].replace(Le,Me),nr.test(P[0].type)&&rr(y.parentNode)||y))){if(P.splice(C,1),p=T.length&&gn(P),!p)return f.apply(b,T),b;break}}return(W||ar(p,U))(T,y,!g,b,!y||nr.test(p)&&rr(y.parentNode)||y),b}M.sortStable=A.split("").sort(re).join("")===A,Ke(),M.sortDetached=wt(function(p){return p.compareDocumentPosition(d.createElement("fieldset"))&1}),c.find=Q,c.expr[":"]=c.expr.pseudos,c.unique=c.uniqueSort,Q.compile=ar,Q.select=yi,Q.setDocument=Ke,Q.tokenize=Wt,Q.escape=c.escapeSelector,Q.getText=c.text,Q.isXML=c.isXMLDoc,Q.selectors=c.expr,Q.support=c.support,Q.uniqueSort=c.uniqueSort})();var ht=function(t,n,s){for(var o=[],u=s!==void 0;(t=t[n])&&t.nodeType!==9;)if(t.nodeType===1){if(u&&c(t).is(s))break;o.push(t)}return o},Nr=function(t,n){for(var s=[];t;t=t.nextSibling)t.nodeType===1&&t!==n&&s.push(t);return s},Dr=c.expr.match.needsContext,Lr=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function Hn(t,n,s){return $(n)?c.grep(t,function(o,u){return!!n.call(o,u,o)!==s}):n.nodeType?c.grep(t,function(o){return o===n!==s}):typeof n!="string"?c.grep(t,function(o){return E.call(n,o)>-1!==s}):c.filter(n,t,s)}c.filter=function(t,n,s){var o=n[0];return s&&(t=":not("+t+")"),n.length===1&&o.nodeType===1?c.find.matchesSelector(o,t)?[o]:[]:c.find.matches(t,c.grep(n,function(u){return u.nodeType===1}))},c.fn.extend({find:function(t){var n,s,o=this.length,u=this;if(typeof t!="string")return this.pushStack(c(t).filter(function(){for(n=0;n<o;n++)if(c.contains(u[n],this))return!0}));for(s=this.pushStack([]),n=0;n<o;n++)c.find(t,u[n],s);return o>1?c.uniqueSort(s):s},filter:function(t){return this.pushStack(Hn(this,t||[],!1))},not:function(t){return this.pushStack(Hn(this,t||[],!0))},is:function(t){return!!Hn(this,typeof t=="string"&&Dr.test(t)?c(t):t||[],!1).length}});var Mr,zs=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Gs=c.fn.init=function(t,n,s){var o,u;if(!t)return this;if(s=s||Mr,typeof t=="string")if(t[0]==="<"&&t[t.length-1]===">"&&t.length>=3?o=[null,t,null]:o=zs.exec(t),o&&(o[1]||!n))if(o[1]){if(n=n instanceof c?n[0]:n,c.merge(this,c.parseHTML(o[1],n&&n.nodeType?n.ownerDocument||n:H,!0)),Lr.test(o[1])&&c.isPlainObject(n))for(o in n)$(this[o])?this[o](n[o]):this.attr(o,n[o]);return this}else return u=H.getElementById(o[2]),u&&(this[0]=u,this.length=1),this;else return!n||n.jquery?(n||s).find(t):this.constructor(n).find(t);else{if(t.nodeType)return this[0]=t,this.length=1,this;if($(t))return s.ready!==void 0?s.ready(t):t(c)}return c.makeArray(t,this)};Gs.prototype=c.fn,Mr=c(H);var Ks=/^(?:parents|prev(?:Until|All))/,Js={children:!0,contents:!0,next:!0,prev:!0};c.fn.extend({has:function(t){var n=c(t,this),s=n.length;return this.filter(function(){for(var o=0;o<s;o++)if(c.contains(this,n[o]))return!0})},closest:function(t,n){var s,o=0,u=this.length,f=[],d=typeof t!="string"&&c(t);if(!Dr.test(t)){for(;o<u;o++)for(s=this[o];s&&s!==n;s=s.parentNode)if(s.nodeType<11&&(d?d.index(s)>-1:s.nodeType===1&&c.find.matchesSelector(s,t))){f.push(s);break}}return this.pushStack(f.length>1?c.uniqueSort(f):f)},index:function(t){return t?typeof t=="string"?E.call(c(t),this[0]):E.call(this,t.jquery?t[0]:t):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(t,n){return this.pushStack(c.uniqueSort(c.merge(this.get(),c(t,n))))},addBack:function(t){return this.add(t==null?this.prevObject:this.prevObject.filter(t))}});function Ur(t,n){for(;(t=t[n])&&t.nodeType!==1;);return t}c.each({parent:function(t){var n=t.parentNode;return n&&n.nodeType!==11?n:null},parents:function(t){return ht(t,"parentNode")},parentsUntil:function(t,n,s){return ht(t,"parentNode",s)},next:function(t){return Ur(t,"nextSibling")},prev:function(t){return Ur(t,"previousSibling")},nextAll:function(t){return ht(t,"nextSibling")},prevAll:function(t){return ht(t,"previousSibling")},nextUntil:function(t,n,s){return ht(t,"nextSibling",s)},prevUntil:function(t,n,s){return ht(t,"previousSibling",s)},siblings:function(t){return Nr((t.parentNode||{}).firstChild,t)},children:function(t){return Nr(t.firstChild)},contents:function(t){return t.contentDocument!=null&&l(t.contentDocument)?t.contentDocument:(Y(t,"template")&&(t=t.content||t),c.merge([],t.childNodes))}},function(t,n){c.fn[t]=function(s,o){var u=c.map(this,n,s);return t.slice(-5)!=="Until"&&(o=s),o&&typeof o=="string"&&(u=c.filter(o,u)),this.length>1&&(Js[t]||c.uniqueSort(u),Ks.test(t)&&u.reverse()),this.pushStack(u)}});var Ee=/[^\x20\t\r\n\f]+/g;function Xs(t){var n={};return c.each(t.match(Ee)||[],function(s,o){n[o]=!0}),n}c.Callbacks=function(t){t=typeof t=="string"?Xs(t):c.extend({},t);var n,s,o,u,f=[],d=[],m=-1,g=function(){for(u=u||t.once,o=n=!0;d.length;m=-1)for(s=d.shift();++m<f.length;)f[m].apply(s[0],s[1])===!1&&t.stopOnFalse&&(m=f.length,s=!1);t.memory||(s=!1),n=!1,u&&(s?f=[]:f="")},_={add:function(){return f&&(s&&!n&&(m=f.length-1,d.push(s)),function S(A){c.each(A,function(w,k){$(k)?(!t.unique||!_.has(k))&&f.push(k):k&&k.length&&Oe(k)!=="string"&&S(k)})}(arguments),s&&!n&&g()),this},remove:function(){return c.each(arguments,function(S,A){for(var w;(w=c.inArray(A,f,w))>-1;)f.splice(w,1),w<=m&&m--}),this},has:function(S){return S?c.inArray(S,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return u=d=[],f=s="",this},disabled:function(){return!f},lock:function(){return u=d=[],!s&&!n&&(f=s=""),this},locked:function(){return!!u},fireWith:function(S,A){return u||(A=A||[],A=[S,A.slice?A.slice():A],d.push(A),n||g()),this},fire:function(){return _.fireWith(this,arguments),this},fired:function(){return!!o}};return _};function pt(t){return t}function an(t){throw t}function jr(t,n,s,o){var u;try{t&&$(u=t.promise)?u.call(t).done(n).fail(s):t&&$(u=t.then)?u.call(t,n,s):n.apply(void 0,[t].slice(o))}catch(f){s.apply(void 0,[f])}}c.extend({Deferred:function(t){var n=[["notify","progress",c.Callbacks("memory"),c.Callbacks("memory"),2],["resolve","done",c.Callbacks("once memory"),c.Callbacks("once memory"),0,"resolved"],["reject","fail",c.Callbacks("once memory"),c.Callbacks("once memory"),1,"rejected"]],s="pending",o={state:function(){return s},always:function(){return u.done(arguments).fail(arguments),this},catch:function(f){return o.then(null,f)},pipe:function(){var f=arguments;return c.Deferred(function(d){c.each(n,function(m,g){var _=$(f[g[4]])&&f[g[4]];u[g[1]](function(){var S=_&&_.apply(this,arguments);S&&$(S.promise)?S.promise().progress(d.notify).done(d.resolve).fail(d.reject):d[g[0]+"With"](this,_?[S]:arguments)})}),f=null}).promise()},then:function(f,d,m){var g=0;function _(S,A,w,k){return function(){var F=this,K=arguments,q=function(){var re,Ie;if(!(S<g)){if(re=w.apply(F,K),re===A.promise())throw new TypeError("Thenable self-resolution");Ie=re&&(typeof re=="object"||typeof re=="function")&&re.then,$(Ie)?k?Ie.call(re,_(g,A,pt,k),_(g,A,an,k)):(g++,Ie.call(re,_(g,A,pt,k),_(g,A,an,k),_(g,A,pt,A.notifyWith))):(w!==pt&&(F=void 0,K=[re]),(k||A.resolveWith)(F,K))}},se=k?q:function(){try{q()}catch(re){c.Deferred.exceptionHook&&c.Deferred.exceptionHook(re,se.error),S+1>=g&&(w!==an&&(F=void 0,K=[re]),A.rejectWith(F,K))}};S?se():(c.Deferred.getErrorHook?se.error=c.Deferred.getErrorHook():c.Deferred.getStackHook&&(se.error=c.Deferred.getStackHook()),e.setTimeout(se))}}return c.Deferred(function(S){n[0][3].add(_(0,S,$(m)?m:pt,S.notifyWith)),n[1][3].add(_(0,S,$(f)?f:pt)),n[2][3].add(_(0,S,$(d)?d:an))}).promise()},promise:function(f){return f!=null?c.extend(f,o):o}},u={};return c.each(n,function(f,d){var m=d[2],g=d[5];o[d[1]]=m.add,g&&m.add(function(){s=g},n[3-f][2].disable,n[3-f][3].disable,n[0][2].lock,n[0][3].lock),m.add(d[3].fire),u[d[0]]=function(){return u[d[0]+"With"](this===u?void 0:this,arguments),this},u[d[0]+"With"]=m.fireWith}),o.promise(u),t&&t.call(u,u),u},when:function(t){var n=arguments.length,s=n,o=Array(s),u=h.call(arguments),f=c.Deferred(),d=function(m){return function(g){o[m]=this,u[m]=arguments.length>1?h.call(arguments):g,--n||f.resolveWith(o,u)}};if(n<=1&&(jr(t,f.done(d(s)).resolve,f.reject,!n),f.state()==="pending"||$(u[s]&&u[s].then)))return f.then();for(;s--;)jr(u[s],d(s),f.reject);return f.promise()}});var Ys=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;c.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&Ys.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},c.readyException=function(t){e.setTimeout(function(){throw t})};var Fn=c.Deferred();c.fn.ready=function(t){return Fn.then(t).catch(function(n){c.readyException(n)}),this},c.extend({isReady:!1,readyWait:1,ready:function(t){(t===!0?--c.readyWait:c.isReady)||(c.isReady=!0,!(t!==!0&&--c.readyWait>0)&&Fn.resolveWith(H,[c]))}}),c.ready.then=Fn.then;function cn(){H.removeEventListener("DOMContentLoaded",cn),e.removeEventListener("load",cn),c.ready()}H.readyState==="complete"||H.readyState!=="loading"&&!H.documentElement.doScroll?e.setTimeout(c.ready):(H.addEventListener("DOMContentLoaded",cn),e.addEventListener("load",cn));var Ne=function(t,n,s,o,u,f,d){var m=0,g=t.length,_=s==null;if(Oe(s)==="object"){u=!0;for(m in s)Ne(t,n,m,s[m],!0,f,d)}else if(o!==void 0&&(u=!0,$(o)||(d=!0),_&&(d?(n.call(t,o),n=null):(_=n,n=function(S,A,w){return _.call(c(S),w)})),n))for(;m<g;m++)n(t[m],s,d?o:o.call(t[m],m,n(t[m],s)));return u?t:_?n.call(t):g?n(t[0],s):f},Qs=/^-ms-/,Zs=/-([a-z])/g;function eo(t,n){return n.toUpperCase()}function Te(t){return t.replace(Qs,"ms-").replace(Zs,eo)}var Dt=function(t){return t.nodeType===1||t.nodeType===9||!+t.nodeType};function Lt(){this.expando=c.expando+Lt.uid++}Lt.uid=1,Lt.prototype={cache:function(t){var n=t[this.expando];return n||(n={},Dt(t)&&(t.nodeType?t[this.expando]=n:Object.defineProperty(t,this.expando,{value:n,configurable:!0}))),n},set:function(t,n,s){var o,u=this.cache(t);if(typeof n=="string")u[Te(n)]=s;else for(o in n)u[Te(o)]=n[o];return u},get:function(t,n){return n===void 0?this.cache(t):t[this.expando]&&t[this.expando][Te(n)]},access:function(t,n,s){return n===void 0||n&&typeof n=="string"&&s===void 0?this.get(t,n):(this.set(t,n,s),s!==void 0?s:n)},remove:function(t,n){var s,o=t[this.expando];if(o!==void 0){if(n!==void 0)for(Array.isArray(n)?n=n.map(Te):(n=Te(n),n=n in o?[n]:n.match(Ee)||[]),s=n.length;s--;)delete o[n[s]];(n===void 0||c.isEmptyObject(o))&&(t.nodeType?t[this.expando]=void 0:delete t[this.expando])}},hasData:function(t){var n=t[this.expando];return n!==void 0&&!c.isEmptyObject(n)}};var D=new Lt,ue=new Lt,to=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,no=/[A-Z]/g;function ro(t){return t==="true"?!0:t==="false"?!1:t==="null"?null:t===+t+""?+t:to.test(t)?JSON.parse(t):t}function Hr(t,n,s){var o;if(s===void 0&&t.nodeType===1)if(o="data-"+n.replace(no,"-$&").toLowerCase(),s=t.getAttribute(o),typeof s=="string"){try{s=ro(s)}catch{}ue.set(t,n,s)}else s=void 0;return s}c.extend({hasData:function(t){return ue.hasData(t)||D.hasData(t)},data:function(t,n,s){return ue.access(t,n,s)},removeData:function(t,n){ue.remove(t,n)},_data:function(t,n,s){return D.access(t,n,s)},_removeData:function(t,n){D.remove(t,n)}}),c.fn.extend({data:function(t,n){var s,o,u,f=this[0],d=f&&f.attributes;if(t===void 0){if(this.length&&(u=ue.get(f),f.nodeType===1&&!D.get(f,"hasDataAttrs"))){for(s=d.length;s--;)d[s]&&(o=d[s].name,o.indexOf("data-")===0&&(o=Te(o.slice(5)),Hr(f,o,u[o])));D.set(f,"hasDataAttrs",!0)}return u}return typeof t=="object"?this.each(function(){ue.set(this,t)}):Ne(this,function(m){var g;if(f&&m===void 0)return g=ue.get(f,t),g!==void 0||(g=Hr(f,t),g!==void 0)?g:void 0;this.each(function(){ue.set(this,t,m)})},null,n,arguments.length>1,null,!0)},removeData:function(t){return this.each(function(){ue.remove(this,t)})}}),c.extend({queue:function(t,n,s){var o;if(t)return n=(n||"fx")+"queue",o=D.get(t,n),s&&(!o||Array.isArray(s)?o=D.access(t,n,c.makeArray(s)):o.push(s)),o||[]},dequeue:function(t,n){n=n||"fx";var s=c.queue(t,n),o=s.length,u=s.shift(),f=c._queueHooks(t,n),d=function(){c.dequeue(t,n)};u==="inprogress"&&(u=s.shift(),o--),u&&(n==="fx"&&s.unshift("inprogress"),delete f.stop,u.call(t,d,f)),!o&&f&&f.empty.fire()},_queueHooks:function(t,n){var s=n+"queueHooks";return D.get(t,s)||D.access(t,s,{empty:c.Callbacks("once memory").add(function(){D.remove(t,[n+"queue",s])})})}}),c.fn.extend({queue:function(t,n){var s=2;return typeof t!="string"&&(n=t,t="fx",s--),arguments.length<s?c.queue(this[0],t):n===void 0?this:this.each(function(){var o=c.queue(this,t,n);c._queueHooks(this,t),t==="fx"&&o[0]!=="inprogress"&&c.dequeue(this,t)})},dequeue:function(t){return this.each(function(){c.dequeue(this,t)})},clearQueue:function(t){return this.queue(t||"fx",[])},promise:function(t,n){var s,o=1,u=c.Deferred(),f=this,d=this.length,m=function(){--o||u.resolveWith(f,[f])};for(typeof t!="string"&&(n=t,t=void 0),t=t||"fx";d--;)s=D.get(f[d],t+"queueHooks"),s&&s.empty&&(o++,s.empty.add(m));return m(),u.promise(n)}});var Fr=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Mt=new RegExp("^(?:([+-])=|)("+Fr+")([a-z%]*)$","i"),De=["Top","Right","Bottom","Left"],it=H.documentElement,gt=function(t){return c.contains(t.ownerDocument,t)},io={composed:!0};it.getRootNode&&(gt=function(t){return c.contains(t.ownerDocument,t)||t.getRootNode(io)===t.ownerDocument});var un=function(t,n){return t=n||t,t.style.display==="none"||t.style.display===""&&gt(t)&&c.css(t,"display")==="none"};function Br(t,n,s,o){var u,f,d=20,m=o?function(){return o.cur()}:function(){return c.css(t,n,"")},g=m(),_=s&&s[3]||(c.cssNumber[n]?"":"px"),S=t.nodeType&&(c.cssNumber[n]||_!=="px"&&+g)&&Mt.exec(c.css(t,n));if(S&&S[3]!==_){for(g=g/2,_=_||S[3],S=+g||1;d--;)c.style(t,n,S+_),(1-f)*(1-(f=m()/g||.5))<=0&&(d=0),S=S/f;S=S*2,c.style(t,n,S+_),s=s||[]}return s&&(S=+S||+g||0,u=s[1]?S+(s[1]+1)*s[2]:+s[2],o&&(o.unit=_,o.start=S,o.end=u)),u}var $r={};function so(t){var n,s=t.ownerDocument,o=t.nodeName,u=$r[o];return u||(n=s.body.appendChild(s.createElement(o)),u=c.css(n,"display"),n.parentNode.removeChild(n),u==="none"&&(u="block"),$r[o]=u,u)}function mt(t,n){for(var s,o,u=[],f=0,d=t.length;f<d;f++)o=t[f],o.style&&(s=o.style.display,n?(s==="none"&&(u[f]=D.get(o,"display")||null,u[f]||(o.style.display="")),o.style.display===""&&un(o)&&(u[f]=so(o))):s!=="none"&&(u[f]="none",D.set(o,"display",s)));for(f=0;f<d;f++)u[f]!=null&&(t[f].style.display=u[f]);return t}c.fn.extend({show:function(){return mt(this,!0)},hide:function(){return mt(this)},toggle:function(t){return typeof t=="boolean"?t?this.show():this.hide():this.each(function(){un(this)?c(this).show():c(this).hide()})}});var Ut=/^(?:checkbox|radio)$/i,qr=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Wr=/^$|^module$|\/(?:java|ecma)script/i;(function(){var t=H.createDocumentFragment(),n=t.appendChild(H.createElement("div")),s=H.createElement("input");s.setAttribute("type","radio"),s.setAttribute("checked","checked"),s.setAttribute("name","t"),n.appendChild(s),M.checkClone=n.cloneNode(!0).cloneNode(!0).lastChild.checked,n.innerHTML="<textarea>x</textarea>",M.noCloneChecked=!!n.cloneNode(!0).lastChild.defaultValue,n.innerHTML="<option></option>",M.option=!!n.lastChild})();var he={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};he.tbody=he.tfoot=he.colgroup=he.caption=he.thead,he.th=he.td,M.option||(he.optgroup=he.option=[1,"<select multiple='multiple'>","</select>"]);function le(t,n){var s;return typeof t.getElementsByTagName<"u"?s=t.getElementsByTagName(n||"*"):typeof t.querySelectorAll<"u"?s=t.querySelectorAll(n||"*"):s=[],n===void 0||n&&Y(t,n)?c.merge([t],s):s}function Bn(t,n){for(var s=0,o=t.length;s<o;s++)D.set(t[s],"globalEval",!n||D.get(n[s],"globalEval"))}var oo=/<|&#?\w+;/;function Vr(t,n,s,o,u){for(var f,d,m,g,_,S,A=n.createDocumentFragment(),w=[],k=0,F=t.length;k<F;k++)if(f=t[k],f||f===0)if(Oe(f)==="object")c.merge(w,f.nodeType?[f]:f);else if(!oo.test(f))w.push(n.createTextNode(f));else{for(d=d||A.appendChild(n.createElement("div")),m=(qr.exec(f)||["",""])[1].toLowerCase(),g=he[m]||he._default,d.innerHTML=g[1]+c.htmlPrefilter(f)+g[2],S=g[0];S--;)d=d.lastChild;c.merge(w,d.childNodes),d=A.firstChild,d.textContent=""}for(A.textContent="",k=0;f=w[k++];){if(o&&c.inArray(f,o)>-1){u&&u.push(f);continue}if(_=gt(f),d=le(A.appendChild(f),"script"),_&&Bn(d),s)for(S=0;f=d[S++];)Wr.test(f.type||"")&&s.push(f)}return A}var zr=/^([^.]*)(?:\.(.+)|)/;function vt(){return!0}function yt(){return!1}function $n(t,n,s,o,u,f){var d,m;if(typeof n=="object"){typeof s!="string"&&(o=o||s,s=void 0);for(m in n)$n(t,m,s,o,n[m],f);return t}if(o==null&&u==null?(u=s,o=s=void 0):u==null&&(typeof s=="string"?(u=o,o=void 0):(u=o,o=s,s=void 0)),u===!1)u=yt;else if(!u)return t;return f===1&&(d=u,u=function(g){return c().off(g),d.apply(this,arguments)},u.guid=d.guid||(d.guid=c.guid++)),t.each(function(){c.event.add(this,n,u,o,s)})}c.event={global:{},add:function(t,n,s,o,u){var f,d,m,g,_,S,A,w,k,F,K,q=D.get(t);if(Dt(t))for(s.handler&&(f=s,s=f.handler,u=f.selector),u&&c.find.matchesSelector(it,u),s.guid||(s.guid=c.guid++),(g=q.events)||(g=q.events=Object.create(null)),(d=q.handle)||(d=q.handle=function(se){return typeof c<"u"&&c.event.triggered!==se.type?c.event.dispatch.apply(t,arguments):void 0}),n=(n||"").match(Ee)||[""],_=n.length;_--;)m=zr.exec(n[_])||[],k=K=m[1],F=(m[2]||"").split(".").sort(),k&&(A=c.event.special[k]||{},k=(u?A.delegateType:A.bindType)||k,A=c.event.special[k]||{},S=c.extend({type:k,origType:K,data:o,handler:s,guid:s.guid,selector:u,needsContext:u&&c.expr.match.needsContext.test(u),namespace:F.join(".")},f),(w=g[k])||(w=g[k]=[],w.delegateCount=0,(!A.setup||A.setup.call(t,o,F,d)===!1)&&t.addEventListener&&t.addEventListener(k,d)),A.add&&(A.add.call(t,S),S.handler.guid||(S.handler.guid=s.guid)),u?w.splice(w.delegateCount++,0,S):w.push(S),c.event.global[k]=!0)},remove:function(t,n,s,o,u){var f,d,m,g,_,S,A,w,k,F,K,q=D.hasData(t)&&D.get(t);if(!(!q||!(g=q.events))){for(n=(n||"").match(Ee)||[""],_=n.length;_--;){if(m=zr.exec(n[_])||[],k=K=m[1],F=(m[2]||"").split(".").sort(),!k){for(k in g)c.event.remove(t,k+n[_],s,o,!0);continue}for(A=c.event.special[k]||{},k=(o?A.delegateType:A.bindType)||k,w=g[k]||[],m=m[2]&&new RegExp("(^|\\.)"+F.join("\\.(?:.*\\.|)")+"(\\.|$)"),d=f=w.length;f--;)S=w[f],(u||K===S.origType)&&(!s||s.guid===S.guid)&&(!m||m.test(S.namespace))&&(!o||o===S.selector||o==="**"&&S.selector)&&(w.splice(f,1),S.selector&&w.delegateCount--,A.remove&&A.remove.call(t,S));d&&!w.length&&((!A.teardown||A.teardown.call(t,F,q.handle)===!1)&&c.removeEvent(t,k,q.handle),delete g[k])}c.isEmptyObject(g)&&D.remove(t,"handle events")}},dispatch:function(t){var n,s,o,u,f,d,m=new Array(arguments.length),g=c.event.fix(t),_=(D.get(this,"events")||Object.create(null))[g.type]||[],S=c.event.special[g.type]||{};for(m[0]=g,n=1;n<arguments.length;n++)m[n]=arguments[n];if(g.delegateTarget=this,!(S.preDispatch&&S.preDispatch.call(this,g)===!1)){for(d=c.event.handlers.call(this,g,_),n=0;(u=d[n++])&&!g.isPropagationStopped();)for(g.currentTarget=u.elem,s=0;(f=u.handlers[s++])&&!g.isImmediatePropagationStopped();)(!g.rnamespace||f.namespace===!1||g.rnamespace.test(f.namespace))&&(g.handleObj=f,g.data=f.data,o=((c.event.special[f.origType]||{}).handle||f.handler).apply(u.elem,m),o!==void 0&&(g.result=o)===!1&&(g.preventDefault(),g.stopPropagation()));return S.postDispatch&&S.postDispatch.call(this,g),g.result}},handlers:function(t,n){var s,o,u,f,d,m=[],g=n.delegateCount,_=t.target;if(g&&_.nodeType&&!(t.type==="click"&&t.button>=1)){for(;_!==this;_=_.parentNode||this)if(_.nodeType===1&&!(t.type==="click"&&_.disabled===!0)){for(f=[],d={},s=0;s<g;s++)o=n[s],u=o.selector+" ",d[u]===void 0&&(d[u]=o.needsContext?c(u,this).index(_)>-1:c.find(u,this,null,[_]).length),d[u]&&f.push(o);f.length&&m.push({elem:_,handlers:f})}}return _=this,g<n.length&&m.push({elem:_,handlers:n.slice(g)}),m},addProp:function(t,n){Object.defineProperty(c.Event.prototype,t,{enumerable:!0,configurable:!0,get:$(n)?function(){if(this.originalEvent)return n(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(s){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:s})}})},fix:function(t){return t[c.expando]?t:new c.Event(t)},special:{load:{noBubble:!0},click:{setup:function(t){var n=this||t;return Ut.test(n.type)&&n.click&&Y(n,"input")&&ln(n,"click",!0),!1},trigger:function(t){var n=this||t;return Ut.test(n.type)&&n.click&&Y(n,"input")&&ln(n,"click"),!0},_default:function(t){var n=t.target;return Ut.test(n.type)&&n.click&&Y(n,"input")&&D.get(n,"click")||Y(n,"a")}},beforeunload:{postDispatch:function(t){t.result!==void 0&&t.originalEvent&&(t.originalEvent.returnValue=t.result)}}}};function ln(t,n,s){if(!s){D.get(t,n)===void 0&&c.event.add(t,n,vt);return}D.set(t,n,!1),c.event.add(t,n,{namespace:!1,handler:function(o){var u,f=D.get(this,n);if(o.isTrigger&1&&this[n]){if(f)(c.event.special[n]||{}).delegateType&&o.stopPropagation();else if(f=h.call(arguments),D.set(this,n,f),this[n](),u=D.get(this,n),D.set(this,n,!1),f!==u)return o.stopImmediatePropagation(),o.preventDefault(),u}else f&&(D.set(this,n,c.event.trigger(f[0],f.slice(1),this)),o.stopPropagation(),o.isImmediatePropagationStopped=vt)}})}c.removeEvent=function(t,n,s){t.removeEventListener&&t.removeEventListener(n,s)},c.Event=function(t,n){if(!(this instanceof c.Event))return new c.Event(t,n);t&&t.type?(this.originalEvent=t,this.type=t.type,this.isDefaultPrevented=t.defaultPrevented||t.defaultPrevented===void 0&&t.returnValue===!1?vt:yt,this.target=t.target&&t.target.nodeType===3?t.target.parentNode:t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget):this.type=t,n&&c.extend(this,n),this.timeStamp=t&&t.timeStamp||Date.now(),this[c.expando]=!0},c.Event.prototype={constructor:c.Event,isDefaultPrevented:yt,isPropagationStopped:yt,isImmediatePropagationStopped:yt,isSimulated:!1,preventDefault:function(){var t=this.originalEvent;this.isDefaultPrevented=vt,t&&!this.isSimulated&&t.preventDefault()},stopPropagation:function(){var t=this.originalEvent;this.isPropagationStopped=vt,t&&!this.isSimulated&&t.stopPropagation()},stopImmediatePropagation:function(){var t=this.originalEvent;this.isImmediatePropagationStopped=vt,t&&!this.isSimulated&&t.stopImmediatePropagation(),this.stopPropagation()}},c.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},c.event.addProp),c.each({focus:"focusin",blur:"focusout"},function(t,n){function s(o){if(H.documentMode){var u=D.get(this,"handle"),f=c.event.fix(o);f.type=o.type==="focusin"?"focus":"blur",f.isSimulated=!0,u(o),f.target===f.currentTarget&&u(f)}else c.event.simulate(n,o.target,c.event.fix(o))}c.event.special[t]={setup:function(){var o;if(ln(this,t,!0),H.documentMode)o=D.get(this,n),o||this.addEventListener(n,s),D.set(this,n,(o||0)+1);else return!1},trigger:function(){return ln(this,t),!0},teardown:function(){var o;if(H.documentMode)o=D.get(this,n)-1,o?D.set(this,n,o):(this.removeEventListener(n,s),D.remove(this,n));else return!1},_default:function(o){return D.get(o.target,t)},delegateType:n},c.event.special[n]={setup:function(){var o=this.ownerDocument||this.document||this,u=H.documentMode?this:o,f=D.get(u,n);f||(H.documentMode?this.addEventListener(n,s):o.addEventListener(t,s,!0)),D.set(u,n,(f||0)+1)},teardown:function(){var o=this.ownerDocument||this.document||this,u=H.documentMode?this:o,f=D.get(u,n)-1;f?D.set(u,n,f):(H.documentMode?this.removeEventListener(n,s):o.removeEventListener(t,s,!0),D.remove(u,n))}}}),c.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(t,n){c.event.special[t]={delegateType:n,bindType:n,handle:function(s){var o,u=this,f=s.relatedTarget,d=s.handleObj;return(!f||f!==u&&!c.contains(u,f))&&(s.type=d.origType,o=d.handler.apply(this,arguments),s.type=n),o}}}),c.fn.extend({on:function(t,n,s,o){return $n(this,t,n,s,o)},one:function(t,n,s,o){return $n(this,t,n,s,o,1)},off:function(t,n,s){var o,u;if(t&&t.preventDefault&&t.handleObj)return o=t.handleObj,c(t.delegateTarget).off(o.namespace?o.origType+"."+o.namespace:o.origType,o.selector,o.handler),this;if(typeof t=="object"){for(u in t)this.off(u,n,t[u]);return this}return(n===!1||typeof n=="function")&&(s=n,n=void 0),s===!1&&(s=yt),this.each(function(){c.event.remove(this,t,s,n)})}});var ao=/<script|<style|<link/i,co=/checked\s*(?:[^=]|=\s*.checked.)/i,uo=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Gr(t,n){return Y(t,"table")&&Y(n.nodeType!==11?n:n.firstChild,"tr")&&c(t).children("tbody")[0]||t}function lo(t){return t.type=(t.getAttribute("type")!==null)+"/"+t.type,t}function fo(t){return(t.type||"").slice(0,5)==="true/"?t.type=t.type.slice(5):t.removeAttribute("type"),t}function Kr(t,n){var s,o,u,f,d,m,g;if(n.nodeType===1){if(D.hasData(t)&&(f=D.get(t),g=f.events,g)){D.remove(n,"handle events");for(u in g)for(s=0,o=g[u].length;s<o;s++)c.event.add(n,u,g[u][s])}ue.hasData(t)&&(d=ue.access(t),m=c.extend({},d),ue.set(n,m))}}function ho(t,n){var s=n.nodeName.toLowerCase();s==="input"&&Ut.test(t.type)?n.checked=t.checked:(s==="input"||s==="textarea")&&(n.defaultValue=t.defaultValue)}function _t(t,n,s,o){n=v(n);var u,f,d,m,g,_,S=0,A=t.length,w=A-1,k=n[0],F=$(k);if(F||A>1&&typeof k=="string"&&!M.checkClone&&co.test(k))return t.each(function(K){var q=t.eq(K);F&&(n[0]=k.call(this,K,q.html())),_t(q,n,s,o)});if(A&&(u=Vr(n,t[0].ownerDocument,!1,t,o),f=u.firstChild,u.childNodes.length===1&&(u=f),f||o)){for(d=c.map(le(u,"script"),lo),m=d.length;S<A;S++)g=u,S!==w&&(g=c.clone(g,!0,!0),m&&c.merge(d,le(g,"script"))),s.call(t[S],g,S);if(m)for(_=d[d.length-1].ownerDocument,c.map(d,fo),S=0;S<m;S++)g=d[S],Wr.test(g.type||"")&&!D.access(g,"globalEval")&&c.contains(_,g)&&(g.src&&(g.type||"").toLowerCase()!=="module"?c._evalUrl&&!g.noModule&&c._evalUrl(g.src,{nonce:g.nonce||g.getAttribute("nonce")},_):dt(g.textContent.replace(uo,""),g,_))}return t}function Jr(t,n,s){for(var o,u=n?c.filter(n,t):t,f=0;(o=u[f])!=null;f++)!s&&o.nodeType===1&&c.cleanData(le(o)),o.parentNode&&(s&&gt(o)&&Bn(le(o,"script")),o.parentNode.removeChild(o));return t}c.extend({htmlPrefilter:function(t){return t},clone:function(t,n,s){var o,u,f,d,m=t.cloneNode(!0),g=gt(t);if(!M.noCloneChecked&&(t.nodeType===1||t.nodeType===11)&&!c.isXMLDoc(t))for(d=le(m),f=le(t),o=0,u=f.length;o<u;o++)ho(f[o],d[o]);if(n)if(s)for(f=f||le(t),d=d||le(m),o=0,u=f.length;o<u;o++)Kr(f[o],d[o]);else Kr(t,m);return d=le(m,"script"),d.length>0&&Bn(d,!g&&le(t,"script")),m},cleanData:function(t){for(var n,s,o,u=c.event.special,f=0;(s=t[f])!==void 0;f++)if(Dt(s)){if(n=s[D.expando]){if(n.events)for(o in n.events)u[o]?c.event.remove(s,o):c.removeEvent(s,o,n.handle);s[D.expando]=void 0}s[ue.expando]&&(s[ue.expando]=void 0)}}}),c.fn.extend({detach:function(t){return Jr(this,t,!0)},remove:function(t){return Jr(this,t)},text:function(t){return Ne(this,function(n){return n===void 0?c.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=n)})},null,t,arguments.length)},append:function(){return _t(this,arguments,function(t){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var n=Gr(this,t);n.appendChild(t)}})},prepend:function(){return _t(this,arguments,function(t){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var n=Gr(this,t);n.insertBefore(t,n.firstChild)}})},before:function(){return _t(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this)})},after:function(){return _t(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this.nextSibling)})},empty:function(){for(var t,n=0;(t=this[n])!=null;n++)t.nodeType===1&&(c.cleanData(le(t,!1)),t.textContent="");return this},clone:function(t,n){return t=t??!1,n=n??t,this.map(function(){return c.clone(this,t,n)})},html:function(t){return Ne(this,function(n){var s=this[0]||{},o=0,u=this.length;if(n===void 0&&s.nodeType===1)return s.innerHTML;if(typeof n=="string"&&!ao.test(n)&&!he[(qr.exec(n)||["",""])[1].toLowerCase()]){n=c.htmlPrefilter(n);try{for(;o<u;o++)s=this[o]||{},s.nodeType===1&&(c.cleanData(le(s,!1)),s.innerHTML=n);s=0}catch{}}s&&this.empty().append(n)},null,t,arguments.length)},replaceWith:function(){var t=[];return _t(this,arguments,function(n){var s=this.parentNode;c.inArray(this,t)<0&&(c.cleanData(le(this)),s&&s.replaceChild(n,this))},t)}}),c.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(t,n){c.fn[t]=function(s){for(var o,u=[],f=c(s),d=f.length-1,m=0;m<=d;m++)o=m===d?this:this.clone(!0),c(f[m])[n](o),I.apply(u,o.get());return this.pushStack(u)}});var qn=new RegExp("^("+Fr+")(?!px)[a-z%]+$","i"),Wn=/^--/,fn=function(t){var n=t.ownerDocument.defaultView;return(!n||!n.opener)&&(n=e),n.getComputedStyle(t)},Xr=function(t,n,s){var o,u,f={};for(u in n)f[u]=t.style[u],t.style[u]=n[u];o=s.call(t);for(u in n)t.style[u]=f[u];return o},po=new RegExp(De.join("|"),"i");(function(){function t(){if(_){g.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",_.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",it.appendChild(g).appendChild(_);var S=e.getComputedStyle(_);s=S.top!=="1%",m=n(S.marginLeft)===12,_.style.right="60%",f=n(S.right)===36,o=n(S.width)===36,_.style.position="absolute",u=n(_.offsetWidth/3)===12,it.removeChild(g),_=null}}function n(S){return Math.round(parseFloat(S))}var s,o,u,f,d,m,g=H.createElement("div"),_=H.createElement("div");_.style&&(_.style.backgroundClip="content-box",_.cloneNode(!0).style.backgroundClip="",M.clearCloneStyle=_.style.backgroundClip==="content-box",c.extend(M,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),f},pixelPosition:function(){return t(),s},reliableMarginLeft:function(){return t(),m},scrollboxSize:function(){return t(),u},reliableTrDimensions:function(){var S,A,w,k;return d==null&&(S=H.createElement("table"),A=H.createElement("tr"),w=H.createElement("div"),S.style.cssText="position:absolute;left:-11111px;border-collapse:separate",A.style.cssText="box-sizing:content-box;border:1px solid",A.style.height="1px",w.style.height="9px",w.style.display="block",it.appendChild(S).appendChild(A).appendChild(w),k=e.getComputedStyle(A),d=parseInt(k.height,10)+parseInt(k.borderTopWidth,10)+parseInt(k.borderBottomWidth,10)===A.offsetHeight,it.removeChild(S)),d}}))})();function jt(t,n,s){var o,u,f,d,m=Wn.test(n),g=t.style;return s=s||fn(t),s&&(d=s.getPropertyValue(n)||s[n],m&&d&&(d=d.replace(Nt,"$1")||void 0),d===""&&!gt(t)&&(d=c.style(t,n)),!M.pixelBoxStyles()&&qn.test(d)&&po.test(n)&&(o=g.width,u=g.minWidth,f=g.maxWidth,g.minWidth=g.maxWidth=g.width=d,d=s.width,g.width=o,g.minWidth=u,g.maxWidth=f)),d!==void 0?d+"":d}function Yr(t,n){return{get:function(){if(t()){delete this.get;return}return(this.get=n).apply(this,arguments)}}}var Qr=["Webkit","Moz","ms"],Zr=H.createElement("div").style,ei={};function go(t){for(var n=t[0].toUpperCase()+t.slice(1),s=Qr.length;s--;)if(t=Qr[s]+n,t in Zr)return t}function Vn(t){var n=c.cssProps[t]||ei[t];return n||(t in Zr?t:ei[t]=go(t)||t)}var mo=/^(none|table(?!-c[ea]).+)/,vo={position:"absolute",visibility:"hidden",display:"block"},ti={letterSpacing:"0",fontWeight:"400"};function ni(t,n,s){var o=Mt.exec(n);return o?Math.max(0,o[2]-(s||0))+(o[3]||"px"):n}function zn(t,n,s,o,u,f){var d=n==="width"?1:0,m=0,g=0,_=0;if(s===(o?"border":"content"))return 0;for(;d<4;d+=2)s==="margin"&&(_+=c.css(t,s+De[d],!0,u)),o?(s==="content"&&(g-=c.css(t,"padding"+De[d],!0,u)),s!=="margin"&&(g-=c.css(t,"border"+De[d]+"Width",!0,u))):(g+=c.css(t,"padding"+De[d],!0,u),s!=="padding"?g+=c.css(t,"border"+De[d]+"Width",!0,u):m+=c.css(t,"border"+De[d]+"Width",!0,u));return!o&&f>=0&&(g+=Math.max(0,Math.ceil(t["offset"+n[0].toUpperCase()+n.slice(1)]-f-g-m-.5))||0),g+_}function ri(t,n,s){var o=fn(t),u=!M.boxSizingReliable()||s,f=u&&c.css(t,"boxSizing",!1,o)==="border-box",d=f,m=jt(t,n,o),g="offset"+n[0].toUpperCase()+n.slice(1);if(qn.test(m)){if(!s)return m;m="auto"}return(!M.boxSizingReliable()&&f||!M.reliableTrDimensions()&&Y(t,"tr")||m==="auto"||!parseFloat(m)&&c.css(t,"display",!1,o)==="inline")&&t.getClientRects().length&&(f=c.css(t,"boxSizing",!1,o)==="border-box",d=g in t,d&&(m=t[g])),m=parseFloat(m)||0,m+zn(t,n,s||(f?"border":"content"),d,o,m)+"px"}c.extend({cssHooks:{opacity:{get:function(t,n){if(n){var s=jt(t,"opacity");return s===""?"1":s}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(t,n,s,o){if(!(!t||t.nodeType===3||t.nodeType===8||!t.style)){var u,f,d,m=Te(n),g=Wn.test(n),_=t.style;if(g||(n=Vn(m)),d=c.cssHooks[n]||c.cssHooks[m],s!==void 0){if(f=typeof s,f==="string"&&(u=Mt.exec(s))&&u[1]&&(s=Br(t,n,u),f="number"),s==null||s!==s)return;f==="number"&&!g&&(s+=u&&u[3]||(c.cssNumber[m]?"":"px")),!M.clearCloneStyle&&s===""&&n.indexOf("background")===0&&(_[n]="inherit"),(!d||!("set"in d)||(s=d.set(t,s,o))!==void 0)&&(g?_.setProperty(n,s):_[n]=s)}else return d&&"get"in d&&(u=d.get(t,!1,o))!==void 0?u:_[n]}},css:function(t,n,s,o){var u,f,d,m=Te(n),g=Wn.test(n);return g||(n=Vn(m)),d=c.cssHooks[n]||c.cssHooks[m],d&&"get"in d&&(u=d.get(t,!0,s)),u===void 0&&(u=jt(t,n,o)),u==="normal"&&n in ti&&(u=ti[n]),s===""||s?(f=parseFloat(u),s===!0||isFinite(f)?f||0:u):u}}),c.each(["height","width"],function(t,n){c.cssHooks[n]={get:function(s,o,u){if(o)return mo.test(c.css(s,"display"))&&(!s.getClientRects().length||!s.getBoundingClientRect().width)?Xr(s,vo,function(){return ri(s,n,u)}):ri(s,n,u)},set:function(s,o,u){var f,d=fn(s),m=!M.scrollboxSize()&&d.position==="absolute",g=m||u,_=g&&c.css(s,"boxSizing",!1,d)==="border-box",S=u?zn(s,n,u,_,d):0;return _&&m&&(S-=Math.ceil(s["offset"+n[0].toUpperCase()+n.slice(1)]-parseFloat(d[n])-zn(s,n,"border",!1,d)-.5)),S&&(f=Mt.exec(o))&&(f[3]||"px")!=="px"&&(s.style[n]=o,o=c.css(s,n)),ni(s,o,S)}}}),c.cssHooks.marginLeft=Yr(M.reliableMarginLeft,function(t,n){if(n)return(parseFloat(jt(t,"marginLeft"))||t.getBoundingClientRect().left-Xr(t,{marginLeft:0},function(){return t.getBoundingClientRect().left}))+"px"}),c.each({margin:"",padding:"",border:"Width"},function(t,n){c.cssHooks[t+n]={expand:function(s){for(var o=0,u={},f=typeof s=="string"?s.split(" "):[s];o<4;o++)u[t+De[o]+n]=f[o]||f[o-2]||f[0];return u}},t!=="margin"&&(c.cssHooks[t+n].set=ni)}),c.fn.extend({css:function(t,n){return Ne(this,function(s,o,u){var f,d,m={},g=0;if(Array.isArray(o)){for(f=fn(s),d=o.length;g<d;g++)m[o[g]]=c.css(s,o[g],!1,f);return m}return u!==void 0?c.style(s,o,u):c.css(s,o)},t,n,arguments.length>1)}});function fe(t,n,s,o,u){return new fe.prototype.init(t,n,s,o,u)}c.Tween=fe,fe.prototype={constructor:fe,init:function(t,n,s,o,u,f){this.elem=t,this.prop=s,this.easing=u||c.easing._default,this.options=n,this.start=this.now=this.cur(),this.end=o,this.unit=f||(c.cssNumber[s]?"":"px")},cur:function(){var t=fe.propHooks[this.prop];return t&&t.get?t.get(this):fe.propHooks._default.get(this)},run:function(t){var n,s=fe.propHooks[this.prop];return this.options.duration?this.pos=n=c.easing[this.easing](t,this.options.duration*t,0,1,this.options.duration):this.pos=n=t,this.now=(this.end-this.start)*n+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),s&&s.set?s.set(this):fe.propHooks._default.set(this),this}},fe.prototype.init.prototype=fe.prototype,fe.propHooks={_default:{get:function(t){var n;return t.elem.nodeType!==1||t.elem[t.prop]!=null&&t.elem.style[t.prop]==null?t.elem[t.prop]:(n=c.css(t.elem,t.prop,""),!n||n==="auto"?0:n)},set:function(t){c.fx.step[t.prop]?c.fx.step[t.prop](t):t.elem.nodeType===1&&(c.cssHooks[t.prop]||t.elem.style[Vn(t.prop)]!=null)?c.style(t.elem,t.prop,t.now+t.unit):t.elem[t.prop]=t.now}}},fe.propHooks.scrollTop=fe.propHooks.scrollLeft={set:function(t){t.elem.nodeType&&t.elem.parentNode&&(t.elem[t.prop]=t.now)}},c.easing={linear:function(t){return t},swing:function(t){return .5-Math.cos(t*Math.PI)/2},_default:"swing"},c.fx=fe.prototype.init,c.fx.step={};var bt,dn,yo=/^(?:toggle|show|hide)$/,_o=/queueHooks$/;function Gn(){dn&&(H.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame(Gn):e.setTimeout(Gn,c.fx.interval),c.fx.tick())}function ii(){return e.setTimeout(function(){bt=void 0}),bt=Date.now()}function hn(t,n){var s,o=0,u={height:t};for(n=n?1:0;o<4;o+=2-n)s=De[o],u["margin"+s]=u["padding"+s]=t;return n&&(u.opacity=u.width=t),u}function si(t,n,s){for(var o,u=(ve.tweeners[n]||[]).concat(ve.tweeners["*"]),f=0,d=u.length;f<d;f++)if(o=u[f].call(s,n,t))return o}function bo(t,n,s){var o,u,f,d,m,g,_,S,A="width"in n||"height"in n,w=this,k={},F=t.style,K=t.nodeType&&un(t),q=D.get(t,"fxshow");s.queue||(d=c._queueHooks(t,"fx"),d.unqueued==null&&(d.unqueued=0,m=d.empty.fire,d.empty.fire=function(){d.unqueued||m()}),d.unqueued++,w.always(function(){w.always(function(){d.unqueued--,c.queue(t,"fx").length||d.empty.fire()})}));for(o in n)if(u=n[o],yo.test(u)){if(delete n[o],f=f||u==="toggle",u===(K?"hide":"show"))if(u==="show"&&q&&q[o]!==void 0)K=!0;else continue;k[o]=q&&q[o]||c.style(t,o)}if(g=!c.isEmptyObject(n),!(!g&&c.isEmptyObject(k))){A&&t.nodeType===1&&(s.overflow=[F.overflow,F.overflowX,F.overflowY],_=q&&q.display,_==null&&(_=D.get(t,"display")),S=c.css(t,"display"),S==="none"&&(_?S=_:(mt([t],!0),_=t.style.display||_,S=c.css(t,"display"),mt([t]))),(S==="inline"||S==="inline-block"&&_!=null)&&c.css(t,"float")==="none"&&(g||(w.done(function(){F.display=_}),_==null&&(S=F.display,_=S==="none"?"":S)),F.display="inline-block")),s.overflow&&(F.overflow="hidden",w.always(function(){F.overflow=s.overflow[0],F.overflowX=s.overflow[1],F.overflowY=s.overflow[2]})),g=!1;for(o in k)g||(q?"hidden"in q&&(K=q.hidden):q=D.access(t,"fxshow",{display:_}),f&&(q.hidden=!K),K&&mt([t],!0),w.done(function(){K||mt([t]),D.remove(t,"fxshow");for(o in k)c.style(t,o,k[o])})),g=si(K?q[o]:0,o,w),o in q||(q[o]=g.start,K&&(g.end=g.start,g.start=0))}}function wo(t,n){var s,o,u,f,d;for(s in t)if(o=Te(s),u=n[o],f=t[s],Array.isArray(f)&&(u=f[1],f=t[s]=f[0]),s!==o&&(t[o]=f,delete t[s]),d=c.cssHooks[o],d&&"expand"in d){f=d.expand(f),delete t[o];for(s in f)s in t||(t[s]=f[s],n[s]=u)}else n[o]=u}function ve(t,n,s){var o,u,f=0,d=ve.prefilters.length,m=c.Deferred().always(function(){delete g.elem}),g=function(){if(u)return!1;for(var A=bt||ii(),w=Math.max(0,_.startTime+_.duration-A),k=w/_.duration||0,F=1-k,K=0,q=_.tweens.length;K<q;K++)_.tweens[K].run(F);return m.notifyWith(t,[_,F,w]),F<1&&q?w:(q||m.notifyWith(t,[_,1,0]),m.resolveWith(t,[_]),!1)},_=m.promise({elem:t,props:c.extend({},n),opts:c.extend(!0,{specialEasing:{},easing:c.easing._default},s),originalProperties:n,originalOptions:s,startTime:bt||ii(),duration:s.duration,tweens:[],createTween:function(A,w){var k=c.Tween(t,_.opts,A,w,_.opts.specialEasing[A]||_.opts.easing);return _.tweens.push(k),k},stop:function(A){var w=0,k=A?_.tweens.length:0;if(u)return this;for(u=!0;w<k;w++)_.tweens[w].run(1);return A?(m.notifyWith(t,[_,1,0]),m.resolveWith(t,[_,A])):m.rejectWith(t,[_,A]),this}}),S=_.props;for(wo(S,_.opts.specialEasing);f<d;f++)if(o=ve.prefilters[f].call(_,t,S,_.opts),o)return $(o.stop)&&(c._queueHooks(_.elem,_.opts.queue).stop=o.stop.bind(o)),o;return c.map(S,si,_),$(_.opts.start)&&_.opts.start.call(t,_),_.progress(_.opts.progress).done(_.opts.done,_.opts.complete).fail(_.opts.fail).always(_.opts.always),c.fx.timer(c.extend(g,{elem:t,anim:_,queue:_.opts.queue})),_}c.Animation=c.extend(ve,{tweeners:{"*":[function(t,n){var s=this.createTween(t,n);return Br(s.elem,t,Mt.exec(n),s),s}]},tweener:function(t,n){$(t)?(n=t,t=["*"]):t=t.match(Ee);for(var s,o=0,u=t.length;o<u;o++)s=t[o],ve.tweeners[s]=ve.tweeners[s]||[],ve.tweeners[s].unshift(n)},prefilters:[bo],prefilter:function(t,n){n?ve.prefilters.unshift(t):ve.prefilters.push(t)}}),c.speed=function(t,n,s){var o=t&&typeof t=="object"?c.extend({},t):{complete:s||!s&&n||$(t)&&t,duration:t,easing:s&&n||n&&!$(n)&&n};return c.fx.off?o.duration=0:typeof o.duration!="number"&&(o.duration in c.fx.speeds?o.duration=c.fx.speeds[o.duration]:o.duration=c.fx.speeds._default),(o.queue==null||o.queue===!0)&&(o.queue="fx"),o.old=o.complete,o.complete=function(){$(o.old)&&o.old.call(this),o.queue&&c.dequeue(this,o.queue)},o},c.fn.extend({fadeTo:function(t,n,s,o){return this.filter(un).css("opacity",0).show().end().animate({opacity:n},t,s,o)},animate:function(t,n,s,o){var u=c.isEmptyObject(t),f=c.speed(n,s,o),d=function(){var m=ve(this,c.extend({},t),f);(u||D.get(this,"finish"))&&m.stop(!0)};return d.finish=d,u||f.queue===!1?this.each(d):this.queue(f.queue,d)},stop:function(t,n,s){var o=function(u){var f=u.stop;delete u.stop,f(s)};return typeof t!="string"&&(s=n,n=t,t=void 0),n&&this.queue(t||"fx",[]),this.each(function(){var u=!0,f=t!=null&&t+"queueHooks",d=c.timers,m=D.get(this);if(f)m[f]&&m[f].stop&&o(m[f]);else for(f in m)m[f]&&m[f].stop&&_o.test(f)&&o(m[f]);for(f=d.length;f--;)d[f].elem===this&&(t==null||d[f].queue===t)&&(d[f].anim.stop(s),u=!1,d.splice(f,1));(u||!s)&&c.dequeue(this,t)})},finish:function(t){return t!==!1&&(t=t||"fx"),this.each(function(){var n,s=D.get(this),o=s[t+"queue"],u=s[t+"queueHooks"],f=c.timers,d=o?o.length:0;for(s.finish=!0,c.queue(this,t,[]),u&&u.stop&&u.stop.call(this,!0),n=f.length;n--;)f[n].elem===this&&f[n].queue===t&&(f[n].anim.stop(!0),f.splice(n,1));for(n=0;n<d;n++)o[n]&&o[n].finish&&o[n].finish.call(this);delete s.finish})}}),c.each(["toggle","show","hide"],function(t,n){var s=c.fn[n];c.fn[n]=function(o,u,f){return o==null||typeof o=="boolean"?s.apply(this,arguments):this.animate(hn(n,!0),o,u,f)}}),c.each({slideDown:hn("show"),slideUp:hn("hide"),slideToggle:hn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(t,n){c.fn[t]=function(s,o,u){return this.animate(n,s,o,u)}}),c.timers=[],c.fx.tick=function(){var t,n=0,s=c.timers;for(bt=Date.now();n<s.length;n++)t=s[n],!t()&&s[n]===t&&s.splice(n--,1);s.length||c.fx.stop(),bt=void 0},c.fx.timer=function(t){c.timers.push(t),c.fx.start()},c.fx.interval=13,c.fx.start=function(){dn||(dn=!0,Gn())},c.fx.stop=function(){dn=null},c.fx.speeds={slow:600,fast:200,_default:400},c.fn.delay=function(t,n){return t=c.fx&&c.fx.speeds[t]||t,n=n||"fx",this.queue(n,function(s,o){var u=e.setTimeout(s,t);o.stop=function(){e.clearTimeout(u)}})},function(){var t=H.createElement("input"),n=H.createElement("select"),s=n.appendChild(H.createElement("option"));t.type="checkbox",M.checkOn=t.value!=="",M.optSelected=s.selected,t=H.createElement("input"),t.value="t",t.type="radio",M.radioValue=t.value==="t"}();var oi,Ht=c.expr.attrHandle;c.fn.extend({attr:function(t,n){return Ne(this,c.attr,t,n,arguments.length>1)},removeAttr:function(t){return this.each(function(){c.removeAttr(this,t)})}}),c.extend({attr:function(t,n,s){var o,u,f=t.nodeType;if(!(f===3||f===8||f===2)){if(typeof t.getAttribute>"u")return c.prop(t,n,s);if((f!==1||!c.isXMLDoc(t))&&(u=c.attrHooks[n.toLowerCase()]||(c.expr.match.bool.test(n)?oi:void 0)),s!==void 0){if(s===null){c.removeAttr(t,n);return}return u&&"set"in u&&(o=u.set(t,s,n))!==void 0?o:(t.setAttribute(n,s+""),s)}return u&&"get"in u&&(o=u.get(t,n))!==null?o:(o=c.find.attr(t,n),o??void 0)}},attrHooks:{type:{set:function(t,n){if(!M.radioValue&&n==="radio"&&Y(t,"input")){var s=t.value;return t.setAttribute("type",n),s&&(t.value=s),n}}}},removeAttr:function(t,n){var s,o=0,u=n&&n.match(Ee);if(u&&t.nodeType===1)for(;s=u[o++];)t.removeAttribute(s)}}),oi={set:function(t,n,s){return n===!1?c.removeAttr(t,s):t.setAttribute(s,s),s}},c.each(c.expr.match.bool.source.match(/\w+/g),function(t,n){var s=Ht[n]||c.find.attr;Ht[n]=function(o,u,f){var d,m,g=u.toLowerCase();return f||(m=Ht[g],Ht[g]=d,d=s(o,u,f)!=null?g:null,Ht[g]=m),d}});var Eo=/^(?:input|select|textarea|button)$/i,To=/^(?:a|area)$/i;c.fn.extend({prop:function(t,n){return Ne(this,c.prop,t,n,arguments.length>1)},removeProp:function(t){return this.each(function(){delete this[c.propFix[t]||t]})}}),c.extend({prop:function(t,n,s){var o,u,f=t.nodeType;if(!(f===3||f===8||f===2))return(f!==1||!c.isXMLDoc(t))&&(n=c.propFix[n]||n,u=c.propHooks[n]),s!==void 0?u&&"set"in u&&(o=u.set(t,s,n))!==void 0?o:t[n]=s:u&&"get"in u&&(o=u.get(t,n))!==null?o:t[n]},propHooks:{tabIndex:{get:function(t){var n=c.find.attr(t,"tabindex");return n?parseInt(n,10):Eo.test(t.nodeName)||To.test(t.nodeName)&&t.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),M.optSelected||(c.propHooks.selected={get:function(t){var n=t.parentNode;return n&&n.parentNode&&n.parentNode.selectedIndex,null},set:function(t){var n=t.parentNode;n&&(n.selectedIndex,n.parentNode&&n.parentNode.selectedIndex)}}),c.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){c.propFix[this.toLowerCase()]=this});function st(t){var n=t.match(Ee)||[];return n.join(" ")}function ot(t){return t.getAttribute&&t.getAttribute("class")||""}function Kn(t){return Array.isArray(t)?t:typeof t=="string"?t.match(Ee)||[]:[]}c.fn.extend({addClass:function(t){var n,s,o,u,f,d;return $(t)?this.each(function(m){c(this).addClass(t.call(this,m,ot(this)))}):(n=Kn(t),n.length?this.each(function(){if(o=ot(this),s=this.nodeType===1&&" "+st(o)+" ",s){for(f=0;f<n.length;f++)u=n[f],s.indexOf(" "+u+" ")<0&&(s+=u+" ");d=st(s),o!==d&&this.setAttribute("class",d)}}):this)},removeClass:function(t){var n,s,o,u,f,d;return $(t)?this.each(function(m){c(this).removeClass(t.call(this,m,ot(this)))}):arguments.length?(n=Kn(t),n.length?this.each(function(){if(o=ot(this),s=this.nodeType===1&&" "+st(o)+" ",s){for(f=0;f<n.length;f++)for(u=n[f];s.indexOf(" "+u+" ")>-1;)s=s.replace(" "+u+" "," ");d=st(s),o!==d&&this.setAttribute("class",d)}}):this):this.attr("class","")},toggleClass:function(t,n){var s,o,u,f,d=typeof t,m=d==="string"||Array.isArray(t);return $(t)?this.each(function(g){c(this).toggleClass(t.call(this,g,ot(this),n),n)}):typeof n=="boolean"&&m?n?this.addClass(t):this.removeClass(t):(s=Kn(t),this.each(function(){if(m)for(f=c(this),u=0;u<s.length;u++)o=s[u],f.hasClass(o)?f.removeClass(o):f.addClass(o);else(t===void 0||d==="boolean")&&(o=ot(this),o&&D.set(this,"__className__",o),this.setAttribute&&this.setAttribute("class",o||t===!1?"":D.get(this,"__className__")||""))}))},hasClass:function(t){var n,s,o=0;for(n=" "+t+" ";s=this[o++];)if(s.nodeType===1&&(" "+st(ot(s))+" ").indexOf(n)>-1)return!0;return!1}});var Io=/\r/g;c.fn.extend({val:function(t){var n,s,o,u=this[0];return arguments.length?(o=$(t),this.each(function(f){var d;this.nodeType===1&&(o?d=t.call(this,f,c(this).val()):d=t,d==null?d="":typeof d=="number"?d+="":Array.isArray(d)&&(d=c.map(d,function(m){return m==null?"":m+""})),n=c.valHooks[this.type]||c.valHooks[this.nodeName.toLowerCase()],(!n||!("set"in n)||n.set(this,d,"value")===void 0)&&(this.value=d))})):u?(n=c.valHooks[u.type]||c.valHooks[u.nodeName.toLowerCase()],n&&"get"in n&&(s=n.get(u,"value"))!==void 0?s:(s=u.value,typeof s=="string"?s.replace(Io,""):s??"")):void 0}}),c.extend({valHooks:{option:{get:function(t){var n=c.find.attr(t,"value");return n??st(c.text(t))}},select:{get:function(t){var n,s,o,u=t.options,f=t.selectedIndex,d=t.type==="select-one",m=d?null:[],g=d?f+1:u.length;for(f<0?o=g:o=d?f:0;o<g;o++)if(s=u[o],(s.selected||o===f)&&!s.disabled&&(!s.parentNode.disabled||!Y(s.parentNode,"optgroup"))){if(n=c(s).val(),d)return n;m.push(n)}return m},set:function(t,n){for(var s,o,u=t.options,f=c.makeArray(n),d=u.length;d--;)o=u[d],(o.selected=c.inArray(c.valHooks.option.get(o),f)>-1)&&(s=!0);return s||(t.selectedIndex=-1),f}}}}),c.each(["radio","checkbox"],function(){c.valHooks[this]={set:function(t,n){if(Array.isArray(n))return t.checked=c.inArray(c(t).val(),n)>-1}},M.checkOn||(c.valHooks[this].get=function(t){return t.getAttribute("value")===null?"on":t.value})});var Ft=e.location,ai={guid:Date.now()},Jn=/\?/;c.parseXML=function(t){var n,s;if(!t||typeof t!="string")return null;try{n=new e.DOMParser().parseFromString(t,"text/xml")}catch{}return s=n&&n.getElementsByTagName("parsererror")[0],(!n||s)&&c.error("Invalid XML: "+(s?c.map(s.childNodes,function(o){return o.textContent}).join(`
`):t)),n};var ci=/^(?:focusinfocus|focusoutblur)$/,ui=function(t){t.stopPropagation()};c.extend(c.event,{trigger:function(t,n,s,o){var u,f,d,m,g,_,S,A,w=[s||H],k=X.call(t,"type")?t.type:t,F=X.call(t,"namespace")?t.namespace.split("."):[];if(f=A=d=s=s||H,!(s.nodeType===3||s.nodeType===8)&&!ci.test(k+c.event.triggered)&&(k.indexOf(".")>-1&&(F=k.split("."),k=F.shift(),F.sort()),g=k.indexOf(":")<0&&"on"+k,t=t[c.expando]?t:new c.Event(k,typeof t=="object"&&t),t.isTrigger=o?2:3,t.namespace=F.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+F.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=s),n=n==null?[t]:c.makeArray(n,[t]),S=c.event.special[k]||{},!(!o&&S.trigger&&S.trigger.apply(s,n)===!1))){if(!o&&!S.noBubble&&!we(s)){for(m=S.delegateType||k,ci.test(m+k)||(f=f.parentNode);f;f=f.parentNode)w.push(f),d=f;d===(s.ownerDocument||H)&&w.push(d.defaultView||d.parentWindow||e)}for(u=0;(f=w[u++])&&!t.isPropagationStopped();)A=f,t.type=u>1?m:S.bindType||k,_=(D.get(f,"events")||Object.create(null))[t.type]&&D.get(f,"handle"),_&&_.apply(f,n),_=g&&f[g],_&&_.apply&&Dt(f)&&(t.result=_.apply(f,n),t.result===!1&&t.preventDefault());return t.type=k,!o&&!t.isDefaultPrevented()&&(!S._default||S._default.apply(w.pop(),n)===!1)&&Dt(s)&&g&&$(s[k])&&!we(s)&&(d=s[g],d&&(s[g]=null),c.event.triggered=k,t.isPropagationStopped()&&A.addEventListener(k,ui),s[k](),t.isPropagationStopped()&&A.removeEventListener(k,ui),c.event.triggered=void 0,d&&(s[g]=d)),t.result}},simulate:function(t,n,s){var o=c.extend(new c.Event,s,{type:t,isSimulated:!0});c.event.trigger(o,null,n)}}),c.fn.extend({trigger:function(t,n){return this.each(function(){c.event.trigger(t,n,this)})},triggerHandler:function(t,n){var s=this[0];if(s)return c.event.trigger(t,n,s,!0)}});var So=/\[\]$/,li=/\r?\n/g,Co=/^(?:submit|button|image|reset|file)$/i,Ao=/^(?:input|select|textarea|keygen)/i;function Xn(t,n,s,o){var u;if(Array.isArray(n))c.each(n,function(f,d){s||So.test(t)?o(t,d):Xn(t+"["+(typeof d=="object"&&d!=null?f:"")+"]",d,s,o)});else if(!s&&Oe(n)==="object")for(u in n)Xn(t+"["+u+"]",n[u],s,o);else o(t,n)}c.param=function(t,n){var s,o=[],u=function(f,d){var m=$(d)?d():d;o[o.length]=encodeURIComponent(f)+"="+encodeURIComponent(m??"")};if(t==null)return"";if(Array.isArray(t)||t.jquery&&!c.isPlainObject(t))c.each(t,function(){u(this.name,this.value)});else for(s in t)Xn(s,t[s],n,u);return o.join("&")},c.fn.extend({serialize:function(){return c.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var t=c.prop(this,"elements");return t?c.makeArray(t):this}).filter(function(){var t=this.type;return this.name&&!c(this).is(":disabled")&&Ao.test(this.nodeName)&&!Co.test(t)&&(this.checked||!Ut.test(t))}).map(function(t,n){var s=c(this).val();return s==null?null:Array.isArray(s)?c.map(s,function(o){return{name:n.name,value:o.replace(li,`\r
`)}}):{name:n.name,value:s.replace(li,`\r
`)}}).get()}});var ko=/%20/g,Po=/#.*$/,Ro=/([?&])_=[^&]*/,Oo=/^(.*?):[ \t]*([^\r\n]*)$/mg,xo=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,No=/^(?:GET|HEAD)$/,Do=/^\/\//,fi={},Yn={},di="*/".concat("*"),Qn=H.createElement("a");Qn.href=Ft.href;function hi(t){return function(n,s){typeof n!="string"&&(s=n,n="*");var o,u=0,f=n.toLowerCase().match(Ee)||[];if($(s))for(;o=f[u++];)o[0]==="+"?(o=o.slice(1)||"*",(t[o]=t[o]||[]).unshift(s)):(t[o]=t[o]||[]).push(s)}}function pi(t,n,s,o){var u={},f=t===Yn;function d(m){var g;return u[m]=!0,c.each(t[m]||[],function(_,S){var A=S(n,s,o);if(typeof A=="string"&&!f&&!u[A])return n.dataTypes.unshift(A),d(A),!1;if(f)return!(g=A)}),g}return d(n.dataTypes[0])||!u["*"]&&d("*")}function Zn(t,n){var s,o,u=c.ajaxSettings.flatOptions||{};for(s in n)n[s]!==void 0&&((u[s]?t:o||(o={}))[s]=n[s]);return o&&c.extend(!0,t,o),t}function Lo(t,n,s){for(var o,u,f,d,m=t.contents,g=t.dataTypes;g[0]==="*";)g.shift(),o===void 0&&(o=t.mimeType||n.getResponseHeader("Content-Type"));if(o){for(u in m)if(m[u]&&m[u].test(o)){g.unshift(u);break}}if(g[0]in s)f=g[0];else{for(u in s){if(!g[0]||t.converters[u+" "+g[0]]){f=u;break}d||(d=u)}f=f||d}if(f)return f!==g[0]&&g.unshift(f),s[f]}function Mo(t,n,s,o){var u,f,d,m,g,_={},S=t.dataTypes.slice();if(S[1])for(d in t.converters)_[d.toLowerCase()]=t.converters[d];for(f=S.shift();f;)if(t.responseFields[f]&&(s[t.responseFields[f]]=n),!g&&o&&t.dataFilter&&(n=t.dataFilter(n,t.dataType)),g=f,f=S.shift(),f){if(f==="*")f=g;else if(g!=="*"&&g!==f){if(d=_[g+" "+f]||_["* "+f],!d){for(u in _)if(m=u.split(" "),m[1]===f&&(d=_[g+" "+m[0]]||_["* "+m[0]],d)){d===!0?d=_[u]:_[u]!==!0&&(f=m[0],S.unshift(m[1]));break}}if(d!==!0)if(d&&t.throws)n=d(n);else try{n=d(n)}catch(A){return{state:"parsererror",error:d?A:"No conversion from "+g+" to "+f}}}}return{state:"success",data:n}}c.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ft.href,type:"GET",isLocal:xo.test(Ft.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":di,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":c.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(t,n){return n?Zn(Zn(t,c.ajaxSettings),n):Zn(c.ajaxSettings,t)},ajaxPrefilter:hi(fi),ajaxTransport:hi(Yn),ajax:function(t,n){typeof t=="object"&&(n=t,t=void 0),n=n||{};var s,o,u,f,d,m,g,_,S,A,w=c.ajaxSetup({},n),k=w.context||w,F=w.context&&(k.nodeType||k.jquery)?c(k):c.event,K=c.Deferred(),q=c.Callbacks("once memory"),se=w.statusCode||{},re={},Ie={},Se="canceled",z={readyState:0,getResponseHeader:function(J){var ne;if(g){if(!f)for(f={};ne=Oo.exec(u);)f[ne[1].toLowerCase()+" "]=(f[ne[1].toLowerCase()+" "]||[]).concat(ne[2]);ne=f[J.toLowerCase()+" "]}return ne==null?null:ne.join(", ")},getAllResponseHeaders:function(){return g?u:null},setRequestHeader:function(J,ne){return g==null&&(J=Ie[J.toLowerCase()]=Ie[J.toLowerCase()]||J,re[J]=ne),this},overrideMimeType:function(J){return g==null&&(w.mimeType=J),this},statusCode:function(J){var ne;if(J)if(g)z.always(J[z.status]);else for(ne in J)se[ne]=[se[ne],J[ne]];return this},abort:function(J){var ne=J||Se;return s&&s.abort(ne),at(0,ne),this}};if(K.promise(z),w.url=((t||w.url||Ft.href)+"").replace(Do,Ft.protocol+"//"),w.type=n.method||n.type||w.method||w.type,w.dataTypes=(w.dataType||"*").toLowerCase().match(Ee)||[""],w.crossDomain==null){m=H.createElement("a");try{m.href=w.url,m.href=m.href,w.crossDomain=Qn.protocol+"//"+Qn.host!=m.protocol+"//"+m.host}catch{w.crossDomain=!0}}if(w.data&&w.processData&&typeof w.data!="string"&&(w.data=c.param(w.data,w.traditional)),pi(fi,w,n,z),g)return z;_=c.event&&w.global,_&&c.active++===0&&c.event.trigger("ajaxStart"),w.type=w.type.toUpperCase(),w.hasContent=!No.test(w.type),o=w.url.replace(Po,""),w.hasContent?w.data&&w.processData&&(w.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(w.data=w.data.replace(ko,"+")):(A=w.url.slice(o.length),w.data&&(w.processData||typeof w.data=="string")&&(o+=(Jn.test(o)?"&":"?")+w.data,delete w.data),w.cache===!1&&(o=o.replace(Ro,"$1"),A=(Jn.test(o)?"&":"?")+"_="+ai.guid+++A),w.url=o+A),w.ifModified&&(c.lastModified[o]&&z.setRequestHeader("If-Modified-Since",c.lastModified[o]),c.etag[o]&&z.setRequestHeader("If-None-Match",c.etag[o])),(w.data&&w.hasContent&&w.contentType!==!1||n.contentType)&&z.setRequestHeader("Content-Type",w.contentType),z.setRequestHeader("Accept",w.dataTypes[0]&&w.accepts[w.dataTypes[0]]?w.accepts[w.dataTypes[0]]+(w.dataTypes[0]!=="*"?", "+di+"; q=0.01":""):w.accepts["*"]);for(S in w.headers)z.setRequestHeader(S,w.headers[S]);if(w.beforeSend&&(w.beforeSend.call(k,z,w)===!1||g))return z.abort();if(Se="abort",q.add(w.complete),z.done(w.success),z.fail(w.error),s=pi(Yn,w,n,z),!s)at(-1,"No Transport");else{if(z.readyState=1,_&&F.trigger("ajaxSend",[z,w]),g)return z;w.async&&w.timeout>0&&(d=e.setTimeout(function(){z.abort("timeout")},w.timeout));try{g=!1,s.send(re,at)}catch(J){if(g)throw J;at(-1,J)}}function at(J,ne,$t,tr){var Ce,qt,Ae,ze,Ge,pe=ne;g||(g=!0,d&&e.clearTimeout(d),s=void 0,u=tr||"",z.readyState=J>0?4:0,Ce=J>=200&&J<300||J===304,$t&&(ze=Lo(w,z,$t)),!Ce&&c.inArray("script",w.dataTypes)>-1&&c.inArray("json",w.dataTypes)<0&&(w.converters["text script"]=function(){}),ze=Mo(w,ze,z,Ce),Ce?(w.ifModified&&(Ge=z.getResponseHeader("Last-Modified"),Ge&&(c.lastModified[o]=Ge),Ge=z.getResponseHeader("etag"),Ge&&(c.etag[o]=Ge)),J===204||w.type==="HEAD"?pe="nocontent":J===304?pe="notmodified":(pe=ze.state,qt=ze.data,Ae=ze.error,Ce=!Ae)):(Ae=pe,(J||!pe)&&(pe="error",J<0&&(J=0))),z.status=J,z.statusText=(ne||pe)+"",Ce?K.resolveWith(k,[qt,pe,z]):K.rejectWith(k,[z,pe,Ae]),z.statusCode(se),se=void 0,_&&F.trigger(Ce?"ajaxSuccess":"ajaxError",[z,w,Ce?qt:Ae]),q.fireWith(k,[z,pe]),_&&(F.trigger("ajaxComplete",[z,w]),--c.active||c.event.trigger("ajaxStop")))}return z},getJSON:function(t,n,s){return c.get(t,n,s,"json")},getScript:function(t,n){return c.get(t,void 0,n,"script")}}),c.each(["get","post"],function(t,n){c[n]=function(s,o,u,f){return $(o)&&(f=f||u,u=o,o=void 0),c.ajax(c.extend({url:s,type:n,dataType:f,data:o,success:u},c.isPlainObject(s)&&s))}}),c.ajaxPrefilter(function(t){var n;for(n in t.headers)n.toLowerCase()==="content-type"&&(t.contentType=t.headers[n]||"")}),c._evalUrl=function(t,n,s){return c.ajax({url:t,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(o){c.globalEval(o,n,s)}})},c.fn.extend({wrapAll:function(t){var n;return this[0]&&($(t)&&(t=t.call(this[0])),n=c(t,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&n.insertBefore(this[0]),n.map(function(){for(var s=this;s.firstElementChild;)s=s.firstElementChild;return s}).append(this)),this},wrapInner:function(t){return $(t)?this.each(function(n){c(this).wrapInner(t.call(this,n))}):this.each(function(){var n=c(this),s=n.contents();s.length?s.wrapAll(t):n.append(t)})},wrap:function(t){var n=$(t);return this.each(function(s){c(this).wrapAll(n?t.call(this,s):t)})},unwrap:function(t){return this.parent(t).not("body").each(function(){c(this).replaceWith(this.childNodes)}),this}}),c.expr.pseudos.hidden=function(t){return!c.expr.pseudos.visible(t)},c.expr.pseudos.visible=function(t){return!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)},c.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch{}};var Uo={0:200,1223:204},Bt=c.ajaxSettings.xhr();M.cors=!!Bt&&"withCredentials"in Bt,M.ajax=Bt=!!Bt,c.ajaxTransport(function(t){var n,s;if(M.cors||Bt&&!t.crossDomain)return{send:function(o,u){var f,d=t.xhr();if(d.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(f in t.xhrFields)d[f]=t.xhrFields[f];t.mimeType&&d.overrideMimeType&&d.overrideMimeType(t.mimeType),!t.crossDomain&&!o["X-Requested-With"]&&(o["X-Requested-With"]="XMLHttpRequest");for(f in o)d.setRequestHeader(f,o[f]);n=function(m){return function(){n&&(n=s=d.onload=d.onerror=d.onabort=d.ontimeout=d.onreadystatechange=null,m==="abort"?d.abort():m==="error"?typeof d.status!="number"?u(0,"error"):u(d.status,d.statusText):u(Uo[d.status]||d.status,d.statusText,(d.responseType||"text")!=="text"||typeof d.responseText!="string"?{binary:d.response}:{text:d.responseText},d.getAllResponseHeaders()))}},d.onload=n(),s=d.onerror=d.ontimeout=n("error"),d.onabort!==void 0?d.onabort=s:d.onreadystatechange=function(){d.readyState===4&&e.setTimeout(function(){n&&s()})},n=n("abort");try{d.send(t.hasContent&&t.data||null)}catch(m){if(n)throw m}},abort:function(){n&&n()}}}),c.ajaxPrefilter(function(t){t.crossDomain&&(t.contents.script=!1)}),c.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(t){return c.globalEval(t),t}}}),c.ajaxPrefilter("script",function(t){t.cache===void 0&&(t.cache=!1),t.crossDomain&&(t.type="GET")}),c.ajaxTransport("script",function(t){if(t.crossDomain||t.scriptAttrs){var n,s;return{send:function(o,u){n=c("<script>").attr(t.scriptAttrs||{}).prop({charset:t.scriptCharset,src:t.url}).on("load error",s=function(f){n.remove(),s=null,f&&u(f.type==="error"?404:200,f.type)}),H.head.appendChild(n[0])},abort:function(){s&&s()}}}});var gi=[],er=/(=)\?(?=&|$)|\?\?/;c.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var t=gi.pop()||c.expando+"_"+ai.guid++;return this[t]=!0,t}}),c.ajaxPrefilter("json jsonp",function(t,n,s){var o,u,f,d=t.jsonp!==!1&&(er.test(t.url)?"url":typeof t.data=="string"&&(t.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&er.test(t.data)&&"data");if(d||t.dataTypes[0]==="jsonp")return o=t.jsonpCallback=$(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,d?t[d]=t[d].replace(er,"$1"+o):t.jsonp!==!1&&(t.url+=(Jn.test(t.url)?"&":"?")+t.jsonp+"="+o),t.converters["script json"]=function(){return f||c.error(o+" was not called"),f[0]},t.dataTypes[0]="json",u=e[o],e[o]=function(){f=arguments},s.always(function(){u===void 0?c(e).removeProp(o):e[o]=u,t[o]&&(t.jsonpCallback=n.jsonpCallback,gi.push(o)),f&&$(u)&&u(f[0]),f=u=void 0}),"script"}),M.createHTMLDocument=function(){var t=H.implementation.createHTMLDocument("").body;return t.innerHTML="<form></form><form></form>",t.childNodes.length===2}(),c.parseHTML=function(t,n,s){if(typeof t!="string")return[];typeof n=="boolean"&&(s=n,n=!1);var o,u,f;return n||(M.createHTMLDocument?(n=H.implementation.createHTMLDocument(""),o=n.createElement("base"),o.href=H.location.href,n.head.appendChild(o)):n=H),u=Lr.exec(t),f=!s&&[],u?[n.createElement(u[1])]:(u=Vr([t],n,f),f&&f.length&&c(f).remove(),c.merge([],u.childNodes))},c.fn.load=function(t,n,s){var o,u,f,d=this,m=t.indexOf(" ");return m>-1&&(o=st(t.slice(m)),t=t.slice(0,m)),$(n)?(s=n,n=void 0):n&&typeof n=="object"&&(u="POST"),d.length>0&&c.ajax({url:t,type:u||"GET",dataType:"html",data:n}).done(function(g){f=arguments,d.html(o?c("<div>").append(c.parseHTML(g)).find(o):g)}).always(s&&function(g,_){d.each(function(){s.apply(this,f||[g.responseText,_,g])})}),this},c.expr.pseudos.animated=function(t){return c.grep(c.timers,function(n){return t===n.elem}).length},c.offset={setOffset:function(t,n,s){var o,u,f,d,m,g,_,S=c.css(t,"position"),A=c(t),w={};S==="static"&&(t.style.position="relative"),m=A.offset(),f=c.css(t,"top"),g=c.css(t,"left"),_=(S==="absolute"||S==="fixed")&&(f+g).indexOf("auto")>-1,_?(o=A.position(),d=o.top,u=o.left):(d=parseFloat(f)||0,u=parseFloat(g)||0),$(n)&&(n=n.call(t,s,c.extend({},m))),n.top!=null&&(w.top=n.top-m.top+d),n.left!=null&&(w.left=n.left-m.left+u),"using"in n?n.using.call(t,w):A.css(w)}},c.fn.extend({offset:function(t){if(arguments.length)return t===void 0?this:this.each(function(u){c.offset.setOffset(this,t,u)});var n,s,o=this[0];if(o)return o.getClientRects().length?(n=o.getBoundingClientRect(),s=o.ownerDocument.defaultView,{top:n.top+s.pageYOffset,left:n.left+s.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var t,n,s,o=this[0],u={top:0,left:0};if(c.css(o,"position")==="fixed")n=o.getBoundingClientRect();else{for(n=this.offset(),s=o.ownerDocument,t=o.offsetParent||s.documentElement;t&&(t===s.body||t===s.documentElement)&&c.css(t,"position")==="static";)t=t.parentNode;t&&t!==o&&t.nodeType===1&&(u=c(t).offset(),u.top+=c.css(t,"borderTopWidth",!0),u.left+=c.css(t,"borderLeftWidth",!0))}return{top:n.top-u.top-c.css(o,"marginTop",!0),left:n.left-u.left-c.css(o,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent;t&&c.css(t,"position")==="static";)t=t.offsetParent;return t||it})}}),c.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var s=n==="pageYOffset";c.fn[t]=function(o){return Ne(this,function(u,f,d){var m;if(we(u)?m=u:u.nodeType===9&&(m=u.defaultView),d===void 0)return m?m[n]:u[f];m?m.scrollTo(s?m.pageXOffset:d,s?d:m.pageYOffset):u[f]=d},t,o,arguments.length)}}),c.each(["top","left"],function(t,n){c.cssHooks[n]=Yr(M.pixelPosition,function(s,o){if(o)return o=jt(s,n),qn.test(o)?c(s).position()[n]+"px":o})}),c.each({Height:"height",Width:"width"},function(t,n){c.each({padding:"inner"+t,content:n,"":"outer"+t},function(s,o){c.fn[o]=function(u,f){var d=arguments.length&&(s||typeof u!="boolean"),m=s||(u===!0||f===!0?"margin":"border");return Ne(this,function(g,_,S){var A;return we(g)?o.indexOf("outer")===0?g["inner"+t]:g.document.documentElement["client"+t]:g.nodeType===9?(A=g.documentElement,Math.max(g.body["scroll"+t],A["scroll"+t],g.body["offset"+t],A["offset"+t],A["client"+t])):S===void 0?c.css(g,_,m):c.style(g,_,S,m)},n,d?u:void 0,d)}})}),c.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(t,n){c.fn[n]=function(s){return this.on(n,s)}}),c.fn.extend({bind:function(t,n,s){return this.on(t,null,n,s)},unbind:function(t,n){return this.off(t,null,n)},delegate:function(t,n,s,o){return this.on(n,t,s,o)},undelegate:function(t,n,s){return arguments.length===1?this.off(t,"**"):this.off(n,t||"**",s)},hover:function(t,n){return this.on("mouseenter",t).on("mouseleave",n||t)}}),c.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(t,n){c.fn[n]=function(s,o){return arguments.length>0?this.on(n,null,s,o):this.trigger(n)}});var jo=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;c.proxy=function(t,n){var s,o,u;if(typeof n=="string"&&(s=t[n],n=t,t=s),!!$(t))return o=h.call(arguments,2),u=function(){return t.apply(n||this,o.concat(h.call(arguments)))},u.guid=t.guid=t.guid||c.guid++,u},c.holdReady=function(t){t?c.readyWait++:c.ready(!0)},c.isArray=Array.isArray,c.parseJSON=JSON.parse,c.nodeName=Y,c.isFunction=$,c.isWindow=we,c.camelCase=Te,c.type=Oe,c.now=Date.now,c.isNumeric=function(t){var n=c.type(t);return(n==="number"||n==="string")&&!isNaN(t-parseFloat(t))},c.trim=function(t){return t==null?"":(t+"").replace(jo,"$1")};var Ho=e.jQuery,Fo=e.$;return c.noConflict=function(t){return e.$===c&&(e.$=Fo),t&&e.jQuery===c&&(e.jQuery=Ho),c},typeof r>"u"&&(e.jQuery=e.$=c),c})}(_n)),_n.exports}var Yo=Xo();const Wl=Ko(Yo);var bi={};/**
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
 */const Ji=function(i){const e=[];let r=0;for(let a=0;a<i.length;a++){let l=i.charCodeAt(a);l<128?e[r++]=l:l<2048?(e[r++]=l>>6|192,e[r++]=l&63|128):(l&64512)===55296&&a+1<i.length&&(i.charCodeAt(a+1)&64512)===56320?(l=65536+((l&1023)<<10)+(i.charCodeAt(++a)&1023),e[r++]=l>>18|240,e[r++]=l>>12&63|128,e[r++]=l>>6&63|128,e[r++]=l&63|128):(e[r++]=l>>12|224,e[r++]=l>>6&63|128,e[r++]=l&63|128)}return e},Qo=function(i){const e=[];let r=0,a=0;for(;r<i.length;){const l=i[r++];if(l<128)e[a++]=String.fromCharCode(l);else if(l>191&&l<224){const h=i[r++];e[a++]=String.fromCharCode((l&31)<<6|h&63)}else if(l>239&&l<365){const h=i[r++],v=i[r++],I=i[r++],E=((l&7)<<18|(h&63)<<12|(v&63)<<6|I&63)-65536;e[a++]=String.fromCharCode(55296+(E>>10)),e[a++]=String.fromCharCode(56320+(E&1023))}else{const h=i[r++],v=i[r++];e[a++]=String.fromCharCode((l&15)<<12|(h&63)<<6|v&63)}}return e.join("")},Xi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let l=0;l<i.length;l+=3){const h=i[l],v=l+1<i.length,I=v?i[l+1]:0,E=l+2<i.length,R=E?i[l+2]:0,G=h>>2,X=(h&3)<<4|I>>4;let ie=(I&15)<<2|R>>6,me=R&63;E||(me=64,v||(ie=64)),a.push(r[G],r[X],r[ie],r[me])}return a.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(Ji(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):Qo(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const r=e?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let l=0;l<i.length;){const h=r[i.charAt(l++)],I=l<i.length?r[i.charAt(l)]:0;++l;const R=l<i.length?r[i.charAt(l)]:64;++l;const X=l<i.length?r[i.charAt(l)]:64;if(++l,h==null||I==null||R==null||X==null)throw new Zo;const ie=h<<2|I>>4;if(a.push(ie),R!==64){const me=I<<4&240|R>>2;if(a.push(me),X!==64){const M=R<<6&192|X;a.push(M)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class Zo extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ea=function(i){const e=Ji(i);return Xi.encodeByteArray(e,!0)},In=function(i){return ea(i).replace(/\./g,"")},Yi=function(i){try{return Xi.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ta(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const na=()=>ta().__FIREBASE_DEFAULTS__,ra=()=>{if(typeof process>"u"||typeof bi>"u")return;const i=bi.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},ia=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&Yi(i[1]);return e&&JSON.parse(e)},Nn=()=>{try{return na()||ra()||ia()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Qi=i=>{var e,r;return(r=(e=Nn())===null||e===void 0?void 0:e.emulatorHosts)===null||r===void 0?void 0:r[i]},Vl=i=>{const e=Qi(i);if(!e)return;const r=e.lastIndexOf(":");if(r<=0||r+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const a=parseInt(e.substring(r+1),10);return e[0]==="["?[e.substring(1,r-1),a]:[e.substring(0,r),a]},Zi=()=>{var i;return(i=Nn())===null||i===void 0?void 0:i.config},es=i=>{var e;return(e=Nn())===null||e===void 0?void 0:e[`_${i}`]};/**
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
 */class sa{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,r)=>{this.resolve=e,this.reject=r})}wrapCallback(e){return(r,a)=>{r?this.reject(r):this.resolve(a),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(r):e(r,a))}}}/**
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
 */function zl(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const r={alg:"none",type:"JWT"},a=e||"demo-project",l=i.iat||0,h=i.sub||i.user_id;if(!h)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const v=Object.assign({iss:`https://securetoken.google.com/${a}`,aud:a,iat:l,exp:l+3600,auth_time:l,sub:h,user_id:h,firebase:{sign_in_provider:"custom",identities:{}}},i);return[In(JSON.stringify(r)),In(JSON.stringify(v)),""].join(".")}/**
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
 */function ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function oa(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ce())}function aa(){var i;const e=(i=Nn())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ca(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ua(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function la(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fa(){const i=ce();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function Gl(){return!aa()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function da(){try{return typeof indexedDB=="object"}catch{return!1}}function ha(){return new Promise((i,e)=>{try{let r=!0;const a="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(a);l.onsuccess=()=>{l.result.close(),r||self.indexedDB.deleteDatabase(a),i(!0)},l.onupgradeneeded=()=>{r=!1},l.onerror=()=>{var h;e(((h=l.error)===null||h===void 0?void 0:h.message)||"")}}catch(r){e(r)}})}/**
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
 */const pa="FirebaseError";class nt extends Error{constructor(e,r,a){super(r),this.code=e,this.customData=a,this.name=pa,Object.setPrototypeOf(this,nt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qt.prototype.create)}}class Qt{constructor(e,r,a){this.service=e,this.serviceName=r,this.errors=a}create(e,...r){const a=r[0]||{},l=`${this.service}/${e}`,h=this.errors[e],v=h?ga(h,a):"Error",I=`${this.serviceName}: ${v} (${l}).`;return new nt(l,I,a)}}function ga(i,e){return i.replace(ma,(r,a)=>{const l=e[a];return l!=null?String(l):`<${a}?>`})}const ma=/\{\$([^}]+)}/g;function va(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function Sn(i,e){if(i===e)return!0;const r=Object.keys(i),a=Object.keys(e);for(const l of r){if(!a.includes(l))return!1;const h=i[l],v=e[l];if(wi(h)&&wi(v)){if(!Sn(h,v))return!1}else if(h!==v)return!1}for(const l of a)if(!r.includes(l))return!1;return!0}function wi(i){return i!==null&&typeof i=="object"}/**
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
 */function Zt(i){const e=[];for(const[r,a]of Object.entries(i))Array.isArray(a)?a.forEach(l=>{e.push(encodeURIComponent(r)+"="+encodeURIComponent(l))}):e.push(encodeURIComponent(r)+"="+encodeURIComponent(a));return e.length?"&"+e.join("&"):""}function Vt(i){const e={};return i.replace(/^\?/,"").split("&").forEach(a=>{if(a){const[l,h]=a.split("=");e[decodeURIComponent(l)]=decodeURIComponent(h)}}),e}function zt(i){const e=i.indexOf("?");if(!e)return"";const r=i.indexOf("#",e);return i.substring(e,r>0?r:void 0)}function ya(i,e){const r=new _a(i,e);return r.subscribe.bind(r)}class _a{constructor(e,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{e(this)}).catch(a=>{this.error(a)})}next(e){this.forEachObserver(r=>{r.next(e)})}error(e){this.forEachObserver(r=>{r.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,r,a){let l;if(e===void 0&&r===void 0&&a===void 0)throw new Error("Missing Observer.");ba(e,["next","error","complete"])?l=e:l={next:e,error:r,complete:a},l.next===void 0&&(l.next=cr),l.error===void 0&&(l.error=cr),l.complete===void 0&&(l.complete=cr);const h=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),h}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,e)}sendOne(e,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{r(this.observers[e])}catch(a){typeof console<"u"&&console.error&&console.error(a)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ba(i,e){if(typeof i!="object"||i===null)return!1;for(const r of e)if(r in i&&typeof i[r]=="function")return!0;return!1}function cr(){}/**
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
 */function qe(i){return i&&i._delegate?i._delegate:i}class kt{constructor(e,r,a){this.name=e,this.instanceFactory=r,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ut="[DEFAULT]";/**
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
 */class wa{constructor(e,r){this.name=e,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const r=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(r)){const a=new sa;if(this.instancesDeferred.set(r,a),this.isInitialized(r)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:r});l&&a.resolve(l)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(e){var r;const a=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),l=(r=e==null?void 0:e.optional)!==null&&r!==void 0?r:!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(h){if(l)return null;throw h}else{if(l)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ta(e))try{this.getOrInitializeService({instanceIdentifier:ut})}catch{}for(const[r,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);try{const h=this.getOrInitializeService({instanceIdentifier:l});a.resolve(h)}catch{}}}}clearInstance(e=ut){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...e.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ut){return this.instances.has(e)}getOptions(e=ut){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:r={}}=e,a=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:a,options:r});for(const[h,v]of this.instancesDeferred.entries()){const I=this.normalizeInstanceIdentifier(h);a===I&&v.resolve(l)}return l}onInit(e,r){var a;const l=this.normalizeInstanceIdentifier(r),h=(a=this.onInitCallbacks.get(l))!==null&&a!==void 0?a:new Set;h.add(e),this.onInitCallbacks.set(l,h);const v=this.instances.get(l);return v&&e(v,l),()=>{h.delete(e)}}invokeOnInitCallbacks(e,r){const a=this.onInitCallbacks.get(r);if(a)for(const l of a)try{l(e,r)}catch{}}getOrInitializeService({instanceIdentifier:e,options:r={}}){let a=this.instances.get(e);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:Ea(e),options:r}),this.instances.set(e,a),this.instancesOptions.set(e,r),this.invokeOnInitCallbacks(a,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,a)}catch{}return a||null}normalizeInstanceIdentifier(e=ut){return this.component?this.component.multipleInstances?e:ut:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ea(i){return i===ut?void 0:i}function Ta(i){return i.instantiationMode==="EAGER"}/**
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
 */class Ia{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const r=this.getProvider(e.name);if(r.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);r.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const r=new wa(e,this);return this.providers.set(e,r),r}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ee;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(ee||(ee={}));const Sa={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},Ca=ee.INFO,Aa={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},ka=(i,e,...r)=>{if(e<i.logLevel)return;const a=new Date().toISOString(),l=Aa[e];if(l)console[l](`[${a}]  ${i.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ts{constructor(e){this.name=e,this._logLevel=Ca,this._logHandler=ka,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Sa[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const Pa=(i,e)=>e.some(r=>i instanceof r);let Ei,Ti;function Ra(){return Ei||(Ei=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Oa(){return Ti||(Ti=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ns=new WeakMap,gr=new WeakMap,rs=new WeakMap,ur=new WeakMap,Tr=new WeakMap;function xa(i){const e=new Promise((r,a)=>{const l=()=>{i.removeEventListener("success",h),i.removeEventListener("error",v)},h=()=>{r(et(i.result)),l()},v=()=>{a(i.error),l()};i.addEventListener("success",h),i.addEventListener("error",v)});return e.then(r=>{r instanceof IDBCursor&&ns.set(r,i)}).catch(()=>{}),Tr.set(e,i),e}function Na(i){if(gr.has(i))return;const e=new Promise((r,a)=>{const l=()=>{i.removeEventListener("complete",h),i.removeEventListener("error",v),i.removeEventListener("abort",v)},h=()=>{r(),l()},v=()=>{a(i.error||new DOMException("AbortError","AbortError")),l()};i.addEventListener("complete",h),i.addEventListener("error",v),i.addEventListener("abort",v)});gr.set(i,e)}let mr={get(i,e,r){if(i instanceof IDBTransaction){if(e==="done")return gr.get(i);if(e==="objectStoreNames")return i.objectStoreNames||rs.get(i);if(e==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return et(i[e])},set(i,e,r){return i[e]=r,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function Da(i){mr=i(mr)}function La(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...r){const a=i.call(lr(this),e,...r);return rs.set(a,e.sort?e.sort():[e]),et(a)}:Oa().includes(i)?function(...e){return i.apply(lr(this),e),et(ns.get(this))}:function(...e){return et(i.apply(lr(this),e))}}function Ma(i){return typeof i=="function"?La(i):(i instanceof IDBTransaction&&Na(i),Pa(i,Ra())?new Proxy(i,mr):i)}function et(i){if(i instanceof IDBRequest)return xa(i);if(ur.has(i))return ur.get(i);const e=Ma(i);return e!==i&&(ur.set(i,e),Tr.set(e,i)),e}const lr=i=>Tr.get(i);function Ua(i,e,{blocked:r,upgrade:a,blocking:l,terminated:h}={}){const v=indexedDB.open(i,e),I=et(v);return a&&v.addEventListener("upgradeneeded",E=>{a(et(v.result),E.oldVersion,E.newVersion,et(v.transaction),E)}),r&&v.addEventListener("blocked",E=>r(E.oldVersion,E.newVersion,E)),I.then(E=>{h&&E.addEventListener("close",()=>h()),l&&E.addEventListener("versionchange",R=>l(R.oldVersion,R.newVersion,R))}).catch(()=>{}),I}const ja=["get","getKey","getAll","getAllKeys","count"],Ha=["put","add","delete","clear"],fr=new Map;function Ii(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(fr.get(e))return fr.get(e);const r=e.replace(/FromIndex$/,""),a=e!==r,l=Ha.includes(r);if(!(r in(a?IDBIndex:IDBObjectStore).prototype)||!(l||ja.includes(r)))return;const h=async function(v,...I){const E=this.transaction(v,l?"readwrite":"readonly");let R=E.store;return a&&(R=R.index(I.shift())),(await Promise.all([R[r](...I),l&&E.done]))[0]};return fr.set(e,h),h}Da(i=>({...i,get:(e,r,a)=>Ii(e,r)||i.get(e,r,a),has:(e,r)=>!!Ii(e,r)||i.has(e,r)}));/**
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
 */class Fa{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(Ba(r)){const a=r.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(r=>r).join(" ")}}function Ba(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vr="@firebase/app",Si="0.11.0";/**
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
 */const Be=new ts("@firebase/app"),$a="@firebase/app-compat",qa="@firebase/analytics-compat",Wa="@firebase/analytics",Va="@firebase/app-check-compat",za="@firebase/app-check",Ga="@firebase/auth",Ka="@firebase/auth-compat",Ja="@firebase/database",Xa="@firebase/data-connect",Ya="@firebase/database-compat",Qa="@firebase/functions",Za="@firebase/functions-compat",ec="@firebase/installations",tc="@firebase/installations-compat",nc="@firebase/messaging",rc="@firebase/messaging-compat",ic="@firebase/performance",sc="@firebase/performance-compat",oc="@firebase/remote-config",ac="@firebase/remote-config-compat",cc="@firebase/storage",uc="@firebase/storage-compat",lc="@firebase/firestore",fc="@firebase/vertexai",dc="@firebase/firestore-compat",hc="firebase",pc="11.3.0";/**
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
 */const yr="[DEFAULT]",gc={[vr]:"fire-core",[$a]:"fire-core-compat",[Wa]:"fire-analytics",[qa]:"fire-analytics-compat",[za]:"fire-app-check",[Va]:"fire-app-check-compat",[Ga]:"fire-auth",[Ka]:"fire-auth-compat",[Ja]:"fire-rtdb",[Xa]:"fire-data-connect",[Ya]:"fire-rtdb-compat",[Qa]:"fire-fn",[Za]:"fire-fn-compat",[ec]:"fire-iid",[tc]:"fire-iid-compat",[nc]:"fire-fcm",[rc]:"fire-fcm-compat",[ic]:"fire-perf",[sc]:"fire-perf-compat",[oc]:"fire-rc",[ac]:"fire-rc-compat",[cc]:"fire-gcs",[uc]:"fire-gcs-compat",[lc]:"fire-fst",[dc]:"fire-fst-compat",[fc]:"fire-vertex","fire-js":"fire-js",[hc]:"fire-js-all"};/**
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
 */const Cn=new Map,mc=new Map,_r=new Map;function Ci(i,e){try{i.container.addComponent(e)}catch(r){Be.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,r)}}function Kt(i){const e=i.name;if(_r.has(e))return Be.debug(`There were multiple attempts to register component ${e}.`),!1;_r.set(e,i);for(const r of Cn.values())Ci(r,i);for(const r of mc.values())Ci(r,i);return!0}function is(i,e){const r=i.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),i.container.getProvider(e)}function _e(i){return i==null?!1:i.settings!==void 0}/**
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
 */const vc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},tt=new Qt("app","Firebase",vc);/**
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
 */class yc{constructor(e,r,a){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new kt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw tt.create("app-deleted",{appName:this._name})}}/**
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
 */const en=pc;function _c(i,e={}){let r=i;typeof e!="object"&&(e={name:e});const a=Object.assign({name:yr,automaticDataCollectionEnabled:!1},e),l=a.name;if(typeof l!="string"||!l)throw tt.create("bad-app-name",{appName:String(l)});if(r||(r=Zi()),!r)throw tt.create("no-options");const h=Cn.get(l);if(h){if(Sn(r,h.options)&&Sn(a,h.config))return h;throw tt.create("duplicate-app",{appName:l})}const v=new Ia(l);for(const E of _r.values())v.addComponent(E);const I=new yc(r,a,v);return Cn.set(l,I),I}function bc(i=yr){const e=Cn.get(i);if(!e&&i===yr&&Zi())return _c();if(!e)throw tt.create("no-app",{appName:i});return e}function It(i,e,r){var a;let l=(a=gc[i])!==null&&a!==void 0?a:i;r&&(l+=`-${r}`);const h=l.match(/\s|\//),v=e.match(/\s|\//);if(h||v){const I=[`Unable to register library "${l}" with version "${e}":`];h&&I.push(`library name "${l}" contains illegal characters (whitespace or "/")`),h&&v&&I.push("and"),v&&I.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Be.warn(I.join(" "));return}Kt(new kt(`${l}-version`,()=>({library:l,version:e}),"VERSION"))}/**
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
 */const wc="firebase-heartbeat-database",Ec=1,Jt="firebase-heartbeat-store";let dr=null;function ss(){return dr||(dr=Ua(wc,Ec,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Jt)}catch(r){console.warn(r)}}}}).catch(i=>{throw tt.create("idb-open",{originalErrorMessage:i.message})})),dr}async function Tc(i){try{const r=(await ss()).transaction(Jt),a=await r.objectStore(Jt).get(os(i));return await r.done,a}catch(e){if(e instanceof nt)Be.warn(e.message);else{const r=tt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Be.warn(r.message)}}}async function Ai(i,e){try{const a=(await ss()).transaction(Jt,"readwrite");await a.objectStore(Jt).put(e,os(i)),await a.done}catch(r){if(r instanceof nt)Be.warn(r.message);else{const a=tt.create("idb-set",{originalErrorMessage:r==null?void 0:r.message});Be.warn(a.message)}}}function os(i){return`${i.name}!${i.options.appId}`}/**
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
 */const Ic=1024,Sc=30;class Cc{constructor(e){this.container=e,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new kc(r),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){var e,r;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),h=ki();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((r=this._heartbeatsCache)===null||r===void 0?void 0:r.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===h||this._heartbeatsCache.heartbeats.some(v=>v.date===h))return;if(this._heartbeatsCache.heartbeats.push({date:h,agent:l}),this._heartbeatsCache.heartbeats.length>Sc){const v=Pc(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(v,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(a){Be.warn(a)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const r=ki(),{heartbeatsToSend:a,unsentEntries:l}=Ac(this._heartbeatsCache.heartbeats),h=In(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=r,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),h}catch(r){return Be.warn(r),""}}}function ki(){return new Date().toISOString().substring(0,10)}function Ac(i,e=Ic){const r=[];let a=i.slice();for(const l of i){const h=r.find(v=>v.agent===l.agent);if(h){if(h.dates.push(l.date),Pi(r)>e){h.dates.pop();break}}else if(r.push({agent:l.agent,dates:[l.date]}),Pi(r)>e){r.pop();break}a=a.slice(1)}return{heartbeatsToSend:r,unsentEntries:a}}class kc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return da()?ha().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const r=await Tc(this.app);return r!=null&&r.heartbeats?r:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var r;if(await this._canUseIndexedDBPromise){const l=await this.read();return Ai(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:l.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var r;if(await this._canUseIndexedDBPromise){const l=await this.read();return Ai(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:l.lastSentHeartbeatDate,heartbeats:[...l.heartbeats,...e.heartbeats]})}else return}}function Pi(i){return In(JSON.stringify({version:2,heartbeats:i})).length}function Pc(i){if(i.length===0)return-1;let e=0,r=i[0].date;for(let a=1;a<i.length;a++)i[a].date<r&&(r=i[a].date,e=a);return e}/**
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
 */function Rc(i){Kt(new kt("platform-logger",e=>new Fa(e),"PRIVATE")),Kt(new kt("heartbeat",e=>new Cc(e),"PRIVATE")),It(vr,Si,i),It(vr,Si,"esm2017"),It("fire-js","")}Rc("");var Oc="firebase",xc="11.3.0";/**
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
 */It(Oc,xc,"app");function Ir(i,e){var r={};for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&e.indexOf(a)<0&&(r[a]=i[a]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(i);l<a.length;l++)e.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(i,a[l])&&(r[a[l]]=i[a[l]]);return r}function as(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Nc=as,cs=new Qt("auth","Firebase",as());/**
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
 */const An=new ts("@firebase/auth");function Dc(i,...e){An.logLevel<=ee.WARN&&An.warn(`Auth (${en}): ${i}`,...e)}function bn(i,...e){An.logLevel<=ee.ERROR&&An.error(`Auth (${en}): ${i}`,...e)}/**
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
 */function be(i,...e){throw Sr(i,...e)}function Pe(i,...e){return Sr(i,...e)}function us(i,e,r){const a=Object.assign(Object.assign({},Nc()),{[e]:r});return new Qt("auth","Firebase",a).create(e,{appName:i.name})}function Fe(i){return us(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Sr(i,...e){if(typeof i!="string"){const r=e[0],a=[...e.slice(1)];return a[0]&&(a[0].appName=i.name),i._errorFactory.create(r,...a)}return cs.create(i,...e)}function j(i,e,...r){if(!i)throw Sr(e,...r)}function Ue(i){const e="INTERNAL ASSERTION FAILED: "+i;throw bn(e),new Error(e)}function $e(i,e){i||Ue(e)}/**
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
 */function br(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function Lc(){return Ri()==="http:"||Ri()==="https:"}function Ri(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
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
 */function Mc(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Lc()||ua()||"connection"in navigator)?navigator.onLine:!0}function Uc(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class tn{constructor(e,r){this.shortDelay=e,this.longDelay=r,$e(r>e,"Short delay should be less than long delay!"),this.isMobile=oa()||la()}get(){return Mc()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Cr(i,e){$e(i.emulator,"Emulator should always be set here");const{url:r}=i.emulator;return e?`${r}${e.startsWith("/")?e.slice(1):e}`:r}/**
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
 */class ls{static initialize(e,r,a){this.fetchImpl=e,r&&(this.headersImpl=r),a&&(this.responseImpl=a)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ue("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ue("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ue("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const jc={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Hc=new tn(3e4,6e4);function We(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function Ve(i,e,r,a,l={}){return fs(i,l,async()=>{let h={},v={};a&&(e==="GET"?v=a:h={body:JSON.stringify(a)});const I=Zt(Object.assign({key:i.config.apiKey},v)).slice(1),E=await i._getAdditionalHeaders();E["Content-Type"]="application/json",i.languageCode&&(E["X-Firebase-Locale"]=i.languageCode);const R=Object.assign({method:e,headers:E},h);return ca()||(R.referrerPolicy="no-referrer"),ls.fetch()(ds(i,i.config.apiHost,r,I),R)})}async function fs(i,e,r){i._canInitEmulator=!1;const a=Object.assign(Object.assign({},jc),e);try{const l=new Bc(i),h=await Promise.race([r(),l.promise]);l.clearNetworkTimeout();const v=await h.json();if("needConfirmation"in v)throw yn(i,"account-exists-with-different-credential",v);if(h.ok&&!("errorMessage"in v))return v;{const I=h.ok?v.errorMessage:v.error.message,[E,R]=I.split(" : ");if(E==="FEDERATED_USER_ID_ALREADY_LINKED")throw yn(i,"credential-already-in-use",v);if(E==="EMAIL_EXISTS")throw yn(i,"email-already-in-use",v);if(E==="USER_DISABLED")throw yn(i,"user-disabled",v);const G=a[E]||E.toLowerCase().replace(/[_\s]+/g,"-");if(R)throw us(i,G,R);be(i,G)}}catch(l){if(l instanceof nt)throw l;be(i,"network-request-failed",{message:String(l)})}}async function nn(i,e,r,a,l={}){const h=await Ve(i,e,r,a,l);return"mfaPendingCredential"in h&&be(i,"multi-factor-auth-required",{_serverResponse:h}),h}function ds(i,e,r,a){const l=`${e}${r}?${a}`;return i.config.emulator?Cr(i.config,l):`${i.config.apiScheme}://${l}`}function Fc(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Bc{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((r,a)=>{this.timer=setTimeout(()=>a(Pe(this.auth,"network-request-failed")),Hc.get())})}}function yn(i,e,r){const a={appName:i.name};r.email&&(a.email=r.email),r.phoneNumber&&(a.phoneNumber=r.phoneNumber);const l=Pe(i,e,a);return l.customData._tokenResponse=r,l}function Oi(i){return i!==void 0&&i.enterprise!==void 0}class $c{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const r of this.recaptchaEnforcementState)if(r.provider&&r.provider===e)return Fc(r.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function qc(i,e){return Ve(i,"GET","/v2/recaptchaConfig",We(i,e))}/**
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
 */async function Wc(i,e){return Ve(i,"POST","/v1/accounts:delete",e)}async function hs(i,e){return Ve(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function Gt(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Vc(i,e=!1){const r=qe(i),a=await r.getIdToken(e),l=Ar(a);j(l&&l.exp&&l.auth_time&&l.iat,r.auth,"internal-error");const h=typeof l.firebase=="object"?l.firebase:void 0,v=h==null?void 0:h.sign_in_provider;return{claims:l,token:a,authTime:Gt(hr(l.auth_time)),issuedAtTime:Gt(hr(l.iat)),expirationTime:Gt(hr(l.exp)),signInProvider:v||null,signInSecondFactor:(h==null?void 0:h.sign_in_second_factor)||null}}function hr(i){return Number(i)*1e3}function Ar(i){const[e,r,a]=i.split(".");if(e===void 0||r===void 0||a===void 0)return bn("JWT malformed, contained fewer than 3 sections"),null;try{const l=Yi(r);return l?JSON.parse(l):(bn("Failed to decode base64 JWT payload"),null)}catch(l){return bn("Caught error parsing JWT payload as JSON",l==null?void 0:l.toString()),null}}function xi(i){const e=Ar(i);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Xt(i,e,r=!1){if(r)return e;try{return await e}catch(a){throw a instanceof nt&&zc(a)&&i.auth.currentUser===i&&await i.auth.signOut(),a}}function zc({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class Gc{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var r;if(e){const a=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),a}else{this.errorBackoff=3e4;const l=((r=this.user.stsTokenManager.expirationTime)!==null&&r!==void 0?r:0)-Date.now()-3e5;return Math.max(0,l)}}schedule(e=!1){if(!this.isRunning)return;const r=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},r)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class wr{constructor(e,r){this.createdAt=e,this.lastLoginAt=r,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gt(this.lastLoginAt),this.creationTime=Gt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function kn(i){var e;const r=i.auth,a=await i.getIdToken(),l=await Xt(i,hs(r,{idToken:a}));j(l==null?void 0:l.users.length,r,"internal-error");const h=l.users[0];i._notifyReloadListener(h);const v=!((e=h.providerUserInfo)===null||e===void 0)&&e.length?ps(h.providerUserInfo):[],I=Jc(i.providerData,v),E=i.isAnonymous,R=!(i.email&&h.passwordHash)&&!(I!=null&&I.length),G=E?R:!1,X={uid:h.localId,displayName:h.displayName||null,photoURL:h.photoUrl||null,email:h.email||null,emailVerified:h.emailVerified||!1,phoneNumber:h.phoneNumber||null,tenantId:h.tenantId||null,providerData:I,metadata:new wr(h.createdAt,h.lastLoginAt),isAnonymous:G};Object.assign(i,X)}async function Kc(i){const e=qe(i);await kn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Jc(i,e){return[...i.filter(a=>!e.some(l=>l.providerId===a.providerId)),...e]}function ps(i){return i.map(e=>{var{providerId:r}=e,a=Ir(e,["providerId"]);return{providerId:r,uid:a.rawId||"",displayName:a.displayName||null,email:a.email||null,phoneNumber:a.phoneNumber||null,photoURL:a.photoUrl||null}})}/**
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
 */async function Xc(i,e){const r=await fs(i,{},async()=>{const a=Zt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:l,apiKey:h}=i.config,v=ds(i,l,"/v1/token",`key=${h}`),I=await i._getAdditionalHeaders();return I["Content-Type"]="application/x-www-form-urlencoded",ls.fetch()(v,{method:"POST",headers:I,body:a})});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}async function Yc(i,e){return Ve(i,"POST","/v2/accounts:revokeToken",We(i,e))}/**
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
 */class St{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const r="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):xi(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}updateFromIdToken(e){j(e.length!==0,"internal-error");const r=xi(e);this.updateTokensAndExpiration(e,null,r)}async getToken(e,r=!1){return!r&&this.accessToken&&!this.isExpired?this.accessToken:(j(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,r){const{accessToken:a,refreshToken:l,expiresIn:h}=await Xc(e,r);this.updateTokensAndExpiration(a,l,Number(h))}updateTokensAndExpiration(e,r,a){this.refreshToken=r||null,this.accessToken=e||null,this.expirationTime=Date.now()+a*1e3}static fromJSON(e,r){const{refreshToken:a,accessToken:l,expirationTime:h}=r,v=new St;return a&&(j(typeof a=="string","internal-error",{appName:e}),v.refreshToken=a),l&&(j(typeof l=="string","internal-error",{appName:e}),v.accessToken=l),h&&(j(typeof h=="number","internal-error",{appName:e}),v.expirationTime=h),v}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new St,this.toJSON())}_performRefresh(){return Ue("not implemented")}}/**
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
 */function Je(i,e){j(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class je{constructor(e){var{uid:r,auth:a,stsTokenManager:l}=e,h=Ir(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Gc(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=a,this.stsTokenManager=l,this.accessToken=l.accessToken,this.displayName=h.displayName||null,this.email=h.email||null,this.emailVerified=h.emailVerified||!1,this.phoneNumber=h.phoneNumber||null,this.photoURL=h.photoURL||null,this.isAnonymous=h.isAnonymous||!1,this.tenantId=h.tenantId||null,this.providerData=h.providerData?[...h.providerData]:[],this.metadata=new wr(h.createdAt||void 0,h.lastLoginAt||void 0)}async getIdToken(e){const r=await Xt(this,this.stsTokenManager.getToken(this.auth,e));return j(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(e){return Vc(this,e)}reload(){return Kc(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(r=>Object.assign({},r)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const r=new je(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return r.metadata._copy(this.metadata),r}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,r=!1){let a=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),a=!0),r&&await kn(this),await this.auth._persistUserIfCurrent(this),a&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(_e(this.auth.app))return Promise.reject(Fe(this.auth));const e=await this.getIdToken();return await Xt(this,Wc(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,r){var a,l,h,v,I,E,R,G;const X=(a=r.displayName)!==null&&a!==void 0?a:void 0,ie=(l=r.email)!==null&&l!==void 0?l:void 0,me=(h=r.phoneNumber)!==null&&h!==void 0?h:void 0,M=(v=r.photoURL)!==null&&v!==void 0?v:void 0,$=(I=r.tenantId)!==null&&I!==void 0?I:void 0,we=(E=r._redirectEventId)!==null&&E!==void 0?E:void 0,H=(R=r.createdAt)!==null&&R!==void 0?R:void 0,on=(G=r.lastLoginAt)!==null&&G!==void 0?G:void 0,{uid:dt,emailVerified:Oe,isAnonymous:Rt,providerData:Ot,stsTokenManager:c}=r;j(dt&&c,e,"internal-error");const xt=St.fromJSON(this.name,c);j(typeof dt=="string",e,"internal-error"),Je(X,e.name),Je(ie,e.name),j(typeof Oe=="boolean",e,"internal-error"),j(typeof Rt=="boolean",e,"internal-error"),Je(me,e.name),Je(M,e.name),Je($,e.name),Je(we,e.name),Je(H,e.name),Je(on,e.name);const Y=new je({uid:dt,auth:e,email:ie,emailVerified:Oe,displayName:X,isAnonymous:Rt,photoURL:M,phoneNumber:me,tenantId:$,stsTokenManager:xt,createdAt:H,lastLoginAt:on});return Ot&&Array.isArray(Ot)&&(Y.providerData=Ot.map(Un=>Object.assign({},Un))),we&&(Y._redirectEventId=we),Y}static async _fromIdTokenResponse(e,r,a=!1){const l=new St;l.updateFromServerResponse(r);const h=new je({uid:r.localId,auth:e,stsTokenManager:l,isAnonymous:a});return await kn(h),h}static async _fromGetAccountInfoResponse(e,r,a){const l=r.users[0];j(l.localId!==void 0,"internal-error");const h=l.providerUserInfo!==void 0?ps(l.providerUserInfo):[],v=!(l.email&&l.passwordHash)&&!(h!=null&&h.length),I=new St;I.updateFromIdToken(a);const E=new je({uid:l.localId,auth:e,stsTokenManager:I,isAnonymous:v}),R={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:h,metadata:new wr(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!(h!=null&&h.length)};return Object.assign(E,R),E}}/**
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
 */const Ni=new Map;function He(i){$e(i instanceof Function,"Expected a class definition");let e=Ni.get(i);return e?($e(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Ni.set(i,e),e)}/**
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
 */class gs{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,r){this.storage[e]=r}async _get(e){const r=this.storage[e];return r===void 0?null:r}async _remove(e){delete this.storage[e]}_addListener(e,r){}_removeListener(e,r){}}gs.type="NONE";const Di=gs;/**
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
 */function wn(i,e,r){return`firebase:${i}:${e}:${r}`}class Ct{constructor(e,r,a){this.persistence=e,this.auth=r,this.userKey=a;const{config:l,name:h}=this.auth;this.fullUserKey=wn(this.userKey,l.apiKey,h),this.fullPersistenceKey=wn("persistence",l.apiKey,h),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?je._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,r,a="authUser"){if(!r.length)return new Ct(He(Di),e,a);const l=(await Promise.all(r.map(async R=>{if(await R._isAvailable())return R}))).filter(R=>R);let h=l[0]||He(Di);const v=wn(a,e.config.apiKey,e.name);let I=null;for(const R of r)try{const G=await R._get(v);if(G){const X=je._fromJSON(e,G);R!==h&&(I=X),h=R;break}}catch{}const E=l.filter(R=>R._shouldAllowMigration);return!h._shouldAllowMigration||!E.length?new Ct(h,e,a):(h=E[0],I&&await h._set(v,I.toJSON()),await Promise.all(r.map(async R=>{if(R!==h)try{await R._remove(v)}catch{}})),new Ct(h,e,a))}}/**
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
 */function Li(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_s(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ms(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ws(e))return"Blackberry";if(Es(e))return"Webos";if(vs(e))return"Safari";if((e.includes("chrome/")||ys(e))&&!e.includes("edge/"))return"Chrome";if(bs(e))return"Android";{const r=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,a=i.match(r);if((a==null?void 0:a.length)===2)return a[1]}return"Other"}function ms(i=ce()){return/firefox\//i.test(i)}function vs(i=ce()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ys(i=ce()){return/crios\//i.test(i)}function _s(i=ce()){return/iemobile/i.test(i)}function bs(i=ce()){return/android/i.test(i)}function ws(i=ce()){return/blackberry/i.test(i)}function Es(i=ce()){return/webos/i.test(i)}function kr(i=ce()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function Qc(i=ce()){var e;return kr(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Zc(){return fa()&&document.documentMode===10}function Ts(i=ce()){return kr(i)||bs(i)||Es(i)||ws(i)||/windows phone/i.test(i)||_s(i)}/**
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
 */function Is(i,e=[]){let r;switch(i){case"Browser":r=Li(ce());break;case"Worker":r=`${Li(ce())}-${i}`;break;default:r=i}const a=e.length?e.join(","):"FirebaseCore-web";return`${r}/JsCore/${en}/${a}`}/**
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
 */class eu{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,r){const a=h=>new Promise((v,I)=>{try{const E=e(h);v(E)}catch(E){I(E)}});a.onAbort=r,this.queue.push(a);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const r=[];try{for(const a of this.queue)await a(e),a.onAbort&&r.push(a.onAbort)}catch(a){r.reverse();for(const l of r)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:a==null?void 0:a.message})}}}/**
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
 */async function tu(i,e={}){return Ve(i,"GET","/v2/passwordPolicy",We(i,e))}/**
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
 */const nu=6;class ru{constructor(e){var r,a,l,h;const v=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(r=v.minPasswordLength)!==null&&r!==void 0?r:nu,v.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=v.maxPasswordLength),v.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=v.containsLowercaseCharacter),v.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=v.containsUppercaseCharacter),v.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=v.containsNumericCharacter),v.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=v.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(l=(a=e.allowedNonAlphanumericCharacters)===null||a===void 0?void 0:a.join(""))!==null&&l!==void 0?l:"",this.forceUpgradeOnSignin=(h=e.forceUpgradeOnSignin)!==null&&h!==void 0?h:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var r,a,l,h,v,I;const E={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,E),this.validatePasswordCharacterOptions(e,E),E.isValid&&(E.isValid=(r=E.meetsMinPasswordLength)!==null&&r!==void 0?r:!0),E.isValid&&(E.isValid=(a=E.meetsMaxPasswordLength)!==null&&a!==void 0?a:!0),E.isValid&&(E.isValid=(l=E.containsLowercaseLetter)!==null&&l!==void 0?l:!0),E.isValid&&(E.isValid=(h=E.containsUppercaseLetter)!==null&&h!==void 0?h:!0),E.isValid&&(E.isValid=(v=E.containsNumericCharacter)!==null&&v!==void 0?v:!0),E.isValid&&(E.isValid=(I=E.containsNonAlphanumericCharacter)!==null&&I!==void 0?I:!0),E}validatePasswordLengthOptions(e,r){const a=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;a&&(r.meetsMinPasswordLength=e.length>=a),l&&(r.meetsMaxPasswordLength=e.length<=l)}validatePasswordCharacterOptions(e,r){this.updatePasswordCharacterOptionsStatuses(r,!1,!1,!1,!1);let a;for(let l=0;l<e.length;l++)a=e.charAt(l),this.updatePasswordCharacterOptionsStatuses(r,a>="a"&&a<="z",a>="A"&&a<="Z",a>="0"&&a<="9",this.allowedNonAlphanumericCharacters.includes(a))}updatePasswordCharacterOptionsStatuses(e,r,a,l,h){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=r)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=a)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=h))}}/**
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
 */class iu{constructor(e,r,a,l){this.app=e,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=a,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Mi(this),this.idTokenSubscription=new Mi(this),this.beforeStateQueue=new eu(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cs,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=l.sdkClientVersion}_initializeWithPersistence(e,r){return r&&(this._popupRedirectResolver=He(r)),this._initializationPromise=this.queue(async()=>{var a,l;if(!this._deleted&&(this.persistenceManager=await Ct.create(this,e),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(r),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const r=await hs(this,{idToken:e}),a=await je._fromGetAccountInfoResponse(this,r,e);await this.directlySetCurrentUser(a)}catch(r){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",r),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var r;if(_e(this.app)){const v=this.app.settings.authIdToken;return v?new Promise(I=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(v).then(I,I))}):this.directlySetCurrentUser(null)}const a=await this.assertedPersistence.getCurrentUser();let l=a,h=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const v=(r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId,I=l==null?void 0:l._redirectEventId,E=await this.tryRedirectSignIn(e);(!v||v===I)&&(E!=null&&E.user)&&(l=E.user,h=!0)}if(!l)return this.directlySetCurrentUser(null);if(!l._redirectEventId){if(h)try{await this.beforeStateQueue.runMiddleware(l)}catch(v){l=a,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(v))}return l?this.reloadAndSetCurrentUserOrClear(l):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===l._redirectEventId?this.directlySetCurrentUser(l):this.reloadAndSetCurrentUserOrClear(l)}async tryRedirectSignIn(e){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(e){try{await kn(e)}catch(r){if((r==null?void 0:r.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Uc()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(_e(this.app))return Promise.reject(Fe(this));const r=e?qe(e):null;return r&&j(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(e,r=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),r||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return _e(this.app)?Promise.reject(Fe(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return _e(this.app)?Promise.reject(Fe(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(He(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const r=this._getPasswordPolicyInternal();return r.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):r.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await tu(this),r=new ru(e);this.tenantId===null?this._projectPasswordPolicy=r:this._tenantPasswordPolicies[this.tenantId]=r}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Qt("auth","Firebase",e())}onAuthStateChanged(e,r,a){return this.registerStateListener(this.authStateSubscription,e,r,a)}beforeAuthStateChanged(e,r){return this.beforeStateQueue.pushCallback(e,r)}onIdTokenChanged(e,r,a){return this.registerStateListener(this.idTokenSubscription,e,r,a)}authStateReady(){return new Promise((e,r)=>{if(this.currentUser)e();else{const a=this.onAuthStateChanged(()=>{a(),e()},r)}})}async revokeAccessToken(e){if(this.currentUser){const r=await this.currentUser.getIdToken(),a={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:r};this.tenantId!=null&&(a.tenantId=this.tenantId),await Yc(this,a)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,r){const a=await this.getOrInitRedirectPersistenceManager(r);return e===null?a.removeCurrentUser():a.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const r=e&&He(e)||this._popupRedirectResolver;j(r,this,"argument-error"),this.redirectPersistenceManager=await Ct.create(this,[He(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var r,a;return this._isInitialized&&await this.queue(async()=>{}),((r=this._currentUser)===null||r===void 0?void 0:r._redirectEventId)===e?this._currentUser:((a=this.redirectUser)===null||a===void 0?void 0:a._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,r;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const a=(r=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&r!==void 0?r:null;this.lastNotifiedUid!==a&&(this.lastNotifiedUid=a,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,r,a,l){if(this._deleted)return()=>{};const h=typeof r=="function"?r:r.next.bind(r);let v=!1;const I=this._isInitialized?Promise.resolve():this._initializationPromise;if(j(I,this,"internal-error"),I.then(()=>{v||h(this.currentUser)}),typeof r=="function"){const E=e.addObserver(r,a,l);return()=>{v=!0,E()}}else{const E=e.addObserver(r);return()=>{v=!0,E()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Is(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const r={"X-Client-Version":this.clientVersion};this.app.options.appId&&(r["X-Firebase-gmpid"]=this.app.options.appId);const a=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());a&&(r["X-Firebase-Client"]=a);const l=await this._getAppCheckToken();return l&&(r["X-Firebase-AppCheck"]=l),r}async _getAppCheckToken(){var e;if(_e(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const r=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return r!=null&&r.error&&Dc(`Error while retrieving App Check token: ${r.error}`),r==null?void 0:r.token}}function rt(i){return qe(i)}class Mi{constructor(e){this.auth=e,this.observer=null,this.addObserver=ya(r=>this.observer=r)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Dn={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function su(i){Dn=i}function Ss(i){return Dn.loadJS(i)}function ou(){return Dn.recaptchaEnterpriseScript}function au(){return Dn.gapiScript}function cu(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class uu{constructor(){this.enterprise=new lu}ready(e){e()}execute(e,r){return Promise.resolve("token")}render(e,r){return""}}class lu{ready(e){e()}execute(e,r){return Promise.resolve("token")}render(e,r){return""}}const fu="recaptcha-enterprise",Cs="NO_RECAPTCHA";class du{constructor(e){this.type=fu,this.auth=rt(e)}async verify(e="verify",r=!1){async function a(h){if(!r){if(h.tenantId==null&&h._agentRecaptchaConfig!=null)return h._agentRecaptchaConfig.siteKey;if(h.tenantId!=null&&h._tenantRecaptchaConfigs[h.tenantId]!==void 0)return h._tenantRecaptchaConfigs[h.tenantId].siteKey}return new Promise(async(v,I)=>{qc(h,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(E=>{if(E.recaptchaKey===void 0)I(new Error("recaptcha Enterprise site key undefined"));else{const R=new $c(E);return h.tenantId==null?h._agentRecaptchaConfig=R:h._tenantRecaptchaConfigs[h.tenantId]=R,v(R.siteKey)}}).catch(E=>{I(E)})})}function l(h,v,I){const E=window.grecaptcha;Oi(E)?E.enterprise.ready(()=>{E.enterprise.execute(h,{action:e}).then(R=>{v(R)}).catch(()=>{v(Cs)})}):I(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new uu().execute("siteKey",{action:"verify"}):new Promise((h,v)=>{a(this.auth).then(I=>{if(!r&&Oi(window.grecaptcha))l(I,h,v);else{if(typeof window>"u"){v(new Error("RecaptchaVerifier is only supported in browser"));return}let E=ou();E.length!==0&&(E+=I),Ss(E).then(()=>{l(I,h,v)}).catch(R=>{v(R)})}}).catch(I=>{v(I)})})}}async function Ui(i,e,r,a=!1,l=!1){const h=new du(i);let v;if(l)v=Cs;else try{v=await h.verify(r)}catch{v=await h.verify(r,!0)}const I=Object.assign({},e);if(r==="mfaSmsEnrollment"||r==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in I){const E=I.phoneEnrollmentInfo.phoneNumber,R=I.phoneEnrollmentInfo.recaptchaToken;Object.assign(I,{phoneEnrollmentInfo:{phoneNumber:E,recaptchaToken:R,captchaResponse:v,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in I){const E=I.phoneSignInInfo.recaptchaToken;Object.assign(I,{phoneSignInInfo:{recaptchaToken:E,captchaResponse:v,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return I}return a?Object.assign(I,{captchaResp:v}):Object.assign(I,{captchaResponse:v}),Object.assign(I,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(I,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),I}async function Pn(i,e,r,a,l){var h;if(!((h=i._getRecaptchaConfig())===null||h===void 0)&&h.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const v=await Ui(i,e,r,r==="getOobCode");return a(i,v)}else return a(i,e).catch(async v=>{if(v.code==="auth/missing-recaptcha-token"){console.log(`${r} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const I=await Ui(i,e,r,r==="getOobCode");return a(i,I)}else return Promise.reject(v)})}/**
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
 */function hu(i,e){const r=is(i,"auth");if(r.isInitialized()){const l=r.getImmediate(),h=r.getOptions();if(Sn(h,e??{}))return l;be(l,"already-initialized")}return r.initialize({options:e})}function pu(i,e){const r=(e==null?void 0:e.persistence)||[],a=(Array.isArray(r)?r:[r]).map(He);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(a,e==null?void 0:e.popupRedirectResolver)}function gu(i,e,r){const a=rt(i);j(a._canInitEmulator,a,"emulator-config-failed"),j(/^https?:\/\//.test(e),a,"invalid-emulator-scheme");const l=!1,h=As(e),{host:v,port:I}=mu(e),E=I===null?"":`:${I}`;a.config.emulator={url:`${h}//${v}${E}/`},a.settings.appVerificationDisabledForTesting=!0,a.emulatorConfig=Object.freeze({host:v,port:I,protocol:h.replace(":",""),options:Object.freeze({disableWarnings:l})}),vu()}function As(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function mu(i){const e=As(i),r=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!r)return{host:"",port:null};const a=r[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(a);if(l){const h=l[1];return{host:h,port:ji(a.substr(h.length+1))}}else{const[h,v]=a.split(":");return{host:h,port:ji(v)}}}function ji(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function vu(){function i(){const e=document.createElement("p"),r=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",r.position="fixed",r.width="100%",r.backgroundColor="#ffffff",r.border=".1em solid #000000",r.color="#b50000",r.bottom="0px",r.left="0px",r.margin="0px",r.zIndex="10000",r.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class Pr{constructor(e,r){this.providerId=e,this.signInMethod=r}toJSON(){return Ue("not implemented")}_getIdTokenResponse(e){return Ue("not implemented")}_linkToIdToken(e,r){return Ue("not implemented")}_getReauthenticationResolver(e){return Ue("not implemented")}}async function yu(i,e){return Ve(i,"POST","/v1/accounts:signUp",e)}/**
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
 */async function _u(i,e){return nn(i,"POST","/v1/accounts:signInWithPassword",We(i,e))}async function bu(i,e){return Ve(i,"POST","/v1/accounts:sendOobCode",We(i,e))}async function wu(i,e){return bu(i,e)}/**
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
 */async function Eu(i,e){return nn(i,"POST","/v1/accounts:signInWithEmailLink",We(i,e))}async function Tu(i,e){return nn(i,"POST","/v1/accounts:signInWithEmailLink",We(i,e))}/**
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
 */class Yt extends Pr{constructor(e,r,a,l=null){super("password",a),this._email=e,this._password=r,this._tenantId=l}static _fromEmailAndPassword(e,r){return new Yt(e,r,"password")}static _fromEmailAndCode(e,r,a=null){return new Yt(e,r,"emailLink",a)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e;if(r!=null&&r.email&&(r!=null&&r.password)){if(r.signInMethod==="password")return this._fromEmailAndPassword(r.email,r.password);if(r.signInMethod==="emailLink")return this._fromEmailAndCode(r.email,r.password,r.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Pn(e,r,"signInWithPassword",_u);case"emailLink":return Eu(e,{email:this._email,oobCode:this._password});default:be(e,"internal-error")}}async _linkToIdToken(e,r){switch(this.signInMethod){case"password":const a={idToken:r,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Pn(e,a,"signUpPassword",yu);case"emailLink":return Tu(e,{idToken:r,email:this._email,oobCode:this._password});default:be(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function At(i,e){return nn(i,"POST","/v1/accounts:signInWithIdp",We(i,e))}/**
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
 */const Iu="http://localhost";class lt extends Pr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const r=new lt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(r.idToken=e.idToken),e.accessToken&&(r.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(r.nonce=e.nonce),e.pendingToken&&(r.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(r.accessToken=e.oauthToken,r.secret=e.oauthTokenSecret):be("argument-error"),r}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e,{providerId:a,signInMethod:l}=r,h=Ir(r,["providerId","signInMethod"]);if(!a||!l)return null;const v=new lt(a,l);return v.idToken=h.idToken||void 0,v.accessToken=h.accessToken||void 0,v.secret=h.secret,v.nonce=h.nonce,v.pendingToken=h.pendingToken||null,v}_getIdTokenResponse(e){const r=this.buildRequest();return At(e,r)}_linkToIdToken(e,r){const a=this.buildRequest();return a.idToken=r,At(e,a)}_getReauthenticationResolver(e){const r=this.buildRequest();return r.autoCreate=!1,At(e,r)}buildRequest(){const e={requestUri:Iu,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),e.postBody=Zt(r)}return e}}/**
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
 */function Su(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Cu(i){const e=Vt(zt(i)).link,r=e?Vt(zt(e)).deep_link_id:null,a=Vt(zt(i)).deep_link_id;return(a?Vt(zt(a)).link:null)||a||r||e||i}class Rr{constructor(e){var r,a,l,h,v,I;const E=Vt(zt(e)),R=(r=E.apiKey)!==null&&r!==void 0?r:null,G=(a=E.oobCode)!==null&&a!==void 0?a:null,X=Su((l=E.mode)!==null&&l!==void 0?l:null);j(R&&G&&X,"argument-error"),this.apiKey=R,this.operation=X,this.code=G,this.continueUrl=(h=E.continueUrl)!==null&&h!==void 0?h:null,this.languageCode=(v=E.languageCode)!==null&&v!==void 0?v:null,this.tenantId=(I=E.tenantId)!==null&&I!==void 0?I:null}static parseLink(e){const r=Cu(e);try{return new Rr(r)}catch{return null}}}/**
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
 */class Pt{constructor(){this.providerId=Pt.PROVIDER_ID}static credential(e,r){return Yt._fromEmailAndPassword(e,r)}static credentialWithLink(e,r){const a=Rr.parseLink(r);return j(a,"argument-error"),Yt._fromEmailAndCode(e,a.code,a.tenantId)}}Pt.PROVIDER_ID="password";Pt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Pt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ks{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class rn extends ks{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Xe extends rn{constructor(){super("facebook.com")}static credential(e){return lt._fromParams({providerId:Xe.PROVIDER_ID,signInMethod:Xe.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xe.credentialFromTaggedObject(e)}static credentialFromError(e){return Xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xe.credential(e.oauthAccessToken)}catch{return null}}}Xe.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xe.PROVIDER_ID="facebook.com";/**
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
 */class Ye extends rn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,r){return lt._fromParams({providerId:Ye.PROVIDER_ID,signInMethod:Ye.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:r})}static credentialFromResult(e){return Ye.credentialFromTaggedObject(e)}static credentialFromError(e){return Ye.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:r,oauthAccessToken:a}=e;if(!r&&!a)return null;try{return Ye.credential(r,a)}catch{return null}}}Ye.GOOGLE_SIGN_IN_METHOD="google.com";Ye.PROVIDER_ID="google.com";/**
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
 */class Qe extends rn{constructor(){super("github.com")}static credential(e){return lt._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qe.credentialFromTaggedObject(e)}static credentialFromError(e){return Qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qe.credential(e.oauthAccessToken)}catch{return null}}}Qe.GITHUB_SIGN_IN_METHOD="github.com";Qe.PROVIDER_ID="github.com";/**
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
 */class Ze extends rn{constructor(){super("twitter.com")}static credential(e,r){return lt._fromParams({providerId:Ze.PROVIDER_ID,signInMethod:Ze.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:r})}static credentialFromResult(e){return Ze.credentialFromTaggedObject(e)}static credentialFromError(e){return Ze.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:r,oauthTokenSecret:a}=e;if(!r||!a)return null;try{return Ze.credential(r,a)}catch{return null}}}Ze.TWITTER_SIGN_IN_METHOD="twitter.com";Ze.PROVIDER_ID="twitter.com";/**
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
 */async function Au(i,e){return nn(i,"POST","/v1/accounts:signUp",We(i,e))}/**
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
 */class ft{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,r,a,l=!1){const h=await je._fromIdTokenResponse(e,a,l),v=Hi(a);return new ft({user:h,providerId:v,_tokenResponse:a,operationType:r})}static async _forOperation(e,r,a){await e._updateTokensIfNecessary(a,!0);const l=Hi(a);return new ft({user:e,providerId:l,_tokenResponse:a,operationType:r})}}function Hi(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */class Rn extends nt{constructor(e,r,a,l){var h;super(r.code,r.message),this.operationType=a,this.user=l,Object.setPrototypeOf(this,Rn.prototype),this.customData={appName:e.name,tenantId:(h=e.tenantId)!==null&&h!==void 0?h:void 0,_serverResponse:r.customData._serverResponse,operationType:a}}static _fromErrorAndOperation(e,r,a,l){return new Rn(e,r,a,l)}}function Ps(i,e,r,a){return(e==="reauthenticate"?r._getReauthenticationResolver(i):r._getIdTokenResponse(i)).catch(h=>{throw h.code==="auth/multi-factor-auth-required"?Rn._fromErrorAndOperation(i,h,e,a):h})}async function ku(i,e,r=!1){const a=await Xt(i,e._linkToIdToken(i.auth,await i.getIdToken()),r);return ft._forOperation(i,"link",a)}/**
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
 */async function Pu(i,e,r=!1){const{auth:a}=i;if(_e(a.app))return Promise.reject(Fe(a));const l="reauthenticate";try{const h=await Xt(i,Ps(a,l,e,i),r);j(h.idToken,a,"internal-error");const v=Ar(h.idToken);j(v,a,"internal-error");const{sub:I}=v;return j(i.uid===I,a,"user-mismatch"),ft._forOperation(i,l,h)}catch(h){throw(h==null?void 0:h.code)==="auth/user-not-found"&&be(a,"user-mismatch"),h}}/**
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
 */async function Rs(i,e,r=!1){if(_e(i.app))return Promise.reject(Fe(i));const a="signIn",l=await Ps(i,a,e),h=await ft._fromIdTokenResponse(i,a,l);return r||await i._updateCurrentUser(h.user),h}async function Ru(i,e){return Rs(rt(i),e)}/**
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
 */async function Os(i){const e=rt(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Kl(i,e,r){const a=rt(i);await Pn(a,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",wu)}async function Jl(i,e,r){if(_e(i.app))return Promise.reject(Fe(i));const a=rt(i),v=await Pn(a,{returnSecureToken:!0,email:e,password:r,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Au).catch(E=>{throw E.code==="auth/password-does-not-meet-requirements"&&Os(i),E}),I=await ft._fromIdTokenResponse(a,"signIn",v);return await a._updateCurrentUser(I.user),I}function Xl(i,e,r){return _e(i.app)?Promise.reject(Fe(i)):Ru(qe(i),Pt.credential(e,r)).catch(async a=>{throw a.code==="auth/password-does-not-meet-requirements"&&Os(i),a})}/**
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
 */function Yl(i,e){return qe(i).setPersistence(e)}function Ou(i,e,r,a){return qe(i).onIdTokenChanged(e,r,a)}function xu(i,e,r){return qe(i).beforeAuthStateChanged(e,r)}function Ql(i){return qe(i).signOut()}const On="__sak";/**
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
 */class xs{constructor(e,r){this.storageRetriever=e,this.type=r}_isAvailable(){try{return this.storage?(this.storage.setItem(On,"1"),this.storage.removeItem(On),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,r){return this.storage.setItem(e,JSON.stringify(r)),Promise.resolve()}_get(e){const r=this.storage.getItem(e);return Promise.resolve(r?JSON.parse(r):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Nu=1e3,Du=10;class Ns extends xs{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,r)=>this.onStorageEvent(e,r),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ts(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const r of Object.keys(this.listeners)){const a=this.storage.getItem(r),l=this.localCache[r];a!==l&&e(r,l,a)}}onStorageEvent(e,r=!1){if(!e.key){this.forAllChangedKeys((v,I,E)=>{this.notifyListeners(v,E)});return}const a=e.key;r?this.detachListener():this.stopPolling();const l=()=>{const v=this.storage.getItem(a);!r&&this.localCache[a]===v||this.notifyListeners(a,v)},h=this.storage.getItem(a);Zc()&&h!==e.newValue&&e.newValue!==e.oldValue?setTimeout(l,Du):l()}notifyListeners(e,r){this.localCache[e]=r;const a=this.listeners[e];if(a)for(const l of Array.from(a))l(r&&JSON.parse(r))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,r,a)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:r,newValue:a}),!0)})},Nu)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,r){await super._set(e,r),this.localCache[e]=JSON.stringify(r)}async _get(e){const r=await super._get(e);return this.localCache[e]=JSON.stringify(r),r}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ns.type="LOCAL";const Lu=Ns;/**
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
 */class Ds extends xs{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,r){}_removeListener(e,r){}}Ds.type="SESSION";const Ls=Ds;/**
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
 */function Mu(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(r){return{fulfilled:!1,reason:r}}}))}/**
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
 */class Ln{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const r=this.receivers.find(l=>l.isListeningto(e));if(r)return r;const a=new Ln(e);return this.receivers.push(a),a}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const r=e,{eventId:a,eventType:l,data:h}=r.data,v=this.handlersMap[l];if(!(v!=null&&v.size))return;r.ports[0].postMessage({status:"ack",eventId:a,eventType:l});const I=Array.from(v).map(async R=>R(r.origin,h)),E=await Mu(I);r.ports[0].postMessage({status:"done",eventId:a,eventType:l,response:E})}_subscribe(e,r){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(r)}_unsubscribe(e,r){this.handlersMap[e]&&r&&this.handlersMap[e].delete(r),(!r||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ln.receivers=[];/**
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
 */function Or(i="",e=10){let r="";for(let a=0;a<e;a++)r+=Math.floor(Math.random()*10);return i+r}/**
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
 */class Uu{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,r,a=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let h,v;return new Promise((I,E)=>{const R=Or("",20);l.port1.start();const G=setTimeout(()=>{E(new Error("unsupported_event"))},a);v={messageChannel:l,onMessage(X){const ie=X;if(ie.data.eventId===R)switch(ie.data.status){case"ack":clearTimeout(G),h=setTimeout(()=>{E(new Error("timeout"))},3e3);break;case"done":clearTimeout(h),I(ie.data.response);break;default:clearTimeout(G),clearTimeout(h),E(new Error("invalid_response"));break}}},this.handlers.add(v),l.port1.addEventListener("message",v.onMessage),this.target.postMessage({eventType:e,eventId:R,data:r},[l.port2])}).finally(()=>{v&&this.removeMessageHandler(v)})}}/**
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
 */function Re(){return window}function ju(i){Re().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function Ms(){return typeof Re().WorkerGlobalScope<"u"&&typeof Re().importScripts=="function"}async function Hu(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Fu(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function Bu(){return Ms()?self:null}/**
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
 */const Us="firebaseLocalStorageDb",$u=1,xn="firebaseLocalStorage",js="fbase_key";class sn{constructor(e){this.request=e}toPromise(){return new Promise((e,r)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{r(this.request.error)})})}}function Mn(i,e){return i.transaction([xn],e?"readwrite":"readonly").objectStore(xn)}function qu(){const i=indexedDB.deleteDatabase(Us);return new sn(i).toPromise()}function Er(){const i=indexedDB.open(Us,$u);return new Promise((e,r)=>{i.addEventListener("error",()=>{r(i.error)}),i.addEventListener("upgradeneeded",()=>{const a=i.result;try{a.createObjectStore(xn,{keyPath:js})}catch(l){r(l)}}),i.addEventListener("success",async()=>{const a=i.result;a.objectStoreNames.contains(xn)?e(a):(a.close(),await qu(),e(await Er()))})})}async function Fi(i,e,r){const a=Mn(i,!0).put({[js]:e,value:r});return new sn(a).toPromise()}async function Wu(i,e){const r=Mn(i,!1).get(e),a=await new sn(r).toPromise();return a===void 0?null:a.value}function Bi(i,e){const r=Mn(i,!0).delete(e);return new sn(r).toPromise()}const Vu=800,zu=3;class Hs{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Er(),this.db)}async _withRetries(e){let r=0;for(;;)try{const a=await this._openDb();return await e(a)}catch(a){if(r++>zu)throw a;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ms()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ln._getInstance(Bu()),this.receiver._subscribe("keyChanged",async(e,r)=>({keyProcessed:(await this._poll()).includes(r.key)})),this.receiver._subscribe("ping",async(e,r)=>["keyChanged"])}async initializeSender(){var e,r;if(this.activeServiceWorker=await Hu(),!this.activeServiceWorker)return;this.sender=new Uu(this.activeServiceWorker);const a=await this.sender._send("ping",{},800);a&&!((e=a[0])===null||e===void 0)&&e.fulfilled&&!((r=a[0])===null||r===void 0)&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Fu()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Er();return await Fi(e,On,"1"),await Bi(e,On),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,r){return this._withPendingWrite(async()=>(await this._withRetries(a=>Fi(a,e,r)),this.localCache[e]=r,this.notifyServiceWorker(e)))}async _get(e){const r=await this._withRetries(a=>Wu(a,e));return this.localCache[e]=r,r}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(r=>Bi(r,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(l=>{const h=Mn(l,!1).getAll();return new sn(h).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const r=[],a=new Set;if(e.length!==0)for(const{fbase_key:l,value:h}of e)a.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(h)&&(this.notifyListeners(l,h),r.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!a.has(l)&&(this.notifyListeners(l,null),r.push(l));return r}notifyListeners(e,r){this.localCache[e]=r;const a=this.listeners[e];if(a)for(const l of Array.from(a))l(r)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Vu)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,r){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Hs.type="LOCAL";const Gu=Hs;new tn(3e4,6e4);/**
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
 */function Ku(i,e){return e?He(e):(j(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class xr extends Pr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return At(e,this._buildIdpRequest())}_linkToIdToken(e,r){return At(e,this._buildIdpRequest(r))}_getReauthenticationResolver(e){return At(e,this._buildIdpRequest())}_buildIdpRequest(e){const r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(r.idToken=e),r}}function Ju(i){return Rs(i.auth,new xr(i),i.bypassAuthState)}function Xu(i){const{auth:e,user:r}=i;return j(r,e,"internal-error"),Pu(r,new xr(i),i.bypassAuthState)}async function Yu(i){const{auth:e,user:r}=i;return j(r,e,"internal-error"),ku(r,new xr(i),i.bypassAuthState)}/**
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
 */class Fs{constructor(e,r,a,l,h=!1){this.auth=e,this.resolver=a,this.user=l,this.bypassAuthState=h,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}execute(){return new Promise(async(e,r)=>{this.pendingPromise={resolve:e,reject:r};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(a){this.reject(a)}})}async onAuthEvent(e){const{urlResponse:r,sessionId:a,postBody:l,tenantId:h,error:v,type:I}=e;if(v){this.reject(v);return}const E={auth:this.auth,requestUri:r,sessionId:a,tenantId:h||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(I)(E))}catch(R){this.reject(R)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ju;case"linkViaPopup":case"linkViaRedirect":return Yu;case"reauthViaPopup":case"reauthViaRedirect":return Xu;default:be(this.auth,"internal-error")}}resolve(e){$e(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$e(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Qu=new tn(2e3,1e4);class Tt extends Fs{constructor(e,r,a,l,h){super(e,r,l,h),this.provider=a,this.authWindow=null,this.pollId=null,Tt.currentPopupAction&&Tt.currentPopupAction.cancel(),Tt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){$e(this.filter.length===1,"Popup operations only handle one event");const e=Or();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(r=>{this.reject(r)}),this.resolver._isIframeWebStorageSupported(this.auth,r=>{r||this.reject(Pe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Pe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Tt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var r,a;if(!((a=(r=this.authWindow)===null||r===void 0?void 0:r.window)===null||a===void 0)&&a.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Pe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Qu.get())};e()}}Tt.currentPopupAction=null;/**
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
 */const Zu="pendingRedirect",En=new Map;class el extends Fs{constructor(e,r,a=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,a),this.eventId=null}async execute(){let e=En.get(this.auth._key());if(!e){try{const a=await tl(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(a)}catch(r){e=()=>Promise.reject(r)}En.set(this.auth._key(),e)}return this.bypassAuthState||En.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const r=await this.auth._redirectUserForId(e.eventId);if(r)return this.user=r,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tl(i,e){const r=il(e),a=rl(i);if(!await a._isAvailable())return!1;const l=await a._get(r)==="true";return await a._remove(r),l}function nl(i,e){En.set(i._key(),e)}function rl(i){return He(i._redirectPersistence)}function il(i){return wn(Zu,i.config.apiKey,i.name)}async function sl(i,e,r=!1){if(_e(i.app))return Promise.reject(Fe(i));const a=rt(i),l=Ku(a,e),v=await new el(a,l,r).execute();return v&&!r&&(delete v.user._redirectEventId,await a._persistUserIfCurrent(v.user),await a._setRedirectUser(null,e)),v}/**
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
 */const ol=10*60*1e3;class al{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let r=!1;return this.consumers.forEach(a=>{this.isEventForConsumer(e,a)&&(r=!0,this.sendToConsumer(e,a),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!cl(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r}sendToConsumer(e,r){var a;if(e.error&&!Bs(e)){const l=((a=e.error.code)===null||a===void 0?void 0:a.split("auth/")[1])||"internal-error";r.onError(Pe(this.auth,l))}else r.onAuthEvent(e)}isEventForConsumer(e,r){const a=r.eventId===null||!!e.eventId&&e.eventId===r.eventId;return r.filter.includes(e.type)&&a}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ol&&this.cachedEventUids.clear(),this.cachedEventUids.has($i(e))}saveEventToCache(e){this.cachedEventUids.add($i(e)),this.lastProcessedEventTime=Date.now()}}function $i(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function Bs({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function cl(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Bs(i);default:return!1}}/**
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
 */async function ul(i,e={}){return Ve(i,"GET","/v1/projects",e)}/**
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
 */const ll=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fl=/^https?/;async function dl(i){if(i.config.emulator)return;const{authorizedDomains:e}=await ul(i);for(const r of e)try{if(hl(r))return}catch{}be(i,"unauthorized-domain")}function hl(i){const e=br(),{protocol:r,hostname:a}=new URL(e);if(i.startsWith("chrome-extension://")){const v=new URL(i);return v.hostname===""&&a===""?r==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):r==="chrome-extension:"&&v.hostname===a}if(!fl.test(r))return!1;if(ll.test(i))return a===i;const l=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(a)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const pl=new tn(3e4,6e4);function qi(){const i=Re().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let r=0;r<i.CP.length;r++)i.CP[r]=null}}function gl(i){return new Promise((e,r)=>{var a,l,h;function v(){qi(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qi(),r(Pe(i,"network-request-failed"))},timeout:pl.get()})}if(!((l=(a=Re().gapi)===null||a===void 0?void 0:a.iframes)===null||l===void 0)&&l.Iframe)e(gapi.iframes.getContext());else if(!((h=Re().gapi)===null||h===void 0)&&h.load)v();else{const I=cu("iframefcb");return Re()[I]=()=>{gapi.load?v():r(Pe(i,"network-request-failed"))},Ss(`${au()}?onload=${I}`).catch(E=>r(E))}}).catch(e=>{throw Tn=null,e})}let Tn=null;function ml(i){return Tn=Tn||gl(i),Tn}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const vl=new tn(5e3,15e3),yl="__/auth/iframe",_l="emulator/auth/iframe",bl={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wl=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function El(i){const e=i.config;j(e.authDomain,i,"auth-domain-config-required");const r=e.emulator?Cr(e,_l):`https://${i.config.authDomain}/${yl}`,a={apiKey:e.apiKey,appName:i.name,v:en},l=wl.get(i.config.apiHost);l&&(a.eid=l);const h=i._getFrameworks();return h.length&&(a.fw=h.join(",")),`${r}?${Zt(a).slice(1)}`}async function Tl(i){const e=await ml(i),r=Re().gapi;return j(r,i,"internal-error"),e.open({where:document.body,url:El(i),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bl,dontclear:!0},a=>new Promise(async(l,h)=>{await a.restyle({setHideOnLeave:!1});const v=Pe(i,"network-request-failed"),I=Re().setTimeout(()=>{h(v)},vl.get());function E(){Re().clearTimeout(I),l(a)}a.ping(E).then(E,()=>{h(v)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Il={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Sl=500,Cl=600,Al="_blank",kl="http://localhost";class Wi{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Pl(i,e,r,a=Sl,l=Cl){const h=Math.max((window.screen.availHeight-l)/2,0).toString(),v=Math.max((window.screen.availWidth-a)/2,0).toString();let I="";const E=Object.assign(Object.assign({},Il),{width:a.toString(),height:l.toString(),top:h,left:v}),R=ce().toLowerCase();r&&(I=ys(R)?Al:r),ms(R)&&(e=e||kl,E.scrollbars="yes");const G=Object.entries(E).reduce((ie,[me,M])=>`${ie}${me}=${M},`,"");if(Qc(R)&&I!=="_self")return Rl(e||"",I),new Wi(null);const X=window.open(e||"",I,G);j(X,i,"popup-blocked");try{X.focus()}catch{}return new Wi(X)}function Rl(i,e){const r=document.createElement("a");r.href=i,r.target=e;const a=document.createEvent("MouseEvent");a.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(a)}/**
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
 */const Ol="__/auth/handler",xl="emulator/auth/handler",Nl=encodeURIComponent("fac");async function Vi(i,e,r,a,l,h){j(i.config.authDomain,i,"auth-domain-config-required"),j(i.config.apiKey,i,"invalid-api-key");const v={apiKey:i.config.apiKey,appName:i.name,authType:r,redirectUrl:a,v:en,eventId:l};if(e instanceof ks){e.setDefaultLanguage(i.languageCode),v.providerId=e.providerId||"",va(e.getCustomParameters())||(v.customParameters=JSON.stringify(e.getCustomParameters()));for(const[G,X]of Object.entries({}))v[G]=X}if(e instanceof rn){const G=e.getScopes().filter(X=>X!=="");G.length>0&&(v.scopes=G.join(","))}i.tenantId&&(v.tid=i.tenantId);const I=v;for(const G of Object.keys(I))I[G]===void 0&&delete I[G];const E=await i._getAppCheckToken(),R=E?`#${Nl}=${encodeURIComponent(E)}`:"";return`${Dl(i)}?${Zt(I).slice(1)}${R}`}function Dl({config:i}){return i.emulator?Cr(i,xl):`https://${i.authDomain}/${Ol}`}/**
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
 */const pr="webStorageSupport";class Ll{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ls,this._completeRedirectFn=sl,this._overrideRedirectResult=nl}async _openPopup(e,r,a,l){var h;$e((h=this.eventManagers[e._key()])===null||h===void 0?void 0:h.manager,"_initialize() not called before _openPopup()");const v=await Vi(e,r,a,br(),l);return Pl(e,v,Or())}async _openRedirect(e,r,a,l){await this._originValidation(e);const h=await Vi(e,r,a,br(),l);return ju(h),new Promise(()=>{})}_initialize(e){const r=e._key();if(this.eventManagers[r]){const{manager:l,promise:h}=this.eventManagers[r];return l?Promise.resolve(l):($e(h,"If manager is not set, promise should be"),h)}const a=this.initAndGetManager(e);return this.eventManagers[r]={promise:a},a.catch(()=>{delete this.eventManagers[r]}),a}async initAndGetManager(e){const r=await Tl(e),a=new al(e);return r.register("authEvent",l=>(j(l==null?void 0:l.authEvent,e,"invalid-auth-event"),{status:a.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:a},this.iframes[e._key()]=r,a}_isIframeWebStorageSupported(e,r){this.iframes[e._key()].send(pr,{type:pr},l=>{var h;const v=(h=l==null?void 0:l[0])===null||h===void 0?void 0:h[pr];v!==void 0&&r(!!v),be(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const r=e._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=dl(e)),this.originValidationPromises[r]}get _shouldInitProactively(){return Ts()||vs()||kr()}}const Ml=Ll;var zi="@firebase/auth",Gi="1.9.0";/**
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
 */class Ul{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const r=this.auth.onIdTokenChanged(a=>{e((a==null?void 0:a.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,r),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const r=this.internalListeners.get(e);r&&(this.internalListeners.delete(e),r(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function jl(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Hl(i){Kt(new kt("auth",(e,{options:r})=>{const a=e.getProvider("app").getImmediate(),l=e.getProvider("heartbeat"),h=e.getProvider("app-check-internal"),{apiKey:v,authDomain:I}=a.options;j(v&&!v.includes(":"),"invalid-api-key",{appName:a.name});const E={apiKey:v,authDomain:I,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Is(i)},R=new iu(a,l,h,E);return pu(R,r),R},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,r,a)=>{e.getProvider("auth-internal").initialize()})),Kt(new kt("auth-internal",e=>{const r=rt(e.getProvider("auth").getImmediate());return(a=>new Ul(a))(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),It(zi,Gi,jl(i)),It(zi,Gi,"esm2017")}/**
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
 */const Fl=5*60,Bl=es("authIdTokenMaxAge")||Fl;let Ki=null;const $l=i=>async e=>{const r=e&&await e.getIdTokenResult(),a=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(a&&a>Bl)return;const l=r==null?void 0:r.token;Ki!==l&&(Ki=l,await fetch(i,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function Zl(i=bc()){const e=is(i,"auth");if(e.isInitialized())return e.getImmediate();const r=hu(i,{popupRedirectResolver:Ml,persistence:[Gu,Lu,Ls]}),a=es("authTokenSyncURL");if(a&&typeof isSecureContext=="boolean"&&isSecureContext){const h=new URL(a,location.origin);if(location.origin===h.origin){const v=$l(h.toString());xu(r,v,()=>v(r.currentUser)),Ou(r,I=>v(I))}}const l=Qi("auth");return l&&gu(r,`http://${l}`),r}function ql(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}su({loadJS(i){return new Promise((e,r)=>{const a=document.createElement("script");a.setAttribute("src",i),a.onload=e,a.onerror=l=>{const h=Pe("internal-error");h.customData=l,r(h)},a.type="text/javascript",a.charset="UTF-8",ql().appendChild(a)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Hl("Browser");export{Wl as $,kt as C,nt as F,ts as L,en as S,Kt as _,Ls as a,Lu as b,Xl as c,Kl as d,Jl as e,Ql as f,Zl as g,_e as h,_c as i,ee as j,bc as k,is as l,Vl as m,qe as n,zl as o,Gl as p,ce as q,It as r,Yl as s};
