(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{191:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),l=(n(0),n(216)),i={title:"kafka-logger"},b={unversionedId:"plugins/kafka-logger",id:"plugins/kafka-logger",isDocsHomePage:!1,title:"kafka-logger",description:"\x3c!--",source:"@site/docs/apisix/plugins/kafka-logger.md",slug:"/plugins/kafka-logger",permalink:"/docs/apisix/plugins/kafka-logger",version:"current",sidebar:"docs",previous:{title:"tcp-logger",permalink:"/docs/apisix/plugins/tcp-logger"},next:{title:"udp-logger",permalink:"/docs/apisix/plugins/udp-logger"}},o=[{value:"Summary",id:"summary",children:[]},{value:"Name",id:"name",children:[]},{value:"Attributes",id:"attributes",children:[{value:"examples of meta_format",id:"examples-of-meta_format",children:[]}]},{value:"Info",id:"info",children:[{value:"Sample broker list",id:"sample-broker-list",children:[]}]},{value:"How To Enable",id:"how-to-enable",children:[]},{value:"Test Plugin",id:"test-plugin",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],c={toc:o};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"summary"},"Summary"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#name"},Object(l.b)("strong",{parentName:"a"},"Name"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#attributes"},Object(l.b)("strong",{parentName:"a"},"Attributes"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#info"},Object(l.b)("strong",{parentName:"a"},"Info"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#how-to-enable"},Object(l.b)("strong",{parentName:"a"},"How To Enable"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#test-plugin"},Object(l.b)("strong",{parentName:"a"},"Test Plugin"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#disable-plugin"},Object(l.b)("strong",{parentName:"a"},"Disable Plugin")))),Object(l.b)("h2",{id:"name"},"Name"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"kafka-logger")," is a plugin which works as a Kafka client driver for the ngx_lua nginx module."),Object(l.b)("p",null,"This will provide the ability to send Log data requests as JSON objects to external Kafka clusters."),Object(l.b)("p",null,"This plugin provides the ability to push Log data as a batch to you're external Kafka topics. In case if you did not receive the log data don't worry give it some time it will automatically send the logs after the timer function expires in our Batch Processor."),Object(l.b)("p",null,"For more info on Batch-Processor in Apache APISIX please refer.\n",Object(l.b)("a",{parentName:"p",href:"/docs/apisix/batch-processor"},"Batch-Processor")),Object(l.b)("h2",{id:"attributes"},"Attributes"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Requirement"),Object(l.b)("th",{parentName:"tr",align:null},"Default"),Object(l.b)("th",{parentName:"tr",align:null},"Valid"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"broker_list"),Object(l.b)("td",{parentName:"tr",align:null},"object"),Object(l.b)("td",{parentName:"tr",align:null},"required"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"An array of Kafka brokers.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"kafka_topic"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"required"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Target  topic to push data.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"key"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"optional"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Used for partition allocation of messages.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"timeout"),Object(l.b)("td",{parentName:"tr",align:null},"integer"),Object(l.b)("td",{parentName:"tr",align:null},"optional"),Object(l.b)("td",{parentName:"tr",align:null},"3"),Object(l.b)("td",{parentName:"tr",align:null},"[1,...]"),Object(l.b)("td",{parentName:"tr",align:null},"Timeout for the upstream to send data.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"name"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"optional"),Object(l.b)("td",{parentName:"tr",align:null},'"kafka logger"'),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"A  unique identifier to identity the batch processor.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"meta_format"),Object(l.b)("td",{parentName:"tr",align:null},"enum"),Object(l.b)("td",{parentName:"tr",align:null},"optional"),Object(l.b)("td",{parentName:"tr",align:null},'"default"'),Object(l.b)("td",{parentName:"tr",align:null},'["default"\uff0c"origin"]'),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"default"),": collect the request information with default JSON way. ",Object(l.b)("inlineCode",{parentName:"td"},"origin"),": collect the request information with original HTTP request. ",Object(l.b)("a",{parentName:"td",href:"#examples-of-meta_format"},"example"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"batch_max_size"),Object(l.b)("td",{parentName:"tr",align:null},"integer"),Object(l.b)("td",{parentName:"tr",align:null},"optional"),Object(l.b)("td",{parentName:"tr",align:null},"1000"),Object(l.b)("td",{parentName:"tr",align:null},"[1,...]"),Object(l.b)("td",{parentName:"tr",align:null},"Set the maximum number of logs sent in each batch. When the number of logs reaches the set maximum, all logs will be automatically pushed to the ",Object(l.b)("inlineCode",{parentName:"td"},"Kafka")," service.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"inactive_timeout"),Object(l.b)("td",{parentName:"tr",align:null},"integer"),Object(l.b)("td",{parentName:"tr",align:null},"optional"),Object(l.b)("td",{parentName:"tr",align:null},"5"),Object(l.b)("td",{parentName:"tr",align:null},"[1,...]"),Object(l.b)("td",{parentName:"tr",align:null},"The maximum time to refresh the buffer (in seconds). When the maximum refresh time is reached, all logs will be automatically pushed to the ",Object(l.b)("inlineCode",{parentName:"td"},"Kafka")," service regardless of whether the number of logs in the buffer reaches the set maximum number.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"buffer_duration"),Object(l.b)("td",{parentName:"tr",align:null},"integer"),Object(l.b)("td",{parentName:"tr",align:null},"optional"),Object(l.b)("td",{parentName:"tr",align:null},"60"),Object(l.b)("td",{parentName:"tr",align:null},"[1,...]"),Object(l.b)("td",{parentName:"tr",align:null},"Maximum age in seconds of the oldest entry in a batch before the batch must be processed.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"max_retry_count"),Object(l.b)("td",{parentName:"tr",align:null},"integer"),Object(l.b)("td",{parentName:"tr",align:null},"optional"),Object(l.b)("td",{parentName:"tr",align:null},"0"),Object(l.b)("td",{parentName:"tr",align:null},"[0,...]"),Object(l.b)("td",{parentName:"tr",align:null},"Maximum number of retries before removing from the processing pipe line.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"retry_delay"),Object(l.b)("td",{parentName:"tr",align:null},"integer"),Object(l.b)("td",{parentName:"tr",align:null},"optional"),Object(l.b)("td",{parentName:"tr",align:null},"1"),Object(l.b)("td",{parentName:"tr",align:null},"[0,...]"),Object(l.b)("td",{parentName:"tr",align:null},"Number of seconds the process execution should be delayed if the execution fails.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"include_req_body"),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"optional"),Object(l.b)("td",{parentName:"tr",align:null},"false"),Object(l.b)("td",{parentName:"tr",align:null},"[false, true]"),Object(l.b)("td",{parentName:"tr",align:null},"Whether to include the request body. false: indicates that the requested body is not included; true: indicates that the requested body is included.")))),Object(l.b)("h3",{id:"examples-of-meta_format"},"examples of meta_format"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"default"),":"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-json"},'{"upstream":"127.0.0.1:1980","start_time":1602211788041,"client_ip":"127.0.0.1","service_id":"","route_id":"1","request":{"querystring":{"ab":"cd"},"size":90,"uri":"\\/hello?ab=cd","url":"http:\\/\\/localhost:1984\\/hello?ab=cd","headers":{"host":"localhost","content-length":"6","connection":"close"},"body":"abcdef","method":"GET"},"response":{"headers":{"content-type":"text\\/plain","server":"APISIX\\/1.5","connection":"close","transfer-encoding":"chunked"},"status":200,"size":153},"latency":99.000215530396}\n'))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"origin"),":"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-http"},"GET /hello?ab=cd HTTP/1.1\nhost: localhost\ncontent-length: 6\nconnection: close\n\nabcdef\n")))),Object(l.b)("h2",{id:"info"},"Info"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"message")," will write to the buffer first.\nIt will send to the kafka server when the buffer exceed the ",Object(l.b)("inlineCode",{parentName:"p"},"batch_max_size"),",\nor every ",Object(l.b)("inlineCode",{parentName:"p"},"buffer_duration")," flush the buffer."),Object(l.b)("p",null,"In case of success, returns ",Object(l.b)("inlineCode",{parentName:"p"},"true"),".\nIn case of errors, returns ",Object(l.b)("inlineCode",{parentName:"p"},"nil")," with a string describing the error (",Object(l.b)("inlineCode",{parentName:"p"},"buffer overflow"),")."),Object(l.b)("h3",{id:"sample-broker-list"},"Sample broker list"),Object(l.b)("p",null,"This plugin supports to push in to more than one broker at a time. Specify the brokers of the external kafka servers as below\nsample to take effect of this functionality."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n    "127.0.0.1":9092,\n    "127.0.0.1":9093\n}\n')),Object(l.b)("h2",{id:"how-to-enable"},"How To Enable"),Object(l.b)("p",null,"The following is an example on how to enable the kafka-logger for a specific route."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/5 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n       "kafka-logger": {\n           "broker_list" :\n             {\n               "127.0.0.1":9092\n             },\n           "kafka_topic" : "test2",\n           "key" : "key1",\n           "batch_max_size": 1,\n           "name": "kafka logger"\n       }\n    },\n    "upstream": {\n       "nodes": {\n           "127.0.0.1:1980": 1\n       },\n       "type": "roundrobin"\n    },\n    "uri": "/hello"\n}\'\n')),Object(l.b)("h2",{id:"test-plugin"},"Test Plugin"),Object(l.b)("p",null,"*success:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"$ curl -i http://127.0.0.1:9080/hello\nHTTP/1.1 200 OK\n...\nhello, world\n")),Object(l.b)("h2",{id:"disable-plugin"},"Disable Plugin"),Object(l.b)("p",null,"Remove the corresponding json configuration in the plugin configuration to disable the ",Object(l.b)("inlineCode",{parentName:"p"},"kafka-logger"),".\nAPISIX plugins are hot-reloaded, therefore no need to restart APISIX."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:2379/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d value=\'\n{\n    "methods": ["GET"],\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}p.isMDXComponent=!0},216:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,d=u["".concat(i,".").concat(m)]||u[m]||s[m]||l;return n?r.a.createElement(d,b(b({ref:t},c),{},{components:n})):r.a.createElement(d,b({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:a,i[1]=b;for(var c=2;c<l;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);