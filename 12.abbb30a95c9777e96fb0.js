(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"+3x0":function(e,r,t){"use strict";t.d(r,"a",(function(){return i}));var n=t("OX4D"),s=t("Ma1o");function i(e,r=s.a){return t=>t.lift(new l(e,r))}class l{constructor(e,r){this.dueTime=e,this.scheduler=r}call(e,r){return r.subscribe(new o(e,this.dueTime,this.scheduler))}}class o extends n.a{constructor(e,r,t){super(e),this.dueTime=r,this.scheduler=t,this.debouncedSubscription=null,this.lastValue=null,this.hasValue=!1}_next(e){this.clearDebounce(),this.lastValue=e,this.hasValue=!0,this.add(this.debouncedSubscription=this.scheduler.schedule(a,this.dueTime,this))}_complete(){this.debouncedNext(),this.destination.complete()}debouncedNext(){if(this.clearDebounce(),this.hasValue){const{lastValue:e}=this;this.lastValue=null,this.hasValue=!1,this.destination.next(e)}}clearDebounce(){const e=this.debouncedSubscription;null!==e&&(this.remove(e),e.unsubscribe(),this.debouncedSubscription=null)}}function a(e){e.debouncedNext()}},"34d6":function(e,r,t){"use strict";function n(e){return e instanceof Date&&!isNaN(+e)}t.d(r,"a",(function(){return n}))},Ma1o:function(e,r,t){"use strict";t.d(r,"a",(function(){return a}));var n=t("ry98");class s extends n.a{constructor(e,r){super()}schedule(e,r=0){return this}}class i extends s{constructor(e,r){super(e,r),this.scheduler=e,this.work=r,this.pending=!1}schedule(e,r=0){if(this.closed)return this;this.state=e;const t=this.id,n=this.scheduler;return null!=t&&(this.id=this.recycleAsyncId(n,t,r)),this.pending=!0,this.delay=r,this.id=this.id||this.requestAsyncId(n,this.id,r),this}requestAsyncId(e,r,t=0){return setInterval(e.flush.bind(e,this),t)}recycleAsyncId(e,r,t=0){if(null!==t&&this.delay===t&&!1===this.pending)return r;clearInterval(r)}execute(e,r){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const t=this._execute(e,r);if(t)return t;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(e,r){let t=!1,n=void 0;try{this.work(e)}catch(s){t=!0,n=!!s&&s||new Error(s)}if(t)return this.unsubscribe(),n}_unsubscribe(){const e=this.id,r=this.scheduler,t=r.actions,n=t.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==n&&t.splice(n,1),null!=e&&(this.id=this.recycleAsyncId(r,e,null)),this.delay=null}}let l=(()=>{class e{constructor(r,t=e.now){this.SchedulerAction=r,this.now=t}schedule(e,r=0,t){return new this.SchedulerAction(this,e).schedule(t,r)}}return e.now=()=>Date.now(),e})();class o extends l{constructor(e,r=l.now){super(e,()=>o.delegate&&o.delegate!==this?o.delegate.now():r()),this.actions=[],this.active=!1,this.scheduled=void 0}schedule(e,r=0,t){return o.delegate&&o.delegate!==this?o.delegate.schedule(e,r,t):super.schedule(e,r,t)}flush(e){const{actions:r}=this;if(this.active)return void r.push(e);let t;this.active=!0;do{if(t=e.execute(e.state,e.delay))break}while(e=r.shift());if(this.active=!1,t){for(;e=r.shift();)e.unsubscribe();throw t}}}const a=new o(i)},OpKh:function(e,r,t){"use strict";t.r(r),t.d(r,"AuthenticationModule",(function(){return er}));var n=t("Yvf7"),s=t("8VHZ"),i=t("hxwH"),l=t("Fk62"),o=t("Ub9n");function a(e){return r=>e.test(r.value)?null:{emailAddress:{value:r.value}}}var c=t("9Ku7");function u(e,r){1&e&&(o.Nb(0,"li"),o.uc(1," Email Address should be provided and cannot be empty "),o.Mb())}function d(e,r){1&e&&(o.Nb(0,"li"),o.uc(1," Email Address cannot be less than 8 characters in length "),o.Mb())}function b(e,r){1&e&&(o.Nb(0,"li"),o.uc(1," Email Address cannot be greater than 50 characters in length "),o.Mb())}function m(e,r){1&e&&(o.Nb(0,"li"),o.uc(1," Email Address must be valid and should conform to standards for example david@gmail.com "),o.Mb())}function h(e,r){if(1&e&&(o.Nb(0,"div",10),o.Nb(1,"ul"),o.Nb(2,"p"),o.sc(3,u,2,0,"li",11),o.sc(4,d,2,0,"li",11),o.sc(5,b,2,0,"li",11),o.sc(6,m,2,0,"li",11),o.Mb(),o.Mb(),o.Mb()),2&e){const e=o.Wb();o.xb(3),o.cc("ngIf",null==e.emailAddress.errors?null:e.emailAddress.errors.required),o.xb(1),o.cc("ngIf",(null==e.emailAddress.errors?null:e.emailAddress.errors.required)||(null==e.emailAddress.errors?null:e.emailAddress.errors.minlength)),o.xb(1),o.cc("ngIf",(null==e.emailAddress.errors?null:e.emailAddress.errors.required)||(null==e.emailAddress.errors?null:e.emailAddress.errors.maxlength)),o.xb(1),o.cc("ngIf",(null==e.emailAddress.errors?null:e.emailAddress.errors.required)||(null==e.emailAddress.errors?null:e.emailAddress.errors.emailAddress))}}function f(e,r){1&e&&(o.Nb(0,"li"),o.uc(1," Password should be provided and cannot be empty "),o.Mb())}function p(e,r){1&e&&(o.Nb(0,"li"),o.uc(1," Password cannot be less than 7 characters in length "),o.Mb())}function g(e,r){1&e&&(o.Nb(0,"li"),o.uc(1," Password cannot be greater than 35 characters in length "),o.Mb())}function N(e,r){if(1&e&&(o.Nb(0,"div",10),o.Nb(1,"ul"),o.Nb(2,"p"),o.sc(3,f,2,0,"li",11),o.sc(4,p,2,0,"li",11),o.sc(5,g,2,0,"li",11),o.Mb(),o.Mb(),o.Mb()),2&e){const e=o.Wb();o.xb(3),o.cc("ngIf",null==e.password.errors?null:e.password.errors.required),o.xb(1),o.cc("ngIf",(null==e.password.errors?null:e.password.errors.required)||(null==e.password.errors?null:e.password.errors.minlength)),o.xb(1),o.cc("ngIf",(null==e.password.errors?null:e.password.errors.required)||(null==e.password.errors?null:e.password.errors.maxlength))}}const v=function(e,r){return{disabled:e,"btn-submit":r}};let y=(()=>{class e{constructor(e,r){this.as=e,this.fb=r,this.description="All members of the system are required to signin before they can complete or perform any action or task.",this.title="Sign In",this.signInForm=this.fb.group({emailAddress:["",{validators:[s.q.required,s.q.minLength(5),s.q.maxLength(50),a(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]}],password:["",{validators:[s.q.required,s.q.minLength(8),s.q.maxLength(35)]}]})}ngOnInit(){}get emailAddress(){return this.signInForm.get("emailAddress")}get password(){return this.signInForm.get("password")}get isFormValid(){return this.signInForm.valid}onSubmitSignIn(e){this.as.signIn(e)}}return e.\u0275fac=function(r){return new(r||e)(o.Ib(c.a),o.Ib(s.b))},e.\u0275cmp=o.Cb({type:e,selectors:[["app-sign-in"]],decls:19,vars:11,consts:[["id","entry-create"],[1,"description"],["action","","method","post","enctype","application/x-www-form-urlencoded",3,"formGroup","ngSubmit"],[1,"form-group"],["for","emailAddress",1,"form-label","bold"],["type","text","id","emailAddress","name","emailAddress","placeholder","david@example.com","required","required","formControlName","emailAddress",1,"form-control"],["class","validation-error",4,"ngIf"],["for","password",1,"form-label","bold"],["type","password","id","password","name","password","placeholder","************","required","required","formControlName","password",1,"form-control"],["type","submit","id","form-btn-submit",3,"disabled"],[1,"validation-error"],[4,"ngIf"]],template:function(e,r){1&e&&(o.Nb(0,"div",0),o.Nb(1,"h2"),o.uc(2),o.Mb(),o.Nb(3,"div",1),o.Nb(4,"p"),o.uc(5),o.Mb(),o.Mb(),o.Nb(6,"form",2),o.Ub("ngSubmit",(function(){return r.onSubmitSignIn(r.signInForm.value)})),o.Nb(7,"div",3),o.Nb(8,"label",4),o.uc(9," Email Address * : "),o.Mb(),o.Jb(10,"input",5),o.sc(11,h,7,4,"div",6),o.Mb(),o.Nb(12,"div",3),o.Nb(13,"label",7),o.uc(14," Password * : "),o.Mb(),o.Jb(15,"input",8),o.sc(16,N,6,3,"div",6),o.Mb(),o.Nb(17,"button",9),o.uc(18," Submit "),o.Mb(),o.Mb(),o.Mb()),2&e&&(o.xb(2),o.wc(" ",r.title," "),o.xb(3),o.vc(r.description),o.xb(1),o.cc("formGroup",r.signInForm),o.xb(5),o.cc("ngIf",r.emailAddress.invalid&&(r.emailAddress.touched||r.emailAddress.dirty)),o.xb(5),o.cc("ngIf",r.password.invalid&&(r.password.touched||r.password.dirty)),o.xb(1),o.zb(o.ic(8,v,!r.isFormValid,r.isFormValid)),o.cc("disabled",!r.signInForm.valid))},directives:[s.s,s.l,s.f,s.a,s.o,s.k,s.e,n.l],styles:[""]}),e})();var x=t("FBrc"),M=t("VcWf");class w{constructor(e=[],r=[],t=[],n=[]){this.departments=e,this.faculties=r,this.levels=t,this.countries=n}}function I(e){return r=>e.test(r.value)?{forbiddenNames:{value:r.value}}:null}var q=t("jV/k"),A=t("O6Zd"),O=t("oECA");let F=(()=>{class e{constructor(){}validate(e){return Object(q.a)(null).pipe(Object(A.a)(e=>e))}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=o.Eb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var L=t("vfyW"),S=t("+3x0"),C=t("S5zL"),U=t("WKA6"),k=t("XRyL"),E=t("XA6Z");let W=(()=>{class e{constructor(e,r,t){this.apiConfig=e,this.authenticationService=r,this.http=t}validate(e){let r=`${this.apiConfig.host}/authenticate/username/${e.value}`,t={headers:new x.e({"Content-Type":"application/json"})};return this.http.get(r,t).pipe(Object(L.a)(e=>console.log(e)))}}return e.\u0275fac=function(r){return new(r||e)(o.Rb(M.b),o.Rb(c.a),o.Rb(x.b))},e.\u0275prov=o.Eb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function j(e,r,t,n){return e=>{let t=`${n.host}/authenticate/emailaddress/${e.value}`;return e.valueChanges.pipe(Object(S.a)(500),Object(C.a)(),Object(U.a)(1),Object(k.a)(5e3),Object(E.a)(e=>r.get(t)),Object(A.a)(r=>r?{emailAddressService:{value:e.value}}:null),Object(O.a)(e=>Object(q.a)(null)))}}var V=t("MWCo"),_=t("TY4h");function K(e,r){if(1&e&&o.Jb(0,"app-resource-unavailable",24),2&e){const e=o.Wb();o.cc("error",e.error)}}function J(e,r){1&e&&(o.Nb(0,"li"),o.uc(1," First Name and Last Name cannot be equal "),o.Mb())}function T(e,r){if(1&e&&(o.Nb(0,"div"),o.Nb(1,"ul"),o.sc(2,J,2,0,"li",3),o.Mb(),o.Mb()),2&e){const e=o.Wb();o.xb(2),o.cc("ngIf",e.signUpForm.errors&&e.signUpForm.errors.bothNames)}}function $(e,r){1&e&&(o.Nb(0,"li"),o.uc(1," First Name should be provided and cannot be empty "),o.Mb())}function D(e,r){1&e&&(o.Nb(0,"li"),o.uc(1," First Name cannot be less than 2 characters in length "),o.Mb())}function P(e,r){1&e&&(o.Nb(0,"li"),o.uc(1," First Name cannot be greater than 20 characters in length "),o.Mb())}function z(e,r){1&e&&(o.Nb(0,"li"),o.uc(1," First Name cannot be either moderator , administrator or superAdministrator "),o.Mb())}function G(e,r){if(1&e&&(o.Nb(0,"div",25),o.Nb(1,"ul"),o.Nb(2,"p"),o.sc(3,$,2,0,"li",3),o.sc(4,D,2,0,"li",3),o.sc(5,P,2,0,"li",3),o.sc(6,z,2,0,"li",3),o.Mb(),o.Mb(),o.Mb()),2&e){const e=o.Wb();o.xb(3),o.cc("ngIf",null==e.firstName.errors?null:e.firstName.errors.required),o.xb(1),o.cc("ngIf",(null==e.firstName.errors?null:e.firstName.errors.required)||(null==e.firstName.errors?null:e.firstName.errors.minlength)),o.xb(1),o.cc("ngIf",(null==e.firstName.errors?null:e.firstName.errors.required)||(null==e.firstName.errors?null:e.firstName.errors.maxlength)),o.xb(1),o.cc("ngIf",(null==e.firstName.errors?null:e.firstName.errors.required)||(null==e.firstName.errors?null:e.firstName.errors.forbiddenNames))}}function R(e,r){1&e&&(o.Nb(0,"li"),o.uc(1," Last Name should be provided and cannot be empty "),o.Mb())}function X(e,r){1&e&&(o.Nb(0,"li"),o.uc(1," Last Name cannot be less than 2 characters in length "),o.Mb())}function Y(e,r){1&e&&(o.Nb(0,"li"),o.uc(1," Last Name cannot be greater than 20 characters in length "),o.Mb())}function B(e,r){1&e&&(o.Nb(0,"li"),o.uc(1," Last Name cannot be either moderator , administrator or superAdministrator "),o.Mb())}function Z(e,r){if(1&e&&(o.Nb(0,"div",25),o.Nb(1,"ul"),o.Nb(2,"p"),o.sc(3,R,2,0,"li",3),o.sc(4,X,2,0,"li",3),o.sc(5,Y,2,0,"li",3),o.sc(6,B,2,0,"li",3),o.Mb(),o.Mb(),o.Mb()),2&e){const e=o.Wb();o.xb(3),o.cc("ngIf",null==e.lastName.errors?null:e.lastName.errors.required),o.xb(1),o.cc("ngIf",(null==e.lastName.errors?null:e.lastName.errors.required)||(null==e.lastName.errors?null:e.lastName.errors.minlength)),o.xb(1),o.cc("ngIf",(null==e.lastName.errors?null:e.lastName.errors.required)||(null==e.lastName.errors?null:e.lastName.errors.maxlength)),o.xb(1),o.cc("ngIf",(null==e.lastName.errors?null:e.lastName.errors.required)||(null==e.lastName.errors?null:e.lastName.errors.forbiddenNames))}}function H(e,r){1&e&&(o.Nb(0,"ul",26),o.Nb(1,"li"),o.uc(2,"Confirming Username from the records"),o.Mb(),o.Mb())}function Q(e,r){1&e&&(o.Nb(0,"li"),o.uc(1," Username should be provided and cannot be empty "),o.Mb())}function ee(e,r){1&e&&(o.Nb(0,"li"),o.uc(1," Username cannot be less than 3 characters in length "),o.Mb())}function re(e,r){1&e&&(o.Nb(0,"li"),o.uc(1," Username cannot be greater than 20 characters in length "),o.Mb())}function te(e,r){1&e&&(o.Nb(0,"li"),o.uc(1," Username cannot be either moderator , administrator or superAdministrator "),o.Mb())}function ne(e,r){1&e&&(o.Nb(0,"li"),o.uc(1," Username cannot be used at the moment because it is already taken by another user "),o.Mb())}function se(e,r){if(1&e&&(o.Nb(0,"div",25),o.Nb(1,"ul"),o.Nb(2,"p"),o.sc(3,Q,2,0,"li",3),o.sc(4,ee,2,0,"li",3),o.sc(5,re,2,0,"li",3),o.sc(6,te,2,0,"li",3),o.sc(7,ne,2,0,"li",3),o.Mb(),o.Mb(),o.Mb()),2&e){const e=o.Wb();o.xb(3),o.cc("ngIf",null==e.username.errors?null:e.username.errors.required),o.xb(1),o.cc("ngIf",(null==e.username.errors?null:e.username.errors.required)||(null==e.username.errors?null:e.username.errors.minlength)),o.xb(1),o.cc("ngIf",(null==e.username.errors?null:e.username.errors.required)||(null==e.username.errors?null:e.username.errors.maxlength)),o.xb(1),o.cc("ngIf",(null==e.username.errors?null:e.username.errors.required)||(null==e.username.errors?null:e.username.errors.forbiddenNames)),o.xb(1),o.cc("ngIf",(null==e.username.errors?null:e.username.errors.required)||(null==e.username.errors?null:e.username.errors.userNameService))}}function ie(e,r){1&e&&(o.Nb(0,"ul",26),o.Nb(1,"li"),o.uc(2,"Confirming Email Address from the records"),o.Mb(),o.Mb())}function le(e,r){1&e&&(o.Nb(0,"li"),o.uc(1," Email Address should be provided and cannot be empty "),o.Mb())}function oe(e,r){1&e&&(o.Nb(0,"li"),o.uc(1," Email Address cannot be less than 8 characters in length "),o.Mb())}function ae(e,r){1&e&&(o.Nb(0,"li"),o.uc(1," Email Address cannot be greater than 50 characters in length "),o.Mb())}function ce(e,r){1&e&&(o.Nb(0,"li"),o.uc(1," Email Address must be valid and should conform to standards for example david@gmail.com "),o.Mb())}function ue(e,r){1&e&&(o.Nb(0,"li"),o.uc(1," Email Address cannot be used at the moment because it is already taken by another user "),o.Mb())}function de(e,r){if(1&e&&(o.Nb(0,"div",25),o.Nb(1,"ul"),o.Nb(2,"p"),o.sc(3,le,2,0,"li",3),o.sc(4,oe,2,0,"li",3),o.sc(5,ae,2,0,"li",3),o.sc(6,ce,2,0,"li",3),o.sc(7,ue,2,0,"li",3),o.Mb(),o.Mb(),o.Mb()),2&e){const e=o.Wb();o.xb(3),o.cc("ngIf",null==e.emailAddress.errors?null:e.emailAddress.errors.required),o.xb(1),o.cc("ngIf",(null==e.emailAddress.errors?null:e.emailAddress.errors.required)||(null==e.emailAddress.errors?null:e.emailAddress.errors.minlength)),o.xb(1),o.cc("ngIf",(null==e.emailAddress.errors?null:e.emailAddress.errors.required)||(null==e.emailAddress.errors?null:e.emailAddress.errors.maxlength)),o.xb(1),o.cc("ngIf",(null==e.emailAddress.errors?null:e.emailAddress.errors.required)||(null==e.emailAddress.errors?null:e.emailAddress.errors.emailAddress)),o.xb(1),o.cc("ngIf",null==e.emailAddress.errors?null:e.emailAddress.errors.emailAddressService)}}function be(e,r){if(1&e&&(o.Nb(0,"option",29),o.uc(1),o.Mb()),2&e){const e=r.$implicit;o.cc("value",e._id),o.xb(1),o.wc(" ",e._id," ")}}function me(e,r){1&e&&(o.Nb(0,"li"),o.uc(1," Department should be provided and cannot be empty "),o.Mb())}function he(e,r){1&e&&(o.Nb(0,"li"),o.uc(1," Department cannot be less than 2 characters in length "),o.Mb())}function fe(e,r){1&e&&(o.Nb(0,"li"),o.uc(1," Department cannot be greater than 150 characters in length "),o.Mb())}function pe(e,r){if(1&e&&(o.Nb(0,"div",25),o.Nb(1,"ul"),o.Nb(2,"p"),o.sc(3,me,2,0,"li",3),o.sc(4,he,2,0,"li",3),o.sc(5,fe,2,0,"li",3),o.Mb(),o.Mb(),o.Mb()),2&e){const e=o.Wb(2);o.xb(3),o.cc("ngIf",null==e.department.errors?null:e.department.errors.required),o.xb(1),o.cc("ngIf",(null==e.department.errors?null:e.department.errors.required)||(null==e.department.errors?null:e.department.errors.minlength)),o.xb(1),o.cc("ngIf",(null==e.department.errors?null:e.department.errors.required)||(null==e.department.errors?null:e.department.errors.maxlength))}}function ge(e,r){if(1&e&&(o.Lb(0),o.Nb(1,"div",4),o.Nb(2,"label",27),o.uc(3," Department * : "),o.Mb(),o.Nb(4,"select",28),o.Jb(5,"option",29),o.sc(6,be,2,2,"option",30),o.Mb(),o.sc(7,pe,6,3,"div",7),o.Mb(),o.Kb()),2&e){const e=o.Wb();o.xb(6),o.cc("ngForOf",e.userOthers.departments),o.xb(1),o.cc("ngIf",e.department.invalid&&(e.department.touched||e.department.dirty))}}function Ne(e,r){if(1&e&&(o.Nb(0,"option",29),o.uc(1),o.Mb()),2&e){const e=r.$implicit;o.cc("value",e._id),o.xb(1),o.wc(" ",e._id," ")}}function ve(e,r){1&e&&(o.Nb(0,"li"),o.uc(1," Faculty should be provided and cannot be empty "),o.Mb())}function ye(e,r){1&e&&(o.Nb(0,"li"),o.uc(1," Faculty cannot be less than 2 characters in length "),o.Mb())}function xe(e,r){1&e&&(o.Nb(0,"li"),o.uc(1," Faculty cannot be greater than 150 characters in length "),o.Mb())}function Me(e,r){if(1&e&&(o.Nb(0,"div",25),o.Nb(1,"ul"),o.Nb(2,"p"),o.sc(3,ve,2,0,"li",3),o.sc(4,ye,2,0,"li",3),o.sc(5,xe,2,0,"li",3),o.Mb(),o.Mb(),o.Mb()),2&e){const e=o.Wb(2);o.xb(3),o.cc("ngIf",null==e.faculty.errors?null:e.faculty.errors.required),o.xb(1),o.cc("ngIf",(null==e.faculty.errors?null:e.faculty.errors.required)||(null==e.faculty.errors?null:e.faculty.errors.minlength)),o.xb(1),o.cc("ngIf",(null==e.faculty.errors?null:e.faculty.errors.required)||(null==e.faculty.errors?null:e.faculty.errors.maxlength))}}function we(e,r){if(1&e&&(o.Lb(0),o.Nb(1,"div",4),o.Nb(2,"label",31),o.uc(3," Faculty * : "),o.Mb(),o.Nb(4,"select",32),o.Jb(5,"option",29),o.sc(6,Ne,2,2,"option",30),o.Mb(),o.sc(7,Me,6,3,"div",7),o.Mb(),o.Kb()),2&e){const e=o.Wb();o.xb(6),o.cc("ngForOf",e.userOthers.faculties),o.xb(1),o.cc("ngIf",e.faculty.invalid&&(e.faculty.touched||e.faculty.dirty))}}function Ie(e,r){if(1&e&&(o.Nb(0,"option",29),o.uc(1),o.Mb()),2&e){const e=r.$implicit;o.cc("value",e._id),o.xb(1),o.wc(" ",e._id," ")}}function qe(e,r){1&e&&(o.Nb(0,"li"),o.uc(1," Level should be provided and cannot be empty "),o.Mb())}function Ae(e,r){1&e&&(o.Nb(0,"li"),o.uc(1," Level cannot be less than 2 characters in length "),o.Mb())}function Oe(e,r){1&e&&(o.Nb(0,"li"),o.uc(1," Level cannot be greater than 50 characters in length "),o.Mb())}function Fe(e,r){if(1&e&&(o.Nb(0,"div",25),o.Nb(1,"ul"),o.Nb(2,"p"),o.sc(3,qe,2,0,"li",3),o.sc(4,Ae,2,0,"li",3),o.sc(5,Oe,2,0,"li",3),o.Mb(),o.Mb(),o.Mb()),2&e){const e=o.Wb(2);o.xb(3),o.cc("ngIf",null==e.level.errors?null:e.level.errors.required),o.xb(1),o.cc("ngIf",(null==e.level.errors?null:e.level.errors.required)||(null==e.level.errors?null:e.level.errors.minlength)),o.xb(1),o.cc("ngIf",(null==e.level.errors?null:e.level.errors.required)||(null==e.level.errors?null:e.level.errors.maxlength))}}function Le(e,r){if(1&e&&(o.Lb(0),o.Nb(1,"div",4),o.Nb(2,"label",33),o.uc(3," Level * : "),o.Mb(),o.Nb(4,"select",34),o.Jb(5,"option",29),o.sc(6,Ie,2,2,"option",30),o.Mb(),o.sc(7,Fe,6,3,"div",7),o.Mb(),o.Kb()),2&e){const e=o.Wb();o.xb(6),o.cc("ngForOf",e.userOthers.levels),o.xb(1),o.cc("ngIf",e.level.invalid&&(e.level.touched||e.level.dirty))}}function Se(e,r){if(1&e&&(o.Nb(0,"option",29),o.uc(1),o.Mb()),2&e){const e=r.$implicit;o.cc("value",e._id),o.xb(1),o.wc(" ",e._id," ")}}function Ce(e,r){1&e&&(o.Nb(0,"li"),o.uc(1," Country should be provided and cannot be empty "),o.Mb())}function Ue(e,r){1&e&&(o.Nb(0,"li"),o.uc(1," Country cannot be less than 2 characters in length "),o.Mb())}function ke(e,r){1&e&&(o.Nb(0,"li"),o.uc(1," Country cannot be greater than 50 characters in length "),o.Mb())}function Ee(e,r){if(1&e&&(o.Nb(0,"div",25),o.Nb(1,"ul"),o.Nb(2,"p"),o.sc(3,Ce,2,0,"li",3),o.sc(4,Ue,2,0,"li",3),o.sc(5,ke,2,0,"li",3),o.Mb(),o.Mb(),o.Mb()),2&e){const e=o.Wb(2);o.xb(3),o.cc("ngIf",null==e.country.errors?null:e.country.errors.required),o.xb(1),o.cc("ngIf",(null==e.country.errors?null:e.country.errors.required)||(null==e.country.errors?null:e.country.errors.minlength)),o.xb(1),o.cc("ngIf",(null==e.country.errors?null:e.country.errors.required)||(null==e.country.errors?null:e.country.errors.maxlength))}}function We(e,r){if(1&e&&(o.Lb(0),o.Nb(1,"div",4),o.Nb(2,"label",35),o.uc(3," Country * : "),o.Mb(),o.Nb(4,"select",36),o.Jb(5,"option",29),o.sc(6,Se,2,2,"option",30),o.Mb(),o.sc(7,Ee,6,3,"div",7),o.Mb(),o.Kb()),2&e){const e=o.Wb();o.xb(6),o.cc("ngForOf",e.userOthers.countries),o.xb(1),o.cc("ngIf",e.country.invalid&&(e.country.touched||e.country.dirty))}}function je(e,r){1&e&&(o.Nb(0,"li"),o.uc(1," Password should be provided and cannot be empty "),o.Mb())}function Ve(e,r){1&e&&(o.Nb(0,"li"),o.uc(1," Password cannot be less than 7 characters in length "),o.Mb())}function _e(e,r){1&e&&(o.Nb(0,"li"),o.uc(1," Password cannot be greater than 35 characters in length "),o.Mb())}function Ke(e,r){1&e&&(o.Nb(0,"li"),o.uc(1," Password is too simple and will not be allowed in this system. Please pick another one "),o.Mb())}function Je(e,r){if(1&e&&(o.Nb(0,"div",25),o.Nb(1,"ul"),o.Nb(2,"p"),o.sc(3,je,2,0,"li",3),o.sc(4,Ve,2,0,"li",3),o.sc(5,_e,2,0,"li",3),o.sc(6,Ke,2,0,"li",3),o.Mb(),o.Mb(),o.Mb()),2&e){const e=o.Wb();o.xb(3),o.cc("ngIf",null==e.password.errors?null:e.password.errors.required),o.xb(1),o.cc("ngIf",(null==e.password.errors?null:e.password.errors.required)||(null==e.password.errors?null:e.password.errors.minlength)),o.xb(1),o.cc("ngIf",(null==e.password.errors?null:e.password.errors.required)||(null==e.password.errors?null:e.password.errors.maxlength)),o.xb(1),o.cc("ngIf",null==e.password.errors?null:e.password.errors.simplePassword)}}function Te(e,r){1&e&&(o.Nb(0,"li"),o.uc(1," Identity Number should be provided and cannot be empty "),o.Mb())}function $e(e,r){1&e&&(o.Nb(0,"li"),o.uc(1," Identity Number cannot be greater than 30 characters in length "),o.Mb())}function De(e,r){if(1&e&&(o.Nb(0,"div",25),o.Nb(1,"ul"),o.Nb(2,"p"),o.sc(3,Te,2,0,"li",3),o.sc(4,$e,2,0,"li",3),o.Mb(),o.Mb(),o.Mb()),2&e){const e=o.Wb();o.xb(3),o.cc("ngIf",null==e.identityNumber.errors?null:e.identityNumber.errors.required),o.xb(1),o.cc("ngIf",(null==e.identityNumber.errors?null:e.identityNumber.errors.required)||(null==e.identityNumber.errors?null:e.identityNumber.errors.maxlength))}}function Pe(e,r){1&e&&(o.Nb(0,"li"),o.uc(1," Matriculation Number should be provided and cannot be empty "),o.Mb())}function ze(e,r){1&e&&(o.Nb(0,"li"),o.uc(1," Matriculation Number cannot be greater than 30 characters in length "),o.Mb())}function Ge(e,r){if(1&e&&(o.Nb(0,"div",25),o.Nb(1,"ul"),o.Nb(2,"p"),o.sc(3,Pe,2,0,"li",3),o.sc(4,ze,2,0,"li",3),o.Mb(),o.Mb(),o.Mb()),2&e){const e=o.Wb();o.xb(3),o.cc("ngIf",null==e.matriculationNumber.errors?null:e.matriculationNumber.errors.required),o.xb(1),o.cc("ngIf",(null==e.matriculationNumber.errors?null:e.matriculationNumber.errors.required)||(null==e.matriculationNumber.errors?null:e.matriculationNumber.errors.maxlength))}}function Re(e,r){1&e&&(o.Nb(0,"li"),o.uc(1," About should be provided and cannot be empty "),o.Mb())}function Xe(e,r){1&e&&(o.Nb(0,"li"),o.uc(1," About cannot be less than 10 characters in length "),o.Mb())}function Ye(e,r){1&e&&(o.Nb(0,"li"),o.uc(1," About cannot be greater than 300 characters in length "),o.Mb())}function Be(e,r){if(1&e&&(o.Nb(0,"div",25),o.Nb(1,"ul"),o.Nb(2,"p"),o.sc(3,Re,2,0,"li",3),o.sc(4,Xe,2,0,"li",3),o.sc(5,Ye,2,0,"li",3),o.Mb(),o.Mb(),o.Mb()),2&e){const e=o.Wb();o.xb(3),o.cc("ngIf",null==e.about.errors?null:e.about.errors.required),o.xb(1),o.cc("ngIf",(null==e.about.errors?null:e.about.errors.required)||(null==e.about.errors?null:e.about.errors.minlength)),o.xb(1),o.cc("ngIf",(null==e.about.errors?null:e.about.errors.required)||(null==e.about.errors?null:e.about.errors.maxlength))}}const Ze=function(e,r){return{disabled:e,"btn-submit":r}},He=[{path:"signin",component:y,data:{animation:"signin"}},{path:"signup",component:(()=>{class e{constructor(e,r,t,n,s,i,l,o){this.authService=e,this.dataService=r,this.formBuilder=t,this.verifyUsernameValidator=n,this.verifyEmailAddressValidator=s,this.http=i,this.apiConfig=l,this.router=o,this.title="Sign Up"}ngOnInit(){var e,r;this.dataService.createUser().subscribe(e=>{this.userOthers=new w(e.Department,e.Faculty,e.Level,e.Country)}),this.signUpForm=this.formBuilder.group({firstName:["",{validators:[s.q.required,s.q.minLength(2),s.q.maxLength(20),I(/moderator|administrator|superAdministrator/i)],updateOn:"blur"}],lastName:["",{validators:[s.q.required,s.q.minLength(2),s.q.maxLength(20),I(/moderator|administrator|superAdministrator/i)],updateOn:"blur"}],username:["",{validators:[s.q.required,s.q.minLength(3),s.q.maxLength(20),I(/moderator|administrator|superAdministrator/i)],asyncValidators:[(e=this.http,r=this.apiConfig,t=>e.get(`${r.host}/authenticate/username/${t.value}`).pipe(Object(A.a)(e=>e?{userNameService:{value:t.value}}:null),Object(O.a)(e=>Object(q.a)(null)))).bind(this)],updateOn:"blur"}],emailAddress:["",{validators:[s.q.required,s.q.minLength(8),s.q.maxLength(50),a(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/),I(/moderator|administrator|superAdministrator/i)],asyncValidators:[j(0,this.http,0,this.apiConfig).bind(this)],updateOn:"blur"}],department:["",{validators:[s.q.required,s.q.minLength(2),s.q.maxLength(150)],updateOn:"blur"}],faculty:["",{validators:[s.q.required,s.q.minLength(2),s.q.maxLength(150)],updateOn:"blur"}],level:["",{validators:[s.q.required,s.q.minLength(2),s.q.maxLength(50)],updateOn:"blur"}],country:["",{validators:[s.q.required,s.q.minLength(2),s.q.maxLength(50)],updateOn:"blur"}],password:["",{validators:[s.q.required,s.q.minLength(7),s.q.maxLength(35),e=>["123456789","1234567890","12345"].indexOf(""+e.value)>=0?{simplePassword:{value:e.value}}:null],updateOn:"blur"}],identityNumber:["",[s.q.maxLength(30)]],matriculationNumber:["",[s.q.maxLength(30)]],about:["",[s.q.minLength(10),s.q.maxLength(300)]]},{validators:e=>{const r=e.get("firstName"),t=e.get("lastName");return r&&t&&r.value==t.value?{bothNames:{value:r.value+t.value}}:null}})}onSubmitSignUp(e){this.dataService.signUp(e).subscribe(e=>{this.authService.saveToken(e),this.router.navigate(["/"])},e=>(this.error=Object.assign(Object.assign({},e),{resource:e.resource}),window.scrollTo(0,0)))}get firstName(){return this.signUpForm.get("firstName")}get lastName(){return this.signUpForm.get("lastName")}get username(){return this.signUpForm.get("username")}get emailAddress(){return this.signUpForm.get("emailAddress")}get department(){return this.signUpForm.get("department")}get faculty(){return this.signUpForm.get("faculty")}get level(){return this.signUpForm.get("level")}get country(){return this.signUpForm.get("country")}get password(){return this.signUpForm.get("password")}get identityNumber(){return this.signUpForm.get("identityNumber")}get matriculationNumber(){return this.signUpForm.get("matriculationNumber")}get about(){return this.signUpForm.get("about")}get isFormValid(){return this.signUpForm.valid}}return e.\u0275fac=function(r){return new(r||e)(o.Ib(c.a),o.Ib(V.a),o.Ib(s.b),o.Ib(F),o.Ib(W),o.Ib(x.b),o.Ib(M.b),o.Ib(l.b))},e.\u0275cmp=o.Cb({type:e,selectors:[["app-sign-up"]],decls:54,vars:24,consts:[["id","entry-create"],[3,"error",4,"ngIf"],["action","","method","post","enctype","application/x-www-form-urlencoded",3,"formGroup","ngSubmit"],[4,"ngIf"],[1,"form-group"],["for","firstName",1,"form-label","bold"],["type","text","id","firstName","name","firstName","placeholder","David","required","required","minlength","4","formControlName","firstName",1,"form-control"],["class","validation-error",4,"ngIf"],["for","lastName",1,"form-label","bold"],["type","text","id","lastName","name","lastName","placeholder","Mark","required","required","formControlName","lastName",1,"form-control"],["for","username",1,"form-label","bold"],["type","text","id","username","name","username","placeholder","dave","required","required","formControlName","username",1,"form-control"],["class","validation",4,"ngIf"],["for","emailAddress",1,"form-label","bold"],["type","text","id","emailAddress","name","emailAddress","placeholder","david@example.com","required","required","formControlName","emailAddress",1,"form-control"],["for","password",1,"form-label","bold"],["type","password","id","password","name","password","placeholder","***********","required","required","formControlName","password",1,"form-control"],["for","identityNumber",1,"form-label","bold"],["type","text","id","identityNumber","name","identityNumber","placeholder","M1503186","required","required","formControlName","identityNumber",1,"form-control"],["for","matriculationNumber",1,"form-label","bold"],["type","text","id","matriculationNumber","name","matriculationNumber","placeholder","2015/1/57261","required","required","formControlName","matriculationNumber",1,"form-control"],["for","about",1,"form-label","bold"],["type","text","id","about","name","about","placeholder","I am a student","required","required","formControlName","about",1,"form-control"],["type","submit","id","form-btn-submit",3,"disabled"],[3,"error"],[1,"validation-error"],[1,"validation"],["for","department",1,"form-label","bold"],["name","department","id","department","formControlName","department",1,"form-control"],[3,"value"],[3,"value",4,"ngFor","ngForOf"],["for","faculty",1,"form-label","bold"],["name","faculty","id","faculty","formControlName","faculty",1,"form-control"],["for","level",1,"form-label","bold"],["name","level","id","level","formControlName","level",1,"form-control"],["for","country",1,"form-label","bold"],["name","country","id","country","formControlName","country",1,"form-control"]],template:function(e,r){1&e&&(o.Nb(0,"div",0),o.Nb(1,"h2"),o.uc(2),o.Mb(),o.sc(3,K,1,1,"app-resource-unavailable",1),o.Nb(4,"form",2),o.Ub("ngSubmit",(function(){return r.onSubmitSignUp(r.signUpForm.value)})),o.sc(5,T,3,1,"div",3),o.Nb(6,"div",4),o.Nb(7,"label",5),o.uc(8," First Name * : "),o.Mb(),o.Jb(9,"input",6),o.sc(10,G,7,4,"div",7),o.Mb(),o.Nb(11,"div",4),o.Nb(12,"label",8),o.uc(13," Last Name * : "),o.Mb(),o.Jb(14,"input",9),o.sc(15,Z,7,4,"div",7),o.Mb(),o.Nb(16,"div",4),o.Nb(17,"label",10),o.uc(18," Username * : "),o.Mb(),o.Jb(19,"input",11),o.sc(20,H,3,0,"ul",12),o.sc(21,se,8,5,"div",7),o.Mb(),o.Nb(22,"div",4),o.Nb(23,"label",13),o.uc(24," Email Address * : "),o.Mb(),o.Jb(25,"input",14),o.sc(26,ie,3,0,"ul",12),o.sc(27,de,8,5,"div",7),o.Mb(),o.sc(28,ge,8,2,"ng-container",3),o.sc(29,we,8,2,"ng-container",3),o.sc(30,Le,8,2,"ng-container",3),o.sc(31,We,8,2,"ng-container",3),o.Nb(32,"div",4),o.Nb(33,"label",15),o.uc(34," Password * : "),o.Mb(),o.Jb(35,"input",16),o.sc(36,Je,7,4,"div",7),o.Mb(),o.Nb(37,"div",4),o.Nb(38,"label",17),o.uc(39," Identity Number * : "),o.Mb(),o.Jb(40,"input",18),o.sc(41,De,5,2,"div",7),o.Mb(),o.Nb(42,"div",4),o.Nb(43,"label",19),o.uc(44," Matriculation Number * : "),o.Mb(),o.Jb(45,"input",20),o.sc(46,Ge,5,2,"div",7),o.Mb(),o.Nb(47,"div",4),o.Nb(48,"label",21),o.uc(49," About * : "),o.Mb(),o.Jb(50,"input",22),o.sc(51,Be,6,3,"div",7),o.Mb(),o.Nb(52,"button",23),o.uc(53," Submit "),o.Mb(),o.Mb(),o.Mb()),2&e&&(o.xb(2),o.wc(" ",r.title," "),o.xb(1),o.cc("ngIf",r.error),o.xb(1),o.cc("formGroup",r.signUpForm),o.xb(1),o.cc("ngIf",r.signUpForm.touched||r.signUpForm.dirty),o.xb(5),o.cc("ngIf",r.firstName.invalid&&(r.firstName.touched||r.firstName.dirty)),o.xb(5),o.cc("ngIf",r.lastName.invalid&&(r.lastName.touched||r.lastName.dirty)),o.xb(5),o.cc("ngIf",r.username.pending),o.xb(1),o.cc("ngIf",r.username.invalid&&(r.username.touched||r.username.dirty)),o.xb(5),o.cc("ngIf",r.emailAddress.pending),o.xb(1),o.cc("ngIf",r.emailAddress.invalid&&(r.emailAddress.touched||r.emailAddress.dirty)),o.xb(1),o.cc("ngIf",r.userOthers&&r.userOthers.departments),o.xb(1),o.cc("ngIf",r.userOthers&&r.userOthers.faculties),o.xb(1),o.cc("ngIf",r.userOthers&&r.userOthers.levels),o.xb(1),o.cc("ngIf",r.userOthers&&r.userOthers.countries),o.xb(5),o.cc("ngIf",r.password.invalid&&(r.password.touched||r.password.dirty)),o.xb(5),o.cc("ngIf",r.identityNumber.invalid&&(r.identityNumber.touched||r.identityNumber.dirty)),o.xb(5),o.cc("ngIf",r.matriculationNumber.invalid&&(r.matriculationNumber.touched||r.matriculationNumber.dirty)),o.xb(5),o.cc("ngIf",r.about.invalid&&(r.about.touched||r.about.dirty)),o.xb(1),o.zb(o.ic(21,Ze,!r.isFormValid,r.isFormValid)),o.cc("disabled",!r.signUpForm.valid))},directives:[n.l,s.s,s.l,s.f,s.a,s.o,s.h,s.k,s.e,_.a,s.p,s.m,s.r,n.k],styles:[""]}),e})(),data:{animation:"signup"}}];let Qe=(()=>{class e{}return e.\u0275mod=o.Gb({type:e}),e.\u0275inj=o.Fb({factory:function(r){return new(r||e)},imports:[[l.e.forChild(He)],l.e]}),e})(),er=(()=>{class e{}return e.\u0275mod=o.Gb({type:e}),e.\u0275inj=o.Fb({factory:function(r){return new(r||e)},imports:[[n.b,s.g,s.n,i.a,Qe]]}),e})()},S5zL:function(e,r,t){"use strict";t.d(r,"a",(function(){return s}));var n=t("OX4D");function s(e,r){return t=>t.lift(new i(e,r))}class i{constructor(e,r){this.compare=e,this.keySelector=r}call(e,r){return r.subscribe(new l(e,this.compare,this.keySelector))}}class l extends n.a{constructor(e,r,t){super(e),this.keySelector=t,this.hasKey=!1,"function"==typeof r&&(this.compare=r)}compare(e,r){return e===r}_next(e){let r;try{const{keySelector:t}=this;r=t?t(e):e}catch(n){return this.destination.error(n)}let t=!1;if(this.hasKey)try{const{compare:e}=this;t=e(this.key,r)}catch(n){return this.destination.error(n)}else this.hasKey=!0;t||(this.key=r,this.destination.next(e))}}},TY4h:function(e,r,t){"use strict";t.d(r,"a",(function(){return p}));var n=t("Ub9n"),s=t("Yvf7");function i(e,r){if(1&e&&(n.Lb(0),n.Nb(1,"p"),n.uc(2),n.Mb(),n.Kb()),2&e){const e=n.Wb(2);n.xb(1),n.rc("color","red"),n.xb(1),n.wc(" Message : ",e.error.error.message,"")}}function l(e,r){if(1&e&&(n.Lb(0),n.Nb(1,"p"),n.uc(2),n.Mb(),n.Kb()),2&e){const e=n.Wb(3);n.xb(1),n.rc("color","red"),n.xb(1),n.wc(" Message : ",e.error.error.field.message,"")}}function o(e,r){if(1&e&&n.sc(0,l,3,3,"ng-container",1),2&e){n.Wb();const e=n.mc(9),r=n.Wb();n.cc("ngIf",null==r.error||null==r.error.error?null:r.error.error.field)("ngIfElse",e)}}function a(e,r){if(1&e&&(n.Lb(0),n.Nb(1,"ul",7),n.Nb(2,"li"),n.uc(3),n.Mb(),n.Mb(),n.Kb()),2&e){const e=r.$implicit,t=n.Wb(4);n.xb(3),n.wc("",null==t.error.error[e]?null:t.error.error[e].message," ")}}function c(e,r){if(1&e&&(n.Lb(0),n.Nb(1,"h4"),n.uc(2,"List of Errors : "),n.Mb(),n.sc(3,a,4,1,"ng-container",6),n.Kb()),2&e){const e=n.Wb(3);n.xb(3),n.cc("ngForOf",e.errorKeys)}}function u(e,r){if(1&e&&n.sc(0,c,4,1,"ng-container",0),2&e){const e=n.Wb(2);n.cc("ngIf",(null==e.error?null:e.error.error)&&e.error.status&&(null==e.errorKeys?null:e.errorKeys.length))}}function d(e,r){if(1&e&&(n.Nb(0,"p"),n.uc(1),n.Mb()),2&e){const e=n.Wb(2);n.xb(1),n.wc(" Status Code : ",e.error.status," ")}}function b(e,r){1&e&&(n.Nb(0,"p"),n.uc(1," Status Code : 00000 "),n.Mb())}function m(e,r){if(1&e&&(n.Nb(0,"p"),n.uc(1),n.Mb()),2&e){const e=n.Wb(2);n.xb(1),n.wc(" Status Text : ",e.error.statusText," ")}}function h(e,r){1&e&&(n.Nb(0,"p"),n.uc(1," Status Text : This is probably a network error or internal server error. Please check your internet connection or restart your browser and try again or refresh the page."),n.Mb())}function f(e,r){if(1&e&&(n.Lb(0),n.Nb(1,"h3"),n.uc(2," An Error has occured "),n.Mb(),n.Nb(3,"p"),n.uc(4),n.Mb(),n.sc(5,i,3,3,"ng-container",1),n.sc(6,o,1,2,"ng-template",null,2,n.tc),n.sc(8,u,1,1,"ng-template",null,3,n.tc),n.sc(10,d,2,1,"p",1),n.sc(11,b,2,0,"ng-template",null,4,n.tc),n.sc(13,m,2,1,"p",1),n.sc(14,h,2,0,"ng-template",null,5,n.tc),n.Kb()),2&e){const e=n.mc(7),r=n.mc(12),t=n.mc(15),s=n.Wb();n.xb(4),n.wc(" Resource : ",s.error.resource," "),n.xb(1),n.cc("ngIf",null==s.error||null==s.error.error?null:s.error.error.message)("ngIfElse",e),n.xb(5),n.cc("ngIf",s.error.status)("ngIfElse",r),n.xb(3),n.cc("ngIf","Unknown Error"!=s.error.statusText)("ngIfElse",t)}}let p=(()=>{class e{constructor(){this.errorKeys=[]}set $error(e){e.error&&(this.errorKeys=Object.keys(e.error),this.error=e)}ngOnInit(){}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=n.Cb({type:e,selectors:[["app-resource-unavailable"]],inputs:{$error:["error","$error"]},decls:1,vars:1,consts:[[4,"ngIf"],[4,"ngIf","ngIfElse"],["fieldErr",""],["otherErr",""],["noStatusCode",""],["noStatusText",""],[4,"ngFor","ngForOf"],[1,"validation-errors"]],template:function(e,r){1&e&&n.sc(0,f,16,7,"ng-container",0),2&e&&n.cc("ngIf",r.error)},directives:[s.l,s.k],styles:[""]}),e})()},XRyL:function(e,r,t){"use strict";t.d(r,"a",(function(){return u}));var n=t("Ma1o"),s=t("34d6"),i=t("OX4D"),l=t("UGNb"),o=t("jV/k"),a=t("e6ST");let c=(()=>{class e{constructor(e,r,t){this.kind=e,this.value=r,this.error=t,this.hasValue="N"===e}observe(e){switch(this.kind){case"N":return e.next&&e.next(this.value);case"E":return e.error&&e.error(this.error);case"C":return e.complete&&e.complete()}}do(e,r,t){switch(this.kind){case"N":return e&&e(this.value);case"E":return r&&r(this.error);case"C":return t&&t()}}accept(e,r,t){return e&&"function"==typeof e.next?this.observe(e):this.do(e,r,t)}toObservable(){switch(this.kind){case"N":return Object(o.a)(this.value);case"E":return Object(a.a)(this.error);case"C":return Object(l.b)()}throw new Error("unexpected notification kind value")}static createNext(r){return void 0!==r?new e("N",r):e.undefinedValueNotification}static createError(r){return new e("E",void 0,r)}static createComplete(){return e.completeNotification}}return e.completeNotification=new e("C"),e.undefinedValueNotification=new e("N",void 0),e})();function u(e,r=n.a){const t=Object(s.a)(e)?+e-r.now():Math.abs(e);return e=>e.lift(new d(t,r))}class d{constructor(e,r){this.delay=e,this.scheduler=r}call(e,r){return r.subscribe(new b(e,this.delay,this.scheduler))}}class b extends i.a{constructor(e,r,t){super(e),this.delay=r,this.scheduler=t,this.queue=[],this.active=!1,this.errored=!1}static dispatch(e){const r=e.source,t=r.queue,n=e.scheduler,s=e.destination;for(;t.length>0&&t[0].time-n.now()<=0;)t.shift().notification.observe(s);if(t.length>0){const r=Math.max(0,t[0].time-n.now());this.schedule(e,r)}else this.unsubscribe(),r.active=!1}_schedule(e){this.active=!0,this.destination.add(e.schedule(b.dispatch,this.delay,{source:this,destination:this.destination,scheduler:e}))}scheduleNotification(e){if(!0===this.errored)return;const r=this.scheduler,t=new m(r.now()+this.delay,e);this.queue.push(t),!1===this.active&&this._schedule(r)}_next(e){this.scheduleNotification(c.createNext(e))}_error(e){this.errored=!0,this.queue=[],this.destination.error(e),this.unsubscribe()}_complete(){this.scheduleNotification(c.createComplete()),this.unsubscribe()}}class m{constructor(e,r){this.time=e,this.notification=r}}}}]);