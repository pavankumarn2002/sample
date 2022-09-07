"use strict";(self.webpackChunksample=self.webpackChunksample||[]).push([[810],{5810:(V,f,s)=>{s.r(f),s.d(f,{AtmModule:()=>L});var l=s(9808),d=s(4100),t=s(5e3),h=s(520),A=s(2843),m=s(262);let p=(()=>{class e{constructor(n){this.httpClient=n,this.apiURL="https://api-generator.retool.com/10fGrt",this.httpOptions={headers:new h.WM({"Content-Type":"application/json"})}}getAll(){return this.httpClient.get(this.apiURL+"/data").pipe((0,m.K)(this.errorHandler))}getElementById(n){return this.httpClient.get(this.apiURL+"/data/"+n).pipe((0,m.K)(this.errorHandler))}create(n){return this.httpClient.post(this.apiURL+"/data/",JSON.stringify(n),this.httpOptions).pipe((0,m.K)(this.errorHandler))}delete(n){return this.httpClient.delete(this.apiURL+"/data/"+n,this.httpOptions).pipe((0,m.K)(this.errorHandler))}errorHandler(n){let o="";return o=n.error instanceof ErrorEvent?n.error.message:`Error Code: ${n.status}\nMessage: ${n.message}`,(0,A._)(o)}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(h.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var Z=s(1135);let _=(()=>{class e{constructor(){this.subjectVar=new Z.X(null)}setPost(n){this.subjectVar.next(n)}getPosts(){return this.subjectVar}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var r=s(3075);function x(e,a){if(1&e&&(t.TgZ(0,"optgroup")(1,"option"),t._uU(2),t.qZA()()),2&e){const n=a.$implicit;t.xp6(2),t.Oqu(n.accountNo)}}function b(e,a){if(1&e&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&e){const n=t.oxw().$implicit;t.xp6(1),t.Oqu(n.name)}}function T(e,a){if(1&e&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&e){const n=t.oxw().$implicit;t.xp6(1),t.Oqu(n.accountNo)}}function C(e,a){if(1&e&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&e){const n=t.oxw().$implicit;t.xp6(1),t.Oqu(n.date)}}const N=function(e){return["/atm/atm-view",e]},q=function(e){return["/atm/atm-edit",e]};function v(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"td")(1,"button",7),t._uU(2,"view"),t.qZA(),t.TgZ(3,"button",8),t._uU(4,"edit"),t.qZA(),t.TgZ(5,"button",9),t.NdJ("click",function(){t.CHM(n);const i=t.oxw().$implicit;return t.oxw().deletePost(i.id)}),t._uU(6,"delete"),t.qZA()()}if(2&e){const n=t.oxw().$implicit;t.xp6(1),t.Q6J("routerLink",t.VKq(2,N,n.id)),t.xp6(2),t.Q6J("routerLink",t.VKq(4,q,n.id))}}const I=function(e){return["/atm/atm-transaction",e]};function w(e,a){if(1&e&&(t.TgZ(0,"td")(1,"button",10),t._uU(2,"Transaction"),t.qZA()()),2&e){const n=t.oxw().$implicit;t.xp6(1),t.Q6J("routerLink",t.VKq(1,I,n.id))}}function U(e,a){if(1&e&&(t.TgZ(0,"tr"),t.YNc(1,b,2,1,"td",6),t.YNc(2,T,2,1,"td",6),t.YNc(3,C,2,1,"td",6),t.YNc(4,v,7,6,"td",6),t.YNc(5,w,3,3,"td",6),t.qZA()),2&e){const n=a.$implicit,o=t.oxw();t.xp6(1),t.Q6J("ngIf",n.accountNo==o.searchNames1),t.xp6(1),t.Q6J("ngIf",n.accountNo==o.searchNames1),t.xp6(1),t.Q6J("ngIf",n.accountNo==o.searchNames1),t.xp6(1),t.Q6J("ngIf",n.accountNo==o.searchNames1),t.xp6(1),t.Q6J("ngIf",n.accountNo==o.searchNames1)}}function M(e,a){1&e&&(t.TgZ(0,"div",11)(1,"h5"),t._uU(2,"No Data Found"),t.qZA()())}function O(e,a){1&e&&(t.TgZ(0,"div",11)(1,"h5"),t._uU(2,"Please Enter Valid Input"),t.qZA()())}let D=(()=>{class e{constructor(n,o){this.atm=n,this.inner=o,this.atmData=[],this.noData="",this.atm.getAll().subscribe(i=>this.atmData=i)}ngOnInit(){}searchObj(n){let o=n,i=this.atmData.map(u=>u.accountNo.substr(0,o.length)),c=0;this.x1=[],i.forEach((u,g)=>{o.length>0?u!=o?(this.noData=c<this.atmData.length-1?" ":"No Data Found",c++):(this.noData=" ",this.x1.push(this.atmData[g])):this.noData="Enter Valid Input"}),console.log(this.x1[this.x1.length-1]),this.currentBalance=this.x1[this.x1.length-1].balance,this.inner.setPost(this.currentBalance)}deletePost(n){this.atm.delete(n).subscribe(o=>{this.atmData=this.atmData.filter(i=>i.id!==n),console.log("Post deleted successfully!")})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(p),t.Y36(_))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-atm-data"]],decls:19,vars:5,consts:[["type","text","name","example","list","exampleList1","placeholder","Please Enter Account Number",3,"ngModel","ngModelChange"],["id","exampleList1"],[4,"ngFor","ngForOf"],[1,"container","atm-data"],[1,"table"],["class","text-left",4,"ngIf"],[4,"ngIf"],[1,"view",3,"routerLink"],[1,"edit",3,"routerLink"],[1,"delete",3,"click"],[3,"routerLink"],[1,"text-left"]],template:function(n,o){1&n&&(t.TgZ(0,"input",0),t.NdJ("ngModelChange",function(c){return o.searchNames1=c})("ngModelChange",function(c){return o.searchObj(c)}),t.qZA(),t.TgZ(1,"datalist",1),t.YNc(2,x,3,1,"optgroup",2),t.qZA(),t.TgZ(3,"div",3)(4,"table",4)(5,"tr")(6,"td"),t._uU(7,"Name"),t.qZA(),t.TgZ(8,"td"),t._uU(9,"Account Number"),t.qZA(),t.TgZ(10,"td"),t._uU(11,"Date"),t.qZA(),t.TgZ(12,"td"),t._uU(13,"Actions"),t.qZA(),t.TgZ(14,"td"),t._uU(15,"Transaction"),t.qZA()(),t.YNc(16,U,6,5,"tr",2),t.qZA(),t.YNc(17,M,3,0,"div",5),t.YNc(18,O,3,0,"div",5),t.qZA()),2&n&&(t.Q6J("ngModel",o.searchNames1),t.xp6(2),t.Q6J("ngForOf",o.x1),t.xp6(14),t.Q6J("ngForOf",o.atmData),t.xp6(1),t.Q6J("ngIf","No Data Found"==o.noData),t.xp6(1),t.Q6J("ngIf","Enter Valid Input"==o.noData))},directives:[r.Fj,r.JJ,r.On,l.sg,r.YN,r.Kr,l.O5,d.rH],styles:[".view[_ngcontent-%COMP%]{background-color:#38dff5;padding:7px 2px;margin:2px;width:50px;font-size:13px;color:#fff;border:0 solid}.edit[_ngcontent-%COMP%]{background-color:#130144;padding:7px 2px;margin:2px;width:50px;font-size:13px;color:#fff;border:0 solid}.delete[_ngcontent-%COMP%]{background-color:#4e0505;padding:7px 2px;margin:2px;width:50px;font-size:13px;color:#fff;border:0 solid}.atm-data[_ngcontent-%COMP%]{background-color:#e7e7e7;padding:25px}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:1px solid #cc54ae;text-align:center}input[_ngcontent-%COMP%]{width:25%;height:37px;border:0px solid rgb(0,0,0,0);text-align:center;border-radius:15px;border:2px solid #73AD21;width:-moz-fit-content;width:fit-content;margin:5px;padding:10px}input[_ngcontent-%COMP%]::placeholder{color:#80808066;font-weight:500;font-size:12px}button[_ngcontent-%COMP%]{text-align:center;border-radius:15px;border:2px solid #73AD21;width:-moz-fit-content;width:fit-content;margin:5px;padding:10px}"]}),e})();function y(e,a){1&e&&(t.TgZ(0,"div"),t._uU(1,"Account Number Is Required. "),t.qZA())}function J(e,a){if(1&e&&(t.TgZ(0,"div",22),t.YNc(1,y,2,0,"div",23),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.f.accountNo.errors&&n.f.accountNo.errors.required)}}function P(e,a){1&e&&(t.TgZ(0,"div"),t._uU(1,"Name Is Required."),t.qZA())}function Y(e,a){if(1&e&&(t.TgZ(0,"div",22),t.YNc(1,P,2,0,"div",23),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.f.name.errors&&n.f.name.errors.required)}}function B(e,a){1&e&&(t.TgZ(0,"div"),t._uU(1,"User Id Is Required."),t.qZA())}function Q(e,a){if(1&e&&(t.TgZ(0,"div",22),t.YNc(1,B,2,0,"div",23),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.f.userId.errors&&n.f.userId.errors.required)}}const k=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-atm"]],decls:4,vars:0,consts:[["routerLink","atm-data"]],template:function(n,o){1&n&&(t.TgZ(0,"div")(1,"button",0),t._uU(2,"Account Details"),t.qZA(),t._UZ(3,"router-outlet"),t.qZA())},directives:[d.rH,d.lC],styles:["button[_ngcontent-%COMP%]{text-align:center;border-radius:15px;border:2px solid #73AD21;width:-moz-fit-content;width:fit-content;margin:5px;padding:10px}"]}),e})(),children:[{path:"atm-data",component:D},{path:"atm-view/:id",component:(()=>{class e{constructor(n,o){this.atm=n,this.route=o}ngOnInit(){this.route.paramMap.subscribe(n=>{this.id=Number(n.get("id")),this.atm.getElementById(this.id).subscribe(o=>{this.data=o,this.paramId=this.data.id,this.paramUserId=this.data.userId,this.paramName=this.data.name,this.paramDate=this.data.date,this.paramDeposit=this.data.deposit,this.paramWithdraw=this.data.withdraw,this.paramBalance=this.data.balance,this.paramLocation=this.data.location})})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(p),t.Y36(d.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-atm-view"]],decls:44,vars:8,consts:[[1,"container","atm-data"],[1,"table"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"h2"),t._uU(2," Account Holder Transaction Details"),t.qZA(),t.TgZ(3,"table",1)(4,"tr")(5,"td"),t._uU(6,"Id :"),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA()(),t.TgZ(9,"tr")(10,"td"),t._uU(11,"User Id :"),t.qZA(),t.TgZ(12,"td"),t._uU(13),t.qZA()(),t.TgZ(14,"tr")(15,"td"),t._uU(16,"Date :"),t.qZA(),t.TgZ(17,"td"),t._uU(18),t.qZA()(),t.TgZ(19,"tr")(20,"td"),t._uU(21,"Name :"),t.qZA(),t.TgZ(22,"td"),t._uU(23),t.qZA()(),t.TgZ(24,"tr")(25,"td"),t._uU(26,"Deposit :"),t.qZA(),t.TgZ(27,"td"),t._uU(28),t.qZA()(),t.TgZ(29,"tr")(30,"td"),t._uU(31,"Withdraw :"),t.qZA(),t.TgZ(32,"td"),t._uU(33),t.qZA()(),t.TgZ(34,"tr")(35,"td"),t._uU(36,"Balance :"),t.qZA(),t.TgZ(37,"td"),t._uU(38),t.qZA()(),t.TgZ(39,"tr")(40,"td"),t._uU(41,"Location :"),t.qZA(),t.TgZ(42,"td"),t._uU(43),t.qZA()()()()),2&n&&(t.xp6(8),t.Oqu(o.paramId),t.xp6(5),t.Oqu(o.paramUserId),t.xp6(5),t.Oqu(o.paramDate),t.xp6(5),t.Oqu(o.paramName),t.xp6(5),t.Oqu(o.paramDeposit),t.xp6(5),t.Oqu(o.paramWithdraw),t.xp6(5),t.Oqu(o.paramBalance),t.xp6(5),t.Oqu(o.paramLocation))},styles:[".atm-data[_ngcontent-%COMP%]{background-color:#e7e7e7;padding:25px}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:1px solid #cc54ae;font-size:16px}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1){font-weight:700;padding-left:7px}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2){font-weight:500;padding-left:7px}"]}),e})()},{path:"atm-transaction/:id",component:(()=>{class e{constructor(n,o,i,c){this.atm=n,this.router=o,this.route=i,this.inner=c,this.messages=[],this.route.paramMap.subscribe(u=>{this.id=Number(u.get("id")),this.atm.getElementById(this.id).subscribe(g=>{this.data=g,this.currentAccountNo=this.data.accountNo,this.currentName=this.data.name,this.currentUserId=this.data.userId,this.currentDate=new Date})}),this.inner.getPosts().subscribe(u=>{this.lastBalance=u,console.log(this.lastBalance)})}ngOnInit(){this.form=new r.cw({accountNo:new r.NI("",r.kI.required),name:new r.NI("",r.kI.required),userId:new r.NI("",r.kI.required),deposit:new r.NI("",r.kI.required),withdraw:new r.NI("",r.kI.required),balance:new r.NI("",r.kI.required),date:new r.NI("",r.kI.required),location:new r.NI("",r.kI.required)})}get f(){return this.form.controls}addVal(n){const o=n.target.value;o>0&&(this.currentBalance=Number(this.lastBalance)+Number(o))}subVal(n){const o=n.target.value;o>0&&o<=this.lastBalance&&o>0&&(this.currentBalance=Number(this.lastBalance)-Number(o))}submits(){this.atm.create(this.form.value).subscribe(n=>{console.log("Post created successfully!"),this.router.navigateByUrl("atm/atm-data")})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(p),t.Y36(d.F0),t.Y36(d.gz),t.Y36(_))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-atm-transaction"]],decls:44,vars:10,consts:[[1,"container","transaction-container"],[3,"formGroup","ngSubmit"],[1,"row","row-cols-2"],[1,"col","form-group"],["for","accountNo"],["formControlName","accountNo","id","accountNo","type","text",1,"form-control",3,"ngModel"],["class","alert alert-danger",4,"ngIf"],["for","name"],["formControlName","name","id","name","type","text",1,"form-control",3,"ngModel"],["for","userId"],["formControlName","userId","id","userId","type","text",1,"form-control",3,"ngModel"],["for","deposit"],["formControlName","deposit","id","deposit","type","text",1,"form-control",3,"blur"],["for","withdraw"],["formControlName","withdraw","id","withdraw","type","text",1,"form-control",3,"blur"],["for","balance"],["formControlName","balance","id","balance","type","text","readonly","",1,"form-control",3,"ngModel"],["for","location"],["formControlName","location","id","location","type","text",1,"form-control"],["for","date"],["formControlName","date","id","date","type","date",1,"form-control",3,"ngModel"],["type","submit",1,"btn","btn-primary","submit-btn"],[1,"alert","alert-danger"],[4,"ngIf"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"h4"),t._uU(2,"Transation"),t.qZA(),t.TgZ(3,"h5"),t._uU(4),t.qZA(),t.TgZ(5,"form",1),t.NdJ("ngSubmit",function(){return o.submits()}),t.TgZ(6,"div",2)(7,"div",3)(8,"label",4),t._uU(9,"Account Number :"),t.qZA(),t._UZ(10,"input",5),t.YNc(11,J,2,1,"div",6),t.qZA(),t.TgZ(12,"div",3)(13,"label",7),t._uU(14,"Name :"),t.qZA(),t._UZ(15,"input",8),t.YNc(16,Y,2,1,"div",6),t.qZA(),t.TgZ(17,"div",3)(18,"label",9),t._uU(19,"User Id :"),t.qZA(),t._UZ(20,"input",10),t.YNc(21,Q,2,1,"div",6),t.qZA(),t.TgZ(22,"div",3)(23,"label",11),t._uU(24,"Deposit :"),t.qZA(),t.TgZ(25,"input",12),t.NdJ("blur",function(c){return o.addVal(c)}),t.qZA()(),t.TgZ(26,"div",3)(27,"label",13),t._uU(28,"Withdraw :"),t.qZA(),t.TgZ(29,"input",14),t.NdJ("blur",function(c){return o.subVal(c)}),t.qZA()(),t.TgZ(30,"div",3)(31,"label",15),t._uU(32,"Balance :"),t.qZA(),t._UZ(33,"input",16),t.qZA(),t.TgZ(34,"div",3)(35,"label",17),t._uU(36,"Location :"),t.qZA(),t._UZ(37,"input",18),t.qZA(),t.TgZ(38,"div",3)(39,"label",19),t._uU(40,"Date :"),t.qZA(),t._UZ(41,"input",20),t.qZA()(),t.TgZ(42,"button",21),t._uU(43,"Submit"),t.qZA()()()),2&n&&(t.xp6(4),t.hij("Current Balance - ",o.lastBalance," Rs"),t.xp6(1),t.Q6J("formGroup",o.form),t.xp6(5),t.Q6J("ngModel",o.currentAccountNo),t.xp6(1),t.Q6J("ngIf",o.f.accountNo.touched&&o.f.accountNo.invalid),t.xp6(4),t.Q6J("ngModel",o.currentName),t.xp6(1),t.Q6J("ngIf",o.f.name.touched&&o.f.name.invalid),t.xp6(4),t.Q6J("ngModel",o.currentUserId),t.xp6(1),t.Q6J("ngIf",o.f.userId.touched&&o.f.userId.invalid),t.xp6(12),t.Q6J("ngModel",o.currentBalance),t.xp6(8),t.Q6J("ngModel",o.currentDate))},directives:[r._Y,r.JL,r.sg,r.Fj,r.JJ,r.u,l.O5],styles:[".transaction-container[_ngcontent-%COMP%]{background-color:#e7e7e7;padding:25px}label[_ngcontent-%COMP%]{margin-top:15px}.submit-btn[_ngcontent-%COMP%]{margin-top:12px}button[_ngcontent-%COMP%]{text-align:center;border-radius:15px;border:2px solid #73AD21;width:-moz-fit-content;width:fit-content;margin:5px;padding:10px}"]}),e})()}]}];let F=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[d.Bz.forChild(k)],d.Bz]}),e})(),L=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[l.ez,F,r.u5,r.UX]]}),e})()}}]);