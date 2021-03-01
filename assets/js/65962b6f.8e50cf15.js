(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(216)),i={title:"Stream Proxy"},p={unversionedId:"stream-proxy",id:"stream-proxy",isDocsHomePage:!1,title:"Stream Proxy",description:"\x3c!--",source:"@site/docs/apisix/stream-proxy.md",slug:"/stream-proxy",permalink:"/docs/apisix/stream-proxy",version:"current",sidebar:"docs",previous:{title:"Stand-alone mode",permalink:"/docs/apisix/stand-alone"},next:{title:"gRPC Proxy",permalink:"/docs/apisix/grpc-proxy"}},c=[{value:"How to enable Stream proxy?",id:"how-to-enable-stream-proxy",children:[]},{value:"How to set route?",id:"how-to-set-route",children:[]},{value:"More Limit Options",id:"more-limit-options",children:[]}],s={toc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"TCP is the protocol for many popular applications and services, such as LDAP, MySQL, and RTMP. UDP (User Datagram Protocol) is the protocol for many popular non-transactional applications, such as DNS, syslog, and RADIUS."),Object(a.b)("p",null,"APISIX can dynamic load balancing TCP/UDP proxy. In Nginx world, we call TCP/UDP proxy to stream proxy, we followed this statement."),Object(a.b)("h2",{id:"how-to-enable-stream-proxy"},"How to enable Stream proxy?"),Object(a.b)("p",null,"Setting the ",Object(a.b)("inlineCode",{parentName:"p"},"stream_proxy")," option in ",Object(a.b)("inlineCode",{parentName:"p"},"conf/config.yaml"),", specify a list of addresses that require dynamic proxy.\nBy default, no any stream proxy is enabled."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},'apisix:\n  stream_proxy:                 # TCP/UDP proxy\n    tcp:                        # TCP proxy address list\n      - 9100\n      - "127.0.0.1:9101"\n    udp:                        # UDP proxy address list\n      - 9200\n      - "127.0.0.1:9211"\n')),Object(a.b)("h2",{id:"how-to-set-route"},"How to set route?"),Object(a.b)("p",null,"Here is a mini example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/stream_routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "remote_addr": "127.0.0.1",\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1995": 1\n        },\n        "type": "roundrobin"\n    }\n}\'\n')),Object(a.b)("p",null,"It means APISIX will proxy the request to ",Object(a.b)("inlineCode",{parentName:"p"},"127.0.0.1:1995")," which the client remote address is ",Object(a.b)("inlineCode",{parentName:"p"},"127.0.0.1"),"."),Object(a.b)("p",null,"For more use cases, please take a look at ",Object(a.b)("a",{parentName:"p",href:"../t/stream-node/sanity.t"},"test case"),"."),Object(a.b)("h2",{id:"more-limit-options"},"More Limit Options"),Object(a.b)("p",null,"And we can add more limit options to match a route, here is an example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/stream_routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "server_addr": "127.0.0.1",\n    "server_port": 2000,\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1995": 1\n        },\n        "type": "roundrobin"\n    }\n}\'\n')),Object(a.b)("p",null,"It means APISIX will proxy the request to ",Object(a.b)("inlineCode",{parentName:"p"},"127.0.0.1:1995")," which the server remote address is ",Object(a.b)("inlineCode",{parentName:"p"},"127.0.0.1")," and the server port is equal ",Object(a.b)("inlineCode",{parentName:"p"},"2000"),"."))}l.isMDXComponent=!0},216:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return n?o.a.createElement(b,p(p({ref:t},s),{},{components:n})):o.a.createElement(b,p({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);