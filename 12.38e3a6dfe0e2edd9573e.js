(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{Deck:function(e,t,a){"use strict";a.r(t),a.d(t,"DepartmentPaymentModule",(function(){return f}));var n=a("Yvf7"),i=a("2DLQ"),s=a("Fk62"),r=a("jiyY"),c=a("iojP"),p=a("/zEo"),l=a("W9OE"),o=a("wqUa"),d=a("1H/4"),m=a("fQID"),y=a("IY5x"),b=a("GwLI"),h=a("+wh4");let u={systemType:"Department Fee",title:"Department Fee Payment",view:"dp",viewWord:"Department",link:"department",$link:"department-payment",systemGuideline:"payment",base:"payment"};const j={dashboard:Object.assign({},u),create:Object.assign(Object.assign({},u),{title:`Make ${u.systemType} Payment`,paymentRule:{amount:"1000",description:"Departmental Fee Payment",type:"department",callback:"http://localhost:4200/payment/department/validation/"}}),detail:Object.assign(Object.assign({},u),{title:u.systemType+" Payment Entry"}),entries:Object.assign(Object.assign({},u),{title:u.systemType+" Entries",searchFilters:{paymentReference:"Payment Reference",department:"Department",status:"Status"}}),validation:Object.assign(Object.assign({},u),{title:`Verifying ${u.systemType} Payment`}),deleteAll:Object.assign(Object.assign({},u),{title:u.systemType+" Entries : Delete All"})};var g=a("Ub9n");const v=[{path:"",component:l.a,canActivate:[r.a],canLoad:[r.a],canActivateChild:[r.a],children:[{path:"",component:o.a,data:{dashboard:j.dashboard}},{path:"create",component:y.a,data:{create:j.create},canActivate:[c.a]},{path:"entry/detail/:entry",component:m.a,data:{detail:j.detail}},{path:"validation",component:b.a,data:{validation:j.validation}},{path:"entries",component:d.a,data:{entries:j.entries}},{path:"entries/delete/all",component:h.a,canActivate:[p.a],data:{deleteAll:j.deleteAll}}]}];let w=(()=>{class e{}return e.\u0275mod=g.Ib({type:e}),e.\u0275inj=g.Hb({factory:function(t){return new(t||e)},imports:[[s.g.forChild(v)],s.g]}),e})(),f=(()=>{class e{}return e.\u0275mod=g.Ib({type:e}),e.\u0275inj=g.Hb({factory:function(t){return new(t||e)},imports:[[n.b,i.a,w]]}),e})()}}]);