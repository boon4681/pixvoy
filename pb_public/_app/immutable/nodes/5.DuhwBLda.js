import{s as K,a as S,l as x,g as j,i as q,f as d,k as L,n as r,e as $,t as Q,c as h,b as w,d as R,m,o as A,h as f,p as U,j as W,q as X}from"../chunks/scheduler.BtLdG6yN.js";import{H as Y,h as F,u as Z,c as ee,S as te}from"../chunks/clickToCopy.B06dVamd.js";import{S as ae,i as le,c as H,a as B,m as O,t as V,b as y,d as T}from"../chunks/index.CaxwweJU.js";import{p as se}from"../chunks/stores.DXtnPqRD.js";import{p as J,B as ne}from"../chunks/Toaster.svelte_svelte_type_style_lang.D4tMB4yU.js";function oe(a){return{c:r,l:r,m:r,p:r,i:r,o:r,d:r}}function re(a){let e,n,l=a[1].title+"",c,p,s,t,o,I,g,v,b,_,D,k,C,z;return _=new ne({props:{variant:"secondary",size:"icon",class:"rounded-full",$$slots:{default:[ie]},$$scope:{ctx:a}}}),{c(){e=$("div"),n=$("h1"),c=Q(l),p=S(),s=$("div"),t=$("img"),I=S(),g=$("div"),v=$("div"),b=$("div"),H(_.$$.fragment),this.h()},l(u){e=h(u,"DIV",{class:!0});var i=w(e);n=h(i,"H1",{class:!0});var E=w(n);c=R(E,l),E.forEach(d),p=j(i),s=h(i,"DIV",{class:!0});var G=w(s);t=h(G,"IMG",{src:!0,alt:!0,class:!0}),G.forEach(d),I=j(i),g=h(i,"DIV",{class:!0});var M=w(g);v=h(M,"DIV",{class:!0});var N=w(v);b=h(N,"DIV",{});var P=w(b);B(_.$$.fragment,P),P.forEach(d),N.forEach(d),M.forEach(d),i.forEach(d),this.h()},h(){m(n,"class","text-2xl font-bold mb-6"),A(t.src,o="/api/files/"+a[1].collectionId+"/"+a[1].id+"/"+a[1].image+"?thumb=300x350")||m(t,"src",o),m(t,"alt",""),m(t,"class","object-contain rounded-lg w-full h-full"),m(s,"class","w-full aspect-[4/3] bg-neutral-200 rounded-lg"),m(v,"class","flex space-x-2"),m(g,"class","flex justify-between items-center mt-4"),m(e,"class","relative w-full max-w-lg mt-4 mx-auto")},m(u,i){q(u,e,i),f(e,n),f(n,c),f(e,p),f(e,s),f(s,t),f(e,I),f(e,g),f(g,v),f(v,b),O(_,b,null),k=!0,C||(z=U(D=ee.call(null,b,`${window.location.origin}/v/${a[1].id}`)),C=!0)},p(u,i){a=u,(!k||i&1)&&l!==(l=a[1].title+"")&&W(c,l),(!k||i&1&&!A(t.src,o="/api/files/"+a[1].collectionId+"/"+a[1].id+"/"+a[1].image+"?thumb=300x350"))&&m(t,"src",o);const E={};i&4&&(E.$$scope={dirty:i,ctx:a}),_.$set(E),D&&X(D.update)&&i&1&&D.update.call(null,`${window.location.origin}/v/${a[1].id}`)},i(u){k||(V(_.$$.fragment,u),k=!0)},o(u){y(_.$$.fragment,u),k=!1},d(u){u&&d(e),T(_),C=!1,z()}}}function ie(a){let e,n;return e=new te({props:{class:"h-4 w-4"}}),{c(){H(e.$$.fragment)},l(l){B(e.$$.fragment,l)},m(l,c){O(e,l,c),n=!0},p:r,i(l){n||(V(e.$$.fragment,l),n=!0)},o(l){y(e.$$.fragment,l),n=!1},d(l){T(e,l)}}}function ce(a){return{c:r,l:r,m:r,p:r,i:r,o:r,d:r}}function ue(a){let e,n,l,c,p;e=new Y({});let s={ctx:a,current:null,token:null,hasCatch:!1,pending:ce,then:re,catch:oe,value:1,blocks:[,,,]};return F(c=J.collection("image_posts").getOne(a[0].params.id),s),{c(){H(e.$$.fragment),n=S(),l=x(),s.block.c()},l(t){B(e.$$.fragment,t),n=j(t),l=x(),s.block.l(t)},m(t,o){O(e,t,o),q(t,n,o),q(t,l,o),s.block.m(t,s.anchor=o),s.mount=()=>l.parentNode,s.anchor=l,p=!0},p(t,[o]){a=t,s.ctx=a,o&1&&c!==(c=J.collection("image_posts").getOne(a[0].params.id))&&F(c,s)||Z(s,a,o)},i(t){p||(V(e.$$.fragment,t),V(s.block),p=!0)},o(t){y(e.$$.fragment,t);for(let o=0;o<3;o+=1){const I=s.blocks[o];y(I)}p=!1},d(t){t&&(d(n),d(l)),T(e,t),s.block.d(t),s.token=null,s=null}}}function me(a,e,n){let l;return L(a,se,c=>n(0,l=c)),[l]}class he extends ae{constructor(e){super(),le(this,e,me,ue,K,{})}}export{he as component};
