(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{216:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,s=u["".concat(b,".").concat(d)]||u[d]||m[d]||l;return n?r.a.createElement(s,i(i({ref:t},o),{},{components:n})):r.a.createElement(s,i({ref:t},o))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,b=new Array(l);b[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,b[1]=i;for(var o=2;o<l;o++)b[o]=n[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),l=(n(0),n(216)),b={title:"http-logger"},i={unversionedId:"plugins/http-logger",id:"plugins/http-logger",isDocsHomePage:!1,title:"http-logger",description:"\x3c!--",source:"@site/docs/apisix/plugins/http-logger.md",slug:"/plugins/http-logger",permalink:"/docs/apisix/plugins/http-logger",version:"current",sidebar:"docs",previous:{title:"skywalking",permalink:"/docs/apisix/plugins/skywalking"},next:{title:"tcp-logger",permalink:"/docs/apisix/plugins/tcp-logger"}},c=[{value:"Summary",id:"summary",children:[]},{value:"Name",id:"name",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"How To Enable",id:"how-to-enable",children:[]},{value:"Test Plugin",id:"test-plugin",children:[]},{value:"Metadata",id:"metadata",children:[{value:"Example",id:"example",children:[]}]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],o={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"summary"},"Summary"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#name"},Object(l.b)("strong",{parentName:"a"},"Name"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#attributes"},Object(l.b)("strong",{parentName:"a"},"Attributes"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#how-to-enable"},Object(l.b)("strong",{parentName:"a"},"How To Enable"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#test-plugin"},Object(l.b)("strong",{parentName:"a"},"Test Plugin"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#metadata"},Object(l.b)("strong",{parentName:"a"},"Metadata"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#disable-plugin"},Object(l.b)("strong",{parentName:"a"},"Disable Plugin")))),Object(l.b)("h2",{id:"name"},"Name"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"http-logger")," is a plugin which push Log data requests to HTTP/HTTPS servers."),Object(l.b)("p",null,"This will provide the ability to send Log data requests as JSON objects to Monitoring tools and other HTTP servers."),Object(l.b)("h2",{id:"attributes"},"Attributes"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Requirement"),Object(l.b)("th",{parentName:"tr",align:null},"Default"),Object(l.b)("th",{parentName:"tr",align:null},"Valid"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"uri"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"required"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"The URI of the ",Object(l.b)("inlineCode",{parentName:"td"},"HTTP/HTTPS")," server.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"auth_header"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"optional"),Object(l.b)("td",{parentName:"tr",align:null},'""'),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Any authorization headers.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"timeout"),Object(l.b)("td",{parentName:"tr",align:null},"integer"),Object(l.b)("td",{parentName:"tr",align:null},"optional"),Object(l.b)("td",{parentName:"tr",align:null},"3"),Object(l.b)("td",{parentName:"tr",align:null},"[1,...]"),Object(l.b)("td",{parentName:"tr",align:null},"Time to keep the connection alive after sending a request.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"name"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"optional"),Object(l.b)("td",{parentName:"tr",align:null},'"http logger"'),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"A unique identifier to identity the logger.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"batch_max_size"),Object(l.b)("td",{parentName:"tr",align:null},"integer"),Object(l.b)("td",{parentName:"tr",align:null},"optional"),Object(l.b)("td",{parentName:"tr",align:null},"1000"),Object(l.b)("td",{parentName:"tr",align:null},"[1,...]"),Object(l.b)("td",{parentName:"tr",align:null},"Set the maximum number of logs sent in each batch. When the number of logs reaches the set maximum, all logs will be automatically pushed to the ",Object(l.b)("inlineCode",{parentName:"td"},"HTTP/HTTPS")," service.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"inactive_timeout"),Object(l.b)("td",{parentName:"tr",align:null},"integer"),Object(l.b)("td",{parentName:"tr",align:null},"optional"),Object(l.b)("td",{parentName:"tr",align:null},"5"),Object(l.b)("td",{parentName:"tr",align:null},"[1,...]"),Object(l.b)("td",{parentName:"tr",align:null},"The maximum time to refresh the buffer (in seconds). When the maximum refresh time is reached, all logs will be automatically pushed to the ",Object(l.b)("inlineCode",{parentName:"td"},"HTTP/HTTPS")," service regardless of whether the number of logs in the buffer reaches the maximum number set.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"buffer_duration"),Object(l.b)("td",{parentName:"tr",align:null},"integer"),Object(l.b)("td",{parentName:"tr",align:null},"optional"),Object(l.b)("td",{parentName:"tr",align:null},"60"),Object(l.b)("td",{parentName:"tr",align:null},"[1,...]"),Object(l.b)("td",{parentName:"tr",align:null},"Maximum age in seconds of the oldest entry in a batch before the batch must be processed.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"max_retry_count"),Object(l.b)("td",{parentName:"tr",align:null},"integer"),Object(l.b)("td",{parentName:"tr",align:null},"optional"),Object(l.b)("td",{parentName:"tr",align:null},"0"),Object(l.b)("td",{parentName:"tr",align:null},"[0,...]"),Object(l.b)("td",{parentName:"tr",align:null},"Maximum number of retries before removing from the processing pipe line.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"retry_delay"),Object(l.b)("td",{parentName:"tr",align:null},"integer"),Object(l.b)("td",{parentName:"tr",align:null},"optional"),Object(l.b)("td",{parentName:"tr",align:null},"1"),Object(l.b)("td",{parentName:"tr",align:null},"[0,...]"),Object(l.b)("td",{parentName:"tr",align:null},"Number of seconds the process execution should be delayed if the execution fails.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"include_req_body"),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"optional"),Object(l.b)("td",{parentName:"tr",align:null},"false"),Object(l.b)("td",{parentName:"tr",align:null},"[false, true]"),Object(l.b)("td",{parentName:"tr",align:null},"Whether to include the request body. false: indicates that the requested body is not included; true: indicates that the requested body is included.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"concat_method"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"optional"),Object(l.b)("td",{parentName:"tr",align:null},'"json"'),Object(l.b)("td",{parentName:"tr",align:null},'["json", "new_line"]'),Object(l.b)("td",{parentName:"tr",align:null},"Enum type: ",Object(l.b)("inlineCode",{parentName:"td"},"json")," and ",Object(l.b)("inlineCode",{parentName:"td"},"new_line"),". ",Object(l.b)("strong",{parentName:"td"},"json"),": use ",Object(l.b)("inlineCode",{parentName:"td"},"json.encode")," for all pending logs. ",Object(l.b)("strong",{parentName:"td"},"new_line"),": use ",Object(l.b)("inlineCode",{parentName:"td"},"json.encode"),' for each pending log and concat them with "\\n" line.')))),Object(l.b)("h2",{id:"how-to-enable"},"How To Enable"),Object(l.b)("p",null,"The following is an example on how to enable the http-logger for a specific route."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n      "plugins": {\n            "http-logger": {\n                "uri": "http://127.0.0.1:80/postendpoint?param=1"\n            }\n       },\n      "upstream": {\n           "type": "roundrobin",\n           "nodes": {\n               "127.0.0.1:1980": 1\n           }\n      },\n      "uri": "/hello"\n}\'\n')),Object(l.b)("h2",{id:"test-plugin"},"Test Plugin"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"success:")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"$ curl -i http://127.0.0.1:9080/hello\nHTTP/1.1 200 OK\n...\nhello, world\n")),Object(l.b)("h2",{id:"metadata"},"Metadata"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Requirement"),Object(l.b)("th",{parentName:"tr",align:null},"Default"),Object(l.b)("th",{parentName:"tr",align:null},"Valid"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"log_format"),Object(l.b)("td",{parentName:"tr",align:null},"object"),Object(l.b)("td",{parentName:"tr",align:null},"optional"),Object(l.b)("td",{parentName:"tr",align:null},'{"host": "$host", "@timestamp": "$time_iso8601", "client_ip": "$remote_addr"}'),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Log format declared as JSON object. Only string is supported in the ",Object(l.b)("inlineCode",{parentName:"td"},"value")," part. If the value starts with ",Object(l.b)("inlineCode",{parentName:"td"},"$"),", it means to get ",Object(l.b)("inlineCode",{parentName:"td"},"APISIX")," variables or ",Object(l.b)("a",{parentName:"td",href:"http://nginx.org/en/docs/varindex.html"},"Nginx variable"),".")))),Object(l.b)("p",null," Note that the metadata configuration is applied in global scope, which means it will take effect on all Route or Service which use http-logger plugin."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"APISIX Variables")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Variable Name"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Usage Example"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"route_id"),Object(l.b)("td",{parentName:"tr",align:null},"id of ",Object(l.b)("inlineCode",{parentName:"td"},"route")),Object(l.b)("td",{parentName:"tr",align:null},"$route_id")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"route_name"),Object(l.b)("td",{parentName:"tr",align:null},"name of ",Object(l.b)("inlineCode",{parentName:"td"},"route")),Object(l.b)("td",{parentName:"tr",align:null},"$route_name")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"service_id"),Object(l.b)("td",{parentName:"tr",align:null},"id of ",Object(l.b)("inlineCode",{parentName:"td"},"service")),Object(l.b)("td",{parentName:"tr",align:null},"$service_id")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"service_name"),Object(l.b)("td",{parentName:"tr",align:null},"name of ",Object(l.b)("inlineCode",{parentName:"td"},"service")),Object(l.b)("td",{parentName:"tr",align:null},"$service_name")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"consumer_name"),Object(l.b)("td",{parentName:"tr",align:null},"username of ",Object(l.b)("inlineCode",{parentName:"td"},"consumer")),Object(l.b)("td",{parentName:"tr",align:null},"$consumer_name")))),Object(l.b)("h3",{id:"example"},"Example"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/plugin_metadata/http-logger -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "log_format": {\n        "host": "$host",\n        "@timestamp": "$time_iso8601",\n        "client_ip": "$remote_addr"\n    }\n}\'\n')),Object(l.b)("p",null,"It is expected to see some logs like that:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},'{"host":"localhost","@timestamp":"2020-09-23T19:05:05-04:00","client_ip":"127.0.0.1","route_id":"1"}\n{"host":"localhost","@timestamp":"2020-09-23T19:05:05-04:00","client_ip":"127.0.0.1","route_id":"1"}\n')),Object(l.b)("h2",{id:"disable-plugin"},"Disable Plugin"),Object(l.b)("p",null,"Remove the corresponding json configuration in the plugin configuration to disable the ",Object(l.b)("inlineCode",{parentName:"p"},"http-logger"),".\nAPISIX plugins are hot-reloaded, therefore no need to restart APISIX."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:2379/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d value=\'\n{\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}p.isMDXComponent=!0}}]);