(function(){/*
 MIT License (c) copyright B Cavalier & J Hann */
var h=!0,k=!1,l=this.window||global;function m(){}function p(a,b){return 0==ba.call(a).indexOf("[object "+b)}function q(a){return a&&"/"==a.charAt(a.length-1)?a.substr(0,a.length-1):a}function r(a,b){var c,e,d;e=1;a=a.replace(ca,function(a,b,c,j){c&&e++;d=h;return j||""});return d?(c=b.split("/"),c.splice(c.length-e,e),c.concat(a||[]).join("/")):a}function t(a){var b=a.indexOf("!");return{I:a.substr(b+1),j:0<=b&&a.substr(0,b)}}function u(){}
function v(a,b){u.prototype=a||w;var c=new u;u.prototype=w;for(var e in b)c[e]=b[e];return c}function y(){function a(a,b,d){e.push([a,b,d])}function b(a,b){for(var d,c=0;d=e[c++];)(d=d[a])&&d(b)}var c,e,d;c=this;e=[];d=function(c,f){a=c?function(a){a&&a(f)}:function(a,b){b&&b(f)};d=m;b(c?0:1,f);b=m;e=z};this.X=function(b,d,c){a(b,d,c)};this.h=function(a){c.ca=a;d(h,a)};this.e=function(a){c.ba=a;d(k,a)};this.p=function(a){b(2,a)}}function A(a,b,c,e){a instanceof y?a.X(b,c,e):b(a)}
function B(a,b,c){var e;return function(){0<=--a&&b&&(e=b.apply(z,arguments));0==a&&c&&c(e);return e}}function C(){function a(b,d,c){var f;f=E.c(F,z,[].concat(b));this.then=b=function(a,b){A(f,function(b){a&&a.apply(z,b)},function(a){if(b)b(a);else throw a;});return this};this.next=function(b,d){return new a(b,d,f)};d&&b(d);A(c,function(){E.i(f)})}var b=[].slice.call(arguments),c;p(b[0],"Object")&&(c=b.shift(),F=E.b(c,F),E.s(c));return new a(b[0],b[1])}
function G(a){var b=a.id;if(b==z)if(H!==z)H={z:"Multiple anonymous defines in url"};else if(!(b=E.S()))H=a;if(b!=z){var c=I[b];b in I||(c=E.l(b,F).b,c=I[b]=E.u(c,b));if(!(c instanceof y))throw Error("duplicate define: "+b);c.Z=k;E.v(c,a)}}
var F=l.curl,J,L,M=l.document,N=M&&(M.head||M.getElementsByTagName("head")[0]),da=N&&N.getElementsByTagName("base")[0]||null,O={},P={},Q={},ea="addEventListener"in l?{}:{loaded:1,complete:1},w={},ba=w.toString,z,I={},R=k,H,fa=/\?/,S=/^\/|^[^:]+:\/\//,ca=/(\.)(\.?)(?:$|\/([^\.\/]+.*)?)/g,ga=/\/\*[\s\S]*?\*\/|(?:[^\\])\/\/.*?[\n\r]/g,ha=/require\s*\(\s*["']([^"']+)["']\s*\)|(?:[^\\]?)(["'])/g,T,E;
E={c:function(a,b,c,e){function d(a){return r(a,f.f)}function g(b,c){var g,n,K,aa;g=c&&function(a){c.apply(z,a)};if(p(b,"String")){n=d(b);K=I[n];aa=K instanceof y&&K.a;if(!(n in I))throw Error("Module not resolved: "+n);if(g)throw Error("require(id, callback) not allowed");return aa||K}A(E.i(E.c(a,f.f,b,e)),g)}var f;f=new y;f.f=f.id=b||"";f.T=e;f.w=c;f.k=g;g.toUrl=function(b){return E.l(d(b),a).url};f.Y=d;return f},u:function(a,b,c,e){var d,g,f;d=E.c(a,b,z,c);d.f=e==z?b:e;g=d.h;f=B(1,function(a){d.n=
a;try{return E.L(d)}catch(b){d.e(b)}});d.h=function(a){A(c||R,function(){g(I[d.id]=f(a))})};d.A=function(a){A(c||R,function(){d.a&&(f(a),d.p(P))})};return d},K:function(a,b,c,e){a=E.c(a,b,z,c);a.f=e;return a},R:function(a){return a.k},B:function(a){return a.a||(a.a={})},Q:function(a){var b=a.o;b||(b=a.o={id:a.id,uri:E.C(a),exports:E.B(a)},b.a=b.exports);return b},C:function(a){return a.url||(a.url=E.t(a.k.toUrl(a.id)))},b:function(a){var b,c,e;(b=a)||(a={});c=a.apiName||"curl";e=a.apiContext||l;if(e!=
l||"curl"!=c?e[c]:J&&b)throw Error(c+" already exists");e[c]=C;J&&b&&(l.curl=J);c=a.defineName||"define";e=a.defineContext||l;if(e!=l||"define"!=c?e[c]:L&&b)throw Error(c+" already exists");e[c]=c=function(){var a=E.P(arguments);G(a)};L&&b&&(l.define=L);c.amd={plugins:h,jQuery:h,curl:"0.6.8"};b&&(E.b=E.F);return E.F(a)},F:function(a,b){function c(a,b){var c,e,f,i,D;for(D in a){f=a[D];f.name=f.id||f.name||D;i=d;e=t(q(f.name||D));c=e.I;if(e=e.j)i=g[e],i||(i=g[e]=v(d),i.g=v(d.g),i.d=[]),delete a[D];
if(b){e=f;var x=void 0;e.path=q(e.path||e.location||"");x=q(e.main)||"main";"."!=x.charAt(0)&&(x="./"+x);e.D=r(x,e.name+"/");e.V=r(x,e.path+"/");e.b=e.config}else e={path:q(f)};e.J=c.split("/").length;c?(i.g[c]=e,i.d.push(c)):i.r=E.H(f,d)}}function e(a){var b=a.g;a.W=RegExp("^("+a.d.sort(function(a,c){return b[a].J<b[c].J}).join("|").replace(/\/|\./g,"\\$&")+")(?=\\/|$)");delete a.d}var d,g;b||(b={});d=v(b,a);d.r=d.baseUrl||"";d.G=d.pluginPath||"curl/plugin";d.g=v(b.g);g=d.plugins=v(b.plugins,a.plugins);
d.d=[];c(a.paths,k);c(a.packages,h);for(var f in g){var i=g[f].d;i&&(g[f].d=i.concat(d.d),e(g[f]))}e(d);return d},s:function(a){var b;(b=a&&a.preloads)&&0<b.length&&A(R,function(){R=E.i(E.c(F,z,b,h))})},l:function(a,b,c){var e,d,g,f;e=b.g;c&&(b.G&&0>a.indexOf("/")&&!(a in e))&&(g=a=q(b.G)+"/"+a);c=S.test(a)?a:a.replace(b.W,function(b){d=e[b]||{};f=d.b;return d.D&&b==a?(g=d.D,d.V):d.path||""});return{f:g||a,b:f||F,url:E.H(c,b)}},H:function(a,b){var c=b.r;return c&&!S.test(a)?q(c)+"/"+a:a},t:function(a){return a+
(fa.test(a)?"":".js")},U:function(a,b,c){var e=M.createElement("script");e.onload=e.onreadystatechange=function(c){c=c||l.event;if("load"==c.type||ea[e.readyState])delete Q[a.id],e.onload=e.onreadystatechange=e.onerror="",b()};e.onerror=function(){c(Error("Syntax or http error: "+a.url))};e.type=a.$||"text/javascript";e.charset="utf-8";e.async=!a.aa;e.src=a.url;Q[a.id]=e;N.insertBefore(e,da);return e},M:function(a){var b=[],c;("string"==typeof a?a:a.toSource?a.toSource():a.toString()).replace(ga,
"").replace(ha,function(a,d,g){g?c=c==g?z:c:c||b.push(d);return""});return b},P:function(a){var b,c,e,d,g,f;g=a.length;e=a[g-1];d=p(e,"Function")?e.length:-1;2==g?p(a[0],"Array")?c=a[0]:b=a[0]:3==g&&(b=a[0],c=a[1]);!c&&0<d&&(f=h,c=["require","exports","module"].slice(0,d).concat(E.M(e)));return{id:b,n:c||[],q:0<=d?e:function(){return e},m:f}},L:function(a){var b;b=a.q.apply(a.m?a.a:z,a.n);b===z&&a.a&&(b=a.o?a.a=a.o.a:a.a);return b},v:function(a,b){a.q=b.q;a.m=b.m;a.w=b.n;E.i(a)},i:function(a){function b(a,
b,c){f[b]=a;c&&s(a,b)}function c(b,c){var e,d,f,g;e=B(1,function(a){d(a);n(a,c)});d=B(1,function(a){s(a,c)});f=E.N(b,a);(g=f instanceof y&&f.a)&&d(g);A(f,e,a.e,a.a&&function(a){f.a&&(a==O?d(f.a):a==P&&e(f.a))})}function e(){a.h(f)}var d,g,f,i,j,s,n;f=[];g=a.w;i=g.length;0==g.length&&e();s=B(i,b,function(){a.A&&a.A(f)});n=B(i,b,e);for(d=0;d<i;d++)j=g[d],j in T?(n(T[j](a),d,h),a.a&&a.p(O)):j?c(j,d):n(z,d,h);return a},O:function(a){E.C(a);E.U(a,function(){var b=H;H=z;a.Z!==k&&(!b||b.z?a.e(Error(b&&b.z||
"define() missing or duplicated: "+a.url)):E.v(a,b))},a.e);return a},N:function(a,b){var c,e,d,g,f,i,j,s,n;c=b.Y;e=b.T;d=t(a);i=d.I;g=c(d.j||i);j=E.l(g,F,!!d.j);if(d.j)f=g;else if(f=j.b.moduleLoader)i=g,g=f,j=E.l(f,F);d=I[g];g in I||(d=I[g]=E.u(j.b,g,e,j.f),d.url=E.t(j.url),E.O(d));g==f&&(s=new y,n=F.plugins[f]||F,A(d,function(a){var b,d,g;g=a.dynamic;i="normalize"in a?a.normalize(i,c,n)||"":c(i);d=f+"!"+i;b=I[d];if(!(d in I)){b=E.K(n,d,e,i);g||(I[d]=b);var j=function(a){b.h(a);g||(I[d]=a)};j.resolve=
j;j.reject=b.e;a.load(i,b.k,j,n)}s!=b&&A(b,s.h,s.e,s.p)},s.e));return s||d},S:function(){var a;if(!p(l.opera,"Opera"))for(var b in Q)if("interactive"==Q[b].readyState){a=b;break}return a}};T={require:E.R,exports:E.B,module:E.Q};C.version="0.6.8";"function"==typeof define&&(L=define);"function"==typeof F&&(J=F,F=k);F=E.b(F);E.s(F);I.curl=C;I["curl/_privileged"]={core:E,cache:I,cfg:F,_define:G,_curl:C,Promise:y};var U=this.document;
function ia(){if(!U.body)return k;V||(V=U.createTextNode(""));try{return U.body.removeChild(U.body.appendChild(V)),V=ja,h}catch(a){return k}}function W(){var a;a=ka[U[X]]&&ia();if(!Y&&a){Y=h;for(clearTimeout(Z);la=ma.pop();)la();na&&(U[X]="complete");for(var b;b=oa.shift();)b()}return a}function pa(){W();Y||(Z=setTimeout(pa,qa))}var X="readyState",ka={loaded:1,interactive:1,complete:1},oa=[],na=U&&"string"!=typeof U[X],Y=k,qa=10,$,la,ma=[],Z,ja,V;
$="addEventListener"in this?function(a,b){a.addEventListener(b,W,k);return function(){a.removeEventListener(b,W,k)}}:function(a,b){a.attachEvent("on"+b,W);return function(){a.detachEvent(b,W)}};U&&!W()&&(ma=[$(this,"load"),$(U,"readystatechange"),$(this,"DOMContentLoaded")],Z=setTimeout(pa,qa));define("curl/domReady",function(){function a(a){Y?a():oa.push(a)}a.then=a;a.amd=h;return a});var ra;
define("curl/shim/dojo16",["curl/_privileged","curl/domReady"],function(a,b){function c(a){a.ready||(a.ready=function(a){b(a)});a.nameToUrl||(a.nameToUrl=function(b,c){return a.toUrl(b+(c||""))});a.cache||(a.cache={})}var e=a._curl,d=a.core.c;c(e);"undefined"==typeof ra&&(ra=e);a.core.c=function(){var a=d.apply(this,arguments);c(a.k);return a};return h});define("domReady",["curl/domReady"],function(a){return{load:function(b,c,e){a(e)}}});
}());
