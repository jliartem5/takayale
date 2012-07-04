// Response 0.5.1 | responsejs.com | MIT License
;this.Response=function(f,K){var da,n;function o(){return k.clientWidth}function p(){return k.clientHeight}function q(a){throw"Error using Response."+(a||"");}function B(a){return"string"===typeof a?a.split(na):L(a)?a:[]}function ea(a){return a.replace(M,"$1").replace(oa,function(a,c){return c.toUpperCase()})}function C(a){return"data-"+(a?a.replace(M,"$1").replace(pa,"$1-$2").toLowerCase():a)}function D(a){return!a?!1:1===a.nodeType?a:a[0]&&1===a[0].nodeType?a[0]:!1}function N(a,b,c){for(var d=[],
e=-1,g=a.length;e++<g;)e in a&&(d[e]=b.call(c,a[e]));return d}function l(a,b){var c,d=a.length;for(c=0;c<d;c++)c in a&&b(a[c],c,a);return a}function O(a,b,c){for(var d=[],e=a.length,b=b||"",c=c||"";e&&e--;)e in a&&(d[e]=b+a[e]+c);return d}function r(a,b,c){var d=-1,e=[],g=a.length;if(b)for(c=!!c;d++<g;)c===!b(a[d],d)&&e.push(a[d]);else for(;d++<g;)a[d]&&e.push(a[d]);return e}function fa(a){var b;return!a||"string"===typeof a?a:"true"===a?!0:"false"===a?!1:"undefined"===a?K:"null"===a?null:s(b=parseFloat(a))?
b:a}function P(a,b,c){if(a&&b){var d,e=b.length;if(!s(e)||"function"===typeof b)for(d in e=!!b.hasOwnProperty,b){if((!e||b.hasOwnProperty(d))&&(c||b[d]))a[d]=b[d]}else for(d=0;d<e;d++)if(d in b&&(c||b[d]))a[d]=b[d]}return a}function E(a,b){return a&&"object"===typeof a&&"number"===typeof a.length?l(a,b):b(a)}function F(a){return function(b,c){var d=a(),b=d>=(b||0);return!c?b:b&&d<=c}}function t(a,b){var c=arguments.length,d=D(this),e={},g=!1,i;if(c){L(a)&&(g=!0,a=a[0]);if("string"===typeof a){a=C(a);
if(1===c)return e=d.getAttribute(a),g?fa(e):e;if(this===d||2>(i=this.length||1))d.setAttribute(a,b);else for(;i--;)i in this&&t.apply(this[i],arguments)}else if(a instanceof Object)for(i in a)a.hasOwnProperty(i)&&t.call(this,i,a[i]);return this}if(d.dataset&&DOMStringMap)return d.dataset;l(d.attributes,function(a){if(a&&(i=(""+a.name).match(M)))e[ea(i[1])]=a.value});return e}function ga(a){this&&"string"===typeof a&&(a=B(a),E(this,function(b){l(a,function(a){a&&b.removeAttribute(C(a))})}));return this}
function G(a,b,c){return t.apply(a,qa.call(arguments,1))}function Q(){return f.pageXOffset||k.scrollLeft}function R(){return f.pageYOffset||k.scrollTop}function S(a,b){var c=a.getBoundingClientRect?a.getBoundingClientRect():{},b="number"===typeof b?b:0;return{top:(c.top||0)-b,left:(c.left||0)-b,bottom:(c.bottom||0)+b,right:(c.right||0)+b}}function T(a,b){var c=S(D(a),b);return 0<=c.bottom&&c.top<=R()+p()&&0<=c.right&&c.left<=Q()+o()}function u(a){var b=f.devicePixelRatio;if(!arguments.length)return b||
(u(2)?2:u(1.5)?1.5:u(1)?1:0);if(!s(a))return!1;if(b)return b>=a;a="only all and (min--moz-device-pixel-ratio:"+a+")";return!H?!1:H(a).matches||H(a.replace("-moz-","")).matches}function ha(a){var b={img:1,input:1,source:3,embed:3,track:3,iframe:5,audio:5,video:5,script:5}[a.tagName.toLowerCase()]||-1;return 4>b?b:"string"===typeof a.getAttribute("src")?5:-5}function ia(a,b,c){a&&b||q("store");var d,e=a.length,c=!!c;if(e)for(;e--;)if(e in a&&(d=a[e],c||!G(d,b)))G(d,b,0<ha(d)?d.getAttribute("src"):h(d).html()||
"");return j}function U(a){for(var b=[],c=a.length;c&&c--;)a[c]&&(b[c]="["+C(a[c].replace(V,"").replace(".","\\."))+"]");return b.join()}function W(a,b){return a&&b&&b.length?N(B(b),t,a):[]}function X(a,b){var c="resize",c=!b?c:v(c,b);w.on(c,a);return j}function ja(a){E(a,function(a){a===Object(a)||q("create @args");var c=Y(ka).configure(a),d,e=c.verge,a=c.breakpoints,g=v("scroll"),i=v("resize");a.length&&(d=a[0]||a[1]||!1,I(function(){function a(){c.reset();l(c.$e,function(a,b){c[b].decideValue().updateDOM()}).trigger(f)}
function b(){l(c.$e,function(a,b){T(c[b].$e,e)&&c[b].updateDOM()})}var f=da,h=!!c.lazy;l(c.target().$e,function(a,b){c[b]=Y(c).prepareData(a);(!h||T(c[b].$e,e))&&c[b].updateDOM()});c.dynamic&&d<x&&X(a,i);h&&(w.on(g,b),c.$e.one(f,function(){w.off(g,b)}))}))});return j}function ra(a,b){l(["inX","inY","inViewport"],function(c){b[c]=function(b,e){return a(r(this,function(a){return a&&!e===j[c](a,b)}))}})}function Z(a,b){Z.on||(b=b||h.fn,a=a||h,b.dataset=t,b.deletes=ga,ra(a,b),Z.on=1);return j}var j,J=
f.document,k=J.documentElement,h=f.jQuery||f.Zepto||f.ender,I=h.domReady||h,w=h(f),qa=[].slice,y=f.screen,$=Math.max,s=f.isFinite,ka,aa,z={},m={},A={all:[]},ba=y.width,ca=y.height,x=$(ba,ca),sa=ba+ca-x,la=function(){return ba},ma=function(){return ca},ta=/[^a-z0-9_\-\.]/gi,pa=/([a-z])([A-Z])/g,oa=/-(.)/g,M=/^data-(.+)$/,na=/\s+/,V=/^[\W\s]+|[\W\s]+$|/g,H=f.matchMedia||f.msMatchMedia||function(){return{}},L=Array.isArray||function(a){return a instanceof Array},Y=Object.create||function(a){function b(){}
b.prototype=a;return new b},v=function(a,b){b=b||"Response";return a.replace(V,"")+"."+b.replace(V,"")};da=v("allLoaded");n=v("crossover");y=F(o);aa=F(p);z.band=F(la);z.wave=F(ma);ka=function(){function a(a){return"string"===typeof a?a.toLowerCase().replace(ta,""):""}var b=[],c=Math.min;return{e:0,$e:0,mode:0,breakpoints:0,prefix:0,prop:"width",keys:[],dynamic:0,values:[],fn:0,verge:K,newValue:0,currValue:1,aka:0,lazy:0,i:0,selector:0,valid8:function(a,b,c){a=this.breakpoints;L(a)?(a=r(a,s).sort(function(a,
b){return a-b}),a.length||q("create @breakpoints")):(c={width:[0,320,481,641,961,1025,1281],height:[0,481],ratio:[1,1.5,2]},b=this.prop,a=c[b]||c[b.split("-").pop()]||q("create @prop"));this.breakpoints=r(a,function(a){return a<=x})},reset:function(){var a=this.breakpoints,c=a.length,g=0;for(b=[!0];!g&&c--;)this.memoize(a[c])&&(g=c);g!==this.i&&(w.trigger(n).trigger(this.prop+n),this.i=g||0);return this},memoize:function(a){var c=b[a];c!==!!c&&(b[a]=c=!!this.fn(a));return c},configure:function(b){var e,
g;P(this,b,!0);this.verge=s(this.verge)?this.verge:c(x,500);this.fn=m[this.prop]||q("create @fn");0===this.dynamic&&(this.dynamic="device"!==this.prop.substring(0,6));e=this.prefix?r(N(B(this.prefix),a)):["min-"+this.prop+"-"];b=1<e.length?e.slice(1):0;this.prefix=e[0];this.valid8();this.keys=O(this.breakpoints,this.prefix);this.aka=K;if(b){g=[];for(e=b.length;e--;)g.push(O(this.breakpoints,b[e]));this.aka=g}A[this.prop]=b=[].concat.apply(this.keys,this.aka||[]);A.all=A.all.concat(b);this.selector=
U(b);return this},target:function(){this.$e=h(this.selector);ia(this.$e,"iResponse");this.keys.push("iResponse");return this},decideValue:function(){for(var a=0,b=this.breakpoints,c=b.length,f=c;!a&&f--;)this.memoize(b[f])&&(a=this.values[f]);this.newValue=a||this.values[c];return this},prepareData:function(a){this.e=a;this.$e=h(a);this.mode=ha(this.e);this.values=W(this.$e,this.keys);if(this.aka)for(a=this.aka.length;a--;)this.values=P(this.values,W(this.$e,this.aka[a]));return this.decideValue()},
updateDOM:function(){if(this.currValue===this.newValue)return this;this.currValue=this.newValue;0<this.mode?this.e.setAttribute("src",this.newValue):this.$e.html(this.newValue);return this}}}();m.width=y;m.height=aa;m["device-width"]=z.band;m["device-height"]=z.wave;m["device-pixel-ratio"]=u;j={deviceMin:function(){return sa},deviceMax:function(){return x},sets:function(a){return h(U(A[a]||A.all))},chain:Z,create:ja,addTest:function(a,b){"string"===typeof a&&"function"===typeof b&&(m[a]=b);return j},
datatize:C,camelize:ea,render:fa,store:ia,access:W,target:function(a){return h(U(B(a)))},overflowX:function(){var a=k,a=$(a.offsetWidth,a.scrollWidth,J.body.scrollWidth)-o();return 0<a?a:0},overflowY:function(){var a=k,a=$(a.offsetHeight,a.scrollHeight,J.body.scrollHeight)-p();return 0<a?a:0},object:Y,crossover:function(a,b){w.on(b?b+n:n,a);return j},action:function(a){E(a,function(a){I(a);X(a)});return j},resize:X,ready:I,affix:O,sift:r,dpr:u,deletes:function(a,b){return ga.call(a,b)},scrollX:Q,
scrollY:R,deviceW:la,deviceH:ma,device:z,inX:function(a,b){var c=S(D(a),b);return 0<=c.right&&c.left<=Q()+o()},inY:function(a,b){var c=S(D(a),b);return 0<=c.bottom&&c.top<=R()+p()},route:E,merge:P,media:H,wave:aa,band:y,map:N,each:l,inViewport:T,dataset:G,viewportH:p,viewportW:o};I(function(a){if(a=G(J.body,"responsejs"))a=f.JSON&&JSON.parse?JSON.parse(a):h.parseJSON?h.parseJSON(a):{},a.create&&ja(a.create);k.className=k.className.replace(/(^|\s)(no-)?responsejs(\s|$)/,"$1$3")+" responsejs "});return j}(window);