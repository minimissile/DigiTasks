import{f as W,m as q,r as t,n as X,S as U,u as Z,j as a,b as $,o as ee,p as ae,H as se,G as te,J as oe,T as ne,F as re,c as y,U as k,K as le,B as F,R as ce,a as ie,L as ue,M as de,N as fe,O as pe,P as me,Q as he,V as xe,d as ge,e as R,E as je}from"./index-BumDjC-_.js";const be=()=>{const n=W(),{isOpen:d,onClose:r,onOpen:f}=q(),o=n.state,e=o==null?void 0:o.data,p=(o==null?void 0:o.editType)||"";t.useRef(null),t.useRef(null),t.useEffect(()=>{},[p]),t.useEffect(()=>{const s=X(U.PROJECT_INFO,{});if(s&&!o){const{projectName:u,channelName:_,logo:Y,banner:Q,desc:V}=s;x(u||""),j(_||""),C(Y||""),S(Q||""),B(V||"")}},[o]);const[l,x]=t.useState((e==null?void 0:e.name)||""),[w,g]=t.useState(!1),[c,j]=t.useState((e==null?void 0:e.channel)||""),[D,E]=t.useState(!1),[m,C]=t.useState((e==null?void 0:e.logo)||""),[I,b]=t.useState(!1),[h,S]=t.useState((e==null?void 0:e.banner)||""),[L,N]=t.useState(!1),[i,B]=t.useState((e==null?void 0:e.des)||""),[O,T]=t.useState(!1),P=Z(),[M,v]=t.useState(!1),H=s=>{b(!1)},G=s=>{N(!1)},z=async()=>{if(!l){g(!0);return}if(!c){E(!0);return}if(!m){b(!0);return}if(!h){N(!0);return}if(!i){T(!0);return}await A()},A=async()=>{const s={name:l,channel:c,logo:m,banner:h,des:i,id:(e==null?void 0:e.id)||""};try{v(!0);const{data:u}=await ge.post(o?R.editProject:R.createProject,s,{headers:{"Content-Type":"multipart/form-data"}});v(!1),u.code===200?(P({title:"The submission was successful",status:"success"}),J(),o||f()):P({title:u.msg||"Creation failed",status:"error"})}catch{v(!1),P({title:"Creation failed",status:"error"})}},J=()=>{x(""),j(""),C(""),S(""),B(""),g(!1),E(!1),b(!1),N(!1),T(!1)},K=()=>{if(!o){const s={projectName:l,channelName:c,logo:m,banner:h,desc:i};je(U.PROJECT_INFO,s)}};return a.jsxs($,{as:ee,pt:"25px",px:"14px",pb:"80px",overflowY:"auto",children:[a.jsx(Ee,{onClose:r,isOpen:d,isCreate:!o}),a.jsx(ae,{beforeBack:K}),a.jsx(se,{img:te,haloImg:oe}),a.jsx(ne,{fontSize:"18px",fontWeight:"bold",lineHeight:"20px",mt:"8px",mb:"35px",children:"Create Project"}),a.jsxs(re,{gap:"15px",flexDirection:"column",w:"100%",children:[a.jsx(y,{enterKeyHint:"done",autoFocus:p==="name",isError:w,placeholder:"Please enter your project name",value:l,onBlur:()=>g(!l),onChange:s=>x(s.target.value)}),a.jsx(y,{autoFocus:p==="channel",isError:D,placeholder:"Please enter your bot @name",value:c,onBlur:()=>E(!c),onChange:s=>j(s.target.value)}),a.jsx(k,{defaultFileUrl:m,id:"upload-logo",isError:I,onFileUpload:H,placeholder:"Upload 100*100 PNG format logo",onFileUploadUrl:s=>{C(s)}}),a.jsx(k,{defaultFileUrl:h,id:"upload-banner",isError:L,onFileUpload:G,placeholder:"Upload 400*140 PNG format banner",onFileUploadUrl:s=>{S(s)}}),a.jsx(le,{maxLength:120,autoFocus:p==="desc",isError:O,placeholder:"Please enter an introduction.",value:i,onBlur:()=>T(!i),onChange:s=>B(s.target.value)})]}),a.jsx(F,{isLoading:M,variant:"primary",h:"56px",w:"100%",mt:"54px",onClick:z,children:"Submit for review"})]})},Ee=({onClose:n,isCreate:d,isOpen:r})=>{const f=ce.useRef(null),o=ie();t.useEffect(()=>{r&&d&&setTimeout(()=>{e()},4e3)},[r,d]);const e=()=>{o("/publishTask")};return a.jsxs(ue,{motionPreset:"slideInBottom",leastDestructiveRef:f,onClose:n,isOpen:r,isCentered:!0,children:[a.jsx(de,{}),a.jsxs(fe,{children:[a.jsx(pe,{children:"Release Tasks"}),a.jsx(me,{}),a.jsx(he,{children:"Do you want to continue publishing tasks?"}),a.jsxs(xe,{w:"100%",children:[a.jsx(F,{ref:f,onClick:n,w:"auto",fontSize:"14px",children:"Cancel"}),a.jsx(F,{colorScheme:"blue",fontSize:"14px",ml:3,w:"auto",onClick:()=>{e(),n()},children:"Continue creating tasks"})]})]})]})};export{be as default};
