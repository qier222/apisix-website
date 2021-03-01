(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{134:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return b})),t.d(n,"default",(function(){return c}));var a=t(3),r=t(7),l=(t(0),t(216)),i={title:"request-validation"},o={unversionedId:"plugins/request-validation",id:"plugins/request-validation",isDocsHomePage:!1,title:"request-validation",description:"\x3c!--",source:"@site/docs/apisix/plugins/request-validation.md",slug:"/plugins/request-validation",permalink:"/docs/apisix/plugins/request-validation",version:"current",sidebar:"docs",previous:{title:"proxy-cache",permalink:"/docs/apisix/plugins/proxy-cache"},next:{title:"proxy-mirror",permalink:"/docs/apisix/plugins/proxy-mirror"}},b=[{value:"Summary",id:"summary",children:[]},{value:"Name",id:"name",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"How To Enable",id:"how-to-enable",children:[]},{value:"Test Plugin",id:"test-plugin",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]},{value:"Examples:",id:"examples",children:[]}],p={toc:b};function c(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"summary"},"Summary"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#name"},Object(l.b)("strong",{parentName:"a"},"Name"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#attributes"},Object(l.b)("strong",{parentName:"a"},"Attributes"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#how-to-enable"},Object(l.b)("strong",{parentName:"a"},"How To Enable"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#test-plugin"},Object(l.b)("strong",{parentName:"a"},"Test Plugin"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#disable-plugin"},Object(l.b)("strong",{parentName:"a"},"Disable Plugin"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#examples"},Object(l.b)("strong",{parentName:"a"},"Examples")))),Object(l.b)("h2",{id:"name"},"Name"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"request-validation")," plugin validates the requests before forwarding to an upstream service. The validation plugin uses\njson-schema to validate the schema. The plugin can be used to validate the headers and body data."),Object(l.b)("p",null,"For more information on schema, refer to ",Object(l.b)("a",{parentName:"p",href:"https://github.com/api7/jsonschema"},"JSON schema")," for more information."),Object(l.b)("h2",{id:"attributes"},"Attributes"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Requirement"),Object(l.b)("th",{parentName:"tr",align:null},"Default"),Object(l.b)("th",{parentName:"tr",align:null},"Valid"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"header_schema"),Object(l.b)("td",{parentName:"tr",align:null},"object"),Object(l.b)("td",{parentName:"tr",align:null},"optional"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"schema for the header data")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"body_schema"),Object(l.b)("td",{parentName:"tr",align:null},"object"),Object(l.b)("td",{parentName:"tr",align:null},"optional"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"schema for the body data")))),Object(l.b)("h2",{id:"how-to-enable"},"How To Enable"),Object(l.b)("p",null,"Create a route and enable the request-validation plugin on the route:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/5 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/get",\n    "plugins": {\n        "request-validation": {\n            "body_schema": {\n                "type": "object",\n                "required": ["required_payload"],\n                "properties": {\n                    "required_payload": {"type": "string"},\n                    "boolean_payload": {"type": "boolean"}\n                }\n            }\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:8080": 1\n        }\n    }\n}\'\n')),Object(l.b)("h2",{id:"test-plugin"},"Test Plugin"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},'curl --header "Content-Type: application/json" \\\n  --request POST \\\n  --data \'{"boolean-payload":true,"required_payload":"hello"}\' \\\n  http://127.0.0.1:9080/get\n')),Object(l.b)("p",null,"If the schema is violated the plugin will yield a ",Object(l.b)("inlineCode",{parentName:"p"},"400")," bad request."),Object(l.b)("h2",{id:"disable-plugin"},"Disable Plugin"),Object(l.b)("p",null,"Remove the corresponding json configuration in the plugin configuration to disable the ",Object(l.b)("inlineCode",{parentName:"p"},"request-validation"),".\nAPISIX plugins are hot-reloaded, therefore no need to restart APISIX."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/5 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/get",\n    "plugins": {\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:8080": 1\n        }\n    }\n}\'\n')),Object(l.b)("h2",{id:"examples"},"Examples:"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"Enum")," validate:")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n    "body_schema": {\n        "type": "object",\n        "required": ["required_payload"],\n        "properties": {\n                "emum_payload": {\n                "type": "string",\n                "enum": ["enum_string_1", "enum_string_2"],\n                "default": "enum_string_1"\n            }\n        }\n    }\n}\n')),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"Boolean")," validate:")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n    "body_schema": {\n        "type": "object",\n        "required": ["bool_payload"],\n        "properties": {\n            "bool_payload": {\n                "type": "boolean",\n                "default": true\n            }\n        }\n    }\n}\n')),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"Number")," or ",Object(l.b)("inlineCode",{parentName:"strong"},"Integer")," validate:")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n    "body_schema": {\n        "type": "object",\n        "required": ["integer_payload"],\n        "properties": {\n            "integer_payload": {\n                "type": "integer",\n                "minimum": 1,\n                "maximum": 65535\n            }\n        }\n    }\n}\n')),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"String")," validate:")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n    "body_schema": {\n        "type": "object",\n        "required": ["string_payload"],\n        "properties": {\n            "string_payload": {\n                "type": "string",\n                "minLength": 1,\n                "maxLength": 32\n            }\n        }\n    }\n}\n')),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"Regex")," validate:")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n    "body_schema": {\n        "type": "object",\n        "required": ["regex_payload"],\n        "properties": {\n            "regex_payload": {\n                "type": "string",\n                "minLength": 1,\n                "maxLength": 32,\n                "pattern": "[[^[a-zA-Z0-9_]+$]]"\n            }\n        }\n    }\n}\n')),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"Array")," validate:")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n    "body_schema": {\n        "type": "object",\n        "required": ["array_payload"],\n        "properties": {\n            "array_payload": {\n                "type": "array",\n                "minItems": 1,\n                "items": {\n                    "type": "integer",\n                    "minimum": 200,\n                    "maximum": 599\n                },\n                "uniqueItems": true,\n                "default": [200, 302]\n            }\n        }\n    }\n}\n')),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Multi-field combination verification:")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n    "body_schema": {\n        "type": "object",\n        "required": ["boolean_payload", "array_payload", "regex_payload"],\n        "properties": {\n            "boolean_payload": {\n                "type": "boolean"\n            },\n            "array_payload": {\n                "type": "array",\n                "minItems": 1,\n                "items": {\n                    "type": "integer",\n                    "minimum": 200,\n                    "maximum": 599\n                },\n                "uniqueItems": true,\n                "default": [200, 302]\n            },\n            "regex_payload": {\n                "type": "string",\n                "minLength": 1,\n                "maxLength": 32,\n                "pattern": "[[^[a-zA-Z0-9_]+$]]"\n            }\n        }\n    }\n}\n')))}c.isMDXComponent=!0},216:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),c=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,d=u["".concat(i,".").concat(m)]||u[m]||s[m]||l;return t?r.a.createElement(d,o(o({ref:n},p),{},{components:t})):r.a.createElement(d,o({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var b in n)hasOwnProperty.call(n,b)&&(o[b]=n[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);