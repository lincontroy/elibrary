import{u as f,c as b,a as g,r as h,o as i,b as _,d as e,e as o,w as d,_ as p,F as v,f as k,g as x,t as y,n as $,h as C,i as w,S as B}from"./app-1754e601.js";const A={class:"wrapper"},S={class:"navbar navbar-expand-md navbar-dark navbar-dark"},L={class:"container"},N=e("a",{href:"",class:"navbar-brand"},[e("span",{class:"brand-text font-weight-light"},[e("b",null,"Elibrary")])],-1),O=e("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarCollapse","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"{{ __('Toggle navigation') }}"},[e("span",{class:"navbar-toggler-icon"})],-1),j={class:"collapse navbar-collapse",id:"navbarCollapse"},D={class:"navbar-nav ml-auto"},F={class:"nav-item"},I=e("span",{class:"d-none d-sm-inline ps-2"},"Dashboard",-1),V={class:"nav-item"},E=e("span",{class:"d-none d-sm-inline ps-2"},"Users",-1),P={class:"nav-item"},T=e("span",{class:"d-none d-sm-inline ps-2"},"Books",-1),q={class:"nav-item"},z=e("span",{class:"d-none d-sm-inline ps-2"},"Book Loans",-1),R={__name:"AdminNavbar",setup(r){const n=f();return b(()=>n.state.auth.user),g(),(u,m)=>{const t=h("router-link");return i(),_("div",A,[e("nav",S,[e("div",L,[N,O,e("div",j,[e("ul",D,[e("li",F,[o(t,{to:"/admin",class:"nav-link"},{default:d(()=>[I]),_:1})]),e("li",V,[o(t,{to:"/admin/users",class:"nav-link"},{default:d(()=>[E]),_:1})]),e("li",P,[o(t,{to:"/admin/books",class:"nav-link"},{default:d(()=>[T]),_:1})]),e("li",q,[o(t,{to:"/admin/bookloans",class:"nav-link"},{default:d(()=>[z]),_:1})])])])])])])}}};const U={props:{crumbs:{type:Array,required:!0}},methods:{isLast(r){return r===this.crumbs.length-1},selected(r){this.$emit("selected",r)}}},G={class:"mx-2"},H={class:"breadcrumb border-radius-0"};function J(r,n,u,m,t,l){const a=h("router-link");return i(),_("nav",G,[e("ol",H,[(i(!0),_(v,null,k(u.crumbs,(c,s)=>(i(),_("li",{key:s,class:"breadcrumb-item align-items-center"},[o(a,{to:c.href,class:$(["btn btn-link",{disabled:l.isLast(s)}]),onClick:Y=>l.selected(c)},{default:d(()=>[x(y(c.text),1)]),_:2},1032,["to","class","onClick"])]))),128))])])}const K=p(U,[["render",J],["__scopeId","data-v-de336510"]]);const M={class:"d-flex align-items-stretch w-100"},Q={class:"container-fluid"},W={class:"main"},X={__name:"Authenticated",setup(r){const n=C(),u=b(()=>{let t=n.path.split("/");t.shift();const l=[{href:"/admin",disabled:!1,text:"Dashboard"}];let a="",c=0;for(let s=0;s<t.length;++s)a=`${a}/${t[s]}`,n.matched[s]&&Object.hasOwnProperty.call(n.matched[s],"meta")&&Object.hasOwnProperty.call(n.matched[s].meta,"breadCrumb")&&(l.push({href:s!==0&&t[s-(s-c)]?"/"+t[s-(s-c)]+a:a,disabled:s+1===t.length,text:n.matched[s].meta.breadCrumb||t[s]}),c=s,a="");return l});function m(t){}return(t,l)=>{const a=h("router-view");return i(),_(v,null,[o(R),e("div",M,[e("div",Q,[o(K,{class:"row justify-content-center mt-4",crumbs:u.value,onSelected:m},null,8,["crumbs"]),e("div",W,[(i(),w(B,null,{default:d(()=>[o(a)]),_:1}))])])])],64)}}},ee=p(X,[["__scopeId","data-v-4487ef12"]]);export{ee as default};