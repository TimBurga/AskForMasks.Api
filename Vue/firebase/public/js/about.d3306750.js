(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0c18":function(t,e,r){},1681:function(t,e,r){},"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r("d3b7"),r("e6cf");function n(t,e,r,n,a,i,s){try{var o=t[i](s),l=o.value}catch(c){return void r(c)}o.done?e(l):Promise.resolve(l).then(n,a)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(a,i){var s=t.apply(e,r);function o(t){n(s,a,i,o,l,"next",t)}function l(t){n(s,a,i,o,l,"throw",t)}o(void 0)}))}}},2368:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",[r("v-col",{attrs:{align:"center"}},[r("div",{},[r("h3",{staticClass:"mt-2"},[t._v("Thank you! Your information has been submitted")]),r("v-btn",{staticClass:"mt-4 primary",on:{click:t.goHome}},[t._v("Go back to homepage")])],1)])],1)},a=[],i=(r("96cf"),r("1da1")),s={name:"ThankYou",methods:{goHome:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$router.push("/");case 1:case"end":return e.stop()}}),e)})))()}}},o=s,l=r("2877"),c=r("6544"),u=r.n(c),d=r("8336"),h=r("62ad"),f=r("0fd9"),m=Object(l["a"])(o,n,a,!1,null,null,null);e["default"]=m.exports;u()(m,{VBtn:d["a"],VCol:h["a"],VRow:f["a"]})},"2d3b":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("v-container",{attrs:{fluid:""}},[n("v-row",{attrs:{align:"center"}},[n("v-col",{attrs:{cols:"12"}},[n("v-img",{staticClass:"shrink",attrs:{alt:"Nurse wearing mask",contain:"",src:r("41a6"),transition:"scale-transition",height:"200"}})],1)],1),n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-row",{staticClass:"mt-2",attrs:{justify:"center"}},[n("v-col",{attrs:{lg:"6",align:"center",justify:"center"}},[n("v-form",{ref:"zipForm"},[n("div",{staticClass:"d-flex flex-row",staticStyle:{"align-items":"baseline","justify-content":"center"}},[n("v-text-field",{ref:"zip",staticStyle:{"max-width":"200px"},attrs:{outlined:"","max-length":"5",large:"",label:"Enter your zip code",rules:t.zipRules},nativeOn:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.clickEnter(e))}},model:{value:t.zipCode,callback:function(e){t.zipCode=e},expression:"zipCode"}}),n("v-btn",{staticClass:"primary ml-2",attrs:{large:""},on:{click:t.search}},[t._v("Search")])],1)])],1)],1)],1),t.requests?n("v-row",[n("v-col",{attrs:{align:"center"}},[n("request-table",{attrs:{requests:t.requests,loading:t.loading}})],1)],1):t._e(),t.requests&&0!=t.requests.length||t.loading?t._e():n("v-row",[n("v-col",{attrs:{align:"center"}},[t._v(" No requests found ")])],1),t.requests&&t.requests.length>0?n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-row",{staticClass:"mt-2",attrs:{justify:"center"}},[n("v-col",{attrs:{lg:"6",align:"center",justify:"center"}},[n("v-form",{ref:"zipForm"},[n("div",{staticClass:"d-flex flex-row",staticStyle:{"align-items":"baseline","justify-content":"center"}},[n("v-text-field",{ref:"zip",staticStyle:{"max-width":"200px"},attrs:{outlined:"","max-length":"5",large:"",label:"Enter your zip code",rules:t.zipRules},nativeOn:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.clickEnter(e))}},model:{value:t.zipCode,callback:function(e){t.zipCode=e},expression:"zipCode"}}),n("v-btn",{staticClass:"primary ml-2",attrs:{large:""},on:{click:t.search}},[t._v("Search")])],1)])],1)],1)],1):t._e(),t.requests&&t.requests.length>0?n("v-row",[n("v-col",{staticClass:"mt-2 font-weight-bold",attrs:{align:"center",cols:"12"}},[n("div",[t._v("Our volunteers say:")])]),t._l(t.recentFeedback,(function(e){return n("v-col",{key:e.id,staticStyle:{"font-size":"90%"},attrs:{align:"center",cols:"12"}},[n("div",{staticStyle:{"max-width":"700px"}},[n("span",{staticStyle:{"font-style":"italic"}},[t._v(t._s(e.name)+" from "+t._s(e.address)+":")]),t._v(" "+t._s(e.comment)+" ")])])})),n("v-col",{staticClass:"mt-2",attrs:{cols:"12",align:"center"}},[n("v-btn",{attrs:{"x-small":""},on:{click:t.addFeedback}},[t._v("Are you working on masks? Tell the world!")])],1)],2):t._e()],1)],1)},a=[],i=(r("99af"),r("4160"),r("d81d"),r("d3b7"),r("ac1f"),r("841c"),r("159b"),r("96cf"),r("1da1")),s=r("15ae"),o=r("bc3a"),l=r.n(o),c={name:"Search",components:{RequestTable:s["a"]},data:function(){return{requests:[],valid:!0,zipCode:null,loading:!0,recentFeedback:[],zipRules:[function(t){return!t||5==t.length||"5 digits required"}]}},mounted:function(){},created:function(){this.$route.query.zip?(this.zipCode=this.$route.query.zip,this.searchByZip()):this.loadRecent(),this.loadFeedback()},methods:{addFeedback:function(){this.$router.push("/add-feedback")},validateZipCode:function(){var t=/^\d{5}$/;return this.zipCode&&t.test(this.zipCode)},extendFeedback:function(t){t.address="".concat(t.city," ").concat(t.state)},loadFeedback:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:l.a.get("https://askformasks.azurewebsites.net/api/brags/10").then((function(e){e.data.forEach(t.extendFeedback),t.recentFeedback=e.data}));case 1:case"end":return e.stop()}}),e)})))()},loadRecent:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.loading=!0,l.a.get("https://askformasks.azurewebsites.net/api/requests/10").then((function(e){t.requests=e.data,t.loading=!1})).catch((function(){t.requests=null})).finally((function(){t.loading=!1}));case 2:case"end":return e.stop()}}),e)})))()},clickEnter:function(t){this.search()},searchByZip:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.requests=null,t.loading=!0,l.a.get("https://askformasks.azurewebsites.net/api/requests/byzip/".concat(t.zipCode,"/distance/200")).then((function(e){t.requests=e.data.map((function(t){return t.request.organization.distanceInMiles=t.distanceInMiles,t.request})),setTimeout((function(){t.loading=!1}))})).catch((function(){t.requests=null})).finally((function(){t.loading=!1}));case 3:case"end":return e.stop()}}),e)})))()},search:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.zipCode){e.next=2;break}return e.abrupt("return");case 2:if(t.$refs.form&&t.$refs.form.validate(),t.valid){e.next=5;break}return e.abrupt("return");case 5:if(t.validateZipCode()){e.next=7;break}return e.abrupt("return");case 7:return t.$router.push({name:"Search",query:{zip:t.zipCode}}),t.searchByZip(),e.abrupt("return");case 10:case"end":return e.stop()}}),e)})))()}}},u=c,d=r("2877"),h=r("6544"),f=r.n(h),m=r("8336"),v=r("62ad"),p=r("a523"),g=r("4bd4"),b=r("adda"),y=r("0fd9"),w=r("8654"),k=Object(d["a"])(u,n,a,!1,null,null,null);e["default"]=k.exports;f()(k,{VBtn:m["a"],VCol:v["a"],VContainer:p["a"],VForm:g["a"],VImg:b["a"],VRow:y["a"],VTextField:w["a"]})},"4bd4":function(t,e,r){"use strict";r("4de4"),r("7db0"),r("4160"),r("caad"),r("07ac"),r("2532"),r("159b");var n=r("5530"),a=r("58df"),i=r("7e2b"),s=r("3206");e["a"]=Object(a["a"])(i["a"],Object(s["b"])("form")).extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,r=function(t){return t.$watch("hasError",(function(r){e.$set(e.errorBag,t._uid,r)}),{immediate:!0})},n={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",(function(a){a&&(e.errorBag.hasOwnProperty(t._uid)||(n.valid=r(t)))})):n.valid=r(t),n},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var r=this.watchers.find((function(t){return t._uid===e._uid}));r&&(r.valid(),r.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(n["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"52e6":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("v-container",{attrs:{fluid:""}},[r("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-row",{attrs:{align:"center"}},[r("v-col",{attrs:{cols:"12"}},[r("h1",{staticClass:"display-1",attrs:{align:"center",justify:"center"}},[t._v("Are you working on masks? Tell the world!")])])],1),r("v-row",{staticClass:"mt-4",attrs:{justify:"center"}},[r("v-col",{attrs:{md:"6",align:"center",justify:"center"}},[r("v-text-field",{attrs:{label:"Your Name",rules:t.reqRules},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)],1),r("v-row",{staticClass:"mt-4",attrs:{justify:"center"}},[r("v-col",{attrs:{md:"5",align:"center",justify:"center"}},[r("v-text-field",{attrs:{label:"City",rules:t.reqRules},model:{value:t.city,callback:function(e){t.city=e},expression:"city"}})],1),r("v-col",{attrs:{md:"1",align:"center",justify:"center"}},[r("v-text-field",{attrs:{label:"State",rules:t.stateRules},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}})],1)],1),r("v-row",{staticClass:"mt-2",attrs:{justify:"center"}},[r("v-col",{attrs:{md:"6",align:"center",justify:"center"}},[r("v-textarea",{attrs:{label:"Message",rules:t.reqRules},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1)],1),r("v-row",{staticClass:"mt-2"},[r("v-col",{attrs:{cols:"12",align:"center"}},[r("v-btn",{attrs:{color:"primary",large:""},on:{click:t.send}},[t._v("Send")]),r("v-btn",{staticClass:"ml-4",attrs:{color:"default",large:""},on:{click:t.cancel}},[t._v("Cancel")])],1)],1)],1)],1)],1)},a=[],i=(r("b0c0"),r("96cf"),r("1da1")),s=r("bc3a"),o=r.n(s),l={name:"AddFeedback",data:function(){return{valid:!0,name:null,location:null,message:null,submitInProgress:!1,reqRules:[function(t){return!!t||"This field is required"}],stateRules:[function(t){return!!t||"State is required"},function(t){return 2==(t||"").length||"Two letters required"}],emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+/.test(t)||"E-mail must be valid"}]}},components:{},methods:{send:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.$refs.form.validate(),t.valid){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,t.submitInProgress=!0,e.next=7,o.a.post("https://askformasks.azurewebsites.net/api/brag",{name:t.name,state:t.state,city:t.city,comment:t.message});case 7:t.$router.push("thankyou");case 8:return e.prev=8,t.submitInProgress=!1,e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[3,,8,11]])})))()},cancel:function(){this.$router.push("/")}}},c=l,u=r("2877"),d=r("6544"),h=r.n(d),f=r("8336"),m=r("62ad"),v=r("a523"),p=r("4bd4"),g=r("0fd9"),b=r("8654"),y=r("a844"),w=Object(u["a"])(c,n,a,!1,null,null,null);e["default"]=w.exports;h()(w,{VBtn:f["a"],VCol:m["a"],VContainer:v["a"],VForm:p["a"],VRow:g["a"],VTextField:b["a"],VTextarea:y["a"]})},"615b":function(t,e,r){},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",o=a.toStringTag||"@@toStringTag";function l(t,e,r,n){var a=e&&e.prototype instanceof v?e:v,i=Object.create(a.prototype),s=new $(n||[]);return i._invoke=_(t,r,s),i}function c(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=l;var u="suspendedStart",d="suspendedYield",h="executing",f="completed",m={};function v(){}function p(){}function g(){}var b={};b[i]=function(){return this};var y=Object.getPrototypeOf,w=y&&y(y(R([])));w&&w!==r&&n.call(w,i)&&(b=w);var k=g.prototype=v.prototype=Object.create(b);function x(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function C(t,e){function r(a,i,s,o){var l=c(t[a],t,i);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"===typeof d&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,s,o)}),(function(t){r("throw",t,s,o)})):e.resolve(d).then((function(t){u.value=t,s(u)}),(function(t){return r("throw",t,s,o)}))}o(l.arg)}var a;function i(t,n){function i(){return new e((function(e,a){r(t,n,e,a)}))}return a=a?a.then(i,i):i()}this._invoke=i}function _(t,e,r){var n=u;return function(a,i){if(n===h)throw new Error("Generator is already running");if(n===f){if("throw"===a)throw i;return S()}r.method=a,r.arg=i;while(1){var s=r.delegate;if(s){var o=z(s,r);if(o){if(o===m)continue;return o}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===u)throw n=f,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var l=c(t,e,r);if("normal"===l.type){if(n=r.done?f:d,l.arg===m)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=f,r.method="throw",r.arg=l.arg)}}}function z(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,z(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var a=c(n,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,m;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function $(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function R(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var a=-1,s=function r(){while(++a<t.length)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return s.next=s}}return{next:S}}function S(){return{value:e,done:!0}}return p.prototype=k.constructor=g,g.constructor=p,g[o]=p.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,o in t||(t[o]="GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},x(C.prototype),C.prototype[s]=function(){return this},t.AsyncIterator=C,t.async=function(e,r,n,a,i){void 0===i&&(i=Promise);var s=new C(l(e,r,n,a),i);return t.isGeneratorFunction(r)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},x(k),k[o]="Generator",k[i]=function(){return this},k.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=R,$.prototype={constructor:$,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(E),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return o.type="throw",o.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var s=this.tryEntries[i],o=s.completion;if("root"===s.tryLoc)return a("end");if(s.tryLoc<=this.prev){var l=n.call(s,"catchLoc"),c=n.call(s,"finallyLoc");if(l&&c){if(this.prev<s.catchLoc)return a(s.catchLoc,!0);if(this.prev<s.finallyLoc)return a(s.finallyLoc)}else if(l){if(this.prev<s.catchLoc)return a(s.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return a(s.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var s=i?i.completion:{};return s.type=t,s.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;E(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:R(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},"9c7b":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("v-container",{attrs:{fluid:""}},[n("v-row",{attrs:{align:"start",justify:"center"}},[n("v-col",{attrs:{lg:"3",align:"center"}},[n("v-img",{staticClass:"shrink",attrs:{alt:"Sewing machine",contain:"",src:r("ecf3"),transition:"scale-transition",height:"200"}})],1),t._l(t.resources.sections,(function(e){return n("v-col",{key:e.name,attrs:{lg:"3"}},[n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400",tile:""}},[n("v-list",[n("v-subheader",[t._v(t._s(e.name))]),n("v-list-item-group",{attrs:{color:"primary"},model:{value:t.item,callback:function(e){t.item=e},expression:"item"}},t._l(e.links.filter((function(t){return t.title})),(function(e,r){return n("v-list-item",{key:r,attrs:{inactive:t.inactive},on:{click:function(r){return r.preventDefault(),t.clickLink(e)}}},[n("v-list-item-content",[n("v-list-item-title",{domProps:{innerHTML:t._s(e.title)}}),e.text?n("v-list-item-subtitle",{domProps:{innerHTML:t._s(e.text)}}):t._e()],1)],1)})),1)],1)],1)],1)}))],2),n("v-row",[n("v-col",{attrs:{align:"center"}},[n("v-btn",{staticClass:"primary mt-2",on:{click:t.goHome}},[t._v("Go Back")])],1)],1)],1)],1)},a=[],i=(r("96cf"),r("1da1")),s={sections:[{name:"Masks",links:[{title:"Maintaining safe environment while making masks",url:"https://psjh.blob.core.windows.net/covid/2020-%20PSJH_FACEMASK_KIT%20Instructions.COMMUNITY%20-%20Safety%20Instructions.pdf",text:"From Providence St.Joseph Health"},{title:"Mask making best practices",url:"https://asksformasks.com/mask-making-best-practices/",text:"From Asksformasks.com"},{title:"Surgical face mask pattern",url:"https://members.sewitonline.com/wp-content/uploads/2020/03/How-To-Sew-A-Facemask-Instructions.pdf",text:"From Sewitonline.com"},{title:"Community mask: Instructions",url:"https://psjh.blob.core.windows.net/covid/Instructions%20Community%20Mask.pdf",text:"From Providence St.Joseph Health"},{title:"Community mask: Video tutorial",url:"https://vimeo.com/400118073/8a7eb657ab"},{title:"Community mask: Pattern",url:"https://psjh.blob.core.windows.net/covid/2020-%20PSJH_FACEMASK_COMMUNITY_Pattern_V3%20Final.pdf"},{title:"Mask with pouch for HEPA Filter",url:"https://truline.box.com/s/1r1dwazskl6bszxhbb6222kjea29kggu",text:"From Trueline Construction Services"},{title:"Sewing Face Masks for COVID-19 Response",url:"https://www.kalcounty.com/hcs/pdf_files/COVID-19%20Face%20Mask%20Instructions%20and%20Pattern.pdf",text:"From Kalamazoo County Government"},{title:"",url:""},{title:"",url:""}]},{name:"Shields",links:[{title:"Building Face Shields - ACME Creation Lab",url:"https://www.acmecreationlab.org/covid",text:"Open source package that includes the face shield design and the complete manufacturing process"},{title:"",url:""}]}]},o={name:"MakeMask",data:function(){return{resources:s}},mounted:function(){},created:function(){this.load()},methods:{load:function(){return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},goHome:function(){this.$router.push("/")},clickLink:function(t){window.open(t.url)}}},l=o,c=r("2877"),u=r("6544"),d=r.n(u),h=r("8336"),f=(r("0481"),r("4069"),r("a9e3"),r("5530")),m=(r("615b"),r("10d2")),v=r("297c"),p=r("1c87"),g=r("58df"),b=Object(g["a"])(v["a"],p["a"],m["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes:function(){return Object(f["a"])({"v-card":!0},p["a"].options.computed.classes.call(this),{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped},m["a"].options.computed.classes.call(this))},styles:function(){var t=Object(f["a"])({},m["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=v["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,n=e.data;return n.style=this.styles,this.isClickable&&(n.attrs=n.attrs||{},n.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,n),[this.genProgress(),this.$slots.default])}}),y=r("62ad"),w=r("a523"),k=r("adda"),x=r("8860"),C=r("da13"),_=r("5d23"),z=r("1baa"),j=r("0fd9"),E=r("e0c7"),$=Object(c["a"])(l,n,a,!1,null,null,null);e["default"]=$.exports;d()($,{VBtn:h["a"],VCard:b,VCol:y["a"],VContainer:w["a"],VImg:k["a"],VList:x["a"],VListItem:C["a"],VListItemContent:_["a"],VListItemGroup:z["a"],VListItemSubtitle:_["b"],VListItemTitle:_["c"],VRow:j["a"],VSubheader:E["a"]})},a844:function(t,e,r){"use strict";r("a9e3");var n=r("5530"),a=(r("1681"),r("8654")),i=r("58df"),s=Object(i["a"])(a["a"]);e["a"]=s.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(n["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},a["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,r=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(r,e)+"px"}},genInput:function(){var t=a["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){a["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},b5d1:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("v-container",{attrs:{fluid:""}},[r("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-row",{attrs:{align:"center"}},[r("v-col",{attrs:{cols:"12"}},[r("h1",{staticClass:"display-1",attrs:{align:"center",justify:"center"}},[t._v("Welcome!")])])],1),1==t.step?r("v-row",{staticClass:"mt-4",attrs:{justify:"center"}},[r("v-col",{attrs:{md:"6",align:"center",justify:"center"}},[r("v-text-field",{attrs:{label:"Organization Name",rules:t.reqRules},model:{value:t.organization.name,callback:function(e){t.$set(t.organization,"name",e)},expression:"organization.name"}})],1)],1):t._e(),1==t.step?r("v-row",{staticClass:"mt-2",attrs:{justify:"center"}},[r("v-col",{attrs:{md:"6",align:"center",justify:"center"}},[r("v-row",[r("v-col",{attrs:{cols:"10",md:"10"}},[r("v-text-field",{attrs:{label:"Street",rules:t.reqRules},model:{value:t.organization.addressLine1,callback:function(e){t.$set(t.organization,"addressLine1",e)},expression:"organization.addressLine1"}})],1),r("v-col",{attrs:{cols:"2",md:"2"}},[r("v-text-field",{attrs:{label:"Suite/#"},model:{value:t.organization.addressLine2,callback:function(e){t.$set(t.organization,"addressLine2",e)},expression:"organization.addressLine2"}})],1)],1),r("v-row",[r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{label:"City",rules:t.reqRules},model:{value:t.organization.city,callback:function(e){t.$set(t.organization,"city",e)},expression:"organization.city"}})],1),r("v-col",{attrs:{cols:"6",md:"2"}},[r("v-text-field",{attrs:{label:"State",rules:t.stateRules},model:{value:t.organization.state,callback:function(e){t.$set(t.organization,"state",e)},expression:"organization.state"}})],1),r("v-col",{attrs:{cols:"6",md:"4"}},[r("v-text-field",{attrs:{label:"Zip",rules:t.zipRules},model:{value:t.organization.zipCode,callback:function(e){t.$set(t.organization,"zipCode",e)},expression:"organization.zipCode"}})],1)],1),r("v-row",[t.phoneOrEmailMissing?r("v-col",{attrs:{cols:"12"}},[r("v-alert",{attrs:{type:"info",dense:""}},[t._v("Please enter a phone number and/or email for volunteers to contact the organization")])],1):t._e(),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{label:"Phone"},model:{value:t.organization.phone,callback:function(e){t.$set(t.organization,"phone",e)},expression:"organization.phone"}})],1),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{label:"Email",rules:t.optionalEmailRules},model:{value:t.organization.email,callback:function(e){t.$set(t.organization,"email",e)},expression:"organization.email"}})],1),r("v-col",{attrs:{cols:"12",md:"12"}},[r("v-text-field",{attrs:{label:"Contact Name"},model:{value:t.organization.contactName,callback:function(e){t.$set(t.organization,"contactName",e)},expression:"organization.contactName"}})],1)],1)],1)],1):t._e(),1==t.step?r("v-row",{staticClass:"mt-2",attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"12",md:"6",align:"center",justify:"center"}},[r("v-row",[r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{label:"Your Name (for our records only)",rules:t.reqRules},model:{value:t.submitter.name,callback:function(e){t.$set(t.submitter,"name",e)},expression:"submitter.name"}})],1),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{label:"Your Phone or Email  (for our records only)",rules:t.reqRules},model:{value:t.submitter.contact,callback:function(e){t.$set(t.submitter,"contact",e)},expression:"submitter.contact"}})],1)],1)],1)],1):t._e()],1),r("v-form",{ref:"form2",model:{value:t.valid2,callback:function(e){t.valid2=e},expression:"valid2"}},[2==t.step?r("v-row",{staticClass:"mt-2",attrs:{justify:"center"}},[r("v-col",{attrs:{md:"6",align:"center",justify:"center"}},[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-textarea",{attrs:{label:"Briefly describe your organization",rules:t.reqRules},model:{value:t.organization.description,callback:function(e){t.$set(t.organization,"description",e)},expression:"organization.description"}})],1),r("v-col",{attrs:{cols:"12"}},[r("v-textarea",{attrs:{label:"What are your masks needs? Any special instructions for the maker?"},model:{value:t.organization.specialInstructions,callback:function(e){t.$set(t.organization,"specialInstructions",e)},expression:"organization.specialInstructions"}})],1)],1)],1)],1):t._e(),r("v-row",{staticClass:"mt-2"},[r("v-col",{attrs:{cols:"12",align:"center"}},[1==t.step?r("v-btn",{attrs:{color:"primary",large:""},on:{click:t.submitStep1}},[t._v("Next")]):t._e(),2==t.step?r("v-btn",{attrs:{color:"success",large:"",disabled:t.submitInProgress},on:{click:t.submitStep2}},[t._v("Submit")]):t._e(),r("v-btn",{staticClass:"ml-4",attrs:{color:"default",large:""},on:{click:t.cancel}},[t._v("Cancel")])],1)],1)],1)],1)],1)},a=[],i=(r("caad"),r("b0c0"),r("ac1f"),r("2532"),r("1276"),r("96cf"),r("1da1")),s=r("bc3a"),o=r.n(s),l={name:"Volunteer",data:function(){return{step:1,valid:!0,valid2:!0,name:null,submitInProgress:!1,phoneOrEmailMissing:!1,reqRules:[function(t){return!!t||"This field is required"}],optionalEmailRules:[function(t){return!t||/.+@.+/.test(t)||"E-mail must be valid"}],reqEmailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+/.test(t)||"E-mail must be valid"}],stateRules:[function(t){return!!t||"State is required"},function(t){return 2==(t||"").length||"Two letters required"}],zipRules:[function(t){return!!t||"Zip is required"},function(t){return 5==(t||"").length||"5 digits required"}],yesNo:["Yes, I work for the provider.","No, but I know they can use masks made by volunteers."],organization:{name:null,addressLine1:null,addressLine2:null,city:null,state:null,zipCode:null,needs:null,description:null,phone:null,email:null,contactName:null,specialInstructions:null},submitter:{name:null,contact:null,worksForOrganization:!0}}},components:{},methods:{submitStep1:function(){this.phoneOrEmailMissing=!1,this.$refs.form.validate(),this.valid&&(this.organization.phone||this.organization.email?this.step=2:this.phoneOrEmailMissing=!0)},submitStep2:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.$refs.form2.validate(),e.prev=1,!t.valid2){e.next=7;break}return t.submitInProgress=!0,e.next=6,o.a.post("https://askformasks.azurewebsites.net/api/request",t.getPostData());case 6:t.$router.push("thankyou");case 7:return e.prev=7,t.submitInProgress=!1,e.finish(7);case 10:case"end":return e.stop()}}),e,null,[[1,,7,10]])})))()},getPostData:function(){var t={organization:this.organization,submitter:{worksForOrganization:!0}};return this.submitter.contact.includes("@")?t.submitter.email=this.submitter.contact:t.submitter.phone=this.submitter.contact,this.submitter.name.includes(" ")?(t.submitter.firstName=this.submitter.name.split(" ")[0],t.submitter.lastName=this.submitter.name.split(" ")[1]):(t.submitter.firstName=null,t.submitter.lastName=this.submitter.name),t.organization.state=t.organization.state.toUpperCase(),t},cancel:function(){this.$router.push("/")}}},c=l,u=r("2877"),d=r("6544"),h=r.n(d),f=r("5530"),m=r("ade3"),v=(r("0c18"),r("10d2")),p=r("afdd"),g=r("9d26"),b=r("f2e7"),y=r("7560"),w=r("2b0e"),k=w["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),x=r("58df"),C=r("d9bd"),_=Object(x["a"])(v["a"],b["a"],k).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,icon:{default:"",type:[Boolean,String],validator:function(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var t={staticClass:"v-alert__border",class:Object(m["a"])({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(p["a"],{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(g["a"],{props:{color:e}},"$cancel")])},__cachedIcon:function(){return this.computedIcon?this.$createElement(g["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=Object(f["a"])({},v["a"].options.computed.classes.call(this),{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||y["a"].options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(C["a"])("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var t={staticClass:"v-alert",attrs:{role:"alert"},class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){var e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}}),z=r("8336"),j=r("62ad"),E=r("a523"),$=r("4bd4"),R=r("0fd9"),S=r("8654"),V=r("a844"),I=Object(u["a"])(c,n,a,!1,null,null,null);e["default"]=I.exports;h()(I,{VAlert:_,VBtn:z["a"],VCol:j["a"],VContainer:E["a"],VForm:$["a"],VRow:R["a"],VTextField:S["a"],VTextarea:V["a"]})},e9bb:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("v-container",{attrs:{fluid:""}},[r("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-row",{attrs:{align:"center"}},[r("v-col",{attrs:{cols:"12"}},[r("h1",{staticClass:"display-1",attrs:{align:"center",justify:"center"}},[t._v("Contact Us")])])],1),r("v-row",{staticClass:"mt-4",attrs:{justify:"center"}},[r("v-col",{attrs:{md:"6",align:"center",justify:"center"}},[r("v-text-field",{attrs:{label:"Your Name",rules:t.reqRules},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)],1),r("v-row",{staticClass:"mt-4",attrs:{justify:"center"}},[r("v-col",{attrs:{md:"6",align:"center",justify:"center"}},[r("v-text-field",{attrs:{label:"Your Email",rules:t.emailRules},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1),r("v-row",{staticClass:"mt-2",attrs:{justify:"center"}},[r("v-col",{attrs:{md:"6",align:"center",justify:"center"}},[r("v-textarea",{attrs:{label:"Message",rules:t.reqRules},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1)],1),r("v-row",{staticClass:"mt-2"},[r("v-col",{attrs:{cols:"12",align:"center"}},[r("v-btn",{attrs:{color:"primary",large:""},on:{click:t.send}},[t._v("Send")]),r("v-btn",{staticClass:"ml-4",attrs:{color:"default",large:""},on:{click:t.cancel}},[t._v("Cancel")])],1)],1)],1)],1)],1)},a=[],i=(r("b0c0"),r("96cf"),r("1da1")),s=r("bc3a"),o=r.n(s),l={name:"ContactUs",props:["mode"],data:function(){return{valid:!0,name:null,email:null,message:null,submitInProgress:!1,reqRules:[function(t){return!!t||"This field is required"}],emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+/.test(t)||"E-mail must be valid"}]}},components:{},methods:{send:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.$refs.form.validate(),t.valid){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,t.valid2,t.submitInProgress=!0,e.next=8,o.a.post("https://askformasks.azurewebsites.net/api/message",{name:t.name,email:t.email,text:t.message});case 8:t.$router.push("thankyou");case 9:return e.prev=9,t.submitInProgress=!1,e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[3,,9,12]])})))()},cancel:function(){this.$router.push("/")}}},c=l,u=r("2877"),d=r("6544"),h=r.n(d),f=r("8336"),m=r("62ad"),v=r("a523"),p=r("4bd4"),g=r("0fd9"),b=r("8654"),y=r("a844"),w=Object(u["a"])(c,n,a,!1,null,null,null);e["default"]=w.exports;h()(w,{VBtn:f["a"],VCol:m["a"],VContainer:v["a"],VForm:p["a"],VRow:g["a"],VTextField:b["a"],VTextarea:y["a"]})}}]);
//# sourceMappingURL=about.d3306750.js.map