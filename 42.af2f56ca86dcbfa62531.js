(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"gMK/":function(t,e,n){"use strict";n.r(e),n.d(e,"RequestCredentialModule",(function(){return X}));var i=n("Yvf7"),s=n("8VHZ"),r=n("Fk62"),a=n("EUGn"),o=n("9nlD"),c=n("Ub9n"),l=n("jV/k"),d=n("oECA"),b=n("O6Zd"),u=n("VcWf"),g=n("FBrc");let f=(()=>{class t{constructor(t,e,n){this.apiConfig=t,this.http=e,this.ems=n}getAllEntry(t,e){return this.http.get(`${this.apiConfig.host}/${this.$sa}/entries`,{params:t}).pipe(Object(d.a)(this.handleError(this.$systemType+" Entries",[])))}$deleteManyEntry(t){return this.http.patch(`${this.apiConfig.host}/${this.$sa}/entry/many/delete`,{entries:t}).pipe(Object(b.a)(t=>({manyDeleted:!0})),Object(d.a)(this.handleError(this.$systemType+" Entries Delete",[])))}handleError(t="operation",e){return t=>(this.ems.message=t,Object(l.a)(e))}}return t.\u0275fac=function(e){return new(e||t)(c.Tb(u.b),c.Tb(g.b),c.Tb(a.a))},t.\u0275prov=c.Gb({token:t,factory:t.\u0275fac}),t})();var p=n("9yhg"),h=n("+ef2"),y=n("Rxsk"),m=n("RBZI"),O=n("TY4h");function P(t,e){if(1&t&&(c.Pb(0,"h2"),c.yc(1),c.Ob()),2&t){const t=c.ac();c.zb(1),c.Ac(" ",t.title," ")}}function k(t,e){if(1&t&&c.Lb(0,"app-view-description",7),2&t){const t=c.ac();c.gc("view-description",t.view)}}function w(t,e){if(1&t){const t=c.Qb();c.Pb(0,"app-notification-screen",8),c.Wb("finished",(function(){return c.rc(t),c.ac().removeNotification()})),c.Ob()}if(2&t){const t=c.ac();c.gc("notified",t.notificationAvailable)("message",t.notificationMessage)}}function C(t,e){1&t&&(c.Pb(0,"td",18),c.yc(1," Nil "),c.Ob())}function I(t,e){if(1&t&&(c.Pb(0,"td",18),c.yc(1),c.Ob()),2&t){const t=c.ac().$implicit;c.zb(1),c.Ac(" ",null==t?null:t._id," ")}}function v(t,e){if(1&t&&(c.Pb(0,"td",18),c.yc(1),c.Ob()),2&t){const t=c.ac().$implicit;c.zb(1),c.Ac(" ",null==t?null:t.requestUsername," ")}}function M(t,e){if(1&t&&(c.Pb(0,"td",18),c.yc(1),c.Ob()),2&t){const t=c.ac().$implicit;c.zb(1),c.Ac(" ",null==t?null:t.requestPassword," ")}}function E(t,e){if(1&t&&(c.Pb(0,"td",18),c.yc(1),c.bc(2,"date"),c.Ob()),2&t){const t=c.ac().$implicit;c.zb(1),c.Ac(" ",c.dc(2,1,null==t?null:t.createdAt,"longDate")," ")}}function x(t,e){if(1&t&&(c.Pb(0,"td",18),c.yc(1),c.Ob()),2&t){const t=c.ac().$implicit;c.zb(1),c.Ac(" ",null==t?null:t.secondaryKey," ")}}function $(t,e){if(1&t){const t=c.Qb();c.Nb(0),c.Pb(1,"input",27,28),c.Wb("click",(function(){c.rc(t);const e=c.qc(2),n=c.ac(3),i=n.$implicit,s=n.index;return c.ac(2).addEntryToDeleteList(null==i?null:i.num,e.checked,s)})),c.Ob(),c.Lb(3,"span",29),c.Mb()}if(2&t){const t=e.$implicit,n=c.ac(3).$implicit;c.zb(1),c.gc("checked",t==(null==n?null:n.num))}}function _(t,e){if(1&t&&(c.Nb(0),c.wc(1,$,4,1,"ng-container",26),c.Mb()),2&t){const t=c.ac(4);c.zb(1),c.gc("ngForOf",t.esdl)}}function z(t,e){if(1&t){const t=c.Qb();c.Pb(0,"input",30,28),c.Wb("click",(function(){c.rc(t);const e=c.qc(1),n=c.ac(2),i=n.$implicit,s=n.index;return c.ac(2).addEntryToDeleteList(null==i?null:i.num,e.checked,s)})),c.Ob(),c.Lb(2,"span",29)}}function L(t,e){if(1&t&&(c.Pb(0,"label",23),c.wc(1,_,2,1,"ng-container",24),c.wc(2,z,3,0,"ng-template",null,25,c.xc),c.Ob()),2&t){const t=c.qc(3),e=c.ac(3);c.zb(1),c.gc("ngIf",e.esdl.length)("ngIfElse",t)}}const T=function(t){return["../","entry","detail",t]},A=function(t){return["../","entry","update",t]},j=function(t){return["../","entry","delete",t]};function q(t,e){if(1&t&&(c.Pb(0,"tr"),c.Pb(1,"td",18),c.yc(2),c.Ob(),c.wc(3,C,2,0,"ng-template",null,19,c.xc),c.wc(5,I,2,1,"td",20),c.wc(6,v,2,1,"td",20),c.wc(7,M,2,1,"td",20),c.wc(8,E,3,4,"td",20),c.wc(9,x,2,1,"td",20),c.Pb(10,"td",11),c.Pb(11,"a",21),c.yc(12,"View"),c.Ob(),c.Pb(13,"a",21),c.yc(14,"Update"),c.Ob(),c.Pb(15,"a",21),c.yc(16,"Delete"),c.Ob(),c.wc(17,L,4,2,"label",22),c.Ob(),c.Ob()),2&t){const t=e.$implicit,n=e.index,i=c.qc(4);c.zb(2),c.Ac(" ",n+1,". "),c.zb(3),c.gc("ngIf",null==t?null:t._id)("ngIfElse",i),c.zb(1),c.gc("ngIf",null==t?null:t.requestUsername)("ngIfElse",i),c.zb(1),c.gc("ngIf",null==t?null:t.requestPassword)("ngIfElse",i),c.zb(1),c.gc("ngIf",null==t?null:t.createdAt)("ngIfElse",i),c.zb(1),c.gc("ngIf",null==t?null:t.secondaryKey)("ngIfElse",i),c.zb(2),c.gc("routerLink",c.lc(15,T,null==t?null:t._id)),c.zb(2),c.gc("routerLink",c.lc(17,A,null==t?null:t._id)),c.zb(2),c.gc("routerLink",c.lc(19,j,null==t?null:t._id)),c.zb(2),c.gc("ngIf",!0)}}function N(t,e){if(1&t&&c.Lb(0,"app-pagination",31),2&t){const t=c.ac(2);c.gc("entries-length",t.$entriesLength)("entry-ref",t.$entryRef)("page-number",t.pageNumber)}}function D(t,e){if(1&t&&(c.Pb(0,"div"),c.Pb(1,"table",9),c.Pb(2,"caption",10),c.yc(3," Entries "),c.Ob(),c.Pb(4,"colgroup"),c.Lb(5,"col",11),c.Lb(6,"col",11),c.Lb(7,"col",11),c.Lb(8,"col",11),c.Lb(9,"col",11),c.Lb(10,"col",11),c.Lb(11,"col",11),c.Lb(12,"col",12),c.Ob(),c.Pb(13,"thead"),c.Pb(14,"tr"),c.Pb(15,"th",13),c.yc(16," Index "),c.Ob(),c.Pb(17,"th",14),c.yc(18," Unique Number "),c.Ob(),c.Pb(19,"th",14),c.yc(20," Username "),c.Ob(),c.Pb(21,"th",14),c.yc(22," Password "),c.Ob(),c.Pb(23,"th",14),c.yc(24," Date Created "),c.Ob(),c.Pb(25,"th",15),c.yc(26," Secondary Keys "),c.Ob(),c.Pb(27,"th",10),c.yc(28," Changes "),c.Ob(),c.Ob(),c.Ob(),c.Pb(29,"tbody"),c.wc(30,q,18,21,"tr",16),c.Ob(),c.Pb(31,"tfoot"),c.Pb(32,"tr"),c.Lb(33,"td"),c.Ob(),c.Pb(34,"tr"),c.Lb(35,"td"),c.Ob(),c.Pb(36,"tr"),c.wc(37,N,1,3,"app-pagination",17),c.Ob(),c.Ob(),c.Ob(),c.Ob()),2&t){const t=c.ac();c.zb(30),c.gc("ngForOf",t.entries)("ngForTrackBy",t.trackById),c.zb(7),c.gc("ngIf",t.pageNumber)}}function F(t,e){if(1&t&&c.Lb(0,"app-resource-unavailable",32),2&t){const t=c.ac();c.gc("error",t.error)}}let K=(()=>{class t{constructor(t,e,n,i,s,r){this.route=t,this.router=e,this.location=n,this.rcs=i,this.ems=s,this.ns=r,this.entries=[],this.error=!1,this.esdl=[],this.p$esdl=!1,this.pageNumber=1,this.$entriesLength=0}trackById(t,e){return e._id}ngOnInit(){let t=this.route.snapshot.data;this.systemType=t.entries.systemType,this.title=t.entries.title,this.view=t.entries.view,this.viewWord=t.entries.viewWord,this.link=t.entries.link,this.link2=t.link2,this.$link=t.entries.$link,this.rcs.$systemType=this.systemType,this.rcs.$sa=this.$link,this.route.queryParamMap.subscribe(t=>{let e=t.get("page"),n=t.get("name");this.$entryRef=!!n||0,this.pageNumber=+e?+e:1;let i=t,s=i.keys,r={};for(let a of s){let t=i.get(a);t&&(r[a]=t)}return this.getAllEntry(r)})}getAllEntry(t){this.rcs.getAllEntry(t,this.link2).subscribe(t=>{if(t.length<1)return this.entries=[],this.$entriesLength=t.length,this.error=Object.assign({resource:this.systemType+" Entry or Entries"},this.ems.message);this.error=null,this.$entriesLength=t.length,this.entries=t,this.entries.length>10&&this.entries.pop()})}addEntryToDeleteList(t,e,n){e?t&&this.esdl.push(t):!e&&this.esdl.indexOf(t)>-1&&(this.esdl=this.esdl.filter(e=>{let n=e!=t;return!!n&&""+n}))}deleteManyEntry(){return!!confirm("Are you sure you want to perform this action?")&&!this.p$esdl&&(this.p$esdl=!0,void this.rcs.$deleteManyEntry(this.esdl).subscribe(t=>{this.p$esdl=!1,this.entries=this.entries.filter(t=>(this.ns.setNotificationStatus(!0),this.ns.addNotification(`Operation is successful and many ${this.systemType} Entry is deleted.`),this.esdl.indexOf(t.num)<0)),this.esdl=[]},t=>{this.p$esdl=!1,this.ns.setNotificationStatus(!0),this.ns.addNotification(`Operation is unsuccessful and many ${this.systemType} Entry is not deleted.`)}))}get notificationAvailable(){return this.ns.notificationStatus()}get notificationMessage(){return this.ns.getNotificationMessage()}removeNotification(){this.ns.removeNotification()}}return t.\u0275fac=function(e){return new(e||t)(c.Kb(r.a),c.Kb(r.d),c.Kb(i.h),c.Kb(f),c.Kb(a.a),c.Kb(o.a))},t.\u0275cmp=c.Eb({type:t,selectors:[["app-request-credential-list"]],features:[c.yb([a.a,o.a])],decls:10,vars:7,consts:[["id","entry-main"],[4,"ngIf"],[3,"view-description",4,"ngIf"],[3,"notified","message","finished",4,"ngIf"],[1,"search-bar"],[1,"entry-option","entry-option-small","center",3,"click"],["id","error",3,"error",4,"ngIf"],[3,"view-description"],[3,"notified","message","finished"],[1,"entries"],[1,"bold","left"],[1,""],[1,"changes"],[1,"bold","center","index-2"],[1,"bold","center"],[1,"bold","center","secondary-key"],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"entries-length","entry-ref","page-number",4,"ngIf"],[1,"center"],["nilValue",""],["class","center",4,"ngIf","ngIfElse"],[1,"center","changes-option",3,"routerLink"],["class","changes-mark",4,"ngIf"],[1,"changes-mark"],[4,"ngIf","ngIfElse"],["normalChecks",""],[4,"ngFor","ngForOf"],["type","checkbox",3,"checked","click"],["checked",""],[1,"checkmark"],["type","checkbox",3,"click"],[3,"entries-length","entry-ref","page-number"],["id","error",3,"error"]],template:function(t,e){1&t&&(c.Pb(0,"div",0),c.wc(1,P,2,1,"h2",1),c.wc(2,k,1,1,"app-view-description",2),c.wc(3,w,1,2,"app-notification-screen",3),c.Lb(4,"app-list-entry-options"),c.Pb(5,"div",4),c.Pb(6,"a",5),c.Wb("click",(function(){return e.deleteManyEntry()})),c.yc(7," Delete Many "),c.Ob(),c.Ob(),c.wc(8,D,38,3,"div",1),c.wc(9,F,1,1,"app-resource-unavailable",6),c.Ob()),2&t&&(c.zb(1),c.gc("ngIf",e.title),c.zb(1),c.gc("ngIf",e.view),c.zb(1),c.gc("ngIf",e.notificationAvailable),c.zb(3),c.Cb("hide",e.esdl.length<2),c.zb(2),c.gc("ngIf",e.$entriesLength>0),c.zb(1),c.gc("ngIf",e.error))},directives:[i.l,p.a,h.a,y.a,i.k,r.f,m.a,O.a],pipes:[i.d],styles:["[_nghost-%COMP%]{position:relative}button.btn-search[_ngcontent-%COMP%]{display:block;width:70%;margin:15px auto 0;padding:0 2.934087923450491%;background-color:#290140;color:#a0a7a0;border:2px solid #ac4bd8;border-radius:6px}button.btn-search[_ngcontent-%COMP%]:hover{color:#fff;background-color:#210140}.search-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus, .search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{border:2px double #0e0023;outline:none!important}.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .search-bar[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:50%;display:block;padding:5px 10px;border:2px solid #3d0398;border-radius:5px;height:30px;margin:10px auto}.search-bar[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:40%}.search-bar[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{text-align:center;font-size:13px}.pagination[_ngcontent-%COMP%]{background-color:#290140;color:#a0a7a0}.pagination[_ngcontent-%COMP%], .pagination-end[_ngcontent-%COMP%]{border:2px solid #ac4bd8;border-radius:10px;width:100px;padding:2px 0;display:block;margin:0 auto}.pagination-end[_ngcontent-%COMP%]{background-color:#171417;color:#fff}.next[_ngcontent-%COMP%]{float:right}.prev[_ngcontent-%COMP%]{float:left}a.next[_ngcontent-%COMP%]:hover, a.prev[_ngcontent-%COMP%]:hover{color:#fff;background-color:#210140}tfoot[_ngcontent-%COMP%]{margin-top:20px}.notification[_ngcontent-%COMP%]{position:fixed;width:80%;height:30px;background-color:#2f0348;color:#fff;margin:0 auto;top:40px;left:100px;border-radius:6px;padding:0 10px;font-family:Verdana;opacity:1;font-size:11px;border:2px solid #a984c7;display:block}.fade-in[_ngcontent-%COMP%]{animation:fadeIn 3s ease;-webkit-animation:fadeIn 3s ease;-moz-animation:fadeIn ease 3s;-o-animation:fadeIn ease 3s;-ms-animation:fadeIn ease 3s}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.fade-out[_ngcontent-%COMP%]{animation:fadeOut 4s ease;-webkit-animation:fadeOut 4s ease;-moz-animation:fadeOut ease 4s;-o-animation:fadeOut ease 4s;-ms-animation:fadeOut ease 4s}@keyframes fadeOut{0%{opacity:1;display:block}to{opacity:0;display:none}}.rolling[_ngcontent-%COMP%]{display:inline-block;animation-name:rotated;animation-duration:.8s;animation-direction:all;animation-iteration-count:infinite}.rolling[_ngcontent-%COMP%]:hover{transform:rotate(1turn)}@keyframes rotated{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}"]}),t})();var R=n("/zEo"),U=n("Hk0H"),W=n("RPGP"),B=n("G+IB");let H={systemType:"Request Credential",title:"Request Credential",view:"gen-internal",viewWord:"Request Credential",link:"request-credential",$link:"request-credential",systemGuideline:"gen-internal"};const S={dashboard:Object.assign({},H),create:Object.assign(Object.assign({},H),{title:"Add a "+H.systemType,controlFilters:["num","description","faculty","shortCode"],noEdit:!1}),detail:Object.assign(Object.assign({},H),{title:H.systemType+" Entry Detail"}),update:Object.assign(Object.assign({},H),{title:H.systemType+" Entry Update",controlFilters:["description","num","faculty","shortCode","requestPassword"],noEdit:!1}),delete:Object.assign(Object.assign({},H),{title:H.systemType+" Entry Delete",controlFilters:["description","shortCode","status","faculty"],controlsDisabled:["name","description","status","shortCode","secondaryKey","_id","num"],noEdit:!0}),deleteAll:Object.assign(Object.assign({},H),{title:H.systemType+" Entries : Delete All"}),entries:Object.assign(Object.assign({},H),{title:H.systemType+" Entries",searchFilters:{requestUsername:"Request Username",status:"Status"}})},V=[{path:"",component:U.a,children:[{path:"",component:W.a,data:{dashboard:S.dashboard}},{path:"entries",component:K,data:{entries:S.entries}},{path:"entries/delete/all",component:B.a,canActivate:[R.a],data:{deleteAll:S.deleteAll}}]}];let G=(()=>{class t{constructor(){}}return t.\u0275mod=c.Ib({type:t}),t.\u0275inj=c.Hb({factory:function(e){return new(e||t)},imports:[[r.g.forChild(V)],r.g]}),t})();var Q=n("kPid"),Y=n("TS3g"),Z=n("mHYI"),J=n("hxwH");let X=(()=>{class t{}return t.\u0275mod=c.Ib({type:t}),t.\u0275inj=c.Hb({factory:function(e){return new(e||t)},providers:[f],imports:[[i.b,s.n,Y.a,J.a,Q.a,Z.a,G]]}),t})()}}]);