import{F as ce,S as re,i as ie,s as oe,e as v,k as I,G as V,t as D,c as p,a as n,d as l,m as H,H as F,h as N,I as ue,b as e,J as q,g as T,K as s,E as se,L as ve,M as pe,w as fe,x as _e,y as de,N as he,O as me,P as ge,q as ae,o as le,B as be}from"../chunks/index-9fe72fd8.js";var ye="/_app/assets/svelte-logo-87df40b8.svg";const Ee=()=>{const i=ce("__svelte__");return{page:{subscribe:i.page.subscribe},navigating:{subscribe:i.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:i.navigating.subscribe}},session:i.session,updated:i.updated}},$e={subscribe(i){return Ee().page.subscribe(i)}};function xe(i){let a,_,o,c,m,E,h,f,x,S,u,b,r,t,d,$,g,B,G,A,w,P,R,L,M,Z,O;return{c(){a=v("header"),_=v("div"),o=v("a"),c=v("img"),E=I(),h=v("nav"),f=V("svg"),x=V("path"),S=I(),u=v("ul"),b=v("li"),r=v("a"),t=D("Home"),d=I(),$=v("li"),g=v("a"),B=D("About"),G=I(),A=v("li"),w=v("a"),P=D("Todos"),R=I(),L=V("svg"),M=V("path"),Z=I(),O=v("div"),this.h()},l(k){a=p(k,"HEADER",{class:!0});var y=n(a);_=p(y,"DIV",{class:!0});var J=n(_);o=p(J,"A",{href:!0,class:!0});var U=n(o);c=p(U,"IMG",{src:!0,alt:!0,class:!0}),U.forEach(l),J.forEach(l),E=H(y),h=p(y,"NAV",{class:!0});var C=n(h);f=F(C,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var j=n(f);x=F(j,"path",{d:!0,class:!0}),n(x).forEach(l),j.forEach(l),S=H(C),u=p(C,"UL",{class:!0});var K=n(u);b=p(K,"LI",{class:!0});var z=n(b);r=p(z,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var Q=n(r);t=N(Q,"Home"),Q.forEach(l),z.forEach(l),d=H(K),$=p(K,"LI",{class:!0});var W=n($);g=p(W,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var X=n(g);B=N(X,"About"),X.forEach(l),W.forEach(l),G=H(K),A=p(K,"LI",{class:!0});var Y=n(A);w=p(Y,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var ee=n(w);P=N(ee,"Todos"),ee.forEach(l),Y.forEach(l),K.forEach(l),R=H(C),L=F(C,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var te=n(L);M=F(te,"path",{d:!0,class:!0}),n(M).forEach(l),te.forEach(l),C.forEach(l),Z=H(y),O=p(y,"DIV",{class:!0});var ne=n(O);ne.forEach(l),y.forEach(l),this.h()},h(){ue(c.src,m=ye)||e(c,"src",m),e(c,"alt","SvelteKit"),e(c,"class","svelte-xiyump"),e(o,"href","https://kit.svelte.dev"),e(o,"class","svelte-xiyump"),e(_,"class","corner svelte-xiyump"),e(x,"d","M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"),e(x,"class","svelte-xiyump"),e(f,"viewBox","0 0 2 3"),e(f,"aria-hidden","true"),e(f,"class","svelte-xiyump"),e(r,"sveltekit:prefetch",""),e(r,"href","/"),e(r,"class","svelte-xiyump"),e(b,"class","svelte-xiyump"),q(b,"active",i[0].url.pathname==="/"),e(g,"sveltekit:prefetch",""),e(g,"href","/about"),e(g,"class","svelte-xiyump"),e($,"class","svelte-xiyump"),q($,"active",i[0].url.pathname==="/about"),e(w,"sveltekit:prefetch",""),e(w,"href","/todos"),e(w,"class","svelte-xiyump"),e(A,"class","svelte-xiyump"),q(A,"active",i[0].url.pathname==="/todos"),e(u,"class","svelte-xiyump"),e(M,"d","M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"),e(M,"class","svelte-xiyump"),e(L,"viewBox","0 0 2 3"),e(L,"aria-hidden","true"),e(L,"class","svelte-xiyump"),e(h,"class","svelte-xiyump"),e(O,"class","corner svelte-xiyump"),e(a,"class","svelte-xiyump")},m(k,y){T(k,a,y),s(a,_),s(_,o),s(o,c),s(a,E),s(a,h),s(h,f),s(f,x),s(h,S),s(h,u),s(u,b),s(b,r),s(r,t),s(u,d),s(u,$),s($,g),s(g,B),s(u,G),s(u,A),s(A,w),s(w,P),s(h,R),s(h,L),s(L,M),s(a,Z),s(a,O)},p(k,[y]){y&1&&q(b,"active",k[0].url.pathname==="/"),y&1&&q($,"active",k[0].url.pathname==="/about"),y&1&&q(A,"active",k[0].url.pathname==="/todos")},i:se,o:se,d(k){k&&l(a)}}}function ke(i,a,_){let o;return ve(i,$e,c=>_(0,o=c)),[o]}class Ae extends re{constructor(a){super(),ie(this,a,ke,xe,oe,{})}}function we(i){let a,_,o,c,m,E,h,f,x,S,u;a=new Ae({});const b=i[1].default,r=pe(b,i,i[0],null);return{c(){fe(a.$$.fragment),_=I(),o=v("main"),r&&r.c(),c=I(),m=v("footer"),E=v("p"),h=D("visit "),f=v("a"),x=D("kit.svelte.dev"),S=D(" to learn SvelteKit"),this.h()},l(t){_e(a.$$.fragment,t),_=H(t),o=p(t,"MAIN",{class:!0});var d=n(o);r&&r.l(d),d.forEach(l),c=H(t),m=p(t,"FOOTER",{class:!0});var $=n(m);E=p($,"P",{});var g=n(E);h=N(g,"visit "),f=p(g,"A",{href:!0,class:!0});var B=n(f);x=N(B,"kit.svelte.dev"),B.forEach(l),S=N(g," to learn SvelteKit"),g.forEach(l),$.forEach(l),this.h()},h(){e(o,"class","svelte-1nw0d5b"),e(f,"href","https://kit.svelte.dev"),e(f,"class","svelte-1nw0d5b"),e(m,"class","svelte-1nw0d5b")},m(t,d){de(a,t,d),T(t,_,d),T(t,o,d),r&&r.m(o,null),T(t,c,d),T(t,m,d),s(m,E),s(E,h),s(E,f),s(f,x),s(E,S),u=!0},p(t,[d]){r&&r.p&&(!u||d&1)&&he(r,b,t,t[0],u?ge(b,t[0],d,null):me(t[0]),null)},i(t){u||(ae(a.$$.fragment,t),ae(r,t),u=!0)},o(t){le(a.$$.fragment,t),le(r,t),u=!1},d(t){be(a,t),t&&l(_),t&&l(o),r&&r.d(t),t&&l(c),t&&l(m)}}}function Le(i,a,_){let{$$slots:o={},$$scope:c}=a;return i.$$set=m=>{"$$scope"in m&&_(0,c=m.$$scope)},[c,o]}class He extends re{constructor(a){super(),ie(this,a,Le,we,oe,{})}}export{He as default};
