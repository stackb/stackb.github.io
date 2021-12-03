(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{108:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,f=b["".concat(l,".").concat(d)]||b[d]||p[d]||a;return n?o.a.createElement(f,c(c({ref:t},s),{},{components:n})):o.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var s=2;s<a;s++)l[s]=n[s];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(6),a=(n(0),n(108)),l={id:"build-events",title:"Build Events"},c={unversionedId:"vscode/build-events",id:"version-1.8.x/vscode/build-events",isDocsHomePage:!1,title:"Build Events",description:"The Build Events component configures the Build Event Protocol support.",source:"@site/versioned_docs/version-1.8.x/vscode/build-events.md",slug:"/vscode/build-events",permalink:"/docs/vscode/build-events",editUrl:"https://github.com/stackb/bazel-stack-vscode/edit/master/docs/versioned_docs/version-1.8.x/vscode/build-events.md",version:"1.8.x",sidebar:"version-1.8.x/docs",previous:{title:"Code Search",permalink:"/docs/vscode/codesearch"},next:{title:"Invocations",permalink:"/docs/vscode/invocations"}},i=[],s={rightToc:i};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The Build Events component configures the Build Event Protocol support."),Object(a.b)("p",null,"The main purpose here is the ",Object(a.b)("strong",{parentName:"p"},"Usage")," item that copies the build event flags\nthat you can use to stream build events from your terminal to the Build Results\nUI."),Object(a.b)("p",null,"By default, this is ",Object(a.b)("inlineCode",{parentName:"p"},"--bes_backend=grpc://localhost:8085\n--bes_results_url=http://localhost:8085/pipeline"),".  Therefore, if you'd like to\nexamine the build events for any given build locally, run the following command:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"bazel build //:gazelle-protobuf --bes_backend=grpc://localhost:8085 --bes_results_url=http://localhost:8085/pipeline\n")),Object(a.b)("p",null,"Preferably, this can go in your ",Object(a.b)("inlineCode",{parentName:"p"},".bazelrc"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bazelrc"}),"build:bezel --bes_backend=grpc://localhost:8085 \nbuild:bezel --bes_results_url=grpc://localhost:8085/pipeline\nbuild:bezel --bes_timeout=5s\nbuild:bezel --build_event_publish_all_actions\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"bazel build //:gazelle-protobuf --config=bezel\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"~/go/src/github.com/stackb/rules_proto $ bazel build //:gazelle-protobuf --bes_backend=grpc://localhost:8085 --bes_results_url=http://localhost:8085/pipeline\nINFO: Invocation ID: 99633295-2f89-4e95-9241-4726b9a515a9\nINFO: Streaming build results to: http://localhost:8085/pipeline/99633295-2f89-4e95-9241-4726b9a515a9\nINFO: Analyzed target //:gazelle-protobuf (15 packages loaded, 7652 targets configured).\nINFO: Found 1 target...\nTarget //:gazelle-protobuf up-to-date:\n  bazel-bin/gazelle-protobuf_/gazelle-protobuf\nINFO: Elapsed time: 16.046s, Critical Path: 12.94s\nINFO: 51 processes: 6 internal, 45 darwin-sandbox.\nINFO: Streaming build results to: http://localhost:8085/pipeline/99633295-2f89-4e95-9241-4726b9a515a9\nINFO: Build completed successfully, 51 total actions\n")),Object(a.b)("p",null,"Then open the link (printed via bazel stderr):"),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/50580/144539336-abcad8d8-e3ad-4087-ae36-34c1123509c0.png",alt:"image"}))))}u.isMDXComponent=!0}}]);