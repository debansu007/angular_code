(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{awdZ:function(n,l,e){"use strict";e.r(l);var t=e("8Y7J"),o=e("ZJFI"),u=e("njzu"),i=e("IzEk"),s=e("PSD3"),a=e.n(s);class r{constructor(n,l,e,t,o,u){this.afAuth=n,this.router=l,this.databaseServ=e,this._sanitizer=t,this.toastrService=o,this.dataServ=u,this.canDisplay=!1,this.users=[],this.selected=[],this.settings={selectMode:"multi",mode:"external",actions:{add:!1,edit:!1,delete:!1,position:"left"},columns:{name:{title:"Name"},email:{title:"Email",editable:!1},phone:{title:"Phone"},image:{title:"Image",type:"html",valuePrepareFunction:n=>this._sanitizer.bypassSecurityTrustHtml(`<img style="width: 150px; height: 100px;" src='${n||"/assets/images/no_img_available.jpg"}' />`),filter:!1,editable:!1},websiteUrl:{title:"Website"},userType:{title:"User Type",editable:!1,filter:!1}}},this.titleModel="",this.bodyModel="",this.afAuth.authState.subscribe(n=>{n?(this.canDisplay=!0,this.dataServ.userSource.subscribe(n=>{console.log("user page",n),n&&"admin"!=n.userType&&this.router.navigate(["pages/report"])},n=>{console.log(n)})):(this.canDisplay=!1,this.router.navigate(["auth/login"]))})}ngOnInit(){this.getUsers()}getUsers(){this.databaseServ.getAllUsers().pipe(Object(i.a)(1)).subscribe(n=>{console.log(n),n.forEach((l,e)=>{n[e]=Object.assign({},n[e],{userType:l.isIndividual?"Individual":"Organization"})}),this.users=n},n=>{console.log(n)})}userSelectRows(n){console.log(n),this.selected=n}send(){this.selected.length>0?this.showPopup():this.toastrService.warning("Please select one user.","Warning!")}showPopup(){let n="";this.selected.forEach((l,e)=>{l.name&&(n=0!=e?`${l.name}, ${n}`:`${l.name} ${n}`)}),a.a.fire({title:"Are you sure?",text:n=`Send push to ${n}`,icon:"warning",showCancelButton:!0,confirmButtonColor:"#3366ff",cancelButtonColor:"#dc3545",confirmButtonText:"Yes, send!"}).then(n=>{n.value&&this.sendPush()})}sendPush(){let n=[];this.selected.forEach((l,e)=>{l.devicetoken&&n.push(l.devicetoken)}),this.databaseServ.sendPushNotification(this.titleModel,this.bodyModel,n).subscribe(n=>{this.storeNotification(),console.log(n),a.a.fire("Sent!","Push notification has been sent.","success")},n=>{console.log(n)})}storeNotification(){this.selected.forEach(n=>{let l={id:"",reportId:"",orgID:"",orgUserid:n.id,notificationTitle:this.titleModel,notificationBody:this.bodyModel,notificationType:"Admin"};console.log(l),this.databaseServ.stroreNoti(l).then(n=>{console.log("success")}).catch(n=>{console.log(n)})})}}class d{}var c=e("pMnS"),m=e("jXVt"),p=e("tKwJ"),g=e("s7LF"),v=e("+ImT"),h=e("Qq3i"),f=e("SVse"),b=e("irV9"),C=e("iInd"),y=e("cUpR"),S=t["\u0275crt"]({encapsulation:0,styles:[[".ng2-smart-action-multiple-select>.form-control:focus{box-shadow:none}  .nb-theme-default nb-card-body::-webkit-scrollbar{height:15px}  .nb-theme-default ng2-smart-table .ng2-smart-actions>input[type=checkbox]{height:15px}.noResize[_ngcontent-%COMP%]{resize:none}"]],data:{}});function _(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,35,"nb-card-body",[],null,null,null,m.Ab,m.E)),t["\u0275did"](1,49152,null,0,p.mb,[],null,null),(n()(),t["\u0275eld"](2,0,null,0,28,"form",[["name","pushForm"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,l,e){var o=!0;return"submit"===l&&(o=!1!==t["\u0275nov"](n,4).onSubmit(e)&&o),"reset"===l&&(o=!1!==t["\u0275nov"](n,4).onReset()&&o),o},null,null)),t["\u0275did"](3,16384,null,0,g["\u0275angular_packages_forms_forms_z"],[],null,null),t["\u0275did"](4,4210688,[["pForm",4]],0,g.NgForm,[[8,null],[8,null]],null,null),t["\u0275prd"](2048,null,g.ControlContainer,null,[g.NgForm]),t["\u0275did"](6,16384,null,0,g.NgControlStatusGroup,[[4,g.ControlContainer]],null,null),(n()(),t["\u0275eld"](7,0,null,null,11,"div",[["class","form-control-group"]],null,null,null,null,null)),(n()(),t["\u0275eld"](8,0,null,null,1,"label",[["class","label"],["for","input-email"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Notification Title :"])),(n()(),t["\u0275eld"](10,0,null,null,8,"input",[["fullWidth",""],["name","titleText"],["nbInput",""],["placeholder","Enter notification title here..."],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"input-full-width",null],[2,"size-tiny",null],[2,"size-small",null],[2,"size-medium",null],[2,"size-large",null],[2,"size-giant",null],[2,"status-primary",null],[2,"status-info",null],[2,"status-success",null],[2,"status-warning",null],[2,"status-danger",null],[2,"shape-rectangle",null],[2,"shape-semi-round",null],[2,"shape-round",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,e){var o=!0,u=n.component;return"input"===l&&(o=!1!==t["\u0275nov"](n,11)._handleInput(e.target.value)&&o),"blur"===l&&(o=!1!==t["\u0275nov"](n,11).onTouched()&&o),"compositionstart"===l&&(o=!1!==t["\u0275nov"](n,11)._compositionStart()&&o),"compositionend"===l&&(o=!1!==t["\u0275nov"](n,11)._compositionEnd(e.target.value)&&o),"ngModelChange"===l&&(o=!1!==(u.titleModel=e)&&o),o},null,null)),t["\u0275did"](11,16384,null,0,g.DefaultValueAccessor,[t.Renderer2,t.ElementRef,[2,g.COMPOSITION_BUFFER_MODE]],null,null),t["\u0275did"](12,16384,null,0,g.RequiredValidator,[],{required:[0,"required"]},null),t["\u0275prd"](1024,null,g.NG_VALIDATORS,function(n){return[n]},[g.RequiredValidator]),t["\u0275prd"](1024,null,g.NG_VALUE_ACCESSOR,function(n){return[n]},[g.DefaultValueAccessor]),t["\u0275did"](15,671744,null,0,g.NgModel,[[2,g.ControlContainer],[6,g.NG_VALIDATORS],[8,null],[6,g.NG_VALUE_ACCESSOR]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,g.NgControl,null,[g.NgModel]),t["\u0275did"](17,16384,null,0,g.NgControlStatus,[[4,g.NgControl]],null,null),t["\u0275did"](18,16384,null,0,p.oc,[],{fullWidth:[0,"fullWidth"]},null),(n()(),t["\u0275eld"](19,0,null,null,11,"div",[["class","form-control-group"]],null,null,null,null,null)),(n()(),t["\u0275eld"](20,0,null,null,1,"label",[["class","label"],["for","input-email"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Notification Body :"])),(n()(),t["\u0275eld"](22,0,null,null,8,"textarea",[["class","noResize"],["fullWidth",""],["name","bodyText"],["nbInput",""],["placeholder","Enter notification body here..."],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"input-full-width",null],[2,"size-tiny",null],[2,"size-small",null],[2,"size-medium",null],[2,"size-large",null],[2,"size-giant",null],[2,"status-primary",null],[2,"status-info",null],[2,"status-success",null],[2,"status-warning",null],[2,"status-danger",null],[2,"shape-rectangle",null],[2,"shape-semi-round",null],[2,"shape-round",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,e){var o=!0,u=n.component;return"input"===l&&(o=!1!==t["\u0275nov"](n,23)._handleInput(e.target.value)&&o),"blur"===l&&(o=!1!==t["\u0275nov"](n,23).onTouched()&&o),"compositionstart"===l&&(o=!1!==t["\u0275nov"](n,23)._compositionStart()&&o),"compositionend"===l&&(o=!1!==t["\u0275nov"](n,23)._compositionEnd(e.target.value)&&o),"ngModelChange"===l&&(o=!1!==(u.bodyModel=e)&&o),o},null,null)),t["\u0275did"](23,16384,null,0,g.DefaultValueAccessor,[t.Renderer2,t.ElementRef,[2,g.COMPOSITION_BUFFER_MODE]],null,null),t["\u0275did"](24,16384,null,0,g.RequiredValidator,[],{required:[0,"required"]},null),t["\u0275prd"](1024,null,g.NG_VALIDATORS,function(n){return[n]},[g.RequiredValidator]),t["\u0275prd"](1024,null,g.NG_VALUE_ACCESSOR,function(n){return[n]},[g.DefaultValueAccessor]),t["\u0275did"](27,671744,null,0,g.NgModel,[[2,g.ControlContainer],[6,g.NG_VALIDATORS],[8,null],[6,g.NG_VALUE_ACCESSOR]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,g.NgControl,null,[g.NgModel]),t["\u0275did"](29,16384,null,0,g.NgControlStatus,[[4,g.NgControl]],null,null),t["\u0275did"](30,16384,null,0,p.oc,[],{fullWidth:[0,"fullWidth"]},null),(n()(),t["\u0275eld"](31,0,null,0,2,"button",[["nbButton",""]],[[2,"appearance-filled",null],[2,"appearance-outline",null],[2,"appearance-ghost",null],[2,"appearance-hero",null],[2,"full-width",null],[1,"aria-disabled",0],[2,"btn-disabled",null],[1,"tabindex",0],[2,"size-tiny",null],[2,"size-small",null],[2,"size-medium",null],[2,"size-large",null],[2,"size-giant",null],[2,"status-primary",null],[2,"status-info",null],[2,"status-success",null],[2,"status-warning",null],[2,"status-danger",null],[2,"shape-rectangle",null],[2,"shape-round",null],[2,"shape-semi-round",null],[2,"icon-start",null],[2,"icon-end",null],[2,"transitions",null]],[[null,"click"]],function(n,l,e){var o=!0,u=n.component;return"click"===l&&(o=!1!==t["\u0275nov"](n,32).onClick(e)&&o),"click"===l&&(o=!1!==u.send()&&o),o},m.vb,m.z)),t["\u0275did"](32,4243456,null,0,p.P,[t.Renderer2,t.ElementRef,t.ChangeDetectorRef],{disabled:[0,"disabled"]},null),(n()(),t["\u0275ted"](-1,0,["Send"])),(n()(),t["\u0275eld"](34,0,null,0,1,"ng2-smart-table",[],null,[[null,"userRowSelect"]],function(n,l,e){var t=!0;return"userRowSelect"===l&&(t=!1!==n.component.userSelectRows(e.selected)&&t),t},v.b,v.a)),t["\u0275did"](35,573440,null,0,h.a,[],{source:[0,"source"],settings:[1,"settings"]},{userRowSelect:"userRowSelect"})],function(n,l){var e=l.component;n(l,12,0,""),n(l,15,0,"titleText",e.titleModel),n(l,18,0,""),n(l,24,0,""),n(l,27,0,"bodyText",e.bodyModel),n(l,30,0,""),n(l,32,0,t["\u0275nov"](l,4).invalid),n(l,35,0,e.users,e.settings)},function(n,l){n(l,2,0,t["\u0275nov"](l,6).ngClassUntouched,t["\u0275nov"](l,6).ngClassTouched,t["\u0275nov"](l,6).ngClassPristine,t["\u0275nov"](l,6).ngClassDirty,t["\u0275nov"](l,6).ngClassValid,t["\u0275nov"](l,6).ngClassInvalid,t["\u0275nov"](l,6).ngClassPending),n(l,10,1,[t["\u0275nov"](l,12).required?"":null,t["\u0275nov"](l,17).ngClassUntouched,t["\u0275nov"](l,17).ngClassTouched,t["\u0275nov"](l,17).ngClassPristine,t["\u0275nov"](l,17).ngClassDirty,t["\u0275nov"](l,17).ngClassValid,t["\u0275nov"](l,17).ngClassInvalid,t["\u0275nov"](l,17).ngClassPending,t["\u0275nov"](l,18).fullWidth,t["\u0275nov"](l,18).tiny,t["\u0275nov"](l,18).small,t["\u0275nov"](l,18).medium,t["\u0275nov"](l,18).large,t["\u0275nov"](l,18).giant,t["\u0275nov"](l,18).primary,t["\u0275nov"](l,18).info,t["\u0275nov"](l,18).success,t["\u0275nov"](l,18).warning,t["\u0275nov"](l,18).danger,t["\u0275nov"](l,18).rectangle,t["\u0275nov"](l,18).semiRound,t["\u0275nov"](l,18).round]),n(l,22,1,[t["\u0275nov"](l,24).required?"":null,t["\u0275nov"](l,29).ngClassUntouched,t["\u0275nov"](l,29).ngClassTouched,t["\u0275nov"](l,29).ngClassPristine,t["\u0275nov"](l,29).ngClassDirty,t["\u0275nov"](l,29).ngClassValid,t["\u0275nov"](l,29).ngClassInvalid,t["\u0275nov"](l,29).ngClassPending,t["\u0275nov"](l,30).fullWidth,t["\u0275nov"](l,30).tiny,t["\u0275nov"](l,30).small,t["\u0275nov"](l,30).medium,t["\u0275nov"](l,30).large,t["\u0275nov"](l,30).giant,t["\u0275nov"](l,30).primary,t["\u0275nov"](l,30).info,t["\u0275nov"](l,30).success,t["\u0275nov"](l,30).warning,t["\u0275nov"](l,30).danger,t["\u0275nov"](l,30).rectangle,t["\u0275nov"](l,30).semiRound,t["\u0275nov"](l,30).round]),n(l,31,1,[t["\u0275nov"](l,32).filled,t["\u0275nov"](l,32).outline,t["\u0275nov"](l,32).ghost,t["\u0275nov"](l,32).hero,t["\u0275nov"](l,32).fullWidth,t["\u0275nov"](l,32).disabled,t["\u0275nov"](l,32).disabled,t["\u0275nov"](l,32).tabbable,t["\u0275nov"](l,32).tiny,t["\u0275nov"](l,32).small,t["\u0275nov"](l,32).medium,t["\u0275nov"](l,32).large,t["\u0275nov"](l,32).giant,t["\u0275nov"](l,32).primary,t["\u0275nov"](l,32).info,t["\u0275nov"](l,32).success,t["\u0275nov"](l,32).warning,t["\u0275nov"](l,32).danger,t["\u0275nov"](l,32).rectangle,t["\u0275nov"](l,32).round,t["\u0275nov"](l,32).semiRound,t["\u0275nov"](l,32).iconLeft,t["\u0275nov"](l,32).iconRight,t["\u0275nov"](l,32).transitions])})}function R(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,16777216,null,null,7,"nb-card",[["nbSpinnerSize","giant"],["nbSpinnerStatus","primary"]],[[2,"size-tiny",null],[2,"size-small",null],[2,"size-medium",null],[2,"size-large",null],[2,"size-giant",null],[2,"status-primary",null],[2,"status-info",null],[2,"status-success",null],[2,"status-warning",null],[2,"status-danger",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null],[2,"nb-spinner-container",null]],null,null,m.Bb,m.F)),t["\u0275did"](1,49152,null,0,p.nb,[],null,null),t["\u0275did"](2,81920,null,0,p.Fd,[t.ViewContainerRef,t.ComponentFactoryResolver,t.Renderer2,t.ElementRef],{spinnerStatus:[0,"spinnerStatus"],spinnerSize:[1,"spinnerSize"],nbSpinner:[2,"nbSpinner"]},null),(n()(),t["\u0275eld"](3,0,null,0,2,"nb-card-header",[],null,null,null,m.Db,m.H)),t["\u0275did"](4,49152,null,0,p.qb,[],null,null),(n()(),t["\u0275ted"](-1,0,[" Send Notification "])),(n()(),t["\u0275and"](16777216,null,1,1,null,_)),t["\u0275did"](7,16384,null,0,f.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){var e=l.component;n(l,2,0,"primary","giant",!e.canDisplay),n(l,7,0,e.canDisplay)},function(n,l){n(l,0,1,[t["\u0275nov"](l,1).tiny,t["\u0275nov"](l,1).small,t["\u0275nov"](l,1).medium,t["\u0275nov"](l,1).large,t["\u0275nov"](l,1).giant,t["\u0275nov"](l,1).primary,t["\u0275nov"](l,1).info,t["\u0275nov"](l,1).success,t["\u0275nov"](l,1).warning,t["\u0275nov"](l,1).danger,t["\u0275nov"](l,1).hasAccent,t["\u0275nov"](l,1).primaryAccent,t["\u0275nov"](l,1).infoAccent,t["\u0275nov"](l,1).successAccent,t["\u0275nov"](l,1).warningAccent,t["\u0275nov"](l,1).dangerAccent,t["\u0275nov"](l,2).isSpinnerExist])})}function N(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"ngx-push-notification",[],null,null,null,R,S)),t["\u0275did"](1,114688,null,0,r,[b.a,C.l,o.a,y.b,p.Zd,u.a],null,null)],function(n,l){n(l,1,0)},null)}var w=t["\u0275ccf"]("ngx-push-notification",r,N,{},{},[]),M=e("IheW"),A=e("TYxm"),z=e("VDLQ"),E=e("NrAT"),I=e("m1S1"),T=e("WBAi"),F=e("mbdJ"),D=e("6t6V");e.d(l,"PushNotificationModuleNgFactory",function(){return O});var O=t["\u0275cmf"](d,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[c.a,m.m,w]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,f.NgLocalization,f.NgLocaleLocalization,[t.LOCALE_ID,[2,f["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,g["\u0275angular_packages_forms_forms_o"],g["\u0275angular_packages_forms_forms_o"],[]),t["\u0275mpd"](4608,g.FormBuilder,g.FormBuilder,[]),t["\u0275mpd"](4608,M.l,M.r,[f.DOCUMENT,t.PLATFORM_ID,M.p]),t["\u0275mpd"](4608,M.s,M.s,[M.l,M.q]),t["\u0275mpd"](5120,M.a,function(n){return[n]},[M.s]),t["\u0275mpd"](4608,M.o,M.o,[]),t["\u0275mpd"](6144,M.m,null,[M.o]),t["\u0275mpd"](4608,M.k,M.k,[M.m]),t["\u0275mpd"](6144,M.b,null,[M.k]),t["\u0275mpd"](4608,M.g,M.n,[M.b,t.Injector]),t["\u0275mpd"](4608,M.c,M.c,[M.g]),t["\u0275mpd"](4608,A.i,A.i,[]),t["\u0275mpd"](4608,A.k,A.k,[M.c]),t["\u0275mpd"](4608,A.c,A.c,[A.i,A.k]),t["\u0275mpd"](1073742336,f.CommonModule,f.CommonModule,[]),t["\u0275mpd"](1073742336,g["\u0275angular_packages_forms_forms_d"],g["\u0275angular_packages_forms_forms_d"],[]),t["\u0275mpd"](1073742336,g.FormsModule,g.FormsModule,[]),t["\u0275mpd"](1073742336,C.p,C.p,[[2,C.u],[2,C.l]]),t["\u0275mpd"](1073742336,g.ReactiveFormsModule,g.ReactiveFormsModule,[]),t["\u0275mpd"](1073742336,M.e,M.e,[]),t["\u0275mpd"](1073742336,M.d,M.d,[]),t["\u0275mpd"](1073742336,A.j,A.j,[]),t["\u0275mpd"](1073742336,z.a,z.a,[]),t["\u0275mpd"](1073742336,E.a,E.a,[]),t["\u0275mpd"](1073742336,I.a,I.a,[]),t["\u0275mpd"](1073742336,T.a,T.a,[]),t["\u0275mpd"](1073742336,F.a,F.a,[]),t["\u0275mpd"](1073742336,D.a,D.a,[]),t["\u0275mpd"](1073742336,p.Ke,p.Ke,[]),t["\u0275mpd"](1073742336,p.mc,p.mc,[p.lc]),t["\u0275mpd"](1073742336,p.rb,p.rb,[]),t["\u0275mpd"](1073742336,p.pc,p.pc,[]),t["\u0275mpd"](1073742336,p.Q,p.Q,[]),t["\u0275mpd"](1073742336,p.Gd,p.Gd,[]),t["\u0275mpd"](1073742336,d,d,[]),t["\u0275mpd"](256,M.p,"XSRF-TOKEN",[]),t["\u0275mpd"](256,M.q,"X-XSRF-TOKEN",[]),t["\u0275mpd"](1024,C.j,function(){return[[{path:"",component:r}]]},[])])})}}]);