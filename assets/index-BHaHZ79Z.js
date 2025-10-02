(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=r(i);fetch(i.href,a)}})();const on=!1;var Jt=Array.isArray,gi=Array.prototype.indexOf,Ar=Array.from,br=Object.defineProperty,je=Object.getOwnPropertyDescriptor,ln=Object.getOwnPropertyDescriptors,bi=Object.prototype,mi=Array.prototype,Nr=Object.getPrototypeOf,jr=Object.isExtensible;function st(e){return typeof e=="function"}const wt=()=>{};function yi(e){return e()}function Vt(e){for(var t=0;t<e.length;t++)e[t]()}function wi(){var e,t,r=new Promise((n,i)=>{e=n,t=i});return{promise:r,resolve:e,reject:t}}function $i(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const re=2,Tr=4,Xt=8,et=16,Ce=32,tt=64,Pr=128,oe=256,Gt=512,U=1024,le=2048,Me=4096,de=8192,rt=16384,Zt=32768,_t=65536,Hr=1<<17,Ei=1<<18,ht=1<<19,un=1<<20,mr=1<<21,xr=1<<22,Ke=1<<23,Pe=Symbol("$state"),fn=Symbol("legacy props"),Si=Symbol(""),Or=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function ki(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Ai(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Ni(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Ti(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Pi(e){throw new Error("https://svelte.dev/e/effect_orphan")}function xi(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Oi(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function Ci(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Mi(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Ri(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Ii(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const Qt=1,er=2,cn=4,Li=8,qi=16,Fi=1,Di=2,vn=4,zi=8,ji=16,Hi=4,Ui=1,Vi=2,j=Symbol(),Gi="http://www.w3.org/1999/xhtml",Bi="http://www.w3.org/2000/svg",Wi="@attach";function Ki(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Yi(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let Ji=!1;function dn(e){return e===this.v}function Xi(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function _n(e){return!Xi(e,this.v)}let pt=!1,Zi=!1;function Qi(){pt=!0}let q=null;function ft(e){q=e}function xt(e,t=!1,r){q={p:q,c:null,e:null,s:e,x:null,l:pt&&!t?{s:null,u:null,$:[]}:null}}function Ot(e){var t=q,r=t.e;if(r!==null){t.e=null;for(var n of r)On(n)}return q=t.p,{}}function Ct(){return!pt||q!==null&&q.l===null}let De=[],Bt=[];function hn(){var e=De;De=[],Vt(e)}function ea(){var e=Bt;Bt=[],Vt(e)}function ta(){return De.length>0||Bt.length>0}function nt(e){if(De.length===0&&!kt){var t=De;queueMicrotask(()=>{t===De&&hn()})}De.push(e)}function ra(){De.length>0&&hn(),Bt.length>0&&ea()}const na=new WeakMap;function pn(e){var t=T;if(t===null)return x.f|=Ke,e;if((t.f&Zt)===0){if((t.f&Pr)===0)throw!t.parent&&e instanceof Error&&gn(e),e;t.b.error(e)}else ct(e,t)}function ct(e,t){for(;t!==null;){if((t.f&Pr)!==0)try{t.b.error(e);return}catch(r){e=r}t=t.parent}throw e instanceof Error&&gn(e),e}function gn(e){const t=na.get(e);t&&(br(e,"message",{value:t.message}),br(e,"stack",{value:t.stack}))}const cr=new Set;let I=null,Ut=null,yr=new Set,Ze=[],tr=null,wr=!1,kt=!1;class xe{current=new Map;#a=new Map;#t=new Set;#v=0;#s=null;#f=!1;#i=[];#r=[];#e=[];#n=[];#o=[];#c=[];#u=[];skipped_effects=new Set;process(t){Ze=[],Ut=null;for(const i of t)this.#d(i);if(this.#i.length===0&&this.#v===0){this.#_();var r=this.#e,n=this.#n;this.#e=[],this.#n=[],this.#o=[],Ut=I,I=null,Ur(r),Ur(n),I===null?I=this:cr.delete(this),this.#s?.resolve()}else this.#l(this.#e),this.#l(this.#n),this.#l(this.#o);for(const i of this.#i)Xe(i);for(const i of this.#r)Xe(i);this.#i=[],this.#r=[]}#d(t){t.f^=U;for(var r=t.first;r!==null;){var n=r.f,i=(n&(Ce|tt))!==0,a=i&&(n&U)!==0,s=a||(n&de)!==0||this.skipped_effects.has(r);if(!s&&r.fn!==null){if(i)r.f^=U;else if((n&Tr)!==0)this.#n.push(r);else if((n&U)===0)if((n&xr)!==0){var o=r.b?.is_pending()?this.#r:this.#i;o.push(r)}else It(r)&&((r.f&et)!==0&&this.#o.push(r),Xe(r));var l=r.first;if(l!==null){r=l;continue}}var u=r.parent;for(r=r.next;r===null&&u!==null;)r=u.next,u=u.parent}}#l(t){for(const r of t)((r.f&le)!==0?this.#c:this.#u).push(r),K(r,U);t.length=0}capture(t,r){this.#a.has(t)||this.#a.set(t,r),this.current.set(t,t.v)}activate(){I=this}deactivate(){I=null,Ut=null;for(const t of yr)if(yr.delete(t),t(),I!==null)break}neuter(){this.#f=!0}flush(){Ze.length>0?bn():this.#_(),I===this&&(this.#v===0&&cr.delete(this),this.deactivate())}#_(){if(!this.#f)for(const t of this.#t)t();this.#t.clear()}increment(){this.#v+=1}decrement(){if(this.#v-=1,this.#v===0){for(const t of this.#c)K(t,le),vt(t);for(const t of this.#u)K(t,Me),vt(t);this.#e=[],this.#n=[],this.flush()}else this.deactivate()}add_callback(t){this.#t.add(t)}settled(){return(this.#s??=wi()).promise}static ensure(){if(I===null){const t=I=new xe;cr.add(I),kt||xe.enqueue(()=>{I===t&&t.flush()})}return I}static enqueue(t){nt(t)}}function ia(e){var t=kt;kt=!0;try{for(var r;;){if(ra(),Ze.length===0&&!ta()&&(I?.flush(),Ze.length===0))return tr=null,r;bn()}}finally{kt=t}}function bn(){var e=ut;wr=!0;try{var t=0;for(Kr(!0);Ze.length>0;){var r=xe.ensure();if(t++>1e3){var n,i;aa()}r.process(Ze),He.clear()}}finally{wr=!1,Kr(e),tr=null}}function aa(){try{xi()}catch(e){ct(e,tr)}}let We=null;function Ur(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(rt|de))===0&&It(n)&&(We=[],Xe(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null&&n.ac===null?In(n):n.fn=null),We?.length>0)){He.clear();for(const i of We)Xe(i);We=[]}}We=null}}function vt(e){for(var t=tr=e;t.parent!==null;){t=t.parent;var r=t.f;if(wr&&t===T&&(r&et)!==0)return;if((r&(tt|Ce))!==0){if((r&U)===0)return;t.f^=U}}Ze.push(t)}function sa(e){let t=0,r=Ue(0),n;return()=>{wa()&&(v(r),ir(()=>(t===0&&(n=F(()=>e(()=>At(r)))),t+=1,()=>{nt(()=>{t-=1,t===0&&(n?.(),n=void 0,At(r))})})))}}var oa=_t|ht|Pr;function la(e,t,r){new ua(e,t,r)}class ua{parent;#a=!1;#t;#v=null;#s;#f;#i;#r=null;#e=null;#n=null;#o=null;#c=0;#u=0;#d=!1;#l=null;#_=()=>{this.#l&&Qe(this.#l,this.#c)};#b=sa(()=>(this.#l=Ue(this.#c),()=>{this.#l=null}));constructor(t,r,n){this.#t=t,this.#s=r,this.#f=n,this.parent=T.b,this.#a=!!this.#s.pending,this.#i=mt(()=>{T.b=this;{try{this.#r=Z(()=>n(this.#t))}catch(i){this.error(i)}this.#u>0?this.#p():this.#a=!1}},oa)}#m(){try{this.#r=Z(()=>this.#f(this.#t))}catch(t){this.error(t)}this.#a=!1}#y(){const t=this.#s.pending;t&&(this.#e=Z(()=>t(this.#t)),xe.enqueue(()=>{this.#r=this.#h(()=>(xe.ensure(),Z(()=>this.#f(this.#t)))),this.#u>0?this.#p():(Ye(this.#e,()=>{this.#e=null}),this.#a=!1)}))}is_pending(){return this.#a||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#s.pending}#h(t){var r=T,n=x,i=q;ue(this.#i),Q(this.#i),ft(this.#i.ctx);try{return t()}catch(a){return pn(a),null}finally{ue(r),Q(n),ft(i)}}#p(){const t=this.#s.pending;this.#r!==null&&(this.#o=document.createDocumentFragment(),fa(this.#r,this.#o)),this.#e===null&&(this.#e=Z(()=>t(this.#t)))}#g(t){if(!this.has_pending_snippet()){this.parent&&this.parent.#g(t);return}this.#u+=t,this.#u===0&&(this.#a=!1,this.#e&&Ye(this.#e,()=>{this.#e=null}),this.#o&&(this.#t.before(this.#o),this.#o=null))}update_pending_count(t){this.#g(t),this.#c+=t,yr.add(this.#_)}get_effect_pending(){return this.#b(),v(this.#l)}error(t){var r=this.#s.onerror;let n=this.#s.failed;if(this.#d||!r&&!n)throw t;this.#r&&(V(this.#r),this.#r=null),this.#e&&(V(this.#e),this.#e=null),this.#n&&(V(this.#n),this.#n=null);var i=!1,a=!1;const s=()=>{if(i){Yi();return}i=!0,a&&Ii(),xe.ensure(),this.#c=0,this.#n!==null&&Ye(this.#n,()=>{this.#n=null}),this.#a=this.has_pending_snippet(),this.#r=this.#h(()=>(this.#d=!1,Z(()=>this.#f(this.#t)))),this.#u>0?this.#p():this.#a=!1};var o=x;try{Q(null),a=!0,r?.(t,s),a=!1}catch(l){ct(l,this.#i&&this.#i.parent)}finally{Q(o)}n&&nt(()=>{this.#n=this.#h(()=>{this.#d=!0;try{return Z(()=>{n(this.#t,()=>t,()=>s)})}catch(l){return ct(l,this.#i.parent),null}finally{this.#d=!1}})})}}function fa(e,t){for(var r=e.nodes_start,n=e.nodes_end;r!==null;){var i=r===n?null:Rt(r);t.append(r),r=i}}function mn(e,t,r){const n=Ct()?Mt:rr;if(t.length===0){r(e.map(n));return}var i=I,a=T,s=ca();Promise.all(t.map(o=>va(o))).then(o=>{i?.activate(),s();try{r([...e.map(n),...o])}catch(l){(a.f&rt)===0&&ct(l,a)}i?.deactivate(),yn()}).catch(o=>{ct(o,a)})}function ca(){var e=T,t=x,r=q,n=I;return function(){ue(e),Q(t),ft(r),n?.activate()}}function yn(){ue(null),Q(null),ft(null)}function Mt(e){var t=re|le,r=x!==null&&(x.f&re)!==0?x:null;return T===null||r!==null&&(r.f&oe)!==0?t|=oe:T.f|=ht,{ctx:q,deps:null,effects:null,equals:dn,f:t,fn:e,reactions:null,rv:0,v:j,wv:0,parent:r??T,ac:null}}function va(e,t){let r=T;r===null&&Ai();var n=r.b,i=void 0,a=Ue(j),s=null,o=!x;return Sa(()=>{try{var l=e();s&&Promise.resolve(l).catch(()=>{})}catch(_){l=Promise.reject(_)}var u=()=>l;i=s?.then(u,u)??Promise.resolve(l),s=i;var f=I,d=n.is_pending();o&&(n.update_pending_count(1),d||f.increment());const h=(_,c=void 0)=>{s=null,d||f.activate(),c?c!==Or&&(a.f|=Ke,Qe(a,c)):((a.f&Ke)!==0&&(a.f^=Ke),Qe(a,_)),o&&(n.update_pending_count(-1),d||f.decrement()),yn()};if(i.then(h,_=>h(null,_||"unknown")),f)return()=>{queueMicrotask(()=>f.neuter())}}),new Promise(l=>{function u(f){function d(){f===i?l(a):u(i)}f.then(d,d)}u(i)})}function da(e){const t=Mt(e);return Fn(t),t}function rr(e){const t=Mt(e);return t.equals=_n,t}function wn(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)V(t[r])}}function _a(e){for(var t=e.parent;t!==null;){if((t.f&re)===0)return t;t=t.parent}return null}function Cr(e){var t,r=T;ue(_a(e));try{wn(e),t=Hn(e)}finally{ue(r)}return t}function $n(e){var t=Cr(e);if(e.equals(t)||(e.v=t,e.wv=zn()),!it){var r=(ze||(e.f&oe)!==0)&&e.deps!==null?Me:U;K(e,r)}}const He=new Map;function Ue(e,t){var r={f:0,v:e,reactions:null,equals:dn,rv:0,wv:0};return r}function Fe(e,t){const r=Ue(e);return Fn(r),r}function L(e,t=!1,r=!0){const n=Ue(e);return t||(n.equals=_n),pt&&r&&q!==null&&q.l!==null&&(q.l.s??=[]).push(n),n}function E(e,t,r=!1){x!==null&&(!ve||(x.f&Hr)!==0)&&Ct()&&(x.f&(re|et|xr|Hr))!==0&&!Oe?.includes(e)&&Ri();let n=r?lt(t):t;return Qe(e,n)}function Qe(e,t){if(!e.equals(t)){var r=e.v;it?He.set(e,t):He.set(e,r),e.v=t;var n=xe.ensure();n.capture(e,r),(e.f&re)!==0&&((e.f&le)!==0&&Cr(e),K(e,(e.f&oe)===0?U:Me)),e.wv=zn(),En(e,le),Ct()&&T!==null&&(T.f&U)!==0&&(T.f&(Ce|tt))===0&&(se===null?Pa([e]):se.push(e))}return t}function Vr(e,t=1){var r=v(e),n=t===1?r++:r--;return E(e,r),n}function At(e){E(e,e.v+1)}function En(e,t){var r=e.reactions;if(r!==null)for(var n=Ct(),i=r.length,a=0;a<i;a++){var s=r[a],o=s.f;if(!(!n&&s===T)){var l=(o&le)===0;l&&K(s,t),(o&re)!==0?En(s,Me):l&&((o&et)!==0&&We!==null&&We.push(s),vt(s))}}}function lt(e){if(typeof e!="object"||e===null||Pe in e)return e;const t=Nr(e);if(t!==bi&&t!==mi)return e;var r=new Map,n=Jt(e),i=Fe(0),a=Je,s=o=>{if(Je===a)return o();var l=x,u=Je;Q(null),Jr(a);var f=o();return Q(l),Jr(u),f};return n&&r.set("length",Fe(e.length)),new Proxy(e,{defineProperty(o,l,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&Ci();var f=r.get(l);return f===void 0?f=s(()=>{var d=Fe(u.value);return r.set(l,d),d}):E(f,u.value,!0),!0},deleteProperty(o,l){var u=r.get(l);if(u===void 0){if(l in o){const f=s(()=>Fe(j));r.set(l,f),At(i)}}else E(u,j),At(i);return!0},get(o,l,u){if(l===Pe)return e;var f=r.get(l),d=l in o;if(f===void 0&&(!d||je(o,l)?.writable)&&(f=s(()=>{var _=lt(d?o[l]:j),c=Fe(_);return c}),r.set(l,f)),f!==void 0){var h=v(f);return h===j?void 0:h}return Reflect.get(o,l,u)},getOwnPropertyDescriptor(o,l){var u=Reflect.getOwnPropertyDescriptor(o,l);if(u&&"value"in u){var f=r.get(l);f&&(u.value=v(f))}else if(u===void 0){var d=r.get(l),h=d?.v;if(d!==void 0&&h!==j)return{enumerable:!0,configurable:!0,value:h,writable:!0}}return u},has(o,l){if(l===Pe)return!0;var u=r.get(l),f=u!==void 0&&u.v!==j||Reflect.has(o,l);if(u!==void 0||T!==null&&(!f||je(o,l)?.writable)){u===void 0&&(u=s(()=>{var h=f?lt(o[l]):j,_=Fe(h);return _}),r.set(l,u));var d=v(u);if(d===j)return!1}return f},set(o,l,u,f){var d=r.get(l),h=l in o;if(n&&l==="length")for(var _=u;_<d.v;_+=1){var c=r.get(_+"");c!==void 0?E(c,j):_ in o&&(c=s(()=>Fe(j)),r.set(_+"",c))}if(d===void 0)(!h||je(o,l)?.writable)&&(d=s(()=>Fe(void 0)),E(d,lt(u)),r.set(l,d));else{h=d.v!==j;var p=s(()=>lt(u));E(d,p)}var g=Reflect.getOwnPropertyDescriptor(o,l);if(g?.set&&g.set.call(f,u),!h){if(n&&typeof l=="string"){var b=r.get("length"),S=Number(l);Number.isInteger(S)&&S>=b.v&&E(b,S+1)}At(i)}return!0},ownKeys(o){v(i);var l=Reflect.ownKeys(o).filter(d=>{var h=r.get(d);return h===void 0||h.v!==j});for(var[u,f]of r)f.v!==j&&!(u in o)&&l.push(u);return l},setPrototypeOf(){Mi()}})}function Gr(e){try{if(e!==null&&typeof e=="object"&&Pe in e)return e[Pe]}catch{}return e}function ha(e,t){return Object.is(Gr(e),Gr(t))}var Br,Sn,kn,An;function pa(){if(Br===void 0){Br=window,Sn=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;kn=je(t,"firstChild").get,An=je(t,"nextSibling").get,jr(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),jr(r)&&(r.__t=void 0)}}function gt(e=""){return document.createTextNode(e)}function dt(e){return kn.call(e)}function Rt(e){return An.call(e)}function A(e,t){return dt(e)}function W(e,t=!1){{var r=dt(e);return r instanceof Comment&&r.data===""?Rt(r):r}}function P(e,t=1,r=!1){let n=e;for(;t--;)n=Rt(n);return n}function ga(e){e.textContent=""}function Nn(){return!1}function ba(e,t){if(t){const r=document.body;e.autofocus=!0,nt(()=>{document.activeElement===r&&e.focus()})}}let Wr=!1;function ma(){Wr||(Wr=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function bt(e){var t=x,r=T;Q(null),ue(null);try{return e()}finally{Q(t),ue(r)}}function Tn(e,t,r,n=r){e.addEventListener(t,()=>bt(r));const i=e.__on_r;i?e.__on_r=()=>{i(),n(!0)}:e.__on_r=()=>n(!0),ma()}function Pn(e){T===null&&x===null&&Pi(),x!==null&&(x.f&oe)!==0&&T===null&&Ti(),it&&Ni()}function ya(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function $e(e,t,r,n=!0){var i=T;i!==null&&(i.f&de)!==0&&(e|=de);var a={ctx:q,deps:null,nodes_start:null,nodes_end:null,f:e|le,first:null,fn:t,last:null,next:null,parent:i,b:i&&i.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(r)try{Xe(a),a.f|=Zt}catch(l){throw V(a),l}else t!==null&&vt(a);if(n){var s=a;if(r&&s.deps===null&&s.teardown===null&&s.nodes_start===null&&s.first===s.last&&(s.f&ht)===0&&(s=s.first),s!==null&&(s.parent=i,i!==null&&ya(s,i),x!==null&&(x.f&re)!==0&&(e&tt)===0)){var o=x;(o.effects??=[]).push(s)}}return a}function wa(){return x!==null&&!ve}function xn(e){const t=$e(Xt,null,!1);return K(t,U),t.teardown=e,t}function $r(e){Pn();var t=T.f,r=!x&&(t&Ce)!==0&&(t&Zt)===0;if(r){var n=q;(n.e??=[]).push(e)}else return On(e)}function On(e){return $e(Tr|un,e,!1)}function $a(e){return Pn(),$e(Xt|un,e,!0)}function Ea(e){xe.ensure();const t=$e(tt|ht,e,!0);return(r={})=>new Promise(n=>{r.outro?Ye(t,()=>{V(t),n(void 0)}):(V(t),n(void 0))})}function nr(e){return $e(Tr,e,!1)}function ce(e,t){var r=q,n={effect:null,ran:!1,deps:e};r.l.$.push(n),n.effect=ir(()=>{e(),!n.ran&&(n.ran=!0,F(t))})}function Cn(){var e=q;ir(()=>{for(var t of e.l.$){t.deps();var r=t.effect;(r.f&U)!==0&&K(r,Me),It(r)&&Xe(r),t.ran=!1}})}function Sa(e){return $e(xr|ht,e,!0)}function ir(e,t=0){return $e(Xt|t,e,!0)}function ge(e,t=[],r=[]){mn(t,r,n=>{$e(Xt,()=>e(...n.map(v)),!0)})}function mt(e,t=0){var r=$e(et|t,e,!0);return r}function Z(e,t=!0){return $e(Ce|ht,e,!0,t)}function Mn(e){var t=e.teardown;if(t!==null){const r=it,n=x;Yr(!0),Q(null);try{t.call(null)}finally{Yr(r),Q(n)}}}function Rn(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const i=r.ac;i!==null&&bt(()=>{i.abort(Or)});var n=r.next;(r.f&tt)!==0?r.parent=null:V(r,t),r=n}}function ka(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&Ce)===0&&V(t),t=r}}function V(e,t=!0){var r=!1;(t||(e.f&Ei)!==0)&&e.nodes_start!==null&&e.nodes_end!==null&&(Aa(e.nodes_start,e.nodes_end),r=!0),Rn(e,t&&!r),Wt(e,0),K(e,rt);var n=e.transitions;if(n!==null)for(const a of n)a.stop();Mn(e);var i=e.parent;i!==null&&i.first!==null&&In(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function Aa(e,t){for(;e!==null;){var r=e===t?null:Rt(e);e.remove(),e=r}}function In(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function Ye(e,t){var r=[];Mr(e,r,!0),Ln(r,()=>{V(e),t&&t()})}function Ln(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var i of e)i.out(n)}else t()}function Mr(e,t,r){if((e.f&de)===0){if(e.f^=de,e.transitions!==null)for(const s of e.transitions)(s.is_global||r)&&t.push(s);for(var n=e.first;n!==null;){var i=n.next,a=(n.f&_t)!==0||(n.f&Ce)!==0;Mr(n,t,a?r:!1),n=i}}}function ar(e){qn(e,!0)}function qn(e,t){if((e.f&de)!==0){e.f^=de,(e.f&U)===0&&(K(e,le),vt(e));for(var r=e.first;r!==null;){var n=r.next,i=(r.f&_t)!==0||(r.f&Ce)!==0;qn(r,i?t:!1),r=n}if(e.transitions!==null)for(const a of e.transitions)(a.is_global||t)&&a.in()}}let ot=null;function Na(e){var t=ot;try{if(ot=new Set,F(e),t!==null)for(var r of ot)t.add(r);return ot}finally{ot=t}}function Ta(e){for(var t of Na(e))Qe(t,t.v)}let ut=!1;function Kr(e){ut=e}let it=!1;function Yr(e){it=e}let x=null,ve=!1;function Q(e){x=e}let T=null;function ue(e){T=e}let Oe=null;function Fn(e){x!==null&&(Oe===null?Oe=[e]:Oe.push(e))}let B=null,te=0,se=null;function Pa(e){se=e}let Dn=1,Tt=0,Je=Tt;function Jr(e){Je=e}let ze=!1;function zn(){return++Dn}function It(e){var t=e.f;if((t&le)!==0)return!0;if((t&Me)!==0){var r=e.deps,n=(t&oe)!==0;if(r!==null){var i,a,s=(t&Gt)!==0,o=n&&T!==null&&!ze,l=r.length;if((s||o)&&(T===null||(T.f&rt)===0)){var u=e,f=u.parent;for(i=0;i<l;i++)a=r[i],(s||!a?.reactions?.includes(u))&&(a.reactions??=[]).push(u);s&&(u.f^=Gt),o&&f!==null&&(f.f&oe)===0&&(u.f^=oe)}for(i=0;i<l;i++)if(a=r[i],It(a)&&$n(a),a.wv>e.wv)return!0}(!n||T!==null&&!ze)&&K(e,U)}return!1}function jn(e,t,r=!0){var n=e.reactions;if(n!==null&&!Oe?.includes(e))for(var i=0;i<n.length;i++){var a=n[i];(a.f&re)!==0?jn(a,t,!1):t===a&&(r?K(a,le):(a.f&U)!==0&&K(a,Me),vt(a))}}function Hn(e){var t=B,r=te,n=se,i=x,a=ze,s=Oe,o=q,l=ve,u=Je,f=e.f;B=null,te=0,se=null,ze=(f&oe)!==0&&(ve||!ut||x===null),x=(f&(Ce|tt))===0?e:null,Oe=null,ft(e.ctx),ve=!1,Je=++Tt,e.ac!==null&&(bt(()=>{e.ac.abort(Or)}),e.ac=null);try{e.f|=mr;var d=e.fn,h=d(),_=e.deps;if(B!==null){var c;if(Wt(e,te),_!==null&&te>0)for(_.length=te+B.length,c=0;c<B.length;c++)_[te+c]=B[c];else e.deps=_=B;if(!ze||(f&re)!==0&&e.reactions!==null)for(c=te;c<_.length;c++)(_[c].reactions??=[]).push(e)}else _!==null&&te<_.length&&(Wt(e,te),_.length=te);if(Ct()&&se!==null&&!ve&&_!==null&&(e.f&(re|Me|le))===0)for(c=0;c<se.length;c++)jn(se[c],e);return i!==null&&i!==e&&(Tt++,se!==null&&(n===null?n=se:n.push(...se))),(e.f&Ke)!==0&&(e.f^=Ke),h}catch(p){return pn(p)}finally{e.f^=mr,B=t,te=r,se=n,x=i,ze=a,Oe=s,ft(o),ve=l,Je=u}}function xa(e,t){let r=t.reactions;if(r!==null){var n=gi.call(r,e);if(n!==-1){var i=r.length-1;i===0?r=t.reactions=null:(r[n]=r[i],r.pop())}}r===null&&(t.f&re)!==0&&(B===null||!B.includes(t))&&(K(t,Me),(t.f&(oe|Gt))===0&&(t.f^=Gt),wn(t),Wt(t,0))}function Wt(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)xa(e,r[n])}function Xe(e){var t=e.f;if((t&rt)===0){K(e,U);var r=T,n=ut;T=e,ut=!0;try{(t&et)!==0?ka(e):Rn(e),Mn(e);var i=Hn(e);e.teardown=typeof i=="function"?i:null,e.wv=Dn;var a;on&&Zi&&(e.f&le)!==0&&e.deps}finally{ut=n,T=r}}}async function Oa(){await Promise.resolve(),ia()}function v(e){var t=e.f,r=(t&re)!==0;if(ot?.add(e),x!==null&&!ve){var n=T!==null&&(T.f&rt)!==0;if(!n&&!Oe?.includes(e)){var i=x.deps;if((x.f&mr)!==0)e.rv<Tt&&(e.rv=Tt,B===null&&i!==null&&i[te]===e?te++:B===null?B=[e]:(!ze||!B.includes(e))&&B.push(e));else{(x.deps??=[]).push(e);var a=e.reactions;a===null?e.reactions=[x]:a.includes(x)||a.push(x)}}}else if(r&&e.deps===null&&e.effects===null){var s=e,o=s.parent;o!==null&&(o.f&oe)===0&&(s.f^=oe)}if(it){if(He.has(e))return He.get(e);if(r){s=e;var l=s.v;return((s.f&U)===0&&s.reactions!==null||Un(s))&&(l=Cr(s)),He.set(s,l),l}}else r&&(s=e,It(s)&&$n(s));if((e.f&Ke)!==0)throw e.v;return e.v}function Un(e){if(e.v===j)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(He.has(t)||(t.f&re)!==0&&Un(t))return!0;return!1}function F(e){var t=ve;try{return ve=!0,e()}finally{ve=t}}const Ca=-7169;function K(e,t){e.f=e.f&Ca|t}function H(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(Pe in e)Er(e);else if(!Array.isArray(e))for(let t in e){const r=e[t];typeof r=="object"&&r&&Pe in r&&Er(r)}}}function Er(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let n in e)try{Er(e[n],t)}catch{}const r=Nr(e);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const n=ln(r);for(let i in n){const a=n[i].get;if(a)try{a.call(e)}catch{}}}}}function Ma(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Ra=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Ia(e){return Ra.includes(e)}const La={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function qa(e){return e=e.toLowerCase(),La[e]??e}const Fa=["touchstart","touchmove"];function Da(e){return Fa.includes(e)}const Vn=new Set,Sr=new Set;function Gn(e,t,r,n={}){function i(a){if(n.capture||St.call(t,a),!a.cancelBubble)return bt(()=>r?.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?nt(()=>{t.addEventListener(e,i,n)}):t.addEventListener(e,i,n),i}function Be(e,t,r,n,i){var a={capture:n,passive:i},s=Gn(e,t,r,a);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&xn(()=>{t.removeEventListener(e,s,a)})}function za(e){for(var t=0;t<e.length;t++)Vn.add(e[t]);for(var r of Sr)r(e)}let Xr=null;function St(e){var t=this,r=t.ownerDocument,n=e.type,i=e.composedPath?.()||[],a=i[0]||e.target;Xr=e;var s=0,o=Xr===e&&e.__root;if(o){var l=i.indexOf(o);if(l!==-1&&(t===document||t===window)){e.__root=t;return}var u=i.indexOf(t);if(u===-1)return;l<=u&&(s=l)}if(a=i[s]||e.target,a!==t){br(e,"currentTarget",{configurable:!0,get(){return a||r}});var f=x,d=T;Q(null),ue(null);try{for(var h,_=[];a!==null;){var c=a.assignedSlot||a.parentNode||a.host||null;try{var p=a["__"+n];if(p!=null&&(!a.disabled||e.target===a))if(Jt(p)){var[g,...b]=p;g.apply(a,[e,...b])}else p.call(a,e)}catch(S){h?_.push(S):h=S}if(e.cancelBubble||c===t||c===null)break;a=c}if(h){for(let S of _)queueMicrotask(()=>{throw S});throw h}}finally{e.__root=t,delete e.currentTarget,Q(f),ue(d)}}}function Bn(e){var t=document.createElement("template");return t.innerHTML=e.replaceAll("<!>","<!---->"),t.content}function Pt(e,t){var r=T;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function ie(e,t){var r=(t&Ui)!==0,n=(t&Vi)!==0,i,a=!e.startsWith("<!>");return()=>{i===void 0&&(i=Bn(a?e:"<!>"+e),r||(i=dt(i)));var s=n||Sn?document.importNode(i,!0):i.cloneNode(!0);if(r){var o=dt(s),l=s.lastChild;Pt(o,l)}else Pt(s,s);return s}}function ja(e,t,r="svg"){var n=!e.startsWith("<!>"),i=`<${r}>${n?e:"<!>"+e}</${r}>`,a;return()=>{if(!a){var s=Bn(i),o=dt(s);a=dt(o)}var l=a.cloneNode(!0);return Pt(l,l),l}}function Ha(e,t){return ja(e,t,"svg")}function ne(){var e=document.createDocumentFragment(),t=document.createComment(""),r=gt();return e.append(t,r),Pt(t,r),e}function C(e,t){e!==null&&e.before(t)}let Kt=!0;function Zr(e){Kt=e}function X(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??=e.nodeValue)&&(e.__t=r,e.nodeValue=r+"")}function Ua(e,t){return Va(e,t)}const at=new Map;function Va(e,{target:t,anchor:r,props:n={},events:i,context:a,intro:s=!0}){pa();var o=new Set,l=d=>{for(var h=0;h<d.length;h++){var _=d[h];if(!o.has(_)){o.add(_);var c=Da(_);t.addEventListener(_,St,{passive:c});var p=at.get(_);p===void 0?(document.addEventListener(_,St,{passive:c}),at.set(_,1)):at.set(_,p+1)}}};l(Ar(Vn)),Sr.add(l);var u=void 0,f=Ea(()=>{var d=r??t.appendChild(gt());return la(d,{pending:()=>{}},h=>{if(a){xt({});var _=q;_.c=a}i&&(n.$$events=i),Kt=s,u=e(h,n)||{},Kt=!0,a&&Ot()}),()=>{for(var h of o){t.removeEventListener(h,St);var _=at.get(h);--_===0?(document.removeEventListener(h,St),at.delete(h)):at.set(h,_)}Sr.delete(l),d!==r&&d.parentNode?.removeChild(d)}});return Ga.set(u,f),u}let Ga=new WeakMap;function be(e,t,r=!1){var n=e,i=null,a=null,s=j,o=r?_t:0,l=!1;const u=(_,c=!0)=>{l=!0,h(c,_)};var f=null;function d(){f!==null&&(f.lastChild.remove(),n.before(f),f=null);var _=s?i:a,c=s?a:i;_&&ar(_),c&&Ye(c,()=>{s?a=null:i=null})}const h=(_,c)=>{if(s!==(s=_)){var p=Nn(),g=n;if(p&&(f=document.createDocumentFragment(),f.append(g=gt())),s?i??=c&&Z(()=>c(g)):a??=c&&Z(()=>c(g)),p){var b=I,S=s?i:a,$=s?a:i;S&&b.skipped_effects.delete(S),$&&b.skipped_effects.add($),b.add_callback(d)}else d()}};mt(()=>{l=!1,t(u),l||h(null,null)},o)}function Wn(e,t){return t}function Ba(e,t,r){for(var n=e.items,i=[],a=t.length,s=0;s<a;s++)Mr(t[s].e,i,!0);var o=a>0&&i.length===0&&r!==null;if(o){var l=r.parentNode;ga(l),l.append(r),n.clear(),me(e,t[0].prev,t[a-1].next)}Ln(i,()=>{for(var u=0;u<a;u++){var f=t[u];o||(n.delete(f.k),me(e,f.prev,f.next)),V(f.e,!o)}})}function Rr(e,t,r,n,i,a=null){var s=e,o={flags:t,items:new Map,first:null},l=(t&cn)!==0;if(l){var u=e;s=u.appendChild(gt())}var f=null,d=!1,h=new Map,_=rr(()=>{var b=r();return Jt(b)?b:b==null?[]:Ar(b)}),c,p;function g(){Wa(p,c,o,h,s,i,t,n,r),a!==null&&(c.length===0?f?ar(f):f=Z(()=>a(s)):f!==null&&Ye(f,()=>{f=null}))}mt(()=>{p??=T,c=v(_);var b=c.length;if(!(d&&b===0)){d=b===0;var S,$,w,m;if(Nn()){var y=new Set,N=I;for($=0;$<b;$+=1){w=c[$],m=n(w,$);var O=o.items.get(m)??h.get(m);O?(t&(Qt|er))!==0&&Kn(O,w,$,t):(S=Yn(null,o,null,null,w,m,$,i,t,r,!0),h.set(m,S)),y.add(m)}for(const[z,Se]of o.items)y.has(z)||N.skipped_effects.add(Se.e);N.add_callback(g)}else g();v(_)}})}function Wa(e,t,r,n,i,a,s,o,l){var u=(s&Li)!==0,f=(s&(Qt|er))!==0,d=t.length,h=r.items,_=r.first,c=_,p,g=null,b,S=[],$=[],w,m,y,N;if(u)for(N=0;N<d;N+=1)w=t[N],m=o(w,N),y=h.get(m),y!==void 0&&(y.a?.measure(),(b??=new Set).add(y));for(N=0;N<d;N+=1){if(w=t[N],m=o(w,N),y=h.get(m),y===void 0){var O=n.get(m);if(O!==void 0){n.delete(m),h.set(m,O);var z=g?g.next:c;me(r,g,O),me(r,O,z),vr(O,z,i),g=O}else{var Se=c?c.e.nodes_start:i;g=Yn(Se,r,g,g===null?r.first:g.next,w,m,N,a,s,l)}h.set(m,g),S=[],$=[],c=g.next;continue}if(f&&Kn(y,w,N,s),(y.e.f&de)!==0&&(ar(y.e),u&&(y.a?.unfix(),(b??=new Set).delete(y))),y!==c){if(p!==void 0&&p.has(y)){if(S.length<$.length){var ke=$[0],Y;g=ke.prev;var Ve=S[0],Le=S[S.length-1];for(Y=0;Y<S.length;Y+=1)vr(S[Y],ke,i);for(Y=0;Y<$.length;Y+=1)p.delete($[Y]);me(r,Ve.prev,Le.next),me(r,g,Ve),me(r,Le,ke),c=ke,g=Le,N-=1,S=[],$=[]}else p.delete(y),vr(y,c,i),me(r,y.prev,y.next),me(r,y,g===null?r.first:g.next),me(r,g,y),g=y;continue}for(S=[],$=[];c!==null&&c.k!==m;)(c.e.f&de)===0&&(p??=new Set).add(c),$.push(c),c=c.next;if(c===null)continue;y=c}S.push(y),g=y,c=y.next}if(c!==null||p!==void 0){for(var he=p===void 0?[]:Ar(p);c!==null;)(c.e.f&de)===0&&he.push(c),c=c.next;var qe=he.length;if(qe>0){var yt=(s&cn)!==0&&d===0?i:null;if(u){for(N=0;N<qe;N+=1)he[N].a?.measure();for(N=0;N<qe;N+=1)he[N].a?.fix()}Ba(r,he,yt)}}u&&nt(()=>{if(b!==void 0)for(y of b)y.a?.apply()}),e.first=r.first&&r.first.e,e.last=g&&g.e;for(var ae of n.values())V(ae.e);n.clear()}function Kn(e,t,r,n){(n&Qt)!==0&&Qe(e.v,t),(n&er)!==0?Qe(e.i,r):e.i=r}function Yn(e,t,r,n,i,a,s,o,l,u,f){var d=(l&Qt)!==0,h=(l&qi)===0,_=d?h?L(i,!1,!1):Ue(i):i,c=(l&er)===0?s:Ue(s),p={i:c,v:_,k:a,a:null,e:null,prev:r,next:n};try{if(e===null){var g=document.createDocumentFragment();g.append(e=gt())}return p.e=Z(()=>o(e,_,c,u),Ji),p.e.prev=r&&r.e,p.e.next=n&&n.e,r===null?f||(t.first=p):(r.next=p,r.e.next=p.e),n!==null&&(n.prev=p,n.e.prev=p.e),p}finally{}}function vr(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,i=t?t.e.nodes_start:r,a=e.e.nodes_start;a!==null&&a!==n;){var s=Rt(a);i.before(a),a=s}}function me(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function Ee(e,t,r,n,i){var a=t.$$slots?.[r],s=!1;a===!0&&(a=t.children,s=!0),a===void 0||a(e,s?()=>n:n)}function Ka(e,t,r,n,i,a){var s,o,l=null,u=e,f;mt(()=>{const d=t()||null;var h=Bi;d!==s&&(f&&(d===null?Ye(f,()=>{f=null,o=null}):d===o?ar(f):(V(f),Zr(!1))),d&&d!==o&&(f=Z(()=>{if(l=document.createElementNS(h,d),Pt(l,l),n){var _=l.appendChild(gt());n(l,_)}T.nodes_end=l,u.before(l)})),s=d,s&&(o=s),Zr(!0))},_t)}function Ya(e,t){var r=void 0,n;mt(()=>{r!==(r=t())&&(n&&(V(n),n=null),r&&(n=Z(()=>{nr(()=>r(e))})))})}function Jn(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(r=Jn(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function Ja(){for(var e,t,r=0,n="",i=arguments.length;r<i;r++)(e=arguments[r])&&(t=Jn(e))&&(n&&(n+=" "),n+=t);return n}function Xa(e){return typeof e=="object"?Ja(e):e??""}const Qr=[...` 	
\r\f \v\uFEFF`];function Za(e,t,r){var n=e==null?"":""+e;if(r){for(var i in r)if(r[i])n=n?n+" "+i:i;else if(n.length)for(var a=i.length,s=0;(s=n.indexOf(i,s))>=0;){var o=s+a;(s===0||Qr.includes(n[s-1]))&&(o===n.length||Qr.includes(n[o]))?n=(s===0?"":n.substring(0,s))+n.substring(o+1):s=o}}return n===""?null:n}function en(e,t=!1){var r=t?" !important;":";",n="";for(var i in e){var a=e[i];a!=null&&a!==""&&(n+=" "+i+": "+a+r)}return n}function dr(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Qa(e,t){if(t){var r="",n,i;if(Array.isArray(t)?(n=t[0],i=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var a=!1,s=0,o=!1,l=[];n&&l.push(...Object.keys(n).map(dr)),i&&l.push(...Object.keys(i).map(dr));var u=0,f=-1;const p=e.length;for(var d=0;d<p;d++){var h=e[d];if(o?h==="/"&&e[d-1]==="*"&&(o=!1):a?a===h&&(a=!1):h==="/"&&e[d+1]==="*"?o=!0:h==='"'||h==="'"?a=h:h==="("?s++:h===")"&&s--,!o&&a===!1&&s===0){if(h===":"&&f===-1)f=d;else if(h===";"||d===p-1){if(f!==-1){var _=dr(e.substring(u,f).trim());if(!l.includes(_)){h!==";"&&d++;var c=e.substring(u,d).trim();r+=" "+c+";"}}u=d+1,f=-1}}}}return n&&(r+=en(n)),i&&(r+=en(i,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function es(e,t,r,n,i,a){var s=e.__className;if(s!==r||s===void 0){var o=Za(r,n,a);o==null?e.removeAttribute("class"):t?e.className=o:e.setAttribute("class",o),e.__className=r}else if(a&&i!==a)for(var l in a){var u=!!a[l];(i==null||u!==!!i[l])&&e.classList.toggle(l,u)}return a}function _r(e,t={},r,n){for(var i in r){var a=r[i];t[i]!==a&&(r[i]==null?e.style.removeProperty(i):e.style.setProperty(i,a,n))}}function ts(e,t,r,n){var i=e.__style;if(i!==t){var a=Qa(t,n);a==null?e.removeAttribute("style"):e.style.cssText=a,e.__style=t}else n&&(Array.isArray(n)?(_r(e,r?.[0],n[0]),_r(e,r?.[1],n[1],"important")):_r(e,r,n));return n}function Yt(e,t,r=!1){if(e.multiple){if(t==null)return;if(!Jt(t))return Ki();for(var n of e.options)n.selected=t.includes(Nt(n));return}for(n of e.options){var i=Nt(n);if(ha(i,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function Xn(e){var t=new MutationObserver(()=>{Yt(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),xn(()=>{t.disconnect()})}function rs(e,t,r=t){var n=!0;Tn(e,"change",i=>{var a=i?"[selected]":":checked",s;if(e.multiple)s=[].map.call(e.querySelectorAll(a),Nt);else{var o=e.querySelector(a)??e.querySelector("option:not([disabled])");s=o&&Nt(o)}r(s)}),nr(()=>{var i=t();if(Yt(e,i,n),n&&i===void 0){var a=e.querySelector(":checked");a!==null&&(i=Nt(a),r(i))}e.__value=i,n=!1}),Xn(e)}function Nt(e){return"__value"in e?e.__value:e.value}const $t=Symbol("class"),Et=Symbol("style"),Zn=Symbol("is custom element"),Qn=Symbol("is html");function ns(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function ye(e,t,r,n){var i=ei(e);i[t]!==(i[t]=r)&&(t==="loading"&&(e[Si]=r),r==null?e.removeAttribute(t):typeof r!="string"&&ti(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function is(e,t,r,n,i=!1,a=!1){var s=ei(e),o=s[Zn],l=!s[Qn],u=t||{},f=e.tagName==="OPTION";for(var d in t)d in r||(r[d]=null);r.class?r.class=Xa(r.class):r[$t]&&(r.class=null),r[Et]&&(r.style??=null);var h=ti(e);for(const w in r){let m=r[w];if(f&&w==="value"&&m==null){e.value=e.__value="",u[w]=m;continue}if(w==="class"){var _=e.namespaceURI==="http://www.w3.org/1999/xhtml";es(e,_,m,n,t?.[$t],r[$t]),u[w]=m,u[$t]=r[$t];continue}if(w==="style"){ts(e,m,t?.[Et],r[Et]),u[w]=m,u[Et]=r[Et];continue}var c=u[w];if(!(m===c&&!(m===void 0&&e.hasAttribute(w)))){u[w]=m;var p=w[0]+w[1];if(p!=="$$")if(p==="on"){const y={},N="$$"+w;let O=w.slice(2);var g=Ia(O);if(Ma(O)&&(O=O.slice(0,-7),y.capture=!0),!g&&c){if(m!=null)continue;e.removeEventListener(O,u[N],y),u[N]=null}if(m!=null)if(g)e[`__${O}`]=m,za([O]);else{let z=function(Se){u[w].call(this,Se)};var $=z;u[N]=Gn(O,e,z,y)}else g&&(e[`__${O}`]=void 0)}else if(w==="style")ye(e,w,m);else if(w==="autofocus")ba(e,!!m);else if(!o&&(w==="__value"||w==="value"&&m!=null))e.value=e.__value=m;else if(w==="selected"&&f)ns(e,m);else{var b=w;l||(b=qa(b));var S=b==="defaultValue"||b==="defaultChecked";if(m==null&&!o&&!S)if(s[w]=null,b==="value"||b==="checked"){let y=e;const N=t===void 0;if(b==="value"){let O=y.defaultValue;y.removeAttribute(b),y.defaultValue=O,y.value=y.__value=N?O:null}else{let O=y.defaultChecked;y.removeAttribute(b),y.defaultChecked=O,y.checked=N?O:!1}}else e.removeAttribute(w);else S||h.includes(b)&&(o||typeof m!="string")?(e[b]=m,b in s&&(s[b]=j)):typeof m!="function"&&ye(e,b,m)}}}return u}function tn(e,t,r=[],n=[],i,a=!1,s=!1){mn(r,n,o=>{var l=void 0,u={},f=e.nodeName==="SELECT",d=!1;if(mt(()=>{var _=t(...o.map(v)),c=is(e,l,_,i,a,s);d&&f&&"value"in _&&Yt(e,_.value);for(let g of Object.getOwnPropertySymbols(u))_[g]||V(u[g]);for(let g of Object.getOwnPropertySymbols(_)){var p=_[g];g.description===Wi&&(!l||p!==l[g])&&(u[g]&&V(u[g]),u[g]=Z(()=>Ya(e,()=>p))),c[g]=p}l=c}),f){var h=e;nr(()=>{Yt(h,l.value,!0),Xn(h)})}d=!0})}function ei(e){return e.__attributes??={[Zn]:e.nodeName.includes("-"),[Qn]:e.namespaceURI===Gi}}var rn=new Map;function ti(e){var t=e.getAttribute("is")||e.nodeName,r=rn.get(t);if(r)return r;rn.set(t,r=[]);for(var n,i=e,a=Element.prototype;a!==i;){n=ln(i);for(var s in n)n[s].set&&r.push(s);i=Nr(i)}return r}const as=()=>performance.now(),Te={tick:e=>requestAnimationFrame(e),now:()=>as(),tasks:new Set};function ri(){const e=Te.now();Te.tasks.forEach(t=>{t.c(e)||(Te.tasks.delete(t),t.f())}),Te.tasks.size!==0&&Te.tick(ri)}function ss(e){let t;return Te.tasks.size===0&&Te.tick(ri),{promise:new Promise(r=>{Te.tasks.add(t={c:e,f:r})}),abort(){Te.tasks.delete(t)}}}function jt(e,t){bt(()=>{e.dispatchEvent(new CustomEvent(t))})}function os(e){if(e==="float")return"cssFloat";if(e==="offset")return"cssOffset";if(e.startsWith("--"))return e;const t=e.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(r=>r[0].toUpperCase()+r.slice(1)).join("")}function nn(e){const t={},r=e.split(";");for(const n of r){const[i,a]=n.split(":");if(!i||a===void 0)break;const s=os(i.trim());t[s]=a.trim()}return t}const ls=e=>e;function us(e,t,r,n){var i=(e&Hi)!==0,a="both",s,o=t.inert,l=t.style.overflow,u,f;function d(){return bt(()=>s??=r()(t,n?.()??{},{direction:a}))}var h={is_global:i,in(){t.inert=o,jt(t,"introstart"),u=kr(t,d(),f,1,()=>{jt(t,"introend"),u?.abort(),u=s=void 0,t.style.overflow=l})},out(g){t.inert=!0,jt(t,"outrostart"),f=kr(t,d(),u,0,()=>{jt(t,"outroend"),g?.()})},stop:()=>{u?.abort(),f?.abort()}},_=T;if((_.transitions??=[]).push(h),Kt){var c=i;if(!c){for(var p=_.parent;p&&(p.f&_t)!==0;)for(;(p=p.parent)&&(p.f&et)===0;);c=!p||(p.f&Zt)!==0}c&&nr(()=>{F(()=>h.in())})}}function kr(e,t,r,n,i){var a=n===1;if(st(t)){var s,o=!1;return nt(()=>{if(!o){var g=t({direction:a?"in":"out"});s=kr(e,g,r,n,i)}}),{abort:()=>{o=!0,s?.abort()},deactivate:()=>s.deactivate(),reset:()=>s.reset(),t:()=>s.t()}}if(r?.deactivate(),!t?.duration)return i(),{abort:wt,deactivate:wt,reset:wt,t:()=>n};const{delay:l=0,css:u,tick:f,easing:d=ls}=t;var h=[];if(a&&r===void 0&&(f&&f(0,1),u)){var _=nn(u(0,1));h.push(_,_)}var c=()=>1-n,p=e.animate(h,{duration:l,fill:"forwards"});return p.onfinish=()=>{p.cancel();var g=r?.t()??1-n;r?.abort();var b=n-g,S=t.duration*Math.abs(b),$=[];if(S>0){var w=!1;if(u)for(var m=Math.ceil(S/16.666666666666668),y=0;y<=m;y+=1){var N=g+b*d(y/m),O=nn(u(N,1-N));$.push(O),w||=O.overflow==="hidden"}w&&(e.style.overflow="hidden"),c=()=>{var z=p.currentTime;return g+b*d(z/S)},f&&ss(()=>{if(p.playState!=="running")return!1;var z=c();return f(z,1-z),!0})}p=e.animate($,{duration:S,fill:"forwards"}),p.onfinish=()=>{c=()=>n,f?.(n,1-n),i()}},{abort:()=>{p&&(p.cancel(),p.effect=null,p.onfinish=wt)},deactivate:()=>{i=wt},reset:()=>{n===0&&f?.(1,0)},t:()=>c()}}function hr(e,t,r=t){var n=new WeakSet;Tn(e,"input",async i=>{var a=i?e.defaultValue:e.value;if(a=pr(e)?gr(a):a,r(a),I!==null&&n.add(I),await Oa(),a!==(a=t())){var s=e.selectionStart,o=e.selectionEnd;e.value=a??"",o!==null&&(e.selectionStart=s,e.selectionEnd=Math.min(o,e.value.length))}}),F(t)==null&&e.value&&(r(pr(e)?gr(e.value):e.value),I!==null&&n.add(I)),ir(()=>{var i=t();if(e===document.activeElement){var a=Ut??I;if(n.has(a))return}pr(e)&&i===gr(e.value)||e.type==="date"&&!i&&!e.value||i!==e.value&&(e.value=i??"")})}function pr(e){var t=e.type;return t==="number"||t==="range"}function gr(e){return e===""?null:+e}function sr(e=!1){const t=q,r=t.l.u;if(!r)return;let n=()=>H(t.s);if(e){let i=0,a={};const s=Mt(()=>{let o=!1;const l=t.s;for(const u in l)l[u]!==a[u]&&(a[u]=l[u],o=!0);return o&&i++,i});n=()=>v(s)}r.b.length&&$a(()=>{an(t,n),Vt(r.b)}),$r(()=>{const i=F(()=>r.m.map(yi));return()=>{for(const a of i)typeof a=="function"&&a()}}),r.a.length&&$r(()=>{an(t,n),Vt(r.a)})}function an(e,t){if(e.l.s)for(const r of e.l.s)v(r);t()}let Ht=!1;function fs(e){var t=Ht;try{return Ht=!1,[e(),Ht]}finally{Ht=t}}const cs={get(e,t){if(!e.exclude.includes(t))return v(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,r){if(!(t in e.special)){var n=T;try{ue(e.parent_effect),e.special[t]=we({get[t](){return e.props[t]}},t,vn)}finally{ue(n)}}return e.special[t](r),Vr(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),Vr(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function _e(e,t){return new Proxy({props:e,exclude:t,special:{},version:Ue(0),parent_effect:T},cs)}const vs={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(st(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let i=e.props[n];st(i)&&(i=i());const a=je(i,t);if(a&&a.set)return a.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(st(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const i=je(n,t);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,t){if(t===Pe||t===fn)return!1;for(let r of e.props)if(st(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(st(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function Re(...e){return new Proxy({props:e},vs)}function we(e,t,r,n){var i=!pt||(r&Di)!==0,a=(r&zi)!==0,s=(r&ji)!==0,o=n,l=!0,u=()=>(l&&(l=!1,o=s?F(n):n),o),f;if(a){var d=Pe in e||fn in e;f=je(e,t)?.set??(d&&t in e?$=>e[t]=$:void 0)}var h,_=!1;a?[h,_]=fs(()=>e[t]):h=e[t],h===void 0&&n!==void 0&&(h=u(),f&&(i&&Oi(),f(h)));var c;if(i?c=()=>{var $=e[t];return $===void 0?u():(l=!0,$)}:c=()=>{var $=e[t];return $!==void 0&&(o=void 0),$===void 0?o:$},i&&(r&vn)===0)return c;if(f){var p=e.$$legacy;return(function($,w){return arguments.length>0?((!i||!w||p||_)&&f(w?c():$),$):c()})}var g=!1,b=((r&Fi)!==0?Mt:rr)(()=>(g=!1,c()));a&&v(b);var S=T;return(function($,w){if(arguments.length>0){const m=w?v(b):i&&a?lt($):$;return E(b,m),g=!0,o!==void 0&&(o=m),$}return it&&g||(S.f&rt)!==0?b.v:v(b)})}function ds(e){q===null&&ki(),pt&&q.l!==null?_s(q).m.push(e):$r(()=>{const t=F(e);if(typeof t=="function")return t})}function _s(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}const hs="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(hs);Qi();/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const ps={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var gs=Ha("<svg><!><!></svg>");function Ie(e,t){const r=_e(t,["children","$$slots","$$events","$$legacy"]),n=_e(r,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);xt(t,!1);let i=we(t,"name",8,void 0),a=we(t,"color",8,"currentColor"),s=we(t,"size",8,24),o=we(t,"strokeWidth",8,2),l=we(t,"absoluteStrokeWidth",8,!1),u=we(t,"iconNode",24,()=>[]);const f=(...c)=>c.filter((p,g,b)=>!!p&&b.indexOf(p)===g).join(" ");sr();var d=gs();tn(d,(c,p)=>({...ps,...n,width:s(),height:s(),stroke:a(),"stroke-width":c,class:p}),[()=>(H(l()),H(o()),H(s()),F(()=>l()?Number(o())*24/Number(s()):o())),()=>(H(i()),H(r),F(()=>f("lucide-icon","lucide",i()?`lucide-${i()}`:"",r.class)))]);var h=A(d);Rr(h,1,u,Wn,(c,p)=>{var g=da(()=>$i(v(p),2));let b=()=>v(g)[0],S=()=>v(g)[1];var $=ne(),w=W($);Ka(w,b,!0,(m,y)=>{tn(m,()=>({...S()}))}),C(c,$)});var _=P(h);Ee(_,t,"default",{}),C(e,d),Ot()}function bs(e,t){const r=_e(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m16 18 6-6-6-6"}],["path",{d:"m8 6-6 6 6 6"}]];Ie(e,Re({name:"code"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=ne(),o=W(s);Ee(o,t,"default",{}),C(i,s)},$$slots:{default:!0}}))}function ms(e,t){const r=_e(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];Ie(e,Re({name:"external-link"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=ne(),o=W(s);Ee(o,t,"default",{}),C(i,s)},$$slots:{default:!0}}))}function ys(e,t){const r=_e(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];Ie(e,Re({name:"funnel"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=ne(),o=W(s);Ee(o,t,"default",{}),C(i,s)},$$slots:{default:!0}}))}function ws(e,t){const r=_e(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["circle",{cx:"18",cy:"6",r:"3"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"}],["path",{d:"M12 12v3"}]];Ie(e,Re({name:"git-fork"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=ne(),o=W(s);Ee(o,t,"default",{}),C(i,s)},$$slots:{default:!0}}))}function $s(e,t){const r=_e(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]];Ie(e,Re({name:"github"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=ne(),o=W(s);Ee(o,t,"default",{}),C(i,s)},$$slots:{default:!0}}))}function Es(e,t){const r=_e(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"}],["path",{d:"m21 2-9.6 9.6"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5"}]];Ie(e,Re({name:"key"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=ne(),o=W(s);Ee(o,t,"default",{}),C(i,s)},$$slots:{default:!0}}))}function sn(e,t){const r=_e(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];Ie(e,Re({name:"search"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=ne(),o=W(s);Ee(o,t,"default",{}),C(i,s)},$$slots:{default:!0}}))}function Ss(e,t){const r=_e(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m18 14 4 4-4 4"}],["path",{d:"m18 2 4 4-4 4"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45"}]];Ie(e,Re({name:"shuffle"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=ne(),o=W(s);Ee(o,t,"default",{}),C(i,s)},$$slots:{default:!0}}))}function ks(e,t){const r=_e(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"}]];Ie(e,Re({name:"star"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=ne(),o=W(s);Ee(o,t,"default",{}),C(i,s)},$$slots:{default:!0}}))}var As=ie('<article class="card svelte-16q3a21"><a target="_blank" rel="noopener noreferrer" class="svelte-16q3a21"><!> </a> <p class="description svelte-16q3a21"> </p> <div class="meta svelte-16q3a21"><span class="meta-item svelte-16q3a21"><!> <span> </span></span> <span class="meta-item svelte-16q3a21"><!> <span> </span></span> <span class="meta-item svelte-16q3a21"><!> <span> </span></span></div> <div class="footer svelte-16q3a21"><small> </small></div></article>');function Ns(e,t){xt(t,!1);const r=L(),n=L(),i=L(),a=L(),s=L(),o=L(),l=L(),u=L();let f=we(t,"repo",24,()=>({}));we(t,"position",8,"inner");function d(ae){return ae>=1e6?(ae/1e6).toFixed(1)+"M":ae>=1e3?(ae/1e3).toFixed(1)+"K":ae.toString()}ce(()=>H(f()),()=>{E(r,f()?.full_name||"Unnamed Repo")}),ce(()=>H(f()),()=>{E(n,f()?.html_url||"#")}),ce(()=>H(f()),()=>{E(i,f()?.description||"No description")}),ce(()=>H(f()),()=>{E(a,f()?.stargazers_count??0)}),ce(()=>H(f()),()=>{E(s,f()?.forks_count??0)}),ce(()=>H(f()),()=>{E(o,f()?.watchers_count??0)}),ce(()=>H(f()),()=>{E(l,f()?.language||"N/A")}),ce(()=>H(f()),()=>{E(u,f()?.updated_at?new Date(f().updated_at).toLocaleDateString():"Unknown")}),Cn(),sr();var h=As(),_=A(h),c=A(_);ms(c,{class:"external-link-icon",size:16,"aria-hidden":"true"});var p=P(c),g=P(_,2),b=A(g),S=P(g,2),$=A(S),w=A($);ks(w,{class:"meta-icon",size:14,"aria-hidden":"true"});var m=P(w,2),y=A(m),N=P($,2),O=A(N);ws(O,{class:"meta-icon",size:14,"aria-hidden":"true"});var z=P(O,2),Se=A(z),ke=P(N,2),Y=A(ke);bs(Y,{class:"meta-icon",size:14,"aria-hidden":"true"});var Ve=P(Y,2),Le=A(Ve),he=P(S,2),qe=A(he),yt=A(qe);ge((ae,or)=>{ye(_,"href",v(n)),ye(_,"aria-label",`View ${v(r)??""} on GitHub`),X(p,` ${v(r)??""}`),X(b,v(i)),ye($,"title",`${v(a)??""} stars`),ye(m,"aria-label",`${v(a)??""} stars`),X(y,ae),ye(N,"title",`${v(s)??""} forks`),ye(z,"aria-label",`${v(s)??""} forks`),X(Se,or),ye(ke,"title",`Language: ${v(l)??""}`),X(Le,v(l)),X(yt,`Updated: ${v(u)??""}`)},[()=>(v(a),F(()=>d(v(a)))),()=>(v(s),F(()=>d(v(s))))]),C(e,h),Ot()}var Ts=ie('<div class="repo-grid svelte-8hz90n"></div>'),Ps=ie('<div class="no-results svelte-8hz90n"><p>No results yet.</p></div>');function xs(e,t){xt(t,!1);let r=we(t,"repos",24,()=>[]);sr();var n=ne(),i=W(n);{var a=o=>{var l=Ts();Rr(l,7,r,(u,f)=>u?.id||f,(u,f,d)=>{{let h=rr(()=>(H(v(d)),H(r()),F(()=>v(d)===0?"top-left":v(d)===r().length-1?"bottom-right":"inner")));Ns(u,{get repo(){return v(f)},get position(){return v(h)}})}}),C(o,l)},s=o=>{var l=Ps();C(o,l)};be(i,o=>{H(r()),F(()=>r()&&r().length>0)?o(a):o(s,!1)})}C(e,n),Ot()}function Os(e){const t=e-1;return t*t*t+1}function Cs(e,{delay:t=0,duration:r=400,easing:n=Os,axis:i="y"}={}){const a=getComputedStyle(e),s=+a.opacity,o=i==="y"?"height":"width",l=parseFloat(a[o]),u=i==="y"?["top","bottom"]:["left","right"],f=u.map(b=>`${b[0].toUpperCase()}${b.slice(1)}`),d=parseFloat(a[`padding${f[0]}`]),h=parseFloat(a[`padding${f[1]}`]),_=parseFloat(a[`margin${f[0]}`]),c=parseFloat(a[`margin${f[1]}`]),p=parseFloat(a[`border${f[0]}Width`]),g=parseFloat(a[`border${f[1]}Width`]);return{delay:t,duration:r,easing:n,css:b=>`overflow: hidden;opacity: ${Math.min(b*20,1)*s};${o}: ${b*l}px;padding-${u[0]}: ${b*d}px;padding-${u[1]}: ${b*h}px;margin-${u[0]}: ${b*_}px;margin-${u[1]}: ${b*c}px;border-${u[0]}-width: ${b*p}px;border-${u[1]}-width: ${b*g}px;min-${o}: 0`}}var Ms=ie('<button class="history-tag svelte-1n46o8q" type="button"> </button>'),Rs=ie('<div class="search-history svelte-1n46o8q"><small>Recent searches:</small> <div class="history-tags svelte-1n46o8q"><!> <button class="history-clear svelte-1n46o8q" type="button" aria-label="Clear history">Clear</button></div></div>'),Is=ie('<div class="filters svelte-1n46o8q"><div class="filter-group svelte-1n46o8q"><label for="sort-select" class="svelte-1n46o8q">Sort by:</label> <select id="sort-select" class="svelte-1n46o8q"><option>Stars</option><option>Forks</option><option>Recently Updated</option></select></div> <div class="filter-group svelte-1n46o8q"><label for="language-input" class="svelte-1n46o8q">Language:</label> <input id="language-input" type="text" placeholder="e.g., JavaScript" class="svelte-1n46o8q"/></div></div>'),Ls=ie('<div class="loading" role="status" aria-live="polite"><div class="spinner" aria-hidden="true"></div> <p> </p></div>'),qs=ie('<div class="error" role="alert" aria-live="assertive"><strong>Error:</strong> </div>'),Fs=ie('in <strong class="svelte-1n46o8q"> </strong>',1),Ds=ie('<div class="load-more-section svelte-1n46o8q"><button class="load-more-btn svelte-1n46o8q" type="button">Load More Results</button></div>'),zs=ie('<div class="results-info svelte-1n46o8q"><p>Found <strong class="svelte-1n46o8q"> </strong> repositories <!> </p></div> <!> <!>',1),js=ie('<div class="empty-state svelte-1n46o8q"><p class="svelte-1n46o8q">No repositories found for <strong> </strong>.</p> <small class="svelte-1n46o8q">Try adjusting your search terms or filters</small></div>'),Hs=ie(`<div class="container curvo-inner" role="main" aria-label="GitHub Repository Search Application"><header><h1><!> There's A GitHub Repo For That™</h1> <p class="subtitle svelte-1n46o8q">Find that one weirdly specific thing you need!</p></header> <div class="search-section" role="search"><div class="input-group"><div class="input-with-icon"><!> <input class="curvo-middle-right" placeholder="Search GitHub repos..." aria-label="Search query" aria-describedby="search-help" autocomplete="off"/></div> <div class="input-with-icon"><!> <input class="curvo-middle-left" placeholder="Optional token" type="password" aria-label="GitHub personal access token" autocomplete="off"/></div></div> <!> <div class="filters-section svelte-1n46o8q"><button class="filter-toggle svelte-1n46o8q" type="button"><!> </button> <!></div> <div class="token-helper" id="search-help"><small>Need a token for higher rate limits? <a href="https://github.com/settings/tokens/new?scopes=repo" target="_blank" rel="noopener noreferrer" aria-label="Generate GitHub token (opens in new tab)">Generate one here</a></small></div> <div style="height: 60px;"></div> <div class="button-group"><button class="curvo-top-right" aria-label="Search repositories" type="button"><!> Search</button> <button class="curvo-top-left" aria-label="Get random repository" type="button"><!> I'm Feeling Lucky</button></div></div> <!> <!> <!></div>`);function Us(e,t){xt(t,!1);const r=L(),n=L();let i=L(""),a=L(""),s=L([]),o=L(""),l=L(!1),u=L(!1),f=L(0),d=L(1),h=30,_=L("stars"),c=L(""),p=L(!1),g=L([]);ds(()=>{const k=localStorage.getItem("github_token"),M=localStorage.getItem("search_history");k&&E(a,k),M&&E(g,JSON.parse(M))});function b(k){k.trim()&&(E(g,[k,...v(g).filter(M=>M!==k)].slice(0,5)),localStorage.setItem("search_history",JSON.stringify(v(g))))}async function S(k=1){if(!v(i).trim())return;E(u,!0),E(l,!0),E(o,""),k===1&&E(s,[]),E(d,k);const M=v(a)?{Authorization:`token ${v(a)}`}:{};let D=v(i);v(c)&&(D+=` language:${v(c)}`);try{const R=await fetch(`https://api.github.com/search/repositories?q=${encodeURIComponent(D)}&sort=${v(_)}&order=desc&per_page=${h}&page=${k}`,{headers:M});if(R.status===403){const J=R.headers.get("X-RateLimit-Reset"),ee=J?new Date(J*1e3):null,Ae=ee?Math.ceil((ee-new Date)/6e4):"?";throw new Error(`Rate limit exceeded. Try again in ${Ae} minutes or add a token.`)}if(!R.ok)throw R.status===401?new Error("Invalid token. Please check your GitHub token."):R.status===422?new Error("Invalid search query. Please refine your search."):new Error(`GitHub API error: ${R.status} ${R.statusText}`);const fe=await R.json();E(f,fe.total_count||0);const G=Array.isArray(fe.items)?fe.items:[];k===1?(E(s,G),b(v(i))):E(s,[...v(s),...G])}catch(R){E(o,R.message)}finally{E(l,!1)}}function $(){S(v(d)+1)}function w(k){k.key==="Enter"&&S(1)}async function m(){if(!v(i).trim())return;E(u,!0),E(l,!0),E(o,""),E(s,[]);const k=v(a)?{Authorization:`token ${v(a)}`}:{},M=Math.floor(Math.random()*10)+1;try{const D=await fetch(`https://api.github.com/search/repositories?q=${encodeURIComponent(v(i))}&sort=${v(_)}&order=desc&per_page=1&page=${M}`,{headers:k});if(D.status===403)throw new Error("Rate limit exceeded. Try adding a token.");if(!D.ok)throw new Error(`GitHub API error: ${D.status}`);const R=await D.json();E(s,Array.isArray(R.items)&&R.items.length?[R.items[0]]:[]),b(v(i))}catch(D){E(o,D.message)}finally{E(l,!1)}}function y(k){E(i,k),S(1)}function N(){E(g,[]),localStorage.removeItem("search_history")}ce(()=>v(a),()=>{v(a)&&localStorage.setItem("github_token",v(a))}),ce(()=>v(s),()=>{E(r,Array.isArray(v(s))?v(s):[])}),ce(()=>(v(f),v(d)),()=>{E(n,v(f)>v(d)*h)}),Cn(),sr();var O=Hs(),z=A(O),Se=A(z),ke=A(Se);$s(ke,{class:"title-icon",size:32,"aria-hidden":"true"});var Y=P(z,2),Ve=A(Y),Le=A(Ve),he=A(Le);sn(he,{class:"input-icon",size:20,"aria-hidden":"true"});var qe=P(he,2),yt=P(Le,2),ae=A(yt);Es(ae,{class:"input-icon",size:20,"aria-hidden":"true"});var or=P(ae,2),Ir=P(Ve,2);{var ni=k=>{var M=Rs(),D=P(A(M),2),R=A(D);Rr(R,1,()=>v(g),Wn,(G,J)=>{var ee=Ms(),Ae=A(ee);ge(()=>X(Ae,v(J))),Be("click",ee,()=>y(v(J))),C(G,ee)});var fe=P(R,2);Be("click",fe,N),C(k,M)};be(Ir,k=>{v(g),v(u),F(()=>v(g).length>0&&!v(u))&&k(ni)})}var Lr=P(Ir,2),Lt=A(Lr),qr=A(Lt);ys(qr,{size:16});var ii=P(qr),ai=P(Lt,2);{var si=k=>{var M=Is(),D=A(M),R=P(A(D),2);ge(()=>{v(_),Ta(()=>{})});var fe=A(R);fe.value=fe.__value="stars";var G=P(fe);G.value=G.__value="forks";var J=P(G);J.value=J.__value="updated";var ee=P(D,2),Ae=P(A(ee),2);rs(R,()=>v(_),pe=>E(_,pe)),hr(Ae,()=>v(c),pe=>E(c,pe)),us(3,M,()=>Cs),C(k,M)};be(ai,k=>{v(p)&&k(si)})}var oi=P(Lr,6),qt=A(oi),li=A(qt);sn(li,{size:16,class:"button-icon","aria-hidden":"true"});var lr=P(qt,2),ui=A(lr);Ss(ui,{size:16,class:"button-icon","aria-hidden":"true"});var Fr=P(Y,2);{var fi=k=>{var M=Ls(),D=P(A(M),2),R=A(D);ge(()=>X(R,v(d)>1?"Loading more results...":"Searching repositories...")),C(k,M)};be(Fr,k=>{v(l)&&k(fi)})}var Dr=P(Fr,2);{var ci=k=>{var M=qs(),D=P(A(M));ge(()=>X(D,` ${v(o)??""}`)),C(k,M)};be(Dr,k=>{v(o)&&k(ci)})}var vi=P(Dr,2);{var di=k=>{var M=ne(),D=W(M);{var R=G=>{var J=zs(),ee=W(J),Ae=A(ee),pe=P(A(Ae)),Ft=A(pe),Dt=P(pe,2);{var ur=Ne=>{var Ge=Fs(),zt=P(W(Ge)),pi=A(zt);ge(()=>X(pi,v(c))),C(Ne,Ge)};be(Dt,Ne=>{v(c)&&Ne(ur)})}var fr=P(Dt),zr=P(ee,2);xs(zr,{get repos(){return v(r)}});var _i=P(zr,2);{var hi=Ne=>{var Ge=Ds(),zt=A(Ge);ge(()=>zt.disabled=v(l)),Be("click",zt,$),C(Ne,Ge)};be(_i,Ne=>{v(n),v(r),F(()=>v(n)&&v(r).length<1e3)&&Ne(hi)})}ge((Ne,Ge)=>{X(Ft,Ne),X(fr,` - Showing ${v(r),F(()=>v(r).length)??""} of ${Ge??""}`)},[()=>(v(f),F(()=>v(f).toLocaleString())),()=>(v(f),F(()=>Math.min(v(f),1e3)))]),C(G,J)},fe=G=>{var J=ne(),ee=W(J);{var Ae=pe=>{var Ft=js(),Dt=A(Ft),ur=P(A(Dt)),fr=A(ur);ge(()=>X(fr,`"${v(i)??""}"`)),C(pe,Ft)};be(ee,pe=>{v(u)&&pe(Ae)},!0)}C(G,J)};be(D,G=>{v(r),F(()=>v(r).length>0)?G(R):G(fe,!1)})}C(k,M)};be(vi,k=>{!v(l)&&!v(o)&&k(di)})}ge((k,M)=>{ye(Lt,"aria-expanded",v(p)),X(ii,` ${v(p)?"Hide":"Show"} Filters`),qt.disabled=k,lr.disabled=M},[()=>(v(l),v(i),F(()=>v(l)||!v(i).trim())),()=>(v(l),v(i),F(()=>v(l)||!v(i).trim()))]),hr(qe,()=>v(i),k=>E(i,k)),Be("keydown",qe,w),hr(or,()=>v(a),k=>E(a,k)),Be("click",Lt,()=>E(p,!v(p))),Be("click",qt,()=>S(1)),Be("click",lr,m),C(e,O),Ot()}Ua(Us,{target:document.body});
