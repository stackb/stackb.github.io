(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),i=n(6),o=(n(0),n(108)),c={id:"invocations",title:"Invocations"},r={unversionedId:"vscode/invocations",id:"vscode/invocations",isDocsHomePage:!1,title:"Invocations",description:"The Invocations component manages how build and test codelens actions are",source:"@site/docs/vscode/invocations.md",slug:"/vscode/invocations",permalink:"/docs/next/vscode/invocations",editUrl:"https://github.com/stackb/bazel-stack-vscode/edit/master/docs/docs/vscode/invocations.md",version:"current",sidebar:"docs",previous:{title:"Build Events",permalink:"/docs/next/vscode/build-events"},next:{title:"Installation",permalink:"/docs/next/cli/installation"}},l=[{value:"Configuration",id:"configuration",children:[]},{value:"Usage",id:"usage",children:[]}],s={rightToc:l};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The Invocations component manages how ",Object(o.b)("inlineCode",{parentName:"p"},"build")," and ",Object(o.b)("inlineCode",{parentName:"p"},"test")," codelens actions are\nperformed, and provides access to revent invocations."),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/50580/144542715-ec4ba7eb-3018-4833-b400-e6013f25ac8c.png",alt:"image"}))),Object(o.b)("p",null,"Use the settings to configure:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"invokeWithBuildEventStreaming"),": whether to launch ",Object(o.b)("inlineCode",{parentName:"li"},"build")," and ",Object(o.b)("inlineCode",{parentName:"li"},"test"),"\ninvocations in an integrated terminal or via the gRPC streaming API (see\nbelow)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"buildEventPublishAllActions"),": if enabled with\n",Object(o.b)("inlineCode",{parentName:"li"},"invokeWithBuildEventStreaming"),", sets the ",Object(o.b)("inlineCode",{parentName:"li"},"--build_event_publish_all_actions"),"\nflag."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"hideOutputPanelOnSuccess"),": if true, a ",Object(o.b)("inlineCode",{parentName:"li"},"build")," invocation will open a terminal\noutput window while running.  If the operation succeeds, the window is\nautomatically closed.")),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"Clicking on a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"starlark-language-server#codelens"}),"build codelens action link")," operates in one of two modes:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"In the default mode, an integrated terminal is launched that calls ",Object(o.b)("inlineCode",{parentName:"p"},"bazel build //:gazelle-protobuf"),":"),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/50580/144543656-4cc9846a-d7ff-4488-abec-2912d080c5ff.png",alt:"image"})))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"In streaming mode, no integrated terminal is launched; the command is run\ndirectly via bazel's gRPC command API, and the build events are streamed back\ninto vscode:"),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/50580/144543967-f2314865-61f4-4480-9621-d2a02c83ddd8.png",alt:"image"}))))),Object(o.b)("p",null,'Note the build events in the tree view on the left: A select subset of\n"interesting" events are surfaced here.'),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The last build/test command is saved in your workspace; invoking the\n",Object(o.b)("inlineCode",{parentName:"p"},"bsv.bzl.redo")," command (mac: ",Object(o.b)("inlineCode",{parentName:"p"},"shift+\u2318+space"),') allow you to quickly "slap" the\nlast command; use it to rapidly iterate on build/test.'))),Object(o.b)("p",null,"You can also use the ",Object(o.b)("strong",{parentName:"p"},"Recent Invocations"),' tree item to "replay" recent\ninvocations, or visit the build results UI for that item.'),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/50580/144544439-03cf2c49-2258-4f2d-a0d0-2fafc331f485.png",alt:"image"}))),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Streaming mode bypasses the typical bazel C++ frontend completely and performs\nindependent parsing of your ",Object(o.b)("inlineCode",{parentName:"p"},".bazelrc"),' files.  In certain cases, this can lead\nto slight differences in the options passed to the bazel server.  If you have\ncomplex bazelrc files, it might cause "thrash" (incrementality degradation)\nswitching back and forth form the command line and VSCode.'))))}b.isMDXComponent=!0},108:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=b(n),m=a,u=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?i.a.createElement(u,r(r({ref:t},s),{},{components:n})):i.a.createElement(u,r({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,c[1]=r;for(var s=2;s<o;s++)c[s]=n[s];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);