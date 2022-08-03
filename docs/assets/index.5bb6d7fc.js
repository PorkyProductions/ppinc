const z=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}};z();function c(){}function B(e){return e()}function U(){return Object.create(null)}function y(e){e.forEach(B)}function q(e){return typeof e=="function"}function G(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function J(e){return Object.keys(e).length===0}function I(e,t){e.appendChild(t)}function $(e,t,n){e.insertBefore(t,n||null)}function v(e){e.parentNode.removeChild(e)}function b(e){return document.createElement(e)}function Q(e){return document.createTextNode(e)}function X(){return Q(" ")}function x(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Y(e){return Array.from(e.childNodes)}let E;function h(e){E=e}const p=[],T=[],_=[],R=[],Z=Promise.resolve();let A=!1;function j(){A||(A=!0,Z.then(K))}function O(e){_.push(e)}const k=new Set;let g=0;function K(){const e=E;do{for(;g<p.length;){const t=p[g];g++,h(t),ee(t.$$)}for(h(null),p.length=0,g=0;T.length;)T.pop()();for(let t=0;t<_.length;t+=1){const n=_[t];k.has(n)||(k.add(n),n())}_.length=0}while(p.length);for(;R.length;)R.pop()();A=!1,k.clear(),h(e)}function ee(e){if(e.fragment!==null){e.update(),y(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(O)}}const w=new Set;let te;function W(e,t){e&&e.i&&(w.delete(e),e.i(t))}function ne(e,t,n,r){if(e&&e.o){if(w.has(e))return;w.add(e),te.c.push(()=>{w.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function re(e){e&&e.c()}function H(e,t,n,r){const{fragment:o,on_mount:i,on_destroy:s,after_update:d}=e.$$;o&&o.m(t,n),r||O(()=>{const a=i.map(B).filter(q);s?s.push(...a):y(a),e.$$.on_mount=[]}),d.forEach(O)}function F(e,t){const n=e.$$;n.fragment!==null&&(y(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function oe(e,t){e.$$.dirty[0]===-1&&(p.push(e),j(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function V(e,t,n,r,o,i,s,d=[-1]){const a=E;h(e);const l=e.$$={fragment:null,ctx:null,props:i,update:c,not_equal:o,bound:U(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:U(),dirty:d,skip_bound:!1,root:t.target||a.$$.root};s&&s(l.root);let S=!1;if(l.ctx=n?n(e,t.props||{},(u,N,...C)=>{const P=C.length?C[0]:N;return l.ctx&&o(l.ctx[u],l.ctx[u]=P)&&(!l.skip_bound&&l.bound[u]&&l.bound[u](P),S&&oe(e,u)),N}):[],l.update(),S=!0,y(l.before_update),l.fragment=r?r(l.ctx):!1,t.target){if(t.hydrate){const u=Y(t.target);l.fragment&&l.fragment.l(u),u.forEach(v)}else l.fragment&&l.fragment.c();t.intro&&W(e.$$.fragment),H(e,t.target,t.anchor,t.customElement),K()}h(a)}class D{$destroy(){F(this,1),this.$destroy=c}$on(t,n){const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!J(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}let ie=navigator.userAgent;const se=({ua:e})=>{if(e.indexOf("Opera")>-1)return"Opera";if(e.indexOf("Chrome")>-1)return"Chrome";if(e.indexOf("Firefox")>-1)return"Firefox";if(e.indexOf("Safari")>-1)return"Safari";if(e.indexOf("MSIE")>-1)return"IE";if(e.indexOf("Trident")>-1)return"IE";if(e.indexOf("Edge")>-1)return"Edge";console.error("ERR: Browser can not be determined (UAD_101)")};let f=se({ua:ie}),le=window.navigator.appCodeName;const ae=e=>e==="Mozilla"?"mozilla":e==="Microsoft"?"Microsoft":e==="Apple Computer, Inc."?"Apple":e==="Google Inc."?"Google":(console.error("Unknown appCodeName (UAD_1601)"),"Unknown");ae(le);let de=navigator.cookieEnabled;const ue=e=>e===!0?"COOKIES_enabled":e===!1?"COOKIES_notEnabled":(console.error("ERR: Cookie status can not be determined (UAD_201)"),"ERROR");ue(de);function fe(){const e=navigator.userAgent;return/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(e)?"tablet":/(iPhone|iPod|iPad)/i.test(e)||/(android)/i.test(e)||/(windows phone)/i.test(e)||/(blackberry)/i.test(e)||/(bb10)/i.test(e)||/(opera mini)/i.test(e)||/(opera mobi)/i.test(e)||/(iemobile)/i.test(e)||/(symbian)/i.test(e)||/(maemo)/i.test(e)||/(webos)/i.test(e)||/(mobile)/i.test(e)||/(tablet)/i.test(e)||/(symbianos)/i.test(e)||/(up.browser)/i.test(e)||/(up.link)/i.test(e)||/(mmp)/i.test(e)||/(symbianos)/i.test(e)||/(midp)/i.test(e)||/(wap)/i.test(e)||/(phone)/i.test(e)||/(pocket)/i.test(e)||/(mobile)/i.test(e)||/(pda)/i.test(e)||/(avantgo)/i.test(e)||/(eudoraweb)/i.test(e)||/(brew)|(bada)/i.test(e)||/(blackberry)/i.test(e)||/(hpwos)/i.test(e)||/(kindle)/i.test(e)||/(lge.netcast)/i.test(e)||/(lg;lx)|(lg;lx)/i.test(e)||/(lge.netcast)/i.test(e)||/(nintendo.3ds)/i.test(e)||/(nintendo.ds)/i.test(e)||/(nintendo.wiiu)/i.test(e)||/(nintendo.wii)/i.test(e)||/(playstation.3ds)/i.test(e)||/(playstation.ds)/i.test(e)||/(playstation.wiiu)/i.test(e)||/(playstation.wii)/i.test(e)||/(webos)/i.test(e)?"mobile":"desktop"}let L=fe(),ce=navigator.doNotTrack;const me=e=>e==0?"TRACKING_allowed":e==1?"TRACKING_notAllowed":e=="unspecified"||e=="null"?"TRACKING_unspecified":(console.error("Unknown doNotTrack value(UAD_801)"),"ERROR");me(ce);function pe(){const e=navigator.userAgent;return/(iPhone|iPod|iPad)/i.test(e)?(console.log("iOS"),"iOS"):/Android/i.test(e)?(console.log("Android"),"Android"):/BlackBerry/i.test(e)?(console.log("BlackBerry"),"BlackBerry"):/Windows Phone/i.test(e)?(console.log("Windows Phone"),"Windows Phone"):/webOS/i.test(e)?(console.log("webOS"),"webOS"):(console.error("Unknown device type(UAD_601)"),"Unknown")}pe();const m=()=>navigator.hardwareConcurrency,he=()=>{if(f==="Chrome"||f==="Edge"||f==="Firefox"||(f==="IE"&&console.error("Not supported on this browser(UAD_1301)"),f==="Opera")||f==="Safari")return m();console.error("Not supported on this browser(UAD_1301)")};he();let ge=window.navigator;const xe=e=>[{name:"appCodeName",value:e.appCodeName},{name:"appName",value:e.appName},{name:"appVersion",value:e.appVersion},{name:"cookieEnabled",value:e.cookieEnabled},{name:"doNotTrack",value:e.doNotTrack},{name:"geolocation",value:e.geolocation},{name:"language",value:e.language},{name:"onLine",value:e.onLine},{name:"platform",value:e.platform},{name:"product",value:e.product},{name:"userAgent",value:e.userAgent},{name:"vendor",value:e.vendor},{name:"vendorSub",value:e.vendorSub},{name:"webdriver",value:e.webdriver}];xe(ge);const _e=({ua:e})=>e.indexOf("Windows")>-1?"Windows":e.indexOf("Mac")>-1?"Mac":e.indexOf("Linux")>-1?"Linux":e.indexOf("Android")>-1?"Android":e.indexOf("iPhone")>-1||e.indexOf("iPad")>-1||e.indexOf("iPod")>-1?"iOS":(console.error("Unknown Operating System(UAD_1101)"),"Unknown");_e({ua:navigator.userAgent});let M=!0;const we=()=>(M=window.innerHeight<=window.innerWidth,M);window.addEventListener("resize",we);let be=window.navigator.product;const ye=e=>e==="Gecko"?"Gecko":e==="WebKit"?"WebKit":e==="Trident"?"Trident":e==="Presto"?"Presto":(console.error("Unknown engine (UAD_1702)"),"Other");ye(be);let ve=window.navigator.appVersion;const ke=e=>e in navigator?e:(console.error("No app version detected. (UAD_1801)"),"Unknown");ke(ve);function Ae(e){let t;return{c(){t=b("div"),t.innerHTML=`<a href="games.html" class="px-5 sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-primary font-medium hover:bg-primary hover:text-white dark:hover:bg-slate-800 hover:rounded-xl">Games</a> 
            <a href="3Dprints.html" class="px-5 sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-primary font-medium hover:bg-primary hover:text-white dark:hover:bg-slate-800 hover:rounded-xl">3D Prints</a> 
            <a href="models.html" class="px-5 sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-primary font-medium hover:bg-primary hover:text-white dark:hover:bg-slate-800 hover:rounded-xl">Models</a> 
            <a href="developments.html" class="px-5 sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-primary font-medium hover:bg-primary hover:text-white dark:hover:bg-slate-800 hover:rounded-xl">Developments</a>`,x(t,"class","flex content-center justify-between p-10")},m(n,r){$(n,t,r)},d(n){n&&v(t)}}}function Oe(e){let t;return{c(){t=b("div")},m(n,r){$(n,t,r)},d(n){n&&v(t)}}}function $e(e){let t,n,r;function o(d,a){if(L==="mobile")return Oe;if(L==="desktop")return Ae}let i=o(),s=i&&i(e);return{c(){t=b("header"),n=b("a"),n.innerHTML='<img src="../../images/HedgehogIcon.png" alt="a hedgehog" id="HH" class="svelte-4arb39"/>',r=X(),s&&s.c(),x(n,"href","index.html"),x(n,"class","hover:bg-slate-300 dark:hover:bg-slate-800 hover:rounded-xl rounded-lg"),x(t,"class","flex content-center justify-between bg-slate-200 dark:bg-slate-700 dark:text-white  svelte-4arb39")},m(d,a){$(d,t,a),I(t,n),I(t,r),s&&s.m(t,null)},p:c,i:c,o:c,d(d){d&&v(t),s&&s.d()}}}class Ee extends D{constructor(t){super(),V(this,t,null,$e,G,{})}}function Se(e){let t,n;return t=new Ee({}),{c(){re(t.$$.fragment)},m(r,o){H(t,r,o),n=!0},p:c,i(r){n||(W(t.$$.fragment,r),n=!0)},o(r){ne(t.$$.fragment,r),n=!1},d(r){F(t,r)}}}class Ne extends D{constructor(t){super(),V(this,t,null,Se,G,{})}}new Ne({target:document.getElementById("app")});
