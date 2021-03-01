(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{111:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return u}));var r=a(3),i=a(7),n=(a(0),a(216)),p={title:"Release Apache APISIX 2.3"},c={permalink:"/zh/events/2021/02/09/release-apache-apisix-2.3",source:"@site/events/2021-02-09-release-apache-apisix-2.3.md",description:"Change",date:"2021-02-09T00:00:00.000Z",tags:[],title:"Release Apache APISIX 2.3",readingTime:1.24,truncated:!0,prevItem:{title:"Release Apache APISIX Ingress Controller 0.3.0",permalink:"/zh/events/2021/02/11/release-apache-apisix-ingress-controller-0.3.0"},nextItem:{title:"Release Apache APISIX Ingress Controller 0.2.0",permalink:"/zh/events/2021/01/19/release-apache-apisix-ingress-controller-0.2.0"}},l=[{value:"Change",id:"change",children:[]},{value:"Core",id:"core",children:[]},{value:"Plugin",id:"plugin",children:[]},{value:"Bugfix",id:"bugfix",children:[]}],o={toc:l};function u(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h3",{id:"change"},"Change"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"fix: use luajit by default when run apisix ",Object(n.b)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3335"},"#3335")),Object(n.b)("li",{parentName:"ul"},"feat: use luasocket instead of curl in etcd.lua ",Object(n.b)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/2965"},"#2965"))),Object(n.b)("h3",{id:"core"},"Core"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"\ud83c\udf05 feat: support to communicate with etcd by TLS without verification in command line ",Object(n.b)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3415"},"#3415")),Object(n.b)("li",{parentName:"ul"},"\ud83c\udf05 feat: chaos test on route could still works when etcd is down ",Object(n.b)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3404"},"#3404")),Object(n.b)("li",{parentName:"ul"},"\ud83c\udf05 feat: ewma use p2c to improve performance ",Object(n.b)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3300"},"#3300")),Object(n.b)("li",{parentName:"ul"},"\ud83c\udf05 feat: support specifying https in upstream to talk with https backend ",Object(n.b)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3430"},"#3430")),Object(n.b)("li",{parentName:"ul"},"\ud83c\udf05 feat: allow customizing lua_package_path & lua_package_cpath ",Object(n.b)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3417"},"#3417")),Object(n.b)("li",{parentName:"ul"},"\ud83c\udf05 feat: allow to pass SNI in HTTPS proxy ",Object(n.b)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3420"},"#3420")),Object(n.b)("li",{parentName:"ul"},"\ud83c\udf05 feat: support gRPCS ",Object(n.b)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3411"},"#3411")),Object(n.b)("li",{parentName:"ul"},"\ud83c\udf05 feat: allow getting upstream health check status via control API ",Object(n.b)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3345"},"#3345")),Object(n.b)("li",{parentName:"ul"},"\ud83c\udf05 feat: support dubbo ",Object(n.b)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3224"},"#3224")),Object(n.b)("li",{parentName:"ul"},"\ud83c\udf05 feat: load balance by least connections ",Object(n.b)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3304"},"#3304"))),Object(n.b)("h3",{id:"plugin"},"Plugin"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"\ud83c\udf05 feat: kafka-logger implemented reuse kafka producer ",Object(n.b)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3429"},"#3429")),Object(n.b)("li",{parentName:"ul"},"\ud83c\udf05 feat(authz-keycloak): dynamic scope and resource mapping. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3308"},"#3308")),Object(n.b)("li",{parentName:"ul"},"\ud83c\udf05 feat: proxy-rewrite host support host with port ",Object(n.b)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3428"},"#3428")),Object(n.b)("li",{parentName:"ul"},"\ud83c\udf05 feat(fault-injection): support conditional fault injection using nginx variables ",Object(n.b)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3363"},"#3363"))),Object(n.b)("h3",{id:"bugfix"},"Bugfix"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"fix(standalone): require consumer's id to be the same as username ",Object(n.b)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3394"},"#3394")),Object(n.b)("li",{parentName:"ul"},"fix: support upstream_id & consumer with grpc ",Object(n.b)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3387"},"#3387")),Object(n.b)("li",{parentName:"ul"},"fix: set conf info when global rule is hit without matched rule ",Object(n.b)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3332"},"#3332")),Object(n.b)("li",{parentName:"ul"},"fix: avoid caching outdated discovery upstream nodes ",Object(n.b)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3295"},"#3295")),Object(n.b)("li",{parentName:"ul"},"fix: create the health checker in ",Object(n.b)("inlineCode",{parentName:"li"},"access")," phase ",Object(n.b)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3240"},"#3240")),Object(n.b)("li",{parentName:"ul"},"fix: make set_more_retries() work when upstream_type is chash ",Object(n.b)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/2676"},"#2676"))),Object(n.b)("p",null,"For more changes, please refer to ",Object(n.b)("a",{parentName:"p",href:"https://github.com/apache/apisix/milestone/12"},"Milestone")))}u.isMDXComponent=!0},216:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var r=a(0),i=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=i.a.createContext({}),u=function(e){var t=i.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=u(e.components);return i.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),b=u(a),h=r,m=b["".concat(p,".").concat(h)]||b[h]||s[h]||n;return a?i.a.createElement(m,c(c({ref:t},o),{},{components:a})):i.a.createElement(m,c({ref:t},o))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,p=new Array(n);p[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var o=2;o<n;o++)p[o]=a[o];return i.a.createElement.apply(null,p)}return i.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);