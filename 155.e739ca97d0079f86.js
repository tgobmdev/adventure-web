"use strict";(self.webpackChunkadventure_web=self.webpackChunkadventure_web||[]).push([[155],{4155:(k,v,a)=>{a.r(v),a.d(v,{AccountModule:()=>j});var p=a(6814),o=a(95),T=a(707),R=a(4532),F=a(3714),q=a(7018),b=a(6208),m=a(3989),e=a(4769),Z=a(9483),g=a(3354);let J=(()=>{class t{constructor(i,s){this.authService=i,this.messageService=s}canActivate(i,s){return!!this.authService.isAuthenticated()||(this.messageService.sendError("Usu\xe1rio n\xe3o autenticado!"),!1)}static#e=this.\u0275fac=function(s){return new(s||t)(e.LFG(Z.e),e.LFG(g.S))};static#r=this.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var S=a(9209);let I=(()=>{class t extends S.s{constructor(){super(...arguments),this.getUserById=i=>this.get(`users?id=${i}`)}static#e=this.\u0275fac=function(){let i;return function(r){return(i||(i=e.n5z(t)))(r||t)}}();static#r=this.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var f=a(4633);let L=(()=>{class t{constructor(i,s,r){this.route=i,this.accountDetailService=s,this.messageService=r,this.createUserDetailForm=()=>{this.formDetail=new o.cw({username:new o.NI({value:"",disabled:!0}),password:new o.NI({value:"",disabled:!0}),name:new o.NI({value:"",disabled:!0}),email:new o.NI({value:"",disabled:!0})})},this.getRouteId=()=>{this.route.params.subscribe(n=>{this.id=n.id})},this.getUserById=()=>{this.id&&this.accountDetailService.getUserById(this.id).subscribe({next:n=>{this.updateUserDetailForm(n)},error:n=>{this.messageService.sendError(n)}})},this.updateUserDetailForm=n=>{Array.isArray(n)&&this.formDetail.patchValue({username:n[0].username,password:n[0].password,name:n[0].name,email:n[0].email})},this.createUserDetailForm()}ngOnInit(){this.getRouteId(),this.getUserById()}static#e=this.\u0275fac=function(s){return new(s||t)(e.Y36(m.gz),e.Y36(I),e.Y36(g.S))};static#r=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-account-detail"]],decls:22,vars:1,consts:[[1,"container"],[3,"formGroup"],[1,"field","grid"],["for","username",1,"col-fixed"],[1,"col"],["id","username","type","text","formControlName","username"],["for","password",1,"col-fixed"],["id","password","type","password","formControlName","password"],["for","name",1,"col-fixed"],["id","name","type","text","formControlName","name"],["for","email",1,"col-fixed"],["id","email","type","text","formControlName","email"]],template:function(s,r){1&s&&(e.TgZ(0,"div",0)(1,"app-card-form",1)(2,"div",2)(3,"label",3),e._uU(4,"Username"),e.qZA(),e.TgZ(5,"div",4),e._UZ(6,"input",5),e.qZA()(),e.TgZ(7,"div",2)(8,"label",6),e._uU(9,"Password"),e.qZA(),e.TgZ(10,"div",4),e._UZ(11,"input",7),e.qZA()(),e.TgZ(12,"div",2)(13,"label",8),e._uU(14,"Name"),e.qZA(),e.TgZ(15,"div",4),e._UZ(16,"input",9),e.qZA()(),e.TgZ(17,"div",2)(18,"label",10),e._uU(19,"Email"),e.qZA(),e.TgZ(20,"div",4),e._UZ(21,"input",11),e.qZA()()()()),2&s&&(e.xp6(1),e.Q6J("formGroup",r.formDetail))},dependencies:[o.Fj,o.JJ,o.JL,o.sg,o.u,f.J],styles:[".container[_ngcontent-%COMP%]{min-height:74.97vh;height:100%;justify-content:center;display:flex;flex-direction:column}.label[_ngcontent-%COMP%]{width:100px}.mt-30[_ngcontent-%COMP%]{margin-top:30px}.mr-20[_ngcontent-%COMP%]{margin-right:20px}"]})}return t})();class x{constructor(h={}){Object.assign(this,h)}}var u=a(5861);let w=(()=>{class t{constructor(){var i=this;this.apiUrl="https://my-json-server.typicode.com/tgobmdev/adventure-web",this.handleError=s=>{if(!s.ok)throw new Error(`Erro na requisi\xe7\xe3o. Por favor, tente novamente mais tarde. Status: ${s.status}`);return s},this.get=function(){var s=(0,u.Z)(function*(r){const n=`${i.apiUrl}/${r}`;try{const c=yield fetch(n);return i.handleError(c),yield c.json()}catch(c){throw c}});return function(r){return s.apply(this,arguments)}}(),this.post=function(){var s=(0,u.Z)(function*(r,n){const c=`${i.apiUrl}/${r}`;try{const d=yield fetch(c,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});return i.handleError(d),yield d.json()}catch(d){throw d}});return function(r,n){return s.apply(this,arguments)}}()}static#e=this.\u0275fac=function(s){return new(s||t)};static#r=this.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),P=(()=>{class t extends w{constructor(i,s){var r;super(),r=this,this.router=i,this.authService=s,this.loginUser=function(){var n=(0,u.Z)(function*(c){if(c){const U=(yield r.get(`users?username=${c.username}`)).find(C=>C.username===c.username&&C.password===c.password);if(!U)throw new Error("Usu\xe1rio ou senha invalidos!");r.authService.isLogged(JSON.stringify(U.id))}});return function(c){return n.apply(this,arguments)}}(),this.redirectToPage=n=>{this.router.navigate([n])},this.redirectToWelcomePage=()=>{this.redirectToPage("welcome")},this.redirectToRegister=(0,u.Z)(function*(){r.router.navigate(["account/register"])})}static#e=this.\u0275fac=function(s){return new(s||t)(e.LFG(m.F0),e.LFG(Z.e))};static#r=this.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var y=a(2490);const A=function(t){return{"invalid-input":t}};let N=(()=>{class t{constructor(i,s){this.messageService=i,this.accountLoginService=s,this.redirectToRegister=()=>{this.accountLoginService.redirectToRegister()},this.createUserLoginForm=()=>{this.userLoginForm=new o.cw({username:new o.NI("",[o.kI.required]),password:new o.NI("",[o.kI.required])})},this.createUserLoginRequest=()=>new x({username:this.userLoginForm.get("username")?.value,password:this.userLoginForm.get("password")?.value}),this.disableButtonForm=()=>!!this.userLoginForm.invalid,this.onLogin=()=>{this.userLoginForm.valid&&(this.userLoginRequest=this.createUserLoginRequest(),this.accountLoginService.loginUser(this.userLoginRequest).then(r=>{this.messageService.sendSucess("Logado com Sucesso!"),this.accountLoginService.redirectToWelcomePage()},r=>{this.messageService.sendError(r)}))},this.createUserLoginForm()}ngOnInit(){}static#e=this.\u0275fac=function(s){return new(s||t)(e.Y36(g.S),e.Y36(P))};static#r=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-account-login"]],decls:19,vars:10,consts:[[1,"container"],[3,"formGroup"],[1,"field","grid"],["for","username",1,"col-fixed"],[1,"col"],["id","username","autocomplete","off","type","text","formControlName","username",3,"ngClass"],[1,"red-text",3,"hidden"],["for","password",1,"col-fixed"],["id","password","type","password","formControlName","password",3,"ngClass"],["label","Registrar",1,"mr-20",3,"click"],["label","Entrar",3,"disabled","click"]],template:function(s,r){1&s&&(e.TgZ(0,"div",0)(1,"app-card-form",1)(2,"div",2)(3,"label",3),e._uU(4,"Username"),e.qZA(),e.TgZ(5,"div",4),e._UZ(6,"input",5),e.qZA(),e.TgZ(7,"div",6),e._uU(8," Campo obrigat\xf3rio. "),e.qZA()(),e.TgZ(9,"div",2)(10,"label",7),e._uU(11,"Password"),e.qZA(),e.TgZ(12,"div",4),e._UZ(13,"input",8),e.qZA(),e.TgZ(14,"div",6),e._uU(15," Campo obrigat\xf3rio. "),e.qZA()(),e.TgZ(16,"div",2)(17,"app-button",9),e.NdJ("click",function(){return r.redirectToRegister()}),e.qZA(),e.TgZ(18,"app-button",10),e.NdJ("click",function(){return r.onLogin()}),e.qZA()()()()),2&s&&(e.xp6(1),e.Q6J("formGroup",r.userLoginForm),e.xp6(5),e.Q6J("ngClass",e.VKq(6,A,r.userLoginForm.controls.username.errors)),e.xp6(1),e.Q6J("hidden",!(null!=r.userLoginForm.controls.username.errors&&r.userLoginForm.controls.username.errors.required)),e.xp6(6),e.Q6J("ngClass",e.VKq(8,A,r.userLoginForm.controls.password.errors)),e.xp6(1),e.Q6J("hidden",!(null!=r.userLoginForm.controls.username.errors&&r.userLoginForm.controls.username.errors.required)),e.xp6(4),e.Q6J("disabled",r.disableButtonForm()))},dependencies:[p.mk,o.Fj,o.JJ,o.JL,o.sg,o.u,f.J,y.r],styles:[".container[_ngcontent-%COMP%]{min-height:74.97vh;height:100%;justify-content:center;display:flex;flex-direction:column}.label[_ngcontent-%COMP%]{width:100px}.mt-30[_ngcontent-%COMP%]{margin-top:30px}.mr-20[_ngcontent-%COMP%]{margin-right:20px}"]})}return t})();class E{constructor(h={}){Object.assign(this,h)}}let Q=(()=>{class t extends w{constructor(){var i;super(...arguments),i=this,this.registerUser=function(){var s=(0,u.Z)(function*(r){r.id=(new Date).getTime().toString(16)+Math.floor(1e3*Math.random()).toString(16);const n=yield i.post("users",r);sessionStorage.setItem("user",JSON.stringify(n))});return function(r){return s.apply(this,arguments)}}()}static#e=this.\u0275fac=function(){let i;return function(r){return(i||(i=e.n5z(t)))(r||t)}}();static#r=this.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();const l=function(t){return{"invalid-input":t}},O=[{path:"login",component:N},{path:"register",component:(()=>{class t{constructor(i,s){this.messageService=i,this.accountRegisterService=s,this.buttonDisabled=!1,this.createRegisterForm=()=>{this.formRegister=new o.cw({username:new o.NI("",[o.kI.required]),password:new o.NI("",[o.kI.required]),confirmPassword:new o.NI("",[o.kI.required]),name:new o.NI("",[o.kI.required]),email:new o.NI("",[o.kI.required,o.kI.email])})},this.disableButtonForm=()=>!!this.formRegister.invalid,this.createUserRequest=()=>new E({username:this.formRegister.get("username")?.value,password:this.formRegister.get("password")?.value,name:this.formRegister.get("name")?.value,email:this.formRegister.get("email")?.value}),this.checkPasswordMatch=()=>{const r=this.formRegister.get("password")?.value,n=this.formRegister.get("confirmPassword")?.value;return r!==n},this.onRegister=()=>{if(this.formRegister.valid){if(this.checkPasswordMatch())return void this.messageService.sendError("As senhas n\xe3o coincidem.");this.userRequest=this.createUserRequest(),this.accountRegisterService.registerUser(this.userRequest).then(r=>{this.messageService.sendSucess("Registrado com Sucesso!")},r=>{this.messageService.sendError(r)})}},this.createRegisterForm()}static#e=this.\u0275fac=function(s){return new(s||t)(e.Y36(g.S),e.Y36(Q))};static#r=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-account-register"]],decls:45,vars:25,consts:[[1,"container"],[3,"formGroup"],[1,"field","grid"],["for","username",1,"col-fixed"],[1,"col"],["id","username","autocomplete","off","type","text","formControlName","username",3,"ngClass"],[1,"red-text",3,"hidden"],["for","password",1,"col-fixed"],["id","password","type","password","pattern","^[a-zA-Z0-9_@#\\\\&\\\\$]{6,18}$","formControlName","password",3,"ngClass"],["for","confirmPassword",1,"col-fixed"],["id","confirmPassword","type","password","formControlName","confirmPassword","pattern","^[a-zA-Z0-9_@#\\\\&\\\\$]{6,18}$",3,"ngClass"],["for","name",1,"col-fixed"],["id","name","autocomplete","off","type","text","formControlName","name",3,"ngClass"],["for","email",1,"col-fixed"],["id","email","autocomplete","off","type","text","formControlName","email",3,"ngClass"],[1,"field","grid","mt-30"],["label","Enviar",3,"disabled","click"]],template:function(s,r){1&s&&(e.TgZ(0,"div",0)(1,"app-card-form",1)(2,"div",2)(3,"label",3),e._uU(4,"Username"),e.qZA(),e.TgZ(5,"div",4),e._UZ(6,"input",5),e.qZA(),e.TgZ(7,"div",6),e._uU(8," Campo obrigat\xf3rio. "),e.qZA()(),e.TgZ(9,"div",2)(10,"label",7),e._uU(11,"Password"),e.qZA(),e.TgZ(12,"div",4),e._UZ(13,"input",8),e.qZA(),e.TgZ(14,"div",6),e._uU(15," Campo obrigat\xf3rio. "),e.qZA(),e.TgZ(16,"div",6),e._uU(17," A senha deve ter entre 6 e 18 caracteres alfanum\xe9ricos ou os caracteres especiais permitidos. "),e.qZA()(),e.TgZ(18,"div",2)(19,"label",9),e._uU(20,"Confirm Password"),e.qZA(),e.TgZ(21,"div",4),e._UZ(22,"input",10),e.qZA(),e.TgZ(23,"div",6),e._uU(24," Campo obrigat\xf3rio. "),e.qZA(),e.TgZ(25,"div",6),e._uU(26," A senha deve ter entre 6 e 18 caracteres alfanum\xe9ricos ou os caracteres especiais permitidos. "),e.qZA()(),e.TgZ(27,"div",2)(28,"label",11),e._uU(29,"Name"),e.qZA(),e.TgZ(30,"div",4),e._UZ(31,"input",12),e.qZA(),e.TgZ(32,"div",6),e._uU(33," Campo obrigat\xf3rio. "),e.qZA()(),e.TgZ(34,"div",2)(35,"label",13),e._uU(36,"Email"),e.qZA(),e.TgZ(37,"div",4),e._UZ(38,"input",14),e.qZA(),e.TgZ(39,"div",6),e._uU(40," Campo obrigat\xf3rio. "),e.qZA(),e.TgZ(41,"div",6),e._uU(42," Email invalido. "),e.qZA()(),e.TgZ(43,"div",15)(44,"app-button",16),e.NdJ("click",function(){return r.onRegister()}),e.qZA()()()()),2&s&&(e.xp6(1),e.Q6J("formGroup",r.formRegister),e.xp6(5),e.Q6J("ngClass",e.VKq(15,l,r.formRegister.controls.username.errors)),e.xp6(1),e.Q6J("hidden",!(null!=r.formRegister.controls.username.errors&&r.formRegister.controls.username.errors.required)),e.xp6(6),e.Q6J("ngClass",e.VKq(17,l,r.formRegister.controls.password.errors)),e.xp6(1),e.Q6J("hidden",!(null!=r.formRegister.controls.password.errors&&r.formRegister.controls.password.errors.required)),e.xp6(2),e.Q6J("hidden",!r.formRegister.controls.password.hasError("pattern")),e.xp6(6),e.Q6J("ngClass",e.VKq(19,l,r.formRegister.controls.confirmPassword.errors)),e.xp6(1),e.Q6J("hidden",!(null!=r.formRegister.controls.confirmPassword.errors&&r.formRegister.controls.confirmPassword.errors.required)),e.xp6(2),e.Q6J("hidden",!r.formRegister.controls.confirmPassword.hasError("pattern")),e.xp6(6),e.Q6J("ngClass",e.VKq(21,l,r.formRegister.controls.name.errors)),e.xp6(1),e.Q6J("hidden",!(null!=r.formRegister.controls.name.errors&&r.formRegister.controls.name.errors.required)),e.xp6(6),e.Q6J("ngClass",e.VKq(23,l,r.formRegister.controls.email.errors)),e.xp6(1),e.Q6J("hidden",!(null!=r.formRegister.controls.email.errors&&r.formRegister.controls.email.errors.required)),e.xp6(2),e.Q6J("hidden",!(null!=r.formRegister.controls.email.errors&&r.formRegister.controls.email.errors.email)),e.xp6(3),e.Q6J("disabled",r.disableButtonForm()))},dependencies:[p.mk,o.Fj,o.JJ,o.JL,o.c5,o.sg,o.u,f.J,y.r],styles:[".container[_ngcontent-%COMP%]{min-height:74.97vh;height:100%;justify-content:center;display:flex;flex-direction:column}.label[_ngcontent-%COMP%]{width:100px}.mt-30[_ngcontent-%COMP%]{margin-top:30px}"]})}return t})()},{path:":id",component:L,canActivate:[J]}];let M=(()=>{class t{static#e=this.\u0275fac=function(s){return new(s||t)};static#r=this.\u0275mod=e.oAB({type:t});static#t=this.\u0275inj=e.cJS({imports:[m.Bz.forChild(O),m.Bz]})}return t})(),j=(()=>{class t{static#e=this.\u0275fac=function(s){return new(s||t)};static#r=this.\u0275mod=e.oAB({type:t});static#t=this.\u0275inj=e.cJS({imports:[p.ez,R.d,F.j,T.hJ,o.UX,b.m,q.EV,M]})}return t})()}}]);