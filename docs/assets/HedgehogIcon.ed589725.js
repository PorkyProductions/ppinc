(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const o of c.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerpolicy&&(c.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?c.credentials="include":s.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(s){if(s.ep)return;s.ep=!0;const c=n(s);fetch(s.href,c)}})();function k(){}function I(t,e){for(const n in e)t[n]=e[n];return t}function z(t){return t&&typeof t=="object"&&typeof t.then=="function"}function q(t){return t()}function C(){return Object.create(null)}function y(t){t.forEach(q)}function j(t){return typeof t=="function"}function et(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let p;function nt(t,e){return p||(p=document.createElement("a")),p.href=e,t===p.href}function B(t){return Object.keys(t).length===0}function rt(t,e,n,r){if(t){const s=D(t,e,n,r);return t[0](s)}}function D(t,e,n,r){return t[1]&&r?I(n.ctx.slice(),t[1](r(e))):n.ctx}function st(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const c=[],o=Math.max(e.dirty.length,s.length);for(let l=0;l<o;l+=1)c[l]=e.dirty[l]|s[l];return c}return e.dirty|s}return e.dirty}function ct(t,e,n,r,s,c){if(s){const o=D(e,n,r,c);t.p(o,s)}}function ot(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function ut(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function it(t){return t&&j(t.destroy)?t.destroy:k}function lt(t,e){t.appendChild(e)}function at(t,e,n){t.insertBefore(e,n||null)}function H(t){t.parentNode.removeChild(t)}function ft(t){return document.createElement(t)}function M(t){return document.createTextNode(t)}function dt(){return M(" ")}function _t(){return M("")}function ht(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function T(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function mt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)e[r]==null?t.removeAttribute(r):r==="style"?t.style.cssText=e[r]:r==="__value"?t.value=t[r]=e[r]:n[r]&&n[r].set?t[r]=e[r]:T(t,r,e[r])}function gt(t,e){Object.keys(e).forEach(n=>{K(t,n,e[n])})}function K(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:T(t,e,n)}function G(t){return Array.from(t.childNodes)}function yt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function pt(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function bt(t,e,n){t.classList[n?"add":"remove"](e)}function J(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,r,e),s}let g;function f(t){g=t}function O(){if(!g)throw new Error("Function called outside component initialization");return g}function xt(t){O().$$.on_destroy.push(t)}function $t(){const t=O();return(e,n,{cancelable:r=!1}={})=>{const s=t.$$.callbacks[e];if(s){const c=J(e,n,{cancelable:r});return s.slice().forEach(o=>{o.call(t,c)}),!c.defaultPrevented}return!0}}const m=[],N=[],x=[],S=[],Q=Promise.resolve();let E=!1;function R(){E||(E=!0,Q.then(L))}function w(t){x.push(t)}const v=new Set;let b=0;function L(){const t=g;do{for(;b<m.length;){const e=m[b];b++,f(e),U(e.$$)}for(f(null),m.length=0,b=0;N.length;)N.pop()();for(let e=0;e<x.length;e+=1){const n=x[e];v.has(n)||(v.add(n),n())}x.length=0}while(m.length);for(;S.length;)S.pop()();E=!1,v.clear(),f(t)}function U(t){if(t.fragment!==null){t.update(),y(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(w)}}const $=new Set;let d;function V(){d={r:0,c:[],p:d}}function W(){d.r||y(d.c),d=d.p}function F(t,e){t&&t.i&&($.delete(t),t.i(e))}function X(t,e,n,r){if(t&&t.o){if($.has(t))return;$.add(t),d.c.push(()=>{$.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function kt(t,e){const n=e.token={};function r(s,c,o,l){if(e.token!==n)return;e.resolved=l;let i=e.ctx;o!==void 0&&(i=i.slice(),i[o]=l);const u=s&&(e.current=s)(i);let h=!1;e.block&&(e.blocks?e.blocks.forEach((a,_)=>{_!==c&&a&&(V(),X(a,1,1,()=>{e.blocks[_]===a&&(e.blocks[_]=null)}),W())}):e.block.d(1),u.c(),F(u,1),u.m(e.mount(),e.anchor),h=!0),e.block=u,e.blocks&&(e.blocks[c]=u),h&&L()}if(z(t)){const s=O();if(t.then(c=>{f(s),r(e.then,1,e.value,c),f(null)},c=>{if(f(s),r(e.catch,2,e.error,c),f(null),!e.hasCatch)throw c}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function vt(t,e,n){const r=e.slice(),{resolved:s}=t;t.current===t.then&&(r[t.value]=s),t.current===t.catch&&(r[t.error]=s),t.block.p(r,n)}function Et(t,e){const n={},r={},s={$$scope:1};let c=t.length;for(;c--;){const o=t[c],l=e[c];if(l){for(const i in o)i in l||(r[i]=1);for(const i in l)s[i]||(n[i]=l[i],s[i]=1);t[c]=l}else for(const i in o)s[i]=1}for(const o in r)o in n||(n[o]=void 0);return n}function wt(t){return typeof t=="object"&&t!==null?t:{}}function jt(t){t&&t.c()}function Y(t,e,n,r){const{fragment:s,after_update:c}=t.$$;s&&s.m(e,n),r||w(()=>{const o=t.$$.on_mount.map(q).filter(j);t.$$.on_destroy?t.$$.on_destroy.push(...o):y(o),t.$$.on_mount=[]}),c.forEach(w)}function Z(t,e){const n=t.$$;n.fragment!==null&&(y(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function tt(t,e){t.$$.dirty[0]===-1&&(m.push(t),R(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ot(t,e,n,r,s,c,o,l=[-1]){const i=g;f(t);const u=t.$$={fragment:null,ctx:[],props:c,update:k,not_equal:s,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(i?i.$$.context:[])),callbacks:C(),dirty:l,skip_bound:!1,root:e.target||i.$$.root};o&&o(u.root);let h=!1;if(u.ctx=n?n(t,e.props||{},(a,_,...P)=>{const A=P.length?P[0]:_;return u.ctx&&s(u.ctx[a],u.ctx[a]=A)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](A),h&&tt(t,a)),_}):[],u.update(),h=!0,y(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){const a=G(e.target);u.fragment&&u.fragment.l(a),a.forEach(H)}else u.fragment&&u.fragment.c();e.intro&&F(t.$$.fragment),Y(t,e.target,e.anchor,e.customElement),L()}f(i)}class Lt{$destroy(){Z(this,1),this.$destroy=k}$on(e,n){if(!j(n))return k;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!B(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Pt="./assets/HedgehogIcon.4737d2b0.png";export{bt as A,it as B,Et as C,j as D,M as E,jt as F,Y as G,wt as H,Z as I,xt as J,ht as K,y as L,yt as M,N,Pt as O,$t as P,Lt as S,dt as a,T as b,pt as c,nt as d,ft as e,at as f,lt as g,H as h,Ot as i,_t as j,V as k,W as l,F as m,k as n,I as o,ut as p,kt as q,rt as r,et as s,X as t,vt as u,ct as v,ot as w,st as x,gt as y,mt as z};
