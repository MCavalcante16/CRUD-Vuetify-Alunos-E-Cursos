(function(e){function t(t){for(var s,n,i=t[0],l=t[1],d=t[2],u=0,m=[];u<i.length;u++)n=i[u],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&m.push(o[n][0]),o[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);c&&c(t);while(m.length)m.shift()();return r.push.apply(r,d||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],s=!0,i=1;i<a.length;i++){var l=a[i];0!==o[l]&&(s=!1)}s&&(r.splice(t--,1),e=n(n.s=a[0]))}return e}var s={},o={app:0},r=[];function n(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=s,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(a,s,function(t){return e[t]}.bind(null,s));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var c=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"02ea":function(e,t,a){},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function o(e){var t=r(e);return a(t)}function r(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}o.keys=function(){return Object.keys(s)},o.resolve=r,e.exports=o,o.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);var s=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[e.$route.meta.public?[a("transition",[a("keep-alive",[a("router-view",{key:e.$route.fullpath})],1)],1)]:[a("v-app-bar",{attrs:{color:"primary",dark:"",dense:"",app:""}},[a("div",{staticClass:"d-flex align-center"},[a("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"/static/images/logo01.png",transition:"scale-transition",width:"40"}})],1),a("v-toolbar-items",{staticClass:"ml-3"},[a("v-btn",{attrs:{to:"/",text:""}},[e._v("Início")])],1),a("v-spacer"),a("span",[e._v("Olá, "+e._s(e.nome))]),a("v-btn",{attrs:{text:""},on:{click:e.logout}},[a("v-icon",[e._v("power_settings_new")])],1)],1),a("v-content",{staticClass:"content"},[a("v-container",{staticClass:"page-wrapper",attrs:{fluid:""}},[a("router-view")],1)],1),a("v-footer",{staticClass:"white pa-3 app--footer",attrs:{height:"auto",app:""}},[a("span",{staticClass:"caption"},[e._v("Núcleo de Práticas em Informática © "+e._s((new Date).getFullYear()))])])]],2)},r=[],n=a("bc3a"),i=a.n(n),l={name:"App",data:()=>({nome:"gabriel"}),created(){},methods:{logout(){this.$router.push("/logout")}}},d=l,c=(a("dea3"),a("2877")),u=a("6544"),m=a.n(u),p=a("7496"),f=a("40dc"),b=a("8336"),h=a("a523"),v=a("a75b"),j=a("553a"),g=a("132d"),k=a("adda"),w=a("2fa4"),_=a("2a7f"),x=Object(c["a"])(d,o,r,!1,null,"625286c4",null),y=x.exports;m()(x,{VApp:p["a"],VAppBar:f["a"],VBtn:b["a"],VContainer:h["a"],VContent:v["a"],VFooter:j["a"],VIcon:g["a"],VImg:k["a"],VSpacer:w["a"],VToolbarItems:_["a"]});var T=a("8c4f"),V=a("2f62");const A={token:localStorage.getItem("token"),token_update_date:new Date(localStorage.getItem("token_update_date")),tokenExpirado:!1,permissoes:null,unidadeLotacao:null},C={login({commit:e,dispatch:t},a){return new Promise((t,s)=>{i.a.post("/login",{email:a.email,password:a.password}).then(t=>{const a=new Date;localStorage.setItem("token",t.data.token),localStorage.setItem("token_update_date",a),localStorage.setItem("nome",t.data.username),e("AUTHENTICATE",{token:t.data.token,date:a})}).catch(e=>console.log(e)).finally(()=>t())})},newUser({commit:e,dispatch:t},a){return new Promise((e,t)=>{i.a.post("/newUser",{nome:a.nome,email:a.email,password:a.password,habilitado:a.habilitado}).catch(e=>console.log(e)).finally(()=>e())})},updateToken({commit:e},t){const a=new Date;localStorage.setItem("token",t.token),localStorage.setItem("token_update_date",a),e("UPDATE_AUTH_DATA",{token:t.token,date:a})},removeToken({commit:e}){localStorage.removeItem("token"),localStorage.removeItem("token_update_date"),e("CLEAR_AUTH_DATA")},getUnidadeLotacao({commit:e}){i.a.get("/auth/unidade").then(t=>{e("SET_UNIDADE_LOTACAO",t.data)})}},I={isAuthenticated(e){return null!==e.token},token(e){return e.token},isValidDateToken(e){const t=60,a=parseInt((new Date-e.token_update_date)/1e3/60);return a<t},getUnidadeLotacao(e){return e.unidadeLotacao}},S={AUTHENTICATE:(e,t)=>{e.token=t.token,e.token_update_date=t.date},CLEAR_AUTH_DATA:e=>{e.token=null,e.token_update_date=null},UPDATE_AUTH_DATA:(e,t)=>{e.token=t.token,e.token_update_date=t.date},SET_UNIDADE_LOTACAO:(e,t)=>{e.unidadeLotacao=t}};var O={namespaced:!0,state:A,mutations:S,actions:C,getters:I};s["a"].use(V["a"]);var z=new V["a"].Store({modules:{auth:O}}),D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[a("v-card",{staticClass:"elevation-12"},[a("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[a("v-toolbar-title",[e._v("Login")])],1),a("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-card-text",[a("p",{staticClass:"error--text text-center"},[e._v(e._s(e.error))]),a("v-text-field",{attrs:{label:"Login",name:"email","prepend-icon":"person",type:"text",required:"",rules:e.requiredRule},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("v-text-field",{attrs:{id:"password",label:"Password",name:"password","prepend-icon":"lock",type:"password",required:"",rules:e.requiredRule},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",type:"submit",loading:e.loading,large:""}},[e._v("Entrar")])],1)],1)],1)],1)],1)],1)},E=[],U={props:["to","invalidToken"],data:()=>({valid:!0,loading:!1,email:"",password:"",error:"",requiredRule:[e=>!!e||"Campo obrigatório"]}),created(){this.invalidToken&&(this.error="Sua sessão expirou. Faça login novamente")},methods:{onSubmit(){this.loading=!0,this.$refs.form.validate()&&this.$store.dispatch("auth/login",{email:this.email,password:this.password}).then(()=>{this.$store.getters["auth/isAuthenticated"]?this.$router.push("/"):this.error="Usuário e/ou senha inválidos"}),this.loading=!1}},computed:{...Object(V["b"])({token:e=>e.auth.token})}},$=U,q=a("b0af"),L=a("99d9"),P=a("62ad"),F=a("4bd4"),B=a("0fd9"),N=a("8654"),R=a("71d9"),H=Object(c["a"])($,D,E,!1,null,"2da06b27",null),M=H.exports;m()(H,{VBtn:b["a"],VCard:q["a"],VCardActions:L["a"],VCardText:L["b"],VCol:P["a"],VContainer:h["a"],VForm:F["a"],VRow:B["a"],VSpacer:w["a"],VTextField:N["a"],VToolbar:R["a"],VToolbarTitle:_["b"]});var Y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-card-widget",{attrs:{enableActions:"",title:"Página Inicial"}},[a("div",{attrs:{slot:"widget-header-action"},slot:"widget-header-action"}),a("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.usuarios,"items-per-page":5},scopedSlots:e._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:"",color:"white"}},[a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-spacer"),a("v-dialog",{attrs:{"max-width":"650px"},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on;return[a("v-btn",e._g({staticClass:"mb-2",attrs:{color:"primary",dark:""}},s),[e._v("New Item")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Nome"},model:{value:e.editedItem.nome,callback:function(t){e.$set(e.editedItem,"nome",t)},expression:"editedItem.nome"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Email"},model:{value:e.editedItem.email,callback:function(t){e.$set(e.editedItem,"email",t)},expression:"editedItem.email"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-switch",{attrs:{label:"Habilitado: "+e.editedItem.habilitado.toString()},model:{value:e.editedItem.habilitado,callback:function(t){e.$set(e.editedItem,"habilitado",t)},expression:"editedItem.habilitado"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("Cancel")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v("Save")])],1)],1)],1)],1)]},proxy:!0},{key:"item.acoes",fn:function(t){var s=t.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(s)}}},[e._v("mdi-pencil")]),a("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(s)}}},[e._v("mdi-delete")])]}},{key:"no-data",fn:function(){return[a("v-btn",{attrs:{color:"primary"},on:{click:e.initialize}},[e._v("Reset")])]},proxy:!0}])})],1)],1),a("v-btn",{staticStyle:{float:"left"},attrs:{text:""},on:{click:e.newUser}},[a("v-icon",[e._v("mdi-plus")])],1),a("p",{staticStyle:{"margin-top":"7px","padding-left":"10px"}},[e._v("Adicionar Novo Usuário")])],1)])],1)},G=[],J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"v-card-widget"}},[a("v-card",{attrs:{outlined:""}},[e.enableHeader?a("v-toolbar",{attrs:{dark:e.dark,color:e.color,dense:"",flat:""}},[a("v-toolbar-title",[a("span",{staticClass:"title font-weight-medium"},[e._v(e._s(e.title))])]),a("v-spacer"),e._t("widget-header-action")],2):e._e(),e.enableHeader?a("v-divider"):e._e(),a("v-card-text",{class:e.contentBg},[e._t("widget-content")],2),e.enableActions?a("v-divider"):e._e(),e.enableActions?a("v-card-actions",[e._t("widget-actions")],2):e._e()],1)],1)},Z=[],W={name:"v-card-widget",props:{title:{type:String},color:{type:String,default:"transparent"},enableHeader:{type:Boolean,default:!0},contentBg:{type:String,default:"white"},enableActions:{type:Boolean,default:!1}},data(){return{}},computed:{dark(){return"transparent"!==this.color}}},K=W,Q=a("ce7e"),X=Object(c["a"])(K,J,Z,!1,null,null,null),ee=X.exports;m()(X,{VCard:q["a"],VCardActions:L["a"],VCardText:L["b"],VDivider:Q["a"],VSpacer:w["a"],VToolbar:R["a"],VToolbarTitle:_["b"]});const te="https://sigec.quixada.ufc.br/api",ae=`${te}`,se=i.a.create({baseURL:ae});se.interceptors.request.use((function(e){return z.getters["auth/isValidDateToken"]&&(e.headers.Authorization=z.getters["auth/token"]),e}),(function(e){return Promise.reject(e)})),se.interceptors.response.use(e=>(e.headers.hasOwnProperty("authorization")&&z.dispatch("auth/updateToken",{token:e.headers.authorization}),e),e=>{if(401!==e.response.status&&403!==e.response.status)throw e;{z.dispatch("auth/removeToken");const t=e.response.data.path,a=t.split(window.location.origin).pop();Te.push({name:"Login",params:{to:a,invalidToken:!0}})}});var oe=se;const re="/usuarios";var ne={getByAutenticacao(){return oe.get(`${re}/usuario`)},getAll(){return oe.get(`${re}`)}};const ie={usuario:ne},le={get:e=>ie[e]},de=le.get("usuario");var ce={name:"home",components:{VCardWidget:ee},data:()=>({dialog:!1,headers:[{text:"Nome",align:"left",value:"nome"},{text:"Email",value:"email"},{text:"Usuário Ativo",value:"habilitado",sortable:!1},{text:"Ações",value:"acoes",sortable:!1}],usuarios:[],editedIndex:-1,editedItem:{nome:"nome",email:"email",habilitado:"habilitado"},defaultItem:{nome:"",email:"",habilitado:!1}}),created(){de.getAll().then(e=>{this.usuarios=e.data}).catch(console.error)},computed:{formTitle(){return-1===this.editedIndex?"New Item":"Edit Item"}},methods:{newUser(){this.$router.push("/newUser")},editItem(e){this.editedIndex=this.usuarios.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem(e){const t=this.usuarios.indexOf(e);confirm("Are you sure you want to delete this item?")&&this.usuarios.splice(t,1)},close(){this.dialog=!1,setTimeout(()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1},300)},save(){this.editedIndex>-1?Object.assign(this.usuarios[this.editedIndex],this.editedItem):this.usuarios.push(this.editedItem),this.close()}}},ue=ce,me=a("8fea"),pe=a("169a"),fe=a("b73d"),be=Object(c["a"])(ue,Y,G,!1,null,null,null),he=be.exports;m()(be,{VBtn:b["a"],VCard:q["a"],VCardActions:L["a"],VCardText:L["b"],VCardTitle:L["c"],VCol:P["a"],VContainer:h["a"],VDataTable:me["a"],VDialog:pe["a"],VDivider:Q["a"],VIcon:g["a"],VRow:B["a"],VSpacer:w["a"],VSwitch:fe["a"],VTextField:N["a"],VToolbar:R["a"]});var ve=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[a("v-card",{staticClass:"elevation-12"},[a("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[a("v-toolbar-title",[e._v("Login")])],1),a("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-card-text",[a("p",{staticClass:"error--text text-center"},[e._v(e._s(e.error))]),a("v-text-field",{attrs:{label:"Nome",name:"nome","prepend-icon":"person",type:"text",required:"",rules:e.rules.required},model:{value:e.nome,callback:function(t){e.nome=t},expression:"nome"}}),a("v-text-field",{attrs:{label:"E-mail",name:"email","prepend-icon":"mdi-email",type:"text",required:"",rules:[e.rules.required,e.rules.email]},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("v-text-field",{attrs:{id:"password",label:"Password",name:"password","prepend-icon":"lock",type:"password",required:"",rules:e.rules.required},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("v-switch",{staticClass:"mx-2",attrs:{label:"Usuário Ativo"},model:{value:e.habilitado,callback:function(t){e.habilitado=t},expression:"habilitado"}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{staticStyle:{width:"100%"},attrs:{color:"primary",type:"submit",loading:e.loading,large:""}},[e._v("Cadastrar")])],1)],1)],1)],1)],1)],1)},je=[],ge={props:["to","invalidToken"],data:()=>({valid:!0,loading:!1,nome:"",email:"",password:"",habilitado:!0,error:"",rules:{required:e=>!!e||"Required.",counter:e=>e.length<=20||"Max 20 characters",email:e=>{const t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)||"Invalid e-mail."}}}),created(){this.invalidToken&&(this.error="Sua sessão expirou. Faça login novamente")},methods:{onSubmit(){this.loading=!0,this.$refs.form.validate()&&this.$store.dispatch("auth/newUser",{nome:this.nome,email:this.email,password:this.password,habilitado:this.habilitado}).then(()=>{this.$store.getters["auth/isAuthenticated"]?this.$router.push("/"):this.error="Informações Inválidas: Tente um email diferente."}),this.loading=!1}},computed:{...Object(V["b"])({token:e=>e.auth.token})}},ke=ge,we=Object(c["a"])(ke,ve,je,!1,null,"b08a0a40",null),_e=we.exports;m()(we,{VBtn:b["a"],VCard:q["a"],VCardActions:L["a"],VCardText:L["b"],VCol:P["a"],VContainer:h["a"],VForm:F["a"],VRow:B["a"],VSpacer:w["a"],VSwitch:fe["a"],VTextField:N["a"],VToolbar:R["a"],VToolbarTitle:_["b"]});var xe=[{path:"/",name:"Home",component:he},{path:"/login",meta:{public:!0},props:!0,name:"Login",component:M},{path:"/newUser",name:"newUser",component:_e},{path:"/logout",meta:{breadcrumb:!0},name:"Logout",beforeEnter(e,t,a){z.dispatch("auth/logout",!1)},component:M}];s["a"].use(T["a"]);const ye=new T["a"]({mode:"history",base:"/",linkActiveClass:"active",routes:xe});ye.afterEach((e,t)=>{}),ye.beforeEach((e,t,a)=>{!e.matched.some(e=>e.meta.requiresAuth)||localStorage.getItem("token")?a():a("/login")});var Te=ye,Ve=a("f309"),Ae=a("eea9"),Ce=a.n(Ae);a("5363");s["a"].use(Ve["a"]);var Ie=new Ve["a"]({theme:{themes:{light:{primary:"#2D5269",secondary:"#348ECA",accent:"#82B1FF",error:"#F0656B",info:"#2196F3",success:"#00ABA4",warning:"#ff9800",blue_gray:"#78909C"}}},lang:{locales:{pt:Ce.a},current:"pt"},icons:{iconfont:"mdi"}}),Se=a("c1df"),Oe=a.n(Se),ze=e=>e?Oe()(e).format("DD/MM/YYYY"):"",De=a("2ead"),Ee=a.n(De);i.a.defaults.baseURL="https://sigec.quixada.ufc.br/api",i.a.interceptors.request.use((function(e){return z.getters["auth/isValidDateToken"]&&(e.headers.Authorization=z.getters["auth/token"]),e}),(function(e){return Promise.reject(e)})),i.a.interceptors.response.use(e=>(e.headers.hasOwnProperty("authorization")&&z.dispatch("auth/updateToken",{token:e.headers.authorization}),e),e=>{if(401!==e.response.status&&403!==e.response.status)throw e;{z.dispatch("auth/removeToken");const t=e.response.data.path,a=t.split(window.location.origin).pop();Te.push({name:"Login",params:{to:a,invalidToken:!0}})}}),s["a"].config.productionTip=!1,s["a"].filter("date",ze),s["a"].use(Ee.a),new s["a"]({router:Te,store:z,vuetify:Ie,render:function(e){return e(y)}}).$mount("#app")},dea3:function(e,t,a){"use strict";var s=a("02ea"),o=a.n(s);o.a}});
//# sourceMappingURL=app.a6822d7d.js.map