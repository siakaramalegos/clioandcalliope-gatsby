(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{216:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n.n(r),i=n(233),u=n.n(i);e.default=function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Hi from the second page"),o.a.createElement("p",null,"Welcome to page 2"),o.a.createElement(u.a,{to:"/"},"Go back to the homepage"))}},219:function(t,e,n){var r=n(108),o=n(58).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},220:function(t,e,n){e.f=n(8)},221:function(t,e,n){t.exports=n(232)},222:function(t,e,n){var r=n(17),o=n(219).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return u.slice()}}(t):o(r(t))}},223:function(t,e,n){var r=n(24);t.exports=Array.isArray||function(t){return"Array"==r(t)}},224:function(t,e,n){var r=n(52),o=n(105),i=n(54);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var u,a=n(t),f=i.f,c=0;a.length>c;)f.call(t,u=a[c++])&&e.push(u);return e}},225:function(t,e,n){var r=n(5),o=n(3),i=n(33),u=n(220),a=n(14).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||a(e,t,{value:u.f(t)})}},226:function(t,e,n){var r=n(53)("meta"),o=n(16),i=n(15),u=n(14).f,a=0,f=Object.isExtensible||function(){return!0},c=!n(23)(function(){return f(Object.preventExtensions({}))}),s=function(t){u(t,r,{value:{i:"O"+ ++a,w:{}}})},l=t.exports={KEY:r,NEED:!1,fastKey:function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!f(t))return"F";if(!e)return"E";s(t)}return t[r].i},getWeak:function(t,e){if(!i(t,r)){if(!f(t))return!0;if(!e)return!1;s(t)}return t[r].w},onFreeze:function(t){return c&&l.NEED&&f(t)&&!i(t,r)&&s(t),t}}},227:function(t,e,n){"use strict";var r=n(5),o=n(15),i=n(12),u=n(11),a=n(107),f=n(226).KEY,c=n(23),s=n(59),l=n(36),p=n(53),h=n(8),d=n(220),y=n(225),v=n(224),b=n(223),m=n(10),w=n(16),g=n(17),O=n(61),S=n(37),_=n(56),E=n(222),j=n(110),P=n(14),x=n(52),k=j.f,I=P.f,N=E.f,T=r.Symbol,R=r.JSON,C=R&&R.stringify,F=h("_hidden"),D=h("toPrimitive"),K={}.propertyIsEnumerable,M=s("symbol-registry"),J=s("symbols"),A=s("op-symbols"),q=Object.prototype,L="function"==typeof T,W=r.QObject,G=!W||!W.prototype||!W.prototype.findChild,Y=i&&c(function(){return 7!=_(I({},"a",{get:function(){return I(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=k(q,e);r&&delete q[e],I(t,e,n),r&&t!==q&&I(q,e,r)}:I,z=function(t){var e=J[t]=_(T.prototype);return e._k=t,e},B=L&&"symbol"==typeof T.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof T},H=function(t,e,n){return t===q&&H(A,e,n),m(t),e=O(e,!0),m(n),o(J,e)?(n.enumerable?(o(t,F)&&t[F][e]&&(t[F][e]=!1),n=_(n,{enumerable:S(0,!1)})):(o(t,F)||I(t,F,S(1,{})),t[F][e]=!0),Y(t,e,n)):I(t,e,n)},Q=function(t,e){m(t);for(var n,r=v(e=g(e)),o=0,i=r.length;i>o;)H(t,n=r[o++],e[n]);return t},U=function(t){var e=K.call(this,t=O(t,!0));return!(this===q&&o(J,t)&&!o(A,t))&&(!(e||!o(this,t)||!o(J,t)||o(this,F)&&this[F][t])||e)},V=function(t,e){if(t=g(t),e=O(e,!0),t!==q||!o(J,e)||o(A,e)){var n=k(t,e);return!n||!o(J,e)||o(t,F)&&t[F][e]||(n.enumerable=!0),n}},X=function(t){for(var e,n=N(g(t)),r=[],i=0;n.length>i;)o(J,e=n[i++])||e==F||e==f||r.push(e);return r},Z=function(t){for(var e,n=t===q,r=N(n?A:g(t)),i=[],u=0;r.length>u;)!o(J,e=r[u++])||n&&!o(q,e)||i.push(J[e]);return i};L||(a((T=function(){if(this instanceof T)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===q&&e.call(A,n),o(this,F)&&o(this[F],t)&&(this[F][t]=!1),Y(this,t,S(1,n))};return i&&G&&Y(q,t,{configurable:!0,set:e}),z(t)}).prototype,"toString",function(){return this._k}),j.f=V,P.f=H,n(219).f=E.f=X,n(54).f=U,n(105).f=Z,i&&!n(33)&&a(q,"propertyIsEnumerable",U,!0),d.f=function(t){return z(h(t))}),u(u.G+u.W+u.F*!L,{Symbol:T});for(var $="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;$.length>tt;)h($[tt++]);for(var et=x(h.store),nt=0;et.length>nt;)y(et[nt++]);u(u.S+u.F*!L,"Symbol",{for:function(t){return o(M,t+="")?M[t]:M[t]=T(t)},keyFor:function(t){if(!B(t))throw TypeError(t+" is not a symbol!");for(var e in M)if(M[e]===t)return e},useSetter:function(){G=!0},useSimple:function(){G=!1}}),u(u.S+u.F*!L,"Object",{create:function(t,e){return void 0===e?_(t):Q(_(t),e)},defineProperty:H,defineProperties:Q,getOwnPropertyDescriptor:V,getOwnPropertyNames:X,getOwnPropertySymbols:Z}),R&&u(u.S+u.F*(!L||c(function(){var t=T();return"[null]"!=C([t])||"{}"!=C({a:t})||"{}"!=C(Object(t))})),"JSON",{stringify:function(t){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(n=e=r[1],(w(e)||void 0!==t)&&!B(t))return b(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!B(e))return e}),r[1]=e,C.apply(R,r)}}),T.prototype[D]||n(13)(T.prototype,D,T.prototype.valueOf),l(T,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},228:function(t,e,n){n(227),t.exports=n(3).Object.getOwnPropertySymbols},229:function(t,e,n){t.exports=n(228)},230:function(t,e,n){var r=n(229),o=n(221);t.exports=function(t,e){if(null==t)return{};var n,i,u={},a=o(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(u[n]=t[n]);if(r){var f=r(t);for(i=0;i<f.length;i++)n=f[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(u[n]=t[n])}return u}},231:function(t,e,n){var r=n(57),o=n(52);n(109)("keys",function(){return function(t){return o(r(t))}})},232:function(t,e,n){n(231),t.exports=n(3).Object.keys},233:function(t,e,n){"use strict";var r=n(6);e.__esModule=!0,e.withPrefix=function(t){return function(t){return t.replace(/\/+/g,"/")}("/"+t)},e.navigateTo=e.replace=e.push=e.default=void 0;var o=r(n(60)),i=r(n(221)),u=r(n(230)),a=r(n(34)),f=r(n(55)),c=r(n(0)),s=r(n(1)),l=n(35),p=n(106),h=n(9),d={activeClassName:c.default.string,activeStyle:c.default.object,exact:c.default.bool,strict:c.default.bool,isActive:c.default.func,location:c.default.object},y=function(t){function e(e,n){var r;r=t.call(this)||this;var o=!1;"undefined"!=typeof window&&window.IntersectionObserver&&(o=!0);var i=n.router.history.location,u=(0,h.createLocation)(e.to,null,null,i);return r.state={path:(0,h.createPath)(u),to:u,IOSupported:o,location:i},r.handleRef=r.handleRef.bind((0,f.default)((0,f.default)(r))),r}(0,a.default)(e,t),e.getDerivedStateFromProps=function(t,e){if(e.to===t.to)return null;var n=(0,h.createLocation)(t.to,null,null,e.location);return{path:(0,h.createPath)(n),to:n}};var n=e.prototype;return n.componentDidUpdate=function(t,e){this.props.to===t.to||this.state.IOSupported||___loader.enqueue(this.state.path)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue(this.state.to.pathname)},n.handleRef=function(t){var e,n,r,o=this;this.props.innerRef&&this.props.innerRef(t),this.state.IOSupported&&t&&(e=t,n=function(){___loader.enqueue(o.state.to.pathname)},(r=new window.IntersectionObserver(function(t){t.forEach(function(t){e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(r.unobserve(e),r.disconnect(),n())})})).observe(e))},n.render=function(){var t,e=this,n=this.props,r=n.onClick,a=n.onMouseEnter,f=(0,u.default)(n,["onClick","onMouseEnter"]);return t=(0,i.default)(d).some(function(t){return e.props[t]})?l.NavLink:l.Link,s.default.createElement(t,(0,o.default)({onMouseEnter:function(t){a&&a(t),___loader.hovering(e.state.path)},onClick:function(t){if(r&&r(t),!(0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)){var n=e.state.path;if(n.split("#").length>1&&(n=n.split("#").slice(0,-1).join("")),n===window.location.pathname){var o=e.state.path.split("#").slice(1).join("#"),i=document.getElementById(o);return null!==i?(i.scrollIntoView(),!0):(window.scrollTo(0,0),!0)}t.preventDefault(),window.___push(e.state.to)}return!0}},f,{to:this.state.to,innerRef:this.handleRef}))},e}(s.default.Component);y.propTypes=(0,o.default)({},d,{innerRef:c.default.func,onClick:c.default.func,to:c.default.oneOfType([c.default.string,c.default.object]).isRequired}),y.contextTypes={router:c.default.object};var v=(0,p.polyfill)(y);e.default=v;var b=function(t){window.___push(t)};e.push=b,e.replace=function(t){window.___replace(t)},e.navigateTo=function(t){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "push" instead.'),b(t)}}}]);
//# sourceMappingURL=component---src-pages-contact-js-6e85368408c766568ba0.js.map