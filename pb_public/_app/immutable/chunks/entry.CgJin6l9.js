import{n as G,a8 as ut,H as dt,s as ht,P as pt,E as gt,A as mt}from"./scheduler.leJ1pmg5.js";new URL("sveltekit-internal://");function _t(e,n){return e==="/"||n==="ignore"?e:n==="never"?e.endsWith("/")?e.slice(0,-1):e:n==="always"&&!e.endsWith("/")?e+"/":e}function yt(e){return e.split("%25").map(decodeURI).join("%25")}function wt(e){for(const n in e)e[n]=decodeURIComponent(e[n]);return e}function pe({href:e}){return e.split("#")[0]}const vt=["href","pathname","search","toString","toJSON"];function bt(e,n,t){const r=new URL(e);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(a,o){if(o==="get"||o==="getAll"||o==="has")return s=>(t(s),a[o](s));n();const i=Reflect.get(a,o);return typeof i=="function"?i.bind(a):i}}),enumerable:!0,configurable:!0});for(const a of vt)Object.defineProperty(r,a,{get(){return n(),e[a]},enumerable:!0,configurable:!0});return r}const Et="/__data.json",kt=".html__data.json";function At(e){return e.endsWith(".html")?e.replace(/\.html$/,kt):e.replace(/\/$/,"")+Et}function St(...e){let n=5381;for(const t of e)if(typeof t=="string"){let r=t.length;for(;r;)n=n*33^t.charCodeAt(--r)}else if(ArrayBuffer.isView(t)){const r=new Uint8Array(t.buffer,t.byteOffset,t.byteLength);let a=r.length;for(;a;)n=n*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}function Rt(e){const n=atob(e),t=new Uint8Array(n.length);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t.buffer}const Me=window.fetch;window.fetch=(e,n)=>((e instanceof Request?e.method:(n==null?void 0:n.method)||"GET")!=="GET"&&H.delete(be(e)),Me(e,n));const H=new Map;function It(e,n){const t=be(e,n),r=document.querySelector(t);if(r!=null&&r.textContent){let{body:a,...o}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&H.set(t,{body:a,init:o,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=Rt(a)),Promise.resolve(new Response(a,o))}return window.fetch(e,n)}function Lt(e,n,t){if(H.size>0){const r=be(e,t),a=H.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(t==null?void 0:t.cache))return new Response(a.body,a.init);H.delete(r)}}return window.fetch(n,t)}function be(e,n){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(n!=null&&n.headers||n!=null&&n.body){const a=[];n.headers&&a.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&a.push(n.body),r+=`[data-hash="${St(...a)}"]`}return r}const Pt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function xt(e){const n=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${Ut(e).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return n.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return ge(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return ge(String.fromCharCode(...c.slice(2).split("-").map(f=>parseInt(f,16))));const u=Pt.exec(c),[,h,p,d,g]=u;return n.push({name:d,matcher:g,optional:!!h,rest:!!p,chained:p?l===1&&i[0]==="":!1}),p?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return ge(c)}).join("")}).join("")}/?$`),params:n}}function Tt(e){return!/^\([^)]+\)$/.test(e)}function Ut(e){return e.slice(1).split("/").filter(Tt)}function Nt(e,n,t){const r={},a=e.slice(1),o=a.filter(s=>s!==void 0);let i=0;for(let s=0;s<n.length;s+=1){const c=n[s];let l=a[s-i];if(c.chained&&c.rest&&i&&(l=a.slice(s-i,s+1).filter(u=>u).join("/"),i=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||t[c.matcher](l)){r[c.name]=l;const u=n[s+1],h=a[s+1];u&&!u.rest&&u.optional&&h&&c.chained&&(i=0),!u&&!h&&Object.keys(r).length===o.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function ge(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Ot({nodes:e,server_loads:n,dictionary:t,matchers:r}){const a=new Set(n);return Object.entries(t).map(([s,[c,l,u]])=>{const{pattern:h,params:p}=xt(s),d={id:s,exec:g=>{const f=h.exec(g);if(f)return Nt(f,p,r)},errors:[1,...u||[]].map(g=>e[g]),layouts:[0,...l||[]].map(i),leaf:o(c)};return d.errors.length=d.layouts.length=Math.max(d.errors.length,d.layouts.length),d});function o(s){const c=s<0;return c&&(s=~s),[c,e[s]]}function i(s){return s===void 0?s:[a.has(s),e[s]]}}function Ge(e,n=JSON.parse){try{return n(sessionStorage[e])}catch{}}function Ue(e,n,t=JSON.stringify){const r=t(n);try{sessionStorage[e]=r}catch{}}const j=[];function jt(e,n){return{subscribe:ae(e,n).subscribe}}function ae(e,n=G){let t;const r=new Set;function a(s){if(ht(e,s)&&(e=s,t)){const c=!j.length;for(const l of r)l[1](),j.push(l,e);if(c){for(let l=0;l<j.length;l+=2)j[l][0](j[l+1]);j.length=0}}}function o(s){a(s(e))}function i(s,c=G){const l=[s,c];return r.add(l),r.size===1&&(t=n(a,o)||G),s(e),()=>{r.delete(l),r.size===0&&t&&(t(),t=null)}}return{set:a,update:o,subscribe:i}}function dn(e,n,t){const r=!Array.isArray(e),a=r?[e]:e;if(!a.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const o=n.length<2;return jt(t,(i,s)=>{let c=!1;const l=[];let u=0,h=G;const p=()=>{if(u)return;h();const g=n(r?l[0]:l,i,s);o?i(g):h=pt(g)?g:G},d=a.map((g,f)=>ut(g,_=>{l[f]=_,u&=~(1<<f),c&&p()},()=>{u|=1<<f}));return c=!0,p(),function(){dt(d),h(),c=!1}})}function hn(e){return{subscribe:e.subscribe.bind(e)}}var Fe;const P=((Fe=globalThis.__sveltekit_1z0ox86)==null?void 0:Fe.base)??"";var qe;const $t=((qe=globalThis.__sveltekit_1z0ox86)==null?void 0:qe.assets)??P,Dt="1727057700371",He="sveltekit:snapshot",ze="sveltekit:scroll",Be="sveltekit:states",Ct="sveltekit:pageurl",D="sveltekit:history",B="sveltekit:navigation",X={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},J=location.origin;function Ke(e){if(e instanceof URL)return e;let n=document.baseURI;if(!n){const t=document.getElementsByTagName("base");n=t.length?t[0].href:document.URL}return new URL(e,n)}function Ee(){return{x:pageXOffset,y:pageYOffset}}function $(e,n){return e.getAttribute(`data-sveltekit-${n}`)}const Ne={...X,"":X.hover};function Ye(e){let n=e.assignedSlot??e.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function Je(e,n){for(;e&&e!==n;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=Ye(e)}}function ye(e,n){let t;try{t=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const r=e instanceof SVGAElement?e.target.baseVal:e.target,a=!t||!!r||oe(t,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),o=(t==null?void 0:t.origin)===J&&e.hasAttribute("download");return{url:t,external:a,target:r,download:o}}function Z(e){let n=null,t=null,r=null,a=null,o=null,i=null,s=e;for(;s&&s!==document.documentElement;)r===null&&(r=$(s,"preload-code")),a===null&&(a=$(s,"preload-data")),n===null&&(n=$(s,"keepfocus")),t===null&&(t=$(s,"noscroll")),o===null&&(o=$(s,"reload")),i===null&&(i=$(s,"replacestate")),s=Ye(s);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Ne[r??"off"],preload_data:Ne[a??"off"],keepfocus:c(n),noscroll:c(t),reload:c(o),replace_state:c(i)}}function Oe(e){const n=ae(e);let t=!0;function r(){t=!0,n.update(i=>i)}function a(i){t=!1,n.set(i)}function o(i){let s;return n.subscribe(c=>{(s===void 0||t&&c!==s)&&i(s=c)})}return{notify:r,set:a,subscribe:o}}function Vt(){const{set:e,subscribe:n}=ae(!1);let t;async function r(){clearTimeout(t);try{const a=await fetch(`${$t}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==Dt;return i&&(e(!0),clearTimeout(t)),i}catch{return!1}}return{subscribe:n,check:r}}function oe(e,n){return e.origin!==J||!e.pathname.startsWith(n)}const Ft=-1,qt=-2,Mt=-3,Gt=-4,Ht=-5,zt=-6;function Bt(e,n){if(typeof e=="number")return a(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const t=e,r=Array(t.length);function a(o,i=!1){if(o===Ft)return;if(o===Mt)return NaN;if(o===Gt)return 1/0;if(o===Ht)return-1/0;if(o===zt)return-0;if(i)throw new Error("Invalid input");if(o in r)return r[o];const s=t[o];if(!s||typeof s!="object")r[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],l=n==null?void 0:n[c];if(l)return r[o]=l(a(s[1]));switch(c){case"Date":r[o]=new Date(s[1]);break;case"Set":const u=new Set;r[o]=u;for(let d=1;d<s.length;d+=1)u.add(a(s[d]));break;case"Map":const h=new Map;r[o]=h;for(let d=1;d<s.length;d+=2)h.set(a(s[d]),a(s[d+1]));break;case"RegExp":r[o]=new RegExp(s[1],s[2]);break;case"Object":r[o]=Object(s[1]);break;case"BigInt":r[o]=BigInt(s[1]);break;case"null":const p=Object.create(null);r[o]=p;for(let d=1;d<s.length;d+=2)p[s[d]]=a(s[d+1]);break;default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);r[o]=c;for(let l=0;l<s.length;l+=1){const u=s[l];u!==qt&&(c[l]=a(u))}}else{const c={};r[o]=c;for(const l in s){const u=s[l];c[l]=a(u)}}return r[o]}return a(0)}const We=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...We];const Kt=new Set([...We]);[...Kt];function Yt(e){return e.filter(n=>n!=null)}class se{constructor(n,t){this.status=n,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${n}`}}toString(){return JSON.stringify(this.body)}}class Xe{constructor(n,t){this.status=n,this.location=t}}class ke extends Error{constructor(n,t,r){super(r),this.status=n,this.text=t}}const Jt="x-sveltekit-invalidated",Wt="x-sveltekit-trailing-slash";function Q(e){return e instanceof se||e instanceof ke?e.status:500}function Xt(e){return e instanceof ke?e.text:"Internal Error"}const O=Ge(ze)??{},K=Ge(He)??{},T={url:Oe({}),page:Oe({}),navigating:ae(null),updated:Vt()};function Ae(e){O[e]=Ee()}function Zt(e,n){let t=e+1;for(;O[t];)delete O[t],t+=1;for(t=n+1;K[t];)delete K[t],t+=1}function V(e){return location.href=e.href,new Promise(()=>{})}function je(){}let ie,we,ee,x,ve,q;const Ze=[],te=[];let R=null;const Qe=[],Qt=[];let N=[],y={branch:[],error:null,url:null},Se=!1,ne=!1,$e=!0,Y=!1,M=!1,et=!1,ce=!1,le,A,L,I,F;const z=new Set;let me;async function pn(e,n,t){var a,o;document.URL!==location.href&&(location.href=location.href),q=e,ie=Ot(e),x=document.documentElement,ve=n,we=e.nodes[0],ee=e.nodes[1],we(),ee(),A=(a=history.state)==null?void 0:a[D],L=(o=history.state)==null?void 0:o[B],A||(A=L=Date.now(),history.replaceState({...history.state,[D]:A,[B]:L},""));const r=O[A];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),t?await ln(ve,t):sn(location.href,{replaceState:!0}),cn()}async function en(){if(await(me||(me=Promise.resolve())),!me)return;me=null;const e=ue(y.url,!0);R=null;const n=F={},t=e&&await Pe(e);if(!(!t||n!==F)){if(t.type==="redirect")return Re(new URL(t.location,y.url).href,{},1,n);t.props.page&&(I=t.props.page),y=t.state,tt(),le.$set(t.props)}}function tt(){Ze.length=0,ce=!1}function nt(e){te.some(n=>n==null?void 0:n.snapshot)&&(K[e]=te.map(n=>{var t;return(t=n==null?void 0:n.snapshot)==null?void 0:t.capture()}))}function rt(e){var n;(n=K[e])==null||n.forEach((t,r)=>{var a,o;(o=(a=te[r])==null?void 0:a.snapshot)==null||o.restore(t)})}function De(){Ae(A),Ue(ze,O),nt(L),Ue(He,K)}async function Re(e,n,t,r){return W({type:"goto",url:Ke(e),keepfocus:n.keepFocus,noscroll:n.noScroll,replace_state:n.replaceState,state:n.state,redirect_count:t,nav_token:r,accept:()=>{n.invalidateAll&&(ce=!0)}})}async function tn(e){if(e.id!==(R==null?void 0:R.id)){const n={};z.add(n),R={id:e.id,token:n,promise:Pe({...e,preload:n}).then(t=>(z.delete(n),t.type==="loaded"&&t.state.error&&(R=null),t))}}return R.promise}async function _e(e){const n=ie.find(t=>t.exec(ot(e)));n&&await Promise.all([...n.layouts,n.leaf].map(t=>t==null?void 0:t[1]()))}function at(e,n,t){var o;y=e.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),I=e.props.page,le=new q.root({target:n,props:{...e.props,stores:T,components:te},hydrate:t,sync:!1}),rt(L);const a={from:null,to:{params:y.params,route:{id:((o=y.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};N.forEach(i=>i(a)),ne=!0}function re({url:e,params:n,branch:t,status:r,error:a,route:o,form:i}){let s="never";if(P&&(e.pathname===P||e.pathname===P+"/"))s="always";else for(const d of t)(d==null?void 0:d.slash)!==void 0&&(s=d.slash);e.pathname=_t(e.pathname,s),e.search=e.search;const c={type:"loaded",state:{url:e,params:n,branch:t,error:a,route:o},props:{constructors:Yt(t).map(d=>d.node.component),page:I}};i!==void 0&&(c.props.form=i);let l={},u=!I,h=0;for(let d=0;d<Math.max(t.length,y.branch.length);d+=1){const g=t[d],f=y.branch[d];(g==null?void 0:g.data)!==(f==null?void 0:f.data)&&(u=!0),g&&(l={...l,...g.data},u&&(c.props[`data_${h}`]=l),h+=1)}return(!y.url||e.href!==y.url.href||y.error!==a||i!==void 0&&i!==I.form||u)&&(c.props.page={error:a,params:n,route:{id:(o==null?void 0:o.id)??null},state:{},status:r,url:new URL(e),form:i??null,data:u?l:I.data}),c}async function Ie({loader:e,parent:n,url:t,params:r,route:a,server_data_node:o}){var u,h,p;let i=null,s=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await e();if((u=l.universal)!=null&&u.load){let d=function(...f){for(const _ of f){const{href:b}=new URL(_,t);c.dependencies.add(b)}};const g={route:new Proxy(a,{get:(f,_)=>(s&&(c.route=!0),f[_])}),params:new Proxy(r,{get:(f,_)=>(s&&c.params.add(_),f[_])}),data:(o==null?void 0:o.data)??null,url:bt(t,()=>{s&&(c.url=!0)},f=>{s&&c.search_params.add(f)}),async fetch(f,_){let b;f instanceof Request?(b=f.url,_={body:f.method==="GET"||f.method==="HEAD"?void 0:await f.blob(),cache:f.cache,credentials:f.credentials,headers:f.headers,integrity:f.integrity,keepalive:f.keepalive,method:f.method,mode:f.mode,redirect:f.redirect,referrer:f.referrer,referrerPolicy:f.referrerPolicy,signal:f.signal,..._}):b=f;const S=new URL(b,t);return s&&d(S.href),S.origin===t.origin&&(b=S.href.slice(t.origin.length)),ne?Lt(b,S.href,_):It(b,_)},setHeaders:()=>{},depends:d,parent(){return s&&(c.parent=!0),n()},untrack(f){s=!1;try{return f()}finally{s=!0}}};i=await l.universal.load.call(null,g)??null}return{node:l,loader:e,server:o,universal:(h=l.universal)!=null&&h.load?{type:"data",data:i,uses:c}:null,data:i??(o==null?void 0:o.data)??null,slash:((p=l.universal)==null?void 0:p.trailingSlash)??(o==null?void 0:o.slash)}}function Ce(e,n,t,r,a,o){if(ce)return!0;if(!a)return!1;if(a.parent&&e||a.route&&n||a.url&&t)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(o[i]!==y.params[i])return!0;for(const i of a.dependencies)if(Ze.some(s=>s(new URL(i))))return!0;return!1}function Le(e,n){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?n??null:null}function nn(e,n){if(!e)return new Set(n.searchParams.keys());const t=new Set([...e.searchParams.keys(),...n.searchParams.keys()]);for(const r of t){const a=e.searchParams.getAll(r),o=n.searchParams.getAll(r);a.every(i=>o.includes(i))&&o.every(i=>a.includes(i))&&t.delete(r)}return t}function Ve({error:e,url:n,route:t,params:r}){return{type:"loaded",state:{error:e,url:n,route:t,params:r,branch:[]},props:{page:I,constructors:[]}}}async function Pe({id:e,invalidating:n,url:t,params:r,route:a,preload:o}){if((R==null?void 0:R.id)===e)return z.delete(R.token),R.promise;const{errors:i,layouts:s,leaf:c}=a,l=[...s,c];i.forEach(m=>m==null?void 0:m().catch(()=>{})),l.forEach(m=>m==null?void 0:m[1]().catch(()=>{}));let u=null;const h=y.url?e!==y.url.pathname+y.url.search:!1,p=y.route?a.id!==y.route.id:!1,d=nn(y.url,t);let g=!1;const f=l.map((m,v)=>{var U;const E=y.branch[v],k=!!(m!=null&&m[0])&&((E==null?void 0:E.loader)!==m[1]||Ce(g,p,h,d,(U=E.server)==null?void 0:U.uses,r));return k&&(g=!0),k});if(f.some(Boolean)){try{u=await ct(t,f)}catch(m){const v=await C(m,{url:t,params:r,route:{id:e}});return z.has(o)?Ve({error:v,url:t,params:r,route:a}):fe({status:Q(m),error:v,url:t,route:a})}if(u.type==="redirect")return u}const _=u==null?void 0:u.nodes;let b=!1;const S=l.map(async(m,v)=>{var de;if(!m)return;const E=y.branch[v],k=_==null?void 0:_[v];if((!k||k.type==="skip")&&m[1]===(E==null?void 0:E.loader)&&!Ce(b,p,h,d,(de=E.universal)==null?void 0:de.uses,r))return E;if(b=!0,(k==null?void 0:k.type)==="error")throw k;return Ie({loader:m[1],url:t,params:r,route:a,parent:async()=>{var Te;const xe={};for(let he=0;he<v;he+=1)Object.assign(xe,(Te=await S[he])==null?void 0:Te.data);return xe},server_data_node:Le(k===void 0&&m[0]?{type:"skip"}:k??null,m[0]?E==null?void 0:E.server:void 0)})});for(const m of S)m.catch(()=>{});const w=[];for(let m=0;m<l.length;m+=1)if(l[m])try{w.push(await S[m])}catch(v){if(v instanceof Xe)return{type:"redirect",location:v.location};if(z.has(o))return Ve({error:await C(v,{params:r,url:t,route:{id:a.id}}),url:t,params:r,route:a});let E=Q(v),k;if(_!=null&&_.includes(v))E=v.status??E,k=v.error;else if(v instanceof se)k=v.body;else{if(await T.updated.check())return await V(t);k=await C(v,{params:r,url:t,route:{id:a.id}})}const U=await rn(m,w,i);return U?re({url:t,params:r,branch:w.slice(0,U.idx).concat(U.node),status:E,error:k,route:a}):await it(t,{id:a.id},k,E)}else w.push(void 0);return re({url:t,params:r,branch:w,status:200,error:null,route:a,form:n?void 0:null})}async function rn(e,n,t){for(;e--;)if(t[e]){let r=e;for(;!n[r];)r-=1;try{return{idx:r+1,node:{node:await t[e](),loader:t[e],data:{},server:null,universal:null}}}catch{continue}}}async function fe({status:e,error:n,url:t,route:r}){const a={};let o=null;if(q.server_loads[0]===0)try{const l=await ct(t,[!0]);if(l.type!=="data"||l.nodes[0]&&l.nodes[0].type!=="data")throw 0;o=l.nodes[0]??null}catch{(t.origin!==J||t.pathname!==location.pathname||Se)&&await V(t)}const s=await Ie({loader:we,url:t,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Le(o)}),c={node:await ee(),loader:ee,universal:null,server:null,data:null};return re({url:t,params:a,branch:[s,c],status:e,error:n,route:null})}function ue(e,n){if(!e||oe(e,P))return;let t;try{t=q.hooks.reroute({url:new URL(e)})??e.pathname}catch{return}const r=ot(t);for(const a of ie){const o=a.exec(r);if(o)return{id:e.pathname+e.search,invalidating:n,route:a,params:wt(o),url:e}}}function ot(e){return yt(e.slice(P.length)||"/")}function st({url:e,type:n,intent:t,delta:r}){let a=!1;const o=ft(y,t,e,n);r!==void 0&&(o.navigation.delta=r);const i={...o.navigation,cancel:()=>{a=!0,o.reject(new Error("navigation cancelled"))}};return Y||Qe.forEach(s=>s(i)),a?null:o}async function W({type:e,url:n,popped:t,keepfocus:r,noscroll:a,replace_state:o,state:i={},redirect_count:s=0,nav_token:c={},accept:l=je,block:u=je}){const h=ue(n,!1),p=st({url:n,type:e,delta:t==null?void 0:t.delta,intent:h});if(!p){u();return}const d=A,g=L;l(),Y=!0,ne&&T.navigating.set(p.navigation),F=c;let f=h&&await Pe(h);if(!f){if(oe(n,P))return await V(n);f=await it(n,{id:null},await C(new ke(404,"Not Found",`Not found: ${n.pathname}`),{url:n,params:{},route:{id:null}}),404)}if(n=(h==null?void 0:h.url)||n,F!==c)return p.reject(new Error("navigation aborted")),!1;if(f.type==="redirect")if(s>=20)f=await fe({status:500,error:await C(new Error("Redirect loop"),{url:n,params:{},route:{id:null}}),url:n,route:{id:null}});else return Re(new URL(f.location,n).href,{},s+1,c),!1;else f.props.page.status>=400&&await T.updated.check()&&await V(n);if(tt(),Ae(d),nt(g),f.props.page.url.pathname!==n.pathname&&(n.pathname=f.props.page.url.pathname),i=t?t.state:i,!t){const w=o?0:1,m={[D]:A+=w,[B]:L+=w,[Be]:i};(o?history.replaceState:history.pushState).call(history,m,"",n),o||Zt(A,L)}if(R=null,f.props.page.state=i,ne){y=f.state,f.props.page&&(f.props.page.url=n);const w=(await Promise.all(Qt.map(m=>m(p.navigation)))).filter(m=>typeof m=="function");if(w.length>0){let m=function(){N=N.filter(v=>!w.includes(v))};w.push(m),N.push(...w)}le.$set(f.props),et=!0}else at(f,ve,!1);const{activeElement:_}=document;await gt();const b=t?t.scroll:a?Ee():null;if($e){const w=n.hash&&document.getElementById(decodeURIComponent(n.hash.slice(1)));b?scrollTo(b.x,b.y):w?w.scrollIntoView():scrollTo(0,0)}const S=document.activeElement!==_&&document.activeElement!==document.body;!r&&!S&&fn(),$e=!0,f.props.page&&(I=f.props.page),Y=!1,e==="popstate"&&rt(L),p.fulfil(void 0),N.forEach(w=>w(p.navigation)),T.navigating.set(null)}async function it(e,n,t,r){return e.origin===J&&e.pathname===location.pathname&&!Se?await fe({status:r,error:t,url:e,route:n}):await V(e)}function an(){let e;x.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(e),e=setTimeout(()=>{r(i,2)},20)});function n(o){r(o.composedPath()[0],1)}x.addEventListener("mousedown",n),x.addEventListener("touchstart",n,{passive:!0});const t=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(_e(i.target.href),t.unobserve(i.target))},{threshold:0});function r(o,i){const s=Je(o,x);if(!s)return;const{url:c,external:l,download:u}=ye(s,P);if(l||u)return;const h=Z(s);if(!h.reload)if(i<=h.preload_data){const p=ue(c,!1);p&&tn(p)}else i<=h.preload_code&&_e(c.pathname)}function a(){t.disconnect();for(const o of x.querySelectorAll("a")){const{url:i,external:s,download:c}=ye(o,P);if(s||c)continue;const l=Z(o);l.reload||(l.preload_code===X.viewport&&t.observe(o),l.preload_code===X.eager&&_e(i.pathname))}}N.push(a),a()}function C(e,n){if(e instanceof se)return e.body;const t=Q(e),r=Xt(e);return q.hooks.handleError({error:e,event:n,status:t,message:r})??{message:r}}function on(e,n){mt(()=>(e.push(n),()=>{const t=e.indexOf(n);e.splice(t,1)}))}function gn(e){on(N,e)}function sn(e,n={}){return e=Ke(e),e.origin!==J?Promise.reject(new Error("goto: invalid URL")):Re(e,n,0)}function mn(){return ce=!0,en()}function cn(){var n;history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let r=!1;if(De(),!Y){const a=ft(y,void 0,null,"leave"),o={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};Qe.forEach(i=>i(o))}r?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&De()}),(n=navigator.connection)!=null&&n.saveData||an(),x.addEventListener("click",async t=>{var p;if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const r=Je(t.composedPath()[0],x);if(!r)return;const{url:a,external:o,target:i,download:s}=ye(r,P);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=Z(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||s)return;if(o||c.reload){st({url:a,type:"link"})?Y=!0:t.preventDefault();return}const[u,h]=a.href.split("#");if(h!==void 0&&u===pe(location)){const[,d]=y.url.href.split("#");if(d===h){t.preventDefault(),h===""||h==="top"&&r.ownerDocument.getElementById("top")===null?window.scrollTo({top:0}):(p=r.ownerDocument.getElementById(h))==null||p.scrollIntoView();return}if(M=!0,Ae(A),e(a),!c.replace_state)return;M=!1}t.preventDefault(),await new Promise(d=>{requestAnimationFrame(()=>{setTimeout(d,0)}),setTimeout(d,100)}),W({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),x.addEventListener("submit",t=>{if(t.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(t.target),a=t.submitter;if(((a==null?void 0:a.formMethod)||r.method)!=="get")return;const i=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(oe(i,P))return;const s=t.target,c=Z(s);if(c.reload)return;t.preventDefault(),t.stopPropagation();const l=new FormData(s),u=a==null?void 0:a.getAttribute("name");u&&l.append(u,(a==null?void 0:a.getAttribute("value"))??""),i.search=new URLSearchParams(l).toString(),W({type:"form",url:i,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??i.href===location.href})}),addEventListener("popstate",async t=>{var r;if((r=t.state)!=null&&r[D]){const a=t.state[D];if(F={},a===A)return;const o=O[a],i=t.state[Be]??{},s=new URL(t.state[Ct]??location.href),c=t.state[B],l=pe(location)===pe(y.url);if(c===L&&(et||l)){e(s),O[A]=Ee(),o&&scrollTo(o.x,o.y),i!==I.state&&(I={...I,state:i},le.$set({page:I})),A=a;return}const h=a-A;await W({type:"popstate",url:s,popped:{state:i,scroll:o,delta:h},accept:()=>{A=a,L=c},block:()=>{history.go(-h)},nav_token:F})}else if(!M){const a=new URL(location.href);e(a)}}),addEventListener("hashchange",()=>{M&&(M=!1,history.replaceState({...history.state,[D]:++A,[B]:L},"",location.href))});for(const t of document.querySelectorAll("link"))t.rel==="icon"&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&T.navigating.set(null)});function e(t){y.url=t,T.page.set({...I,url:t}),T.page.notify()}}async function ln(e,{status:n=200,error:t,node_ids:r,params:a,route:o,data:i,form:s}){Se=!0;const c=new URL(location.href);({params:a={},route:o={id:null}}=ue(c,!1)||{});let l;try{const u=r.map(async(d,g)=>{const f=i[g];return f!=null&&f.uses&&(f.uses=lt(f.uses)),Ie({loader:q.nodes[d],url:c,params:a,route:o,parent:async()=>{const _={};for(let b=0;b<g;b+=1)Object.assign(_,(await u[b]).data);return _},server_data_node:Le(f)})}),h=await Promise.all(u),p=ie.find(({id:d})=>d===o.id);if(p){const d=p.layouts;for(let g=0;g<d.length;g++)d[g]||h.splice(g,0,void 0)}l=re({url:c,params:a,branch:h,status:n,error:t,form:s,route:p??null})}catch(u){if(u instanceof Xe){await V(new URL(u.location,location.href));return}l=await fe({status:Q(u),error:await C(u,{url:c,params:a,route:o}),url:c,route:o})}l.props.page&&(l.props.page.state={}),at(l,e,!0)}async function ct(e,n){var a;const t=new URL(e);t.pathname=At(e.pathname),e.pathname.endsWith("/")&&t.searchParams.append(Wt,"1"),t.searchParams.append(Jt,n.map(o=>o?"1":"0").join(""));const r=await Me(t.href);if(!r.ok){let o;throw(a=r.headers.get("content-type"))!=null&&a.includes("application/json")?o=await r.json():r.status===404?o="Not Found":r.status===500&&(o="Internal Error"),new se(r.status,o)}return new Promise(async o=>{var h;const i=new Map,s=r.body.getReader(),c=new TextDecoder;function l(p){return Bt(p,{Promise:d=>new Promise((g,f)=>{i.set(d,{fulfil:g,reject:f})})})}let u="";for(;;){const{done:p,value:d}=await s.read();if(p&&!u)break;for(u+=!d&&u?`
`:c.decode(d,{stream:!0});;){const g=u.indexOf(`
`);if(g===-1)break;const f=JSON.parse(u.slice(0,g));if(u=u.slice(g+1),f.type==="redirect")return o(f);if(f.type==="data")(h=f.nodes)==null||h.forEach(_=>{(_==null?void 0:_.type)==="data"&&(_.uses=lt(_.uses),_.data=l(_.data))}),o(f);else if(f.type==="chunk"){const{id:_,data:b,error:S}=f,w=i.get(_);i.delete(_),S?w.reject(l(S)):w.fulfil(l(b))}}}})}function lt(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set((e==null?void 0:e.search_params)??[])}}function fn(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const n=document.body,t=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),t!==null?n.setAttribute("tabindex",t):n.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let o=0;o<r.rangeCount;o+=1)a.push(r.getRangeAt(o));setTimeout(()=>{if(r.rangeCount===a.length){for(let o=0;o<r.rangeCount;o+=1){const i=a[o],s=r.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}r.removeAllRanges()}})}}}function ft(e,n,t,r){var c,l;let a,o;const i=new Promise((u,h)=>{a=u,o=h});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((c=e.route)==null?void 0:c.id)??null},url:e.url},to:t&&{params:(n==null?void 0:n.params)??null,route:{id:((l=n==null?void 0:n.route)==null?void 0:l.id)??null},url:t},willUnload:!n,type:r,complete:i},fulfil:a,reject:o}}export{gn as a,hn as b,pn as c,dn as d,sn as g,mn as i,jt as r,T as s,ae as w};
