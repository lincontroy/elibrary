import{a as w,r as g,o as n,b as i,d as e,k,t as a,y as d,z as f,p as s,F as b,f as h,N as y,n as x,e as C,w as V,g as $}from"./app-1754e601.js";const N={class:"container"},B={class:"row justify-content-center my-5"},F={class:"col-md-6"},L={class:"card border-0 shadow-sm"},M={class:"card-body"},U={class:""},j={class:"mb-3"},q={for:"email",class:"form-label"},z={class:"text-danger mt-1"},D={class:"mb-4"},E={for:"password",class:"form-label"},I={class:"text-danger-600 mt-1"},S={class:"form-check"},T={class:"form-check-label",for:"flexCheckIndeterminate"},A={class:"flex items-center justify-end mt-4"},G=["disabled"],K={__name:"Login",setup(H){const{loginForm:r,validationErrors:m,processing:c,submitLogin:u}=w();return(l,t)=>{var p,_;const v=g("router-link");return n(),i("div",N,[e("div",B,[e("div",F,[e("div",L,[e("div",M,[e("form",{onSubmit:t[3]||(t[3]=k((...o)=>s(u)&&s(u)(...o),["prevent"]))},[e("div",U,[e("div",j,[e("label",q,a(l.$t("email")),1),d(e("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>s(r).email=o),id:"email",type:"email",class:"form-control",required:"",autofocus:"",autocomplete:"username"},null,512),[[f,s(r).email]]),e("div",z,[(n(!0),i(b,null,h((p=s(m))==null?void 0:p.email,o=>(n(),i("div",null,a(o),1))),256))])]),e("div",D,[e("label",E,a(l.$t("password")),1),d(e("input",{"onUpdate:modelValue":t[1]||(t[1]=o=>s(r).password=o),id:"password",type:"password",class:"form-control",required:"",autocomplete:"current-password"},null,512),[[f,s(r).password]]),e("div",I,[(n(!0),i(b,null,h((_=s(m))==null?void 0:_.password,o=>(n(),i("div",null,a(o),1))),256))])]),e("div",S,[d(e("input",{class:"form-check-input",type:"checkbox",name:"remember","onUpdate:modelValue":t[2]||(t[2]=o=>s(r).remember=o),id:"flexCheckIndeterminate"},null,512),[[y,s(r).remember]]),e("label",T,a(l.$t("remember_me")),1)]),e("div",A,[e("button",{class:x(["btn btn-primary",{"opacity-25":s(c)}]),disabled:s(c)},a(l.$t("login")),11,G)])]),C(v,{to:{name:"auth.forgot-password"}},{default:V(()=>[$(a(l.$t("forgot_password")),1)]),_:1},8,["to"])],32)])])])])])}}};export{K as default};