(function(e){function t(t){for(var n,s,i=t[0],c=t[1],u=t[2],l=0,d=[];l<i.length;l++)s=i[l],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);h&&h(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,s=1;s<a.length;s++){var i=a[s];0!==r[i]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},s={app:0},r={app:0},o=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"48e05ba3"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={about:1};s[e]?t.push(s[e]):0!==s[e]&&a[e]&&t.push(s[e]=new Promise((function(t,a){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"9c06a92d"}[e]+".css",r=c.p+n,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var u=o[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===r))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===n||l===r)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var n=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete s[e],h.parentNode.removeChild(h),a(o)},h.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(h)})).then((function(){s[e]=0})));var n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(h);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+s+")",d.name="ChunkLoadError",d.type=n,d.request=s,a[1](d)}r[e]=void 0}};var h=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var h=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0593":function(e,t,a){},"15ae":function(e,t,a){"use strict";var n,s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-row",[a("v-col",[e.loading?a("div",[e._v("Loading data...")]):e._e(),e.loading?e._e():a("v-data-table",{staticClass:"mt-3",staticStyle:{"max-width":"1000px"},attrs:{items:e.requests1,headers:e.requestHeaders,"items-per-page":10,"hide-default-footer":e.compact,"hide-default-header":e.compact,"hide-pagination":!0,caption:e.title},scopedSlots:e._u([{key:"body",fn:function(t){var n=t.items;return[e.compact?e._e():a("tbody",e._l(n,(function(t){return a("tr",{key:t.id,staticClass:"no-hover"},[e.showDistanceColumn?a("td",{staticClass:"hidden-sm-and-down",attrs:{width:"8%"}},[a("div",{},[e._v(e._s(t.distanceInMiles))])]):e._e(),a("td",{attrs:{width:"20%"}},[a("div",{staticClass:"subtitle-1 font-weight-bold"},[e._v(e._s(t.name))]),e.showDistanceColumn?a("div",{staticClass:"hidden-md-and-up"},[e._v(e._s(t.distanceInMiles)+" mile(s)")]):e._e()]),e.compact?e._e():a("td",{staticClass:"hidden-sm-and-down"},[a("div",{},[e._v(e._s(t.street)+" ")]),a("div",{},[e._v(e._s(t.city)+" "+e._s(t.state)+", "+e._s(t.zip))])]),a("td",{staticClass:"hidden-sm-and-down",attrs:{width:"40%"}},[a("div",[e._v(e._s(t.contactName))]),a("div",[e._v(e._s(t.email)+" "+e._s(t.phone))]),a("div",{staticClass:"mt-1  font-weight-light"},[e._v(e._s(t.description))]),a("div",{staticClass:"mb-1 font-weight-light",domProps:{innerHTML:e._s(t.specialInstructions)}})]),a("td",{staticClass:"hidden-md-and-up"},[a("div",{},[e._v(e._s(t.street)+" ")]),a("div",{},[e._v(e._s(t.city)+" "+e._s(t.state)+", "+e._s(t.zip))]),a("div",[e._v(e._s(t.contactName))]),a("div",[e._v(e._s(t.email)+" "+e._s(t.phone))]),a("div",{staticClass:"mt-1  font-weight-light",staticStyle:{"word-break":"break-all"}},[e._v(e._s(t.description))]),a("div",{staticClass:"mb-1 font-weight-light",staticStyle:{"word-break":"break-all"},domProps:{innerHTML:e._s(t.specialInstructions)}})])])})),0),e.compact?a("tbody",e._l(n,(function(t){return a("tr",{key:t.id,on:{click:e.goToSearch}},[a("td",{staticClass:"font-weight-bold"},[a("router-link",{attrs:{to:"/search"}},[e._v(e._s(t.name))])],1),a("td",[e._v(" "+e._s(t.city)+" "+e._s(t.state)+" ")]),a("td",[e._v(" "+e._s(t.requestDate)+" ")])])})),0):e._e()]}}],null,!1,1913146347)})],1)],1)],1)},r=[],o=(a("a4d3"),a("e01a"),a("99af"),a("4de4"),a("a15b"),a("d81d"),a("a434"),a("b0c0"),a("ac1f"),a("466d"),a("5319"),a("ade3")),i=(n={props:["requests","compact","loading","title"],components:{},name:"Search",data:function(){return{itemsPerPage:20,showDistanceColumn:!1}},mounted:function(){}},Object(o["a"])(n,"components",{}),Object(o["a"])(n,"methods",{goToSearch:function(){this.$router.push("/search")},mock:function(){this.requests=[{name:"Shelter 1",city:"Plano",state:"TX",description:"Shelter 2 needs as many as you can give us",needs:"Whatever you can give us. We are working with elderly patients and will appreciate any help"},{name:"Shelter 1",city:"Plano",state:"TX",description:"Shelter 2 needs as many as you can give us",needs:"Whatever you can give us"},{name:"Shelter 1",city:"Plano",state:"TX",description:"Shelter 2 needs as many as you can give us",needs:"Whatever you can give us"},{name:"Shelter 1",city:"Plano",state:"TX",description:"Shelter 2 needs as many as you can give us",needs:"Whatever you can give us"}]}}),Object(o["a"])(n,"computed",{requests1:function(){if(!this.requests)return[];var e=this.requests&&this.requests.map(c);return this.showDistanceColumn=e&&e.length>0&&(e[0].distanceInMiles||0===e[0].distanceInMiles),e},requestHeaders:function(){var e=[{text:"Miles",value:"distanceInMiles"},{text:"Name",value:"name"},{text:"Address",value:"address"},{text:"Description",value:"needs"}];return this.showDistanceColumn||e.splice(0,1),e}}),n);function c(e){var t=e.organization;return console.log(t),{name:t.name,address:"".concat(t.addressLine1," ").concat(t.addressLine2," ").concat(t.city," ").concat(t.state," ").concat(t.zipCode),street:t.addressLine1?t.addressLine1+(t.addressLine2?" "+t.addressLine2:""):null,city:t.city,state:t.state,zip:t.zipCode,email:t.email,phone:t.phone,contactName:t.contactName,contactInfo:[t.phone,t.email].filter((function(e){return e})).join(" "),description:t.description,needs:t.needs,specialInstructions:u(t.specialInstructions),distanceInMiles:t.distanceInMiles,requestDate:new Date(e.requestDate).toLocaleDateString()}}function u(e){if(!e)return e;var t=/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi,a=e.match(t);return a&&(console.log(a),e=e.replace(a[0],'<a href="'.concat(a[0],'">').concat(a[0],"</a>"))),e=e.replace("Yes, find it here"," "),e}var l=i,d=(a("3184"),a("2877")),h=a("6544"),p=a.n(h),m=a("62ad"),f=a("8fea"),v=a("0fd9"),b=Object(d["a"])(l,s,r,!1,null,"616c5711",null);t["a"]=b.exports;p()(b,{VCol:m["a"],VDataTable:f["a"],VRow:v["a"]})},3184:function(e,t,a){"use strict";var n=a("e20b"),s=a.n(n);s.a},"41a6":function(e,t,a){e.exports=a.p+"img/nurse.410a004c.jpg"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[a("router-link",{attrs:{to:"/",color:"white--text"}},[a("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}})],1),a("v-toolbar-title",{on:{click:e.goHome}},[e._v("Ask for Masks")]),a("v-spacer")],1),a("v-content",[a("router-view")],1),a("v-footer",[a("v-row",[a("v-col",{attrs:{align:"right"}},[a("span",[e._v("TBSR Copyright 2020")]),e._v(" "),a("v-btn",{staticClass:"default",attrs:{small:"",icon:""},on:{click:e.contactUs}},[a("v-icon",[e._v("mdi-email")])],1)],1)],1)],1)],1)},r=[],o=(a("4160"),a("159b"),{name:"AskForMasks",components:{},data:function(){return{}},mounted:function(){c.forEach(i)},methods:{goHome:function(){this.$router.push("/")},contactUs:function(){this.$router.push("contact-us")}}});function i(e){var t=document.createElement("script");t.setAttribute("src",e),document.body.appendChild(t)}var c=["/__/firebase/7.13.1/firebase-app.js","/__/firebase/7.13.1/firebase-analytics.js","/__/firebase/init.js"],u=o,l=(a("6b25"),a("2877")),d=a("6544"),h=a.n(d),p=a("7496"),m=a("40dc"),f=a("8336"),v=a("62ad"),b=a("a75b"),g=a("553a"),y=a("132d"),_=a("adda"),w=a("0fd9"),k=a("2fa4"),C=a("2a7f"),x=Object(l["a"])(u,s,r,!1,null,null,null),S=x.exports;h()(x,{VApp:p["a"],VAppBar:m["a"],VBtn:f["a"],VCol:v["a"],VContent:b["a"],VFooter:g["a"],VIcon:y["a"],VImg:_["a"],VRow:w["a"],VSpacer:k["a"],VToolbarTitle:C["a"]});a("c975"),a("d3b7");var j=a("8c4f"),T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("v-container",[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{lg:"6",align:"center"}},[n("h2",{staticClass:"display-1 mt-2 mb-2 font-weight-light",attrs:{align:"center",justify:"center"}},[e._v(" Can you make protective masks? ")]),n("v-img",{staticClass:"flip-horizontally",attrs:{alt:"Volunteer using sewing machine",contain:"",src:a("ecf3"),transition:"scale-transition",height:"300"}}),n("v-row",[n("v-col",[n("v-btn",{staticClass:"mt-2",attrs:{color:"success"},on:{click:e.makeMask}},[e._v("Make a mask")]),n("br"),n("v-btn",{staticClass:"mt-4",attrs:{color:"success"},on:{click:e.search}},[e._v("Search Nearby Needs")])],1)],1),n("v-row",[n("v-col",{attrs:{lg:"12"}},[n("v-data-table",{staticClass:"mt-3 hidden-md-and-down",staticStyle:{"max-width":"600px"},attrs:{headers:e.feedbackHeaders,items:e.recentFeedback,"items-per-page":20,"disable-pagination":"","hide-default-header":"","hide-default-footer":"",caption:"Are you working on masks? Tell the world!"},scopedSlots:e._u([{key:"footer",fn:function(t){return[n("div",{staticClass:"mt-4",attrs:{align:"center"}},[n("v-btn",{attrs:{"x-small":""},on:{click:e.addFeedback}},[e._v("Done your part?")])],1)]}}])})],1)],1)],1),n("v-col",{attrs:{lg:"6",align:"center"}},[n("h2",{staticClass:"mt-2 mb-2 display-1 font-weight-light",attrs:{align:"center",justify:"center"}},[e._v("We connect you with organizations that need them!")]),n("v-img",{attrs:{alt:"Nurse wearing mask",contain:"",src:a("41a6"),transition:"scale-transition",height:"300"}}),n("v-btn",{staticClass:"mt-4",attrs:{color:"primary"},on:{click:e.selectProvider}},[e._v("Add your request for masks")]),n("br"),n("v-btn",{staticClass:"mt-4",attrs:{color:"primary"},on:{click:e.search}},[e._v("Search requests in your area")]),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{lg:"8"}},[n("request-table",{attrs:{requests:e.recentRequests,loading:e.loading,compact:!0,title:"Recent requests"}})],1)],1)],1)],1)],1)],1)},q=[],A=(a("99af"),a("15ae")),P=a("bc3a"),V=a.n(P),M={name:"Home",components:{RequestTable:A["a"]},data:function(){return{recentRequests:[],recentFeedback:[],feedbackHeaders:[{text:"Name",value:"name"},{text:"Address",value:"address"},{text:"",value:"comment"}],requestHeaders:[{text:null,value:"name"},{text:null,value:"address"},{text:null,value:"description"},{text:null,value:"needs"}],loading:!0}},created:function(){this.load()},methods:{extendRequest:function(e){e.address="".concat(e.street," ").concat(e.city," ").concat(e.state," ").concat(e.zip)},extendFeedback:function(e){e.address="".concat(e.city," ").concat(e.state)},makeMask:function(){this.$router.push("/makemask")},load:function(){var e=this;this.loading=!0,V.a.get("https://askformasks.azurewebsites.net/api/requests/10").then((function(t){e.recentRequests=t.data,e.loading=!1})),V.a.get("https://askformasks.azurewebsites.net/api/brags/10").then((function(t){t.data.forEach(e.extendFeedback),e.recentFeedback=t.data}))},addFeedback:function(){this.$router.push("/add-feedback")},mock:function(){this.recentFeedback=[{name:"Abbie",city:"Plano",state:"TX",description:"I am working on 50 masks for Presby hospital!"},{name:"John",city:"Plano",state:"TX",description:"Shelter 2 needs as many as you can give us"},{name:"Shelby",city:"Carrollton",state:"TX",description:"I delivered 50 masks to the seniors center"}],this.recentFeedback.forEach(this.extendFeedback)},search:function(){this.$router.push("/search")},selectProvider:function(){this.$router.push("/provider")}}},z=M,O=(a("b343"),a("a523")),I=a("8fea"),D=Object(l["a"])(z,T,q,!1,null,"00f6374f",null),E=D.exports;h()(D,{VBtn:f["a"],VCol:v["a"],VContainer:O["a"],VDataTable:I["a"],VImg:_["a"],VRow:w["a"]});var L=a("0284"),F=a.n(L);n["a"].use(j["a"]);var N=[{path:"/",name:"Home",component:E},{path:"/makemask",name:"Make a mask",component:function(){return a.e("about").then(a.bind(null,"9c7b"))}},{path:"/provider",name:"Provider",component:function(){return a.e("about").then(a.bind(null,"b5d1"))}},{path:"/search",name:"Search",component:function(){return a.e("about").then(a.bind(null,"2d3b"))}},{path:"/thankyou",name:"ThankYou",component:function(){return a.e("about").then(a.bind(null,"2368"))}},{path:"/contact-us",name:"ContactUs",component:function(){return a.e("about").then(a.bind(null,"e9bb"))}},{path:"/add-feedback",name:"AddFeedback",component:function(){return a.e("about").then(a.bind(null,"52e6"))}}],H=new j["a"]({mode:"history",base:"/",routes:N});location.href.indexOf("askformasks.com")>0&&n["a"].use(F.a,{id:"UA-162159630-1",router:H});var $=H,R=a("f309");n["a"].use(R["a"]);var Z=new R["a"]({}),B={install:function(e,t){e.mixin({created:function(){}})}},X=B;n["a"].config.productionTip=!1,n["a"].use(X),new n["a"]({router:$,vuetify:Z,render:function(e){return e(S)}}).$mount("#app")},"6b25":function(e,t,a){"use strict";var n=a("0593"),s=a.n(n);s.a},b343:function(e,t,a){"use strict";var n=a("ebfd"),s=a.n(n);s.a},e20b:function(e,t,a){},ebfd:function(e,t,a){},ecf3:function(e,t,a){e.exports=a.p+"img/volunteer.6ee573f3.jpg"}});
//# sourceMappingURL=app.5122c946.js.map