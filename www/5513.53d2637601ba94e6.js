"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5513],{5513:(C,u,r)=>{r.r(u),r.d(u,{LoginPageModule:()=>y});var m=r(6814),a=r(95),n=r(5548),c=r(4248),d=r(5861),o=r(6689),p=r(2333),h=r(8027);function f(e,l){if(1&e){const s=o.EpF();o.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),o._uU(3,"Esqueci minha senha"),o.qZA()()(),o.TgZ(4,"ion-content",11)(5,"p"),o._uU(6,"Atualmente os dados de acesso s\xe3o gerenciados pela coordena\xe7\xe3o do coral."),o._UZ(7,"br"),o._uU(8," Entre em contato com seu coordenador para solicitar uma nova senha."),o.qZA(),o.TgZ(9,"div",12)(10,"ion-button",13),o.NdJ("click",function(){o.CHM(s);const i=o.oxw();return o.KtG(i.closeModal())}),o._uU(11,"Ok"),o.qZA()()()}}const v=[{path:"",component:(()=>{var e;class l{constructor(t,i,g,P,w,L){this.fb=t,this.authService=i,this.router=g,this.alertController=P,this.loadingController=w,this.errorService=L,this.loginForm=this.fb.group({username:["",[a.kI.required]],password:["",[a.kI.required]]})}ngOnInit(){}ionViewWillEnter(){this.checkIsLogged()}submit(){this.loginForm.invalid||(this.showLoading(),this.authService.doLogin(this.loginForm.value).subscribe(t=>{this.loadingController.dismiss(),t.login?(localStorage.setItem("USER_NAME",t.data.name),localStorage.setItem("USER_ID",t.data.id),localStorage.setItem("TOKEN_KEY",t.token),this.router.navigate(["/"])):this.presentAlert(t.message)},t=>{this.alertController.dismiss(),this.errorService.handleError(t)}))}showLoading(){var t=this;return(0,d.Z)(function*(){(yield t.loadingController.create({message:"Autenticando"})).present()})()}presentAlert(t){var i=this;return(0,d.Z)(function*(){yield(yield i.alertController.create({message:t,buttons:["OK"]})).present()})()}closeModal(){this.modal.dismiss(null,"cancel")}checkIsLogged(){this.authService.checkLogin()&&this.router.navigateByUrl("/home")}}return(e=l).\u0275fac=function(t){return new(t||e)(o.Y36(a.qu),o.Y36(p.e),o.Y36(c.F0),o.Y36(n.Br),o.Y36(n.HT),o.Y36(h.T))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-login"]],viewQuery:function(t,i){if(1&t&&o.Gf(n.ki,5),2&t){let g;o.iGM(g=o.CRH())&&(i.modal=g.first)}},decls:14,vars:2,consts:[["fullscreen","true"],[1,"content"],[1,"slot"],["src","../../assets/images/simbolo.png",1,"simbolo"],["src","../../assets/images/logotipo.png",1,"logotipo"],[3,"formGroup","ngSubmit"],["type","text","formControlName","username","label","Username","label-placement","floating","fill","outline","placeholder","Informe seu username","errorText","\xc9 necess\xe1rio informar seu nome de usu\xe1rio"],["type","password","formControlName","password","label","Senha","label-placement","floating","fill","outline","placeholder","Informe sua senha","errorText","\xc9 necess\xe1rio informar sua senha",1,"mt-2"],["type","submit","expand","block"],["id","open-modal",1,"my-4"],["trigger","open-modal","mode","ios",3,"initialBreakpoint"],[1,"ion-padding"],[1,"w-1/3","mx-auto","my-4"],["expand","block","size","small",3,"click"]],template:function(t,i){1&t&&(o.TgZ(0,"ion-content",0)(1,"div",1)(2,"div",2),o._UZ(3,"img",3)(4,"img",4),o.TgZ(5,"form",5),o.NdJ("ngSubmit",function(){return i.submit()}),o._UZ(6,"ion-input",6)(7,"ion-input",7),o.TgZ(8,"ion-button",8),o._uU(9,"Entrar"),o.qZA()(),o.TgZ(10,"p",9),o._uU(11,"Esqueci minha senha"),o.qZA()()(),o.TgZ(12,"ion-modal",10),o.YNc(13,f,12,0,"ng-template"),o.qZA()()),2&t&&(o.xp6(5),o.Q6J("formGroup",i.loginForm),o.xp6(7),o.Q6J("initialBreakpoint",.27))},dependencies:[a._Y,a.JJ,a.JL,a.sg,a.u,n.YG,n.W2,n.Gu,n.pK,n.wd,n.sr,n.ki,n.j9],styles:[".content[_ngcontent-%COMP%]{display:flex;min-height:100%;width:100%;flex-direction:column;align-items:center;justify-content:center;--tw-bg-opacity: 1;background-color:rgb(163 7 121 / var(--tw-bg-opacity));background-image:linear-gradient(to bottom,var(--tw-gradient-stops));--tw-gradient-from: #a30779 var(--tw-gradient-from-position);--tw-gradient-to: rgb(163 7 121 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);--tw-gradient-to: #820896 var(--tw-gradient-to-position)}.slot[_ngcontent-%COMP%]{display:flex;width:83.333333%;flex-direction:column;align-items:center;border-radius:.5rem;background-color:var(--ion-color-light)}img.simbolo[_ngcontent-%COMP%]{position:relative;top:-55px;margin-bottom:-60px;width:110px;border-radius:50%;background-color:var(--ion-color-light);padding:4px}img.logotipo[_ngcontent-%COMP%]{width:220px;margin-bottom:36px}form[_ngcontent-%COMP%]{width:83.333333%}ion-button[_ngcontent-%COMP%]{margin-top:.5rem;height:2rem}ion-modal[_ngcontent-%COMP%]{--background: var(--ion-color-light)}"]}),l})()}];let b=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[c.Bz.forChild(v),c.Bz]}),e})(),y=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[m.ez,a.u5,a.UX,n.Pc,b]}),e})()}}]);