(self.webpackChunkpipeline_ui_website=self.webpackChunkpipeline_ui_website||[]).push([[6606],{52862:function(n,t,e){"use strict";e.r(t),e.d(t,{BrowserOnlyButton:function(){return k},assets:function(){return g},contentTitle:function(){return p},default:function(){return A},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return h}});var o=e(87462),l=e(63366),r=(e(67294),e(3905)),s=(e(35666),e(10748)),i=e(55182),a=e(25108),u=["components"],d={},p="AlgoSignerButton",c={unversionedId:"AlgoComponents/AlgoSignerButton",id:"AlgoComponents/AlgoSignerButton",title:"AlgoSignerButton",description:"A button to connect to AlgoSigner. Checks for installation of AlgoSigner Google Chrome extension and upon success, returns the first wallet address.",source:"@site/docs/AlgoComponents/AlgoSignerButton.mdx",sourceDirName:"AlgoComponents",slug:"/AlgoComponents/AlgoSignerButton",permalink:"/docs/AlgoComponents/AlgoSignerButton",draft:!1,editUrl:"https://github.com/headline-design/pipeline-ui/blob/main/design-site/docs/AlgoComponents/AlgoSignerButton.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AlgoSendButton",permalink:"/docs/AlgoComponents/AlgoSendButton"},next:{title:"AlgoWCButton",permalink:"/docs/AlgoComponents/AlgoWCButton"}},g={};function k(){return(0,r.kt)(s.Z,{fallback:(0,r.kt)("p",null,"Some Fallback Content"),mdxType:"BrowserOnly"},(function(){var n=e(84332).Cs,t=e(84332).B_;return(0,r.kt)(n,{wallet:t.init(),mdxType:"AlgoSignerButton"})}))}var m,h=[{value:"Accessing returned address",id:"accessing-returned-address",level:2},{value:"Use Example",id:"use-example",level:2},{value:"Props",id:"props",level:3}],f=(m="AlgoSignerButton",{BrowserOnlyButton:k,toc:h});function A(n){var t=n.components,e=(0,l.Z)(n,u);return(0,r.kt)("wrapper",(0,o.Z)({},f,e,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"algosignerbutton"},"AlgoSignerButton"),(0,r.kt)("p",null,"A button to connect to AlgoSigner. Checks for installation of AlgoSigner Google Chrome extension and upon success, returns the first wallet address."),(0,r.kt)(k,{mdxType:"BrowserOnlyButton"}),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"accessing-returned-address"},"Accessing returned address"),(0,r.kt)("p",null,"The returned address can be accessed several different ways. Setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"context")," prop to ",(0,r.kt)("inlineCode",{parentName:"p"},"{this}")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"returnTo")," prop to a ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," key (as string) will return the address directly to your parent component's state without the need for additional callback or event handler code. The address can also be accessed with ",(0,r.kt)("inlineCode",{parentName:"p"},"Pipeline.address"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"componentDidMount() {\n      this.interval = setInterval(() => this.setState({address: Pipeline.address}), 1000);\n    }\n")),(0,r.kt)("p",null,"or with an ",(0,r.kt)("inlineCode",{parentName:"p"},"onChange")," handler:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"handleChange = (value) =>{\n    this.setState({myAddress: value})\n  }\n\n  render(){\n    return <AlgoSignerButton onChange={this.handleChange}/>\n  }\n")),(0,r.kt)("h2",{id:"use-example"},"Use Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import React, { Component } from 'react';\nimport { AlgoSignerButton, Pipeline} from 'pipeline-ui';\n\n\nclass TestButton extends Component {\n\n  constructor(props) {\n    super(props);\n    this.state = {\n      Algaddress: \"\"\n    }\n  }\n  \n  myAlgoWallet = Pipeline.init();\n\n  render() {\n    return <div>\n      <AlgoSignerButton \n            context={this} \n            returnTo={\"Algaddress\"} \n            />\n      <h1>{this.state.Algaddress}</h1>\n    </div>\n  }\n}\n\nexport default TestButton;\n")),(0,r.kt)("h3",{id:"props"},"Props"),(0,r.kt)(i.Z,{mdxType:"Table"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Prop"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Default"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"context"),(0,r.kt)("td",null,"reference"),(0,r.kt)("td",null),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"returnTo"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"empty string"),(0,r.kt)("td",null,"key in state to return fetched address")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"onChange"),(0,r.kt)("td",null,"function"),(0,r.kt)("td",null),(0,r.kt)("td",null,"enables callback (see example above)")))))}A.isMDXComponent=!0},36563:function(){},80950:function(){},46601:function(){},89214:function(){},8623:function(){},7748:function(){},85568:function(){},56619:function(){},77108:function(){},52361:function(){},94616:function(){}}]);