(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{z34F:function(e,t,n){"use strict";n.r(t),n.d(t,"InternetPasswordModule",(function(){return T}));var a=n("Yvf7"),s=n("DFDL"),r=n("Fk62"),i=n("GKOy"),o=n("iojP"),c=n("/zEo"),d=n("4aVp"),l=n("nDLB"),p=n("dIfi"),m=n("dyb6"),y=n("z137"),b=n("DjD2"),j=n("/FKr"),h=n("NKDN"),u=n("fLAD"),g=n("r3HG");let O={systemType:"Internet Password",title:"Internet Password",view:"rpif",viewWord:"InternetPassword",link:"internet-password",$link:"internet-password",systemGuideline:"request"};const f={dashboard:Object.assign({},O),create:Object.assign(Object.assign({},O),{title:`Request ${O.systemType} for School WIFI`}),comment:Object.assign(Object.assign({},O),{title:`Add a Comment : ${O.systemType} Entry`}),detail:Object.assign(Object.assign({},O),{title:O.systemType+" Entry",generateCred:"passwords"}),timeline:Object.assign(Object.assign({},O),{title:O.systemType+" Entry Timeline"}),transfer:Object.assign(Object.assign({},O),{title:`Transfer and Move ${O.systemType} Entry`}),entries:Object.assign(Object.assign({},O),{title:O.systemType+" Entries",searchFilters:{applicationNumber:"Application Number",status:"Status"}}),reply:Object.assign(Object.assign({},O),{title:`Add a Reply to a Comment : ${O.systemType} Entry`}),deleteAll:Object.assign(Object.assign({},O),{title:O.systemType+" Entries : Delete All"})};var w=n("Ub9n");const A=[{path:"",component:d.a,canActivate:[i.a],canLoad:[i.a],canActivateChild:[i.a],children:[{path:"",component:l.a,data:{dashboard:f.dashboard}},{path:"create",component:p.a,data:{create:f.create},canActivate:[o.a]},{path:"entry/:entry/comment/add",component:m.a,data:{comment:f.comment}},{path:"entry/detail/:entry",component:y.a,data:{detail:f.detail}},{path:"entry/:entry/timeline",component:b.a,data:{timeline:f.timeline}},{path:"entry/:entry/transfer",component:j.a,data:{transfer:f.transfer}},{path:"entries",component:h.a,data:{entries:f.entries}},{path:"entry/:entry/comment/:comment/reply/add",component:u.a,data:{reply:f.reply}},{path:"entries/delete/all",component:g.a,canActivate:[c.a],data:{deleteAll:f.deleteAll}}]}];let v=(()=>{class e{}return e.\u0275mod=w.Gb({type:e}),e.\u0275inj=w.Fb({factory:function(t){return new(t||e)},imports:[[r.e.forChild(A)],r.e]}),e})(),T=(()=>{class e{}return e.\u0275mod=w.Gb({type:e}),e.\u0275inj=w.Fb({factory:function(t){return new(t||e)},providers:[],imports:[[a.b,s.a,v]]}),e})()}}]);