import{S as K,i as J,s as Q,e as l,a as m,d as R,b as o,c as z,f as W,g as n,J as q,n as k,h as I,K as ne,D as re,L as ie,m as A,t as S,M as oe,E as U,N as ae,F as E,H as $}from"./HedgehogIcon.0138f2f0.js";const le="./assets/PPio logo.5c1c65d7.png",ce="./assets/suit-heart-fill.07468f7b.svg",de="./assets/audio_Air_Woosh_Underwater.77cfa964.mp3",ue="./assets/audio_Alarm_Clock.9cae9457.mp3",fe="./assets/audio_Beep_Short.f896176f.mp3",pe="./assets/audio_Big_Explosion_Distant.11571a9d.mp3",me="./assets/audio_Cartoon_Boing.0385bc39.mp3",ge="./assets/audio_Crash.4302fde8.mp3",be="./assets/audio_Glass_Crunch.53b9eaf2.mp3",he="./assets/audio_Glass_Shatters_Into_Debris.869c7fe0.mp3";function _e(e){let t,s,r,a,i,d,f,c,u,p,M,v,T,_,b,w,B,h,H,x,y,P,D;return{c(){t=l("footer"),s=l("div"),r=l("div"),a=l("div"),i=l("img"),f=m(),c=l("div"),c.innerHTML=`<p class="font-primary text-xl text-white">Contact Us</p><br/> 
                <ul><li class="underline text-blue-300 hover:text-blue-100"><a href="mailto:tristankenshin@gmail.com">Tristan</a></li> 
                    <li class="underline text-blue-300 hover:text-blue-100"><a href="mailto:rpmullin@comcast.net">Ryan</a></li></ul>`,u=m(),p=l("div"),p.innerHTML=`<p class="font-primary text-xl">Issues</p><br/> 
                <a href="https://github.com/PorkyProductions/porkyproductions.github.io/issues" class="underline text-blue-300 hover:text-blue-100">Report on Github</a>`,M=m(),v=l("div"),v.innerHTML=`<p class="font-primary text-xl">Socials</p><br/>
                None`,T=m(),_=l("div"),b=l("div"),w=l("p"),w.textContent="Made With",B=m(),h=l("img"),x=m(),y=l("p"),y.textContent="at PorkyProductions",R(i.src,d=le)||o(i,"src",d),o(i,"alt",""),o(i,"class","svelte-1t4able"),o(a,"class","px-10"),o(c,"class","px-10"),o(p,"class","px-10"),o(v,"class","px-10"),o(r,"class","columns svelte-1t4able"),o(s,"class","flex justify-between content-center bg-sky-900 text-slate-200 pt-12 px-12"),o(w,"class","text-center"),R(h.src,H=ce)||o(h,"src",H),o(h,"alt",""),o(h,"class","m-auto h-12 w-1/12 svelte-1t4able"),o(y,"class","text-center"),o(b,"class","absolute bg-sky-900"),z(b,"padding-left","83%"),z(b,"padding-right","10%"),z(b,"padding-top","0px"),o(_,"class","text-white m-auto")},m(C,G){W(C,t,G),n(t,s),n(s,r),n(r,a),n(a,i),n(r,f),n(r,c),n(r,u),n(r,p),n(r,M),n(r,v),n(t,T),n(t,_),n(_,b),n(b,w),n(b,B),n(b,h),n(b,x),n(b,y),P||(D=[q(h,"click",e[0]),q(_,"click",e[0])],P=!0)},p:k,i:k,o:k,d(C){C&&I(t),P=!1,ne(D)}}}function ve(e){const t=new Audio(de),s=new Audio(ue),r=new Audio(fe),a=new Audio(pe),i=new Audio(me),d=new Audio(ge),f=new Audio(be),c=new Audio(he);let u=0;return[()=>{switch(u+=1,console.log(`count is at ${u}`),u){case 0:console.log(0);break;case 1:t.play();break;case 2:s.play();break;case 3:r.play();break;case 4:a.play();break;case 5:i.play();break;case 6:d.play();break;case 7:f.play();break;case 8:c.play();break;case 9:alert("Are you sure you want to keep clicking?");default:t.play(),s.play(),r.play(),a.play(),i.play(),d.play(),f.play(),c.play()}}]}class Ze extends K{constructor(t){super(),J(this,t,ve,_e,Q,{})}}let we=navigator.userAgent;const xe=({ua:e})=>{if(e.indexOf("Opera")>-1)return"Opera";if(e.indexOf("Chrome")>-1)return"Chrome";if(e.indexOf("Firefox")>-1)return"Firefox";if(e.indexOf("Safari")>-1)return"Safari";if(e.indexOf("MSIE")>-1)return"IE";if(e.indexOf("Trident")>-1)return"IE";if(e.indexOf("Edge")>-1)return"Edge";console.error("ERR: Browser can not be determined (UAD_101)")};let O=xe({ua:we}),ke=window.navigator.appCodeName;const ye=e=>e==="Mozilla"?"mozilla":e==="Microsoft"?"Microsoft":e==="Apple Computer, Inc."?"Apple":e==="Google Inc."?"Google":(console.error("Unknown appCodeName (UAD_1601)"),"Unknown");ye(ke);let Ae=navigator.cookieEnabled;const Se=e=>e===!0?"cookiesEnabled":e===!1?"cookiesNotEnabled":(console.error("ERR: Cookie status can not be determined (UAD_201)"),"ERROR");Se(Ae);function Pe(){const e=navigator.userAgent;return/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(e)?"tablet":/(iPhone|iPod|iPad)/i.test(e)||/(android)/i.test(e)||/(windows phone)/i.test(e)||/(blackberry)/i.test(e)||/(bb10)/i.test(e)||/(opera mini)/i.test(e)||/(opera mobi)/i.test(e)||/(iemobile)/i.test(e)||/(symbian)/i.test(e)||/(maemo)/i.test(e)||/(webos)/i.test(e)||/(mobile)/i.test(e)||/(tablet)/i.test(e)||/(symbianos)/i.test(e)||/(up.browser)/i.test(e)||/(up.link)/i.test(e)||/(mmp)/i.test(e)||/(symbianos)/i.test(e)||/(midp)/i.test(e)||/(wap)/i.test(e)||/(phone)/i.test(e)||/(pocket)/i.test(e)||/(mobile)/i.test(e)||/(pda)/i.test(e)||/(avantgo)/i.test(e)||/(eudoraweb)/i.test(e)||/(brew)|(bada)/i.test(e)||/(blackberry)/i.test(e)||/(hpwos)/i.test(e)||/(kindle)/i.test(e)||/(lge.netcast)/i.test(e)||/(lg;lx)|(lg;lx)/i.test(e)||/(lge.netcast)/i.test(e)||/(nintendo.3ds)/i.test(e)||/(nintendo.ds)/i.test(e)||/(nintendo.wiiu)/i.test(e)||/(nintendo.wii)/i.test(e)||/(playstation.3ds)/i.test(e)||/(playstation.ds)/i.test(e)||/(playstation.wiiu)/i.test(e)||/(playstation.wii)/i.test(e)||/(webos)/i.test(e)?"mobile":"desktop"}let Z=Pe(),Ce=navigator.doNotTrack;const Ue=e=>e==0?"trackingAllowed":e==1?"trackingNotAllowed":e=="unspecified"||e=="null"?"trackingUnspecified":(console.error("Unknown doNotTrack value(UAD_801)"),"ERROR");Ue(Ce);function Ee(){const e=navigator.userAgent;return/(iPhone|iPod|iPad)/i.test(e)?(console.log("iOS"),"iOS"):/Android/i.test(e)?(console.log("Android"),"Android"):/BlackBerry/i.test(e)?(console.log("BlackBerry"),"BlackBerry"):/Windows Phone/i.test(e)?(console.log("Windows Phone"),"Windows Phone"):/webOS/i.test(e)?(console.log("webOS"),"webOS"):(console.error("Unknown device type(UAD_601)"),"Unknown")}Ee();let j,ee;navigator.geolocation.getCurrentPosition(e=>(j=e.coords.latitude,ee=e.coords.longitude,j&&ee),()=>console.error("Cannot get current position. This is either because the browser doesn't support it, or the user has denied access "));const L=()=>navigator.hardwareConcurrency,$e=()=>{if(O==="Chrome"||O==="Edge"||O==="Firefox"||(O==="IE"&&console.error("Not supported on this browser(UAD_1301)"),O==="Opera")||O==="Safari")return L();console.error("Not supported on this browser(UAD_1301)")};$e();let Oe=window.navigator;const Ne=e=>[{name:"appCodeName",value:e.appCodeName},{name:"appName",value:e.appName},{name:"appVersion",value:e.appVersion},{name:"cookieEnabled",value:e.cookieEnabled},{name:"doNotTrack",value:e.doNotTrack},{name:"geolocation",value:e.geolocation},{name:"language",value:e.language},{name:"onLine",value:e.onLine},{name:"platform",value:e.platform},{name:"product",value:e.product},{name:"userAgent",value:e.userAgent},{name:"vendor",value:e.vendor},{name:"vendorSub",value:e.vendorSub},{name:"webdriver",value:e.webdriver}];Ne(Oe);const Me=({ua:e})=>e.indexOf("Windows")>-1?"Windows":e.indexOf("Mac")>-1?"Mac":e.indexOf("Linux")>-1?"Linux":e.indexOf("Android")>-1?"Android":e.indexOf("iPhone")>-1||e.indexOf("iPad")>-1||e.indexOf("iPod")>-1?"iOS":(console.error("Unknown Operating System(UAD_1101)"),"Unknown");Me({ua:navigator.userAgent});let te=!0;const Te=()=>(te=window.innerHeight<=window.innerWidth,te);window.addEventListener("resize",Te);let Be=window.navigator.product;const He=e=>e==="Gecko"?"Gecko":e==="WebKit"?"WebKit":e==="Trident"?"Trident":e==="Presto"?"Presto":(console.error("Unknown engine (UAD_1702)"),"Other");He(Be);let De=window.navigator.appVersion;const Le=e=>e in navigator?e:(console.error("No app version detected. (UAD_1801)"),"Unknown");Le(De);const Re="./assets/controller.8ff4ee2d.svg",We="./assets/boxes.f1697c84.svg",Ie="./assets/badge-3d.a960f3aa.svg",Ge="./assets/code-slash.5f9b99fb.svg",Fe="./assets/sliders.bfa8e064.svg",qe="./assets/house-door.0a323b79.svg";function Ve(e){let t,s,r,a,i,d,f,c;return{c(){t=l("div"),s=l("a"),r=re(e[1]),a=m(),i=l("img"),f=m(),c=l("br"),R(i.src,d=e[2])||o(i,"src",d),o(i,"alt",e[3]),o(s,"href",e[0]),o(s,"class","header-link sm:text-sm md:text-md lg:text-lg xl:text-xl font-primary font-medium hover:bg-slate-400 dark:hover:bg-slate-800 hover:font-semibold hover:rounded-xl svelte-i316lq"),o(t,"class","flex justify-between content-center p-2")},m(u,p){W(u,t,p),n(t,s),n(s,r),n(s,a),n(s,i),n(t,f),n(t,c)},p(u,[p]){p&2&&ie(r,u[1]),p&4&&!R(i.src,d=u[2])&&o(i,"src",d),p&8&&o(i,"alt",u[3]),p&1&&o(s,"href",u[0])},i:k,o:k,d(u){u&&I(t)}}}function ze(e,t,s){let{href:r}=t,{text:a}=t,{icon:i}=t,{iconAlt:d}=t;return e.$$set=f=>{"href"in f&&s(0,r=f.href),"text"in f&&s(1,a=f.text),"icon"in f&&s(2,i=f.icon),"iconAlt"in f&&s(3,d=f.iconAlt)},[r,a,i,d]}class N extends K{constructor(t){super(),J(this,t,ze,Ve,Q,{href:0,text:1,icon:2,iconAlt:3})}}function Ke(e){let t,s,r,a,i,d,f,c,u,p,M,v,T,_,b,w,B,h,H,x,y,P,D,C,G,X,F,V,Y;return p=new N({props:{href:"index.html",text:"Home",icon:qe,iconAlt:"a house"}}),v=new N({props:{href:"games.html",text:"Games",icon:Re,iconAlt:"controller"}}),_=new N({props:{href:"threeDprints.html",text:"3D Prints",icon:Ie,iconAlt:"3D"}}),w=new N({props:{href:"models.html",text:"Models",icon:We,iconAlt:"boxes"}}),h=new N({props:{href:"developments.html",text:"Developments",icon:Ge,iconAlt:"code"}}),x=new N({props:{href:"experimental.html",text:"Experimental",icon:Fe,iconAlt:"knobs"}}),{c(){t=l("div"),s=l("div"),r=m(),a=l("a"),i=l("img"),f=m(),c=l("p"),c.innerHTML="<b>PorkyProductions</b>.io",u=m(),U(p.$$.fragment),M=m(),U(v.$$.fragment),T=m(),U(_.$$.fragment),b=m(),U(w.$$.fragment),B=m(),U(h.$$.fragment),H=m(),U(x.$$.fragment),y=m(),P=l("div"),D=m(),C=l("div"),G=m(),X=l("div"),o(i,"class","float-left svelte-qsyid0"),R(i.src,d=ae)||o(i,"src",d),o(i,"alt","a hedgehog"),o(i,"id","HH"),o(c,"class","float-right"),o(a,"href","index.html"),o(a,"class","header-link hover:bg-slate-300 dark:hover:bg-slate-800 hover:rounded-xl rounded-lg h-24 svelte-qsyid0"),o(t,"class","flex content-center justify-between p-4 border-b-4 border-slate-800")},m(g,se){W(g,t,se),n(t,s),n(t,r),n(t,a),n(a,i),e[2](i),n(a,f),n(a,c),n(t,u),E(p,t,null),n(t,M),E(v,t,null),n(t,T),E(_,t,null),n(t,b),E(w,t,null),n(t,B),E(h,t,null),n(t,H),E(x,t,null),n(t,y),n(t,P),n(t,D),n(t,C),n(t,G),n(t,X),F=!0,V||(Y=[q(i,"mouseover",e[1]),q(i,"focus",e[1])],V=!0)},p:k,i(g){F||(A(p.$$.fragment,g),A(v.$$.fragment,g),A(_.$$.fragment,g),A(w.$$.fragment,g),A(h.$$.fragment,g),A(x.$$.fragment,g),F=!0)},o(g){S(p.$$.fragment,g),S(v.$$.fragment,g),S(_.$$.fragment,g),S(w.$$.fragment,g),S(h.$$.fragment,g),S(x.$$.fragment,g),F=!1},d(g){g&&I(t),e[2](null),$(p),$(v),$(_),$(w),$(h),$(x),V=!1,ne(Y)}}}function Je(e){let t;return{c(){t=l("div")},m(s,r){W(s,t,r)},p:k,i:k,o:k,d(s){s&&I(t)}}}function Qe(e){let t,s,r,a;const i=[Je,Ke],d=[];function f(c,u){return Z==="mobile"?0:Z==="desktop"?1:-1}return~(s=f())&&(r=d[s]=i[s](e)),{c(){t=l("header"),r&&r.c(),o(t,"class","bg-slate-200 dark:bg-slate-700 dark:text-white svelte-qsyid0")},m(c,u){W(c,t,u),~s&&d[s].m(t,null),a=!0},p(c,[u]){r&&r.p(c,u)},i(c){a||(A(r),a=!0)},o(c){S(r),a=!1},d(c){c&&I(t),~s&&d[s].d()}}}function Xe(e,t,s){let r;const a=()=>{r.classList.add("spin")};function i(d){oe[d?"unshift":"push"](()=>{r=d,s(0,r)})}return[r,a,i]}class je extends K{constructor(t){super(),J(this,t,Xe,Qe,Q,{})}}export{Z as D,Ze as F,je as H};
