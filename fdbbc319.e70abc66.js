(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{98:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return n})),i.d(t,"metadata",(function(){return s})),i.d(t,"toc",(function(){return c})),i.d(t,"default",(function(){return b}));var o=i(3),a=i(7),r=(i(0),i(106)),n={id:"contributor-guide",title:"Contributor Guide"},s={unversionedId:"contributor-guide",id:"contributor-guide",isDocsHomePage:!1,title:"Contributor Guide",description:"Please fee free to report bugs, submit suggestions, or submit PRs according to this guide.",source:"@site/docs/contributor-guide.md",slug:"/contributor-guide",permalink:"/contributor-guide",editUrl:"https://github.com/apache/apisix-website/edit/master/website/docs/contributor-guide.md",version:"current",lastUpdatedBy:"\u741a\u81f4\u8fdc",lastUpdatedAt:1612759427,sidebar:"docs",previous:{title:"Subscribe Guide",permalink:"/"},next:{title:"Committer Guide",permalink:"/committer-guide"}},c=[{value:"Submit an issue",id:"submit-an-issue",children:[]},{value:"Developer Flow",id:"developer-flow",children:[{value:"Fork repo",id:"fork-repo",children:[]},{value:"Choose an issue",id:"choose-an-issue",children:[]},{value:"Create your branch",id:"create-your-branch",children:[]},{value:"Coding",id:"coding",children:[]},{value:"Submit PR",id:"submit-pr",children:[]},{value:"Delete branch",id:"delete-branch",children:[]},{value:"Notice",id:"notice",children:[]}]}],l={toc:c};function b(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Please fee free to report bugs, submit suggestions, or submit PRs according to this guide."),Object(r.b)("h2",{id:"submit-an-issue"},"Submit an issue"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Before submitting your issues, please go through a comprehensive search to make sure the problem cannot be solved just by searching.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Check the Issue List to make sure the problem is not repeated.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Create a new issue and choose the type of issue.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Define the issue with a clear and descriptive title.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Fill in necessary information according to the template.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Choose a label after issue created.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Please pay attention to your issue, you may need provide more information during discussion."))),Object(r.b)("h2",{id:"developer-flow"},"Developer Flow"),Object(r.b)("h3",{id:"fork-repo"},"Fork repo"),Object(r.b)("p",null,"Fork the Apache APISIX repo to your own repo to work, then setting proper upstream."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"git remote add upstream https://github.com/apache/apisix.git\n")),Object(r.b)("h3",{id:"choose-an-issue"},"Choose an issue"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Please choose your target issue. If it is a new issue discovered or a new function enhancement to offer, please create an issue and set the right label for it.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"After choosing the relevant issue, please reply with a deadline to indicate that you are working on it.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Find a mentor from the Team page and your mentor will give you feedback about your PR or issue in time."))),Object(r.b)("h3",{id:"create-your-branch"},"Create your branch"),Object(r.b)("p",null,"Switch to your forked master branch, pull codes from upstream, then create a new branch."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"$ git checkout master\n$ git pull upstream master\n$ git checkout -b IssueNo\n")),Object(r.b)("p",null,"Notice: We will merge PR using squash, commit logs will be different form upstream if you use one older branch."),Object(r.b)("h3",{id:"coding"},"Coding"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Please obey the Code of Conduct during the process of development and finish the check before submitting the pull request.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Then push codes to your fork repo."))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"$ git add modified-file-names\n$ git commit -m 'commit message'\n$ git push origin issueNo\n")),Object(r.b)("h3",{id:"submit-pr"},"Submit PR"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Send a pull request to the master branch.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"The mentor will do codes review before discussing some details (including the design, the implementation and the performance) with you.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Also make sure that the pull request title has a semantic prefix like ",Object(r.b)("inlineCode",{parentName:"p"},"fix:")," or ",Object(r.b)("inlineCode",{parentName:"p"},"feat:")," or any other ",Object(r.b)("a",{parentName:"p",href:"https://github.com/commitizen/conventional-commit-types/blob/master/index.json"},"conventional commit types"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Then congratulate to you to be an official contributor of Apache APISIX."))),Object(r.b)("h3",{id:"delete-branch"},"Delete branch"),Object(r.b)("p",null,"You can delete the remote branch (origin/IssueNo) and the local branch (IssueNo) associated with the remote branch (origin/IssueNo) after the mentor merged the PR into the master branch."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"$ git checkout master\n$ git branch -d IssueNo\n$ git push origin --delete issueNo\n")),Object(r.b)("h3",{id:"notice"},"Notice"),Object(r.b)("p",null,"Please note that in order to show your ID in the contributor list, please DO NOT forget to set the configurations below:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},'$ git config --global user.name "username"\n$ git config --global user.email "mail address"\n')))}b.isMDXComponent=!0}}]);