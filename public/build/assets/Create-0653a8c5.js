import{A as g,o as e,b as t,d as s,k as x,y as c,z as k,t as m,p as o,F as w,f as F,B as S}from"./app-1754e601.js";import{u as B}from"./permissions-c904e764.js";import{d as _,u as q,a as P,r as V,m as D}from"./rules-2971686f.js";const E={class:"row justify-content-center my-5"},L={class:"col-md-6"},M={class:"card border-0 shadow-sm"},T={class:"card-body"},j={class:"mb-3"},z=s("label",{for:"post-name",class:"form-label"}," Title ",-1),A={class:"text-danger mt-1"},C={class:"text-danger mt-1"},N={class:"mt-4"},R=["disabled"],U={class:""},G={key:0},H={key:1},Q={__name:"Create",setup(I){_("required",V),_("min",D);const u={name:"required|min:3"},{validate:v,errors:p}=q({validationSchema:u}),{value:h}=P("name",null,{initialValue:""}),{storePermission:f,validationErrors:b,isLoading:a}=B(),i=g({name:h});function y(){v().then(r=>{r.valid&&f(i)})}return(r,d)=>{var l;return e(),t("div",E,[s("div",L,[s("div",M,[s("div",T,[s("form",{onSubmit:x(y,["prevent"])},[s("div",j,[z,c(s("input",{"onUpdate:modelValue":d[0]||(d[0]=n=>i.name=n),id:"post-name",type:"text",class:"form-control"},null,512),[[k,i.name]]),s("div",A,m(o(p).name),1),s("div",C,[(e(!0),t(w,null,F((l=o(b))==null?void 0:l.name,n=>(e(),t("div",null,m(n),1))),256))])]),s("div",N,[s("button",{disabled:o(a),class:"btn btn-primary"},[c(s("div",U,null,512),[[S,o(a)]]),o(a)?(e(),t("span",G,"Processing...")):(e(),t("span",H,"Save"))],8,R)])],32)])])])])}}};export{Q as default};