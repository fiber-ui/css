(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{RNiq:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var n=a("q1tI"),r=a.n(n),s=a("YFqc"),i=a.n(s),o=a("nOHt"),c=r.a.createElement,l=function(e){Object(o.useRouter)();return c("nav",{id:"navbar",className:"bd-navbar navbar has-shadow is-spaced"},c("div",{className:"container"},c("div",{className:"navbar-brand"},c("a",{className:"navbar-item",href:""},c("img",{src:"/images/logo.png",alt:"Fibercss Logo",width:"112",height:"28"})),c(i.a,{href:"/projects",passHref:!0},c("a",{className:"navbar-item is-hidden-desktop",href:"",target:"_blank"},c("span",{className:"icon"},c("i",{className:"fab fa-lg fa-github-alt"})))),c("a",{className:"navbar-item is-hidden-desktop",href:"",target:"_blank"},c("span",{className:"icon"},c("i",{className:"fab fa-lg fa-twitter"}))),c("div",{id:"navbarBurger",className:"navbar-burger burger"},c("span",null),c("span",null),c("span",null))),c("div",{className:"navbar-menu"},c("div",{className:"navbar-start"},c("a",{className:"navbar-item bd-navbar-item-documentation {% if page.route == 'documentation' %}is-active{% endif %} {% if page.layout == 'documentation' %}is-active{% endif %}",href:"{{ site.url }}{{ site.data.meta.documentation }}"},c("span",{className:"icon has-text-primary"},c("i",{className:"fas fa-book"})),c("span",{className:"is-hidden-touch is-hidden-widescreen"},"Docs"),c("span",{className:"is-hidden-desktop-only"},"Documentation"))),c("div",{className:"navbar-end"},c("a",{className:"bd-navbar-icon navbar-item",href:"{{ site.data.meta.github }}",target:"_blank"},c("span",{className:"icon"},c("i",{className:"fab fa-lg fa-github-alt"}))),c("a",{className:"bd-navbar-icon navbar-item",href:"{{ site.data.meta.twitter }}",target:"_blank"},c("span",{className:"icon"},c("i",{className:"fab fa-lg fa-twitter"}))),c("div",{className:"navbar-item"},c("div",{className:"field is-grouped is-grouped-multiline"},c("p",{className:"control"},c("a",{className:"button is-primary",href:"{{ site.data.meta.download }}"},c("strong",null,"Download")))))))))},u=r.a.createElement;function f(e){var t=e.children;return u(r.a.Fragment,null,u(l,null),u("main",null,t))}var p=r.a.createElement;function d(){return p(r.a.Fragment,null,p(f,null,p("h1",null,"Styleup")))}},YFqc:function(e,t,a){e.exports=a("cTJO")},cTJO:function(e,t,a){"use strict";var n=a("lwsE"),r=a("W8MJ"),s=a("7W2i"),i=a("a1gu"),o=a("Nsbk");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=o(e);if(t){var r=o(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return i(this,a)}}var l=a("TqRt"),u=a("284h");t.__esModule=!0,t.default=void 0;var f,p=u(a("q1tI")),d=a("QmWs"),h=a("g/15"),v=l(a("nOHt")),m=a("elyg");function b(e){return e&&"object"===typeof e?(0,h.formatWithValidation)(e):e}var g=new Map,N=window.IntersectionObserver,w={};function y(){return f||(N?f=new N((function(e){e.forEach((function(e){if(g.has(e.target)){var t=g.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),g.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var k=function(e){s(a,e);var t=c(a);function a(e){var r;return n(this,a),(r=t.call(this,e)).p=void 0,r.cleanUpListeners=function(){},r.formatUrls=function(e){var t=null,a=null,n=null;return function(r,s){if(n&&r===t&&s===a)return n;var i=e(r,s);return t=r,a=s,n=i,i}}((function(e,t){return{href:(0,m.addBasePath)(b(e)),as:t?(0,m.addBasePath)(b(t)):t}})),r.linkClicked=function(e){var t=e.currentTarget,a=t.nodeName,n=t.target;if("A"!==a||!(n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var s=r.formatUrls(r.props.href,r.props.as),i=s.href,o=s.as;if(function(e){var t=(0,d.parse)(e,!1,!0),a=(0,d.parse)((0,h.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===a.protocol&&t.host===a.host}(i)){var c=window.location.pathname;i=(0,d.resolve)(c,i),o=o?(0,d.resolve)(c,o):i,e.preventDefault();var l=r.props.scroll;null==l&&(l=o.indexOf("#")<0),v.default[r.props.replace?"replace":"push"](i,o,{shallow:r.props.shallow}).then((function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())}))}}},r.p=!1!==e.prefetch,r}return r(a,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),a=t.href,n=t.as,r=(0,d.resolve)(e,a);return[r,n?(0,d.resolve)(e,n):r]}},{key:"handleRef",value:function(e){var t=this;this.p&&N&&e&&e.tagName&&(this.cleanUpListeners(),w[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var a=y();return a?(a.observe(e),g.set(e,t),function(){try{a.unobserve(e)}catch(t){console.error(t)}g.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();v.default.prefetch(t[0],t[1],e).catch((function(e){0})),w[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,a=this.formatUrls(this.props.href,this.props.as),n=a.href,r=a.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var s=p.Children.only(t),i={ref:function(t){e.handleRef(t),s&&"object"===typeof s&&s.ref&&("function"===typeof s.ref?s.ref(t):"object"===typeof s.ref&&(s.ref.current=t))},onMouseEnter:function(t){s.props&&"function"===typeof s.props.onMouseEnter&&s.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){s.props&&"function"===typeof s.props.onClick&&s.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==s.type||"href"in s.props)||(i.href=r||n),p.default.cloneElement(s,i)}}]),a}(p.Component);t.default=k},vlRD:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a("RNiq")}])}},[["vlRD",0,2,1]]]);