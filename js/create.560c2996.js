(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["create"],{"25f0":function(t,e,r){"use strict";var n=r("6eeb"),a=r("825a"),o=r("d039"),i=r("ad6d"),l="toString",s=RegExp.prototype,u=s[l],c=o((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),f=u.name!=l;(c||f)&&n(RegExp.prototype,l,(function(){var t=a(this),e=String(t.source),r=t.flags,n=String(void 0===r&&t instanceof RegExp&&!("flags"in s)?i.call(t):r);return"/"+e+"/"+n}),{unsafe:!0})},"267e":function(t,e,r){"use strict";r.d(e,"c",(function(){return n})),r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return i}));r("99af");var n={INSTALL_AUTOMATION:"installAutomation",INSTALL_DONE:"installDone"},a={HIGHLIGHT_ENGLISH_SYNTAX:"highlightEnglishSyntax",KILL_ELEMENT:"killElement",READ_MODE:"readMode",HASH_ELEMENT:"hashElement",CODE_COPY:"codeCopy",GOTO_ELEMENT:"gotoElement",DOWNLOAD:"download",FULL_SCREEN:"fullScreen",TIME_UPDATE:"timeupdate",CLICK:"click"},o=[{value:a.READ_MODE,label:"Read Mode",args:[{tips:"metaKey",name:"metaKey",type:"boolean",value:!1,defaultValue:!1}]},{value:a.KILL_ELEMENT,label:"Kill Element",args:[{tips:"metaKey",name:"metaKey",type:"boolean",value:!1,defaultValue:!1}]},{value:a.HIGHLIGHT_ENGLISH_SYNTAX,label:"English Syntax highlighting"},{value:a.HASH_ELEMENT,label:"Add anchor for elements"},{value:a.TIME_UPDATE,label:"Add time tag for video"},{value:a.DOWNLOAD,label:"Download element"},{value:a.FULL_SCREEN,label:"FullScreen element"},{value:a.CODE_COPY,label:"Code copy",args:[{tips:"child of <pre> tag",name:"inpre",type:"boolean",value:!1,defaultValue:!1},{tips:"<pre> tag",name:"pre",type:"boolean",value:!1,defaultValue:!1},{tips:"Remove some elements",name:"rm",type:"string",value:"",defaultValue:"",placeholder:"css selector"},{tips:"Position of btn",name:"pos",type:"string",value:"tl",defaultValue:"tl",placeholder:"tl|tr"}]},{value:a.CLICK,label:"Click"},{value:a.GOTO_ELEMENT,label:"Goto element",args:[{tips:"Auto Goto",name:"auto",type:"boolean",value:!1,defaultValue:!1},{tips:"Target",name:"to",type:"string",value:"",defaultValue:"",placeholder:"css selector"},{tips:"Order",name:"order",type:"string",value:"asc",defaultValue:"asc",placeholder:"desc/asc"},{tips:"Handle, The available functions are: {text|trim|number|siblingText}",name:"handle",type:"string",value:"",defaultValue:"",placeholder:"[.selector,fn]"}]}],i=[{value:"",label:"All"}].concat(o)},"3ca3":function(t,e,r){"use strict";var n=r("6547").charAt,a=r("69f3"),o=r("7dd0"),i="String Iterator",l=a.set,s=a.getterFor(i);o(String,"String",(function(t){l(this,{type:i,string:String(t),index:0})}),(function(){var t,e=s(this),r=e.string,a=e.index;return a>=r.length?{value:void 0,done:!0}:(t=n(r,a),e.index+=t.length,{value:t,done:!1})}))},"4df4":function(t,e,r){"use strict";var n=r("0366"),a=r("7b0b"),o=r("9bdd"),i=r("e95a"),l=r("50c4"),s=r("8418"),u=r("35a1");t.exports=function(t){var e,r,c,f,d,m,p=a(t),v="function"==typeof this?this:Array,h=arguments.length,g=h>1?arguments[1]:void 0,b=void 0!==g,y=u(p),A=0;if(b&&(g=n(g,h>2?arguments[2]:void 0,2)),void 0==y||v==Array&&i(y))for(e=l(p.length),r=new v(e);e>A;A++)m=b?g(p[A],A):p[A],s(r,A,m);else for(f=y.call(p),d=f.next,r=new v;!(c=d.call(f)).done;A++)m=b?o(f,g,[c.value,A],!0):c.value,s(r,A,m);return r.length=A,r}},6547:function(t,e,r){var n=r("a691"),a=r("1d80"),o=function(t){return function(e,r){var o,i,l=String(a(e)),s=n(r),u=l.length;return s<0||s>=u?t?"":void 0:(o=l.charCodeAt(s),o<55296||o>56319||s+1===u||(i=l.charCodeAt(s+1))<56320||i>57343?t?l.charAt(s):o:t?l.slice(s,s+2):i-56320+(o-55296<<10)+65536)}};t.exports={codeAt:o(!1),charAt:o(!0)}},"7db0":function(t,e,r){"use strict";var n=r("23e7"),a=r("b727").find,o=r("44d2"),i=r("ae40"),l="find",s=!0,u=i(l);l in[]&&Array(1)[l]((function(){s=!1})),n({target:"Array",proto:!0,forced:s||!u},{find:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),o(l)},"99af":function(t,e,r){"use strict";var n=r("23e7"),a=r("d039"),o=r("e8b5"),i=r("861d"),l=r("7b0b"),s=r("50c4"),u=r("8418"),c=r("65f0"),f=r("1dde"),d=r("b622"),m=r("2d00"),p=d("isConcatSpreadable"),v=9007199254740991,h="Maximum allowed index exceeded",g=m>=51||!a((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),b=f("concat"),y=function(t){if(!i(t))return!1;var e=t[p];return void 0!==e?!!e:o(t)},A=!g||!b;n({target:"Array",proto:!0,forced:A},{concat:function(t){var e,r,n,a,o,i=l(this),f=c(i,0),d=0;for(e=-1,n=arguments.length;e<n;e++)if(o=-1===e?i:arguments[e],y(o)){if(a=s(o.length),d+a>v)throw TypeError(h);for(r=0;r<a;r++,d++)r in o&&u(f,d,o[r])}else{if(d>=v)throw TypeError(h);u(f,d++,o)}return f.length=d,f}})},a15b:function(t,e,r){"use strict";var n=r("23e7"),a=r("44ad"),o=r("fc6a"),i=r("a640"),l=[].join,s=a!=Object,u=i("join",",");n({target:"Array",proto:!0,forced:s||!u},{join:function(t){return l.call(o(this),void 0===t?",":t)}})},a630:function(t,e,r){var n=r("23e7"),a=r("4df4"),o=r("1c7e"),i=!o((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:i},{from:a})},ad6d:function(t,e,r){"use strict";var n=r("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b0c0:function(t,e,r){var n=r("83ab"),a=r("9bf2").f,o=Function.prototype,i=o.toString,l=/^\s*function ([^ (]*)/,s="name";n&&!(s in o)&&a(o,s,{configurable:!0,get:function(){try{return i.call(this).match(l)[1]}catch(t){return""}}})},b1c8:function(t,e,r){"use strict";r.d(e,"b",(function(){return i})),r.d(e,"c",(function(){return u})),r.d(e,"a",(function(){return d}));r("7db0"),r("b0c0"),r("d3b7");var n=r("c72e"),a=r.n(n),o=a.a.Object.extend("Automation"),i={list:l,listOfAuthor:s};function l(t,e){var r=new a.a.Query("Automation");return t&&r.equalTo("type",t),e&&r.contains("name",e),r.include("author"),r.find()}function s(t){var e=new a.a.Query("Automation");return e.equalTo("author",a.a.Object.createWithoutData("User",t)),e.include("author"),e.find()}function u(t){var e=a.a.Object.createWithoutData("Automation",t);return e.increment("installations",1),e.save(null,{fetchWhenSave:!0})}function c(t,e){var r=new a.a.Query("Automation");return r.equalTo("instructions",t),r.equalTo("pattern",e),r.first().then((function(t){return Boolean(t)}))}function f(t){var e=t.instructions,r=t.pattern,n=t.name,i=t.intro,l=t.type,s=new o;return s.set("instructions",e),s.set("pattern",r),s.set("name",n),s.set("intro",i),s.set("type",l),s.set("author",a.a.User.current()),s.save()}function d(t){var e=t.instructions,r=t.pattern;return c(e,r).then((function(e){return e?Promise.reject("Automation has existed"):f(t)}))}},bc0c:function(t,e,r){"use strict";var n=r("e74b"),a=r.n(n);a.a},d28b:function(t,e,r){var n=r("746f");n("iterator")},d81d:function(t,e,r){"use strict";var n=r("23e7"),a=r("b727").map,o=r("1dde"),i=r("ae40"),l=o("map"),s=i("map");n({target:"Array",proto:!0,forced:!l||!s},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},d879:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page-create"},[r("div",{staticClass:"container"},[r("div",{staticClass:"form-panel"},[r("a-form-model",{ref:"form",attrs:{model:t.form,"label-col":{span:5},"wrapper-col":{span:10},rules:t.rules},on:{submit:t.handleSubmit}},[r("a-form-model-item",{attrs:{label:"Name",prop:"name"}},[r("a-input",{attrs:{placeholder:"Please enter the name of automation"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),r("a-form-model-item",{attrs:{label:"Action",prop:"type"}},[r("a-select",{attrs:{dropdownMatchSelectWidth:!1,placeholder:"Please choose an action!"},on:{change:t.onActionChange},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},t._l(t.options.actions,(function(e){return r("a-select-option",{key:e.value,attrs:{value:e.value}},[t._v(" "+t._s(e.label)+" ")])})),1)],1),t.args.length?t._l(t.args,(function(e){return r("a-form-model-item",{key:e.name,attrs:{label:e.name}},[r("a-tooltip",[r("template",{slot:"title"},[t._v(" "+t._s(e.tips)+" ")]),"string"===e.type?r("a-input",{attrs:{placeholder:e.placeholder},model:{value:e.value,callback:function(r){t.$set(e,"value",r)},expression:"arg.value"}}):t._e(),"boolean"===e.type?r("a-switch",{model:{value:e.value,callback:function(r){t.$set(e,"value",r)},expression:"arg.value"}}):t._e()],2)],1)})):t._e(),r("a-form-model-item",{attrs:{label:"Target",prop:"target"}},[r("a-input",{attrs:{placeholder:"Please enter the selector of target elements"},model:{value:t.form.target,callback:function(e){t.$set(t.form,"target",e)},expression:"form.target"}},[r("div",{attrs:{slot:"addonBefore"},slot:"addonBefore"},[t._v("@")])])],1),r("a-form-model-item",{attrs:{label:"Instructions","wrapper-col":{span:18}}},[r("code",{staticClass:"code"},[t._v(t._s(t.instructions))])]),r("a-form-model-item",{attrs:{label:"Pattern",prop:"pattern"}},[r("a-input",{attrs:{placeholder:"Please enter the URL pattern"},model:{value:t.form.pattern,callback:function(e){t.$set(t.form,"pattern",e)},expression:"form.pattern"}})],1),r("a-form-model-item",{attrs:{label:"Intro",prop:"intro"}},[r("a-textarea",{attrs:{placeholder:"Please enter the intro of automation",autoSize:{minRows:2}},model:{value:t.form.intro,callback:function(e){t.$set(t.form,"intro",e)},expression:"form.intro"}})],1),r("a-form-model-item",{attrs:{"wrapper-col":{span:10,offset:5}}},[r("a-button",{attrs:{type:"primary","html-type":"submit",disabled:t.submitting}},[t._v("Create")])],1)],2)],1)])])},a=[],o=(r("99af"),r("4de4"),r("7db0"),r("a15b"),r("d81d"),r("b0c0"),r("5530"));function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function l(t){if(Array.isArray(t))return i(t)}r("a4d3"),r("e01a"),r("d28b"),r("a630"),r("e260"),r("d3b7"),r("3ca3"),r("ddb0");function s(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}r("fb6a"),r("25f0");function u(t,e){if(t){if("string"===typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(t){return l(t)||s(t)||u(t)||c()}var d=r("267e");function m(){return JSON.parse(JSON.stringify(d["a"]))}function p(){return{name:"",intro:"",pattern:"",target:"body",type:""}}var v=r("b1c8"),h={name:"AutomationCreate",data:function(){return{options:{actions:d["a"]},actionConfigs:m(),form:p(),rules:{name:[{required:!0,message:"Please enter the name of automation"}],type:[{required:!0,message:"Please choose an action!"}],target:[{required:!0,message:"Please enter the selector of target elements"}],pattern:[{required:!0,message:"Please enter the URL pattern"}]},args:[],submitting:!1}},computed:{instructions:function(){var t=this.getFullAction(),e=this.form.target;return[t,"@",e].join("")}},methods:{getFullAction:function(){var t=this.form.type,e=this.args;if(this.args.length){var r=e.filter((function(t){return t.value!==t.defaultValue})).map((function(t){return[t.name,t.value].join("!")}));return[t].concat(f(r)).join("^")}return t},reset:function(){this.form=p(),this.actionConfigs=m(),this.args=[]},submit:function(){var t=this,e=Object.assign({},this.form);delete e.target;var r=Object(o["a"])(Object(o["a"])({},e),{},{instructions:this.instructions});this.submitting=!0,Object(v["a"])(r).then((function(){t.submitting=!1,t.$message.success("Create successfully!"),t.reset()})).catch((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Something error";t.$message.error(e)}))},handleSubmit:function(t){var e=this;t.preventDefault(),this.$refs.form.validate((function(t){t&&e.submit()}))},updateArgs:function(t){var e=this.actionConfigs.find((function(e){return e.value===t}));this.args=e&&e.args||[]},onActionChange:function(t){this.updateArgs(t)}}},g=h,b=(r("bc0c"),r("2877")),y=Object(b["a"])(g,n,a,!1,null,"48852994",null);e["default"]=y.exports},ddb0:function(t,e,r){var n=r("da84"),a=r("fdbc"),o=r("e260"),i=r("9112"),l=r("b622"),s=l("iterator"),u=l("toStringTag"),c=o.values;for(var f in a){var d=n[f],m=d&&d.prototype;if(m){if(m[s]!==c)try{i(m,s,c)}catch(v){m[s]=c}if(m[u]||i(m,u,f),a[f])for(var p in o)if(m[p]!==o[p])try{i(m,p,o[p])}catch(v){m[p]=o[p]}}}},e01a:function(t,e,r){"use strict";var n=r("23e7"),a=r("83ab"),o=r("da84"),i=r("5135"),l=r("861d"),s=r("9bf2").f,u=r("e893"),c=o.Symbol;if(a&&"function"==typeof c&&(!("description"in c.prototype)||void 0!==c().description)){var f={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new c(t):void 0===t?c():c(t);return""===t&&(f[e]=!0),e};u(d,c);var m=d.prototype=c.prototype;m.constructor=d;var p=m.toString,v="Symbol(test)"==String(c("test")),h=/^Symbol\((.*)\)[^)]+$/;s(m,"description",{configurable:!0,get:function(){var t=l(this)?this.valueOf():this,e=p.call(t);if(i(f,t))return"";var r=v?e.slice(7,-1):e.replace(h,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:d})}},e74b:function(t,e,r){},fb6a:function(t,e,r){"use strict";var n=r("23e7"),a=r("861d"),o=r("e8b5"),i=r("23cb"),l=r("50c4"),s=r("fc6a"),u=r("8418"),c=r("b622"),f=r("1dde"),d=r("ae40"),m=f("slice"),p=d("slice",{ACCESSORS:!0,0:0,1:2}),v=c("species"),h=[].slice,g=Math.max;n({target:"Array",proto:!0,forced:!m||!p},{slice:function(t,e){var r,n,c,f=s(this),d=l(f.length),m=i(t,d),p=i(void 0===e?d:e,d);if(o(f)&&(r=f.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?a(r)&&(r=r[v],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return h.call(f,m,p);for(n=new(void 0===r?Array:r)(g(p-m,0)),c=0;m<p;m++,c++)m in f&&u(n,c,f[m]);return n.length=c,n}})}}]);
//# sourceMappingURL=create.560c2996.js.map