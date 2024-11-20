import{u as he,a as Me,j as t,C as He,F as d,T as o,l as Is,B as L,r as a,b as D,c as g,d as b,e as f,f as Bs,g as Fs,h as Ds,i as Ls,k as As,m as _e,n as _s,S as ze,o as zs,p as qs,H as Os,t as Ms,q as Hs,I as $s,s as Rs,v as Gs,w as Ks,x as Ws,U as qe,y as Ys,z as Vs,A as Qs,D as Oe,E as Js}from"./index-BumDjC-_.js";const Xs=({isOpen:h,onClose:p,token:x,uid:i})=>{const u=`uid:${i} / token:${x}`,A=he(),E=Me();return t.jsx(He,{isOpen:h,onClose:p,bgColor:"#6F00FF",children:t.jsxs(d,{flexDirection:"column",alignItems:"center",pb:"24px",pt:"30px",px:"16px",wordBreak:"break-all",fontSize:"14px",w:"100%",children:[t.jsxs(d,{mb:"10px",w:"100%",children:[t.jsx(o,{w:"28%",color:"#bbb",flexShrink:0,textAlign:"right",mr:"10px",children:"API Access:"}),t.jsx(o,{children:x})]}),t.jsxs(d,{w:"100%",mb:"20px",children:[t.jsx(o,{w:"28%",color:"#bbb",flexShrink:0,textAlign:"right",mr:"10px",children:"UID:"}),t.jsx(o,{children:i})]}),t.jsx(Is.CopyToClipboard,{text:u,onCopy:()=>{A({title:"Copied",status:"success"})},children:t.jsx(L,{variant:"primary",mt:"16px",fontSize:"16px",children:"Copy"})}),t.jsx(L,{variant:"primary",mt:"16px",fontSize:"16px",onClick:()=>{p(),E("/accessAPI",{state:x})},children:"Click Access API"})]})})},Zs=({isOpen:h,unitPrice:p,id:x,onConfirm:i,onClose:u,token:A,uid:E})=>{const r=he(),[_,j]=a.useState(!1),[l,e]=a.useState(""),[y,z]=a.useState(!1),[X,Z]=a.useState(""),ee=async()=>{try{const w={class:x,quantity:l};j(!0);const{data:v}=await b.post(f.addTaskQuantity,w);j(!1),v.code===200?(r({title:v.msg||"The operation was successful",status:"success"}),e(""),i&&i(),u()):r({title:v.msg||"The request failed",status:"error"})}catch{j(!1),r({title:"The request failed",status:"error"})}};return t.jsx(He,{isOpen:h,onClose:u,bgColor:"#211134",children:t.jsxs(d,{flexDirection:"column",alignItems:"center",pb:"24px",pt:"30px",px:"16px",wordBreak:"break-all",fontSize:"14px",w:"100%",children:[t.jsxs(d,{mb:"10px",w:"100%",children:[t.jsx(o,{w:"28%",color:"#bbb",flexShrink:0,textAlign:"right",mr:"10px",children:"Unit price:"}),t.jsxs(o,{children:[p," USDT"]})]}),t.jsx(d,{w:"100%",mb:"10px",mt:"15px",children:t.jsx(o,{w:"28%",color:"#bbb",flexShrink:0,textAlign:"right",mr:"10px",children:"Add amount:"})}),t.jsxs(D,{w:"100%",children:[t.jsx(g,{isError:y,placeholder:"Enter the add amount",value:l,onBlur:()=>{!l||isNaN(Number(l))?(z(!0),Z("")):(z(!1),Z(""))},onChange:w=>e(w.target.value)}),t.jsx(o,{color:"#FC8181",mt:"5px",ml:"auto",textAlign:"right",children:X})]}),t.jsx(L,{w:"100%",variant:"primary",mt:"25px",fontSize:"16px",onClick:ee,isLoading:_,children:"Add tasks"})]})})},it=()=>{var De,Le,Ae;const h=Bs(),p=Me(),{projectId:x,type:i}=Fs(),u=h.pathname,{data:A=[]}=Ds(),E=(De=A[0])==null?void 0:De.id;a.useState();const[r,_]=a.useState("UserTask"),{refetch:j}=Ls(),l=h.state,[e,y]=a.useState(l);As();const{isOpen:z,onClose:X,onOpen:Z,onToggle:ee}=_e(),{isOpen:w,onClose:v,onOpen:tt,onToggle:$e}=_e(),[se,me]=a.useState(""),[te,Re]=a.useState(),[Ge,Ke]=a.useState("");a.useEffect(()=>{const s=_s(ze.TASK_INFO,{});if(i&&_(i),e&&i!=="USDTTask")q((e==null?void 0:e.name)||""),re((e==null?void 0:e.link)||""),oe((e==null?void 0:e.data_link)||""),K((e==null?void 0:e.tags)||""),W(String((e==null?void 0:e.total_count)||"")),F(String((e==null?void 0:e.price)||"")),fe((e==null?void 0:e.content)||""),ie((e==null?void 0:e.img_link)||""),le((e==null?void 0:e.offcial_link)||""),de((e==null?void 0:e.link)||""),Ke((e==null?void 0:e.fans)||"");else if(s&&!e){const{taskTotal:n,unitPrice:c,taskName:J,taskLink:ys,logoUrl:vs,tagsStr:Ns}=s;q(J||""),ne(ys||""),ce(vs||""),K(Ns||""),F(c||""),W(n||"")}},[e,i]),a.useEffect(()=>{u.includes("/editTask")&&(i==="USDTTask"?We().then():i==="UserTask"?Ye().then():i==="PostTask"&&Ve().then())},[u,l,i]);const We=async()=>{var s;try{const{data:n}=await b.get(f.taskInfo,{params:{class:l==null?void 0:l.class}});n.code===200&&y((s=n==null?void 0:n.data)==null?void 0:s.task)}catch{}},Ye=async()=>{try{const{data:s}=await b.get(f.userBusinessTaskInfo,{params:{id:l==null?void 0:l.id}});s.code===200&&y(s==null?void 0:s.data)}catch{}},Ve=async()=>{try{const{data:s}=await b.get(f.postBusinessTaskInfo,{params:{id:l==null?void 0:l.id}});s.code===200&&y(s==null?void 0:s.data)}catch{}},ge=.03,Se=1e4,[be,ae]=a.useState(ge),[C,q]=a.useState((e==null?void 0:e.name)||""),[Qe,je]=a.useState(!1),[O,ne]=a.useState((e==null?void 0:e.taskLink)||""),[Je,Ee]=a.useState(!1),[M,re]=a.useState(""),[Xe,Ue]=a.useState(!1),[H,oe]=a.useState(""),[Ze,we]=a.useState(!1),[$,ie]=a.useState(""),[es,ss]=a.useState(!1),[R,le]=a.useState(""),[ts,Ce]=a.useState(!1);a.useState(""),a.useState(!1);const[at,Pe]=a.useState(null),[as,ye]=a.useState(!1),[N,ce]=a.useState((e==null?void 0:e.logo)||"");a.useState(!1);const[nt,ve]=a.useState(null),[rt,Ne]=a.useState(!1),[ue,de]=a.useState(""),[ns,rs]=a.useState(!1),[G,fe]=a.useState(""),[os,Ie]=a.useState(!1),[I,Be]=a.useState(""),[is,ls]=a.useState(!1),[B,K]=a.useState((e==null?void 0:e.tags)||""),[k,W]=a.useState(((Le=e==null?void 0:e.total_quantity)==null?void 0:Le.toString())||""),[cs,Y]=a.useState(!1),[Fe,xe]=a.useState(""),[T,F]=a.useState(String((e==null?void 0:e.point)||"")),[us,V]=a.useState(!1),[ds,pe]=a.useState("");a.useState(0);const[fs,S]=a.useState(!1),m=he(),[U,xs]=a.useState(),[P,ps]=a.useState(),[ke,ks]=a.useState(0);a.useEffect(()=>{e&&hs().then()},[e]),a.useEffect(()=>{Ts().then()},[]);const Ts=async()=>{var s;try{const{data:n}=await b.get(f.sysConfig);n.code===200&&ks(((s=n.data)==null?void 0:s.task_Service_charge)||0)}catch{}},hs=async()=>{var s;try{const{data:n}=await b.get(f.taskInfo,{params:{class:e==null?void 0:e.class}});if(n.code===200){const c=(s=n==null?void 0:n.data)==null?void 0:s.task;ps(c),me(c.task_token)}}catch{}},ms=a.useMemo(()=>{if(T&&k){const n=Number(T),c=Number(k),J=n*c;return J+J*ke}return 0},[T,k,ke]),gs=s=>{Pe(s),ye(!1)},Ss=s=>{ve(s),Ne(!1)},bs=async()=>{if(!Number(x||E)&&!e){m({title:"You haven't created a project yet",status:"warning"});return}r==="UserTask"?await Cs():r==="USDTTask"?await ws():r==="PostTask"&&await Ps()},Te=()=>{q(""),je(!1),ne(""),Ee(!1),re(""),Ue(!1),oe(""),we(!1),le(""),Ce(!1),Pe(null),ye(!1),ve(null),Ne(!1),de(""),rs(!1),fe(""),Ie(!1),Be(""),ls(!1),K(""),W(""),Y(!1),F(""),V(!1),ce(""),ie("")},js={1:"#32D74B",2:"#FF0000",0:"#FFDD00",3:"#A200FF",default:"rgba(235, 235, 245, 0.6)"},Q={"x≤10000":10,"10000＜x≤25000":25,"25000＜x≤50000":40,"50000＜x≤100000":55,"100000＜x≤500000":70,"500000＜x≤1000000":85,"x＞1000000":100},Es=()=>{if(!e){const s={taskTotal:k,unitPrice:T,taskName:C,taskLink:O,logoUrl:N,tagsStr:B,inviteLink:M,imageLink:$,offcialLink:R,bannerUrl:ue,contentUrl:G,number:I};Js(ze.TASK_INFO,s)}},Us=()=>{p("/wallet/transfer")},ws=async()=>{const s={quantity:Number(k),price:Number(T),token:U==null?void 0:U.token.toUpperCase(),name:C,link:O,logo:N,tags:B,projectid:Number(x||E)};e&&(u==="/copyTask"?s.copyclass=e==null?void 0:e.class:u.includes("/editTask")&&(s.class=e==null?void 0:e.class));try{S(!0);const{data:n}=await b.post(e?u.includes("/editTask")?f.editTask:f.copyTask:f.createTask,s,{headers:{"Content-Type":"multipart/form-data"}});if(S(!1),n.code===200){m({title:"The submission was successful",status:"success"});const c=n==null?void 0:n.data;Re(c==null?void 0:c.uid),c!=null&&c.task_token&&me(c==null?void 0:c.task_token),setTimeout(()=>{ee()},0),Te(),await j()}else m({title:n.msg||"Creation failed",status:"error"})}catch{S(!1),m({title:"The request failed",status:"error"})}},Cs=async()=>{const s={name:C,link:M,logo:N,data_link:H,count:Number(k),price:Number(T),projectid:Number(x||E),tags:B,id:(e==null?void 0:e.id)||""};try{S(!0);const{data:n}=await b.post(u.includes("/editTask")?f.userBusinessEditTask:f.userBusinessCreateTask,s);S(!1),n.code===200?(m({title:"The submission was successful",status:"success"}),Te(),await j()):m({title:n.msg||"The request failed",status:"error"})}catch{S(!1),m({title:"The request failed",status:"error"})}},Ps=async()=>{const s={name:C,link:ue,logo:N,offcial_link:R,count:Number(k),price:Q[I],img_link:$,content:G,fans:I,projectid:Number(x||E),bot_link:"",data_link:H,tags:B,id:(e==null?void 0:e.id)||""};try{S(!0);const{data:n}=await b.post(u.includes("/editTask")?f.postBusinessEditTask:f.postBusinessCreateTask,s);S(!1),n.code===200?(m({title:"The submission was successful",status:"success"}),Te(),await j()):m({title:n.msg||"The request failed",status:"error"})}catch{S(!1),m({title:"The request failed",status:"error"})}};return t.jsxs(d,{as:zs,px:"14px",pt:"20px",pb:"50px",overflowY:"auto",h:"100vh",children:[se&&te?t.jsx(Xs,{isOpen:z,onClose:X,token:se,uid:te}):null,t.jsx(Zs,{unitPrice:Number(T||0),token:se,uid:te||0,isOpen:w,onClose:v,id:e==null?void 0:e.class,onConfirm:async()=>{await j()}}),t.jsx(qs,{beforeBack:Es}),t.jsx(Os,{w:"100px",h:"100px",img:Ms}),t.jsx(Hs,{fontSize:"18px",fontWeight:"bold",lineHeight:"20px",mt:"15px",mb:"15px",children:r==="PostTask"?"Post Tasks":r==="UserTask"?"User Tasks":"USDT Task"}),t.jsxs(d,{zIndex:10,position:"fixed",right:"10px",top:"22px",flexDirection:"column",alignItems:"center",cursor:"pointer",onClick:Us,children:[t.jsx($s,{w:"28px",h:"26px",src:Rs}),t.jsx(o,{fontSize:"12px",fontWeight:600,lineHeight:"28px",children:"Deposit"})]}),u.includes("/editTask")?null:t.jsx(Gs,{tokens:["Post Tasks","User Tasks","USDT Tasks"],selectDefaultToken:i==="PostTask"?"Post Tasks":i==="UserTask"?"User Tasks":"USDT Tasks",px:["16px","18px"],width:"100%",selectedToken:r,setSelectedToken:s=>{ae(s!=="Post Tasks"?ge:Q[I]),_(s==="Post Tasks"?"PostTask":s==="User Tasks"?"UserTask":"USDTTask")}}),P!=null&&P.task_token&&u.includes("/editTask")?t.jsxs(d,{fontSize:"15px",w:"100%",flexDirection:"column",mb:"40px",children:[t.jsx(st,{label:"API Access",mt:"20px"}),t.jsxs(et,{children:[t.jsx(o,{cursor:"pointer",fontSize:"18px",letterSpacing:"-0.24px",w:"50vw",onClick:()=>{p("/accessAPI",{state:P==null?void 0:P.task_token})},children:"Click Access API"}),t.jsx(D,{w:"1px",h:"100%",bg:"#fff"}),t.jsxs(d,{alignItems:"center",children:[t.jsx(o,{mr:"5px",color:js[e!=null&&e.verify?"1":"2"],children:e!=null&&e.verify?"Verified":"Not Verified"}),e!=null&&e.verify?t.jsx(Ks,{}):t.jsx(Ws,{})]})]})]}):null,t.jsxs(d,{gap:"15px",flexDirection:"column",w:"100%",mt:"18px",children:[t.jsx(g,{isError:Qe,placeholder:"Please enter your Tasks name",value:C,onBlur:()=>je(!C),onChange:s=>q(s.target.value)}),r==="USDTTask"?t.jsx(g,{isError:Je,placeholder:"Please enter your link url",value:O,onBlur:()=>Ee(!O),onChange:s=>ne(s.target.value)}):null,r==="UserTask"?t.jsx(g,{isError:Xe,placeholder:"Please enter invite link url",value:M,onBlur:()=>Ue(!M),onChange:s=>re(s.target.value)}):null,r==="PostTask"?t.jsx(qe,{id:"bannerFile",isError:ns,defaultFileUrl:ue,onFileUpload:Ss,placeholder:"Upload 640*360 PNG Image",onFileUploadUrl:s=>{de(s)}}):null,t.jsx(qe,{id:"logoFile",isError:as,defaultFileUrl:N,onFileUpload:gs,placeholder:"Upload 45*45 PNG format logo",onFileUploadUrl:s=>{ce(s)}}),r==="PostTask"||r==="UserTask"?t.jsx(g,{isError:Ze,placeholder:"Please enter data link url",value:H,onBlur:()=>we(!H),onChange:s=>oe(s.target.value)}):null,r==="PostTask"?t.jsx(g,{isError:ts,placeholder:"Please enter offcial link url",value:R,onBlur:()=>Ce(!R),onChange:s=>le(s.target.value)}):null,r==="PostTask"?t.jsx(g,{isError:es,placeholder:"Please enter image link url",value:$,onBlur:()=>ss(!$),onChange:s=>ie(s.target.value)}):null,r==="PostTask"?t.jsx(g,{isError:os,placeholder:"Please enter Content Within 300 words",value:G,onBlur:()=>Ie(!G),onChange:s=>fe(s.target.value)}):null,r==="PostTask"?t.jsx(Ys,{selectDefaultToken:Ge,isError:is,setSelectedToken:s=>{Be(s),F(String(Q[s])),ae(Number(Q[s]))},selectedToken:I}):null,t.jsx(g,{placeholder:"Input tags are separated by “,”",value:B,onChange:s=>K(s.target.value)}),r!=="PostTask"?t.jsx(Vs,{selectDefaultToken:((Ae=e==null?void 0:e.token)==null?void 0:Ae.toUpperCase())||"USDT",px:["16px","18px"],width:"100%",selectedToken:U,setSelectedToken:xs}):null,t.jsxs(D,{children:[t.jsx(g,{isError:r==="PostTask"?!1:cs,placeholder:"Enter the total quantity",value:k,onBlur:()=>{if(r==="PostTask")return;const s=Number(k);!k||isNaN(Number(k))?(Y(!0),xe("")):s<Se?(Y(!0),xe(`Minimum number of tasks: ${Se}`)):(Y(!1),xe(""))},onChange:s=>W(s.target.value)}),Fe?t.jsx(o,{color:"#FC8181",mt:"5px",ml:"auto",textAlign:"right",children:Fe}):null]}),t.jsxs(D,{children:[t.jsx(Qs,{subLabel:`Service fee: ${ke*100}%`,inputFontSize:"18px",placeholder:"Enter unit price",isError:r==="PostTask"?!1:us,value:T,onBlur:()=>{window.scrollTo(0,0);const s=Number(T);!T||isNaN(Number(T))?(V(!0),pe("")):s<be?(V(!0),pe(`Minimum price limit: ${be} USDT`)):(pe(""),V(!1))},onChange:s=>F(s.target.value),inputSlot:t.jsx(D,{pl:"22px",borderLeft:"2px solid rgba(235, 235, 245, 0.1686)",children:t.jsxs(o,{fontSize:"18px",lineHeight:"24px",color:"#EBEBF5",children:["$",Oe(ms)]})})}),t.jsx(o,{color:"#FC8181",mt:"5px",ml:"auto",textAlign:"right",children:ds})]})]}),t.jsxs(o,{ml:"auto",color:"rgba(235, 235, 245, 0.6)",fontSize:"18px",mt:"5px",children:["Available: $",Oe((U==null?void 0:U.balance)||0)]}),t.jsxs(d,{w:"100%",mt:"54px",gap:"15px",flexDirection:"column",children:[u.includes("/editTask")&&r==="USDTTask"?t.jsx(L,{colorScheme:"blue",variant:"outline",h:"56px",w:"100%",onClick:$e,children:"Add tasks"}):null,t.jsx(L,{isLoading:fs,variant:"primary",h:"56px",w:"100%",onClick:bs,children:"Submit for review"})]})]})},et=({children:h,...p})=>t.jsx(d,{w:"100%",h:"70px",px:"20px",borderRadius:"18px",border:"1px solid rgba(255, 255, 255, 0.17)",alignItems:"center",justifyContent:"space-between",py:"16px",...p,children:h}),st=({label:h,rightLabel:p,...x})=>t.jsxs(d,{justifyContent:"space-between",alignItems:"center",fontSize:"18px",lineHeight:"20px",color:"#fff",w:"100%",letterSpacing:"-0.24px",mb:"10px",...x,children:[t.jsx(o,{children:h}),t.jsx(o,{children:p})]});export{it as default};
