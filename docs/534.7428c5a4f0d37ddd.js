"use strict";(self.webpackChunkclickonaute_fr=self.webpackChunkclickonaute_fr||[]).push([[534],{1534:(b,p,u)=>{u.r(p),u.d(p,{FaqModule:()=>T});var r=u(6814),d=u(2377),e=u(4946);let m=(()=>{class t{static#e=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-accessibilite"]],decls:41,vars:0,consts:[[1,"table-of-content"],["href","/faq/accessibilit\xe9#tous"],["href","/faq/accessibilit\xe9#tools"],["href","/faq/accessibilit\xe9#bpa"],["id","tous"],["id","tools"],["id","bpa"]],template:function(i,o){1&i&&(e.TgZ(0,"main")(1,"h1"),e._uU(2,"Qu'es-ce que l'acc\xe9ssibilit\xe9e ?"),e.qZA(),e.TgZ(3,"ul",0)(4,"sup"),e._uU(5,"Dans cet article, je vais vous faire d\xe9couvrir ce que sont :"),e.qZA(),e.TgZ(6,"li")(7,"a",1),e._uU(8,"Le web acc\xe9ssible \xe0 tous"),e.qZA()(),e.TgZ(9,"li")(10,"a",2),e._uU(11,"Les outils d'accessibilit\xe9"),e.qZA()(),e.TgZ(12,"li")(13,"a",3),e._uU(14,"Les bonne pratiques en mati\xe8re d'accessibilit\xe9"),e.qZA()()(),e.TgZ(15,"section",4)(16,"h2"),e._uU(17,"Une fen\xeatre sur le monde"),e.qZA(),e.TgZ(18,"p"),e._uU(19," L'accessibilit\xe9 c'est le fait de rendre utilisable un service pour toute cat\xe9gorie de personnes. "),e._UZ(20,"br"),e._uU(21," Prenons l'exemple d'un escalier, pour en faire fluidifier la circulation dans les grand magasins, Jesse W. Reno \xe0 inventer en 1891 l'escalator. "),e._UZ(22,"br"),e._uU(23," Cet exemple simple montre comment un syst\xe9me qui avait initialement une vid\xe9e commerciale b\xe9n\xe9ficie aujourdhui \xe0 des personnes ayant des probl\xe8me de mobilit\xe9. Inversement la r\xe9glementation impose asujourd'hui de garantir un acc\xe8s facile aux services publiques pour les personnes circulant en fauteils roulants. "),e._UZ(24,"br"),e._uU(25," Ces am\xe9nagements profite au final aussi aux parents avec une pousette, aux livreurs, "),e.TgZ(26,"del"),e._uU(27,"aux skateurs"),e.qZA(),e._uU(28," (non c'est pas bien). "),e.qZA(),e.TgZ(29,"p"),e._uU(30," Internet est sans conteste le media qui \xe0 permis d'abolir les fronti\xe8re de l'information. "),e._UZ(31,"br"),e._uU(32," L'acc\xe8s en tous lieux et \xe0 tous moments de contenu provenant du monde entier \xe0 \xe9t\xe9 une veritable r\xe9volution pour les personnes isol\xe9e g\xe9ographiquement ou physiquemnet. "),e._UZ(33,"br"),e._uU(34," Les personnes atteintent de d\xe9fitiences visuelle ou motrice ont elles aussi la possibilit\xe9 de profiter des services qu'offre internet. "),e._UZ(35,"br"),e._uU(36," Le principe de l'accessibilit\xe9 nous encourage \xe0 concevoir des sites qui leur facilite la t\xe2che, ce qui optimise aussi leur utilisation pour le grand publiques. "),e.qZA()(),e.TgZ(37,"section",5)(38,"h2"),e._uU(39,"Les outils d'accessibilit\xe9"),e.qZA()(),e._UZ(40,"section",6),e.qZA())}})}return t})();var l=u(5619),Z=u(8645),g=u(1687),f=u(7398),n=u(95);function E(t,c){if(1&t&&(e.TgZ(0,"li"),e._uU(1),e.qZA()),2&t){const s=e.oxw(2);e.xp6(1),e.AsE(" et vous vous d\xe9placez \xe0 ",s.position.speed," m\xe9tres/secondes \xe0 ",s.position.heading," degr\xe9s par rapport au nord. ")}}function q(t,c){if(1&t&&(e.TgZ(0,"ul"),e._uU(1," Selon votre navigateur vous vous trouvez \xe0 "),e.TgZ(2,"li"),e._uU(3),e.qZA(),e.TgZ(4,"li"),e._uU(5),e.qZA(),e.YNc(6,E,2,2,"li",6),e.ALo(7,"async"),e.qZA()),2&t){const s=e.oxw();e.xp6(3),e.hij("",s.position.longitude," de longitude"),e.xp6(2),e.hij("",s.position.latitude," de latitude"),e.xp6(1),e.Q6J("ngIf",e.lcZ(7,3,s.showDirection$))}}function h(t,c){1&t&&(e.TgZ(0,"sup",17),e._uU(1," Magnifique mon po\xeame \xe0 \xe9t\xe9 sauvegard\xe9 ! "),e.qZA())}function v(t,c){1&t&&(e.TgZ(0,"p",17),e._uU(1,"cookie cr\xe9\xe9 !"),e.qZA())}const _=[{path:"cookies",component:(()=>{class t{constructor(){this.informations=navigator,this.showPostion$=new l.X(!1),this.showDirection$=new l.X(!1),this.showDatas$=new l.X(!1),this.cookieCreated$=new Z.x,this.savedCookie=!1}ngOnInit(){this.date$=(0,g.F)(1e3).pipe((0,f.U)(()=>(new Date).toLocaleString("fr"))),document.cookie.includes("text")&&(this.myText=document.cookie.split("=")[1],this.savedCookie=!0,"undefined"===this.myText&&(this.savedCookie=!1,this.myText="")),console.log(document.cookie)}askPosition(){navigator.geolocation.getCurrentPosition(s=>{this.position=s.coords,this.showPostion$.next(!0),this.position.speed&&this.showDirection$.next(!0)})}saveMyData(){document.cookie=`text=${this.myText}; max-age= 86400`,this.cookieCreated$.next(!0)}reloadPage(){window.location.reload()}deleteCookie(){document.cookie="text=suprimed cookie; max-age= 0",window.location.reload()}static#e=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-what-cookies"]],decls:127,vars:14,consts:[[1,"table-of-content"],["href","/faq/cookies#talk"],["href","/faq/cookies#targeting"],["href","/faq/cookies#audits"],["id","talk"],[3,"click"],[4,"ngIf"],["textSaver","ngForm"],["for","data"],["class","messages",4,"ngIf"],["name","myText","id","data","cols","40","rows","5",3,"ngModel","ngModelChange"],[1,"summary"],["id","targeting"],["href","https://www.cnil.fr/fr/la-loi-informatique-et-libertes#article82"],["href","https://www.cnil.fr/fr/cookies-sanction-de-60-millions-deuros-lencontre-de-microsoft-ireland-operations-limited"],["id","audits"],[1,"info"],[1,"messages"]],template:function(i,o){1&i&&(e.TgZ(0,"main")(1,"h1"),e._uU(2,"Tout sur les cookies"),e.qZA(),e.TgZ(3,"ul",0)(4,"sup"),e._uU(5,"Dans cet article, je vais vous expliquer ce que sont"),e.qZA(),e.TgZ(6,"li")(7,"a",1),e._uU(8,"les cookies de fonctionalit\xe9"),e.qZA()(),e.TgZ(9,"li")(10,"a",2),e._uU(11,"les cookies de ciblage"),e.qZA()(),e.TgZ(12,"li")(13,"a",3),e._uU(14,"les cookies d'audience"),e.qZA()()(),e.TgZ(15,"h3"),e._uU(16,"Votre navigateur \xe9coute !"),e.qZA(),e.TgZ(17,"p"),e._uU(18," Les images de ce site et le texte que vous lisez actuellement sont stock\xe9s sur un appareil quelque part sur terre."),e._UZ(19,"br"),e._uU(20," Votre navigateur* r\xe9cup\xe8re ces informations et les traduit sur votre \xe9cran mais il peut faire bien plus pour vous faciliter la vie. "),e.TgZ(21,"sub"),e._uU(22,"*FireFox,Chrome,Opera,Edge,Safari..."),e.qZA()(),e.TgZ(23,"h3",4),e._uU(24,"Votre navigateur parle !"),e.qZA(),e.TgZ(25,"ul"),e._uU(26," En effet, votre navigateur peut diffuser des informations provenant de votre appareil telles que: "),e.TgZ(27,"li"),e._uU(28),e.ALo(29,"async"),e.qZA(),e.TgZ(30,"li"),e._uU(31),e.qZA(),e.TgZ(32,"li"),e._uU(33),e.qZA()(),e.TgZ(34,"p"),e._uU(35," Mais il peut \xe9galement obtenir des informations jug\xe9es plus sensibles comme votre localisation. "),e._UZ(36,"br"),e._uU(37," Dans ce cas, il vous demandera votre autorisation. Faites l'essai, cliquez sur le bouton ci-dessous: "),e.qZA(),e.TgZ(38,"button",5),e.NdJ("click",function(){return o.askPosition()}),e._uU(39,"cliquez puis autorisez"),e.qZA(),e.YNc(40,q,8,5,"ul",6),e.ALo(41,"async"),e.TgZ(42,"form",7)(43,"p"),e._uU(44," Comme vous l'avez compris, votre navigateur peut \xe9mettre et recevoir des donn\xe9es venant de votre appareil ou d'un serveur de page web mais aussi recevoir des informations de votre part. "),e._UZ(45,"br"),e.qZA(),e.TgZ(46,"label",8),e._uU(47,"Par exemple, faites l'essai, \xe9crivez le plus beau po\xeame de votre vie dans le champs ci dessous"),e.qZA(),e.YNc(48,h,2,0,"sup",9),e.TgZ(49,"textarea",10),e.NdJ("ngModelChange",function(A){return o.myText=A}),e._uU(50),e.qZA(),e.TgZ(51,"p"),e._uU(52," A pr\xe9sent, que ce passe t-il si vous quittez la page ou que l'actualisez ? "),e._UZ(53,"br"),e._uU(54," Et oui, le navigateur efface toutes donn\xe9es re\xe7ues, que ce soit par votre appareil, l'appareil distant qui fourni cette page web ou \xe9mise par vous m\xeame ! "),e._UZ(55,"br"),e._uU(56," Un beau po\xeame comme celui ci merite d'\xeatre sauvegard\xe9, heureusement votre navigateur dispose d'une m\xe9moire de stockage dans laquelle il peut sauvegarder des donn\xe9es. "),e.qZA()(),e.TgZ(57,"ol"),e._uU(58," Testez : "),e.TgZ(59,"li")(60,"button",5),e.NdJ("click",function(){return o.saveMyData()}),e._uU(61," Sauvegardez votre texte dans un cookie "),e.qZA(),e.YNc(62,v,2,0,"p",9),e.ALo(63,"async"),e.qZA(),e.TgZ(64,"li")(65,"button",5),e.NdJ("click",function(){return o.reloadPage()}),e._uU(66,"Rechargez la page"),e.qZA()(),e.TgZ(67,"li")(68,"button",5),e.NdJ("click",function(){return o.deleteCookie()}),e._uU(69,"Effacez le cookie"),e.qZA()()(),e.TgZ(70,"ul",11),e._uU(71," En resum\xe9, un navigateur : "),e.TgZ(72,"li"),e._uU(73," re\xe7oit des informations d'appareils distants, de l'appareil sur lequel il s'execute ou venant de l'utilisateur "),e.qZA(),e.TgZ(74,"li"),e._uU(75," peut stocker ces informations dans des cookies en vue de les r\xe9utiliser "),e.qZA()(),e.TgZ(76,"h2",12),e._uU(77,"Les cookies de ciblage"),e.qZA(),e.TgZ(78,"p"),e._uU(79," Comme nous l'avons vu pr\xe9c\xe9demment les cookies sont tr\xe8s utiles \xe0 l'utilisateur. C'est ce qui permet \xe0 l'utilisateur de conserver une liste d'articles dans un panier sur un site marchand, un identifiant pour se connecter \xe0 un compte ou encore une copie crypt\xe9e de son mot de passe sans avoir \xe0 tout r\xe9\xe9crire \xe0 chaque connexion. "),e._UZ(80,"br"),e._uU(81," Merci les cookies ! "),e.qZA(),e.TgZ(82,"h3"),e._uU(83,"Du contenu personalis\xe9"),e.qZA(),e.TgZ(84,"p"),e._uU(85," Certains sites internet vous proposent \xe9galement de stocker dans votre navigateur des informations personnelles afin de vous proposer du contenu adapt\xe9 \xe0 votre \xe2ge, vos centres d'int\xearets ou encore votre localit\xe9. "),e._UZ(86,"br"),e.TgZ(87,"cite"),e._UZ(88,"hr"),e._uU(89," Bien pratique tout \xe7a mais ces informations peuvent elles \xeatre communiqu\xe9es \xe0 des tiers ?"),e.qZA(),e._UZ(90,"br"),e._uU(91," Oui, ces informations stocker dans votre navigateur pourraient \xeatre luent par des sites partenaires en vue d'un ciblage marketing, cependant dans ce cas, "),e.TgZ(92,"a",13),e._uU(93,"la loi informatique et libert\xe9 "),e.qZA(),e._uU(94," impose le consentement explicite de l'utilisateur, sans quoi le propri\xe9taire du site s'exposerait \xe0 "),e.TgZ(95,"a",14),e._uU(96,"une amende"),e.qZA(),e._uU(97," pouvant atteindre plusieurs milliers d'euros ! "),e._UZ(98,"br"),e._uU(99," On ne rigole pas avec les donn\xe9es personnelles ! "),e.qZA(),e.TgZ(100,"h2",15),e._uU(101,"Les cookies d'audience, comme \xe0 la t\xe9l\xe9"),e.qZA(),e.TgZ(102,"div",16)(103,"i")(104,"b"),e._uU(105,"Le saviez vous ?"),e.qZA(),e._uU(106," pour mesurer l'audience d'une chaine, les instituts de m\xe9diametrie ins\xe8rent une marque \u2013 un tatouage - inaudible dans le flux audio \xe9mis par les cha\xeenes de t\xe9l\xe9vision ; cette marque porte un identifiant unique propre \xe0 chaque cha\xeene ainsi que l\u2019heure et la date de diffusion du programme \xe9mis en direct ou regard\xe9 en Replay. "),e.qZA()(),e.TgZ(107,"p"),e._uU(108," Comme pour la t\xe9l\xe9vision, connaitre l'audience d'un site, voir m\xeame d'une partie sp\xe9cifique d'un site internet est essentiel \xe0 son optimisation. "),e.qZA(),e.TgZ(109,"p")(110,"a",1),e._uU(111,"Pr\xe9cedemment"),e.qZA(),e._uU(112," je vous expliquais que votre navigateur peut emettre pr\xe9cisemnet ce type d'informations. "),e.qZA(),e.TgZ(113,"ul"),e._uU(114," Il est tr\xe8s utiles au propri\xe9taires de sites de savoir : "),e.TgZ(115,"li"),e._uU(116,"\xe0 qu'elle heure les personnes consulte leurs sites ?"),e.qZA(),e.TgZ(117,"li"),e._uU(118,"de quelle endroit du globe viennent t-elles ?"),e.qZA(),e.TgZ(119,"li"),e._uU(120,"sur qu'elle partie de leur site restent t-elles le plus longtemps ?"),e.qZA(),e.TgZ(121,"li"),e._uU(122,"Consultent t'elle le site depuis un ordinateur ou un smartphone ?"),e.qZA(),e.TgZ(123,"li"),e._uU(124,"Ou encore depuis quel autre site ou moteur de recherche viennent t-elles ?"),e.qZA()(),e.TgZ(125,"p"),e._uU(126,"Bien qu'annonyme "),e.qZA()()),2&i&&(e.xp6(28),e.hij("la date et l'heure : ",e.lcZ(29,8,o.date$),""),e.xp6(3),e.hij("votre langue pr\xe9f\xe9r\xe9e: ",o.informations.language,""),e.xp6(2),e.hij(" Ou encore quel syst\xe9me d'exploitation vous utilisez : ",o.informations.platform," "),e.xp6(7),e.Q6J("ngIf",e.lcZ(41,10,o.showPostion$)),e.xp6(8),e.Q6J("ngIf",o.savedCookie),e.xp6(1),e.Q6J("ngModel",o.myText),e.xp6(1),e.Oqu(o.myText),e.xp6(12),e.Q6J("ngIf",e.lcZ(63,12,o.cookieCreated$)))},dependencies:[r.O5,n._Y,n.Fj,n.JJ,n.JL,n.On,n.F,r.Ov],styles:["form[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}cite[_ngcontent-%COMP%]{font-weight:700}"]})}return t})()},{path:"diy",component:(()=>{class t{static#e=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-diy"]],decls:18,vars:0,consts:[[1,"table-of-content"],["href","/faq/diy#tools"],["href","/faq/diy#cms"],["href","/faq/diy#hebergement"],["id","tools"],["id","cms"],["id","hebergement"]],template:function(i,o){1&i&&(e.TgZ(0,"main")(1,"h1"),e._uU(2,"Cr\xe9er son site soi m\xeame ?"),e.qZA(),e.TgZ(3,"ul",0)(4,"sup"),e._uU(5,"Dans cet article, je vais vous expliquer :"),e.qZA(),e.TgZ(6,"li")(7,"a",1),e._uU(8,"Les outils de creation sans code "),e.qZA()(),e.TgZ(9,"li")(10,"a",2),e._uU(11,"Les avantages et inconvenients des cms"),e.qZA()(),e.TgZ(12,"li")(13,"a",3),e._uU(14,"Les contrats d'hebergement"),e.qZA()()(),e._UZ(15,"section",4)(16,"section",5)(17,"section",6),e.qZA())}})}return t})()},{path:"accessibilit\xe9",component:m},{path:"co\xfbt",component:(()=>{class t{static#e=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-cout"]],decls:18,vars:0,consts:[[1,"table-of-content"],["href","/faq/co\xfbt#steps"],["href","/faq/co\xfbt#presta"],["href","/faq/co\xfbt#hebergement"],["id","steps"],["id","presta"],["id","hebergement"]],template:function(i,o){1&i&&(e.TgZ(0,"main")(1,"h1"),e._uU(2,"Combien co\xfbte un site internet en 2023"),e.qZA(),e.TgZ(3,"ul",0)(4,"sup"),e._uU(5,"Dans cet article, je vais vous expliquer :"),e.qZA(),e.TgZ(6,"li")(7,"a",1),e._uU(8,"Les \xe9tapes de creation d'un site "),e.qZA()(),e.TgZ(9,"li")(10,"a",2),e._uU(11,"Les prestataire pr\xe9sents sur le march\xe9"),e.qZA()(),e.TgZ(12,"li")(13,"a",3),e._uU(14,"Les contrats d'hebergement"),e.qZA()()(),e._UZ(15,"section",4)(16,"section",5)(17,"section",6),e.qZA())}})}return t})()},{path:"seo",component:(()=>{class t{static#e=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-seo"]],decls:18,vars:0,consts:[[1,"table-of-content"],["href","/faq/seo#motor"],["href","/faq/seo#seo"],["href","/faq/seo#optmization"],["id","motor"],["id","seo"],["id","optmization"]],template:function(i,o){1&i&&(e.TgZ(0,"main")(1,"h1"),e._uU(2,"Qu'es ce que le r\xe9f\xe9rencement naturel (ou SEO) ?"),e.qZA(),e.TgZ(3,"ul",0)(4,"sup"),e._uU(5,"Dans cet article, je vais vous expliquer ce que sont"),e.qZA(),e.TgZ(6,"li")(7,"a",1),e._uU(8,"les moteurs de recherche"),e.qZA()(),e.TgZ(9,"li")(10,"a",2),e._uU(11,"les syst\xe9mes de r\xe9f\xe9rencement"),e.qZA()(),e.TgZ(12,"li")(13,"a",3),e._uU(14,"les optimisations de referencement naturel"),e.qZA()()(),e._UZ(15,"section",4)(16,"section",5)(17,"section",6),e.qZA())}})}return t})()}];let U=(()=>{class t{static#e=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275mod=e.oAB({type:t});static#i=this.\u0275inj=e.cJS({imports:[d.Bz.forChild(_),d.Bz]})}return t})(),T=(()=>{class t{static#e=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275mod=e.oAB({type:t});static#i=this.\u0275inj=e.cJS({imports:[r.ez,U,n.u5]})}return t})()}}]);