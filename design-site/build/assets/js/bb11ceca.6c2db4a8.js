"use strict";(self.webpackChunkpipeline_ui_website=self.webpackChunkpipeline_ui_website||[]).push([[2606],{24134:function(n,e,t){t.r(e),t.d(e,{Tracer:function(){return h},assets:function(){return m},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return c},metadata:function(){return b},toc:function(){return d}});var p=t(87462),s=t(63366),a=t(67294),u=t(3905),o={int:{pushes:{number:1,type:"uint64"},pops:{number:0,type:"uint64"},op:function(n,e){n.stack.push(parseInt(e[0]))},inline:!0},"+":{pushes:{number:1,type:"uint64"},pops:{number:2,type:"uint64"},op:function(n,e){n.stack.push(e[0]+e[1])},inline:!1},"-":{pushes:{number:1,type:"uint64"},pops:{number:2,type:"uint64"},op:function(n,e){n.stack.push(e[0]-e[1])},inline:!1},"*":{pushes:{number:1,type:"uint64"},pops:{number:2,type:"uint64"},op:function(n,e){n.stack.push(e[0]*e[1])},inline:!1},"/":{pushes:{number:1,type:"uint64"},pops:{number:2,type:"uint64"},op:function(n,e){n.stack.push(Math.round(e[0]/e[1]))},inline:!1},byte:{pushes:{number:1,type:"any"},pops:{number:0,type:"string"},op:function(n,e){e[0]=e[0].replace(/"/g,""),n.stack.push(e[0])},inline:!0},store:{pushes:{number:0,type:"any"},pops:{number:1,type:"any"},op:function(n,e){var t=parseInt(e[1]);n.storage[t]=e[0]},inline:!0},load:{pushes:{number:1,type:"any"},pops:{number:0,type:"any"},op:function(n,e){var t=parseInt(e[0]);n.stack.push(n.storage[t])},inline:!0},app_local_get:{pushes:{number:1,type:"any"},pops:{number:2,type:"any"},op:function(n,e){n.stack.push(n.accounts[e[0]][e[1]])},inline:!1},app_global_get:{pushes:{number:1,type:"any"},pops:{number:1,type:"any"},op:function(n,e){n.stack.push(n.app_global[e[0]])},inline:!1},app_local_put:{pushes:{number:0,type:"any"},pops:{number:3,type:"any"},op:function(n,e){var t=e[0],p=e[1],s=e[2];n.accounts[t][p]=s},inline:!1},app_global_put:{pushes:{number:0,type:"any"},pops:{number:2,type:"any"},op:function(n,e){n.app_global[e[0]]=e[1]},inline:!1},"!":{pushes:{number:1,type:"uint64"},pops:{number:1,type:"uint64"},op:function(n,e){n.stack.push(!e[0])},inline:!1},"!=":{pushes:{number:1,type:"uint64"},pops:{number:2,type:"uint64"},op:function(n,e){e[0]!==e[1]?n.stack.push(1):n.stack.push(0)},inline:!1},"==":{pushes:{number:1,type:"uint64"},pops:{number:2,type:"uint64"},op:function(n,e){e[0]===e[1]?n.stack.push(1):n.stack.push(0)},inline:!1},"&&":{pushes:{number:1,type:"uint64"},pops:{number:2,type:"uint64"},op:function(n,e){e[0]&&e[1]?n.stack.push(1):n.stack.push(0)},inline:!1},"||":{pushes:{number:1,type:"uint64"},pops:{number:2,type:"uint64"},op:function(n,e){e[0]||e[1]?n.stack.push(1):n.stack.push(0)},inline:!1},"<":{pushes:{number:1,type:"uint64"},pops:{number:2,type:"uint64"},op:function(n,e){e[0]<e[1]?n.stack.push(1):n.stack.push(0)},inline:!1},">":{pushes:{number:1,type:"uint64"},pops:{number:2,type:"uint64"},op:function(n,e){e[0]>e[1]?n.stack.push(1):n.stack.push(0)},inline:!1},"<=":{pushes:{number:1,type:"uint64"},pops:{number:2,type:"uint64"},op:function(n,e){e[0]<=e[1]?n.stack.push(1):n.stack.push(0)},inline:!1},">=":{pushes:{number:1,type:"uint64"},pops:{number:2,type:"uint64"},op:function(n,e){e[0]>=e[1]?n.stack.push(1):n.stack.push(0)},inline:!1},global:{pushes:{number:1,type:"any"},pops:{number:0,type:"undefined"},op:function(n,e){n.stack.push(t.g[e[0]])},inline:!0},b:{pushes:{number:0,type:"undefined"},pops:{number:0,type:"undefined"},op:function(n,e){n.branch=!0,n.branchTo=e[0].replace(/"/g,"")},inline:!0},bnz:{pushes:{number:0,type:"undefined"},pops:{number:1,type:"uint64"},op:function(n,e){e[0]>0&&(n.branch=!0,n.branchTo=e[1].replace(/"/g,""))},inline:!0},bz:{pushes:{number:0,type:"undefined"},pops:{number:1,type:"uint64"},op:function(n,e){0!==e[0]&&!1!==e[0]||(n.branch=!0,n.branchTo=e[1].replace(/"/g,""))},inline:!0},return:{pushes:{number:0,type:"undefined"},pops:{number:0,type:"undefined"},op:function(n,e){n.branch=!0,n.branchTo=""},inline:!1},pop:{pushes:{number:0,type:"undefined"},pops:{number:1,type:"any"},op:function(n,e){n.stack.pop()},inline:!1},txn:{pushes:{number:1,type:"any"},pops:{number:0,type:"undefined"},op:function(n,e){n.stack.push(n.txns[0][e[0]])},inline:!0},swap:{pushes:{number:2,type:"any"},pops:{number:2,type:"any"},op:function(n,e){var t=e[1],p=e[0];n.stack.push(t),n.stack.push(p)},inline:!1}};function i(n){var e="",t="",p="",s={stack:[],index:0,global:{Round:12345},txns:[{amount:3}],app_global:{depositAmount:1e10,staked:95e8},accounts:[{amt:4e9}],storage:[],branch:!1,branchTo:""},a='byte "staked"\napp_global_get\nint 0\nbyte "amt"\napp_local_get\n/\nstore 3\nbyte "depositAmount"\napp_global_get\nload 3\n/\nstore 1\nload 1\nint 0\nbyte "amt"\napp_local_get\n+\nstore 0\ntxn amount\nbyte "b"\nswap\n//return\nint 1\nbnz test\nint 7\ntest:\nbyte "hello"\n';n.length&&(a=n);var u=["#","//"];function i(n,t){void 0===t&&(t="white"),e+='<p style="color:'+t+'">'+n+"</p>",document.getElementById("log").innerHTML=e}function r(n,e){void 0===e&&(e="white"),t+='<p style="color:'+e+'">'+n+"</p>",document.getElementById("stackLog").innerHTML=t}function c(n,e){void 0===e&&(e="white"),p+='<p style="color:'+e+'">'+n+"</p>",document.getElementById("teal").innerHTML=p}!function(n){e="",t="";for(var p,a,l=(p=n.split("\n"),a=[],p.forEach((function(n){var e=!0;u.forEach((function(t){(n.includes(t)||""===n)&&(e=!1)})),e&&a.push(n)})),a),b=s.index;b<l.length;b++){var m=l[b];if(c(m,"yellow"),s.branch)m===s.branchTo+":"&&(s.branch=!1);else{var d=(m=m.trimEnd()).split(" "),h=d[0];if(!h.includes(":")){var y=o[h].pops.number,k=(o[h].pops.type,[]);if(o[h].inline){if(y>0){for(var f=0;f<y;f++)k.push(s.stack.pop());k.reverse()}d.shift(),k=[].concat(k,d),o[h].op(s,k)}else{for(var g=0;g<y;g++)k.push(s.stack.pop());k.reverse(),o[h].op(s,k)}}}i(s.storage.length?s.storage:"empty","aqua"),r(s.stack.length?s.stack:"empty",s.stack.length?"red":"yellow")}}(a)}var r=["components"],c={},l="Stack Trace",b={unversionedId:"TEAL Contracts Lab/stacktrace",id:"TEAL Contracts Lab/stacktrace",title:"Stack Trace",description:"Stack Trace is a work-in-progress open-source project to create an easy-to-use JavaScript TEAL interpreter and debugger. Stack trace currently supports 29 TEAL opcodes. Instructions and source code can be found on Github",source:"@site/docs/TEAL Contracts Lab/stacktrace.mdx",sourceDirName:"TEAL Contracts Lab",slug:"/TEAL Contracts Lab/stacktrace",permalink:"/docs/TEAL Contracts Lab/stacktrace",draft:!1,editUrl:"https://github.com/headline-design/pipeline-ui/blob/main/design-site/docs/TEAL Contracts Lab/stacktrace.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Demo",permalink:"/docs/TEAL Contracts Lab/demo"},next:{title:"Developer API (Sandbox)",permalink:"/docs/api"}},m={},d=[];function h(){return(0,a.useEffect)((function(){return i("")})),(0,u.kt)("div",{align:"center",style:{"background-color":"black !important"}},(0,u.kt)("h1",null,"Stack Trace"),(0,u.kt)("textarea",{id:"myTeal",placeholder:"paste some TEAL here!",style:{size:20}}),(0,u.kt)("button",{onClick:function(){i(document.getElementById("myTeal").value)}},"Compile and Trace"),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("td",null,"TEAL"),(0,u.kt)("td",null,"Stack"),(0,u.kt)("td",null,"Storage")),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",{id:"teal"}),(0,u.kt)("td",{id:"stackLog"}),(0,u.kt)("td",{id:"log"})))))}var y={toc:d,Tracer:h};function k(n){var e=n.components,t=(0,s.Z)(n,r);return(0,u.kt)("wrapper",(0,p.Z)({},y,t,{components:e,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"stack-trace"},"Stack Trace"),(0,u.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,u.kt)("div",{parentName:"div",className:"admonition-heading"},(0,u.kt)("h5",{parentName:"div"},(0,u.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,u.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,u.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,u.kt)("div",{parentName:"div",className:"admonition-content"},(0,u.kt)("p",{parentName:"div"},"Stack Trace is a work-in-progress open-source project to create an easy-to-use JavaScript TEAL interpreter and debugger. Stack trace currently supports 29 TEAL opcodes. Instructions and source code can be found on ",(0,u.kt)("a",{parentName:"p",href:"https://github.com/headline-design/stack-trace"},"Github")))),(0,u.kt)(h,{mdxType:"Tracer"}))}k.isMDXComponent=!0}}]);