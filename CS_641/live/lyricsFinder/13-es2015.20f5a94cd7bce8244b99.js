(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{JLuJ:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class i{}var e=u("pMnS"),o=u("oBZk"),s=u("ZZ/e"),r=u("s7LF"),a=u("mrSG"),c=u("IheW");let b=(()=>{class l{constructor(l){this.http=l,this.lyricsData="Lorem IpsumLorem ipsum dolor sit amet c\n  onsectetur adipisicing elit. Eligendi sintexpedita dolorem fugiat possimus \n  officia perspiciatis accusamus commodi eumtotam \n  blanditiis quasi facere vitae quas, nam atque iure quibusdam \n  corporis aeveniet numquam, nesciunt esse natus! \n  Ratione error earum eveniet ? ",this.lyricsBaseURL="https://api.lyrics.ovh/v1/Eminem/Stan"}getLyricsForSongIDWithParam(l,n){let u="https://api.lyrics.ovh/v1";return u=(u=u.concat("/",l)).concat("/",n),console.log("lyricsBaseURL",u),this.lyricsBaseURL=u,this.http.get(u)}getLyricsForSongID(){return this.http.get(this.lyricsBaseURL)}getLyrics(){return this.lyricsData}}return l.ngInjectableDef=t.Hb({factory:function(){return new l(t.Ib(c.c))},token:l,providedIn:"root"}),l})();u("OsyH");let h=(()=>{class l{constructor(l){this.http=l,this.artistTrialURL="https://www.theaudiodb.com/api/v1/json/195233/search.php?s=J%20cole",this.artistBaseURL="https://www.theaudiodb.com/api/v1/json/195233/search.php?s=J%20cole"}getInfoForArtist(l){return console.log("Hi in Audio service",this.artistTrialURL),this.http.get(this.artistTrialURL)}}return l.ngInjectableDef=t.Hb({factory:function(){return new l(t.Ib(c.c))},token:l,providedIn:"root"}),l})();class g{constructor(l,n){this.lyricsService=l,this.audioService=n,this.artistName="",this.artistSongName="",this.songLyrics="NA",this.loadFunc()}loadFunc(){console.log("Yo Sensehack!"),this.lyricsService.getLyricsForSongID().subscribe(l=>{console.log(l),this.songLyrics=JSON.parse(JSON.stringify(l.lyrics))})}onClick(){console.log("Yo Sensehack!"),this.lyricsService.getLyricsForSongIDWithParam(this.artistName,this.artistSongName).subscribe(l=>{this.songLyrics=JSON.parse(JSON.stringify(l.lyrics))}),this.audioService.getInfoForArtist(this.artistName).subscribe(l=>{console.log(l),console.log(JSON.stringify(l))})}onReset(){this.artistName="Kautilya",this.artistSongName="Hustle Free"}loadLyrics(){return a.b(this,void 0,void 0,(function*(){this.songLyrics=yield this.lyricsService.getLyrics()}))}}var d=t.mb({encapsulation:0,styles:[[".welcome-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:35vh;overflow:hidden}.inputField[_ngcontent-%COMP%]{padding:5%}ion-button[_ngcontent-%COMP%]{width:100%}"]],data:{}});function p(l){return t.Eb(0,[(l()(),t.ob(0,0,null,null,6,"ion-header",[],null,null,null,o.B,o.i)),t.nb(1,49152,null,0,s.z,[t.h,t.k,t.x],null,null),(l()(),t.ob(2,0,null,0,4,"ion-toolbar",[],null,null,null,o.L,o.s)),t.nb(3,49152,null,0,s.Ab,[t.h,t.k,t.x],null,null),(l()(),t.ob(4,0,null,0,2,"ion-title",[],null,null,null,o.K,o.r)),t.nb(5,49152,null,0,s.yb,[t.h,t.k,t.x],null,null),(l()(),t.Db(-1,0,[" Tab One "])),(l()(),t.ob(7,0,null,null,48,"ion-content",[["class","padding"]],null,null,null,o.A,o.h)),t.nb(8,49152,null,0,s.s,[t.h,t.k,t.x],null,null),(l()(),t.ob(9,0,null,0,29,"ion-card",[],null,null,null,o.y,o.c)),t.nb(10,49152,null,0,s.k,[t.h,t.k,t.x],null,null),(l()(),t.ob(11,0,null,0,7,"div",[["class","inputField"]],null,null,null,null,null)),(l()(),t.ob(12,0,null,null,6,"ion-input",[["placeholder","Enter your Artist"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0,e=l.component;return"ionBlur"===n&&(i=!1!==t.zb(l,14)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==t.zb(l,14)._handleInputEvent(u.target)&&i),"ngModelChange"===n&&(i=!1!==(e.artistName=u)&&i),i}),o.D,o.k)),t.nb(13,49152,null,0,s.E,[t.h,t.k,t.x],{placeholder:[0,"placeholder"]},null),t.nb(14,16384,null,0,s.Ib,[t.k],null,null),t.Ab(1024,null,r.b,(function(l){return[l]}),[s.Ib]),t.nb(16,671744,null,0,r.e,[[8,null],[8,null],[8,null],[6,r.b]],{model:[0,"model"]},{update:"ngModelChange"}),t.Ab(2048,null,r.c,null,[r.e]),t.nb(18,16384,null,0,r.d,[[4,r.c]],null,null),(l()(),t.ob(19,0,null,0,7,"div",[["class","inputField"]],null,null,null,null,null)),(l()(),t.ob(20,0,null,null,6,"ion-input",[["placeholder","Enter your Song Name"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0,e=l.component;return"ionBlur"===n&&(i=!1!==t.zb(l,22)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==t.zb(l,22)._handleInputEvent(u.target)&&i),"ngModelChange"===n&&(i=!1!==(e.artistSongName=u)&&i),i}),o.D,o.k)),t.nb(21,49152,null,0,s.E,[t.h,t.k,t.x],{placeholder:[0,"placeholder"]},null),t.nb(22,16384,null,0,s.Ib,[t.k],null,null),t.Ab(1024,null,r.b,(function(l){return[l]}),[s.Ib]),t.nb(24,671744,null,0,r.e,[[8,null],[8,null],[8,null],[6,r.b]],{model:[0,"model"]},{update:"ngModelChange"}),t.Ab(2048,null,r.c,null,[r.e]),t.nb(26,16384,null,0,r.d,[[4,r.c]],null,null),(l()(),t.ob(27,0,null,0,11,"ion-row",[],null,null,null,o.F,o.m)),t.nb(28,49152,null,0,s.hb,[t.h,t.k,t.x],null,null),(l()(),t.ob(29,0,null,0,4,"ion-col",[["size","6"]],null,null,null,o.z,o.g)),t.nb(30,49152,null,0,s.r,[t.h,t.k,t.x],{size:[0,"size"]},null),(l()(),t.ob(31,0,null,0,2,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onClick()&&t),t}),o.u,o.b)),t.nb(32,49152,null,0,s.i,[t.h,t.k,t.x],null,null),(l()(),t.Db(-1,0,[" Search "])),(l()(),t.ob(34,0,null,0,4,"ion-col",[["size","6"]],null,null,null,o.z,o.g)),t.nb(35,49152,null,0,s.r,[t.h,t.k,t.x],{size:[0,"size"]},null),(l()(),t.ob(36,0,null,0,2,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onClick()&&t),t}),o.u,o.b)),t.nb(37,49152,null,0,s.i,[t.h,t.k,t.x],null,null),(l()(),t.Db(-1,0,[" Reset "])),(l()(),t.ob(39,0,null,0,9,"ion-card",[],null,null,null,o.y,o.c)),t.nb(40,49152,null,0,s.k,[t.h,t.k,t.x],null,null),(l()(),t.ob(41,0,null,0,7,"ion-card-header",[],null,null,null,o.v,o.d)),t.nb(42,49152,null,0,s.m,[t.h,t.k,t.x],null,null),(l()(),t.ob(43,0,null,0,2,"ion-card-subtitle",[],null,null,null,o.w,o.e)),t.nb(44,49152,null,0,s.n,[t.h,t.k,t.x],null,null),(l()(),t.Db(45,0,[" Artist: "," "])),(l()(),t.ob(46,0,null,0,2,"ion-card-title",[],null,null,null,o.x,o.f)),t.nb(47,49152,null,0,s.o,[t.h,t.k,t.x],null,null),(l()(),t.Db(48,0,[" Song: "," "])),(l()(),t.ob(49,0,null,0,6,"ion-text",[["color","primary"]],null,null,null,o.J,o.q)),t.nb(50,49152,null,0,s.vb,[t.h,t.k,t.x],{color:[0,"color"]},null),(l()(),t.ob(51,0,null,0,1,"h1",[],null,null,null,null,null)),(l()(),t.Db(-1,null,["Song Lyrics"])),(l()(),t.ob(53,0,null,0,2,"pre",[["margin","5px"]],null,null,null,null,null)),t.nb(54,16384,null,0,s.c,[t.k],null,null),(l()(),t.Db(55,null,["  "," \n  "]))],(function(l,n){var u=n.component;l(n,13,0,"Enter your Artist"),l(n,16,0,u.artistName),l(n,21,0,"Enter your Song Name"),l(n,24,0,u.artistSongName),l(n,30,0,"6"),l(n,35,0,"6"),l(n,50,0,"primary")}),(function(l,n){var u=n.component;l(n,12,0,t.zb(n,18).ngClassUntouched,t.zb(n,18).ngClassTouched,t.zb(n,18).ngClassPristine,t.zb(n,18).ngClassDirty,t.zb(n,18).ngClassValid,t.zb(n,18).ngClassInvalid,t.zb(n,18).ngClassPending),l(n,20,0,t.zb(n,26).ngClassUntouched,t.zb(n,26).ngClassTouched,t.zb(n,26).ngClassPristine,t.zb(n,26).ngClassDirty,t.zb(n,26).ngClassValid,t.zb(n,26).ngClassInvalid,t.zb(n,26).ngClassPending),l(n,45,0,u.artistName),l(n,48,0,u.artistSongName),l(n,55,0,u.songLyrics)}))}function m(l){return t.Eb(0,[(l()(),t.ob(0,0,null,null,1,"app-tab1",[],null,null,null,p,d)),t.nb(1,49152,null,0,g,[b,h],null,null)],null,null)}var y=t.kb("app-tab1",g,m,{},{},[]),v=u("SVse"),k=u("iInd");u.d(n,"Tab1PageModuleNgFactory",(function(){return x}));var x=t.lb(i,[],(function(l){return t.wb([t.xb(512,t.j,t.X,[[8,[e.a,y]],[3,t.j],t.v]),t.xb(4608,v.i,v.h,[t.s,[2,v.o]]),t.xb(4608,s.a,s.a,[t.x,t.g]),t.xb(4608,s.Eb,s.Eb,[s.a,t.j,t.p]),t.xb(4608,s.Hb,s.Hb,[s.a,t.j,t.p]),t.xb(4608,r.g,r.g,[]),t.xb(1073742336,v.b,v.b,[]),t.xb(1073742336,s.Cb,s.Cb,[]),t.xb(1073742336,r.f,r.f,[]),t.xb(1073742336,r.a,r.a,[]),t.xb(1073742336,k.n,k.n,[[2,k.s],[2,k.m]]),t.xb(1073742336,i,i,[]),t.xb(1024,k.k,(function(){return[[{path:"",component:g}]]}),[])])}))},OsyH:function(l,n){}}]);