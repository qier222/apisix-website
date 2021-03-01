(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),i=(n(0),n(216)),l={title:"node-status"},o={unversionedId:"plugins/node-status",id:"plugins/node-status",isDocsHomePage:!1,title:"node-status",description:"\x3c!--",source:"@site/docs/apisix/plugins/node-status.md",slug:"/plugins/node-status",permalink:"/docs/apisix/plugins/node-status",version:"current"},b=[{value:"Summary",id:"summary",children:[]},{value:"Name",id:"name",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"API",id:"api",children:[]},{value:"How To Enable",id:"how-to-enable",children:[]},{value:"Test Plugin",id:"test-plugin",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],c={toc:b};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"summary"},"Summary"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#name"},Object(i.b)("strong",{parentName:"a"},"Name"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#attributes"},Object(i.b)("strong",{parentName:"a"},"Attributes"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#api"},Object(i.b)("strong",{parentName:"a"},"API"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#how-to-enable"},Object(i.b)("strong",{parentName:"a"},"How To Enable"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#test-plugin"},Object(i.b)("strong",{parentName:"a"},"Test Plugin"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#disable-plugin"},Object(i.b)("strong",{parentName:"a"},"Disable Plugin")))),Object(i.b)("h2",{id:"name"},"Name"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"node-status")," is a plugin which we could get request status information through it's API."),Object(i.b)("h2",{id:"attributes"},"Attributes"),Object(i.b)("p",null,"None"),Object(i.b)("h2",{id:"api"},"API"),Object(i.b)("p",null,"This plugin will add ",Object(i.b)("inlineCode",{parentName:"p"},"/apisix/status")," to get status information.\nYou may need to use ",Object(i.b)("a",{parentName:"p",href:"/docs/apisix/plugin-interceptors"},"interceptors")," to protect it."),Object(i.b)("h2",{id:"how-to-enable"},"How To Enable"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Configure ",Object(i.b)("inlineCode",{parentName:"li"},"node-status")," in the plugin list of the configuration file ",Object(i.b)("inlineCode",{parentName:"li"},"conf/config.yaml"),",\nthen you can add this plugin in any route.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"plugins:                          # plugin list\n  - example-plugin\n  - limit-req\n  - node-status\n  - jwt-auth\n  - zipkin\n  ......\n")),Object(i.b)("p",null,"After starting ",Object(i.b)("inlineCode",{parentName:"p"},"APISIX"),", you can get status information through the API ",Object(i.b)("inlineCode",{parentName:"p"},"/apisix/status"),"."),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"Create a route object, and enable plugin ",Object(i.b)("inlineCode",{parentName:"li"},"node-status"),".")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "uri": "/route1",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "192.168.1.100:80:": 1\n        }\n    },\n    "plugins": {\n        "node-status":{}\n    }\n}\'\n')),Object(i.b)("p",null,"You have to configure ",Object(i.b)("inlineCode",{parentName:"p"},"node-status")," in the configuration file ",Object(i.b)("inlineCode",{parentName:"p"},"apisix/conf/config.yaml")," before creating a route like this.\nAnd this plugin will not make any difference in future requests, so usually we don't set this plugin when creating routes."),Object(i.b)("h2",{id:"test-plugin"},"Test Plugin"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Request with uri ",Object(i.b)("inlineCode",{parentName:"li"},"/apisix/status"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},'$ curl localhost:9080/apisix/status -i\nHTTP/1.1 200 OK\nDate: Tue, 03 Nov 2020 11:12:55 GMT\nContent-Type: text/plain; charset=utf-8\nTransfer-Encoding: chunked\nConnection: keep-alive\nServer: APISIX web server\n\n{"status":{"total":"23","waiting":"0","accepted":"22","writing":"1","handled":"22","active":"1","reading":"0"},"id":"6790a064-8f61-44ba-a6d3-5df42f2b1bb3"}\n')),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"Parameter Description")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Parameter"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"status"),Object(i.b)("td",{parentName:"tr",align:null},"status information")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"total"),Object(i.b)("td",{parentName:"tr",align:null},"the total number of client requests")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"waiting"),Object(i.b)("td",{parentName:"tr",align:null},"the current number of idle client connections waiting for a request")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"accepted"),Object(i.b)("td",{parentName:"tr",align:null},"the total number of accepted client connections")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"writing"),Object(i.b)("td",{parentName:"tr",align:null},"the current number of connections where APISIX is writing the response back to the client")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"handled"),Object(i.b)("td",{parentName:"tr",align:null},"the total number of handled connections. Generally, the parameter value is the same as accepted unless some resource limits have been reached")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"active"),Object(i.b)("td",{parentName:"tr",align:null},"the current number of active client connections including waiting connections")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"reading"),Object(i.b)("td",{parentName:"tr",align:null},"the current number of connections where APISIX is reading the request header")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"id"),Object(i.b)("td",{parentName:"tr",align:null},"APISIX's uid which is saved in apisix/conf/apisix.uid")))),Object(i.b)("h2",{id:"disable-plugin"},"Disable Plugin"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"You can delete ",Object(i.b)("inlineCode",{parentName:"li"},"node-status")," in the plugin list of the configuration file ",Object(i.b)("inlineCode",{parentName:"li"},"apisix/conf/config.yaml"),",\nthen you can not add this plugin in any route.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"plugins:                          # plugin list\n  - example-plugin\n  - limit-req\n  - jwt-auth\n  - zipkin\n  ......\n")),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"When you want to disable the ",Object(i.b)("inlineCode",{parentName:"li"},"node-status")," plugin in the route, it is very simple,\nyou can delete the corresponding json configuration in the plugin configuration,\nno need to restart the service, it will take effect immediately.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "uri": "/route1",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "192.168.1.100:80": 1\n        }\n    },\n    "plugins": {}\n}\'\n')))}u.isMDXComponent=!0},216:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(l,".").concat(d)]||p[d]||s[d]||i;return n?r.a.createElement(m,o(o({ref:t},c),{},{components:n})):r.a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);