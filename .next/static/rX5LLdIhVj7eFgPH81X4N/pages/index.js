(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{RNiq:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){return!e||"object"!==i(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.r(e);var f=n("q1tI"),a=n.n(f),s=n("YFqc"),l=n.n(s),p=n("nOHt"),h=n.n(p),v=a.a.createElement;function y(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}var d=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}(c,t);var e,n,i,u=y(c);function c(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),u.apply(this,arguments)}return e=c,i=[{key:"getInitialProps",value:function(t){return new Promise((function(t,e){setTimeout((function(){t({appName:"Super App"})}),1e3)}))}}],(n=[{key:"render",value:function(){return v("div",null,v("h1",null,"The Main Page of ",this.props.appName),v("p",null,"Go to",v(l.a,{href:"/auth"},v("a",null,"Auth"))),v("button",{onClick:function(){return h.a.push("/auth")}},"Go to Auth"))}}])&&r(e.prototype,n),i&&r(e,i),c}(f.Component);e.default=d},YFqc:function(t,e,n){t.exports=n("cTJO")},cTJO:function(t,e,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),i=n("7W2i"),u=n("a1gu"),c=n("Nsbk");function f(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}var a=n("TqRt"),s=n("284h");e.__esModule=!0,e.default=void 0;var l,p=s(n("q1tI")),h=n("QmWs"),v=n("g/15"),y=a(n("nOHt")),d=n("elyg");function b(t){return t&&"object"===typeof t?(0,v.formatWithValidation)(t):t}var m=new Map,w=window.IntersectionObserver,g={};function k(){return l||(w?l=new w((function(t){t.forEach((function(t){if(m.has(t.target)){var e=m.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(l.unobserve(t.target),m.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0)}var R=function(t){i(n,t);var e=f(n);function n(t){var o;return r(this,n),(o=e.call(this,t)).p=void 0,o.cleanUpListeners=function(){},o.formatUrls=function(t){var e=null,n=null,r=null;return function(o,i){if(r&&o===e&&i===n)return r;var u=t(o,i);return e=o,n=i,r=u,u}}((function(t,e){return{href:(0,d.addBasePath)(b(t)),as:e?(0,d.addBasePath)(b(e)):e}})),o.linkClicked=function(t){var e=t.currentTarget,n=e.nodeName,r=e.target;if("A"!==n||!(r&&"_self"!==r||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=o.formatUrls(o.props.href,o.props.as),u=i.href,c=i.as;if(function(t){var e=(0,h.parse)(t,!1,!0),n=(0,h.parse)((0,v.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===n.protocol&&e.host===n.host}(u)){var f=window.location.pathname;u=(0,h.resolve)(f,u),c=c?(0,h.resolve)(f,c):u,t.preventDefault();var a=o.props.scroll;null==a&&(a=c.indexOf("#")<0),y.default[o.props.replace?"replace":"push"](u,c,{shallow:o.props.shallow}).then((function(t){t&&a&&(window.scrollTo(0,0),document.body.focus())}))}}},o.p=!1!==t.prefetch,o}return o(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as),n=e.href,r=e.as,o=(0,h.resolve)(t,n);return[o,r?(0,h.resolve)(t,r):o]}},{key:"handleRef",value:function(t){var e=this;this.p&&w&&t&&t.tagName&&(this.cleanUpListeners(),g[this.getPaths().join("%")]||(this.cleanUpListeners=function(t,e){var n=k();return n?(n.observe(t),m.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}m.delete(t)}):function(){}}(t,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(t){if(this.p){var e=this.getPaths();y.default.prefetch(e[0],e[1],t).catch((function(t){0})),g[e.join("%")]=!0}}},{key:"render",value:function(){var t=this,e=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof e&&(e=p.default.createElement("a",null,e));var i=p.Children.only(e),u={ref:function(e){t.handleRef(e),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(e):"object"===typeof i.ref&&(i.ref.current=e))},onMouseEnter:function(e){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(e),t.prefetch({priority:!0})},onClick:function(e){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(u.href=o||r),p.default.cloneElement(i,u)}}]),n}(p.Component);e.default=R},vlRD:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,2,1]]]);