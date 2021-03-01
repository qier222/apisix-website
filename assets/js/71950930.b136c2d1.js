(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{143:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return l}));var a=t(3),r=t(7),i=(t(0),t(216)),c={title:"Running APISIX in AWS with AWS CDK"},o={unversionedId:"aws",id:"aws",isDocsHomePage:!1,title:"Running APISIX in AWS with AWS CDK",description:"\x3c!--",source:"@site/docs/apisix/aws.md",slug:"/aws",permalink:"/docs/apisix/aws",version:"current"},s=[{value:"Architecture",id:"architecture",children:[]},{value:"Generate an AWS CDK project with <code>projen</code>",id:"generate-an-aws-cdk-project-with-projen",children:[]},{value:"update <code>src/main.ts</code>",id:"update-srcmaints",children:[]},{value:"Deploy the APISIX Stack with AWS CDK",id:"deploy-the-apisix-stack-with-aws-cdk",children:[{value:"Configure the upstream nodes",id:"configure-the-upstream-nodes",children:[]}]},{value:"Validation",id:"validation",children:[]},{value:"Clean up",id:"clean-up",children:[]},{value:"Running APISIX in AWS China Regions",id:"running-apisix-in-aws-china-regions",children:[]},{value:"Decouple APISIX and etcd3 on AWS",id:"decouple-apisix-and-etcd3-on-aws",children:[]}],p={toc:s};function l(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/apache/apisix"},"APISIX")," is a cloud-native microservices API gateway, delivering the ultimate performance, security, open source and scalable platform for all your APIs and microservices."),Object(i.b)("h2",{id:"architecture"},"Architecture"),Object(i.b)("p",null,"This reference architecture walks you through building ",Object(i.b)("strong",{parentName:"p"},"APISIX")," as a serverless container API Gateway on top of AWS Fargate with AWS CDK."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/aws-fargate-cdk.png",alt:null})),Object(i.b)("h2",{id:"generate-an-aws-cdk-project-with-projen"},"Generate an AWS CDK project with ",Object(i.b)("inlineCode",{parentName:"h2"},"projen")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ mkdir apisix-aws\n$ cd $_\n$ npx projen new awscdk-app-ts\n")),Object(i.b)("p",null,"update the ",Object(i.b)("inlineCode",{parentName:"p"},".projenrc.js")," with the following content:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"const { AwsCdkTypeScriptApp } = require('projen');\n\nconst project = new AwsCdkTypeScriptApp({\n  cdkVersion: \"1.70.0\",\n  name: \"apisix-aws\",\n  cdkDependencies: [\n    '@aws-cdk/aws-ec2',\n    '@aws-cdk/aws-ecs',\n    '@aws-cdk/aws-ecs-patterns',\n  ]\n});\n\nproject.synth();\n")),Object(i.b)("p",null,"update the project:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"$ npx projen\n")),Object(i.b)("h2",{id:"update-srcmaints"},"update ",Object(i.b)("inlineCode",{parentName:"h2"},"src/main.ts")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"import * as cdk from '@aws-cdk/core';\nimport { Vpc, Port } from '@aws-cdk/aws-ec2';\nimport { Cluster, ContainerImage, TaskDefinition, Compatibility } from '@aws-cdk/aws-ecs';\nimport { ApplicationLoadBalancedFargateService, NetworkLoadBalancedFargateService } from '@aws-cdk/aws-ecs-patterns';\n\nexport class ApiSixStack extends cdk.Stack {\n  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {\n    super(scope, id, props);\n\n    const vpc = Vpc.fromLookup(this, 'VPC', {\n      isDefault: true\n    })\n\n    const cluster = new Cluster(this, 'Cluster', {\n      vpc\n    })\n\n    /**\n     * ApiSix service\n     */\n    const taskDefinition = new TaskDefinition(this, 'TaskApiSix', {\n      compatibility: Compatibility.FARGATE,\n      memoryMiB: '512',\n      cpu: '256'\n    })\n\n    taskDefinition\n      .addContainer('apisix', {\n        image: ContainerImage.fromRegistry('iresty/apisix'),\n      })\n      .addPortMappings({\n        containerPort: 9080\n      })\n\n    taskDefinition\n      .addContainer('etcd', {\n        image: ContainerImage.fromRegistry('gcr.azk8s.cn/etcd-development/etcd:v3.3.12'),\n        // image: ContainerImage.fromRegistry('gcr.io/etcd-development/etcd:v3.3.12'),\n      })\n      .addPortMappings({\n        containerPort: 2379\n      })\n\n    const svc = new ApplicationLoadBalancedFargateService(this, 'ApiSixService', {\n      cluster,\n      taskDefinition,\n    })\n\n    svc.targetGroup.setAttribute('deregistration_delay.timeout_seconds', '30')\n    svc.targetGroup.configureHealthCheck({\n      interval: cdk.Duration.seconds(5),\n      healthyHttpCodes: '404',\n      healthyThresholdCount: 2,\n      unhealthyThresholdCount: 3,\n      timeout: cdk.Duration.seconds(4)\n    })\n\n    /**\n     * PHP service\n     */\n    const taskDefinitionPHP = new TaskDefinition(this, 'TaskPHP', {\n      compatibility: Compatibility.FARGATE,\n      memoryMiB: '512',\n      cpu: '256'\n    })\n\n    taskDefinitionPHP\n      .addContainer('php', {\n        image: ContainerImage.fromRegistry('abiosoft/caddy:php'),\n      })\n      .addPortMappings({\n        containerPort: 2015\n      })\n\n    const svcPHP = new NetworkLoadBalancedFargateService(this, 'PhpService', {\n      cluster,\n      taskDefinition: taskDefinitionPHP,\n      assignPublicIp: true,\n    })\n\n    // allow Fargate task behind NLB to accept all traffic\n    svcPHP.service.connections.allowFromAnyIpv4(Port.tcp(2015))\n    svcPHP.targetGroup.setAttribute('deregistration_delay.timeout_seconds', '30')\n    svcPHP.loadBalancer.setAttribute('load_balancing.cross_zone.enabled', 'true')\n\n    new cdk.CfnOutput(this, 'ApiSixDashboardURL', {\n      value: `http://${svc.loadBalancer.loadBalancerDnsName}/apisix/dashboard/`\n    })\n  }\n}\n\nconst devEnv = {\n  account: process.env.CDK_DEFAULT_ACCOUNT,\n  region: process.env.CDK_DEFAULT_REGION,\n};\n\nconst app = new cdk.App();\n\nnew ApiSixStack(app, 'apisix-stack-dev', { env: devEnv });\n\napp.synth();\n")),Object(i.b)("h2",{id:"deploy-the-apisix-stack-with-aws-cdk"},"Deploy the APISIX Stack with AWS CDK"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ cdk diff\n$ cdk deploy\n")),Object(i.b)("p",null,"On deployment complete, some outputs will be returned:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"Outputs:\napiSix.PhpServiceLoadBalancerDNS5E5BAB1B = apiSi-PhpSe-FOL2MM4TW7G8-09029e095ab36fcc.elb.us-west-2.amazonaws.com\napiSix.ApiSixDashboardURL = http://apiSi-ApiSi-1TM103DN35GRY-1477666967.us-west-2.elb.amazonaws.com/apisix/dashboard/\napiSix.ApiSixServiceLoadBalancerDNSD4E5B8CB = apiSi-ApiSi-1TM103DN35GRY-1477666967.us-west-2.elb.amazonaws.com\napiSix.ApiSixServiceServiceURLF6EC7872 = http://apiSi-ApiSi-1TM103DN35GRY-1477666967.us-west-2.elb.amazonaws.com\n")),Object(i.b)("p",null,"Open the ",Object(i.b)("inlineCode",{parentName:"p"},"apiSix.ApiSixDashboardURL")," from your browser and you will see the login prompt."),Object(i.b)("h3",{id:"configure-the-upstream-nodes"},"Configure the upstream nodes"),Object(i.b)("p",null,"All upstream nodes are running as ",Object(i.b)("strong",{parentName:"p"},"AWS Fargate")," tasks and registered to the ",Object(i.b)("strong",{parentName:"p"},"NLB(Network Load Balancer)")," exposing multiple static IP addresses. We can query the IP addresses by ",Object(i.b)("strong",{parentName:"p"},"nslookup")," the ",Object(i.b)("strong",{parentName:"p"},"apiSix.PhpServiceLoadBalancerDNS5E5BAB1B")," like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ nslookup apiSi-PhpSe-FOL2MM4TW7G8-09029e095ab36fcc.elb.us-west-2.amazonaws.com\nServer:         192.168.31.1\nAddress:        192.168.31.1#53\n\nNon-authoritative answer:\nName:   apiSi-PhpSe-FOL2MM4TW7G8-09029e095ab36fcc.elb.us-west-2.amazonaws.com\nAddress: 44.224.124.213\nName:   apiSi-PhpSe-FOL2MM4TW7G8-09029e095ab36fcc.elb.us-west-2.amazonaws.com\nAddress: 18.236.43.167\nName:   apiSi-PhpSe-FOL2MM4TW7G8-09029e095ab36fcc.elb.us-west-2.amazonaws.com\nAddress: 35.164.164.178\nName:   apiSi-PhpSe-FOL2MM4TW7G8-09029e095ab36fcc.elb.us-west-2.amazonaws.com\nAddress: 44.226.102.63\n")),Object(i.b)("p",null,"Configure the IP addresses returned as your upstream nodes in your ",Object(i.b)("strong",{parentName:"p"},"APISIX")," dashboard followed by the ",Object(i.b)("strong",{parentName:"p"},"Services")," and ",Object(i.b)("strong",{parentName:"p"},"Routes")," configuration. Let's say we have a ",Object(i.b)("inlineCode",{parentName:"p"},"/index.php")," as the URI for the first route for our first ",Object(i.b)("strong",{parentName:"p"},"Service")," from the ",Object(i.b)("strong",{parentName:"p"},"Upstream")," IP addresses."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/aws-nlb-ip-addr.png",alt:null}),"\n",Object(i.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/aws-define-service.png",alt:null}),"\n",Object(i.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/aws-define-route.png",alt:null})),Object(i.b)("h2",{id:"validation"},"Validation"),Object(i.b)("p",null,"OK. Let's test the ",Object(i.b)("inlineCode",{parentName:"p"},"/index.php")," on ",Object(i.b)("inlineCode",{parentName:"p"},"{apiSix.ApiSixServiceServiceURL}/index.php")),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/aws-caddy-php-welcome-page.png",alt:null})),Object(i.b)("p",null,"Now we have been successfully running ",Object(i.b)("strong",{parentName:"p"},"APISIX")," in AWS Fargate as serverless container API Gateway service."),Object(i.b)("h2",{id:"clean-up"},"Clean up"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ cdk destroy\n")),Object(i.b)("h2",{id:"running-apisix-in-aws-china-regions"},"Running APISIX in AWS China Regions"),Object(i.b)("p",null,"update ",Object(i.b)("inlineCode",{parentName:"p"},"src/main.ts")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"  taskDefinition\n    .addContainer('etcd', {\n      image: ContainerImage.fromRegistry('gcr.azk8s.cn/etcd-development/etcd:v3.3.12'),\n      // image: ContainerImage.fromRegistry('gcr.io/etcd-development/etcd:v3.3.12'),\n    })\n    .addPortMappings({\n      containerPort: 2379\n    })\n")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"(read ",Object(i.b)("a",{parentName:"em",href:"https://github.com/iresty/docker-apisix/blob/9a731f698171f4838e9bc0f1c05d6dda130ca89b/example/docker-compose.yml#L18-L19"},"here")," for more reference)")),Object(i.b)("p",null,"Run ",Object(i.b)("inlineCode",{parentName:"p"},"cdk deploy")," and specify your preferred AWS region in China."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# let's say we have another AWS_PROFILE for China regions called 'cn'\n# make sure you have aws configure --profile=cn properly.\n#\n# deploy to NingXia region\n$ cdk deploy --profile cn -c region=cn-northwest-1\n# deploy to Beijing region\n$ cdk deploy --profile cn -c region=cn-north-1\n")),Object(i.b)("p",null,"In the following case, we got the ",Object(i.b)("inlineCode",{parentName:"p"},"Outputs")," returned for ",Object(i.b)("strong",{parentName:"p"},"AWS Ningxia region(cn-northwest-1)"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"Outputs:\napiSix.PhpServiceLoadBalancerDNS5E5BAB1B = apiSi-PhpSe-1760FFS3K7TXH-562fa1f7f642ec24.elb.cn-northwest-1.amazonaws.com.cn\napiSix.ApiSixDashboardURL = http://apiSi-ApiSi-123HOROQKWZKA-1268325233.cn-northwest-1.elb.amazonaws.com.cn/apisix/dashboard/\napiSix.ApiSixServiceLoadBalancerDNSD4E5B8CB = apiSi-ApiSi-123HOROQKWZKA-1268325233.cn-northwest-1.elb.amazonaws.com.cn\napiSix.ApiSixServiceServiceURLF6EC7872 = http://apiSi-ApiSi-123HOROQKWZKA-1268325233.cn-northwest-1.elb.amazonaws.com.cn\n")),Object(i.b)("p",null,"Open the ",Object(i.b)("inlineCode",{parentName:"p"},"apiSix.ApiSixDashboardURL")," URL and log in to configure your ",Object(i.b)("strong",{parentName:"p"},"APISIX")," in AWS China region."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"TBD")),Object(i.b)("h2",{id:"decouple-apisix-and-etcd3-on-aws"},"Decouple APISIX and etcd3 on AWS"),Object(i.b)("p",null,"For high availability and state consistency consideration, you might be interested to decouple the ",Object(i.b)("strong",{parentName:"p"},"etcd3")," as a separate cluster from ",Object(i.b)("strong",{parentName:"p"},"APISIX")," not only for performance but also high availability and fault tolerance yet with highly reliable state consistency."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"TBD")))}l.isMDXComponent=!0},216:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),l=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=l(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),u=a,m=d["".concat(c,".").concat(u)]||d[u]||b[u]||i;return t?r.a.createElement(m,o(o({ref:n},p),{},{components:t})):r.a.createElement(m,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var p=2;p<i;p++)c[p]=t[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);