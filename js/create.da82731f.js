(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["create"],{"08bc":function(t,e,n){},"25f0":function(t,e,n){"use strict";var a=n("6eeb"),r=n("825a"),o=n("d039"),i=n("ad6d"),l="toString",s=RegExp.prototype,u=s[l],c=o((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),f=u.name!=l;(c||f)&&a(RegExp.prototype,l,(function(){var t=r(this),e=String(t.source),n=t.flags,a=String(void 0===n&&t instanceof RegExp&&!("flags"in s)?i.call(t):n);return"/"+e+"/"+a}),{unsafe:!0})},"267e":function(t,e,n){"use strict";n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return i}));n("99af");var a={INSTALL_AUTOMATION:"installAutomation",INSTALL_DONE:"installDone"},r={HIGHLIGHT_ENGLISH_SYNTAX:"highlightEnglishSyntax",KILL_ELEMENT:"killElement",READ_MODE:"readMode",HASH_ELEMENT:"hashElement",CODE_COPY:"codeCopy",GOTO_ELEMENT:"gotoElement",DOWNLOAD:"download",FULL_SCREEN:"fullScreen",TIME_UPDATE:"timeupdate",CLICK:"click"},o=[{value:r.READ_MODE,label:"Read Mode",args:[{tips:"metaKey",name:"metaKey",type:"boolean",value:!1,defaultValue:!1}]},{value:r.KILL_ELEMENT,label:"Kill Element",args:[{tips:"metaKey",name:"metaKey",type:"boolean",value:!1,defaultValue:!1}]},{value:r.HIGHLIGHT_ENGLISH_SYNTAX,label:"English Syntax highlighting"},{value:r.HASH_ELEMENT,label:"Add anchor for elements"},{value:r.TIME_UPDATE,label:"Add time tag for video"},{value:r.DOWNLOAD,label:"Download element"},{value:r.FULL_SCREEN,label:"FullScreen element"},{value:r.CODE_COPY,label:"Code copy",args:[{tips:"child of <pre> tag",name:"inpre",type:"boolean",value:!1,defaultValue:!1},{tips:"<pre> tag",name:"pre",type:"boolean",value:!1,defaultValue:!1},{tips:"Remove some elements",name:"rm",type:"string",value:"",defaultValue:"",placeholder:"css selector"},{tips:"Position of btn",name:"pos",type:"string",value:"tl",defaultValue:"tl",placeholder:"tl|tr"}]},{value:r.CLICK,label:"Click"},{value:r.GOTO_ELEMENT,label:"Goto element",args:[{tips:"Auto Goto",name:"auto",type:"boolean",value:!1,defaultValue:!1},{tips:"Target",name:"to",type:"string",value:"",defaultValue:"",placeholder:"css selector"},{tips:"Order",name:"order",type:"string",value:"asc",defaultValue:"asc",placeholder:"desc/asc"},{tips:"Handle, The available functions are: {text|trim|number|siblingText}",name:"handle",type:"string",value:"",defaultValue:"",placeholder:"[.selector,fn]"}]}],i=[{value:"",label:"All"}].concat(o)},"3a55":function(t,e,n){"use strict";var a=n("08bc"),r=n.n(a);r.a},"3ca3":function(t,e,n){"use strict";var a=n("6547").charAt,r=n("69f3"),o=n("7dd0"),i="String Iterator",l=r.set,s=r.getterFor(i);o(String,"String",(function(t){l(this,{type:i,string:String(t),index:0})}),(function(){var t,e=s(this),n=e.string,r=e.index;return r>=n.length?{value:void 0,done:!0}:(t=a(n,r),e.index+=t.length,{value:t,done:!1})}))},"4df4":function(t,e,n){"use strict";var a=n("0366"),r=n("7b0b"),o=n("9bdd"),i=n("e95a"),l=n("50c4"),s=n("8418"),u=n("35a1");t.exports=function(t){var e,n,c,f,d,m,p=r(t),v="function"==typeof this?this:Array,b=arguments.length,g=b>1?arguments[1]:void 0,h=void 0!==g,y=u(p),A=0;if(h&&(g=a(g,b>2?arguments[2]:void 0,2)),void 0==y||v==Array&&i(y))for(e=l(p.length),n=new v(e);e>A;A++)m=h?g(p[A],A):p[A],s(n,A,m);else for(f=y.call(p),d=f.next,n=new v;!(c=d.call(f)).done;A++)m=h?o(f,g,[c.value,A],!0):c.value,s(n,A,m);return n.length=A,n}},"7db0":function(t,e,n){"use strict";var a=n("23e7"),r=n("b727").find,o=n("44d2"),i=n("ae40"),l="find",s=!0,u=i(l);l in[]&&Array(1)[l]((function(){s=!1})),a({target:"Array",proto:!0,forced:s||!u},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),o(l)},"99af":function(t,e,n){"use strict";var a=n("23e7"),r=n("d039"),o=n("e8b5"),i=n("861d"),l=n("7b0b"),s=n("50c4"),u=n("8418"),c=n("65f0"),f=n("1dde"),d=n("b622"),m=n("2d00"),p=d("isConcatSpreadable"),v=9007199254740991,b="Maximum allowed index exceeded",g=m>=51||!r((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),h=f("concat"),y=function(t){if(!i(t))return!1;var e=t[p];return void 0!==e?!!e:o(t)},A=!g||!h;a({target:"Array",proto:!0,forced:A},{concat:function(t){var e,n,a,r,o,i=l(this),f=c(i,0),d=0;for(e=-1,a=arguments.length;e<a;e++)if(o=-1===e?i:arguments[e],y(o)){if(r=s(o.length),d+r>v)throw TypeError(b);for(n=0;n<r;n++,d++)n in o&&u(f,d,o[n])}else{if(d>=v)throw TypeError(b);u(f,d++,o)}return f.length=d,f}})},a15b:function(t,e,n){"use strict";var a=n("23e7"),r=n("44ad"),o=n("fc6a"),i=n("a640"),l=[].join,s=r!=Object,u=i("join",",");a({target:"Array",proto:!0,forced:s||!u},{join:function(t){return l.call(o(this),void 0===t?",":t)}})},a630:function(t,e,n){var a=n("23e7"),r=n("4df4"),o=n("1c7e"),i=!o((function(t){Array.from(t)}));a({target:"Array",stat:!0,forced:i},{from:r})},b0c0:function(t,e,n){var a=n("83ab"),r=n("9bf2").f,o=Function.prototype,i=o.toString,l=/^\s*function ([^ (]*)/,s="name";a&&!(s in o)&&r(o,s,{configurable:!0,get:function(){try{return i.call(this).match(l)[1]}catch(t){return""}}})},b1c8:function(t,e,n){"use strict";n.d(e,"b",(function(){return f})),n.d(e,"c",(function(){return p})),n.d(e,"a",(function(){return g}));n("7db0"),n("b0c0"),n("d3b7");var a=n("c72e"),r=n.n(a),o=r.a.Object.extend("Installations"),i={item:l,create:s};function l(){}function s(t){var e=new o;return e.save().then((function(){return t.set("installations",e),t.save()}))}function u(t){var e=new r.a.ACL;e.setPublicReadAccess(!0),e.setWriteAccess(r.a.User.current(),!0),t.setACL(e)}var c=r.a.Object.extend("Automation"),f={list:d,listOfAuthor:m};function d(t,e){var n=new r.a.Query("Automation");return t&&n.equalTo("type",t),e&&n.contains("name",e),n.include("author"),n.include("installations"),n.find()}function m(t){var e=new r.a.Query("Automation");return e.equalTo("author",r.a.Object.createWithoutData("User",t)),e.include("author"),e.include("installations"),e.find()}function p(t){var e=r.a.Object.createWithoutData("Installations",t);return e.increment("count",1),e.save(null,{fetchWhenSave:!0})}function v(t,e){var n=new r.a.Query("Automation");return n.equalTo("instructions",t),n.equalTo("pattern",e),n.first().then((function(t){return Boolean(t)}))}function b(t){var e=t.instructions,n=t.pattern,a=t.name,o=t.intro,l=t.type,s=new c;return s.set("instructions",e),s.set("pattern",n),s.set("name",a),s.set("intro",o),s.set("type",l),s.set("author",r.a.User.current()),u(s),s.save().then((function(t){return i.create(t)}))}function g(t){var e=t.instructions,n=t.pattern;return v(e,n).then((function(e){return e?Promise.reject("Automation has existed"):b(t)}))}},d28b:function(t,e,n){var a=n("746f");a("iterator")},d81d:function(t,e,n){"use strict";var a=n("23e7"),r=n("b727").map,o=n("1dde"),i=n("ae40"),l=o("map"),s=i("map");a({target:"Array",proto:!0,forced:!l||!s},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},d879:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-create"},[n("div",{staticClass:"container"},[n("div",{staticClass:"form-panel"},[n("a-form-model",{ref:"form",attrs:{model:t.form,"label-col":{span:5},"wrapper-col":{span:10},rules:t.rules},on:{submit:t.handleSubmit}},[n("a-form-model-item",{attrs:{label:"Name",prop:"name"}},[n("a-input",{attrs:{placeholder:t.$t("enter.automation.name")},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),n("a-form-model-item",{attrs:{label:"Action",prop:"type"}},[n("a-select",{attrs:{dropdownMatchSelectWidth:!1,placeholder:t.$t("choose.automation.action")},on:{change:t.onActionChange},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},t._l(t.options.actions,(function(e){return n("a-select-option",{key:e.value,attrs:{value:e.value}},[t._v(" "+t._s(e.label)+" ")])})),1)],1),t.args.length?t._l(t.args,(function(e){return n("a-form-model-item",{key:e.name,attrs:{label:e.name}},[n("a-tooltip",[n("template",{slot:"title"},[t._v(" "+t._s(e.tips)+" ")]),"string"===e.type?n("a-input",{attrs:{placeholder:e.placeholder},model:{value:e.value,callback:function(n){t.$set(e,"value",n)},expression:"arg.value"}}):t._e(),"boolean"===e.type?n("a-switch",{model:{value:e.value,callback:function(n){t.$set(e,"value",n)},expression:"arg.value"}}):t._e()],2)],1)})):t._e(),n("a-form-model-item",{attrs:{label:"Target",prop:"target"}},[n("a-input",{attrs:{placeholder:t.$t("enter.automation.target.selector")},model:{value:t.form.target,callback:function(e){t.$set(t.form,"target",e)},expression:"form.target"}},[n("div",{attrs:{slot:"addonBefore"},slot:"addonBefore"},[t._v("@")])])],1),n("a-form-model-item",{attrs:{label:"Instructions","wrapper-col":{span:18}}},[n("code",{staticClass:"code"},[t._v(t._s(t.instructions))])]),n("a-form-model-item",{attrs:{label:"Pattern",prop:"pattern"}},[n("a-input",{attrs:{placeholder:t.$t("enter.automation.url.pattern")},model:{value:t.form.pattern,callback:function(e){t.$set(t.form,"pattern",e)},expression:"form.pattern"}})],1),n("a-form-model-item",{attrs:{label:"Intro",prop:"intro"}},[n("a-textarea",{attrs:{placeholder:t.$t("enter.automation.intro"),autoSize:{minRows:2}},model:{value:t.form.intro,callback:function(e){t.$set(t.form,"intro",e)},expression:"form.intro"}})],1),n("a-form-model-item",{attrs:{"wrapper-col":{span:10,offset:5}}},[n("a-button",{attrs:{type:"primary","html-type":"submit",disabled:t.submitting}},[t._v(t._s(t.$t("create")))])],1)],2)],1)])])},r=[],o=(n("99af"),n("4de4"),n("7db0"),n("a15b"),n("d81d"),n("b0c0"),n("5530"));function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function l(t){if(Array.isArray(t))return i(t)}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("e260"),n("d3b7"),n("3ca3"),n("ddb0");function s(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}n("fb6a"),n("25f0");function u(t,e){if(t){if("string"===typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(t){return l(t)||s(t)||u(t)||c()}var d=n("267e");function m(){return JSON.parse(JSON.stringify(d["a"]))}function p(){return{name:"",intro:"",pattern:"",target:"body",type:""}}var v=n("b1c8"),b={name:"AutomationCreate",data:function(){return{options:{actions:d["a"]},actionConfigs:m(),form:p(),rules:{name:[{required:!0,message:this.$t("enter.automation.name")}],type:[{required:!0,message:this.$t("choose.automation.action")}],target:[{required:!0,message:this.$t("enter.automation.target.selector")}],pattern:[{required:!0,message:this.$t("enter.automation.url.pattern")}]},args:[],submitting:!1}},computed:{instructions:function(){var t=this.getFullAction(),e=this.form.target;return[t,"@",e].join("")}},methods:{getFullAction:function(){var t=this.form.type,e=this.args;if(this.args.length){var n=e.filter((function(t){return t.value!==t.defaultValue})).map((function(t){return[t.name,t.value].join("!")}));return[t].concat(f(n)).join("^")}return t},reset:function(){this.form=p(),this.actionConfigs=m(),this.args=[]},submit:function(){var t=this,e=Object.assign({},this.form);delete e.target;var n=Object(o["a"])(Object(o["a"])({},e),{},{instructions:this.instructions});this.submitting=!0,Object(v["a"])(n).then((function(){t.submitting=!1,t.$message.success(t.$t("create.ok")),t.reset()})).catch((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Something error";console.log("submit -> msg",e),t.$message.error(t.$t("create.error"))}))},handleSubmit:function(t){var e=this;t.preventDefault(),this.$refs.form.validate((function(t){t&&e.submit()}))},updateArgs:function(t){var e=this.actionConfigs.find((function(e){return e.value===t}));this.args=e&&e.args||[]},onActionChange:function(t){this.updateArgs(t)}}},g=b,h=(n("3a55"),n("2877")),y=Object(h["a"])(g,a,r,!1,null,"62d3b7c4",null);e["default"]=y.exports},e01a:function(t,e,n){"use strict";var a=n("23e7"),r=n("83ab"),o=n("da84"),i=n("5135"),l=n("861d"),s=n("9bf2").f,u=n("e893"),c=o.Symbol;if(r&&"function"==typeof c&&(!("description"in c.prototype)||void 0!==c().description)){var f={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new c(t):void 0===t?c():c(t);return""===t&&(f[e]=!0),e};u(d,c);var m=d.prototype=c.prototype;m.constructor=d;var p=m.toString,v="Symbol(test)"==String(c("test")),b=/^Symbol\((.*)\)[^)]+$/;s(m,"description",{configurable:!0,get:function(){var t=l(this)?this.valueOf():this,e=p.call(t);if(i(f,t))return"";var n=v?e.slice(7,-1):e.replace(b,"$1");return""===n?void 0:n}}),a({global:!0,forced:!0},{Symbol:d})}},fb6a:function(t,e,n){"use strict";var a=n("23e7"),r=n("861d"),o=n("e8b5"),i=n("23cb"),l=n("50c4"),s=n("fc6a"),u=n("8418"),c=n("b622"),f=n("1dde"),d=n("ae40"),m=f("slice"),p=d("slice",{ACCESSORS:!0,0:0,1:2}),v=c("species"),b=[].slice,g=Math.max;a({target:"Array",proto:!0,forced:!m||!p},{slice:function(t,e){var n,a,c,f=s(this),d=l(f.length),m=i(t,d),p=i(void 0===e?d:e,d);if(o(f)&&(n=f.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?r(n)&&(n=n[v],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return b.call(f,m,p);for(a=new(void 0===n?Array:n)(g(p-m,0)),c=0;m<p;m++,c++)m in f&&u(a,c,f[m]);return a.length=c,a}})}}]);
//# sourceMappingURL=create.da82731f.js.map