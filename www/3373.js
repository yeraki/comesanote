"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3373],{3373:(M,l,s)=>{s.r(l),s.d(l,{SignupPageModule:()=>b});var g=s(9808),i=s(2382),a=s(8526),c=s(5666),u=s(655),e=s(5e3),p=s(7020);function m(t,r){if(1&t&&(e.TgZ(0,"div",12),e._uU(1),e.qZA()),2&t){const o=e.oxw().$implicit;e.xp6(1),e.hij(" ",o.message," ")}}function f(t,r){if(1&t&&(e.ynx(0),e.YNc(1,m,2,1,"div",15),e.BQk()),2&t){const o=r.$implicit,n=e.oxw();e.xp6(1),e.Q6J("ngIf",n.validations_form.get("email").hasError(o.type)&&(n.validations_form.get("email").dirty||n.validations_form.get("email").touched))}}function h(t,r){if(1&t&&(e.TgZ(0,"div",12),e._uU(1),e.qZA()),2&t){const o=e.oxw().$implicit;e.xp6(1),e.hij(" ",o.message," ")}}function Z(t,r){if(1&t&&(e.ynx(0),e.YNc(1,h,2,1,"div",15),e.BQk()),2&t){const o=r.$implicit,n=e.oxw();e.xp6(1),e.Q6J("ngIf",n.validations_form.get("password").hasError(o.type)&&(n.validations_form.get("password").dirty||n.validations_form.get("password").touched))}}const v=[{path:"",component:(()=>{class t{constructor(o,n,d,_,P){this.navCtrl=o,this.authService=n,this.formBuilder=d,this.router=_,this.alertController=P,this.errorMessage="",this.successMessage="",this.validation_messages={email:[{type:"required",message:"Email necesario"},{type:"pattern",message:"Introduzca email correcto"}],password:[{type:"required",message:"Contrase\xf1a necesaria"},{type:"minlength",message:"Contrase\xf1a de al menos 6 caracteres "}]}}ngOnInit(){this.validations_form=this.formBuilder.group({email:new i.NI("",i.kI.compose([i.kI.required,i.kI.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])),password:new i.NI("",i.kI.compose([i.kI.minLength(6),i.kI.required]))})}tryRegister(o){this.authService.registerUser(o).then(n=>{console.log(n),this.errorMessage="",this.successMessage="Registrado correctamente, inicie sesi\xf3n.",this.presentAlert(),this.goLoginPage()},n=>{console.log(n),this.errorMessage=n.message,this.successMessage=""})}goLoginPage(){this.router.navigate(["login"])}presentAlert(){return(0,u.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({cssClass:"basic-alert",header:"Registro",subHeader:"Se ha registrado correctamente",message:"Por favor, inicie sesi\xf3n",buttons:["OK"]})).present()})}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(a.SH),e.Y36(p.i),e.Y36(i.qu),e.Y36(c.F0),e.Y36(a.Br))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-signup"]],decls:35,vars:6,consts:[[1,"form",3,"formGroup","ngSubmit"],[1,"background-pic"],[1,"background-filter"],["src","../../assets/Logo1.png"],["placeholder","Nombre Completo","required","true"],["type","tel","maxlength","9","placeholder","Tel\xe9fono"],["type","email","placeholder","Email","required","true","formControlName","email"],[1,"validation-errors"],[4,"ngFor","ngForOf"],["type","password","placeholder","Contrase\xf1a","formControlName","password","required","",1,"form-controll"],[1,"bottom-section"],["type","submit",1,"submit-btn",3,"disabled"],[1,"error-message"],[1,"success-message"],["href","http://localhost:8100/login"],["class","error-message",4,"ngIf"]],template:function(o,n){1&o&&(e.TgZ(0,"ion-content"),e.TgZ(1,"form",0),e.NdJ("ngSubmit",function(){return n.tryRegister(n.validations_form.value)}),e.TgZ(2,"div",1),e.TgZ(3,"div",2),e._UZ(4,"img",3),e.TgZ(5,"ion-card"),e.TgZ(6,"ion-card-header"),e.TgZ(7,"ion-card-title"),e._uU(8," Un exterior saludable comienza en tu interior. "),e.qZA(),e.TgZ(9,"ion-card-subtitle"),e._uU(10," Reg\xedstrate "),e.qZA(),e.qZA(),e.TgZ(11,"ion-card-content"),e.TgZ(12,"ion-item"),e._UZ(13,"ion-input",4),e.qZA(),e.TgZ(14,"ion-item"),e._UZ(15,"ion-input",5),e.qZA(),e.TgZ(16,"ion-item"),e._UZ(17,"ion-input",6),e.qZA(),e.TgZ(18,"div",7),e.YNc(19,f,2,1,"ng-container",8),e.qZA(),e.TgZ(20,"ion-item"),e._UZ(21,"ion-input",9),e.qZA(),e.TgZ(22,"div",7),e.YNc(23,Z,2,1,"ng-container",8),e.qZA(),e.TgZ(24,"div",10),e.TgZ(25,"ion-button",11),e._uU(26,"Registrar"),e.qZA(),e.TgZ(27,"label",12),e._uU(28),e.qZA(),e.TgZ(29,"label",13),e._uU(30),e.qZA(),e.TgZ(31,"span"),e._uU(32," \xbfYa tienes una cuenta? "),e.TgZ(33,"a",14),e._uU(34," Inicia Sesi\xf3n"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&o&&(e.xp6(1),e.Q6J("formGroup",n.validations_form),e.xp6(18),e.Q6J("ngForOf",n.validation_messages.email),e.xp6(4),e.Q6J("ngForOf",n.validation_messages.password),e.xp6(2),e.Q6J("disabled",!n.validations_form.valid),e.xp6(3),e.Oqu(n.errorMessage),e.xp6(2),e.Oqu(n.successMessage))},directives:[a.W2,i._Y,i.JL,i.sg,a.PM,a.Zi,a.Dq,a.tO,a.FN,a.Ie,a.pK,a.j9,i.Q7,i.JJ,i.u,g.sg,g.O5,a.YG],styles:["ion-content[_ngcontent-%COMP%]{--ion-background-color:#fff;font-family:Arial,Helvetica,sans-serif}.background-pic[_ngcontent-%COMP%]{height:100vh;width:100%;background:url(background2.jpg);background-position:30%;background-repeat:no-repeat;background-size:cover}.background-filter[_ngcontent-%COMP%]{height:100%;width:100%;background:rgba(255,255,255,.8);align-items:center;display:flex;flex-direction:column}img[_ngcontent-%COMP%]{margin-top:48px;height:150px;width:130px;opacity:.9}.shape[_ngcontent-%COMP%]{position:fixed;top:0;right:0}ion-card[_ngcontent-%COMP%]{background:transparent;box-shadow:none;text-align:center}ion-card-title[_ngcontent-%COMP%]{color:#14ac1b;font-size:14px;font-weight:400;max-width:200px;display:inline-block}ion-card-subtitle[_ngcontent-%COMP%]{color:#242020;font-size:30px;font-weight:500}strong[_ngcontent-%COMP%]{text-decoration:none;font-weight:700;color:#14ac1b;font-size:15}ion-card-content[_ngcontent-%COMP%]{margin-top:30px}ion-item[_ngcontent-%COMP%]{--ion-item-background:transparent;--border-width:0;--inner-border-width:0;--highlight-color-focused:none;margin-bottom:10px}ion-input[_ngcontent-%COMP%]{width:257px;height:40px;border-radius:15px;border:1px solid #14ac1b;font-size:14px;font-weight:300;color:#555b5b;--padding-start:20px;--placeholder-text-align:center}a[_ngcontent-%COMP%]{text-decoration:none;color:#14ac1b;font-weight:300;font-size:13px;font-weight:400}.bottom-section[_ngcontent-%COMP%]{margin-top:25px;display:flex;flex-direction:column;align-items:center}ion-button[_ngcontent-%COMP%]{height:42px;width:247px;font-size:14px;text-transform:none;--background:#14ac1b;font-weight:400;--border-radius: 15px !important;color:#fff}span[_ngcontent-%COMP%]{margin-top:10px;font-weight:330}"]}),t})()}];let x=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[c.Bz.forChild(v)],c.Bz]}),t})(),b=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[g.ez,i.u5,a.Pc,i.UX,x]]}),t})()}}]);