(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"5kR8":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n("Ub9n"),a=n("9Ku7"),i=n("Fk62");let s=(()=>{class t{constructor(t,e){this.as=t,this.router=e}canActivate(t,e){return this.verifyMemberPrivilege()}verifyMemberPrivilege(){return!(["moderator","administrator","superAdministrator"].indexOf(this.as.userMinorDetails.role)<0&&(this.router.navigate(["unauthorized"]),1))}canActivateChild(t,e){return this.canActivate(t,e)}canLoad(){return this.verifyMemberPrivilege()}}return t.\u0275fac=function(e){return new(e||t)(r.Rb(a.a),r.Rb(i.b))},t.\u0275prov=r.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},GKOy:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n("Ub9n"),a=n("9Ku7"),i=n("Fk62");let s=(()=>{class t{constructor(t,e){this.as=t,this.router=e}canActivate(t,e){return this.verifyLogin(e.url)}verifyLogin(t){return!!this.as.isLoggedIn()||(this.as.redirectAddress=t,this.router.parseUrl("/signin"))}canActivateChild(t,e){return this.canActivate(t,e)}canLoad(t){return this.verifyLogin(t.path)}}return t.\u0275fac=function(e){return new(e||t)(r.Rb(a.a),r.Rb(i.b))},t.\u0275prov=r.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},"ikh+":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n("Ub9n"),a=n("9Ku7"),i=n("Fk62");let s=(()=>{class t{constructor(t,e){this.as=t,this.router=e}canActivate(t,e){return!0}verifyMemberStatus(){return"pending"!=this.as.userStatus||(this.router.navigate(["unauthorized"]),!1)}canActivateChild(t,e){return this.canActivate(t,e)}canLoad(t,e){return this.verifyMemberStatus()}}return t.\u0275fac=function(e){return new(e||t)(r.Rb(a.a),r.Rb(i.b))},t.\u0275prov=r.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},wS5z:function(t,e,n){"use strict";n.r(e),n.d(e,"SystemModule",(function(){return m}));var r=n("Yvf7"),a=n("Fk62"),i=n("GKOy"),s=n("5kR8"),o=n("ikh+"),c=n("Ub9n");function u(t,e){if(1&t&&(c.Nb(0,"h2"),c.uc(1),c.Mb()),2&t){const t=c.Wb();c.xb(1),c.wc(" ",t.title," ")}}const l=function(){return["internal","user"]},d=function(){return["request"]},b=function(){return["payment"]},h=function(){return["internal"]},f=function(){return["statistics"]},p=[{path:"",component:(()=>{class t{constructor(){this.title="System"}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Cb({type:t,selectors:[["app-system"]],decls:1,vars:0,template:function(t,e){1&t&&c.Jb(0,"router-outlet")},directives:[a.f],styles:[""]}),t})(),canActivate:[i.a,o.a,s.a],canLoad:[s.a],children:[{path:"",canActivateChild:[i.a,o.a,s.a],children:[{path:"",component:(()=>{class t{constructor(){this.title="System Dashboard",this.view="upr"}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Cb({type:t,selectors:[["app-system-dashboard"]],decls:20,vars:11,consts:[[4,"ngIf"],["id","dashboard"],[1,"center",3,"routerLink"]],template:function(t,e){1&t&&(c.sc(0,u,2,1,"h2",0),c.Nb(1,"p"),c.uc(2,"Only Administrators and Moderators are allowed to perform an action within this part of the system. Anybody with a privilege less than an Administrator and Moderator are not allowed or permitted to make permanent or temporary changes to the records available in the system. In this dashboard, the Administrator and Moderator will be able to monitor and evaluate entries that are specifically meant for internal decision making to drive the system development and entries that have been made by the user for the purpose the system have been created for."),c.Mb(),c.Nb(3,"div",1),c.Nb(4,"ul"),c.Nb(5,"li"),c.Nb(6,"a",2),c.uc(7,"Manage Users"),c.Mb(),c.Mb(),c.Nb(8,"li"),c.Nb(9,"a",2),c.uc(10,"Manage Request"),c.Mb(),c.Mb(),c.Nb(11,"li"),c.Nb(12,"a",2),c.uc(13,"Manage Payment"),c.Mb(),c.Mb(),c.Nb(14,"li"),c.Nb(15,"a",2),c.uc(16,"Manage Internals"),c.Mb(),c.Mb(),c.Nb(17,"li"),c.Nb(18,"a",2),c.uc(19,"Manage Statistics"),c.Mb(),c.Mb(),c.Mb(),c.Mb()),2&t&&(c.cc("ngIf",e.title),c.xb(6),c.cc("routerLink",c.gc(6,l)),c.xb(3),c.cc("routerLink",c.gc(7,d)),c.xb(3),c.cc("routerLink",c.gc(8,b)),c.xb(3),c.cc("routerLink",c.gc(9,h)),c.xb(3),c.cc("routerLink",c.gc(10,f)))},directives:[r.l,a.d],styles:[""]}),t})()},{path:"internal",loadChildren:()=>n.e(29).then(n.bind(null,"U6G5")).then(t=>t.InternalModule)},{path:"request",loadChildren:()=>n.e(15).then(n.bind(null,"86wH")).then(t=>t.InternalRequestModule)},{path:"payment",loadChildren:()=>n.e(14).then(n.bind(null,"Ui9u")).then(t=>t.InternalPaymentModule)},{path:"statistics",loadChildren:()=>n.e(16).then(n.bind(null,"+ky1")).then(t=>t.StatisticsModule)}]}]}];let v=(()=>{class t{}return t.\u0275mod=c.Gb({type:t}),t.\u0275inj=c.Fb({factory:function(e){return new(e||t)},imports:[[a.e.forChild(p)],a.e]}),t})(),m=(()=>{class t{}return t.\u0275mod=c.Gb({type:t}),t.\u0275inj=c.Fb({factory:function(e){return new(e||t)},imports:[[r.b,v]]}),t})()}}]);