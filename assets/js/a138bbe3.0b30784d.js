(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{161:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),s=(n(0),n(216)),o={title:"Install Dependencies"},i={unversionedId:"install-dependencies",id:"install-dependencies",isDocsHomePage:!1,title:"Install Dependencies",description:"\x3c!--",source:"@site/docs/apisix/install-dependencies.md",slug:"/install-dependencies",permalink:"/docs/apisix/install-dependencies",version:"current"},c=[{value:"Note",id:"note",children:[]},{value:"CentOS 7",id:"centos-7",children:[]},{value:"Fedora 31 &amp; 32",id:"fedora-31--32",children:[]},{value:"Ubuntu 16.04 &amp; 18.04",id:"ubuntu-1604--1804",children:[]},{value:"Debian 9 &amp; 10",id:"debian-9--10",children:[]},{value:"Mac OSX",id:"mac-osx",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"#install-dependencies"},"Install Dependencies")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"#note"},"Note")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"#centos-7"},"CentOS 7")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"#fedora-31--32"},"Fedora 31 & 32")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"#ubuntu-1604--1804"},"Ubuntu 16.04 & 18.04")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"#debian-9--10"},"Debian 9 & 10")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"#mac-osx"},"Mac OSX"))),Object(s.b)("h2",{id:"note"},"Note"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Since v2.0 Apache APISIX would not support the v2 protocol storage to etcd anymore, and the minimum etcd version supported is v3.4.0. What's more, etcd v3 uses gRPC as the messaging protocol, while Apache APISIX uses HTTP(S) to communicate with etcd cluster, so be sure the ",Object(s.b)("a",{parentName:"p",href:"https://etcd.io/docs/v3.4.0/dev-guide/api_grpc_gateway/"},"etcd gRPC gateway")," is enabled.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},'Now by default Apache APISIX uses HTTP protocol to talk with etcd cluster, which is insecure. Please configure certificate and corresponding private key for your etcd cluster, and use "https" scheme explicitly in the etcd endpoints list in your Apache APISIX configuration, if you want to keep the data secure and integral. See the etcd section in ',Object(s.b)("inlineCode",{parentName:"p"},"conf/config-default.yaml")," for more details.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"If you want use Tengine instead of OpenResty, please take a look at this installation step script ",Object(s.b)("a",{parentName:"p",href:"../.travis/linux_tengine_runner.sh"},"Install Tengine at Ubuntu"),".")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"If it is OpenResty 1.19, APISIX will use OpenResty's built-in LuaJIT to run ",Object(s.b)("inlineCode",{parentName:"p"},"bin/apisix"),"; otherwise it will use Lua 5.1. If you encounter ",Object(s.b)("inlineCode",{parentName:"p"},"luajit: lj_asm_x86.h:2819: asm_loop_ fixup: Assertion '((intptr_t)target & 15) == 0' failed"),", this is a problem with the low version of OpenResty's built-in LuaJIT under certain compilation conditions.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"On some platforms, installing LuaRocks via the package manager will cause Lua to be upgraded to Lua 5.3, so we recommend installing LuaRocks via source code. if you install OpenResty and its OpenSSL develop library (openresty-openssl111-devel for rpm and openresty-openssl111-dev for deb) via the official repository, then ",Object(s.b)("a",{parentName:"p",href:"../utils/linux-install-luarocks.sh"},"we provide a script for automatic installation"),". If you compile OpenResty yourself, you can refer to the above script and change the path in it. If you don't specify the OpenSSL library path when you compile, you don't need to configure the OpenSSL variables in LuaRocks, because the system's OpenSSL is used by default. If the OpenSSL library is specified at compile time, then you need to ensure that LuaRocks' OpenSSL configuration is consistent with OpenResty's.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"WARNING: If you are using OpenResty which is older than ",Object(s.b)("inlineCode",{parentName:"p"},"1.17.8"),", please installing openresty-openss-devel instead of openresty-openssl111-devel."))),Object(s.b)("h2",{id:"centos-7"},"CentOS 7"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-shell"},"# install etcd\nwget https://github.com/etcd-io/etcd/releases/download/v3.4.13/etcd-v3.4.13-linux-amd64.tar.gz\ntar -xvf etcd-v3.4.13-linux-amd64.tar.gz && \\\n    cd etcd-v3.4.13-linux-amd64 && \\\n    sudo cp -a etcd etcdctl /usr/bin/\n\n# add OpenResty source\nsudo yum install yum-utils\nsudo yum-config-manager --add-repo https://openresty.org/package/centos/openresty.repo\n\n# install OpenResty and some compilation tools\nsudo yum install -y openresty curl git gcc openresty-openssl111-devel unzip\n\n# install LuaRocks\ncurl https://raw.githubusercontent.com/apache/apisix/master/utils/linux-install-luarocks.sh -sL | bash -\n\n# start etcd server\nnohup etcd &\n")),Object(s.b)("h2",{id:"fedora-31--32"},"Fedora 31 & 32"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-shell"},"# add OpenResty source\nsudo yum install yum-utils\nsudo yum-config-manager --add-repo https://openresty.org/package/fedora/openresty.repo\n\n# install etcd\nwget https://github.com/etcd-io/etcd/releases/download/v3.4.13/etcd-v3.4.13-linux-amd64.tar.gz\ntar -xvf etcd-v3.4.13-linux-amd64.tar.gz && \\\n    cd etcd-v3.4.13-linux-amd64 && \\\n    sudo cp -a etcd etcdctl /usr/bin/\n\n# install OpenResty and some compilation tools\nsudo yum install -y openresty curl git gcc openresty-openssl111-devel\n\n# install LuaRocks\ncurl https://raw.githubusercontent.com/apache/apisix/master/utils/linux-install-luarocks.sh -sL | bash -\n\n# start etcd server\nnohup etcd &\n")),Object(s.b)("h2",{id:"ubuntu-1604--1804"},"Ubuntu 16.04 & 18.04"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-shell"},'# add OpenResty source\nwget -qO - https://openresty.org/package/pubkey.gpg | sudo apt-key add -\nsudo apt-get update\nsudo apt-get -y install software-properties-common\nsudo add-apt-repository -y "deb http://openresty.org/package/ubuntu $(lsb_release -sc) main"\nsudo apt-get update\n\n# install etcd\nwget https://github.com/etcd-io/etcd/releases/download/v3.4.13/etcd-v3.4.13-linux-amd64.tar.gz\ntar -xvf etcd-v3.4.13-linux-amd64.tar.gz && \\\n    cd etcd-v3.4.13-linux-amd64 && \\\n    sudo cp -a etcd etcdctl /usr/bin/\n\n# install OpenResty and some compilation tools\nsudo apt-get install -y git openresty curl openresty-openssl111-dev\n\n# install LuaRocks\ncurl https://raw.githubusercontent.com/apache/apisix/master/utils/linux-install-luarocks.sh -sL | bash -\n\n# start etcd server\nnohup etcd &\n')),Object(s.b)("h2",{id:"debian-9--10"},"Debian 9 & 10"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-shell"},"# optional\nsed -i 's|^deb http://deb.debian.org/debian|deb http://mirrors.huaweicloud.com/debian|g' /etc/apt/sources.list\nsed -i 's|^deb http://security.debian.org/debian-security|deb http://mirrors.huaweicloud.com/debian-security|g' /etc/apt/sources.list\napt update\napt install wget gnupg -y\n\n# add OpenResty source\nwget -qO - https://openresty.org/package/pubkey.gpg | sudo apt-key add -\nsudo apt-get -y install software-properties-common\nsudo add-apt-repository -y \"deb http://openresty.org/package/debian $(lsb_release -sc) openresty\"\nsudo apt-get update\n\n# install etcd\nwget https://github.com/etcd-io/etcd/releases/download/v3.4.13/etcd-v3.4.13-linux-amd64.tar.gz\ntar -xvf etcd-v3.4.13-linux-amd64.tar.gz && \\\n    cd etcd-v3.4.13-linux-amd64 && \\\n    sudo cp -a etcd etcdctl /usr/bin/\n\n# install OpenResty and some compilation tools\nsudo apt-get install -y git openresty curl make openresty-openssl111-dev\n\n# install LuaRocks\ncurl https://raw.githubusercontent.com/apache/apisix/master/utils/linux-install-luarocks.sh -sL | bash -\n\n# start etcd server\nnohup etcd &\n")),Object(s.b)("h2",{id:"mac-osx"},"Mac OSX"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-shell"},"# install OpenResty, etcd and some compilation tools\nbrew install openresty/brew/openresty etcd luarocks curl git\n\n# start etcd server\netcd &\n\n# enable TLS for etcd server\netcd --cert-file=/path/to/cert --key-file=/path/to/pkey --advertise-client-urls https://127.0.0.1:2379\n")))}p.isMDXComponent=!0},216:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||s;return n?r.a.createElement(m,i(i({ref:t},l),{},{components:n})):r.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);