(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{108:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),l=(n(0),n(216)),o={title:"proxy-mirror"},i={unversionedId:"plugins/proxy-mirror",id:"plugins/proxy-mirror",isDocsHomePage:!1,title:"proxy-mirror",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/current/plugins/proxy-mirror.md",slug:"/plugins/proxy-mirror",permalink:"/zh/docs/apisix/plugins/proxy-mirror",version:"current",sidebar:"docs",previous:{title:"request-validation",permalink:"/zh/docs/apisix/plugins/request-validation"},next:{title:"api-breaker",permalink:"/zh/docs/apisix/plugins/api-breaker"}},c=[{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]}],p={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\u4ee3\u7406\u955c\u50cf\u63d2\u4ef6\uff0c\u8be5\u63d2\u4ef6\u63d0\u4f9b\u4e86\u955c\u50cf\u5ba2\u6237\u7aef\u8bf7\u6c42\u7684\u80fd\u529b\u3002"),Object(l.b)("p",null,"\u6ce8\uff1a\u955c\u50cf\u8bf7\u6c42\u8fd4\u56de\u7684\u54cd\u5e94\u4f1a\u88ab\u5ffd\u7565\u3002"),Object(l.b)("h3",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"\u540d\u79f0"),Object(l.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(l.b)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),Object(l.b)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),Object(l.b)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),Object(l.b)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"host"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u955c\u50cf\u670d\u52a1\u5730\u5740\uff0c\u4f8b\u5982\uff1a",Object(l.b)("a",{parentName:"td",href:"http://127.0.0.1:9797%EF%BC%88%E5%9C%B0%E5%9D%80%E4%B8%AD%E9%9C%80%E8%A6%81%E5%8C%85%E5%90%AB"},"http://127.0.0.1:9797\uff08\u5730\u5740\u4e2d\u9700\u8981\u5305\u542b")," schema \uff1ahttp\u6216https\uff0c\u4e0d\u80fd\u5305\u542b URI \u90e8\u5206\uff09")))),Object(l.b)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(l.b)("h4",{id:"\u542f\u7528\u63d2\u4ef6"},"\u542f\u7528\u63d2\u4ef6"),Object(l.b)("p",null,"\u793a\u4f8b1\uff1a\u4e3a\u7279\u5b9a\u8def\u7531\u542f\u7528 ",Object(l.b)("inlineCode",{parentName:"p"},"proxy-mirror")," \u63d2\u4ef6\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "proxy-mirror": {\n           "host": "http://127.0.0.1:9797"\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1999": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/hello"\n}\'\n')),Object(l.b)("p",null,"\u6d4b\u8bd5\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/hello -i\nHTTP/1.1 200 OK\nContent-Type: application/octet-stream\nContent-Length: 12\nConnection: keep-alive\nServer: APISIX web server\nDate: Wed, 18 Mar 2020 13:01:11 GMT\nLast-Modified: Thu, 20 Feb 2020 14:21:41 GMT\n\nhello world\n")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u7531\u4e8e\u6307\u5b9a\u7684 mirror \u5730\u5740\u662f127.0.0.1:9797\uff0c\u6240\u4ee5\u9a8c\u8bc1\u6b64\u63d2\u4ef6\u662f\u5426\u5df2\u7ecf\u6b63\u5e38\u5de5\u4f5c\u9700\u8981\u5728\u7aef\u53e3\u4e3a9797\u7684\u670d\u52a1\u4e0a\u786e\u8ba4\uff0c\u4f8b\u5982\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 python \u542f\u52a8\u4e00\u4e2a\u7b80\u5355\u7684 server\uff1a python -m SimpleHTTPServer 9797\u3002")),Object(l.b)("h4",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),Object(l.b)("p",null,"\u79fb\u9664\u63d2\u4ef6\u914d\u7f6e\u4e2d\u76f8\u5e94\u7684 JSON \u914d\u7f6e\u53ef\u7acb\u5373\u7981\u7528\u8be5\u63d2\u4ef6\uff0c\u65e0\u9700\u91cd\u542f\u670d\u52a1\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1999": 1\n        }\n    }\n}\'\n')),Object(l.b)("p",null,"\u8fd9\u65f6\u8be5\u63d2\u4ef6\u5df2\u88ab\u7981\u7528\u3002"))}u.isMDXComponent=!0},216:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,m=b["".concat(o,".").concat(d)]||b[d]||s[d]||l;return n?a.a.createElement(m,i(i({ref:t},p),{},{components:n})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);