import{r as _,o as H,F as le,G as ce,i as V,v as g,x as m,y as l,H as P,I as E,A as v,J as S,K as de,D as J,E as Q,h as ee,L as qe,j as F,p as ze,M as X,N as ue,O as te,m as Ce,q as he,c as C,d as q,t as Pe,g as Ee,P as Ae,Q as Z,R as pe,S as Be,z as I,T as We,U as Ne,V as N,W as He,X as De,Y as fe,B as ge,Z as Re,_ as Fe}from"./entry.08f09db5.js";import{_ as D}from"./_plugin-vue_export-helper.c27b6911.js";const Ve=e=>(J("data-v-34c26055"),e=e(),Q(),e),Oe={class:"max-w-[650px] mx-auto flex items-center gap-5 p-3"},Ue=["href","aria-label","title"],Ge=Ve(()=>l("li",{class:"ml-auto"},[l("a",{href:"/resume.pdf",class:"text-sm border border-white/50 flex items-center gap-1 rounded-3xl px-4 py-1 hover:border-white hover:bg-white/10 active:bg-white/20"}," My resume ")],-1)),Je={__name:"TopBar",setup(e){const t=_([{title:"Github",icon:"github",href:"https://github.com/sunwize"},{title:"LinkedIn",icon:"linkedin",href:"https://www.linkedin.com/in/colin-clisson-6b675b142"},{title:"Email",icon:"at",href:"mailto:colinclissonhg@gmail.com"}]),n=_("");return H(()=>{const{y:s}=le(_(document.querySelector("main")));ce(s,o=>{n.value=o>200?"bg-background":""})}),(s,o)=>{const i=V("mdicon");return g(),m("nav",{class:de(["fixed z-10 top-0 left-0 w-full",S(n)])},[l("ul",Oe,[(g(!0),m(P,null,E(S(t),(r,c)=>(g(),m("li",{key:c,class:"opacity-50 hover:opacity-100 cursor-pointer"},[l("a",{href:r.href,target:"_blank",rel:"noreferrer","aria-label":r.icon,title:r.title},[v(i,{name:r.icon},null,8,["name"])],8,Ue)]))),128)),Ge])],2)}}},Qe=D(Je,[["__scopeId","data-v-34c26055"]]);async function Ze(e,t){return await Ye(t).catch(s=>(console.error("Failed to get image meta for "+t,s+""),{width:0,height:0,ratio:0}))}async function Ye(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,n)=>{const s=new Image;s.onload=()=>{const o={width:s.width,height:s.height,ratio:s.width/s.height};t(o)},s.onerror=o=>n(o),s.src=e})}function se(e){return t=>t?e[t]||t:e.missingValue}function me({formatter:e,keyMap:t,joinWith:n="/",valueMap:s}={}){e||(e=(i,r)=>`${i}=${r}`),t&&typeof t!="function"&&(t=se(t));const o=s||{};return Object.keys(o).forEach(i=>{typeof o[i]!="function"&&(o[i]=se(o[i]))}),(i={})=>Object.entries(i).filter(([c,f])=>typeof f<"u").map(([c,f])=>{const a=o[c];return typeof a=="function"&&(f=a(i[c])),c=typeof t=="function"?t(c):c,e(c,f)}).join(n)}function L(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return parseInt(e,10)}function Xe(e=""){if(e===void 0||!e.length)return[];const t=new Set;for(const n of e.split(" ")){const s=parseInt(n.replace("x",""));s&&t.add(s)}return Array.from(t)}function Ke(e){if(e.length===0)throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")}function et(e){const t={};if(typeof e=="string")for(const n of e.split(/[\s,]+/).filter(s=>s)){const s=n.split(":");s.length!==2?t["1px"]=s[0].trim():t[s[0].trim()]=s[1].trim()}else Object.assign(t,e);return t}function tt(e){const t={options:e},n=(o,i={})=>ve(t,o,i),s=(o,i={},r={})=>n(o,{...r,modifiers:X(i,r.modifiers||{})}).url;for(const o in e.presets)s[o]=(i,r,c)=>s(i,r,{...e.presets[o],...c});return s.options=e,s.getImage=n,s.getMeta=(o,i)=>st(t,o,i),s.getSizes=(o,i)=>ot(t,o,i),t.$img=s,s}async function st(e,t,n){const s=ve(e,t,{...n});return typeof s.getMeta=="function"?await s.getMeta():await Ze(e,s.url)}function ve(e,t,n){var a,d;if(typeof t!="string"||t==="")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(t.startsWith("data:"))return{url:t};const{provider:s,defaults:o}=it(e,n.provider||e.options.provider),i=nt(e,n.preset);if(t=ee(t)?t:qe(t),!s.supportsAlias)for(const y in e.options.alias)t.startsWith(y)&&(t=F(e.options.alias[y],t.substr(y.length)));if(s.validateDomains&&ee(t)){const y=ze(t).host;if(!e.options.domains.find(k=>k===y))return{url:t}}const r=X(n,i,o);r.modifiers={...r.modifiers};const c=r.modifiers.format;(a=r.modifiers)!=null&&a.width&&(r.modifiers.width=L(r.modifiers.width)),(d=r.modifiers)!=null&&d.height&&(r.modifiers.height=L(r.modifiers.height));const f=s.getImage(t,r,e);return f.format=f.format||c||"",f}function it(e,t){const n=e.options.providers[t];if(!n)throw new Error("Unknown provider: "+t);return n}function nt(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function ot(e,t,n){var b,w,z,U,G;const s=L((b=n.modifiers)==null?void 0:b.width),o=L((w=n.modifiers)==null?void 0:w.height),i=et(n.sizes),r=(z=n.densities)!=null&&z.trim()?Xe(n.densities.trim()):e.options.densities;Ke(r);const c=s&&o?o/s:0,f=[],a=[];if(Object.keys(i).length>=1){for(const j in i){const T=ie(j,String(i[j]),o,c,e);if(T!==void 0){f.push({size:T.size,screenMaxWidth:T.screenMaxWidth,media:`(max-width: ${T.screenMaxWidth}px)`});for(const A of r)a.push({width:T._cWidth*A,src:ne(e,t,n,T,A)})}}at(f)}else for(const j of r){const T=Object.keys(i)[0];let A=ie(T,String(i[T]),o,c,e);A===void 0&&(A={size:"",screenMaxWidth:0,_cWidth:(U=n.modifiers)==null?void 0:U.width,_cHeight:(G=n.modifiers)==null?void 0:G.height}),a.push({width:j,src:ne(e,t,n,A,j)})}rt(a);const d=a[a.length-1],y=f.length?f.map(j=>`${j.media?j.media+" ":""}${j.size}`).join(", "):void 0,k=y?"w":"x",p=a.map(j=>`${j.src} ${j.width}${k}`).join(", ");return{sizes:y,srcset:p,src:d==null?void 0:d.src}}function ie(e,t,n,s,o){const i=o.options.screens&&o.options.screens[e]||parseInt(e),r=t.endsWith("vw");if(!r&&/^\d+$/.test(t)&&(t=t+"px"),!r&&!t.endsWith("px"))return;let c=parseInt(t);if(!i||!c)return;r&&(c=Math.round(c/100*i));const f=s?Math.round(c*s):n;return{size:t,screenMaxWidth:i,_cWidth:c,_cHeight:f}}function ne(e,t,n,s,o){return e.$img(t,{...n.modifiers,width:s._cWidth?s._cWidth*o:void 0,height:s._cHeight?s._cHeight*o:void 0},n)}function at(e){var n;e.sort((s,o)=>s.screenMaxWidth-o.screenMaxWidth);let t=null;for(let s=e.length-1;s>=0;s--){const o=e[s];o.media===t&&e.splice(s,1),t=o.media}for(let s=0;s<e.length;s++)e[s].media=((n=e[s+1])==null?void 0:n.media)||""}function rt(e){e.sort((n,s)=>n.width-s.width);let t=null;for(let n=e.length-1;n>=0;n--){const s=e[n];s.width===t&&e.splice(n,1),t=s.width}}const oe=e=>e.startsWith("#")?e.replace("#","rgb_"):e,lt=e=>e.replace(/\.[^/.]+$/,""),ct=me({keyMap:{fit:"c",width:"w",height:"h",format:"f",quality:"q",background:"b",rotate:"a",roundCorner:"r",gravity:"g",effect:"e",color:"co",flags:"fl",dpr:"dpr",opacity:"o",overlay:"l",underlay:"u",transformation:"t",zoom:"z",colorSpace:"cs",customFunc:"fn",density:"dn",aspectRatio:"ar",blur:"e_blur"},valueMap:{fit:{fill:"fill",inside:"pad",outside:"lpad",cover:"fit",contain:"scale",minCover:"mfit",minInside:"mpad",thumbnail:"thumb",cropping:"crop",coverLimit:"limit"},format:{jpeg:"jpg"},background(e){return oe(e)},color(e){return oe(e)},gravity:{auto:"auto",subject:"auto:subject",face:"face",sink:"sink",faceCenter:"face:center",multipleFaces:"faces",multipleFacesCenter:"faces:center",north:"north",northEast:"north_east",northWest:"north_west",west:"west",southWest:"south_west",south:"south",southEast:"south_east",east:"east",center:"center"}},joinWith:",",formatter:(e,t)=>e.includes("_")?`${e}:${t}`:`${e}_${t}`}),dt={format:"auto",quality:"auto"},ut=(e,{modifiers:t={},baseURL:n="/"}={})=>{const s=X(t,dt),o=ct(s),i=n.match(/\/image\/upload\/(.*)/);if((i==null?void 0:i.length)>=1){const r=i[1],c=n.replace(r,"");return{url:F(c,o,r,e)}}else/\/image\/fetch\/?/.test(n)?e=ue(e):e=lt(e);return{url:F(n,o,e)}},ht=Object.freeze(Object.defineProperty({__proto__:null,getImage:ut},Symbol.toStringTag,{value:"Module"})),pt=me({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(e,t)=>te(e)+"_"+te(t)}),ft=(e,{modifiers:t={},baseURL:n}={},s)=>{t.width&&t.height&&(t.resize=`${t.width}x${t.height}`,delete t.width,delete t.height);const o=pt(t)||"_";return n||(n=F(s.options.nuxt.baseURL,"/_ipx")),{url:F(n,o,ue(e))}},gt=!0,mt=!0,vt=Object.freeze(Object.defineProperty({__proto__:null,getImage:ft,supportsAlias:mt,validateDomains:gt},Symbol.toStringTag,{value:"Module"})),ye={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"ipxStatic",domains:[],alias:{},densities:[1,2],format:["webp"]};ye.providers={cloudinary:{provider:ht,defaults:{baseURL:"https://res.cloudinary.com/dh0ymuppr/image/upload/v1672608952/portfolio"}},ipxStatic:{provider:vt,defaults:{}}};const _e=()=>{const e=Ce(),t=he();return t.$img||t._img||(t._img=tt({...ye,nuxt:{baseURL:e.app.baseURL}}))},yt={src:{type:String,required:!0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},densities:{type:String,default:void 0},preload:{type:Boolean,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0,validator:e=>["lazy","eager"].includes(e)},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)},nonce:{type:[String],default:void 0}},_t=e=>{const t=C(()=>({provider:e.provider,preset:e.preset})),n=C(()=>({width:L(e.width),height:L(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding,nonce:e.nonce})),s=_e(),o=C(()=>({...e.modifiers,width:L(e.width),height:L(e.height),format:e.format,quality:e.quality||s.options.quality,background:e.background,fit:e.fit}));return{options:t,attrs:n,modifiers:o}},xt={...yt,placeholder:{type:[Boolean,String,Number,Array],default:void 0}},O=q({name:"NuxtImg",props:xt,emits:["load","error"],setup:(e,t)=>{const n=_e(),s=_t(e),o=_(!1),i=C(()=>n.getSizes(e.src,{...s.options.value,sizes:e.sizes,densities:e.densities,modifiers:{...s.modifiers.value,width:L(e.width),height:L(e.height)}})),r=C(()=>{const p={...s.attrs.value,"data-nuxt-img":""};return(!e.placeholder||o.value)&&(p.sizes=i.value.sizes,p.srcset=i.value.srcset),p}),c=C(()=>{let p=e.placeholder;if(p===""&&(p=!0),!p||o.value)return!1;if(typeof p=="string")return p;const b=Array.isArray(p)?p:typeof p=="number"?[p,p]:[10,10];return n(e.src,{...s.modifiers.value,width:b[0],height:b[1],quality:b[2]||50,blur:b[3]||3},s.options.value)}),f=C(()=>e.sizes?i.value.src:n(e.src,s.modifiers.value,s.options.value)),a=C(()=>c.value?c.value:f.value);if(e.preload){const p=Object.values(i.value).every(b=>b);Pe({link:[{rel:"preload",as:"image",nonce:e.nonce,...p?{href:i.value.src,imagesizes:i.value.sizes,imagesrcset:i.value.srcset}:{href:a.value}}]})}const d=_(),k=he().isHydrating;return H(()=>{if(c.value){const p=new Image;p.src=f.value,e.sizes&&(p.sizes=i.value.sizes||"",p.srcset=i.value.srcset),p.onload=b=>{o.value=!0,t.emit("load",b)};return}d.value&&(d.value.complete&&k&&(d.value.getAttribute("data-error")?t.emit("error",new Event("error")):t.emit("load",new Event("load"))),d.value.onload=p=>{t.emit("load",p)},d.value.onerror=p=>{t.emit("error",p)})}),()=>Ee("img",{ref:d,src:a.value,...r.value,...t.attrs})}}),wt=q({__name:"BackgroundCanvas",setup(e){const t=_(),n=_(!1);H(()=>{setTimeout(async()=>{n.value=!0,await Ae(),s()},200)});function s(){function o(h,u,x,$){const M=h+x*Math.cos($),W=u+x*Math.sin($);return{x:M,y:W}}function i(h,u){return h+Math.random()*(u-h)}function r(h){return h/180*Math.PI}const c={x:0,y:0,vx:0,vy:0,radius:0,create:function(h,u,x,$){const M=Object.create(this);return M.x=h,M.y=u,M.vx=Math.cos($)*x,M.vy=Math.sin($)*x,M},getSpeed:function(){return Math.sqrt(this.vx*this.vx+this.vy*this.vy)},setSpeed:function(h){const u=this.getHeading();this.vx=Math.cos(u)*h,this.vy=Math.sin(u)*h},getHeading:function(){return Math.atan2(this.vy,this.vx)},setHeading:function(h){const u=this.getSpeed();this.vx=Math.cos(h)*u,this.vy=Math.sin(h)*u},update:function(){this.x+=this.vx,this.y+=this.vy}},f=t.value,a=f.getContext("2d"),d=f.width=window.innerWidth,y=f.height=window.innerHeight,k=[],p=[{speed:.015,scale:.2,count:320},{speed:.03,scale:.5,count:50},{speed:.05,scale:.75,count:30}],b=145,w={min:15,max:20},z=.01,U=.01,G=2e3,j=500,T=300,A=2,$e=3;let R=[],Y=!1;for(let h=0;h<p.length;h+=1){const u=p[h];for(let x=0;x<u.count;x+=1){const $=c.create(i(0,d),i(0,y),0,0);$.radius=A*u.scale,$.setSpeed(u.speed),$.setHeading(r(b)),k.push($)}}function Ie(){if(Y)return;const h=c.create(i(d/2,d),i(0,y/2),0,0);h.setSpeed(i(w.min,w.max)),h.setHeading(r(b)),h.radius=$e,h.opacity=0,h.trailLengthDelta=0,h.isSpawning=!0,h.isDying=!1,R.push(h)}function Te(h){setTimeout(function(){h.isDying=!0},j)}function K(){a.clearRect(0,0,d,y),a.fillStyle="#0d1117",a.fillRect(0,0,d,y),a.fill();for(let h=0;h<k.length;h+=1){const u=k[h];u.update(),Me(u),u.x>d&&(u.x=0),u.x<0&&(u.x=d),u.y>y&&(u.y=0),u.y<0&&(u.y=y)}for(let h=0;h<R.length;h+=1){const u=R[h];u.isSpawning&&(u.opacity+=z,u.opacity>=1&&(u.isSpawning=!1,Te(u))),u.isDying&&(u.opacity-=z,u.opacity<=0&&(u.isDying=!1,u.isDead=!0)),u.trailLengthDelta+=U,u.update(),u.opacity>0&&Le(u)}R=R.filter(h=>!h.isDead),requestAnimationFrame(K)}function Me(h){a.fillStyle="rgb(255, 221, 157)",a.beginPath(),a.arc(h.x,h.y,h.radius,0,Math.PI*2,!1),a.fill()}function Le(h){const u=h.x,x=h.y,$=T*h.trailLengthDelta,M=o(u,x,-$,h.getHeading());a.fillStyle="rgba(255, 255, 255, "+h.opacity+")";const W=5;a.beginPath(),a.moveTo(u-1,x+1),a.lineTo(u,x+W),a.lineTo(u+1,x+1),a.lineTo(u+W,x),a.lineTo(u+1,x-1),a.lineTo(u,x+1),a.lineTo(u,x-W),a.lineTo(u-1,x-1),a.lineTo(u-W,x),a.lineTo(u-1,x+1),a.lineTo(u-W,x),a.closePath(),a.fill(),a.fillStyle="rgba(255, 221, 157, "+h.opacity+")",a.beginPath(),a.moveTo(u-1,x-1),a.lineTo(M.x,M.y),a.lineTo(u+1,x+1),a.closePath(),a.fill()}K(),setInterval(()=>{Ie()},G),window.addEventListener("focus",()=>Y=!1),window.addEventListener("blur",()=>Y=!0)}return(o,i)=>S(n)?(g(),m("canvas",{key:0,ref_key:"el",ref:t},null,512)):Z("",!0)}});const bt=D(wt,[["__scopeId","data-v-b55074e6"]]),kt=(e,t={})=>{const n=t.delayBetweenLetters??50,s=t.delayBetweenSentences??1500,o=_(!1),i=_(0),r=_(0),c=[];function f(){Array.from(e.value.children).forEach(y=>{c.push(y.textContent??"")}),e.value.innerHTML="",o.value=!0}function a(){r.value<=c[i.value].length?(e.value.innerHTML=c[i.value].slice(0,r.value)+"<span aria-hidden='true' class='caret'></span>",r.value++,setTimeout(a,n)):setTimeout(d,s)}function d(){var y;r.value>0?(e.value.innerHTML=((y=e.value.textContent)==null?void 0:y.slice(0,r.value-1))+"<span aria-hidden='true' class='caret'></span>",r.value--,setTimeout(d,n)):(i.value=(i.value+1)%c.length,a())}return H(()=>{f(),a()}),{loaded:o}},B=e=>(J("data-v-02afac7e"),e=e(),Q(),e),St={class:"h-screen relative flex items-center justify-center overflow-x-hidden"},jt=B(()=>l("div",{class:"small-circle border-2 border-gray-700 rounded-full"},null,-1)),$t=B(()=>l("div",{class:"big-circle border-2 border-gray-700 rounded-full"},null,-1)),It={class:"z-[1] w-full text-center"},Tt={class:"w-[100px] sm:w-[150px] mx-auto avatar mb-4"},Mt=B(()=>l("h1",{class:"uppercase tracking-[5px] opacity-70 text-xs mb-2"}," Software Engineer ",-1)),Lt={class:"font-bold text-2xl sm:text-3xl mb-5"},qt=B(()=>l("span",null,"Code is poetry ✨",-1)),zt=B(()=>l("span",null,"Code smarter, not harder 🧠",-1)),Ct=B(()=>l("span",null,"AI is the future 🤖",-1)),Pt=B(()=>l("span",null,"Coffee is my fuel ☕",-1)),Et=[qt,zt,Ct,Pt],At=B(()=>l("span",null," ",-1)),Bt={class:"flex items-center justify-center gap-5 text-xs uppercase tracking-wide"},Wt=["href"],Nt=q({__name:"Hero",setup(e){const t=_(),n=_([{name:"Projects",id:"#projects"},{name:"Experience",id:"#experience"},{name:"Skills",id:"#skills"},{name:"About",id:"#about"}]),{loaded:s}=kt(t);return(o,i)=>{const r=O;return g(),m("section",St,[v(bt,{class:"absolute top-0 left-0 w-full h-full"}),jt,$t,l("article",It,[l("figure",Tt,[v(r,{provider:"cloudinary",src:"/avatar.jpg",alt:"Colin Clisson",quality:"100",class:"rounded-full",draggable:!1,width:"150",height:"150"})]),Mt,l("p",Lt,[pe(l("span",{ref_key:"typing",ref:t},Et,512),[[Be,S(s)]]),At]),l("ul",Bt,[(g(!0),m(P,null,E(S(n),(c,f)=>(g(),m("li",{key:f,class:"cursor-pointer opacity-70 hover:underline hover:opacity-100"},[l("a",{href:c.id},I(c.name),9,Wt)]))),128))])])])}}});const Ht=D(Nt,[["__scopeId","data-v-02afac7e"]]),xe=e=>{const t=_(0),n=_(!1),s=_(!1);let o=0;const i=()=>{if(!e.value)return;const a=e.value.clientWidth-parseInt(getComputedStyle(e.value).paddingLeft);n.value=e.value.scrollLeft<a,s.value=e.value.scrollLeft>0},r=a=>{const d=a.target,y=d.clientWidth-parseInt(getComputedStyle(d).paddingLeft);o=Math.floor(d.scrollLeft/y)},c=()=>{t.value=o,i()},f=a=>{if(!e.value)return;const d=e.value.clientWidth-parseInt(getComputedStyle(e.value).paddingLeft);e.value.scrollLeft=a*d};return H(()=>{var a,d;(a=e.value)==null||a.addEventListener("scroll",r),(d=e.value)==null||d.addEventListener("scrollend",c),i()}),We(()=>{var a,d;(a=e.value)==null||a.removeEventListener("scroll",r),(d=e.value)==null||d.removeEventListener("scrollend",c)}),{index:t,canScrollLeft:s,canScrollRight:n,scrollToIndex:f}},Dt=[{title:"Flex",description:`
      My very own portable Netflix sanctuary, where I can indulge in my top-tier movie favorites no matter where I roam!
      It's like having a cinema-on-the-go, just a tad more exclusive.
    `,image:"/projects/flex_2.png",website:"https://flex-svelte.vercel.app",github:"https://github.com/sunwize/flex-svelte",stack:["sveltejs","typescript","mongodb"]},{title:"Mood music",description:`
      Say farewell to the frustration of the music suddenly coming to a halt!
      Now, let the tunes serenade you endlessly, adapting to your ever-changing musical whims.
      Your playlist, your rules, and the party never has to end!
    `,image:"/projects/mood_music.png",website:"https://mood-music-six.vercel.app",github:"https://github.com/sunwize/mood-music",stack:["sveltejs","typescript"]},{title:"Movie swipe",description:`
      If you ever find yourself in a cinematic standoff with your significant other, just play the swipe game with movies until you both hit the jackpot!
      Movie night just got a whole lot more entertaining.
    `,image:"/projects/movie_swipe.png",website:"https://movie-swipe.vercel.app",github:"https://github.com/sunwize/movie-swipe",stack:["reactjs","typescript","supabase"]}],we=[{key:"nodejs",image:"/stack/nodejs.png",title:"Node.js"},{key:"vuejs",image:"/stack/vuejs.png",title:"Vue.js"},{key:"nuxtjs",image:"/stack/nuxtjs.png",title:"Nuxt.js"},{key:"sveltejs",image:"/stack/sveltejs.png",title:"Svelte.js"},{key:"reactjs",image:"/stack/reactjs.png",title:"React.js"},{key:"javascript",image:"/stack/javascript.png",title:"Javascript"},{key:"typescript",image:"/stack/typescript.png",title:"Typescript"},{key:"postgresql",image:"/stack/postgresql.png",title:"PostgreSQL"},{key:"graphql",image:"/stack/graphql.png",title:"GraphQL"},{key:"mongodb",image:"/stack/mongodb.png",title:"MongoDB"},{key:"capacitor",image:"/stack/capacitor.png",title:"Capacitor"},{key:"strapi",image:"/stack/strapi.png",title:"Strapi"},{key:"supabase",image:"/stack/supabase.png",title:"Supabase"}],Rt={},Ft={class:"rounded-lg border border-white/10 bg-[#151b22] shadow-3xl p-3 sm:p-5 md:p-8"};function Vt(e,t){return g(),m("article",Ft,[Ne(e.$slots,"default")])}const be=D(Rt,[["render",Vt]]),Ot={class:"relative"},Ut={class:"fixed top-3 right-5 opacity-50 hover:opacity-100"},ke=q({__name:"ZoomImage",props:{src:{type:String,required:!0},alt:{type:String,required:!0},provider:{type:String,default:"cloudinary"},width:{type:[String,Number],default:"auto"},height:{type:[String,Number],default:"auto"},fit:{type:String,default:"inside"},quality:{type:[String,Number],default:100}},setup(e){const t=_(!1);return(n,s)=>{const o=O,i=V("mdicon");return g(),m("div",Ot,[v(o,{src:e.src,alt:e.alt,provider:e.provider,width:e.width,height:e.height,fit:e.fit,quality:e.quality,draggable:!1,class:"w-full"},null,8,["src","alt","provider","width","height","fit","quality"]),l("button",{class:"absolute top-0 left-0 w-full h-full bg-black/50 opacity-0 hover:opacity-100 flex items-center justify-center cursor-pointer",onClick:s[0]||(s[0]=N(r=>t.value=!0,["stop"]))},[v(i,{name:"magnify-plus-outline",width:"50",height:"50"})]),(g(),He(De,{to:"body"},[S(t)?(g(),m("button",{key:0,class:"fixed z-20 top-0 left-0 w-full h-full bg-black/80 flex justify-center cursor-pointer overflow-y-auto",onClick:s[2]||(s[2]=N(r=>t.value=!1,["stop"]))},[v(o,{src:e.src,alt:e.alt,provider:e.provider,width:"1000",fit:e.fit,quality:e.quality,preload:"",class:"cursor-default my-auto",onClick:s[1]||(s[1]=N(()=>{},["stop"]))},null,8,["src","alt","provider","fit","quality"]),l("button",Ut,[v(i,{name:"close",width:"35",height:"35"})])])):Z("",!0)]))])}}}),Gt={class:"flex items-center justify-center gap-4"},Jt=["onClick"],Se=q({__name:"Pagination",props:{modelValue:{type:Number,required:!0},max:{type:Number,required:!0}},emits:["update:modelValue"],setup(e,{emit:t}){const n=t;return(s,o)=>(g(),m("ul",Gt,[(g(!0),m(P,null,E(e.max,i=>(g(),m("li",{key:i},[l("button",{class:de(["w-3 h-3 bg-white/25 rounded-full",{"!bg-white":i===e.modelValue+1}]),onClick:N(r=>n("update:modelValue",i-1),["stop"])},null,10,Jt)]))),128))]))}}),je=e=>(J("data-v-34e0037f"),e=e(),Q(),e),Qt={id:"projects",class:"relative h-screen flex flex-col pt-16"},Zt=je(()=>l("div",{class:"w-full absolute top-[25%] bg-gray-700/20 left-0 h-[60%] -skew-y-[6deg]"},null,-1)),Yt=je(()=>l("h2",{class:"z-[1] text-center uppercase opacity-50 tracking-[10px] mb-4 md:mb-16"}," Projects ",-1)),Xt={class:"flex flex-col h-full pt-3 sm:pt-5 md:pt-8 overflow-hidden mb-3"},Kt={class:"text-3xl font-bold mb-3"},es={class:"opacity-70 flex-1 overflow-y-auto"},ts={class:"flex items-center justify-between shrink-0 gap-3 mt-auto"},ss={class:"flex items-center gap-3"},is={class:"flex items-center gap-3"},ns=["href"],os=["href"],as=q({__name:"Projects",setup(e){const t=_(Dt),n=_(),{index:s,scrollToIndex:o}=xe(n),i=r=>we.find(c=>c.key===r);return(r,c)=>{const f=O,a=V("mdicon");return g(),m("section",Qt,[Zt,Yt,v(Se,{modelValue:S(s),"onUpdate:modelValue":[c[0]||(c[0]=d=>fe(s)?s.value=d:null),S(o)],max:S(t).length,class:"mb-2 md:mb-4"},null,8,["modelValue","max","onUpdate:modelValue"]),l("ul",{ref_key:"projectScroll",ref:n,class:"z-[1] scrollbar-hidden w-full overflow-x-auto scroll-smooth flex flex-nowrap gap-10 snap-x snap-mandatory flex-1 pb-1 px-1 md:px-10 md:pb-16"},[(g(!0),m(P,null,E(S(t),(d,y)=>(g(),m("li",{key:y,class:"min-w-full h-full snap-center snap-always flex justify-center"},[v(be,{class:"flex flex-col h-full flex-1 w-full max-w-[650px]"},{default:ge(()=>[v(ke,{alt:d.title,src:d.image,fit:"cover",class:"shrink-0 rounded-lg overflow-hidden"},null,8,["alt","src"]),l("main",Xt,[l("h3",Kt,I(d.title),1),l("p",es,I(d.description),1)]),l("footer",ts,[l("ul",ss,[(g(!0),m(P,null,E(d.stack,(k,p)=>(g(),m("li",{key:p},[v(f,{provider:"cloudinary",src:i(k).image,alt:i(k).title,title:i(k).title,fit:"inside",width:"30",height:"30"},null,8,["src","alt","title"])]))),128))]),l("ul",is,[l("li",null,[l("a",{href:d.github,target:"_blank",class:"opacity-50 hover:opacity-100"},[v(a,{name:"github",width:"30",height:"30"})],8,ns)]),l("li",null,[l("a",{href:d.website,target:"_blank",class:"opacity-50 hover:opacity-100"},[v(a,{name:"earth",width:"30",height:"30"})],8,os)])])])]),_:2},1024)]))),128))],512)])}}});const rs=D(as,[["__scopeId","data-v-34e0037f"]]),ls=[{image:"/experiences/paper.png",company:"Paper Education",title:"Software Engineer (Full Stack)",projects:[{title:"📚 Review center",description:"A platform that lets students upload and submit essays for reviews, with the assistance of real tutors. The goal is to help students improve their writing skills thanks to valuable tutors feedback. The main challenges were to match suitable tutors to the essays (based on spoken languages, subjects, topics, etc.) and making sure reviews were made in less than 6 hours.",image:"/projects/review_center.png"},{title:"👩‍🏫 Practice center",description:"A set of exercises that students can use to assess their skills on a variety of subjects. We did major updates on the interface to improve user experience based on feedback we got from user interviews/analytics. We also did an on-site event in schools to better understand how our product was being used.",image:"/projects/practice_center.png"},{title:"🌎 Content localization",description:"A database architecture to enable server side content localization. We designed a system that would enable us to offer localized content to hundreds of thousands of students. The main challenges were the scalability of the system, its maintenance and the automation of translating content with the cost that comes with it.",image:"/projects/dashboard.png"},{title:"👩‍🔧 Content management system",description:"A back office tool to let teachers build learning content for students on demand.",image:"/projects/practice_cms.png"},{title:"📐 Math missions",description:"A set of small math problems for students to solve on a daily basis.",image:"/projects/paper_missions.png"}],stack:["vuejs","reactjs","javascript","typescript","postgresql","graphql","strapi"],date_start:"JAN 2022",date_end:"Present"},{image:"/experiences/eyeinmedia.png",company:"Eyein Media",title:"Software Engineer (Full Stack)",projects:[{title:"🦸‍♂️ Food Force",description:"A comprehensive platform mixing a food ordering app (web and mobile), a social platform to share meal ideas, and an order management/reservation systems.",image:"/projects/thefoodforce_2.png"},{title:"🛍️ Confetti",description:"A loyalty program for a shopping mall that lets clients get rewards while purchasing items. Levelling system, lottery, receipt information scan using AI. Both a web and mobile app, delivering loyalty services to thousands of customers.",image:"/projects/confetti_2.png"},{title:"👴 OneGeneration",description:"A web/mobile application facilitating appointment scheduling between isolated individuals in long-term care homes and their families.",image:"/projects/onegeneration.png"}],stack:["vuejs","nuxtjs","javascript","capacitor","postgresql","mongodb"],date_start:"JAN 2020",date_end:"JAN 2022"}],cs={id:"experience",class:"h-screen relative flex flex-col pt-16"},ds=l("h2",{class:"text-center uppercase opacity-50 tracking-[10px] mb-4 md:mb-16"}," Experience ",-1),us={class:"flex justify-between mb-4 sm:mb-0"},hs={class:"text-2xl sm:text-3xl font-light"},ps={class:"text-lg sm:text-xl font-bold"},fs={class:"block sm:hidden font-light opacity-70 uppercase tracking-wide"},gs={class:"flex justify-between"},ms={class:"flex items-center gap-3"},vs=["title"],ys={class:"hidden sm:block font-light opacity-70 uppercase tracking-wide"},_s={class:"flex items-center my-8"},xs=l("hr",{class:"flex-1 opacity-30"},null,-1),ws={class:"flex items-center gap-3 mx-2"},bs=l("p",{class:"text-lg font-bold uppercase tracking-widest opacity-50"}," Projects ",-1),ks=l("hr",{class:"flex-1 opacity-30"},null,-1),Ss={class:"flex-1 overflow-y-auto"},js=["id"],$s={class:"flex-[2]"},Is={class:"text-xl font-bold tracking-wide inline-block bg-white/10 rounded-3xl py-2 px-3 mb-3"},Ts={class:"text-lg"},Ms={key:0},Ls=q({__name:"Experience",setup(e){const t=_(ls),n=_(),{index:s,scrollToIndex:o}=xe(n),i=a=>`experience-projects-${a}`,r=()=>{document.querySelector(`#${i(s.value)}`).scrollBy({left:-200,behavior:"smooth"})},c=()=>{document.querySelector(`#${i(s.value)}`).scrollBy({left:200,behavior:"smooth"})},f=a=>we.find(d=>d.key===a);return(a,d)=>{const y=O,k=V("mdicon");return g(),m("section",cs,[ds,v(Se,{modelValue:S(s),"onUpdate:modelValue":[d[0]||(d[0]=p=>fe(s)?s.value=p:null),S(o)],max:S(t).length,class:"mb-2 md:mb-4"},null,8,["modelValue","max","onUpdate:modelValue"]),l("ul",{ref_key:"experienceScroll",ref:n,class:"scrollbar-hidden scroll-smooth flex flex-nowrap gap-10 w-full flex-1 overflow-x-auto snap-x snap-mandatory pb-1 px-1 md:px-10 md:pb-16"},[(g(!0),m(P,null,E(S(t),(p,b)=>(g(),m("li",{key:b,class:"flex-1 min-w-full h-full snap-center snap-always overflow-visible flex justify-center"},[v(be,{class:"flex flex-col h-full flex-1 w-full max-w-[750px]"},{default:ge(()=>[l("div",us,[l("div",null,[l("h3",hs,I(p.title),1),l("p",ps,I(p.company),1),l("p",fs,I(p.date_start)+" - "+I(p.date_end),1)]),v(y,{src:p.image,alt:p.company,provider:"cloudinary",width:"150",height:"75",quality:"100",fit:"inside",class:"hidden sm:block"},null,8,["src","alt"])]),l("div",gs,[l("ul",ms,[(g(!0),m(P,null,E(p.stack,(w,z)=>(g(),m("li",{key:z,title:f(w).title},[v(y,{provider:"cloudinary",src:f(w).image,alt:f(w).title,title:f(w).title,fit:"inside",width:"25",height:"25"},null,8,["src","alt","title"])],8,vs))),128))]),l("p",ys,I(p.date_start)+" - "+I(p.date_end),1)]),l("div",_s,[xs,l("div",ws,[l("button",{class:"flex items-center justify-center hover:bg-white/10 active:bg-white/30 rounded-full p-1","aria-label":"Previous project",onClick:d[1]||(d[1]=N(w=>r(),["stop"]))},[v(k,{name:"chevron-left",width:"25",height:"25"})]),bs,l("button",{class:"flex items-center justify-center hover:bg-white/10 active:bg-white/30 rounded-full p-1","aria-label":"Next project",onClick:d[2]||(d[2]=N(w=>c(),["stop"]))},[v(k,{name:"chevron-right",width:"25",height:"25"})])]),ks]),l("div",Ss,[l("ul",{id:i(b),class:"z-[1] scrollbar-hidden w-full h-full overflow-x-auto flex flex-nowrap gap-28 snap-x snap-mandatory flex-1"},[(g(!0),m(P,null,E(p.projects,(w,z)=>(g(),m("li",{key:z,class:"flex sm:gap-3 h-full min-w-full snap-center snap-always"},[l("div",$s,[l("h4",Is,I(w.title),1),l("p",Ts,I(w.description),1)]),w.image?(g(),m("div",Ms,[v(ke,{src:w.image,alt:w.title,width:"250",class:"hidden sm:block rounded-2xl overflow-hidden"},null,8,["src","alt"])])):Z("",!0)]))),128))],8,js)])]),_:2},1024)]))),128))],512)])}}}),qs=[{key:"vuejs",image:"/stack/vuejs.png",title:"Vue.js"},{key:"reactjs",image:"/stack/reactjs.png",title:"React.js"},{key:"sveltejs",image:"/stack/sveltejs.png",title:"Svelte.js"},{key:"tailwindcss",image:"/stack/tailwind.png",title:"Tailwind"},{key:"nodejs",image:"/stack/nodejs.png",title:"Node.js"},{key:"mysql",image:"/stack/mysql.png",title:"MySQL"},{key:"postgresql",image:"/stack/postgresql.png",title:"Postgres"},{key:"mongodb",image:"/stack/mongodb.png",title:"MongoDB"},{key:"capacitor",image:"/stack/capacitor.png",title:"Capacitor"},{key:"jest",image:"/stack/jest.png",title:"Jest"},{key:"firebase",image:"/stack/firebase.png",title:"Firebase"},{key:"strapi",image:"/stack/strapi.png",title:"Strapi"}];const zs=e=>(J("data-v-519a9133"),e=e(),Q(),e),Cs={id:"skills",class:"h-screen flex flex-col pt-16"},Ps=zs(()=>l("h2",{class:"text-center uppercase opacity-50 tracking-[10px]"}," Skills ",-1)),Es={class:"max-w-[650px] mx-auto grid grid-cols-3 md:grid-cols-4 justify-items-center gap-5 pt-16 md:pt-28"},As=["delay"],Bs={class:"text-xs opacity-50 tracking-wide"},Ws={__name:"Skills",setup(e){const t=_(qs);return(n,s)=>{const o=O,i=Re("motion");return g(),m("section",Cs,[Ps,l("ul",Es,[(g(!0),m(P,null,E(S(t),(r,c)=>pe((g(),m("li",{key:c,class:"w-[25vw] h-[25vw] md:w-[120px] md:h-[120px] flex flex-col items-center justify-center gap-1 rounded-full border border-gray-700 p-5",initial:{opacity:0,x:-50},visible:{opacity:1,x:0,transition:{stiffness:50,mass:.5}},delay:c*100},[v(o,{provider:"cloudinary",src:r.image,alt:`${r.title} logo`,class:"min-w-[80%] max-w-[80%] aspect-square object-contain",width:"100",height:"100",fit:"inside",background:"transparent"},null,8,["src","alt"]),l("p",Bs,I(r.title),1)],8,As)),[[i]])),128))])])}}},Ns=D(Ws,[["__scopeId","data-v-519a9133"]]),Hs=(e,t={})=>{const n=t.delayBetweenLetters??50,s=t.delayBetweenSentences??1200,o=_(0),i=_(0),r=_(!1),c=[],f=()=>{Array.from(e.value.children).forEach(d=>{c.push(d.textContent??""),d.textContent=""})},a=()=>{i.value<c[o.value].length?(e.value.children[o.value].innerHTML=c[o.value].slice(0,i.value)+"<span aria-hidden='true' class='caret'></span>",i.value++,setTimeout(a,n)):o.value<c.length-1?(e.value.children[o.value].innerHTML=c[o.value].slice(0,i.value)+"<span aria-hidden='true' class='caret'></span>",setTimeout(()=>{e.value.children[o.value].innerHTML=c[o.value].slice(0,i.value),o.value++,i.value=0,a()},s)):e.value.children[o.value].innerHTML=c[o.value].slice(0,i.value)};H(()=>{Fe(e,([{isIntersecting:d}])=>{d&&!r.value&&(f(),r.value=!0,a())})})},Ds={id:"about",class:"h-screen flex flex-col pt-16"},Rs=l("h2",{class:"text-center uppercase opacity-50 tracking-[10px]"}," About ",-1),Fs=l("p",null," Hey! My name is Colin. 👋 ",-1),Vs=l("p",null," I'm a full stack web developer. What drives me the most is to discover and take advantage of the new possibilities and opportunities that the web is giving us. That's why I carefully keep myself informed about this constantly evolving world. ",-1),Os=l("p",null," I think being a great developer is not so much about being a good coder, but rather being excellent at problem solving. I value rigor and quality in my productions and believe that teamwork is key to learning and success. ",-1),Us=l("p",null," If you are looking for a dedicated and ambitious software engineer, you have come to the right place. I look forward to the opportunity to work with you and create something amazing together! 🚀 ",-1),Gs=[Fs,Vs,Os,Us],Js=q({__name:"About",setup(e){const t=_();return Hs(t,{delayBetweenLetters:10}),(n,s)=>(g(),m("section",Ds,[Rs,l("div",{ref_key:"content",ref:t,class:"max-w-[650px] w-full mx-auto text-sm sm:text-base leading-6 sm:leading-8 flex flex-col gap-3 flex-1 overflow-y-auto py-16 px-3"},Gs,512)]))}}),Qs={class:"hidden md:block fixed z-[1] left-1/2 bottom-5 md:bottom-10 -translate-x-1/2"},Zs=["onClick"],ae=2e3,re=4,Ys=q({__name:"ScrollButton",setup(e){const t=_(!1),n=_(0),s=C(()=>t.value&&n.value<re),o=()=>{const i=document.querySelector("main");i==null||i.scrollBy(0,100),t.value=!1,n.value<re&&setTimeout(()=>{t.value=!0},ae)};return H(()=>{const{y:i}=le(document.querySelector("main"));ce(i,r=>{n.value=Math.round(r/window.innerHeight)}),setTimeout(()=>{t.value=!0},ae)}),(i,r)=>{const c=V("mdicon");return g(),m("div",Qs,[S(s)?(g(),m("button",{key:0,class:"bg-gray-700/50 rounded-full text-white/50 hover:text-white p-1","aria-label":"Next section",onClick:N(o,["stop"])},[v(c,{width:"50",height:"50",name:"chevron-down"})],8,Zs)):Z("",!0)])}}});const Xs=D(Ys,[["__scopeId","data-v-6843c16a"]]),Ks={class:"h-screen overflow-y-auto md:snap-y md:snap-mandatory relative scroll-smooth leading-snug"},si=q({__name:"index",setup(e){return(t,n)=>{const s=Qe;return g(),m("main",Ks,[v(s),v(Ht,{class:"snap-center snap-always"}),v(rs,{class:"snap-center snap-always"}),v(Ls,{class:"snap-center snap-always"}),v(Ns,{class:"snap-center snap-always"}),v(Js,{class:"snap-center snap-always"}),v(Xs)])}}});export{si as default};
