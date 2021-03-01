(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{216:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return h}));var a=t(0),i=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),s=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),d=a,h=u["".concat(r,".").concat(d)]||u[d]||b[d]||o;return t?i.a.createElement(h,c(c({ref:n},p),{},{components:t})):i.a.createElement(h,c({ref:n},p))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var p=2;p<o;p++)r[p]=t[p];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},92:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return s}));var a=t(3),i=t(7),o=(t(0),t(216)),r={title:"Plugin Develop"},c={unversionedId:"plugin-develop",id:"plugin-develop",isDocsHomePage:!1,title:"Plugin Develop",description:"\x3c!--",source:"@site/docs/apisix/plugin-develop.md",slug:"/plugin-develop",permalink:"/docs/apisix/plugin-develop",version:"current"},l=[{value:"table of contents",id:"table-of-contents",children:[]},{value:"where to put your plugins",id:"where-to-put-your-plugins",children:[]},{value:"check dependencies",id:"check-dependencies",children:[]},{value:"name and config",id:"name-and-config",children:[]},{value:"schema and check",id:"schema-and-check",children:[]},{value:"choose phase to run",id:"choose-phase-to-run",children:[]},{value:"implement the logic",id:"implement-the-logic",children:[{value:"conf parameter",id:"conf-parameter",children:[]},{value:"ctx parameter",id:"ctx-parameter",children:[]}]},{value:"write test case",id:"write-test-case",children:[{value:"Attach the test-nginx execution process:",id:"attach-the-test-nginx-execution-process",children:[]},{value:"Register public API",id:"register-public-api",children:[]},{value:"Register control API",id:"register-control-api",children:[]}]}],p={toc:l};function s(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"table-of-contents"},"table of contents"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#where-to-put-your-plugins"},Object(o.b)("strong",{parentName:"a"},"where to put your plugins"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#check-dependencies"},Object(o.b)("strong",{parentName:"a"},"check dependencies"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#name-and-config"},Object(o.b)("strong",{parentName:"a"},"name and config"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#schema-and-check"},Object(o.b)("strong",{parentName:"a"},"schema and check"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#choose-phase-to-run"},Object(o.b)("strong",{parentName:"a"},"choose phase to run"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#implement-the-logic"},Object(o.b)("strong",{parentName:"a"},"implement the logic"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#write-test-case"},Object(o.b)("strong",{parentName:"a"},"write test case"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#register-public-api"},Object(o.b)("strong",{parentName:"a"},"register public API"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#register-control-api"},Object(o.b)("strong",{parentName:"a"},"register control API")))),Object(o.b)("h2",{id:"where-to-put-your-plugins"},"where to put your plugins"),Object(o.b)("p",null,"There are two ways to add new features based on APISIX."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"modify the source of APISIX and redistribute it (not so recommended)"),Object(o.b)("li",{parentName:"ol"},"setup the ",Object(o.b)("inlineCode",{parentName:"li"},"extra_lua_path")," and ",Object(o.b)("inlineCode",{parentName:"li"},"extra_lua_cpath")," in ",Object(o.b)("inlineCode",{parentName:"li"},"conf/config.yaml")," to load your own code. Your own code will be loaded instead of the builtin one with the same name, so you can use this way to override the builtin behavior if needed.")),Object(o.b)("p",null,"For example, you can create a directory structure like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"\u251c\u2500\u2500 example\n\u2502\xa0\xa0 \u2514\u2500\u2500 apisix\n\u2502\xa0\xa0     \u251c\u2500\u2500 plugins\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2514\u2500\u2500 3rd-party.lua\n\u2502\xa0\xa0     \u2514\u2500\u2500 stream\n\u2502\xa0\xa0         \u2514\u2500\u2500 plugins\n\u2502\xa0\xa0             \u2514\u2500\u2500 3rd-party.lua\n")),Object(o.b)("p",null,"Then add this configuration into your ",Object(o.b)("inlineCode",{parentName:"p"},"conf/config.yaml"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'apisix:\n    ...\n    extra_lua_path: "/path/to/example/?.lua"\n')),Object(o.b)("p",null,"Now using ",Object(o.b)("inlineCode",{parentName:"p"},'require "apisix.plugins.3rd-party"')," will load your plugin, just like ",Object(o.b)("inlineCode",{parentName:"p"},'require "apisix.plugins.jwt-auth"')," will load the ",Object(o.b)("inlineCode",{parentName:"p"},"jwt-auth")," plugin."),Object(o.b)("h2",{id:"check-dependencies"},"check dependencies"),Object(o.b)("p",null,"if you have dependencies on external libraries, check the dependent items. if your plugin needs to use shared memory, it\nneeds to declare in ",Object(o.b)("strong",{parentName:"p"},"apisix/cli/ngx_tpl.lua"),", for example :"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-nginx"},"    lua_shared_dict plugin-limit-req     10m;\n    lua_shared_dict plugin-limit-count   10m;\n    lua_shared_dict prometheus-metrics   10m;\n    lua_shared_dict plugin-limit-conn    10m;\n    lua_shared_dict upstream-healthcheck 10m;\n    lua_shared_dict worker-events        10m;\n\n    # for openid-connect plugin\n    lua_shared_dict discovery             1m; # cache for discovery metadata documents\n    lua_shared_dict jwks                  1m; # cache for JWKs\n    lua_shared_dict introspection        10m; # cache for JWT verification results\n")),Object(o.b)("p",null,"The plugin itself provides the init method. It is convenient for plugins to perform some initialization after\nthe plugin is loaded."),Object(o.b)("p",null,'Note : if the dependency of some plugin needs to be initialized when Nginx start, you may need to add logic to the initialization\nmethod "http_init" in the file ',Object(o.b)("strong",{parentName:"p"},"apisix.lua"),", And you may need to add some processing on generated part of Nginx\nconfiguration file in ",Object(o.b)("strong",{parentName:"p"},"bin/apisix")," file. but it is easy to have an impact on the overall situation according to the\nexisting plugin mechanism, we do not recommend this unless you have a complete grasp of the code."),Object(o.b)("h2",{id:"name-and-config"},"name and config"),Object(o.b)("p",null,'Determine the name and priority of the plugin, and add to conf/config-default.yaml. For example, for the example-plugin plugin,\nyou need to specify the plugin name in the code (the name is the unique identifier of the plugin and cannot be\nduplicate), you can see the code in file "',Object(o.b)("strong",{parentName:"p"},"apisix/plugins/example-plugin.lua"),'" :'),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'local plugin_name = "example-plugin"\n\nlocal _M = {\n    version = 0.1,\n    priority = 0,\n    name = plugin_name,\n    schema = schema,\n    metadata_schema = metadata_schema,\n}\n')),Object(o.b)("p",null,"Note : The priority of the new plugin cannot be same to any existing ones, you can use the ",Object(o.b)("inlineCode",{parentName:"p"},"/v1/schema")," method of ",Object(o.b)("a",{parentName:"p",href:"/docs/apisix/control-api#get-v1schema"},"control API")," to view the priority of all plugins. In addition, plugins with higher priority value will be executed first in a given phase (see the definition of ",Object(o.b)("inlineCode",{parentName:"p"},"phase")," in ",Object(o.b)("a",{parentName:"p",href:"#choose-phase-to-run"},"choose-phase-to-run"),"). For example, the priority of example-plugin is 0 and the priority of ip-restriction is 3000. Therefore, the ip-restriction plugin will be executed first, then the example-plugin plugin."),Object(o.b)("p",null,'in the "',Object(o.b)("strong",{parentName:"p"},"conf/config-default.yaml"),'" configuration file, the enabled plugins (all specified by plugin name) are listed.'),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"plugins:                          # plugin list\n  - limit-req\n  - limit-count\n  - limit-conn\n  - key-auth\n  - prometheus\n  - node-status\n  - jwt-auth\n  - zipkin\n  - ip-restriction\n  - grpc-transcode\n  - serverless-pre-function\n  - serverless-post-function\n  - openid-connect\n  - proxy-rewrite\n  - redirect\n  ...\n")),Object(o.b)("p",null,"Note : the order of the plugins is not related to the order of execution."),Object(o.b)("p",null,"To enable your plugin, copy this plugin list into ",Object(o.b)("inlineCode",{parentName:"p"},"conf/config.yaml"),", and add your plugin name. For instance:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'apisix:\n  admin_key:\n    - name: "admin"\n      # yamllint disable rule:comments-indentation\n      key: edd1c9f034335f136f87ad84b625c8f1 # using fixed API token has security risk, please update it when you deploy to production environment\n      # yamllint enable rule:comments-indentation\n      role: admin\n\nplugins: # copied from config-default.yaml\n  ...\n  - your-plugin\n')),Object(o.b)("p",null,"If your plugin has a new code directory of its own, and you need to redistribute it with the APISIX source code, you will need to modify the ",Object(o.b)("inlineCode",{parentName:"p"},"Makefile")," to create directory, such as:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"$(INSTALL) -d $(INST_LUADIR)/apisix/plugins/skywalking\n$(INSTALL) apisix/plugins/skywalking/*.lua $(INST_LUADIR)/apisix/plugins/skywalking/\n")),Object(o.b)("h2",{id:"schema-and-check"},"schema and check"),Object(o.b)("p",null,"Write ",Object(o.b)("a",{parentName:"p",href:"https://json-schema.org"},"Json Schema")," descriptions and check functions. Similarly, take the example-plugin plugin as an example to see its\nconfiguration data :"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n    "example-plugin" : {\n        "i": 1,\n        "s": "s",\n        "t": [1]\n    }\n}\n')),Object(o.b)("p",null,"Let's look at its schema description :"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'local schema = {\n    type = "object",\n    properties = {\n        i = {type = "number", minimum = 0},\n        s = {type = "string"},\n        t = {type = "array", minItems = 1},\n        ip = {type = "string"},\n        port = {type = "integer"},\n    },\n    required = {"i"},\n}\n')),Object(o.b)("p",null,"The schema defines a non-negative number ",Object(o.b)("inlineCode",{parentName:"p"},"i"),", a string ",Object(o.b)("inlineCode",{parentName:"p"},"s"),", a non-empty array of ",Object(o.b)("inlineCode",{parentName:"p"},"t"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"ip")," / ",Object(o.b)("inlineCode",{parentName:"p"},"port"),". Only ",Object(o.b)("inlineCode",{parentName:"p"},"i")," is required."),Object(o.b)("p",null,"At the same time, we need to implement the ",Object(o.b)("strong",{parentName:"p"},"check_schema(conf)")," method to complete the specification verification."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},"function _M.check_schema(conf, schema_type)\n    return core.schema.check(schema, conf)\nend\n")),Object(o.b)("p",null,'Note: the project has provided the public method "',Object(o.b)("strong",{parentName:"p"},"core.schema.check"),'", which can be used directly to complete JSON\nverification.'),Object(o.b)("p",null,"In addition, if the plugin needs to use some metadata, we can define the plugin ",Object(o.b)("inlineCode",{parentName:"p"},"metadata_schema"),", and then we can dynamically manage these metadata through the ",Object(o.b)("inlineCode",{parentName:"p"},"admin api"),". Example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'local metadata_schema = {\n    type = "object",\n    properties = {\n        ikey = {type = "number", minimum = 0},\n        skey = {type = "string"},\n    },\n    required = {"ikey", "skey"},\n    additionalProperties = false,\n}\n\nlocal plugin_name = "example-plugin"\n\nlocal _M = {\n    version = 0.1,\n    priority = 0,        -- TODO: add a type field, may be a good idea\n    name = plugin_name,\n    schema = schema,\n    metadata_schema = metadata_schema,\n}\n')),Object(o.b)("p",null,"You might have noticed the key-auth plugin has ",Object(o.b)("inlineCode",{parentName:"p"},"type = 'auth'")," in its definition.\nWhen we set the type of plugin to ",Object(o.b)("inlineCode",{parentName:"p"},"auth"),", it means that this plugin is an authentication plugin."),Object(o.b)("p",null,"An authentication plugin needs to choose a consumer after execution. For example, in key-auth plugin, it calls the ",Object(o.b)("inlineCode",{parentName:"p"},"consumer.attach_consumer")," to attach a consumer, which is chosen via the ",Object(o.b)("inlineCode",{parentName:"p"},"apikey")," header."),Object(o.b)("p",null,"To interact with the ",Object(o.b)("inlineCode",{parentName:"p"},"consumer")," resource, this type of plugin needs to provide a ",Object(o.b)("inlineCode",{parentName:"p"},"consumer_schema")," to check the ",Object(o.b)("inlineCode",{parentName:"p"},"plugins")," configuration in the ",Object(o.b)("inlineCode",{parentName:"p"},"consumer"),"."),Object(o.b)("p",null,"Here is the consumer configuration for key-auth plugin:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n    "username": "Joe",\n    "plugins": {\n        "key-auth": {\n            "key": "Joe\'s key"\n        }\n    }\n}\n')),Object(o.b)("p",null,"It will be used when you try to create a ",Object(o.b)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/docs/en/latest/admin-api.md#consumer"},"Consumer")),Object(o.b)("p",null,"To validate the configuration, the plugin uses a schema like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'local consumer_schema = {\n    type = "object",\n    additionalProperties = false,\n    properties = {\n        key = {type = "string"},\n    },\n    required = {"key"},\n}\n')),Object(o.b)("p",null,"Note the difference between key-auth's ",Object(o.b)("strong",{parentName:"p"},"check_schema(conf)")," method to example-plugin's:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},"-- key-auth\nfunction _M.check_schema(conf, schema_type)\n    if schema_type == core.schema.TYPE_CONSUMER then\n        return core.schema.check(consumer_schema, conf)\n    else\n        return core.schema.check(schema, conf)\n    end\nend\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},"-- example-plugin\nfunction _M.check_schema(conf, schema_type)\n    return core.schema.check(schema, conf)\nend\n")),Object(o.b)("h2",{id:"choose-phase-to-run"},"choose phase to run"),Object(o.b)("p",null,"Determine which phase to run, generally access or rewrite. If you don't know the ",Object(o.b)("a",{parentName:"p",href:"https://openresty-reference.readthedocs.io/en/latest/Directives/"},"Openresty life cycle"),", it's\nrecommended to know it in advance. For example key-auth is an authentication plugin, thus the authentication should be completed\nbefore forwarding the request to any upstream service. Therefore, the plugin must be executed in the rewrite phases.\nIn APISIX, only the authentication logic can be run in the rewrite phase. Other logic needs to run before proxy should be in access phase."),Object(o.b)("p",null,"The following code snippet shows how to implement any logic relevant to the plugin in the OpenResty log phase."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},"function _M.log(conf)\n-- Implement logic here\nend\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note : we can't invoke ",Object(o.b)("inlineCode",{parentName:"strong"},"ngx.exit")," or ",Object(o.b)("inlineCode",{parentName:"strong"},"core.respond.exit")," in rewrite phase and access phase. if need to exit, just return the status and body, the plugin engine will make the exit happen with the returned status and body. ",Object(o.b)("a",{parentName:"strong",href:"https://github.com/apache/apisix/blob/35269581e21473e1a27b11cceca6f773cad0192a/apisix/plugins/limit-count.lua#L177"},"example"))),Object(o.b)("h2",{id:"implement-the-logic"},"implement the logic"),Object(o.b)("p",null,"Write the logic of the plugin in the corresponding phase. There are two parameters ",Object(o.b)("inlineCode",{parentName:"p"},"conf")," and ",Object(o.b)("inlineCode",{parentName:"p"},"ctx")," in the phase method, take the ",Object(o.b)("inlineCode",{parentName:"p"},"limit-conn")," plugin configuration as an example."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "id": 1,\n    "plugins": {\n        "limit-conn": {\n            "conn": 1,\n            "burst": 0,\n            "default_conn_delay": 0.1,\n            "rejected_code": 503,\n            "key": "remote_addr"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "39.97.63.215:80": 1\n        }\n    }\n}\'\n')),Object(o.b)("h3",{id:"conf-parameter"},"conf parameter"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"conf")," parameter is the relevant configuration information of the plugin, you can use ",Object(o.b)("inlineCode",{parentName:"p"},"core.log.warn(core.json.encode(conf))")," to output it to ",Object(o.b)("inlineCode",{parentName:"p"},"error.log")," for viewing, as shown below:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},"function _M.access(conf, ctx)\n    core.log.warn(core.json.encode(conf))\n    ......\nend\n")),Object(o.b)("p",null,"conf:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n    "rejected_code":503,\n    "burst":0,\n    "default_conn_delay":0.1,\n    "conn":1,\n    "key":"remote_addr"\n}\n')),Object(o.b)("h3",{id:"ctx-parameter"},"ctx parameter"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"ctx")," parameter caches data information related to the request. You can use ",Object(o.b)("inlineCode",{parentName:"p"},"core.log.warn(core.json.encode(ctx, true))")," to output it to ",Object(o.b)("inlineCode",{parentName:"p"},"error.log")," for viewing, as shown below :"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},"function _M.access(conf, ctx)\n    core.log.warn(core.json.encode(ctx, true))\n    ......\nend\n")),Object(o.b)("h2",{id:"write-test-case"},"write test case"),Object(o.b)("p",null,'For functions, write and improve the test cases of various dimensions, do a comprehensive test for your plugin! The\ntest cases of plugins are all in the "',Object(o.b)("strong",{parentName:"p"},"t/plugin"),'" directory. You can go ahead to find out. APISIX uses\n',Object(o.b)("a",{parentName:"p",href:"https://github.com/openresty/test-nginx"},"*",Object(o.b)("strong",{parentName:"a"},"*test-nginx**"))," as the test framework. A test case (.t file) is usually\ndivided into prologue and data parts by ","_","_data","_","_. Here we will briefly introduce the data part, that is, the part\nof the real test case. For example, the key-auth plugin:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-perl"},'=== TEST 1: sanity\n--- config\n    location /t {\n        content_by_lua_block {\n            local plugin = require("apisix.plugins.key-auth")\n            local ok, err = plugin.check_schema({key = \'test-key\'}, core.schema.TYPE_CONSUMER)\n            if not ok then\n                ngx.say(err)\n            end\n\n            ngx.say("done")\n        }\n    }\n--- request\nGET /t\n--- response_body\ndone\n--- no_error_log\n[error]\n')),Object(o.b)("p",null,"A test case consists of three parts :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Program code")," : configuration content of Nginx location"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Input")," : http request information"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Output check")," : status, header, body, error log check")),Object(o.b)("p",null,"When we request ",Object(o.b)("strong",{parentName:"p"},"/t"),', which config in the configuration file, the Nginx will call "',Object(o.b)("strong",{parentName:"p"},"content_by_lua_block"),'" instruction to\ncomplete the Lua script, and finally return. The assertion of the use case is response_body return "done",\n"',Object(o.b)("strong",{parentName:"p"},"no_error_log"),'" means to check the "',Object(o.b)("strong",{parentName:"p"},"error.log"),"\" of Nginx. There must be no ERROR level record. The log files for the unit test\nare located in the following folder: 't/servroot/logs'."),Object(o.b)("p",null,"The above test case represents a simple scenario. Most scenarios will require multiple steps to validate. To do this, create multiple tests ",Object(o.b)("inlineCode",{parentName:"p"},"=== TEST 1"),", ",Object(o.b)("inlineCode",{parentName:"p"},"=== TEST 2"),", and so on. These tests will be executed sequentially, allowing you to break down scenarios into a sequence of atomic steps."),Object(o.b)("p",null,"Additionally, there are some convenience testing endpoints which can be found ",Object(o.b)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/t/lib/server.lua#L36"},"here"),". For example, see ",Object(o.b)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/t/plugin/proxy-rewrite.lua"},"proxy-rewrite"),". In test 42, the upstream ",Object(o.b)("inlineCode",{parentName:"p"},"uri")," is made to redirect ",Object(o.b)("inlineCode",{parentName:"p"},"/test?new_uri=hello")," to ",Object(o.b)("inlineCode",{parentName:"p"},"/hello")," (which always returns ",Object(o.b)("inlineCode",{parentName:"p"},"hello world"),"). In test 43, the response body is confirmed to equal ",Object(o.b)("inlineCode",{parentName:"p"},"hello world"),", meaning the proxy-rewrite configuration added with test 42 worked correctly."),Object(o.b)("p",null,"Refer the following ",Object(o.b)("a",{parentName:"p",href:"/docs/apisix/how-to-build#4-test"},"document")," to setup the testing framework."),Object(o.b)("h3",{id:"attach-the-test-nginx-execution-process"},"Attach the test-nginx execution process:"),Object(o.b)("p",null,"According to the path we configured in the makefile and some configuration items at the front of each ",Object(o.b)("strong",{parentName:"p"},".t"),' file, the\nframework will assemble into a complete nginx.conf file. "',Object(o.b)("strong",{parentName:"p"},"t/servroot"),'" is the working directory of Nginx and start the\nNginx instance. according to the information provided by the test case, initiate the http request and check that the\nreturn items of HTTP include HTTP status, HTTP response header, HTTP response body and so on.'),Object(o.b)("h3",{id:"register-public-api"},"Register public API"),Object(o.b)("p",null,"A plugin can register API which exposes to the public. Take jwt-auth plugin as an example, this plugin registers ",Object(o.b)("inlineCode",{parentName:"p"},"GET /apisix/plugin/jwt/sign")," to allow client to sign its key:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'local function gen_token()\n    --...\nend\n\nfunction _M.api()\n    return {\n        {\n            methods = {"GET"},\n            uri = "/apisix/plugin/jwt/sign",\n            handler = gen_token,\n        }\n    }\nend\n')),Object(o.b)("p",null,"Note that the public API is exposed to the public.\nYou may need to use ",Object(o.b)("a",{parentName:"p",href:"/docs/apisix/plugin-interceptors"},"interceptors")," to protect it."),Object(o.b)("h3",{id:"register-control-api"},"Register control API"),Object(o.b)("p",null,"If you only want to expose the API to the localhost or intranet, you can expose it via ",Object(o.b)("a",{parentName:"p",href:"/docs/apisix/control-api"},"Control API"),"."),Object(o.b)("p",null,"Take a look at example-plugin plugin:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'local function hello()\n    local args = ngx.req.get_uri_args()\n    if args["json"] then\n        return 200, {msg = "world"}\n    else\n        return 200, "world\\n"\n    end\nend\n\n\nfunction _M.control_api()\n    return {\n        {\n            methods = {"GET"},\n            uris = {"/v1/plugin/example-plugin/hello"},\n            handler = hello,\n        }\n    }\nend\n')),Object(o.b)("p",null,"If you don't change the default control API configuration, the plugin will be expose ",Object(o.b)("inlineCode",{parentName:"p"},"GET /v1/plugin/example-plugin/hello")," which can only be accessed via ",Object(o.b)("inlineCode",{parentName:"p"},"127.0.0.1"),"."))}s.isMDXComponent=!0}}]);