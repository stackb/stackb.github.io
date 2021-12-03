(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{108:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var b=i.a.createContext({}),p=function(e){var t=i.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(a),m=n,u=s["".concat(o,".").concat(m)]||s[m]||d[m]||r;return a?i.a.createElement(u,l(l({ref:t},b),{},{components:a})):i.a.createElement(u,l({ref:t},b))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var b=2;b<r;b++)o[b]=a[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},81:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(2),i=a(6),r=(a(0),a(108)),o={id:"starlark-language-server",title:"Starlark Language Server"},l={unversionedId:"vscode/starlark-language-server",id:"vscode/starlark-language-server",isDocsHomePage:!1,title:"Starlark Language Server",description:"The Starlark Language Server component provides intellisense features for BUILD, BUILD.bazel, WORKSPACE, *.bzl and related files.",source:"@site/docs/vscode/starlark-language-server.md",slug:"/vscode/starlark-language-server",permalink:"/docs/next/vscode/starlark-language-server",editUrl:"https://github.com/stackb/bazel-stack-vscode/edit/master/docs/docs/vscode/starlark-language-server.md",version:"current",sidebar:"docs",previous:{title:"Starlark Debugger",permalink:"/docs/next/vscode/debugger"},next:{title:"Remote Cache",permalink:"/docs/next/vscode/remote-cache"}},c=[{value:"Configuration",id:"configuration",children:[]},{value:"Codelens",id:"codelens",children:[]},{value:"Hover",id:"hover",children:[]},{value:"Completion",id:"completion",children:[]},{value:"Definition",id:"definition",children:[{value:"Jump-to-label",id:"jump-to-label",children:[]}]},{value:"Syntax Highlighting",id:"syntax-highlighting",children:[]}],b={rightToc:c};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The Starlark Language Server component provides intellisense features for ",Object(r.b)("inlineCode",{parentName:"p"},"BUILD"),", ",Object(r.b)("inlineCode",{parentName:"p"},"BUILD.bazel"),", ",Object(r.b)("inlineCode",{parentName:"p"},"WORKSPACE"),", ",Object(r.b)("inlineCode",{parentName:"p"},"*.bzl")," and related files."),Object(r.b)("p",null,"A different feature set is provided for ",Object(r.b)("inlineCode",{parentName:"p"},".bazelrc")," files."),Object(r.b)("h2",{id:"configuration"},"Configuration"),Object(r.b)("p",null,"The language server is configured automatically, no specific configuration is required.  To increase logging level, add ",Object(r.b)("inlineCode",{parentName:"p"},"--log_level=info")," to the ",Object(r.b)("inlineCode",{parentName:"p"},"bsv.bzl.lsp.command")," setting."),Object(r.b)("p",null,"You can enable/disable various codelens actions via the settings if you find them overly intrusive."),Object(r.b)("h2",{id:"codelens"},"Codelens"),Object(r.b)("p",null,"Codelens actions are the little links that appear above rule declarations:"),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/50580/144455265-a5e60a26-179a-46a1-b4e6-f498cc62c4da.png",alt:"image"}))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"//example/routeguide:routeguide_proto")," the codelens with the full label will\ncopy the bazel label to the clipboard.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"build")," will run ",Object(r.b)("inlineCode",{parentName:"p"},"bazel build LABEL")," in an integrated terminal.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"test")," will run ",Object(r.b)("inlineCode",{parentName:"p"},"bazel test LABEL")," in an integrated terminal.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"run")," will run ",Object(r.b)("inlineCode",{parentName:"p"},"bazel run LABEL")," in an integrated terminal.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"debug")," will launch a debug session with ",Object(r.b)("inlineCode",{parentName:"p"},"bazel build LABEL --experimental_skylark_debug"),".")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"codesearch")," will open up the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/vscode/codesearch"}),"codesearch")," webview that will\nsearch within the bazel query defined by ",Object(r.b)("inlineCode",{parentName:"p"},"deps(LABEL)"),".")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"browse")," will open a browser tab in the Bezel UI at the corresponding rule."))),Object(r.b)("h2",{id:"hover"},"Hover"),Object(r.b)("p",null,"Hover over any builtin rule/function/provider/attribute to get inline documentation:"),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/50580/144456887-8dc14482-e98e-4caa-bb5d-87c21f2e9f22.png",alt:"image"}))),Object(r.b)("p",null,"Hover over any custom starlark rule to get inline documentation:"),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Hover documentation for custom/third-party rules is a subscription feature."))),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/50580/144457202-f6143170-117f-4ba2-b565-0520234c24fb.png",alt:"image"}))),Object(r.b)("p",null,"Hover over flags in a ",Object(r.b)("inlineCode",{parentName:"p"},".bazelrc")," file to get flag documentation:"),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/50580/144457787-dc1354e5-76a1-48d9-a68d-510082b79568.png",alt:"image"}))),Object(r.b)("p",null,"Click on the provided link to go to the bazel docs, or perform a codesearch for\nthe flag in ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://cs.opensource.google/bazel/bazel"}),"https://cs.opensource.google/bazel/bazel"),"."),Object(r.b)("h2",{id:"completion"},"Completion"),Object(r.b)("p",null,"Type to get autocompletion for builtin rules:"),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Autocompletion for custom and third-party starlark rules (ones defined in .bzl\nfiles within your repo, or an external repository) is a subscription feature."))),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/50580/142479223-e1c9161c-ced8-4c2f-a0eb-998e802a5468.gif",alt:"image"}))),Object(r.b)("p",null,"Add attributes at the end of the rule to get autocompletion for rule attributes."),Object(r.b)("p",null,"Type ",Object(r.b)("inlineCode",{parentName:"p"},'""')," in a load statement to get autocompletion of available load symbols:"),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Completion for load symbols is a subscription feature."))),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/50580/144459351-6508f9f5-1a1d-41b4-aac7-66c518024d57.png",alt:"image"}))),Object(r.b)("p",null,"Completion for flags is provided within ",Object(r.b)("inlineCode",{parentName:"p"},".bazelrc")," files:"),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/50580/144462097-85d8f603-11c8-4a85-a6c8-894572fc84cc.png",alt:"image"}))),Object(r.b)("h2",{id:"definition"},"Definition"),Object(r.b)("p",null,"Type ",Object(r.b)("inlineCode",{parentName:"p"},"F12")," in a bazel label (string literal) to jump to the definition of the label:"),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/50580/144460690-53d3f7e7-0e49-40c3-8306-b23cde9e78f2.gif",alt:"lsp-label-jump-to-definition"}))),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"F12")," over a rule name to jump the file where the symbol is declared:"),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Jump-to-definition for custom/third-party rules is a subscription feature."))),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/50580/144461590-c29d7d18-68e0-471d-a340-7ff7dd81cf3b.gif",alt:"jump-to-rule-definition"}))),Object(r.b)("h3",{id:"jump-to-label"},"Jump-to-label"),Object(r.b)("p",null,"Use the ",Object(r.b)("inlineCode",{parentName:"p"},"bsv.bzl.goToLabel")," command (mac: ",Object(r.b)("inlineCode",{parentName:"p"},"\u2318+;"),"; just below the familiar ",Object(r.b)("inlineCode",{parentName:"p"},"\u2318+p"),"\naccelerator) to pop open an input box.  Enter the bazel label to navigate to and\npress ",Object(r.b)("inlineCode",{parentName:"p"},"ENTER"),":"),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/50580/144545241-0f92f222-a916-491f-9c9b-9a5fe0ae5735.gif",alt:"jump-to-label"}))),Object(r.b)("h2",{id:"syntax-highlighting"},"Syntax Highlighting"),Object(r.b)("p",null,"Syntax highlighting is provided for ",Object(r.b)("inlineCode",{parentName:"p"},"bazel")," and ",Object(r.b)("inlineCode",{parentName:"p"},"starlark")," files."))}p.isMDXComponent=!0}}]);