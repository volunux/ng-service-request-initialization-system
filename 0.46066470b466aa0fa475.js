(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"/zEo":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("Ub9n"),s=n("9Ku7"),i=n("Fk62");let o=(()=>{class t{constructor(t,e){this.as=t,this.router=e}canActivate(t,e){return this.isSuperAdministrator()}isSuperAdministrator(){return!!this.as.isSuperAdministrator||this.router.parseUrl("/unauthorized")}canActivateChild(t,e){return this.isSuperAdministrator()}}return t.\u0275fac=function(e){return new(e||t)(r.Rb(s.a),r.Rb(i.b))},t.\u0275prov=r.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},"1B5t":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n("Ub9n");let s=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Cb({type:t,selectors:[["app-delete-all-entry"]],inputs:{systemType:["system-type","systemType"]},decls:2,vars:2,template:function(t,e){1&t&&(r.Nb(0,"p"),r.uc(1),r.Mb()),2&t&&(r.xb(1),r.xc("All ",e.systemType," entry if the button is confirmed will result in total deletion or exclusion from the system or database. It is advised you review your decision before pressing the confirmation button which will remove or delete all ",e.systemType," entry from the system. "))},styles:[""]}),t})()},"34d6":function(t,e,n){"use strict";function r(t){return t instanceof Date&&!isNaN(+t)}n.d(e,"a",(function(){return r}))},AuHR:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n("OX4D");function s(t=-1){return e=>e.lift(new i(t,e))}class i{constructor(t,e){this.count=t,this.source=e}call(t,e){return e.subscribe(new o(t,this.count,this.source))}}class o extends r.a{constructor(t,e,n){super(t),this.count=e,this.source=n}error(t){if(!this.isStopped){const{source:e,count:n}=this;if(0===n)return super.error(t);n>-1&&(this.count=n-1),e.subscribe(this._unsubscribeAndRecycle())}}}},Ma1o:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("ry98");class s extends r.a{constructor(t,e){super()}schedule(t,e=0){return this}}class i extends s{constructor(t,e){super(t,e),this.scheduler=t,this.work=e,this.pending=!1}schedule(t,e=0){if(this.closed)return this;this.state=t;const n=this.id,r=this.scheduler;return null!=n&&(this.id=this.recycleAsyncId(r,n,e)),this.pending=!0,this.delay=e,this.id=this.id||this.requestAsyncId(r,this.id,e),this}requestAsyncId(t,e,n=0){return setInterval(t.flush.bind(t,this),n)}recycleAsyncId(t,e,n=0){if(null!==n&&this.delay===n&&!1===this.pending)return e;clearInterval(e)}execute(t,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const n=this._execute(t,e);if(n)return n;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(t,e){let n=!1,r=void 0;try{this.work(t)}catch(s){n=!0,r=!!s&&s||new Error(s)}if(n)return this.unsubscribe(),r}_unsubscribe(){const t=this.id,e=this.scheduler,n=e.actions,r=n.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==r&&n.splice(r,1),null!=t&&(this.id=this.recycleAsyncId(e,t,null)),this.delay=null}}let o=(()=>{class t{constructor(e,n=t.now){this.SchedulerAction=e,this.now=n}schedule(t,e=0,n){return new this.SchedulerAction(this,t).schedule(n,e)}}return t.now=()=>Date.now(),t})();class c extends o{constructor(t,e=o.now){super(t,()=>c.delegate&&c.delegate!==this?c.delegate.now():e()),this.actions=[],this.active=!1,this.scheduled=void 0}schedule(t,e=0,n){return c.delegate&&c.delegate!==this?c.delegate.schedule(t,e,n):super.schedule(t,e,n)}flush(t){const{actions:e}=this;if(this.active)return void e.push(t);let n;this.active=!0;do{if(n=t.execute(t.state,t.delay))break}while(t=e.shift());if(this.active=!1,n){for(;t=e.shift();)t.unsubscribe();throw n}}}const a=new c(i)},RBZI:function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var r=n("Ub9n"),s=n("Yvf7"),i=n("Fk62");const o=function(){return["./"]},c=function(t){return{page:t}};function a(t,e){if(1&t&&(r.Lb(0),r.Nb(1,"a",6),r.uc(2," Prev Entries "),r.Mb(),r.Kb()),2&t){const t=r.Wb(2);r.xb(1),r.cc("routerLink",r.gc(2,o))("queryParams",r.hc(3,c,t.pageNumber-1==1?null:t.pageNumber-1))}}function u(t,e){1&t&&(r.Nb(0,"a",7),r.uc(1," Prev Entries "),r.Mb()),2&t&&r.cc("routerLink",r.gc(1,o))}function l(t,e){if(1&t&&(r.Lb(0),r.Nb(1,"a",8),r.uc(2," Next Entries "),r.Mb(),r.Kb()),2&t){const t=r.Wb(2);r.xb(1),r.cc("routerLink",r.gc(2,o))("queryParams",r.hc(3,c,t.pageNumber+1))}}function h(t,e){1&t&&(r.Nb(0,"button",10),r.uc(1," End of Entries "),r.Mb()),2&t&&(r.Ab("disabled",!0),r.cc("disabled",!0))}function f(t,e){if(1&t&&r.sc(0,h,2,3,"button",9),2&t){const t=r.Wb(2);r.cc("ngIf",t.$entriesLength>=1)}}function d(t,e){if(1&t&&(r.Lb(0),r.Nb(1,"td",1),r.sc(2,a,3,5,"ng-container",0),r.sc(3,u,2,2,"ng-template",null,2,r.tc),r.Mb(),r.Nb(5,"td",3),r.sc(6,l,3,5,"ng-container",4),r.sc(7,f,1,1,"ng-template",null,5,r.tc),r.Mb(),r.Kb()),2&t){const t=r.mc(8),e=r.Wb();r.xb(2),r.cc("ngIf",e.pageNumber&&e.pageNumber>1),r.xb(4),r.cc("ngIf",!e.$entryRef&&e.$entriesLength>10)("ngIfElse",t)}}let b=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Cb({type:t,selectors:[["app-pagination"]],inputs:{$entriesLength:["entries-length","$entriesLength"],pageNumber:["page-number","pageNumber"],$entryRef:["entry-ref","$entryRef"]},decls:1,vars:1,consts:[[4,"ngIf"],["colspan","3"],["entriesBegin",""],["colspan","9"],[4,"ngIf","ngIfElse"],["entriesEnd",""],[1,"pagination","prev","center",3,"routerLink","queryParams"],[1,"pagination","prev","center",3,"routerLink"],[1,"pagination","next","center",3,"routerLink","queryParams"],["class","pagination-end float-right center",3,"disabled",4,"ngIf"],[1,"pagination-end","float-right","center",3,"disabled"]],template:function(t,e){1&t&&r.sc(0,d,9,3,"ng-container",0),2&t&&r.cc("ngIf",e.pageNumber)},directives:[s.l,i.d],styles:["[_nghost-%COMP%]{display:contents};"]}),t})()},Rxsk:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("Ub9n"),s=n("Yvf7");const i=function(t,e){return{notification:!0,"fade-in":t,"fade-out":e}};function o(t,e){if(1&t&&(r.Nb(0,"p"),r.uc(1),r.Mb()),2&t){const t=r.Wb();r.zb(r.ic(3,i,t.fadeIn,t.fadeOut)),r.xb(1),r.wc(" ",t.notificationMessage," ")}}let c=(()=>{class t{constructor(){this.finished=new r.n}set notified(t){this.notificationAvailable=t,t&&(this.fadeIn=!0,this.fadeOutNotification())}get notified(){return this.notificationAvailable}fadeOutNotification(){setTimeout(()=>{this.fadeIn=!1,this.fadeOut=!0,this.removeNotification()},4e3)}removeNotification(){setTimeout(()=>{this.finished.emit(!0)},4e3)}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Cb({type:t,selectors:[["app-notification-screen"]],inputs:{notificationMessage:["message","notificationMessage"],notified:"notified"},outputs:{finished:"finished"},decls:2,vars:1,consts:[["id","notification-parent"],[3,"class",4,"ngIf"]],template:function(t,e){1&t&&(r.Nb(0,"div",0),r.sc(1,o,2,6,"p",1),r.Mb()),2&t&&(r.xb(1),r.cc("ngIf",e.notificationAvailable))},directives:[s.l],styles:["#notification-parent[_ngcontent-%COMP%]{position:relative}"]}),t})()},TY4h:function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var r=n("Ub9n"),s=n("Yvf7");function i(t,e){if(1&t&&(r.Lb(0),r.Nb(1,"p"),r.uc(2),r.Mb(),r.Kb()),2&t){const t=r.Wb(2);r.xb(1),r.rc("color","red"),r.xb(1),r.wc(" Message : ",t.error.error.message,"")}}function o(t,e){if(1&t&&(r.Lb(0),r.Nb(1,"p"),r.uc(2),r.Mb(),r.Kb()),2&t){const t=r.Wb(3);r.xb(1),r.rc("color","red"),r.xb(1),r.wc(" Message : ",t.error.error.field.message,"")}}function c(t,e){if(1&t&&r.sc(0,o,3,3,"ng-container",1),2&t){r.Wb();const t=r.mc(9),e=r.Wb();r.cc("ngIf",null==e.error||null==e.error.error?null:e.error.error.field)("ngIfElse",t)}}function a(t,e){if(1&t&&(r.Lb(0),r.Nb(1,"ul",7),r.Nb(2,"li"),r.uc(3),r.Mb(),r.Mb(),r.Kb()),2&t){const t=e.$implicit,n=r.Wb(4);r.xb(3),r.wc("",null==n.error.error[t]?null:n.error.error[t].message," ")}}function u(t,e){if(1&t&&(r.Lb(0),r.Nb(1,"h4"),r.uc(2,"List of Errors : "),r.Mb(),r.sc(3,a,4,1,"ng-container",6),r.Kb()),2&t){const t=r.Wb(3);r.xb(3),r.cc("ngForOf",t.errorKeys)}}function l(t,e){if(1&t&&r.sc(0,u,4,1,"ng-container",0),2&t){const t=r.Wb(2);r.cc("ngIf",(null==t.error?null:t.error.error)&&t.error.status&&(null==t.errorKeys?null:t.errorKeys.length))}}function h(t,e){if(1&t&&(r.Nb(0,"p"),r.uc(1),r.Mb()),2&t){const t=r.Wb(2);r.xb(1),r.wc(" Status Code : ",t.error.status," ")}}function f(t,e){1&t&&(r.Nb(0,"p"),r.uc(1," Status Code : 00000 "),r.Mb())}function d(t,e){if(1&t&&(r.Nb(0,"p"),r.uc(1),r.Mb()),2&t){const t=r.Wb(2);r.xb(1),r.wc(" Status Text : ",t.error.statusText," ")}}function b(t,e){1&t&&(r.Nb(0,"p"),r.uc(1," Status Text : This is probably a network error or internal server error. Please check your internet connection or restart your browser and try again or refresh the page."),r.Mb())}function p(t,e){if(1&t&&(r.Lb(0),r.Nb(1,"h3"),r.uc(2," An Error has occured "),r.Mb(),r.Nb(3,"p"),r.uc(4),r.Mb(),r.sc(5,i,3,3,"ng-container",1),r.sc(6,c,1,2,"ng-template",null,2,r.tc),r.sc(8,l,1,1,"ng-template",null,3,r.tc),r.sc(10,h,2,1,"p",1),r.sc(11,f,2,0,"ng-template",null,4,r.tc),r.sc(13,d,2,1,"p",1),r.sc(14,b,2,0,"ng-template",null,5,r.tc),r.Kb()),2&t){const t=r.mc(7),e=r.mc(12),n=r.mc(15),s=r.Wb();r.xb(4),r.wc(" Resource : ",s.error.resource," "),r.xb(1),r.cc("ngIf",null==s.error||null==s.error.error?null:s.error.error.message)("ngIfElse",t),r.xb(5),r.cc("ngIf",s.error.status)("ngIfElse",e),r.xb(3),r.cc("ngIf","Unknown Error"!=s.error.statusText)("ngIfElse",n)}}let m=(()=>{class t{constructor(){this.errorKeys=[]}set $error(t){t.error&&(this.errorKeys=Object.keys(t.error),this.error=t)}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Cb({type:t,selectors:[["app-resource-unavailable"]],inputs:{$error:["error","$error"]},decls:1,vars:1,consts:[[4,"ngIf"],[4,"ngIf","ngIfElse"],["fieldErr",""],["otherErr",""],["noStatusCode",""],["noStatusText",""],[4,"ngFor","ngForOf"],[1,"validation-errors"]],template:function(t,e){1&t&&r.sc(0,p,16,7,"ng-container",0),2&t&&r.cc("ngIf",e.error)},directives:[s.l,s.k],styles:[""]}),t})()},inDW:function(t,e,n){"use strict";function r(t){return e=>{let n=Object.keys(t),r=Object.values(t),s=e.value;return""!=s&&n.indexOf(s)<0?{searchError:{value:s,searches:r}}:null}}function s(t){return e=>t.test(e.value)?null:{emailAddress:{value:e.value}}}function i(t){return e=>{let n=Object.keys(t),r=Object.values(t),s=e.value;return n.indexOf(s)<0?{statusError:{value:s,statuses:r}}:null}}function o(){let t=["Student","Department President","Faculty President","Lecturer","Staff","Head of Department","Dean of Faculty","Bursar","Moderator","Administrator","Super Administrator"],e=/moderator|administrator|superAdministrator|hod|deanstudent|departmentPresident|facultyPresident|bursar|lecturer|staff/i;return n=>{let r=n.value;return e.test(r)?{roleError:{value:r,roles:t}}:null}}function c(t){let e=["Student","Department President","Faculty President","Lecturer","Staff","Head of Department","Dean of Faculty","Bursar","Moderator","Administrator","Super Administrator"],n=/moderator|administrator|superAdministrator|hod|deanstudent|departmentPresident|facultyPresident|bursar|lecturer|staff/i;return t=>n.test(t.value)?{forbiddenNames:{value:t.value,names:e}}:null}n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return s})),n.d(e,"e",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"b",(function(){return c}))},mHYI:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("Yvf7"),s=n("Fk62"),i=n("8VHZ"),o=n("rRxT"),c=n("Ub9n");let a=(()=>{class t{}return t.\u0275mod=c.Gb({type:t}),t.\u0275inj=c.Fb({factory:function(e){return new(e||t)},providers:[o.a],imports:[[r.b,i.n,s.e.forChild([])]]}),t})()},oxaT:function(t,e,n){"use strict";n.d(e,"a",(function(){return I}));var r=n("XA6Z"),s=n("EUGn"),i=n("9nlD"),o=n("Ub9n"),c=n("Fk62"),a=n("yjbJ"),u=n("Yvf7"),l=n("+ef2"),h=n("Rxsk"),f=n("TY4h"),d=n("1B5t");function b(t,e){if(1&t&&(o.Nb(0,"h2"),o.uc(1),o.Mb()),2&t){const t=o.Wb();o.xb(1),o.wc(" ",t.title," ")}}function p(t,e){if(1&t&&o.Jb(0,"app-view-description",6),2&t){const t=o.Wb();o.cc("system-type",t.systemType)("view-description",t.view)}}function m(t,e){if(1&t){const t=o.Ob();o.Nb(0,"app-notification-screen",7),o.Ub("finished",(function(){return o.nc(t),o.Wb().removeNotification()})),o.Mb()}if(2&t){const t=o.Wb();o.cc("notified",t.notificationAvailable)("message",t.notificationMessage)}}function g(t,e){if(1&t&&o.Jb(0,"app-resource-unavailable",8),2&t){const t=o.Wb();o.cc("error",t.error)}}function y(t,e){if(1&t&&o.Jb(0,"app-delete-all-entry",12),2&t){const t=o.Wb(2);o.cc("system-type",t.systemType)}}function v(t,e){1&t&&(o.Nb(0,"p"),o.uc(1," Your form is being processed. Please kindly be patient and wait while it completes. "),o.Mb())}function w(t,e){if(1&t){const t=o.Ob();o.Nb(0,"div",9),o.sc(1,y,1,1,"app-delete-all-entry",10),o.Nb(2,"button",11),o.Ub("click",(function(){return o.nc(t),o.Wb().deleteAllEntry()})),o.uc(3," Confirm "),o.Mb(),o.sc(4,v,2,0,"p",1),o.Mb()}if(2&t){const t=o.Wb();o.xb(1),o.cc("ngIf",t.systemType),o.xb(1),o.rc("display",t.fip),o.xb(2),o.cc("ngIf",t.formSubmitted)}}let I=(()=>{class t{constructor(t,e,n,r,s){this.route=t,this.router=e,this.gas=n,this.ems=r,this.ns=s,this.error=!1,this.formSubmitted=!1,this.fip="block",this.canDelete=!1}ngOnInit(){this.gas.$sa=this.$link,this.route.paramMap.pipe(Object(r.a)(t=>this.gas.deleteAllEntry())).subscribe(t=>{if(!t.length)return this.canDelete=!1,this.error=Object.assign({resource:this.systemType+" Entry"},this.ems.message);this.canDelete=!0})}deleteAllEntry(){if(!confirm("Are you sure you want to proceed with this action?"))return!1;this.gas.$systemType=this.systemType,this.gas.$sa=this.$link,this.formSubmitted=!0,this.error=null,this.fip="none",this.gas.$deleteAllEntry().subscribe(t=>t&&t.length?(this.formSubmitted=!1,this.ns.setNotificationStatus(!0),this.ns.addNotification(`Operation is successful and all ${this.systemType} entry is deleted.`),this.$entryChanges({})):(this.formSubmitted=!1,this.fip="block",this.ns.setNotificationStatus(!0),this.ns.addNotification(`Operation is unsuccessful and all ${this.systemType} entry is not deleted.`),this.error=Object.assign({resource:this.systemType+" Entry"},this.ems.message)))}$entryChanges(t){return setTimeout(()=>this.router.navigate(["system","internal",this.link]),5e3)}get notificationAvailable(){return this.ns.notificationStatus()}get notificationMessage(){return this.ns.getNotificationMessage()}removeNotification(){this.ns.removeNotification()}}return t.\u0275fac=function(e){return new(e||t)(o.Ib(c.a),o.Ib(c.b),o.Ib(a.a),o.Ib(s.a),o.Ib(i.a))},t.\u0275cmp=o.Cb({type:t,selectors:[["app-general-all-entry-delete-all"]],inputs:{systemType:["system-type","systemType"],viewWord:["view-word","viewWord"],title:"title",view:"view",link:"link",$link:"$link"},features:[o.wb([i.a,s.a])],decls:6,vars:5,consts:[["id","entry-delete-all"],[4,"ngIf"],[3,"system-type","view-description",4,"ngIf"],[3,"notified","message","finished",4,"ngIf"],[3,"error",4,"ngIf"],["id","entry-detail",4,"ngIf"],[3,"system-type","view-description"],[3,"notified","message","finished"],[3,"error"],["id","entry-detail"],[3,"system-type",4,"ngIf"],["type","submit","id","form-btn-submit",1,"btn-submit",3,"click"],[3,"system-type"]],template:function(t,e){1&t&&(o.Nb(0,"div",0),o.sc(1,b,2,1,"h2",1),o.sc(2,p,1,2,"app-view-description",2),o.sc(3,m,1,2,"app-notification-screen",3),o.sc(4,g,1,1,"app-resource-unavailable",4),o.sc(5,w,5,4,"div",5),o.Mb()),2&t&&(o.xb(1),o.cc("ngIf",e.title),o.xb(1),o.cc("ngIf",e.view),o.xb(1),o.cc("ngIf",e.notificationAvailable),o.xb(1),o.cc("ngIf",e.error),o.xb(1),o.cc("ngIf",e.canDelete))},directives:[u.l,l.a,h.a,f.a,d.a],styles:[""]}),t})()},rRxT:function(t,e,n){"use strict";n.d(e,"a",(function(){return w}));var r=n("FBrc"),s=n("jV/k"),i=n("Ma1o");const o=(()=>{function t(){return Error.call(this),this.message="Timeout has occurred",this.name="TimeoutError",this}return t.prototype=Object.create(Error.prototype),t})();var c=n("34d6"),a=n("7YCk");class u{constructor(t,e,n,r){this.waitFor=t,this.absoluteTimeout=e,this.withObservable=n,this.scheduler=r}call(t,e){return e.subscribe(new l(t,this.absoluteTimeout,this.waitFor,this.withObservable,this.scheduler))}}class l extends a.b{constructor(t,e,n,r,s){super(t),this.absoluteTimeout=e,this.waitFor=n,this.withObservable=r,this.scheduler=s,this.scheduleTimeout()}static dispatchTimeout(t){const{withObservable:e}=t;t._unsubscribeAndRecycle(),t.add(Object(a.c)(e,new a.a(t)))}scheduleTimeout(){const{action:t}=this;t?this.action=t.schedule(this,this.waitFor):this.add(this.action=this.scheduler.schedule(l.dispatchTimeout,this.waitFor,this))}_next(t){this.absoluteTimeout||this.scheduleTimeout(),super._next(t)}_unsubscribe(){this.action=void 0,this.scheduler=null,this.withObservable=null}}var h=n("e6ST"),f=n("oECA"),d=n("O6Zd"),b=n("AuHR"),p=n("WKA6"),m=n("vfyW"),g=n("VcWf"),y=n("Ub9n"),v=n("EUGn");let w=(()=>{class t{constructor(t,e,n){this.apiConfig=t,this.http=e,this.ems=n}uploadImage(t,e){return this.http.post(t.data.url,e,{reportProgress:!0,observe:"events"}).pipe(function(t,e=i.a){return function(t,e,n=i.a){return r=>{let s=Object(c.a)(t),i=s?+t-n.now():Math.abs(t);return r.lift(new u(i,s,e,n))}}(8e4,Object(h.a)(new o),e)}(),Object(f.a)(this.handleError1("Image Entry",null)))}removeImage(t){return this.http.delete(`${this.apiConfig.host}/o/photo/${t}`).pipe(Object(d.a)(t=>({isDeleted:!0})),Object(f.a)(this.handleError("Delete Image",null)))}addImage(t){let e=this.apiConfig.host+"/upload",n={Key:t.key},s={headers:new r.e({"Content-Type":"application/json;charset=UTF-8"})};return this.http.post(e,n,s).pipe(Object(b.a)(2),Object(p.a)(1),Object(f.a)(this.handleError("Image Entry",null)))}signFile(t){let e=`${this.apiConfig.host}/o/sign/photo/${t.name}/`,n={headers:new r.e({"Content-Type":"application/json;charset=UTF-8"}),observe:"body"};return this.http.post(e,{filename:t.name,contentType:t.type},n).pipe(Object(f.a)(this.handleError("Image Upload",null)))}signFile2(t){let e="/api/o/sign/photo/"+t.photo.name+"/",n={headers:new r.e({"Content-Type":"application/json"})};new r.g("POST",e,t.photo,n),this.http.post(e,t.photo,n).pipe(Object(m.a)(t=>{console.log(t)}))}handleError(t="operation",e){return t=>(this.ems.message=t,Object(s.a)(e))}handleError1(t="operation",e){return t=>(this.ems.message=t,t instanceof Object&&t.name&&"TimeoutError"==t.name?Object(s.a)(408):Object(s.a)(e))}}return t.\u0275fac=function(e){return new(e||t)(y.Rb(g.b),y.Rb(r.b),y.Rb(v.a))},t.\u0275prov=y.Eb({token:t,factory:t.\u0275fac}),t})()},yjbJ:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n("jV/k"),s=n("oECA"),i=n("O6Zd"),o=n("VcWf"),c=n("Ub9n"),a=n("FBrc"),u=n("EUGn");let l=(()=>{class t{constructor(t,e,n){this.http=t,this.apiConfig=e,this.ems=n}deleteAllEntry(){return this.http.get(`${this.apiConfig.host}/${this.$sa}/delete/entry/all/`).pipe(Object(s.a)(this.handleError(this.$systemType+" Entry or Entries Delete",[])))}$deleteAllEntry(){return this.http.delete(`${this.apiConfig.host}/${this.$sa}/delete/entry/all/`).pipe(Object(i.a)(t=>({allDeleted:!0})),Object(s.a)(this.handleError(this.$systemType+" Entry or Entries Delete",[])))}handleError(t="operation",e){return t=>(this.ems.message=t,Object(r.a)(e))}}return t.\u0275fac=function(e){return new(e||t)(c.Rb(a.b),c.Rb(o.b),c.Rb(u.a))},t.\u0275prov=c.Eb({token:t,factory:t.\u0275fac}),t})()}}]);