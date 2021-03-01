(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{216:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,m=u["".concat(c,".").concat(b)]||u[b]||d[b]||o;return n?a.a.createElement(m,s(s({ref:t},p),{},{components:n})):a.a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(216)),c={title:"Debug Function"},s={unversionedId:"debug-function",id:"debug-function",isDocsHomePage:!1,title:"Debug Function",description:"\x3c!--",source:"@site/docs/apisix/debug-function.md",slug:"/debug-function",permalink:"/docs/apisix/debug-function",version:"current",sidebar:"docs",previous:{title:"Benchmark",permalink:"/docs/apisix/benchmark"},next:{title:"FAQ",permalink:"/docs/apisix/FAQ"}},i=[{value:"<code>5xx</code> response status code",id:"5xx-response-status-code",children:[]},{value:"How to identify the source of the <code>5xx</code> response status code",id:"how-to-identify-the-source-of-the-5xx-response-status-code",children:[]},{value:"Example",id:"example",children:[]}],p={toc:i};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"5xx-response-status-code"},Object(o.b)("inlineCode",{parentName:"h2"},"5xx")," response status code"),Object(o.b)("p",null,"Similar ",Object(o.b)("inlineCode",{parentName:"p"},"5xx")," status codes such as 500, 502, 503, etc., are the status codes in response to a server error. When a request has a ",Object(o.b)("inlineCode",{parentName:"p"},"5xx")," status code; it may come from ",Object(o.b)("inlineCode",{parentName:"p"},"APISIX")," or ",Object(o.b)("inlineCode",{parentName:"p"},"Upstream"),". How to identify the source of these response status codes is a very meaningful thing. It can quickly help us determine the problem."),Object(o.b)("h2",{id:"how-to-identify-the-source-of-the-5xx-response-status-code"},"How to identify the source of the ",Object(o.b)("inlineCode",{parentName:"h2"},"5xx")," response status code"),Object(o.b)("p",null,"In the response header of the request, through the response header of ",Object(o.b)("inlineCode",{parentName:"p"},"X-APISIX-Upstream-Status"),", we can effectively identify the source of the ",Object(o.b)("inlineCode",{parentName:"p"},"5xx")," status code. When the ",Object(o.b)("inlineCode",{parentName:"p"},"5xx")," status code comes from ",Object(o.b)("inlineCode",{parentName:"p"},"Upstream"),", the response header ",Object(o.b)("inlineCode",{parentName:"p"},"X-APISIX-Upstream-Status")," can be seen in the response header, and the value of this response header is the response status code. When the ",Object(o.b)("inlineCode",{parentName:"p"},"5xx")," status code is derived from ",Object(o.b)("inlineCode",{parentName:"p"},"APISIX"),", there is no response header information of ",Object(o.b)("inlineCode",{parentName:"p"},"X-APISIX-Upstream-Status")," in the response header. That is, only when the status code of ",Object(o.b)("inlineCode",{parentName:"p"},"5xx")," is derived from Upstream will the ",Object(o.b)("inlineCode",{parentName:"p"},"X-APISIX-Upstream-Status")," response header appear."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Example 1: ",Object(o.b)("inlineCode",{parentName:"p"},"502")," response status code comes from ",Object(o.b)("inlineCode",{parentName:"p"},"Upstream")," (IP address is not available)")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/hello"\n}\'\n')),Object(o.b)("p",null,"Test:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/hello -v\n......\n< HTTP/1.1 502 Bad Gateway\n< Date: Wed, 25 Nov 2020 14:40:22 GMT\n< Content-Type: text/html; charset=utf-8\n< Content-Length: 154\n< Connection: keep-alive\n< Server: APISIX/2.0\n< X-APISIX-Upstream-Status: 502\n<\n<html>\n<head><title>502 Bad Gateway</title></head>\n<body>\n<center><h1>502 Bad Gateway</h1></center>\n<hr><center>openresty</center>\n</body>\n</html>\n\n")),Object(o.b)("p",null,"It has a response header of ",Object(o.b)("inlineCode",{parentName:"p"},"X-APISIX-Upstream-Status: 502"),"."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Example 2: ",Object(o.b)("inlineCode",{parentName:"p"},"502")," response status code comes from ",Object(o.b)("inlineCode",{parentName:"p"},"APISIX"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "fault-injection": {\n            "abort": {\n                "http_status": 500,\n                "body": "Fault Injection!\\n"\n            }\n        }\n    },\n    "uri": "/hello"\n}\'\n')),Object(o.b)("p",null,"Test\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/hello -v\n......\n< HTTP/1.1 500 Internal Server Error\n< Date: Wed, 25 Nov 2020 14:50:20 GMT\n< Content-Type: text/plain; charset=utf-8\n< Transfer-Encoding: chunked\n< Connection: keep-alive\n< Server: APISIX/2.0\n<\nFault Injection!\n")),Object(o.b)("p",null,"There is no response header for ",Object(o.b)("inlineCode",{parentName:"p"},"X-APISIX-Upstream-Status"),"."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Example 3: ",Object(o.b)("inlineCode",{parentName:"p"},"Upstream")," has multiple nodes, and all nodes are unavailable")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/upstreams/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "nodes": {\n        "127.0.0.3:1": 1,\n        "127.0.0.2:1": 1,\n        "127.0.0.1:1": 1\n    },\n    "retries": 2,\n    "type": "roundrobin"\n}\'\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "upstream_id": "1"\n}\'\n')),Object(o.b)("p",null,"Test\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/hello -v\n< HTTP/1.1 502 Bad Gateway\n< Date: Wed, 25 Nov 2020 15:07:34 GMT\n< Content-Type: text/html; charset=utf-8\n< Content-Length: 154\n< Connection: keep-alive\n< Server: APISIX/2.0\n< X-APISIX-Upstream-Status: 502, 502, 502\n<\n<html>\n<head><title>502 Bad Gateway</title></head>\n<body>\n<center><h1>502 Bad Gateway</h1></center>\n<hr><center>openresty</center>\n</body>\n</html>\n")),Object(o.b)("p",null,"It has a response header of ",Object(o.b)("inlineCode",{parentName:"p"},"X-APISIX-Upstream-Status: 502, 502, 502"),"."))}l.isMDXComponent=!0}}]);