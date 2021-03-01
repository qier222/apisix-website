(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{194:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return s}));var r=a(3),n=a(7),o=(a(0),a(216)),c={title:"Install Apache APISIX from Helm Charts",author:"Chao Zhang",authorURL:"https://github.com/tokers",authorImageURL:"https://avatars.githubusercontent.com/u/10428333?s=400&u=f48ef50c5621a1616a3ede50221547e34270e061&v=4"},p={permalink:"/blog/2021/02/26/install-apache-apisix-from-helm-charts",source:"@site/blog/2021-02-26-install-apache-apisix-from-helm-charts.md",description:"@tokers, Apache APISIX Committer from Shenzhen Zhiliu Technology Co.",date:"2021-02-26T00:00:00.000Z",tags:[],title:"Install Apache APISIX from Helm Charts",readingTime:.97,truncated:!1,nextItem:{title:"Stable Product Delivery with Cypress",permalink:"/blog/2021/02/08/stable-product-delivery-with-cypress"}},i=[{value:"How To Use",id:"how-to-use",children:[]},{value:"See Also",id:"see-also",children:[]}],l={toc:i};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("a",{parentName:"p",href:"https://github.com/tokers"},"@tokers"),", Apache APISIX Committer from ",Object(o.b)("a",{parentName:"p",href:"https://www.apiseven.com/"},"Shenzhen Zhiliu Technology Co.")),Object(o.b)("p",{parentName:"blockquote"},"Source:"),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/apache/apisix"},"https://github.com/apache/apisix")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-helm-chart"},"https://github.com/apache/apisix-helm-chart")))),Object(o.b)("p",null,"A few days ago, ",Object(o.b)("a",{parentName:"p",href:"https://www.apiseven.com/"},"Zhiliu Inc")," released an online Helm Charts repository. Users can easily install Apache APISIX, Apache apisix-dashboard and Apache apisix-ingress-controller from it (rather than cloning the corresponding project in advance)."),Object(o.b)("h2",{id:"how-to-use"},"How To Use"),Object(o.b)("p",null,"Just a few steps to install Apache APISIX"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Add the repository and fetch the update"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"$ helm repo add apisix https://charts.apiseven.com\n$ helm repo update\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Check out the available charts in repository"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"$ helm search repo apisix\n\nNAME                    CHART VERSION   APP VERSION     DESCRIPTION\napisix/apisix           0.1.2           2.1.0           A Helm chart for Apache APISIX\napisix/apisix-dashboard 0.1.0           2.3.0           A Helm chart for Apache APISIX Dashboard\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Install Apache APISIX to your Kubernetes cluster"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},'$ helm install apisix-gw apisix/apisix --namespace default\n\nNAME: apisix-gw\nLAST DEPLOYED: Fri Feb 19 11:34:14 2021\nNAMESPACE: default\nSTATUS: deployed\nREVISION: 1\nTEST SUITE: None\nNOTES:\n1. Get the application URL by running these commands:\n  export NODE_PORT=$(kubectl get --namespace default -o jsonpath="{.spec.ports[0].nodePort}" services apisix-gw-gateway)\n  export NODE_IP=$(kubectl get nodes --namespace default -o jsonpath="{.items[0].status.addresses[0].address}")\n  echo http://$NODE_IP:$NODE_PORT\n')))),Object(o.b)("h2",{id:"see-also"},"See Also"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-helm-chart"},"https://github.com/apache/apisix-helm-chart"))))}s.isMDXComponent=!0},216:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),s=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},b=function(e){var t=s(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),b=s(a),u=r,m=b["".concat(c,".").concat(u)]||b[u]||h[u]||o;return a?n.a.createElement(m,p(p({ref:t},l),{},{components:a})):n.a.createElement(m,p({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var l=2;l<o;l++)c[l]=a[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);