(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{108:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),p=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,f=b["".concat(o,".").concat(d)]||b[d]||l[d]||a;return n?i.a.createElement(f,c(c({ref:t},u),{},{components:n})):i.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),i=n(6),a=(n(0),n(108)),o={id:"authentication",title:"Authentication"},c={unversionedId:"vscode/authentication",id:"vscode/authentication",isDocsHomePage:!1,title:"Authentication",description:"Authentication is used to assert that a valid subscription token is available.",source:"@site/docs/vscode/authentication.md",slug:"/vscode/authentication",permalink:"/docs/next/vscode/authentication",editUrl:"https://github.com/stackb/bazel-stack-vscode/edit/master/docs/docs/vscode/authentication.md",version:"current",sidebar:"docs",previous:{title:"Installation",permalink:"/docs/next/vscode/installation"},next:{title:"Buildifier",permalink:"/docs/next/vscode/buildifier"}},s=[{value:"Step 1: Register",id:"step-1-register",children:[]},{value:"Step 2: Choose a Subscription Plan",id:"step-2-choose-a-subscription-plan",children:[]},{value:"Step 3: Configure the Extension",id:"step-3-configure-the-extension",children:[]}],u={rightToc:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Authentication is used to assert that a valid subscription token is available.\nThis only required if you would like to enable all features of the extension."),Object(a.b)("h2",{id:"step-1-register"},"Step 1: Register"),Object(a.b)("p",null,"You can register with ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://bzl.io"}),"https://bzl.io")," via GitHub OAuth or Email:"),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/50580/144350413-9b2963a0-9a8e-447f-88af-224d9dfa65dc.png",alt:"image"}))),Object(a.b)("p",null,"GitHub is preferred for ease of use, but requires that you have a ",Object(a.b)("em",{parentName:"p"},"Public email"),"\nconfigured in your ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/settings/profile"}),"https://github.com/settings/profile"),".  Otherwise, use the\ntraditional email flow:"),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/50580/144350530-258ce0b8-3f4f-4224-88be-12c1ccbc024a.png",alt:"image"}))),Object(a.b)("p",null,"We don't spam or use your email for any purpose other than to notify you of updates."),Object(a.b)("h2",{id:"step-2-choose-a-subscription-plan"},"Step 2: Choose a Subscription Plan"),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/50580/144350922-b78071d7-733c-4b70-a41a-b13638f80a79.png",alt:"image"}))),Object(a.b)("p",null,"Not to worry, you can cancel at any time.  Your payment credentials are not\ntransmitted or stored outside of the payment processor (Stripe)."),Object(a.b)("h2",{id:"step-3-configure-the-extension"},"Step 3: Configure the Extension"),Object(a.b)("p",null,"Click the ",Object(a.b)("strong",{parentName:"p"},"Configure VSCode Extension")," button:"),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/50580/144351208-650e06c0-46d3-4518-b617-4bf7f85cbabe.png",alt:"image"}))),Object(a.b)("p",null,"This will copy your authentication token to ",Object(a.b)("inlineCode",{parentName:"p"},"$HOME/.bzl/license.key")," and\nactivate the extension subscription features."),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/50580/144351565-53b85f5c-9d7b-445f-a651-8e3b0df91a79.png",alt:"image"}))),Object(a.b)("p",null,"If you'd like to cancel, visit ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://bzl.io/settings/subscription"}),"https://bzl.io/settings/subscription"),":"),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/50580/144352764-b632d49f-fdef-4ca7-a3fd-3e5c6196c716.png",alt:"image"}))))}p.isMDXComponent=!0}}]);