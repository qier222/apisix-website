(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{216:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,m=s["".concat(l,".").concat(d)]||s[d]||u[d]||i;return n?a.a.createElement(m,o(o({ref:t},c),{},{components:n})):a.a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(216)),l={title:"response-rewrite"},o={unversionedId:"plugins/response-rewrite",id:"plugins/response-rewrite",isDocsHomePage:!1,title:"response-rewrite",description:"\x3c!--",source:"@site/docs/apisix/plugins/response-rewrite.md",slug:"/plugins/response-rewrite",permalink:"/docs/apisix/plugins/response-rewrite",version:"current",sidebar:"docs",previous:{title:"redirect",permalink:"/docs/apisix/plugins/redirect"},next:{title:"proxy-rewrite",permalink:"/docs/apisix/plugins/proxy-rewrite"}},b=[{value:"Summary",id:"summary",children:[]},{value:"Name",id:"name",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"How To Enable",id:"how-to-enable",children:[]},{value:"Test Plugin",id:"test-plugin",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]},{value:"Attention",id:"attention",children:[]}],c={toc:b};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"summary"},"Summary"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#name"},Object(i.b)("strong",{parentName:"a"},"Name"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#attributes"},Object(i.b)("strong",{parentName:"a"},"Attributes"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#how-to-enable"},Object(i.b)("strong",{parentName:"a"},"How To Enable"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#test-plugin"},Object(i.b)("strong",{parentName:"a"},"Test Plugin"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#disable-plugin"},Object(i.b)("strong",{parentName:"a"},"Disable Plugin"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#attention"},Object(i.b)("strong",{parentName:"a"},"Attention")))),Object(i.b)("h2",{id:"name"},"Name"),Object(i.b)("p",null,"response rewrite plugin, rewrite the content returned by the upstream as well as Apache APISIX itself."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"scenario"),":"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"can set ",Object(i.b)("inlineCode",{parentName:"li"},"Access-Control-Allow-*")," series field to support CORS(Cross-origin Resource Sharing)."),Object(i.b)("li",{parentName:"ol"},"we can set customized ",Object(i.b)("inlineCode",{parentName:"li"},"status_code")," and ",Object(i.b)("inlineCode",{parentName:"li"},"Location")," field in header to achieve redirect, you can also use ",Object(i.b)("a",{parentName:"li",href:"/docs/apisix/plugins/redirect"},"redirect")," plugin if you just want a redirection.")),Object(i.b)("h2",{id:"attributes"},"Attributes"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Requirement"),Object(i.b)("th",{parentName:"tr",align:null},"Default"),Object(i.b)("th",{parentName:"tr",align:null},"Valid"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"status_code"),Object(i.b)("td",{parentName:"tr",align:null},"integer"),Object(i.b)("td",{parentName:"tr",align:null},"optional"),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null},"[200, 598]"),Object(i.b)("td",{parentName:"tr",align:null},"New ",Object(i.b)("inlineCode",{parentName:"td"},"status code")," to client, keep the original response code by default.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"body"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"optional"),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null},"New ",Object(i.b)("inlineCode",{parentName:"td"},"body")," to client, and the content-length will be reset too.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"body_base64"),Object(i.b)("td",{parentName:"tr",align:null},"boolean"),Object(i.b)("td",{parentName:"tr",align:null},"optional"),Object(i.b)("td",{parentName:"tr",align:null},"false"),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null},"Identify if ",Object(i.b)("inlineCode",{parentName:"td"},"body")," in configuration need base64 decoded before rewrite to client.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"headers"),Object(i.b)("td",{parentName:"tr",align:null},"object"),Object(i.b)("td",{parentName:"tr",align:null},"optional"),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null},"Set the new ",Object(i.b)("inlineCode",{parentName:"td"},"headers")," for client, can set up multiple. If it exists already from upstream, will rewrite the header, otherwise will add the header. You can set the corresponding value to an empty string to remove a header.")))),Object(i.b)("h2",{id:"how-to-enable"},"How To Enable"),Object(i.b)("p",null,"Here's an example, enable the ",Object(i.b)("inlineCode",{parentName:"p"},"response rewrite")," plugin on the specified route:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/test/index.html",\n    "plugins": {\n        "response-rewrite": {\n            "body": "{\\"code\\":\\"ok\\",\\"message\\":\\"new json body\\"}",\n            "headers": {\n                "X-Server-id": 3,\n                "X-Server-status": "on"\n            }\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:80": 1\n        }\n    }\n}\'\n')),Object(i.b)("h2",{id:"test-plugin"},"Test Plugin"),Object(i.b)("p",null,"Testing based on the above examples :"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"curl -X GET -i  http://127.0.0.1:9080/test/index.html\n")),Object(i.b)("p",null,"It will output like below,no matter what kind of content from upstream."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'\nHTTP/1.1 200 OK\nDate: Sat, 16 Nov 2019 09:15:12 GMT\nTransfer-Encoding: chunked\nConnection: keep-alive\nX-Server-id: 3\nX-Server-status: on\n\n{"code":"ok","message":"new json body"}\n')),Object(i.b)("p",null,"This means that the ",Object(i.b)("inlineCode",{parentName:"p"},"response rewrite")," plugin is in effect."),Object(i.b)("h2",{id:"disable-plugin"},"Disable Plugin"),Object(i.b)("p",null,"When you want to disable the ",Object(i.b)("inlineCode",{parentName:"p"},"response rewrite")," plugin, it is very simple,\nyou can delete the corresponding json configuration in the plugin configuration,\nno need to restart the service, it will take effect immediately:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/test/index.html",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:80": 1\n        }\n    }\n}\'\n')),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"response rewrite")," plugin has been disabled now. It works for other plugins."),Object(i.b)("h2",{id:"attention"},"Attention"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"ngx.exit")," will interrupt the execution of the current request and return status code to Nginx."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/https://cdn.jsdelivr.net/gh/Miss-you/img/picgo/20201113010623.png",alt:null})),Object(i.b)("p",null,"However, if you execute ",Object(i.b)("inlineCode",{parentName:"p"},"ngx.exit")," during the access phase, it only interrupts the request processing phase, and the response phase will still process it, i.e. if you configure the ",Object(i.b)("inlineCode",{parentName:"p"},"response-rewrite")," plugin, it will force overwriting of your response information (e.g. response status code)."))}p.isMDXComponent=!0}}]);