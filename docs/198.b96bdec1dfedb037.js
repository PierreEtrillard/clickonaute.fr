"use strict";(self.webpackChunkclickonaute_fr=self.webpackChunkclickonaute_fr||[]).push([[198],{3198:(G,d,l)=>{l.r(d),l.d(d,{SimulateurModule:()=>L});var e=l(8256),c=l(6895),p=l(8786),a=l(433),h=l(1135),u=l(4004),_=l(9646),C=l(16),v=l(5698),Z=l(5026);let m=(()=>{class i{progressiveMessage$(t){return(0,C.F)(30).pipe((0,u.U)(n=>t[n]),(0,v.q)(t.length),(0,Z.R)((n,s)=>n+s))}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac}),i})(),f=(()=>{class i{constructor(){this.baseSite=800,this.baseEcom=1150,this.baseAppli=1300,this.hebCost=80,this.maquetteCost=220,this.fontCost=75,this.logoCost=300,this.payFeatureCost=300,this.mapCost=120,this.cookiesCost=320,this.accountCost=520}quoteBuilder(t){switch(this.totalCost=0,this.prestations=[],t.scale.type){case"vitrine":this.prestations.push({description:`cr\xe9ation d'un site internet de ${t.scale.pages} pages`,price:this.baseSite+this.baseSite*t.scale.pages/100});break;case"e-commerce":this.prestations.push({description:`cr\xe9ation d'un site internet de e-commerce de ${t.scale.pages} pages`,price:this.baseEcom+this.baseEcom*t.scale.pages/100});break;case"appli":this.prestations.push({description:"cr\xe9ation d'une application web pwa",price:this.baseAppli+this.baseAppli*t.scale.pages/100})}return t.scale.hebergement&&this.prestations.push({description:"assistance pour le choix et l'administration de l'hebergeur du projet",price:this.hebCost}),t.graphicalsAspects.maquette&&this.prestations.push({description:"cr\xe9ation d'une maquette du projet",price:this.maquetteCost+this.maquetteCost*t.scale.pages/100}),t.graphicalsAspects.police&&this.prestations.push({description:"definition de la charte graphique du projet",price:this.fontCost}),t.graphicalsAspects.pics&&this.prestations.push({description:"creation du logo et des illustrations du projet",price:this.logoCost+this.logoCost*t.scale.pages/100}),t.features.payOnline&&this.prestations.push({description:"ajout d'une fonctionnalit\xe9 de paiement en ligne",price:this.payFeatureCost}),t.features.location&&this.prestations.push({description:"plan d'acc\xe9s interactif",price:this.mapCost}),t.features.cookies&&this.prestations.push({description:"cr\xe9ation et param\xe9trage de cookies",price:this.cookiesCost}),t.features.account&&this.prestations.push({description:"cr\xe9ation d'une base de donn\xe9e et d\xe9veloppement d'une interface de connexion s\xe9curis\xe9e aux comptes clients",price:this.accountCost}),this.prestations.forEach(n=>this.totalCost+=n.price),this.prestations.push({description:"co\xfbt estim\xe9 du projet",price:this.totalCost}),this.prestations}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac}),i})();function x(i,o){if(1&i&&(e.TgZ(0,"tr")(1,"td",2),e._uU(2),e.qZA(),e.TgZ(3,"td",3),e._uU(4),e.ALo(5,"currency"),e.qZA()()),2&i){const t=o.$implicit;e.xp6(2),e.hij("",t.description," :"),e.xp6(2),e.Oqu(e.xi3(5,2,t.price,"EUR"))}}function b(i,o){1&i&&(e.TgZ(0,"p",0),e._uU(1," Vous avez souhaitez int\xe9grer une fonctionalit\xe9 non r\xe9pertori\xe9e, contactez-moi pour en discuter. "),e.qZA())}let A=(()=>{class i{constructor(t,n){this.quoteService=t,this.progressiveDisplayService=n,this.message=" La simulation suivante ne constitue pas un devis officiel, merci de me contacter pour une estimation plus pr\xe9cise de votre projet",this.backToSimulator$=new e.vpe}ngOnInit(){this.progressiveMessage$=this.progressiveDisplayService.progressiveMessage$(this.message),this.quote=this.quoteService.quoteBuilder(this.formValues)}reinitializer(){this.backToSimulator$.emit(1)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(f),e.Y36(m))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-result"]],inputs:{formValues:"formValues"},outputs:{backToSimulator$:"backToSimulator$"},decls:18,vars:5,consts:[[1,"messages"],["id","header-table"],[1,"description"],[1,"price"],[4,"ngFor","ngForOf"],["class","messages",4,"ngIf"],["id","button-wrapper"],[1,"space-button",3,"click"],[1,"space-button"],["href","/contact"]],template:function(t,n){1&t&&(e.TgZ(0,"table")(1,"caption")(2,"h3",0),e._uU(3),e.ALo(4,"async"),e.qZA()(),e.TgZ(5,"div",1)(6,"th",2),e._uU(7,"prestations"),e.qZA(),e.TgZ(8,"th",3),e._uU(9,"prix"),e.qZA()(),e.YNc(10,x,6,5,"tr",4),e.YNc(11,b,2,0,"p",5),e.qZA(),e.TgZ(12,"div",6)(13,"button",7),e.NdJ("click",function(){return n.reinitializer()}),e._uU(14,"r\xe9initialiser"),e.qZA(),e.TgZ(15,"button",8)(16,"a",9),e._uU(17,"contact"),e.qZA()()()),2&t&&(e.xp6(3),e.Oqu(e.lcZ(4,3,n.progressiveMessage$)),e.xp6(7),e.Q6J("ngForOf",n.quote),e.xp6(1),e.Q6J("ngIf",n.formValues.features.other))},dependencies:[c.sg,c.O5,c.Ov,c.H9],styles:["table[_ngcontent-%COMP%]{display:flex;flex-direction:column;border:2px solid white;border-radius:10px;min-width:90%;max-width:90%;font-size:x-small}table[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{max-width:95%;height:60px}#header-table[_ngcontent-%COMP%], tr[_ngcontent-%COMP%]{margin:10px;display:flex;justify-content:space-between}.description[_ngcontent-%COMP%]{width:80%;padding-left:15px}.price[_ngcontent-%COMP%]{width:20%;text-align:right;padding-right:15px}tr[_ngcontent-%COMP%]:last-child{margin:10px 0 0;padding-left:9px;padding-right:9px;border-bottom-left-radius:5px;border-bottom-right-radius:5px;background-color:#fff;color:#000}#button-wrapper[_ngcontent-%COMP%]{width:100%;margin:20px;display:flex;justify-content:space-around}"]}),i})();function T(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"nav")(1,"h3"),e._uU(2),e.ALo(3,"async"),e.qZA(),e.TgZ(4,"ul",7)(5,"li",8),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.stepNav(1))}),e.ALo(6,"async"),e.qZA(),e.TgZ(7,"li",8),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.stepNav(2))}),e.ALo(8,"async"),e.qZA(),e.TgZ(9,"li",8),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.stepNav(3))}),e.ALo(10,"async"),e.qZA()(),e.TgZ(11,"div",9),e._uU(12),e.ALo(13,"async"),e.qZA()()}if(2&i){const t=e.oxw();e.xp6(2),e.hij("Etape ",e.lcZ(3,5,t.formFillStep$),""),e.xp6(3),e.Q6J("ngClass",e.lcZ(6,7,t.isSection1filled$)?"step":"stepUnFilled"),e.xp6(2),e.Q6J("ngClass",e.lcZ(8,9,t.isSection2filled$)?"step":"stepUnFilled"),e.xp6(2),e.Q6J("ngClass",e.lcZ(10,11,t.isSection3filled$)?"step":"stepUnFilled"),e.xp6(3),e.Oqu(e.lcZ(13,13,t.progressiveMessage$))}}function F(i,o){1&i&&(e.TgZ(0,"h2",10),e._uU(1,"Cout estim\xe9 du projet"),e.qZA())}function S(i,o){1&i&&(e.TgZ(0,"sub",9),e._uU(1," maximum de pages atteint "),e.qZA())}function M(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"button",30),e.NdJ("click",function(){e.CHM(t);const s=e.oxw(2);return e.KtG(s.stepNav(2))}),e._uU(1," suivant "),e.qZA()}}function y(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"button",31),e.NdJ("click",function(){e.CHM(t);const s=e.oxw(2);return e.KtG(s.showUnFilled(1))}),e._uU(1," suivant "),e.qZA()}}function k(i,o){if(1&i&&(e.TgZ(0,"fieldset",11)(1,"legend"),e._uU(2,"Quel type de projet envisagez vous ?"),e.qZA(),e.TgZ(3,"div",12),e._UZ(4,"input",13),e.TgZ(5,"label",14),e._uU(6,"Un site simple pour \xeatre visible sur le net"),e.qZA()(),e.TgZ(7,"div",12),e._UZ(8,"input",15),e.TgZ(9,"label",16),e._uU(10,"Un site de e-commerce me permettant de d\xe9velopper mon activit\xe9e en ligne "),e.qZA()(),e.TgZ(11,"div",12),e._UZ(12,"input",17),e.TgZ(13,"label",18),e._uU(14,"Une application metier disponible hors ligne"),e.qZA()(),e.TgZ(15,"div",12)(16,"label",19),e._uU(17,"Choisissez le nombre de pages de votre projet (50 maximum)"),e.qZA(),e.YNc(18,S,2,0,"sub",20),e.ALo(19,"async"),e._UZ(20,"input",21),e.qZA(),e.TgZ(21,"div"),e._uU(22," Souhaitez vous une assistance pour choisir et g\xe9rer "),e.TgZ(23,"a",22),e._uU(24," l'hebergement "),e.qZA(),e._uU(25," de votre projet ? "),e.qZA(),e.TgZ(26,"div",23)(27,"label",24),e._uU(28,"oui"),e.qZA(),e._UZ(29,"input",25),e.TgZ(30,"label",26),e._uU(31,"non"),e.qZA(),e._UZ(32,"input",27),e.qZA(),e.YNc(33,M,2,0,"button",28),e.ALo(34,"async"),e.YNc(35,y,2,0,"ng-template",null,29,e.W1O),e.qZA()),2&i){const t=e.MAs(36),n=e.oxw();e.xp6(18),e.Q6J("ngIf",e.lcZ(19,3,n.maxPageReached$)),e.xp6(15),e.Q6J("ngIf",e.lcZ(34,5,n.isSection1filled$))("ngIfElse",t)}}function $(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"button",30),e.NdJ("click",function(){e.CHM(t);const s=e.oxw(2);return e.KtG(s.stepNav(3))}),e._uU(1," suivant "),e.qZA()}}function q(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"button",31),e.NdJ("click",function(){e.CHM(t);const s=e.oxw(2);return e.KtG(s.showUnFilled(2))}),e._uU(1," suivant "),e.qZA()}}function N(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"fieldset",32)(1,"legend"),e._uU(2,"Aspects graphiques"),e.qZA(),e._uU(3," Le visuel de votre projet est il d\xe9fini ? "),e.TgZ(4,"div",12),e._UZ(5,"input",33),e.TgZ(6,"label",34),e._uU(7,"Oui"),e.qZA(),e._UZ(8,"input",35),e.TgZ(9,"label",36),e._uU(10,"Non, je souhaite faire r\xe9aliser une maquette de mon projet"),e.qZA()(),e.TgZ(11,"div",12),e._UZ(12,"input",37),e.TgZ(13,"label",38),e._uU(14,"J'ai choisi les couleurs et police d'\xe9critures du projet."),e.qZA()(),e.TgZ(15,"div",12),e._UZ(16,"input",39),e.TgZ(17,"label",40),e._uU(18,"Je poss\xe8de les logos et illustrations n\xe9cessaires \xe0 mon projet"),e.qZA()(),e.TgZ(19,"button",41),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.stepBackward(1))}),e._uU(20," retour "),e.qZA(),e.YNc(21,$,2,0,"button",28),e.ALo(22,"async"),e.YNc(23,q,2,0,"ng-template",null,42,e.W1O),e.qZA()}if(2&i){const t=e.MAs(24),n=e.oxw();e.xp6(21),e.Q6J("ngIf",e.lcZ(22,2,n.isSection2filled$))("ngIfElse",t)}}function U(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"fieldset",43)(1,"legend"),e._uU(2,"Fonctionalit\xe9s"),e.qZA(),e.TgZ(3,"div",12)(4,"input",44),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.noFeatureClosed())}),e.qZA(),e.TgZ(5,"label",45),e._uU(6,"int\xe9grer le paiement en ligne"),e.qZA()(),e.TgZ(7,"div",12)(8,"input",46),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.noFeatureClosed())}),e.qZA(),e.TgZ(9,"label",47),e._uU(10,"un plan d'acc\xe9s"),e.qZA()(),e.TgZ(11,"div",12)(12,"input",48),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.noFeatureClosed())}),e.qZA(),e.TgZ(13,"label",49),e._uU(14,"mettre en place des cookies de ciblage "),e.TgZ(15,"a",50),e._uU(16,"(voir la pages tout sur les cookies)"),e.qZA()()(),e.TgZ(17,"div",12)(18,"input",51),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.noFeatureClosed())}),e.qZA(),e.TgZ(19,"label",52),e._uU(20,"Cr\xe9ation et gestion de comptes utilisateurs"),e.qZA()(),e.TgZ(21,"div",12)(22,"input",53),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.noFeature())}),e.qZA(),e.TgZ(23,"label",54),e._uU(24,"Je souhaite cr\xe9er un site basique sans fonctionalit\xe9es"),e.qZA()(),e.TgZ(25,"div",12)(26,"input",55),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.noFeatureClosed())}),e.qZA(),e.TgZ(27,"label",56),e._uU(28,"J'ai besoin d'une fonctionalit\xe9 sp\xe9cifique qui n'est pas dans la liste"),e.qZA(),e.TgZ(29,"button",41),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.stepBackward(2))}),e._uU(30," retour "),e.qZA(),e.TgZ(31,"button",57),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.resultBuilder())}),e.ALo(32,"async"),e._uU(33," estimation* "),e.qZA()()()}if(2&i){const t=e.oxw();e.xp6(31),e.Q6J("ngClass",e.lcZ(32,1,t.isAllfilled$)?"space-button":"space-button space-button-disabled")}}function O(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div",58)(1,"app-result",59),e.NdJ("backToSimulator$",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.stepNav(1))}),e.qZA()()}if(2&i){const t=e.oxw();e.xp6(1),e.Q6J("formValues",t.result)}}const E=[{path:"",component:(()=>{class i{constructor(t,n){this.formBuilder=t,this.progressiveDisplayService=n,this.formFillStep$=new h.X(1),this.errorMessage="",this.result={}}ngOnInit(){this.initControlers(),this.initGraphicalsAspectsForm(),this.initScaleForm(),this.initFeaturesForm(),this.initEstimatorForm(),this.initFilledSectionObserver()}initEstimatorForm(){this.estimatorForm=this.formBuilder.group({scale:this.scaleForm,graphicalsAspects:this.graphicalsAspectsForm,features:this.featuresForm})}initScaleForm(){this.scaleForm=this.formBuilder.group({type:this.typeCtrl,hebergement:this.hebergementCtrl,pages:this.pagesCtrl})}initGraphicalsAspectsForm(){this.graphicalsAspectsForm=this.formBuilder.group({maquette:this.maquetteCtrl,pics:this.picsCtrl,police:this.policeCtrl})}initFeaturesForm(){this.featuresForm=this.formBuilder.group({payOnline:this.payOnlineCtrl,location:this.locationCtrl,cookies:this.cookiesCtrl,account:this.accountCtrl,noFeature:this.noFeatureCtrl,other:this.otherCtrl})}initControlers(){this.typeCtrl=this.formBuilder.control("",a.kI.required),this.hebergementCtrl=this.formBuilder.control("",a.kI.required),this.pagesCtrl=this.formBuilder.control(1,[a.kI.required,a.kI.min(1),a.kI.max(50)]),this.maquetteCtrl=this.formBuilder.control("",a.kI.required),this.policeCtrl=this.formBuilder.control(!0),this.picsCtrl=this.formBuilder.control(!0),this.payOnlineCtrl=this.formBuilder.control(!1),this.locationCtrl=this.formBuilder.control(!1),this.cookiesCtrl=this.formBuilder.control(!1),this.accountCtrl=this.formBuilder.control(!1),this.noFeatureCtrl=this.formBuilder.control(!1),this.otherCtrl=this.formBuilder.control(!1)}initFilledSectionObserver(){this.isSection1filled$=this.scaleForm.statusChanges.pipe((0,u.U)(t=>"VALID"===t)),this.maxPageReached$=this.pagesCtrl.statusChanges.pipe((0,u.U)(t=>"INVALID"===t)),this.isSection2filled$=this.graphicalsAspectsForm.statusChanges.pipe((0,u.U)(t=>"VALID"===t)),this.isSection3filled$=this.featuresForm.statusChanges.pipe((0,u.U)(t=>"VALID"===t)),this.isAllfilled$=this.estimatorForm.statusChanges.pipe((0,u.U)(t=>"VALID"===t))}noFeature(){this.featuresForm.reset(),this.noFeatureCtrl.setValue(!0)}noFeatureClosed(){this.noFeatureCtrl.setValue(!1)}stepBackward(t){this.formFillStep$.next(t),1==t&&(this.scaleForm.reset(),this.pagesCtrl.setValue(1)),2==t&&this.graphicalsAspectsForm.reset(),this.progressiveMessage$=this.progressiveDisplayService.progressiveMessage$(`S\xe9lectionnez vos nouveau choix avant de revenir \xe0 l'\xe9tape ${t+1}`)}stepNav(t){this.progressiveMessage$=(0,_.of)(),this.formFillStep$.next(t)}showUnFilled(t){this.progressiveMessage$=this.progressiveDisplayService.progressiveMessage$(`Finalisez l'\xe9tape ${t} avant de passer \xe0 la suivante `)}resultBuilder(){this.estimatorForm.valid?(this.result=this.estimatorForm.value,this.estimatorForm.reset(),this.pagesCtrl.setValue(1),this.formFillStep$.next(4)):this.progressiveMessage$=this.progressiveDisplayService.progressiveMessage$("Merci de compl\xe9ter toutes les \xe9tapes avant l'\xe9dition du devis")}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(a.qu),e.Y36(m))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-simulateur"]],decls:16,vars:17,consts:[[4,"ngIf","ngIfElse"],["resultat",""],[3,"formGroup"],["formGroupName","scale",4,"ngIf"],["formGroupName","graphicalsAspects",4,"ngIf"],["formGroupName","features",4,"ngIf"],["id","result",4,"ngIf"],["id","steps"],[3,"ngClass","click"],[1,"messages"],["id","resultTitle"],["formGroupName","scale"],[1,"sel-wrapper"],["name","type","formControlName","type","id","vitrine","type","radio","value","vitrine"],["for","vitrine"],["name","type","formControlName","type","id","e-commerce","type","radio","value","e-commerce"],["for","e-commerce"],["name","type","formControlName","type","id","appli","type","radio","value","appli"],["for","appli"],["for","pages"],["class","messages",4,"ngIf"],["type","number","id","pages","formControlName","pages","value","1","min","1","max","50"],["routerLink","/faq/co\xfbt"],[1,"radio-wrapper"],["for","hebYes"],["name","hebergement","formControlName","hebergement","id","hebYes","type","radio","value","true"],["for","hebNo"],["name","hebergement","formControlName","hebergement","id","hebNo","type","radio","value","false"],["class","next space-button",3,"click",4,"ngIf","ngIfElse"],["unfilledBtn1",""],[1,"next","space-button",3,"click"],[1,"next","space-button","space-button-disabled",3,"click"],["formGroupName","graphicalsAspects"],["type","radio","id","avec-maquette","formControlName","maquette","value","false"],["for","avec-maquette"],["type","radio","id","sansmaquette","formControlName","maquette","value","true"],["for","sans-maquette"],["type","checkbox","id","police","formControlName","police","value","false"],["for","police"],["type","checkbox","id","pics","formControlName","pics","value","false","unchecked",""],["for","pics"],[1,"space-button","preview",3,"click"],["unfilledBtn2",""],["formGroupName","features"],["type","checkbox","id","payOnline","formControlName","payOnline","value","true",3,"click"],["for","payOnline"],["type","checkbox","id","location","formControlName","location","value","true",3,"click"],["for","location"],["type","checkbox","id","cookies","formControlName","cookies","value","true",3,"click"],["for","cookies"],["routerLink","/faq/cookies"],["type","checkbox","id","account","formControlName","account",3,"click"],["for","account"],["type","checkbox","id","noFeature","formControlName","noFeature",3,"click"],["for","noFeature"],["id","other","type","checkbox","formControlName","other",3,"click"],["for","other"],[1,"space-button","next",3,"ngClass","click"],["id","result"],[3,"formValues","backToSimulator$"]],template:function(t,n){if(1&t&&(e.TgZ(0,"main")(1,"h2"),e._uU(2,"Estimez le co\xfbt de cr\xe9ation de votre site en 3 clics !"),e.qZA(),e.YNc(3,T,14,15,"nav",0),e.ALo(4,"async"),e.YNc(5,F,2,0,"ng-template",null,1,e.W1O),e.TgZ(7,"form",2),e.YNc(8,k,37,7,"fieldset",3),e.ALo(9,"async"),e.YNc(10,N,25,4,"fieldset",4),e.ALo(11,"async"),e.YNc(12,U,34,3,"fieldset",5),e.ALo(13,"async"),e.qZA(),e.YNc(14,O,2,1,"div",6),e.ALo(15,"async"),e.qZA()),2&t){const s=e.MAs(6);e.xp6(3),e.Q6J("ngIf",4!==e.lcZ(4,7,n.formFillStep$))("ngIfElse",s),e.xp6(4),e.Q6J("formGroup",n.estimatorForm),e.xp6(1),e.Q6J("ngIf",1===e.lcZ(9,9,n.formFillStep$)),e.xp6(2),e.Q6J("ngIf",2===e.lcZ(11,11,n.formFillStep$)),e.xp6(2),e.Q6J("ngIf",3===e.lcZ(13,13,n.formFillStep$)),e.xp6(2),e.Q6J("ngIf",4===e.lcZ(15,15,n.formFillStep$))}},dependencies:[c.mk,c.O5,p.rH,a._Y,a.Fj,a.wV,a.Wl,a._,a.JJ,a.JL,a.qQ,a.Fd,a.sg,a.u,a.x0,A,c.Ov],styles:["h2[_ngcontent-%COMP%]{text-align:center;animation:rotateNfade .5s 2s linear reverse forwards;position:relative}h2#resultTitle[_ngcontent-%COMP%]{animation:rotateNfade .5s linear both}nav[_ngcontent-%COMP%]{position:absolute;top:60px;width:100%;animation:rotateNfade .5s 2.2s linear both;display:flex;flex-direction:column;align-items:center;text-align:center}ul[_ngcontent-%COMP%]{display:flex;width:80%;align-items:center;justify-content:space-evenly;padding:0}ul[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]{min-width:33%;height:5px;background-color:#0ff;cursor:pointer}ul[_ngcontent-%COMP%]   .stepUnFilled[_ngcontent-%COMP%]{min-width:33%;height:5px;background-color:gray;cursor:pointer}form[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;text-align:left;margin-bottom:3rem}fieldset[_ngcontent-%COMP%]{display:flex;width:85%;margin-top:20px;flex-direction:column;border-radius:10px;position:relative;background-color:#0009;font-size:1.5rem}fieldset[_ngcontent-%COMP%]   .sel-wrapper[_ngcontent-%COMP%]{display:flex;align-items:start;gap:1rem;margin:1rem 0}fieldset[_ngcontent-%COMP%]   .sel-wrapper[_ngcontent-%COMP%]   #pages[_ngcontent-%COMP%]{font-size:1rem;padding-left:1rem;line-height:2;border:double .2rem;border-radius:.2rem}fieldset[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#0ff}fieldset[_ngcontent-%COMP%]   .radio-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center}fieldset[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;bottom:-25px}fieldset[_ngcontent-%COMP%]   button.preview[_ngcontent-%COMP%]{left:-15px}fieldset[_ngcontent-%COMP%]   button.next[_ngcontent-%COMP%]{right:-15px}#result[_ngcontent-%COMP%], app-result[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;min-width:100%}"]}),i})()}];let P=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[p.Bz.forChild(E),p.Bz]}),i})();const r=void 0,J=["fr",[["AM","PM"],r,r],r,[["D","L","M","M","J","V","S"],["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],["di","lu","ma","me","je","ve","sa"]],r,[["J","F","M","A","M","J","J","A","S","O","N","D"],["janv.","f\xe9vr.","mars","avr.","mai","juin","juil.","ao\xfbt","sept.","oct.","nov.","d\xe9c."],["janvier","f\xe9vrier","mars","avril","mai","juin","juillet","ao\xfbt","septembre","octobre","novembre","d\xe9cembre"]],r,[["av. J.-C.","ap. J.-C."],r,["avant J\xe9sus-Christ","apr\xe8s J\xe9sus-Christ"]],1,[6,0],["dd/MM/y","d MMM y","d MMMM y","EEEE d MMMM y"],["HH:mm","HH:mm:ss","HH:mm:ss z","HH:mm:ss zzzz"],["{1} {0}","{1}, {0}","{1} '\xe0' {0}",r],[",","\u202f",";","%","+","-","E","\xd7","\u2030","\u221e","NaN",":"],["#,##0.###","#,##0\xa0%","#,##0.00\xa0\xa4","#E0"],"EUR","\u20ac","euro",{ARS:["$AR","$"],AUD:["$AU","$"],BEF:["FB"],BMD:["$BM","$"],BND:["$BN","$"],BYN:[r,"\u0440."],BZD:["$BZ","$"],CAD:["$CA","$"],CLP:["$CL","$"],CNY:[r,"\xa5"],COP:["$CO","$"],CYP:["\xa3CY"],EGP:[r,"\xa3E"],FJD:["$FJ","$"],FKP:["\xa3FK","\xa3"],FRF:["F"],GBP:["\xa3GB","\xa3"],GIP:["\xa3GI","\xa3"],HKD:[r,"$"],IEP:["\xa3IE"],ILP:["\xa3IL"],ITL:["\u20a4IT"],JPY:[r,"\xa5"],KMF:[r,"FC"],LBP:["\xa3LB","\xa3L"],MTP:["\xa3MT"],MXN:["$MX","$"],NAD:["$NA","$"],NIO:[r,"$C"],NZD:["$NZ","$"],PHP:[r,"\u20b1"],RHD:["$RH"],RON:[r,"L"],RWF:[r,"FR"],SBD:["$SB","$"],SGD:["$SG","$"],SRD:["$SR","$"],TOP:[r,"$T"],TTD:["$TT","$"],TWD:[r,"NT$"],USD:["$US","$"],UYU:["$UY","$"],WST:["$WS"],XCD:[r,"$"],XPF:["FCFP"],ZMW:[r,"Kw"]},"ltr",function w(i){const t=Math.floor(Math.abs(i)),n=i.toString().replace(/^[^.]*\.?/,"").length,s=parseInt(i.toString().replace(/^[^e]*(e([-+]?\d+))?/,"$2"))||0;return 0===t||1===t?1:0===s&&0!==t&&t%1e6==0&&0===n||!(s>=0&&s<=5)?4:5}],g=void 0,B=[[["minuit","midi","mat.","ap.m.","soir","nuit"],g,["minuit","midi","du matin","de l\u2019apr\xe8s-midi","du soir","du matin"]],[["minuit","midi","mat.","ap.m.","soir","nuit"],g,["minuit","midi","matin","apr\xe8s-midi","soir","nuit"]],["00:00","12:00",["04:00","12:00"],["12:00","18:00"],["18:00","24:00"],["00:00","04:00"]]];var I=l(4466);(0,c.qS)(J,"fr-FR",B);let L=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({providers:[f,{provide:e.soG,useValue:"fr-FR"},m],imports:[c.ez,P,a.UX,I.m]}),i})()}}]);