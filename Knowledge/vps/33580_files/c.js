var BaiduCproNamespace=BaiduCproNamespace||{};BaiduCproNamespace.Tangram=BaiduCproNamespace.Tangram||{};BaiduCproNamespace.Utility=BaiduCproNamespace.Utility||{};BaiduCproNamespace.BusinessLogic=BaiduCproNamespace.BusinessLogic||{};BaiduCproNamespace.needInitTop=false;try{if(window!=window.parent){window.top.location.toString();BaiduCproNamespace.needInitTop=true}}catch(ex){BaiduCproNamespace.needInitTop=false}if(BaiduCproNamespace.needInitTop){window.top.BaiduCproNamespace=window.top.BaiduCproNamespace||{};window.top.BaiduCproNamespace.Tangram=window.top.BaiduCproNamespace.Tangram||{};window.top.BaiduCproNamespace.Utility=window.top.BaiduCproNamespace.Utility||{};window.top.BaiduCproNamespace.BusinessLogic=window.top.BaiduCproNamespace.BusinessLogic||{}}var BaiduCproInitTangram=function(c){var b=c.Tangram;b.version="1.3.4";var a=b;b.guid="$BAIDU$";window[b.guid]=window[b.guid]||{};b.url=b.url||{};b.string=b.string||{};b.string.escapeReg=function(e){return String(e).replace(new RegExp("([.*+?^=!:\x24{}()|[\\]/\\\\])","g"),"\\\x241")};b.url.getQueryValue=function(f,g){var h=new RegExp("(^|&|\\?|#)"+b.string.escapeReg(g)+"=([^&]*)(&|\x24)","");var e=f.match(h);if(e){return e[2]}return null};b.object=b.object||{};b.extend=b.object.extend=function(g,e){for(var f in e){if(e.hasOwnProperty(f)){g[f]=e[f]}}return g};b.page=b.page||{};b.page.getViewWidth=function(g){g=g||window;var f=g.document,e=f.compatMode=="BackCompat"?f.body:f.documentElement;return e.clientWidth};b.page.getScrollTop=function(e){e=e||window;var f=e.document;return window.pageYOffset||f.documentElement.scrollTop||f.body.scrollTop};b.page.getViewHeight=function(g){g=g||window;var f=g.document,e=f.compatMode=="BackCompat"?f.body:f.documentElement;return e.clientHeight};b.page.getScrollLeft=function(e){e=e||window;var f=e.document;return window.pageXOffset||f.documentElement.scrollLeft||f.body.scrollLeft};b.dom=b.dom||{};b.dom.g=function(e){if("string"==typeof e||e instanceof String){return document.getElementById(e)}else{if(e&&e.nodeName&&(e.nodeType==1||e.nodeType==9)){return e}}return null};b.g=b.G=b.dom.g;b.dom._styleFixer=b.dom._styleFixer||{};b.dom._styleFilter=b.dom._styleFilter||[];b.dom._styleFilter.filter=function(f,j,k){for(var e=0,h=b.dom._styleFilter,g;g=h[e];e++){if(g=g[k]){j=g(f,j)}}return j};b.string.toCamelCase=function(e){if(e.indexOf("-")<0&&e.indexOf("_")<0){return e}return e.replace(/[-_][^-_]/g,function(f){return f.charAt(1).toUpperCase()})};b.browser=b.browser||{};if(/msie (\d+\.\d)/i.test(navigator.userAgent)){b.browser.ie=b.ie=document.documentMode||+RegExp["\x241"]}b.dom.getStyle=function(g,f){var j=b.dom;g=j.g(g);f=b.string.toCamelCase(f);var i=g.style[f];if(!i){var e=j._styleFixer[f],h=g.currentStyle||(b.browser.ie?g.style:getComputedStyle(g,null));i=e&&e.get?e.get(g,h):h[e||f]}if(e=j._styleFilter){i=e.filter(f,i,"get")}return i};b.getStyle=b.dom.getStyle;b.dom.getDocument=function(e){e=b.dom.g(e);return e.nodeType==9?e:e.ownerDocument||e.document};b.dom.getWindow=function(e){e=b.dom.g(e);var f=b.dom.getDocument(e);return f.parentWindow||f.defaultView||null};if(/opera\/(\d+\.\d)/i.test(navigator.userAgent)){b.browser.opera=+RegExp["\x241"]}b.browser.isWebkit=/webkit/i.test(navigator.userAgent);b.browser.isGecko=/gecko/i.test(navigator.userAgent)&&!/like gecko/i.test(navigator.userAgent);b.browser.isStrict=document.compatMode=="CSS1Compat";b.dom.getPosition=function(e){e=b.dom.g(e);var n=b.dom.getDocument(e),h=b.browser,k=b.dom.getStyle,g=h.isGecko>0&&n.getBoxObjectFor&&k(e,"position")=="absolute"&&(e.style.top===""||e.style.left===""),l={left:0,top:0},j=(h.ie&&!h.isStrict)?n.body:n.documentElement,o,f;if(e==j){return l}if(e.getBoundingClientRect){f=e.getBoundingClientRect();l.left=Math.floor(f.left)+Math.max(n.documentElement.scrollLeft,n.body.scrollLeft);l.top=Math.floor(f.top)+Math.max(n.documentElement.scrollTop,n.body.scrollTop);l.left-=n.documentElement.clientLeft;l.top-=n.documentElement.clientTop;var m=n.body,p=parseInt(k(m,"borderLeftWidth")),i=parseInt(k(m,"borderTopWidth"));if(h.ie&&!h.isStrict){l.left-=isNaN(p)?2:p;l.top-=isNaN(i)?2:i}}else{o=e;do{l.left+=o.offsetLeft;l.top+=o.offsetTop;if(h.isWebkit>0&&k(o,"position")=="fixed"){l.left+=n.body.scrollLeft;l.top+=n.body.scrollTop;break}o=o.offsetParent}while(o&&o!=e);if(h.opera>0||(h.isWebkit>0&&k(e,"position")=="absolute")){l.top-=n.body.offsetTop}o=e.offsetParent;while(o&&o!=n.body){l.left-=o.scrollLeft;if(!h.opera||o.tagName!="TR"){l.top-=o.scrollTop}o=o.offsetParent}}return l};b.cookie=b.cookie||{};b.cookie._isValidKey=function(e){return(new RegExp('^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+\x24')).test(e)};b.cookie.setRaw=function(g,h,f){if(!b.cookie._isValidKey(g)){return}f=f||{};var e=f.expires;if("number"==typeof f.expires){e=new Date();e.setTime(e.getTime()+f.expires)}document.cookie=g+"="+h+(f.path?"; path="+f.path:"")+(e?"; expires="+e.toGMTString():"")+(f.domain?"; domain="+f.domain:"")+(f.secure?"; secure":"")};b.cookie.getRaw=function(f){if(b.cookie._isValidKey(f)){var g=new RegExp("(^| )"+f+"=([^;]*)(;|\x24)"),e=g.exec(document.cookie);if(e){return e[2]||null}}return null};b.cookie.get=function(e){var f=b.cookie.getRaw(e);if("string"==typeof f){f=decodeURIComponent(f);return f}return null};b.cookie.set=function(f,g,e){b.cookie.setRaw(f,encodeURIComponent(g),e)};b.cookie.remove=function(f,e){e=e||{};e.expires=new Date(0);b.cookie.setRaw(f,"",e)};if(/firefox\/(\d+\.\d)/i.test(navigator.userAgent)){b.browser.firefox=+RegExp["\x241"]}(function(){var e=navigator.userAgent;if(/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(e)&&!/chrome/i.test(e)){b.browser.safari=+(RegExp["\x241"]||RegExp["\x242"])}})();if(/chrome\/(\d+\.\d)/i.test(navigator.userAgent)){b.browser.chrome=+RegExp["\x241"]}try{if(/(\d+\.\d)/.test(external.max_version)){b.browser.maxthon=+RegExp["\x241"]}}catch(d){}b.json=b.json||{};b.json.stringify=(function(){var f={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};function e(j){if(/["\\\x00-\x1f]/.test(j)){j=j.replace(/["\\\x00-\x1f]/g,function(k){var l=f[k];if(l){return l}l=k.charCodeAt();return"\\u00"+Math.floor(l/16).toString(16)+(l%16).toString(16)})}return'"'+j+'"'}function h(p){var k=["["],m=p.length,j,n,o;for(n=0;n<m;n++){o=p[n];switch(typeof o){case"undefined":case"function":case"unknown":break;default:if(j){k.push(",")}k.push(b.json.stringify(o));j=1}}k.push("]");return k.join("")}function g(j){return j<10?"0"+j:j}function i(j){return'"'+j.getFullYear()+"-"+g(j.getMonth()+1)+"-"+g(j.getDate())+"T"+g(j.getHours())+":"+g(j.getMinutes())+":"+g(j.getSeconds())+'"'}return function(o){switch(typeof o){case"undefined":return"undefined";case"number":return isFinite(o)?String(o):"null";case"string":return e(o);case"boolean":return String(o);default:if(o===null){return"null"}else{if(o instanceof Array){return h(o)}else{if(o instanceof Date){return i(o)}else{var k=["{"],n=b.json.stringify,j,m;for(var l in o){if(Object.prototype.hasOwnProperty.call(o,l)){m=o[l];switch(typeof m){case"undefined":case"unknown":case"function":break;default:if(j){k.push(",")}j=1;k.push(n(l)+":"+n(m))}}}k.push("}");return k.join("")}}}}}})();b.json.parse=function(e){return(new Function("return "+e))()};b.json.decode=b.json.parse;b.eventBD=b.eventBD||{};b.eventBD._listeners=b.eventBD._listeners||[];b.lang=b.lang||{};b.lang.isString=function(e){return"[object String]"==Object.prototype.toString.call(e)};b.isString=b.lang.isString;b.dom._g=function(e){if(b.lang.isString(e)){return document.getElementById(e)}return e};b._g=b.dom._g;b.eventBD.on=function(f,i,k){i=i.replace(/^on/i,"");f=b.dom._g(f);var j=function(m){k.call(f,m)},e=b.eventBD._listeners,h=b.eventBD._eventFilter,l,g=i;i=i.toLowerCase();if(h&&h[i]){l=h[i](f,i,j);g=l.type;j=l.listener}if(f.addEventListener){f.addEventListener(g,j,false)}else{if(f.attachEvent){f.attachEvent("on"+g,j)}}e[e.length]=[f,i,k,j,g];return f};b.on=b.eventBD.on;b.sio=b.sio||{};b.sio._removeScriptTag=function(f){if(f.clearAttributes){f.clearAttributes()}else{for(var e in f){if(f.hasOwnProperty(e)){delete f[e]}}}if(f&&f.parentNode){f.parentNode.removeChild(f)}f=null};b.sio.callByBrowser=function(e,j,l,g){g=g||window;var h=g.document.createElement("SCRIPT"),i=0,m=l||{},f=m.charset,k=j||function(){};h.onload=h.onreadystatechange=function(){if(i){return}var n=h.readyState;if("undefined"==typeof n||n=="loaded"||n=="complete"){i=1;try{k()}finally{b.sio._removeScriptTag(h)}}};h.setAttribute("type","text/javascript");f&&h.setAttribute("charset",f);h.setAttribute("src",e);g.document.getElementsByTagName("head")[0].appendChild(h)}};BaiduCproInitTangram(BaiduCproNamespace);if(BaiduCproNamespace.needInitTop){BaiduCproInitTangram(window.top.BaiduCproNamespace)}BaiduCproInitTangram=null;var BaiduCproInitUtility=function(c){var b=c.Tangram;var a=c.Utility;b.object.extend(Function.prototype,{proxy:function(d){var e=this;return function(){e.apply(d||{},arguments)}}});a.noop=function(){};a.create=function(f,h){var e=Array.prototype.slice.call(arguments,0);e.shift();var g=function(i){this.initialize.apply(this,i);this.initializeDOM.apply(this,i);this.initializeEvent.apply(this,i);this.pageLoad.apply(this,i);this.dispose.apply(this,i)};f.initialize=f.initialize||a.noop;f.initializeDOM=f.initializeDOM||a.noop;f.initializeEvent=f.initializeEvent||a.noop;f.pageLoad=f.pageLoad||a.noop;f.dispose=f.dispose||a.noop;g.prototype=f;delete (g.prototype.instances);var d=new g(e);f.instances=f.instances||new Array();f.instances.push(d);return d};a.initClass=function(h,d){var j={};var e={};version=d.version||"unknown -1.0.0";var m,k,l;for(k in d){m=d[k];if(!k||!m){continue}if(typeof m==="function"){j[k]=m}else{e[k]=m}}if(h&&!h.version){h.version=version;for(k in e){m=e[k];if(k&&m){h[k]=m}}}for(k in j){m=j[k];if(k&&m){h[k]=m}}if(d.baidu){h.baidu=d.baidu}if(d.utility){h.utility=d.utility}if(d.bl){h.bl=d.bl}if(d.win){h.win=d.win}if(d.topWin){h.topWin=d.topWin}if(h.instances&&h.instances.length>0){for(var f=0,g=h.instances.length;f<g;f++){l=h.instances[f];if(!l){continue}for(k in j){m=j[k];if(k&&m){l[k]=m}}if(d.baidu){l.baidu=d.baidu}if(d.utility){l.utility=d.utility}if(d.bl){l.bl=d.bl}if(d.win){l.win=d.win}if(d.topWin){l.topWin=d.topWin}}}k=m=l=null};a.isInIframe=function(d){d=d||window;return d!=window.top&&d!=d.parent};a.isInCrossDomainIframe=function(f,d){f=f||window;d=d||window.top;while(f!=d&&f!=f.parent){try{f.parent.location.toString()}catch(e){return true}f=f.parent}return false};a.getPosition=function(h,g){var f;var g=g||window;if(h&&arguments.length===2&&(typeof h==="string")){f=g.document.getElementById(h)}else{f=h}var d=b.dom.getPosition(f);var e;while(g!=g.parent){e={top:0,left:0};if(!a.isInCrossDomainIframe(g,g.parent)&&g.frameElement){e=b.dom.getPosition(g.frameElement)}else{break}d.left+=e.left;d.top+=e.top;g=g.parent}return d};a.getOuterWidth=function(f,e){f=b.dom.g(f);e=e||false;var d=f.offsetWidth;if(e){var h=b.dom.getStyle(f,"marginLeft").toString().toLowerCase().replace("px","").replace("auto","0");var g=b.dom.getStyle(f,"marginRight").toString().toLowerCase().replace("px","").replace("auto","0");d=d+parseInt(h||0)+parseInt(g||0)}return d};a.getOuterHeight=function(f,e){f=b.dom.g(f);e=e||false;var d=f.offsetHeight;if(e){var g=b.dom.getStyle(f,"marginTop").toString().toLowerCase().replace("px","").replace("auto","0");var h=b.dom.getStyle(f,"marginBottom").toString().toLowerCase().replace("px","").replace("auto","0");d=d+parseInt(g||0)+parseInt(h||0)}return d};a.getTopIframe=function(f){var d=b.g(f);if(a.isInIframe()&&!a.isInCrossDomainIframe()){var e=self;while(e.parent!=window.top){e=e.parent}d=e.frameElement||d}return d};a.getOpacityInWin=function(l){var k=b.dom.g(l);var i=b.dom.getWindow(k);var d=100;var g=k;var j;try{while(g&&g.tagName){j=100;if(b.browser.ie){try{j=g.filters.alpha.opacity||100}catch(h){}d=d>j?j:d}else{try{j=(i.getComputedStyle(g,null).opacity||1)*100}catch(h){}d=d*(j/100)}g=g.parentNode}}catch(f){}return d||100};a.getOpacity=function(h){var g=b.dom.g(h);var f=b.dom.getWindow(g);var d=a.getOpacityInWin(g);var e=100;while(f!=window.top){if(!a.isInCrossDomainIframe(f,f.parent)){e=100;if(f.frameElement){e=a.getOpacityInWin(f.frameElement)}d=d*(e/100)}else{break}f=f.parent}return d};a.dateToString=function(e,d){var h={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours()%12==0?12:e.getHours()%12,"H+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};var g={"0":"\u65e5","1":"\u4e00","2":"\u4e8c","3":"\u4e09","4":"\u56db","5":"\u4e94","6":"\u516d"};if(/(y+)/.test(d)){d=d.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))}if(/(E+)/.test(d)){d=d.replace(RegExp.$1,((RegExp.$1.length>1)?(RegExp.$1.length>2?"\u661f\u671f":"\u5468"):"")+g[e.getDay()+""])}for(var f in h){if(new RegExp("("+f+")").test(d)){d=d.replace(RegExp.$1,(RegExp.$1.length==1)?(h[f]):(("00"+h[f]).substr((""+h[f]).length)))}}return d};a.param=function(i,j){var d=new Array(),h,g,e;for(var f in i){e=true;if(j){h=j[f]?j[f]:f;e=j[f]?true:false}if(!e){continue}var g=i[f];switch(typeof g){case"string":case"number":d.push(h+"="+g.toString());break;case"boolean":d.push(h+"="+(g?"1":"0"));break;case"object":if(g instanceof Date){d.push(h+"="+a.dateToString(g,"yyyyMMddhhmmssS"))}break;default:break}}return d.join("&")};a.getLength=function(f){var d=0;if(typeof f==="object"){if(f instanceof Array){d=f.length}else{var e;for(e in f){if(e){d++}}}}return d};a.md5=function(s){function L(k,d){return(k<<d)|(k>>>(32-d))}function K(G,k){var I,d,F,H,x;F=(G&2147483648);H=(k&2147483648);I=(G&1073741824);d=(k&1073741824);x=(G&1073741823)+(k&1073741823);if(I&d){return(x^2147483648^F^H)}if(I|d){if(x&1073741824){return(x^3221225472^F^H)}else{return(x^1073741824^F^H)}}else{return(x^F^H)}}function r(d,F,k){return(d&F)|((~d)&k)}function q(d,F,k){return(d&k)|(F&(~k))}function p(d,F,k){return(d^F^k)}function n(d,F,k){return(F^(d|(~k)))}function u(G,F,aa,Z,k,H,I){G=K(G,K(K(r(F,aa,Z),k),I));return K(L(G,H),F)}function f(G,F,aa,Z,k,H,I){G=K(G,K(K(q(F,aa,Z),k),I));return K(L(G,H),F)}function D(G,F,aa,Z,k,H,I){G=K(G,K(K(p(F,aa,Z),k),I));return K(L(G,H),F)}function t(G,F,aa,Z,k,H,I){G=K(G,K(K(n(F,aa,Z),k),I));return K(L(G,H),F)}function e(G){var Z;var F=G.length;var x=F+8;var k=(x-(x%64))/64;var I=(k+1)*16;var aa=Array(I-1);var d=0;var H=0;while(H<F){Z=(H-(H%4))/4;d=(H%4)*8;aa[Z]=(aa[Z]|(G.charCodeAt(H)<<d));H++}Z=(H-(H%4))/4;d=(H%4)*8;aa[Z]=aa[Z]|(128<<d);aa[I-2]=F<<3;aa[I-1]=F>>>29;return aa}function B(x){var k="",F="",G,d;for(d=0;d<=3;d++){G=(x>>>(d*8))&255;F="0"+G.toString(16);k=k+F.substr(F.length-2,2)}return k}function J(k){k=k.replace(/\r\n/g,"\n");var d="";for(var F=0;F<k.length;F++){var x=k.charCodeAt(F);if(x<128){d+=String.fromCharCode(x)}else{if((x>127)&&(x<2048)){d+=String.fromCharCode((x>>6)|192);d+=String.fromCharCode((x&63)|128)}else{d+=String.fromCharCode((x>>12)|224);d+=String.fromCharCode(((x>>6)&63)|128);d+=String.fromCharCode((x&63)|128)}}}return d}var C=Array();var P,h,E,v,g,Y,X,W,V;var S=7,Q=12,N=17,M=22;var A=5,z=9,y=14,w=20;var o=4,m=11,l=16,j=23;var U=6,T=10,R=15,O=21;s=J(s);C=e(s);Y=1732584193;X=4023233417;W=2562383102;V=271733878;for(P=0;P<C.length;P+=16){h=Y;E=X;v=W;g=V;Y=u(Y,X,W,V,C[P+0],S,3614090360);V=u(V,Y,X,W,C[P+1],Q,3905402710);W=u(W,V,Y,X,C[P+2],N,606105819);X=u(X,W,V,Y,C[P+3],M,3250441966);Y=u(Y,X,W,V,C[P+4],S,4118548399);V=u(V,Y,X,W,C[P+5],Q,1200080426);W=u(W,V,Y,X,C[P+6],N,2821735955);X=u(X,W,V,Y,C[P+7],M,4249261313);Y=u(Y,X,W,V,C[P+8],S,1770035416);V=u(V,Y,X,W,C[P+9],Q,2336552879);W=u(W,V,Y,X,C[P+10],N,4294925233);X=u(X,W,V,Y,C[P+11],M,2304563134);Y=u(Y,X,W,V,C[P+12],S,1804603682);V=u(V,Y,X,W,C[P+13],Q,4254626195);W=u(W,V,Y,X,C[P+14],N,2792965006);X=u(X,W,V,Y,C[P+15],M,1236535329);Y=f(Y,X,W,V,C[P+1],A,4129170786);V=f(V,Y,X,W,C[P+6],z,3225465664);W=f(W,V,Y,X,C[P+11],y,643717713);X=f(X,W,V,Y,C[P+0],w,3921069994);Y=f(Y,X,W,V,C[P+5],A,3593408605);V=f(V,Y,X,W,C[P+10],z,38016083);W=f(W,V,Y,X,C[P+15],y,3634488961);X=f(X,W,V,Y,C[P+4],w,3889429448);Y=f(Y,X,W,V,C[P+9],A,568446438);V=f(V,Y,X,W,C[P+14],z,3275163606);W=f(W,V,Y,X,C[P+3],y,4107603335);X=f(X,W,V,Y,C[P+8],w,1163531501);Y=f(Y,X,W,V,C[P+13],A,2850285829);V=f(V,Y,X,W,C[P+2],z,4243563512);W=f(W,V,Y,X,C[P+7],y,1735328473);X=f(X,W,V,Y,C[P+12],w,2368359562);Y=D(Y,X,W,V,C[P+5],o,4294588738);V=D(V,Y,X,W,C[P+8],m,2272392833);W=D(W,V,Y,X,C[P+11],l,1839030562);X=D(X,W,V,Y,C[P+14],j,4259657740);Y=D(Y,X,W,V,C[P+1],o,2763975236);V=D(V,Y,X,W,C[P+4],m,1272893353);W=D(W,V,Y,X,C[P+7],l,4139469664);X=D(X,W,V,Y,C[P+10],j,3200236656);Y=D(Y,X,W,V,C[P+13],o,681279174);V=D(V,Y,X,W,C[P+0],m,3936430074);W=D(W,V,Y,X,C[P+3],l,3572445317);X=D(X,W,V,Y,C[P+6],j,76029189);Y=D(Y,X,W,V,C[P+9],o,3654602809);V=D(V,Y,X,W,C[P+12],m,3873151461);W=D(W,V,Y,X,C[P+15],l,530742520);X=D(X,W,V,Y,C[P+2],j,3299628645);Y=t(Y,X,W,V,C[P+0],U,4096336452);V=t(V,Y,X,W,C[P+7],T,1126891415);W=t(W,V,Y,X,C[P+14],R,2878612391);X=t(X,W,V,Y,C[P+5],O,4237533241);Y=t(Y,X,W,V,C[P+12],U,1700485571);V=t(V,Y,X,W,C[P+3],T,2399980690);W=t(W,V,Y,X,C[P+10],R,4293915773);X=t(X,W,V,Y,C[P+1],O,2240044497);Y=t(Y,X,W,V,C[P+8],U,1873313359);V=t(V,Y,X,W,C[P+15],T,4264355552);W=t(W,V,Y,X,C[P+6],R,2734768916);X=t(X,W,V,Y,C[P+13],O,1309151649);Y=t(Y,X,W,V,C[P+4],U,4149444226);V=t(V,Y,X,W,C[P+11],T,3174756917);W=t(W,V,Y,X,C[P+2],R,718787259);X=t(X,W,V,Y,C[P+9],O,3951481745);Y=K(Y,h);X=K(X,E);W=K(W,v);V=K(V,g)}var i=((parseInt("0x"+B(Y),16)+parseInt("0x"+B(X),16))%4294967296).toString(16)+((parseInt("0x"+B(W),16)+parseInt("0x"+B(V),16))%4294967296).toString(16);return i.toLowerCase()};a.log=function(g,e){if(!this.logMsg){this.logMsg=document.getElementById("baiduCproLogMsg");if(!this.logMsg){return}}var d=new Array();if(typeof(g)==="object"){for(var f in g){if(f!=="analysisUrl"){d.push(f+":"+g[f])}}}else{d.push(""+g)}this.logMsg.innerHTML=e?this.logMsg.innerHTML:"";this.logMsg.innerHTML+=d.join("<br/>")+"<br/>"}};BaiduCproInitUtility(BaiduCproNamespace);if(BaiduCproNamespace.needInitTop){BaiduCproInitUtility(window.top.BaiduCproNamespace)}BaiduCproInitUtility=null;(function(c,b,a){var d={version:"BusinessLogic-1.0.1",baidu:b,utility:a,win:window,topWin:a.isInCrossDomainIframe()?window:window.top,props:{iframeArray:[],md5Array:[],iframeIdCounter:1,winFocused:true,pn:[],floatPn:[]},setParamPn:function(h,g,f){var e=true;if(!h){e=false}else{this.props.pn=this.props.pn||[];this.props.floatPn=this.props.floatPn||[];g=g||0;if(f){this.props.floatPn.push({name:h,num:g})}else{this.props.pn.push({name:h,num:g})}}return e},getParamPn:function(f){var e="";var h,m,l,k=[],j=[];var g=f?this.props.floatPn:this.props.pn;if(g&&g.length>0){for(h=0,m=g.length;h<m;h++){l=g[h];if(!l){continue}k.push(l.num||0);j.push(l.name||"")}e=k.join(":")+"|"+j.join(":")}return e},getDisplayId:function(){var e;if(this.utility.isInCrossDomainIframe()){e=window}else{e=window.top}e.displayCount=e.displayCount||{};e.displayCount["displayAdId"]=e.displayCount["displayAdId"]||0;return ++e.displayCount["displayAdId"]},getIframeId:function(e){return"cproIframe"+(e||this.props.iframeIdCounter)},getLocationUrl:function(){var e="";try{e=window.top.location.toString()}catch(f){e=location.toString()}return e},addIframeObj:function(n,o,g,f,j,k){var h,e,i,m;try{h=k.document.getElementById(n)}catch(l){}if(h){e=this.utility.getOuterWidth(h,true)||"";i=this.utility.getOuterHeight(h,true)||"";m=this.utility.getPosition(n,k)||{}}this.props.iframeArray.push({expectWidth:o.w||"",expectHeight:o.h||"",actualWidth:e||"",actualHeight:i||"",domElement:h||"",tu:g||"",did:f||"",tempalte:o.template||"",random:o.random||"",client:o.client||"",word:encodeURIComponent((this.getLocationUrl()||"")),channel:o.channel||0,win:k||window,id:n||"",jsFileName:j||"",top:m.top||"",left:m.left||"",jk:o.jk||"",isSended:false})},winFocusBlurOnChange:function(h,k){var o=false,h=h||this.win;this.props.winFocused=true;var n=function(i){this.props.winFocused=true}.proxy(this);var m=function(i){this.props.winFocused=false}.proxy(this);if(this.baidu.browser.ie||this.baidu.browser.maxthon){var e=(new Date()).getTime();var l=document.querySelectorAll?document.querySelectorAll("*"):document.getElementsByTagName("*");var j=l?l.length:0;var f=(new Date()).getTime()-e;this.props.performanceTime=f;this.props.domNum=l.length;if(k&&f<1000&&this.props.domNum<3000){for(var g=0;g<j;g++){this.baidu.eventBD.on(l[g],"focus",n);this.baidu.eventBD.on(l[g],"blur",m)}o=true}}else{this.baidu.eventBD.on(h,"focus",n);this.baidu.eventBD.on(h,"blur",m)}return o},getTopInstance:function(){if(this.utility.isInCrossDomainIframe()){return this}else{return window.top.BaiduCproNamespace.BusinessLogic}}};BaiduCproNamespace.BusinessLogic=BaiduCproNamespace.BusinessLogic||{};a.initClass(BaiduCproNamespace.BusinessLogic,d);if(BaiduCproNamespace.needInitTop){window.top.BaiduCproNamespace.BusinessLogic=window.top.BaiduCproNamespace.BusinessLogic||{};a.initClass(window.top.BaiduCproNamespace.BusinessLogic,d)}})(BaiduCproNamespace,BaiduCproNamespace.Tangram,BaiduCproNamespace.Utility);(function(c,b,d){var a={version:"Cpro.BL.ViewWatchClass-1.0.1",baidu:c,utility:b,bl:d,win:window,topWin:b.isInCrossDomainIframe()?window:window.top,props:{analysisUrl:"http://eclick.baidu.com/a.js",analysisParamNameMapper:{analysisUrl:false,expectWidth:false,expectHeight:false,actualWidth:"aw",actualHeight:"ah",domElement:false,tu:"tu",did:"did",tempalte:"tn",random:false,client:"n",word:"word",channel:"ch",analysisUrl:false,pageStayTime:"pt",pageStayTimeStamp:"ps",inViewTime:"it",inViewTimeStamp:false,currViewStatus:"vs",win:false,id:false,jsFileName:"js",performanceTime:"ft",domNum:"dn",opacity:"op",top:"top",left:"left",jk:"jk",isSended:false},isIEWatchFocus:false,watchArrayPointer:null},viewIntervalID:null,initialize:function(g,f,i,h,e){this.baidu=g||this.baidu;this.utility=f||this.utility;this.bl=i||this.bl;this.win=h;this.topWin=e;this.props.watchArrayPointer=this.bl.props.iframeArray;if(i.getTopInstance().Distribute.dispatch("viewtimeIE")){this.props.analysisUrl="http://eclick.baidu.com/b.js";this.props.isIEWatchFocus=true}},initializeDOM:function(){},initializeEvent:function(){this.baidu.eventBD.on(window.top,"load",this.windowOnLoad.proxy(this));if(this.baidu.browser.ie){this.baidu.eventBD.on(window.top,"beforeunload",this.windowOnUnload.proxy(this))}else{this.baidu.eventBD.on(window.top,"unload",this.windowOnUnload.proxy(this))}},updateViewStatus:function(f,g,e){if(f.currViewStatus){var h=new Date();f.inViewTime=f.inViewTime+parseInt(h.getTime()-f.inViewTimeStamp.getTime());f.inViewTimeStamp=h}else{if(e){var h=new Date();f.inViewTimeStamp=h}}f.currViewStatus=e;f.pageStayTime=(new Date()).getTime()-f.pageStayTimeStamp.getTime();return f},viewOnChange:function(z){try{var u,l;for(u=0,l=this.props.watchArrayPointer.length;u<l;u++){var v=this.props.watchArrayPointer[u];var f,k=v.win,n=v.id;if(k&&n){f=k.document.getElementById(n);if(!f){return}}else{return}if(!v.viewContext){v.viewContext={pageStayTime:0,pageStayTimeStamp:new Date(),inViewTime:0,inViewTimeStamp:new Date(),currViewStatus:false}}var A=false;if(!this.bl.props.winFocused){A=false}else{var r=this.baidu.page.getViewWidth(this.topWin);var h=this.baidu.page.getViewHeight(this.topWin);var y=this.utility.getPosition(n,k);var g=this.baidu.page.getScrollTop(this.topWin);var t=this.baidu.page.getScrollLeft(this.topWin);var p=this.utility.getOuterWidth(f);if(!v.actualWidth){v.actualWidth=p}var q=this.utility.getOuterHeight(f);if(!v.actualHeight){v.actualHeight=q}var m=y.top-g+q*0.35;var o=y.left-t+p*0.35;A=m>0&&m<h;A=A&&(o>0&&o<r)}this.props.watchArrayPointer[u].analysisUrl="";var w=this.props.analysisParamNameMapper;var s=this.updateViewStatus(this.props.watchArrayPointer[u].viewContext,f,A);var j=this.props.analysisUrl+"?"+this.utility.param(this.props.watchArrayPointer[u],w);j+="&"+this.utility.param(this.props.watchArrayPointer[u].viewContext,w);this.props.watchArrayPointer[u].analysisUrl=j}}catch(x){}},windowOnLoad:function(h){var f,g;for(f=0,g=this.props.watchArrayPointer.length;f<g;f++){this.props.watchArrayPointer[f].viewContext={pageStayTime:0,pageStayTimeStamp:new Date(),inViewTime:0,inViewTimeStamp:new Date(),currViewStatus:false}}this.bl.winFocusBlurOnChange(window.top,this.props.isIEWatchFocus);this.viewIntervalID=setInterval(this.viewOnChange.proxy(this),1000);this.viewOnChange()},windowOnUnload:function(o){try{this.viewOnChange();var k,j,m,r,p,f;for(k=0,m=this.props.watchArrayPointer.length;k<m;k++){r=this.props.watchArrayPointer[k];f=this.props.analysisParamNameMapper;p=r.domElement?r.domElement:r.win.document.getElementById(r.id);var l=this.utility.getOpacity(p);r.analysisUrl+="&"+this.utility.param({opacity:l},f);var g={};g.performanceTime=this.bl.getTopInstance().props.performanceTime;g.domNum=this.bl.getTopInstance().props.domNum;r.analysisUrl+="&"+this.utility.param(g,f);var r=this.props.watchArrayPointer[k];if(r&&r.analysisUrl&&!r.isSended){r.isSended=true;var s=document.createElement("img");document.getElementsByTagName("body")[0].appendChild(s);s.setAttribute("src",r.analysisUrl)}}var n=(new Date()).getTime();var h;if(this.baidu.ie){h=n+200;while(h>n){n=(new Date()).getTime()}}else{var m=1000000;for(var k=0;k<m;k++){}h=(new Date()).getTime();m=1000000*200/(h-n);m=m>100000000?100000000:m;for(var k=0;k<m;k++){}}clearInterval(this.viewIntervalID);this.baidu=null;this.utility=null;this.bl=null;this.props=null}catch(q){}},getTopInstance:function(){if(this.utility.isInCrossDomainIframe()){return null}else{if(!window.top.BaiduCproNamespace.BusinessLogic.viewWatchInstance||!window.top.BaiduCproNamespace.BusinessLogic.version){window.top.BaiduCproNamespace.BusinessLogic.viewWatchInstance=this.utility.create(this,window.top.BaiduCproNamespace.Tangram,window.top.BaiduCproNamespace.Utility,window.top.BaiduCproNamespace.BusinessLogic,window.top,window.top)}return window.top.BaiduCproNamespace.BusinessLogic.viewWatchInstance}}};BaiduCproNamespace.BusinessLogic.ViewWatch=BaiduCproNamespace.BusinessLogic.ViewWatch||{};b.initClass(BaiduCproNamespace.BusinessLogic.ViewWatch,a);if(BaiduCproNamespace.needInitTop){window.top.BaiduCproNamespace.BusinessLogic.ViewWatch=window.top.BaiduCproNamespace.BusinessLogic.ViewWatch||{};b.initClass(window.top.BaiduCproNamespace.BusinessLogic.ViewWatch,a)}})(BaiduCproNamespace.Tangram,BaiduCproNamespace.Utility,BaiduCproNamespace.BusinessLogic);(function(d,c,b,e){var a={version:"Cpro.BL.Distribute-1.0.0",baidu:c,utility:b,status:{},viewtime:100,viewtimeIE:10,dispatch:function(g){if(this.utility.isInCrossDomainIframe()){return false}if(this.status[g+"Dispatched"]){return this.status[g]}this.status[g]=false;this.status[g+"Dispatched"]=true;var f=parseInt(Math.random()*100);if(this[g]&&f<this[g]){this.status[g]=true}return this.status[g]}};BaiduCproNamespace.BusinessLogic.Distribute=BaiduCproNamespace.BusinessLogic.Distribute||{};b.initClass(BaiduCproNamespace.BusinessLogic.Distribute,a);if(d.needInitTop){window.top.BaiduCproNamespace.BusinessLogic.Distribute=window.top.BaiduCproNamespace.BusinessLogic.Distribute||{};b.initClass(window.top.BaiduCproNamespace.BusinessLogic.Distribute,a)}})(BaiduCproNamespace,BaiduCproNamespace.Tangram,BaiduCproNamespace.Utility,BaiduCproNamespace.BusinessLogic);(function(U,s,L){var Q="http://cb.baidu.com/ecom";var D="http://cpro.baidu.com/cpro/ui/uijs.php",V=3,S=window;if(self!=top){S=top}var p=L.getTopInstance();L.props.md5Array=new Array();L.props.md5Array.push(Math.random()*1000000);var P="cpro_ads_c";window[P]=window[P]||{};var l="displayCount";if(d()){S=window}S[l]=S[l]||{};function y(X){var W=window[P];X=X.split("_")[0];if(!W[X]){W[X]=0}return ++W[X]}function o(){var W=S[l];displayAdId="displayAdId";if(!W[displayAdId]){W[displayAdId]=0}return ++W[displayAdId]}var g="GloCproCpCount";window[g]=window[g]||{};function q(W){return"undefined"==typeof W}function I(){return self===top}function d(){try{top.location.toString()}catch(W){return true}return false}function r(){if(/msie (\d+\.\d)/i.test(navigator.userAgent)){return parseFloat(RegExp.$1)}return 0}function i(){var W="ShockwaveFlash.ShockwaveFlash",Z=navigator,X,aa;if(Z.plugins&&Z.mimeTypes.length){X=Z.plugins["Shockwave Flash"];if(X&&X.description){return X.description.replace(/[^\d\.]/g,"").split(".")[0]}}else{if(r()){aa=ActiveXObject;try{X=new aa(W+".7")}catch(Y){try{X=new aa(W+".6");X.AllowScriptAccess="always";return 6}catch(Y){}try{X=new aa(W)}catch(Y){}}if(X!=null){try{return X.GetVariable("$version").split(" ")[1].split(",")[0]}catch(Y){}}}}return 0}var F=false;function M(aa){if(I()){return 0}var ac=window,W=document.body,Y=document.documentElement,X=1,Z=1,ab=1;if(d()){ab+=2}if(ac.innerHeight){X=ac.innerWidth;Z=ac.innerHeight}else{if(Y&&Y.clientHeight){X=Y.clientWidth;Z=Y.clientHeight}else{if(W){X=W.clientWidth;Z=W.clientHeight}}}if(Z<10||X<40){ab+=4}else{if(Z<aa.h||X<aa.w){ab+=8}}if(Z>=2*aa.h||X>=2*aa.w){ab+=16;F=true}return ab}function E(){return(I()||F)?location.href:m()}function m(){return document.referrer}function R(W){return window.encodeURIComponent?encodeURIComponent(W):escape(W)}function u(W){if(W!=""){var Y=W.indexOf("?");if(Y!=-1){var X=W.substr(Y+1);if(X.search(/%u[\d|\w]{4}/g)!=-1){X=X.replace(/%u[\d|\w]{4}/g,function(Z){return encodeURIComponent(unescape(Z))})}return W.substr(0,Y)+"?"+X}else{return W}}else{return""}}function N(Y){var W=decodeURIComponent(Y);var X=W.replace(/\\x1e/g,"&").replace(/\\x1d/g,"=").replace(/\\x1c/,"?").replace(/\\x5c/,"\\");return U.json.decode(X)}var A;function x(ab){var ac=ab.split("|"),W=ac.length,Z={},Y,aa,X;for(Y=0;Y<W;Y++){aa=ac[Y].split("=");X=aa[0];if(X.indexOf("cpro_")===0){X=X.substr(5)}Z[X]=aa[1]}return Z}function T(ab,ac,X){var aa={},Z,W,Y;for(Z=0,W=ac.length;Z<W;Z++){Y=ac[Z];aa[Y]=(q(ab[Y])?X[Z]:ab[Y])}return aa}function b(ab,aa,W,Y,X){var Z=X?("&tu="+X):"";return'<iframe id="'+ab+'"   align="center,center" marginwidth=0  marginheight=0 scrolling=no frameborder=0  width='+aa+" height="+W+' allowtransparency src="'+Y+Z+'"></iframe>'}function J(Y,W,X){Y[Y.length]=W+"="+X}var H={tn:"template",n:"client",rsi1:"h",rsi0:"w",rad:"rad",ch:"channel",cad:"cad",aurl:"aurl",rss7:"acolor",cpa:"uap"};function e(Y,ad){var ac=window.screen,W=navigator,ae=document;K(Y,ad,H);J(Y,"fv",i());J(Y,"if",M(ad));J(Y,"word",R(E()));J(Y,"refer",R(u(m())));J(Y,"lmt",Date.parse(ae.lastModified)/1000);J(Y,"csp",ac.width+","+ac.height);J(Y,"ccd",ac.colorDepth);J(Y,"chi",history.length);J(Y,"cja",W.javaEnabled());J(Y,"cpl",W.plugins.length);J(Y,"cmi",W.mimeTypes.length);J(Y,"cce",W.cookieEnabled);J(Y,"csl",W.systemLanguage||W.language);J(Y,"rt",new Date()-A);J(Y,"dt",Math.round((new Date).getTime()/1000));J(Y,"ev",v(ad));J(Y,"jn","3");var aa=0,X=window[g],Z=ad.client,ab;if(Z){if(q(X[Z])){X[Z]={};aa++}ab=ad.channel;if(ab&&q(X[Z][ab])){X[Z][ab]=1;aa+=2}}J(Y,"cn",aa)}function K(Y,Z,W){for(var X in W){J(Y,X,R(Z[W[X]]))}}function v(ab){var W={a4:2,a3:3,a2:4,a1:7},X=0,aa=0,ac=0,ae,Z,Y,ad;for(ad in W){for(Z=W[ad];Z>=1;Z--){ae=ad.substring(1);Y=k(ab,ae,Z);if(aa){X=X<<ae}else{aa=1;ac=(Y>=8)?2147483648:0;Y%=8}X+=Y}}return X+ac}function k(aa,X,W){var Z=Math.pow(2,X),Y=aa[""+Z+W]||0;if(Y<0||Y>=Z){Y=0}return Y}function t(ad,Y,W){if(V<y(ad.template)){return}ad.w=typeof ad.w=="undefined"?125:ad.w;ad.h=typeof ad.h=="undefined"?125:ad.h;if(h(ad.w,ad.h)){window.cpro_template=ad.template;window.cpro_w=ad.w;window.cpro_h=ad.h;window.cpro_at=ad.at;document.write('<script type="text/javascript" language="javascript" src="http://wm.baidu.com/preview/preview.js"><\/script>')}else{var aa=BaiduCproNamespace.BusinessLogic.getTopInstance();var ac=aa.getIframeId();var X=aa.getDisplayId();aa.props.iframeIdCounter++;var ae=w(ad,X,W);try{L.props.md5Array.push(Math.random()*1000000);var Z=s.md5(ae+L.props.md5Array.join(""));ae+="&jk="+Z;ad.jk=Z}catch(ab){}document.write('<div style="display:none">-</div>'+b(ac,ad.w,ad.h,ae,Y));aa.addIframeObj(ac,ad,Y,X,"c",window)}}var n={rss0:"cbd",rss1:"cbg",rss2:"ctitle",rss3:"cdesc",rss4:"curl",rss5:"clink",rss6:"cflush",rsi5:"flush",ts:"ts"},j=["template","client","h","w","ads_c","rad","cbd","cbg","ctitle","cdesc","curl","clink","cflush","ts","at","channel","cad","aurl","acolor","uap","flush","161"],z=["text_default_125_125","","125","125",{},"","","","","","","","",1,"text_image_video_flash",0,1,"","",1,"",4];function w(ac,aa,Z){var Y=[],ad=window,W,ab;Z=Z||0;W=ac.flush;if(!W||W>4||W<1){ac.flush=4}var X=p.getParamPn();if(X){J(Y,"pn",X)}p.setParamPn(ac.template||"",ac["161"]||4);e(Y,ac);K(Y,ac,n);J(Y,"at",O(ac));J(Y,"did",aa);J(Y,"c01",Z);return D+"?"+Y.join("&")}function O(Z){var aa=Z.at;if(aa){var ab=aa.split("_"),X=ab.length,W=0,Y;for(Y=0;Y<X;Y++){switch(ab[Y]){case"text":W|=1;break;case"image":case"flash":W|=2;W|=4;break;case"video":W|=8;break}}return W}return""}function B(Y,W){A=new Date();var Z=x(W._html);var X=0;if(window.cproApi&&typeof window.cproApi==="object"&&(s.getLength(window.cproApi)>0)){Z=U.object.extend(Z,window.cproApi);X=1;window.cproApi=null}t(T(Z,j,z),Y,X)}var c="BAIDU_CPRO_CSETADSLOT";if(!window[c]){window[c]=function(X){var Y,Z,W;for(Y in X){Z=X[Y];if(Z&&typeof Z!="function"){W=Z}}L.props.md5Array.push(Math.random()*1000000);B(Y,W)}}function C(W,Y){var X="di="+W+"&tm=BAIDU_CPRO_SETJSONADSLOT&fn="+Y+"&baidu_id="+f("BAIDUID");return Q+"?"+X}function f(X){var Y=new RegExp("(^| )"+X+"=([^;]*)(;|$)"),W=Y.exec(document.cookie);if(W){return unescape(W[2]||"")}return""}function h(X,Y){var ac=window.location.search.slice(1),Z=document.referrer,W="bd_cpro_prev",ab="";try{var ad=document.cookie}catch(aa){return(window.location.search.indexOf("bd_cpro_prev=")!=-1)}if(ac.indexOf("bd_cpro_prev=")!==-1){ab=N(U.url.getQueryValue(ac,W))}else{if(ad.indexOf("bd_cpro_prev=")!==-1){ab=N(U.cookie.getRaw(W))}else{if(Z.indexOf("bd_cpro_prev=")!==-1){ab=N(U.url.getQueryValue(Z,W))}}}if(ab){if(ab.type!=1){return(ab.imgWidth==X&&ab.imgHeight==Y)}else{return true}}else{return false}}var a=window.cpro_id;if(/u\d+/.test(a)){document.write('<script type="text/javascript" charset="utf-8" src="'+C(a,c)+'"><\/script>')}else{B(null,{_html:a})}try{if(p.Distribute.dispatch("viewtime")){L.ViewWatch.getTopInstance()}}catch(G){}})(BaiduCproNamespace.Tangram,BaiduCproNamespace.Utility,BaiduCproNamespace.BusinessLogic);