(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{hlAb:function(t,e,a){"use strict";a.r(e),a.d(e,"FacultyPaymentModule",(function(){return w}));var n=a("Yvf7"),i=a("2DLQ"),s=a("Fk62"),c=a("jiyY"),l=a("iojP"),o=a("/zEo"),y=a("W9OE"),r=a("wqUa"),p=a("1H/4"),d=a("fQID"),m=a("IY5x"),u=a("GwLI"),b=a("+wh4");let h={systemType:"Faculty Fee",title:"Faculty Fee Payment",view:"fp",viewWord:"Faculty",link:"faculty",$link:"faculty-payment",systemGuideline:"payment",base:"payment"};const f={dashboard:Object.assign({},h),create:Object.assign(Object.assign({},h),{title:`Make ${h.systemType} Payment`,paymentRule:{amount:"1500",description:"Faculty Fee Payment",type:"faculty",callback:"http://localhost:4200/payment/faculty/validation/"}}),detail:Object.assign(Object.assign({},h),{title:h.systemType+" Payment Entry"}),entries:Object.assign(Object.assign({},h),{title:h.systemType+" Entries",searchFilters:{paymentReference:"Payment Reference",faculty:"Faculty",status:"Status"}}),validation:Object.assign(Object.assign({},h),{title:`Verifying ${h.systemType} Payment`}),deleteAll:Object.assign(Object.assign({},h),{title:h.systemType+" Entries : Delete All"})};var j=a("Ub9n");const g=[{path:"",component:y.a,canActivate:[c.a],canLoad:[c.a],canActivateChild:[c.a],children:[{path:"",component:r.a,data:{dashboard:f.dashboard}},{path:"create",component:m.a,data:{create:f.create},canActivate:[l.a]},{path:"entry/detail/:entry",component:d.a,data:{detail:f.detail}},{path:"validation",component:u.a,data:{validation:f.validation}},{path:"entries",component:p.a,data:{entries:f.entries}},{path:"entries/delete/all",component:b.a,canActivate:[o.a],data:{deleteAll:f.deleteAll}}]}];let v=(()=>{class t{}return t.\u0275mod=j.Ib({type:t}),t.\u0275inj=j.Hb({factory:function(e){return new(e||t)},imports:[[s.g.forChild(g)],s.g]}),t})(),w=(()=>{class t{}return t.\u0275mod=j.Ib({type:t}),t.\u0275inj=j.Hb({factory:function(e){return new(e||t)},imports:[[n.b,i.a,v]]}),t})()}}]);