(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["automation~create"],{"0e54":function(e,t,n){(function(t,n){e.exports=n()})(0,(function(){"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}function n(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e){var t=0;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=n(e)))return function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return t=e[Symbol.iterator](),t.next.bind(t)}function a(e,t){return t={exports:{}},e(t,t.exports),t.exports}var s=a((function(e){function t(){return{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}function n(t){e.exports.defaults=t}e.exports={defaults:t(),getDefaults:t,changeDefaults:n}})),l=(s.defaults,s.getDefaults,s.changeDefaults,/[&<>"']/),o=/[&<>"']/g,c=/[<>"']|&(?!#?\w+;)/,u=/[<>"']|&(?!#?\w+;)/g,h={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},p=function(e){return h[e]};function f(e,t){if(t){if(l.test(e))return e.replace(o,p)}else if(c.test(e))return e.replace(u,p);return e}var g=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function d(e){return e.replace(g,(function(e,t){return t=t.toLowerCase(),"colon"===t?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""}))}var k=/(^|[^\[])\^/g;function b(e,t){e=e.source||e,t=t||"";var n={replace:function(t,r){return r=r.source||r,r=r.replace(k,"$1"),e=e.replace(t,r),n},getRegex:function(){return new RegExp(e,t)}};return n}var m=/[^\w:]/g,v=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function x(e,t,n){if(e){var r;try{r=decodeURIComponent(d(n)).replace(m,"").toLowerCase()}catch(i){return null}if(0===r.indexOf("javascript:")||0===r.indexOf("vbscript:")||0===r.indexOf("data:"))return null}t&&!v.test(n)&&(n=A(t,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch(i){return null}return n}var w={},y=/^[^:]+:\/*[^/]*$/,_=/^([^:]+:)[\s\S]*$/,z=/^([^:]+:\/*[^/]*)[\s\S]*$/;function A(e,t){w[" "+e]||(y.test(e)?w[" "+e]=e+"/":w[" "+e]=E(e,"/",!0)),e=w[" "+e];var n=-1===e.indexOf(":");return"//"===t.substring(0,2)?n?t:e.replace(_,"$1")+t:"/"===t.charAt(0)?n?t:e.replace(z,"$1")+t:e+t}var S={exec:function(){}};function $(e){for(var t,n,r=1;r<arguments.length;r++)for(n in t=arguments[r],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}function T(e,t){var n=e.replace(/\|/g,(function(e,t,n){var r=!1,i=t;while(--i>=0&&"\\"===n[i])r=!r;return r?"|":" |"})),r=n.split(/ \|/),i=0;if(r.length>t)r.splice(t);else while(r.length<t)r.push("");for(;i<r.length;i++)r[i]=r[i].trim().replace(/\\\|/g,"|");return r}function E(e,t,n){var r=e.length;if(0===r)return"";var i=0;while(i<r){var a=e.charAt(r-i-1);if(a!==t||n){if(a===t||!n)break;i++}else i++}return e.substr(0,r-i)}function R(e,t){if(-1===e.indexOf(t[1]))return-1;for(var n=e.length,r=0,i=0;i<n;i++)if("\\"===e[i])i++;else if(e[i]===t[0])r++;else if(e[i]===t[1]&&(r--,r<0))return i;return-1}function O(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}var I={escape:f,unescape:d,edit:b,cleanUrl:x,resolveUrl:A,noopTest:S,merge:$,splitCells:T,rtrim:E,findClosingBracket:R,checkSanitizeDeprecation:O},L=s.defaults,C=I.rtrim,D=I.splitCells,q=I.escape,Z=I.findClosingBracket;function N(e,t,n){var r=t.href,i=t.title?q(t.title):null;return"!"!==e[0].charAt(0)?{type:"link",raw:n,href:r,title:i,text:e[1]}:{type:"image",raw:n,text:q(e[1]),href:r,title:i}}function U(e,t){var n=e.match(/^(\s+)(?:```)/);if(null===n)return t;var r=n[1];return t.split("\n").map((function(e){var t=e.match(/^\s+/);if(null===t)return e;var n=t[0];return n.length>=r.length?e.slice(r.length):e})).join("\n")}var j=function(){function e(e){this.options=e||L}var t=e.prototype;return t.space=function(e){var t=this.rules.block.newline.exec(e);if(t)return t[0].length>1?{type:"space",raw:t[0]}:{raw:"\n"}},t.code=function(e,t){var n=this.rules.block.code.exec(e);if(n){var r=t[t.length-1];if(r&&"paragraph"===r.type)return{raw:n[0],text:n[0].trimRight()};var i=n[0].replace(/^ {4}/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?i:C(i,"\n")}}},t.fences=function(e){var t=this.rules.block.fences.exec(e);if(t){var n=t[0],r=U(n,t[3]||"");return{type:"code",raw:n,lang:t[2]?t[2].trim():t[2],text:r}}},t.heading=function(e){var t=this.rules.block.heading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[1].length,text:t[2]}},t.nptable=function(e){var t=this.rules.block.nptable.exec(e);if(t){var n={type:"table",header:D(t[1].replace(/^ *| *\| *$/g,"")),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:t[3]?t[3].replace(/\n$/,"").split("\n"):[],raw:t[0]};if(n.header.length===n.align.length){var r,i=n.align.length;for(r=0;r<i;r++)/^ *-+: *$/.test(n.align[r])?n.align[r]="right":/^ *:-+: *$/.test(n.align[r])?n.align[r]="center":/^ *:-+ *$/.test(n.align[r])?n.align[r]="left":n.align[r]=null;for(i=n.cells.length,r=0;r<i;r++)n.cells[r]=D(n.cells[r],n.header.length);return n}}},t.hr=function(e){var t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}},t.blockquote=function(e){var t=this.rules.block.blockquote.exec(e);if(t){var n=t[0].replace(/^ *> ?/gm,"");return{type:"blockquote",raw:t[0],text:n}}},t.list=function(e){var t=this.rules.block.list.exec(e);if(t){for(var n,r,i,a,s,l,o,c=t[0],u=t[2],h=u.length>1,p={type:"list",raw:c,ordered:h,start:h?+u:"",loose:!1,items:[]},f=t[0].match(this.rules.block.item),g=!1,d=f.length,k=0;k<d;k++)n=f[k],c=n,r=n.length,n=n.replace(/^ *([*+-]|\d+\.) */,""),~n.indexOf("\n ")&&(r-=n.length,n=this.options.pedantic?n.replace(/^ {1,4}/gm,""):n.replace(new RegExp("^ {1,"+r+"}","gm"),"")),k!==d-1&&(i=this.rules.block.bullet.exec(f[k+1])[0],(u.length>1?1===i.length:i.length>1||this.options.smartLists&&i!==u)&&(a=f.slice(k+1).join("\n"),p.raw=p.raw.substring(0,p.raw.length-a.length),k=d-1)),s=g||/\n\n(?!\s*$)/.test(n),k!==d-1&&(g="\n"===n.charAt(n.length-1),s||(s=g)),s&&(p.loose=!0),l=/^\[[ xX]\] /.test(n),o=void 0,l&&(o=" "!==n[1],n=n.replace(/^\[[ xX]\] +/,"")),p.items.push({type:"list_item",raw:c,task:l,checked:o,loose:s,text:n});return p}},t.html=function(e){var t=this.rules.block.html.exec(e);if(t)return{type:this.options.sanitize?"paragraph":"html",raw:t[0],pre:!this.options.sanitizer&&("pre"===t[1]||"script"===t[1]||"style"===t[1]),text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):q(t[0]):t[0]}},t.def=function(e){var t=this.rules.block.def.exec(e);if(t){t[3]&&(t[3]=t[3].substring(1,t[3].length-1));var n=t[1].toLowerCase().replace(/\s+/g," ");return{tag:n,raw:t[0],href:t[2],title:t[3]}}},t.table=function(e){var t=this.rules.block.table.exec(e);if(t){var n={type:"table",header:D(t[1].replace(/^ *| *\| *$/g,"")),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:t[3]?t[3].replace(/\n$/,"").split("\n"):[]};if(n.header.length===n.align.length){n.raw=t[0];var r,i=n.align.length;for(r=0;r<i;r++)/^ *-+: *$/.test(n.align[r])?n.align[r]="right":/^ *:-+: *$/.test(n.align[r])?n.align[r]="center":/^ *:-+ *$/.test(n.align[r])?n.align[r]="left":n.align[r]=null;for(i=n.cells.length,r=0;r<i;r++)n.cells[r]=D(n.cells[r].replace(/^ *\| *| *\| *$/g,""),n.header.length);return n}}},t.lheading=function(e){var t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1]}},t.paragraph=function(e){var t=this.rules.block.paragraph.exec(e);if(t)return{type:"paragraph",raw:t[0],text:"\n"===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1]}},t.text=function(e,t){var n=this.rules.block.text.exec(e);if(n){var r=t[t.length-1];return r&&"text"===r.type?{raw:n[0],text:n[0]}:{type:"text",raw:n[0],text:n[0]}}},t.escape=function(e){var t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:q(t[1])}},t.tag=function(e,t,n){var r=this.rules.inline.tag.exec(e);if(r)return!t&&/^<a /i.test(r[0])?t=!0:t&&/^<\/a>/i.test(r[0])&&(t=!1),!n&&/^<(pre|code|kbd|script)(\s|>)/i.test(r[0])?n=!0:n&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(r[0])&&(n=!1),{type:this.options.sanitize?"text":"html",raw:r[0],inLink:t,inRawBlock:n,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):q(r[0]):r[0]}},t.link=function(e){var t=this.rules.inline.link.exec(e);if(t){var n=Z(t[2],"()");if(n>-1){var r=0===t[0].indexOf("!")?5:4,i=r+t[1].length+n;t[2]=t[2].substring(0,n),t[0]=t[0].substring(0,i).trim(),t[3]=""}var a=t[2],s="";if(this.options.pedantic){var l=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(a);l?(a=l[1],s=l[3]):s=""}else s=t[3]?t[3].slice(1,-1):"";a=a.trim().replace(/^<([\s\S]*)>$/,"$1");var o=N(t,{href:a?a.replace(this.rules.inline._escapes,"$1"):a,title:s?s.replace(this.rules.inline._escapes,"$1"):s},t[0]);return o}},t.reflink=function(e,t){var n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){var r=(n[2]||n[1]).replace(/\s+/g," ");if(r=t[r.toLowerCase()],!r||!r.href){var i=n[0].charAt(0);return{type:"text",raw:i,text:i}}var a=N(n,r,n[0]);return a}},t.strong=function(e){var t=this.rules.inline.strong.exec(e);if(t)return{type:"strong",raw:t[0],text:t[4]||t[3]||t[2]||t[1]}},t.em=function(e){var t=this.rules.inline.em.exec(e);if(t)return{type:"em",raw:t[0],text:t[6]||t[5]||t[4]||t[3]||t[2]||t[1]}},t.codespan=function(e){var t=this.rules.inline.code.exec(e);if(t){var n=t[2].replace(/\n/g," "),r=/[^ ]/.test(n),i=n.startsWith(" ")&&n.endsWith(" ");return r&&i&&(n=n.substring(1,n.length-1)),n=q(n,!0),{type:"codespan",raw:t[0],text:n}}},t.br=function(e){var t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}},t.del=function(e){var t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[1]}},t.autolink=function(e,t){var n,r,i=this.rules.inline.autolink.exec(e);if(i)return"@"===i[2]?(n=q(this.options.mangle?t(i[1]):i[1]),r="mailto:"+n):(n=q(i[1]),r=n),{type:"link",raw:i[0],text:n,href:r,tokens:[{type:"text",raw:n,text:n}]}},t.url=function(e,t){var n;if(n=this.rules.inline.url.exec(e)){var r,i;if("@"===n[2])r=q(this.options.mangle?t(n[0]):n[0]),i="mailto:"+r;else{var a;do{a=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0]}while(a!==n[0]);r=q(n[0]),i="www."===n[1]?"http://"+r:r}return{type:"link",raw:n[0],text:r,href:i,tokens:[{type:"text",raw:r,text:r}]}}},t.inlineText=function(e,t,n){var r,i=this.rules.inline.text.exec(e);if(i)return r=t?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):q(i[0]):i[0]:q(this.options.smartypants?n(i[0]):i[0]),{type:"text",raw:i[0],text:r}},e}(),P=I.noopTest,M=I.edit,H=I.merge,V={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,nptable:P,table:P,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};V.def=M(V.def).replace("label",V._label).replace("title",V._title).getRegex(),V.bullet=/(?:[*+-]|\d{1,9}\.)/,V.item=/^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/,V.item=M(V.item,"gm").replace(/bull/g,V.bullet).getRegex(),V.list=M(V.list).replace(/bull/g,V.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+V.def.source+")").getRegex(),V._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",V._comment=/<!--(?!-?>)[\s\S]*?-->/,V.html=M(V.html,"i").replace("comment",V._comment).replace("tag",V._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),V.paragraph=M(V._paragraph).replace("hr",V.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",V._tag).getRegex(),V.blockquote=M(V.blockquote).replace("paragraph",V.paragraph).getRegex(),V.normal=H({},V),V.gfm=H({},V.normal,{nptable:"^ *([^|\\n ].*\\|.*)\\n *([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",table:"^ *\\|(.+)\\n *\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),V.gfm.nptable=M(V.gfm.nptable).replace("hr",V.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",V._tag).getRegex(),V.gfm.table=M(V.gfm.table).replace("hr",V.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",V._tag).getRegex(),V.pedantic=H({},V.normal,{html:M("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",V._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,fences:P,paragraph:M(V.normal._paragraph).replace("hr",V.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",V.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});var G={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:P,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,strong:/^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,em:/^_([^\s_])_(?!_)|^_([^\s_<][\s\S]*?[^\s_])_(?!_|[^\s,punctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\s,punctuation])|^\*([^\s*<\[])\*(?!\*)|^\*([^\s<"][\s\S]*?[^\s\[\*])\*(?![\]`punctuation])|^\*([^\s*"<\[][\s\S]*[^\s])\*(?!\*)/,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:P,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/,_punctuation:"!\"#$%&'()*+\\-./:;<=>?@\\[^_{|}~"};G.em=M(G.em).replace(/punctuation/g,G._punctuation).getRegex(),G._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,G._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,G._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,G.autolink=M(G.autolink).replace("scheme",G._scheme).replace("email",G._email).getRegex(),G._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,G.tag=M(G.tag).replace("comment",V._comment).replace("attribute",G._attribute).getRegex(),G._label=/(?:\[[^\[\]]*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,G._href=/<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/,G._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,G.link=M(G.link).replace("label",G._label).replace("href",G._href).replace("title",G._title).getRegex(),G.reflink=M(G.reflink).replace("label",G._label).getRegex(),G.normal=H({},G),G.pedantic=H({},G.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,link:M(/^!?\[(label)\]\((.*?)\)/).replace("label",G._label).getRegex(),reflink:M(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",G._label).getRegex()}),G.gfm=H({},G.normal,{escape:M(G.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^~+(?=\S)([\s\S]*?\S)~+/,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/}),G.gfm.url=M(G.gfm.url,"i").replace("email",G.gfm._extended_email).getRegex(),G.breaks=H({},G.gfm,{br:M(G.br).replace("{2,}","*").getRegex(),text:M(G.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});var K={block:V,inline:G},W=s.defaults,F=K.block,B=K.inline;function Q(e){return e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function X(e){var t,n,r="",i=e.length;for(t=0;t<i;t++)n=e.charCodeAt(t),Math.random()>.5&&(n="x"+n.toString(16)),r+="&#"+n+";";return r}var Y=function(){function e(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||W,this.options.tokenizer=this.options.tokenizer||new j,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options;var t={block:F.normal,inline:B.normal};this.options.pedantic?(t.block=F.pedantic,t.inline=B.pedantic):this.options.gfm&&(t.block=F.gfm,this.options.breaks?t.inline=B.breaks:t.inline=B.gfm),this.tokenizer.rules=t}e.lex=function(t,n){var r=new e(n);return r.lex(t)};var n=e.prototype;return n.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    "),this.blockTokens(e,this.tokens,!0),this.inline(this.tokens),this.tokens},n.blockTokens=function(e,t,n){var r,i,a,s;void 0===t&&(t=[]),void 0===n&&(n=!0),e=e.replace(/^ +$/gm,"");while(e)if(r=this.tokenizer.space(e))e=e.substring(r.raw.length),r.type&&t.push(r);else if(r=this.tokenizer.code(e,t))e=e.substring(r.raw.length),r.type?t.push(r):(s=t[t.length-1],s.raw+="\n"+r.raw,s.text+="\n"+r.text);else if(r=this.tokenizer.fences(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.heading(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.nptable(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.hr(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.blockquote(e))e=e.substring(r.raw.length),r.tokens=this.blockTokens(r.text,[],n),t.push(r);else if(r=this.tokenizer.list(e)){for(e=e.substring(r.raw.length),a=r.items.length,i=0;i<a;i++)r.items[i].tokens=this.blockTokens(r.items[i].text,[],!1);t.push(r)}else if(r=this.tokenizer.html(e))e=e.substring(r.raw.length),t.push(r);else if(n&&(r=this.tokenizer.def(e)))e=e.substring(r.raw.length),this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title});else if(r=this.tokenizer.table(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.lheading(e))e=e.substring(r.raw.length),t.push(r);else if(n&&(r=this.tokenizer.paragraph(e)))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.text(e,t))e=e.substring(r.raw.length),r.type?t.push(r):(s=t[t.length-1],s.raw+="\n"+r.raw,s.text+="\n"+r.text);else if(e){var l="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(l);break}throw new Error(l)}return t},n.inline=function(e){var t,n,r,i,a,s,l=e.length;for(t=0;t<l;t++)switch(s=e[t],s.type){case"paragraph":case"text":case"heading":s.tokens=[],this.inlineTokens(s.text,s.tokens);break;case"table":for(s.tokens={header:[],cells:[]},i=s.header.length,n=0;n<i;n++)s.tokens.header[n]=[],this.inlineTokens(s.header[n],s.tokens.header[n]);for(i=s.cells.length,n=0;n<i;n++)for(a=s.cells[n],s.tokens.cells[n]=[],r=0;r<a.length;r++)s.tokens.cells[n][r]=[],this.inlineTokens(a[r],s.tokens.cells[n][r]);break;case"blockquote":this.inline(s.tokens);break;case"list":for(i=s.items.length,n=0;n<i;n++)this.inline(s.items[n].tokens);break}return e},n.inlineTokens=function(e,t,n,r){var i;void 0===t&&(t=[]),void 0===n&&(n=!1),void 0===r&&(r=!1);while(e)if(i=this.tokenizer.escape(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.tag(e,n,r))e=e.substring(i.raw.length),n=i.inLink,r=i.inRawBlock,t.push(i);else if(i=this.tokenizer.link(e))e=e.substring(i.raw.length),"link"===i.type&&(i.tokens=this.inlineTokens(i.text,[],!0,r)),t.push(i);else if(i=this.tokenizer.reflink(e,this.tokens.links))e=e.substring(i.raw.length),"link"===i.type&&(i.tokens=this.inlineTokens(i.text,[],!0,r)),t.push(i);else if(i=this.tokenizer.strong(e))e=e.substring(i.raw.length),i.tokens=this.inlineTokens(i.text,[],n,r),t.push(i);else if(i=this.tokenizer.em(e))e=e.substring(i.raw.length),i.tokens=this.inlineTokens(i.text,[],n,r),t.push(i);else if(i=this.tokenizer.codespan(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.br(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.del(e))e=e.substring(i.raw.length),i.tokens=this.inlineTokens(i.text,[],n,r),t.push(i);else if(i=this.tokenizer.autolink(e,X))e=e.substring(i.raw.length),t.push(i);else if(n||!(i=this.tokenizer.url(e,X))){if(i=this.tokenizer.inlineText(e,r,Q))e=e.substring(i.raw.length),t.push(i);else if(e){var a="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(a);break}throw new Error(a)}}else e=e.substring(i.raw.length),t.push(i);return t},t(e,null,[{key:"rules",get:function(){return{block:F,inline:B}}}]),e}(),J=s.defaults,ee=I.cleanUrl,te=I.escape,ne=function(){function e(e){this.options=e||J}var t=e.prototype;return t.code=function(e,t,n){var r=(t||"").match(/\S*/)[0];if(this.options.highlight){var i=this.options.highlight(e,r);null!=i&&i!==e&&(n=!0,e=i)}return r?'<pre><code class="'+this.options.langPrefix+te(r,!0)+'">'+(n?e:te(e,!0))+"</code></pre>\n":"<pre><code>"+(n?e:te(e,!0))+"</code></pre>\n"},t.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},t.html=function(e){return e},t.heading=function(e,t,n,r){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+r.slug(n)+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"},t.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},t.list=function(e,t,n){var r=t?"ol":"ul",i=t&&1!==n?' start="'+n+'"':"";return"<"+r+i+">\n"+e+"</"+r+">\n"},t.listitem=function(e){return"<li>"+e+"</li>\n"},t.checkbox=function(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "},t.paragraph=function(e){return"<p>"+e+"</p>\n"},t.table=function(e,t){return t&&(t="<tbody>"+t+"</tbody>"),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"},t.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},t.tablecell=function(e,t){var n=t.header?"th":"td",r=t.align?"<"+n+' align="'+t.align+'">':"<"+n+">";return r+e+"</"+n+">\n"},t.strong=function(e){return"<strong>"+e+"</strong>"},t.em=function(e){return"<em>"+e+"</em>"},t.codespan=function(e){return"<code>"+e+"</code>"},t.br=function(){return this.options.xhtml?"<br/>":"<br>"},t.del=function(e){return"<del>"+e+"</del>"},t.link=function(e,t,n){if(e=ee(this.options.sanitize,this.options.baseUrl,e),null===e)return n;var r='<a href="'+te(e)+'"';return t&&(r+=' title="'+t+'"'),r+=">"+n+"</a>",r},t.image=function(e,t,n){if(e=ee(this.options.sanitize,this.options.baseUrl,e),null===e)return n;var r='<img src="'+e+'" alt="'+n+'"';return t&&(r+=' title="'+t+'"'),r+=this.options.xhtml?"/>":">",r},t.text=function(e){return e},e}(),re=function(){function e(){}var t=e.prototype;return t.strong=function(e){return e},t.em=function(e){return e},t.codespan=function(e){return e},t.del=function(e){return e},t.html=function(e){return e},t.text=function(e){return e},t.link=function(e,t,n){return""+n},t.image=function(e,t,n){return""+n},t.br=function(){return""},e}(),ie=function(){function e(){this.seen={}}var t=e.prototype;return t.slug=function(e){var t=e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-");if(this.seen.hasOwnProperty(t)){var n=t;do{this.seen[n]++,t=n+"-"+this.seen[n]}while(this.seen.hasOwnProperty(t))}return this.seen[t]=0,t},e}(),ae=s.defaults,se=I.unescape,le=function(){function e(e){this.options=e||ae,this.options.renderer=this.options.renderer||new ne,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new re,this.slugger=new ie}e.parse=function(t,n){var r=new e(n);return r.parse(t)};var t=e.prototype;return t.parse=function(e,t){void 0===t&&(t=!0);var n,r,i,a,s,l,o,c,u,h,p,f,g,d,k,b,m,v,x="",w=e.length;for(n=0;n<w;n++)switch(h=e[n],h.type){case"space":continue;case"hr":x+=this.renderer.hr();continue;case"heading":x+=this.renderer.heading(this.parseInline(h.tokens),h.depth,se(this.parseInline(h.tokens,this.textRenderer)),this.slugger);continue;case"code":x+=this.renderer.code(h.text,h.lang,h.escaped);continue;case"table":for(c="",o="",a=h.header.length,r=0;r<a;r++)o+=this.renderer.tablecell(this.parseInline(h.tokens.header[r]),{header:!0,align:h.align[r]});for(c+=this.renderer.tablerow(o),u="",a=h.cells.length,r=0;r<a;r++){for(l=h.tokens.cells[r],o="",s=l.length,i=0;i<s;i++)o+=this.renderer.tablecell(this.parseInline(l[i]),{header:!1,align:h.align[i]});u+=this.renderer.tablerow(o)}x+=this.renderer.table(c,u);continue;case"blockquote":u=this.parse(h.tokens),x+=this.renderer.blockquote(u);continue;case"list":for(p=h.ordered,f=h.start,g=h.loose,a=h.items.length,u="",r=0;r<a;r++)k=h.items[r],b=k.checked,m=k.task,d="",k.task&&(v=this.renderer.checkbox(b),g?k.tokens.length>0&&"text"===k.tokens[0].type?(k.tokens[0].text=v+" "+k.tokens[0].text,k.tokens[0].tokens&&k.tokens[0].tokens.length>0&&"text"===k.tokens[0].tokens[0].type&&(k.tokens[0].tokens[0].text=v+" "+k.tokens[0].tokens[0].text)):k.tokens.unshift({type:"text",text:v}):d+=v),d+=this.parse(k.tokens,g),u+=this.renderer.listitem(d,m,b);x+=this.renderer.list(u,p,f);continue;case"html":x+=this.renderer.html(h.text);continue;case"paragraph":x+=this.renderer.paragraph(this.parseInline(h.tokens));continue;case"text":u=h.tokens?this.parseInline(h.tokens):h.text;while(n+1<w&&"text"===e[n+1].type)h=e[++n],u+="\n"+(h.tokens?this.parseInline(h.tokens):h.text);x+=t?this.renderer.paragraph(u):u;continue;default:var y='Token with "'+h.type+'" type was not found.';if(this.options.silent)return void console.error(y);throw new Error(y)}return x},t.parseInline=function(e,t){t=t||this.renderer;var n,r,i="",a=e.length;for(n=0;n<a;n++)switch(r=e[n],r.type){case"escape":i+=t.text(r.text);break;case"html":i+=t.html(r.text);break;case"link":i+=t.link(r.href,r.title,this.parseInline(r.tokens,t));break;case"image":i+=t.image(r.href,r.title,r.text);break;case"strong":i+=t.strong(this.parseInline(r.tokens,t));break;case"em":i+=t.em(this.parseInline(r.tokens,t));break;case"codespan":i+=t.codespan(r.text);break;case"br":i+=t.br();break;case"del":i+=t.del(this.parseInline(r.tokens,t));break;case"text":i+=t.text(r.text);break;default:var s='Token with "'+r.type+'" type was not found.';if(this.options.silent)return void console.error(s);throw new Error(s)}return i},e}(),oe=I.merge,ce=I.checkSanitizeDeprecation,ue=I.escape,he=s.getDefaults,pe=s.changeDefaults,fe=s.defaults;function ge(e,t,n){if("undefined"===typeof e||null===e)throw new Error("marked(): input parameter is undefined or null");if("string"!==typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if("function"===typeof t&&(n=t,t=null),t=oe({},ge.defaults,t||{}),ce(t),n){var r,i=t.highlight;try{r=Y.lex(e,t)}catch(o){return n(o)}var a=function(e){var a;if(!e)try{a=le.parse(r,t)}catch(o){e=o}return t.highlight=i,e?n(e):n(null,a)};if(!i||i.length<3)return a();if(delete t.highlight,!r.length)return a();var s=0;return ge.walkTokens(r,(function(e){"code"===e.type&&(s++,i(e.text,e.lang,(function(t,n){if(t)return a(t);null!=n&&n!==e.text&&(e.text=n,e.escaped=!0),s--,0===s&&a()})))})),void(0===s&&a())}try{var l=Y.lex(e,t);return t.walkTokens&&ge.walkTokens(l,t.walkTokens),le.parse(l,t)}catch(o){if(o.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+ue(o.message+"",!0)+"</pre>";throw o}}ge.options=ge.setOptions=function(e){return oe(ge.defaults,e),pe(ge.defaults),ge},ge.getDefaults=he,ge.defaults=fe,ge.use=function(e){var t=oe({},e);if(e.renderer&&function(){var n=ge.defaults.renderer||new ne,r=function(t){var r=n[t];n[t]=function(){for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];var l=e.renderer[t].apply(n,a);return!1===l&&(l=r.apply(n,a)),l}};for(var i in e.renderer)r(i);t.renderer=n}(),e.tokenizer&&function(){var n=ge.defaults.tokenizer||new j,r=function(t){var r=n[t];n[t]=function(){for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];var l=e.tokenizer[t].apply(n,a);return!1===l&&(l=r.apply(n,a)),l}};for(var i in e.tokenizer)r(i);t.tokenizer=n}(),e.walkTokens){var n=ge.defaults.walkTokens;t.walkTokens=function(t){e.walkTokens(t),n&&n(t)}}ge.setOptions(t)},ge.walkTokens=function(e,t){for(var n,r=i(e);!(n=r()).done;){var a=n.value;switch(t(a),a.type){case"table":for(var s,l=i(a.tokens.header);!(s=l()).done;){var o=s.value;ge.walkTokens(o,t)}for(var c,u=i(a.tokens.cells);!(c=u()).done;)for(var h,p=c.value,f=i(p);!(h=f()).done;){var g=h.value;ge.walkTokens(g,t)}break;case"list":ge.walkTokens(a.items,t);break;default:a.tokens&&ge.walkTokens(a.tokens,t)}}},ge.Parser=le,ge.parser=le.parse,ge.Renderer=ne,ge.TextRenderer=re,ge.Lexer=Y,ge.lexer=Y.lex,ge.Tokenizer=j,ge.Slugger=ie,ge.parse=ge;var de=ge;return de}))},"267e":function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return s}));n("99af");var r={INSTALL_AUTOMATION:"installAutomation",INSTALL_DONE:"installDone"},i={HIGHLIGHT_ENGLISH_SYNTAX:"highlightEnglishSyntax",KILL_ELEMENT:"killElement",READ_MODE:"readMode",HASH_ELEMENT:"hashElement",CODE_COPY:"codeCopy",GOTO_ELEMENT:"gotoElement",DOWNLOAD:"download",FULL_SCREEN:"fullScreen",TIME_UPDATE:"timeupdate",CLICK:"click"},a=[{value:i.READ_MODE,label:"Read Mode",args:[{tips:"metaKey",name:"metaKey",type:"boolean",value:!1,defaultValue:!1}]},{value:i.KILL_ELEMENT,label:"Kill Element",args:[{tips:"metaKey",name:"metaKey",type:"boolean",value:!1,defaultValue:!1}]},{value:i.HIGHLIGHT_ENGLISH_SYNTAX,label:"English Syntax highlighting"},{value:i.HASH_ELEMENT,label:"Add anchor for elements"},{value:i.TIME_UPDATE,label:"Add time tag for video"},{value:i.DOWNLOAD,label:"Download element",args:[{tips:"auto close the new tab opened by automation",name:"autoclose",type:"boolean",value:!1,defaultValue:!1}]},{value:i.FULL_SCREEN,label:"FullScreen element"},{value:i.CODE_COPY,label:"Code copy",args:[{tips:"child of <pre> tag",name:"inpre",type:"boolean",value:!1,defaultValue:!1},{tips:"<pre> tag",name:"pre",type:"boolean",value:!1,defaultValue:!1},{tips:"Remove some elements",name:"rm",type:"string",value:"",defaultValue:"",placeholder:"css selector"},{tips:"Position of btn",name:"pos",type:"string",value:"tl",defaultValue:"tl",placeholder:"tl|tr"}]},{value:i.CLICK,label:"Click"},{value:i.GOTO_ELEMENT,label:"Goto element",args:[{tips:"Auto Goto",name:"auto",type:"boolean",value:!1,defaultValue:!1},{tips:"Target",name:"to",type:"string",value:"",defaultValue:"",placeholder:"css selector"},{tips:"Order",name:"order",type:"string",value:"asc",defaultValue:"asc",placeholder:"desc/asc"},{tips:"Handle, The available functions are: {text|trim|number|siblingText}",name:"handle",type:"string",value:"",defaultValue:"",placeholder:"[.selector,fn]"}]}],s=[{value:"",label:"All"}].concat(a)},"498a":function(e,t,n){"use strict";var r=n("23e7"),i=n("58a8").trim,a=n("c8d2");r({target:"String",proto:!0,forced:a("trim")},{trim:function(){return i(this)}})},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var r=n("1d80"),i=n("5899"),a="["+i+"]",s=RegExp("^"+a+a+"*"),l=RegExp(a+a+"*$"),o=function(e){return function(t){var n=String(r(t));return 1&e&&(n=n.replace(s,"")),2&e&&(n=n.replace(l,"")),n}};e.exports={start:o(1),end:o(2),trim:o(3)}},"7db0":function(e,t,n){"use strict";var r=n("23e7"),i=n("b727").find,a=n("44d2"),s=n("ae40"),l="find",o=!0,c=s(l);l in[]&&Array(1)[l]((function(){o=!1})),r({target:"Array",proto:!0,forced:o||!c},{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a(l)},"7eda":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n("498a");var r=n("0e54"),i=n.n(r);function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e.trim();return t?i()(t):""}},"99af":function(e,t,n){"use strict";var r=n("23e7"),i=n("d039"),a=n("e8b5"),s=n("861d"),l=n("7b0b"),o=n("50c4"),c=n("8418"),u=n("65f0"),h=n("1dde"),p=n("b622"),f=n("2d00"),g=p("isConcatSpreadable"),d=9007199254740991,k="Maximum allowed index exceeded",b=f>=51||!i((function(){var e=[];return e[g]=!1,e.concat()[0]!==e})),m=h("concat"),v=function(e){if(!s(e))return!1;var t=e[g];return void 0!==t?!!t:a(e)},x=!b||!m;r({target:"Array",proto:!0,forced:x},{concat:function(e){var t,n,r,i,a,s=l(this),h=u(s,0),p=0;for(t=-1,r=arguments.length;t<r;t++)if(a=-1===t?s:arguments[t],v(a)){if(i=o(a.length),p+i>d)throw TypeError(k);for(n=0;n<i;n++,p++)n in a&&c(h,p,a[n])}else{if(p>=d)throw TypeError(k);c(h,p++,a)}return h.length=p,h}})},b0c0:function(e,t,n){var r=n("83ab"),i=n("9bf2").f,a=Function.prototype,s=a.toString,l=/^\s*function ([^ (]*)/,o="name";r&&!(o in a)&&i(a,o,{configurable:!0,get:function(){try{return s.call(this).match(l)[1]}catch(e){return""}}})},b1c8:function(e,t,n){"use strict";n.d(t,"b",(function(){return h})),n.d(t,"c",(function(){return d})),n.d(t,"a",(function(){return m}));n("7db0"),n("b0c0"),n("d3b7");var r=n("c72e"),i=n.n(r),a=i.a.Object.extend("Installations"),s={item:l,create:o};function l(){}function o(e){var t=new a;return t.save().then((function(){return e.set("installations",t),e.save()}))}function c(e){var t=new i.a.ACL;t.setPublicReadAccess(!0),t.setWriteAccess(i.a.User.current(),!0),e.setACL(t)}var u=i.a.Object.extend("Automation"),h={list:p,listOfAuthor:f,item:g};function p(e,t){var n=new i.a.Query("Automation");return e&&n.equalTo("type",e),t&&n.contains("name",t),n.include("author"),n.include("installations"),n.find()}function f(e){var t=new i.a.Query("Automation");return t.equalTo("author",i.a.Object.createWithoutData("User",e)),t.include("author"),t.include("installations"),t.find()}function g(e){var t=new i.a.Query("Automation");return t.include("author"),t.include("installations"),t.get(e)}function d(e){var t=i.a.Object.createWithoutData("Installations",e);return t.increment("count",1),t.save(null,{fetchWhenSave:!0})}function k(e,t){var n=new i.a.Query("Automation");return n.equalTo("instructions",e),n.equalTo("pattern",t),n.first().then((function(e){return Boolean(e)}))}function b(e){var t=e.instructions,n=e.pattern,r=e.name,a=e.intro,l=e.type,o=e.video,h=new u;return h.set("instructions",t),h.set("pattern",n),h.set("name",r),h.set("intro",a),h.set("video",o),h.set("type",l),h.set("author",i.a.User.current()),c(h),h.save().then((function(e){return s.create(e)}))}function m(e){var t=e.instructions,n=e.pattern;return k(t,n).then((function(t){return t?Promise.reject("Automation has existed"):b(e)}))}},c8d2:function(e,t,n){var r=n("d039"),i=n("5899"),a="​᠎";e.exports=function(e){return r((function(){return!!i[e]()||a[e]()!=a||i[e].name!==e}))}}}]);
//# sourceMappingURL=automation~create.489ba5bc.js.map