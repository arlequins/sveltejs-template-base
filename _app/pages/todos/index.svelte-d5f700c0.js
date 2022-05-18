import{W as z,S as ue,i as de,s as ce,e as b,k as U,c as y,a as I,m as N,d as E,b as n,J as ne,g as G,K as d,X as J,Y as he,Z as fe,_ as _e,$ as pe,a0 as le,V as me,t as ve,Q as be,h as ye,a1 as ge,p as Te,q as Ee,o as ke,n as we,a2 as xe,E as Me}from"../../chunks/index-9fe72fd8.js";import{c as q}from"../../chunks/singletons-d1fb5791.js";function ie(i){const e=i-1;return e*e*e+1}function Ue(i,{from:e,to:t},a={}){const c=getComputedStyle(i),v=c.transform==="none"?"":c.transform,[p,s]=c.transformOrigin.split(" ").map(parseFloat),h=e.left+e.width*p/t.width-(t.left+p),f=e.top+e.height*s/t.height-(t.top+s),{delay:l=0,duration:g=x=>Math.sqrt(x)*120,easing:k=ie}=a;return{delay:l,duration:z(g)?g(Math.sqrt(h*h+f*f)):g,easing:k,css:(x,_)=>{const T=_*h,P=_*f,r=x+_*e.width/t.width,o=x+_*e.height/t.height;return`transform: ${v} translate(${T}px, ${P}px) scale(${r}, ${o});`}}}function oe(i,{delay:e=0,duration:t=400,easing:a=ie,start:c=0,opacity:v=0}={}){const p=getComputedStyle(i),s=+p.opacity,h=p.transform==="none"?"":p.transform,f=1-c,l=s*(1-v);return{delay:e,duration:t,easing:a,css:(g,k)=>`
			transform: ${h} scale(${1-f*k});
			opacity: ${s-l*k}
		`}}q.disable_scroll_handling;q.goto;const Ne=q.invalidate;q.prefetch;q.prefetch_routes;q.before_navigate;q.after_navigate;const K=(i,{pending:e,error:t,result:a}={})=>{let c;const v=async s=>{const h=c={};s.preventDefault();const f=new FormData(i);e&&e({data:f,form:i});try{const l=await fetch(i.action,{method:i.method,headers:{accept:"application/json"},body:f});if(h!==c)return;if(l.ok){a&&a({data:f,form:i,response:l});const g=new URL(i.action);g.search=g.hash="",Ne(g.href)}else t?t({data:f,form:i,error:null,response:l}):console.error(await l.text())}catch(l){if(t&&l instanceof Error)t({data:f,form:i,error:l,response:null});else throw l}};return i.addEventListener("submit",v),{destroy:()=>{i.removeEventListener("submit",v)}}};function se(i,e,t){const a=i.slice();return a[3]=e[t],a[4]=e,a[5]=t,a}function re(i,e){let t,a,c,v,p,s,h,f,l,g,k,x,_,T,P,r,o,u,A,C,S,O,D,L,Q,F,H,V,W,R,X,Y=Me,M,Z,ee;function te(...w){return e[1](e[3],e[4],e[5],...w)}function ae(){return e[2](e[3],e[4],e[5])}return{key:i,first:null,c(){t=b("div"),a=b("form"),c=b("input"),p=U(),s=b("input"),f=U(),l=b("button"),x=U(),_=b("form"),T=b("input"),r=U(),o=b("input"),A=U(),C=b("button"),S=U(),O=b("form"),D=b("input"),Q=U(),F=b("button"),W=U(),this.h()},l(w){t=y(w,"DIV",{class:!0});var m=I(t);a=y(m,"FORM",{action:!0,method:!0});var $=I(a);c=y($,"INPUT",{type:!0,name:!0,class:!0}),p=N($),s=y($,"INPUT",{type:!0,name:!0,class:!0}),f=N($),l=y($,"BUTTON",{class:!0,"aria-label":!0}),I(l).forEach(E),$.forEach(E),x=N(m),_=y(m,"FORM",{class:!0,action:!0,method:!0});var B=I(_);T=y(B,"INPUT",{type:!0,name:!0,class:!0}),r=N(B),o=y(B,"INPUT",{"aria-label":!0,type:!0,name:!0,class:!0}),A=N(B),C=y(B,"BUTTON",{class:!0,"aria-label":!0}),I(C).forEach(E),B.forEach(E),S=N(m),O=y(m,"FORM",{action:!0,method:!0});var j=I(O);D=y(j,"INPUT",{type:!0,name:!0,class:!0}),Q=N(j),F=y(j,"BUTTON",{class:!0,"aria-label":!0}),I(F).forEach(E),j.forEach(E),W=N(m),m.forEach(E),this.h()},h(){n(c,"type","hidden"),n(c,"name","uid"),c.value=v=e[3].uid,n(c,"class","svelte-1y2b4ex"),n(s,"type","hidden"),n(s,"name","done"),s.value=h=e[3].done?"":"true",n(s,"class","svelte-1y2b4ex"),n(l,"class","toggle svelte-1y2b4ex"),n(l,"aria-label",g="Mark todo as "+(e[3].done?"not done":"done")),n(a,"action","/todos?_method=PATCH"),n(a,"method","post"),n(T,"type","hidden"),n(T,"name","uid"),T.value=P=e[3].uid,n(T,"class","svelte-1y2b4ex"),n(o,"aria-label","Edit todo"),n(o,"type","text"),n(o,"name","text"),o.value=u=e[3].text,n(o,"class","svelte-1y2b4ex"),n(C,"class","save svelte-1y2b4ex"),n(C,"aria-label","Save todo"),n(_,"class","text svelte-1y2b4ex"),n(_,"action","/todos?_method=PATCH"),n(_,"method","post"),n(D,"type","hidden"),n(D,"name","uid"),D.value=L=e[3].uid,n(D,"class","svelte-1y2b4ex"),n(F,"class","delete svelte-1y2b4ex"),n(F,"aria-label","Delete todo"),F.disabled=H=e[3].pending_delete,n(O,"action","/todos?_method=DELETE"),n(O,"method","post"),n(t,"class","todo svelte-1y2b4ex"),ne(t,"done",e[3].done),this.first=t},m(w,m){G(w,t,m),d(t,a),d(a,c),d(a,p),d(a,s),d(a,f),d(a,l),d(t,x),d(t,_),d(_,T),d(_,r),d(_,o),d(_,A),d(_,C),d(t,S),d(t,O),d(O,D),d(O,Q),d(O,F),d(t,W),M=!0,Z||(ee=[J(k=K.call(null,a,{pending:te})),J(K.call(null,_)),J(V=K.call(null,O,{pending:ae}))],Z=!0)},p(w,m){e=w,(!M||m&1&&v!==(v=e[3].uid))&&(c.value=v),(!M||m&1&&h!==(h=e[3].done?"":"true"))&&(s.value=h),(!M||m&1&&g!==(g="Mark todo as "+(e[3].done?"not done":"done")))&&n(l,"aria-label",g),k&&z(k.update)&&m&1&&k.update.call(null,{pending:te}),(!M||m&1&&P!==(P=e[3].uid))&&(T.value=P),(!M||m&1&&u!==(u=e[3].text)&&o.value!==u)&&(o.value=u),(!M||m&1&&L!==(L=e[3].uid))&&(D.value=L),(!M||m&1&&H!==(H=e[3].pending_delete))&&(F.disabled=H),V&&z(V.update)&&m&1&&V.update.call(null,{pending:ae}),m&1&&ne(t,"done",e[3].done)},r(){X=t.getBoundingClientRect()},f(){he(t),Y(),fe(t,X)},a(){Y(),Y=_e(t,X,Ue,{duration:200})},i(w){M||(w&&pe(()=>{R||(R=le(t,oe,{start:.7},!0)),R.run(1)}),M=!0)},o(w){w&&(R||(R=le(t,oe,{start:.7},!1)),R.run(0)),M=!1},d(w){w&&E(t),w&&R&&R.end(),Z=!1,me(ee)}}}function Oe(i){let e,t,a,c,v,p,s,h,f,l=[],g=new Map,k,x,_,T=i[0];const P=r=>r[3].uid;for(let r=0;r<T.length;r+=1){let o=se(i,T,r),u=P(o);g.set(u,l[r]=re(u,o))}return{c(){e=b("meta"),t=U(),a=b("div"),c=b("h1"),v=ve("Todos"),p=U(),s=b("form"),h=b("input"),f=U();for(let r=0;r<l.length;r+=1)l[r].c();this.h()},l(r){const o=be('[data-svelte="svelte-w9bi4y"]',document.head);e=y(o,"META",{name:!0,content:!0}),o.forEach(E),t=N(r),a=y(r,"DIV",{class:!0});var u=I(a);c=y(u,"H1",{});var A=I(c);v=ye(A,"Todos"),A.forEach(E),p=N(u),s=y(u,"FORM",{class:!0,action:!0,method:!0});var C=I(s);h=y(C,"INPUT",{name:!0,"aria-label":!0,placeholder:!0,class:!0}),C.forEach(E),f=N(u);for(let S=0;S<l.length;S+=1)l[S].l(u);u.forEach(E),this.h()},h(){document.title="Todos",n(e,"name","description"),n(e,"content","A todo list app"),n(h,"name","text"),n(h,"aria-label","Add todo"),n(h,"placeholder","+ tap to add a todo"),n(h,"class","svelte-1y2b4ex"),n(s,"class","new svelte-1y2b4ex"),n(s,"action","/todos"),n(s,"method","post"),n(a,"class","todos svelte-1y2b4ex")},m(r,o){d(document.head,e),G(r,t,o),G(r,a,o),d(a,c),d(c,v),d(a,p),d(a,s),d(s,h),d(a,f);for(let u=0;u<l.length;u+=1)l[u].m(a,null);k=!0,x||(_=J(K.call(null,s,{result:Ie})),x=!0)},p(r,[o]){if(o&1){T=r[0],we();for(let u=0;u<l.length;u+=1)l[u].r();l=ge(l,o,P,1,r,T,g,a,xe,re,null,se);for(let u=0;u<l.length;u+=1)l[u].a();Te()}},i(r){if(!k){for(let o=0;o<T.length;o+=1)Ee(l[o]);k=!0}},o(r){for(let o=0;o<l.length;o+=1)ke(l[o]);k=!1},d(r){E(e),r&&E(t),r&&E(a);for(let o=0;o<l.length;o+=1)l[o].d();x=!1,_()}}}const Ie=async({form:i})=>{i.reset()};function Pe(i,e,t){let{todos:a}=e;const c=(p,s,h,{data:f})=>{t(0,s[h].done=!!f.get("done"),a)},v=(p,s,h)=>t(0,s[h].pending_delete=!0,a);return i.$$set=p=>{"todos"in p&&t(0,a=p.todos)},[a,c,v]}class Fe extends ue{constructor(e){super(),de(this,e,Pe,Oe,ce,{todos:0})}}export{Fe as default};
