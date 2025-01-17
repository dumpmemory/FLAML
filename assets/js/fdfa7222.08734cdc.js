"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4153],{5680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>g});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),g=a,m=s["".concat(c,".").concat(g)]||s[g]||f[g]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},3654:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(8168),a=(r(6540),r(5680));const o={sidebar_label:"utils",title:"automl.nlp.huggingface.utils"},i=void 0,l={unversionedId:"reference/automl/nlp/huggingface/utils",id:"reference/automl/nlp/huggingface/utils",isDocsHomePage:!1,title:"automl.nlp.huggingface.utils",description:"todf",source:"@site/docs/reference/automl/nlp/huggingface/utils.md",sourceDirName:"reference/automl/nlp/huggingface",slug:"/reference/automl/nlp/huggingface/utils",permalink:"/FLAML/docs/reference/automl/nlp/huggingface/utils",editUrl:"https://github.com/microsoft/FLAML/edit/main/website/docs/reference/automl/nlp/huggingface/utils.md",tags:[],version:"current",frontMatter:{sidebar_label:"utils",title:"automl.nlp.huggingface.utils"},sidebar:"referenceSideBar",previous:{title:"training_args",permalink:"/FLAML/docs/reference/automl/nlp/huggingface/training_args"},next:{title:"utils",permalink:"/FLAML/docs/reference/automl/nlp/utils"}},c=[{value:"todf",id:"todf",children:[],level:4}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.yg)("wrapper",(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h4",{id:"todf"},"todf"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},"def todf(X, Y, column_name)\n")),(0,a.yg)("p",null,"todf converts Y from any format (list, pandas.Series, numpy array) to a DataFrame before being returned"))}p.isMDXComponent=!0}}]);