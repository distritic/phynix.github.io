"use strict";(self.webpackChunkphynix_docs=self.webpackChunkphynix_docs||[]).push([[1530],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),l=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=l(n),b=r,f=p["".concat(u,".").concat(b)]||p[b]||d[b]||c;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=b;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var l=2;l<c;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},4145:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const c={},i="Events",o={unversionedId:"banking/events",id:"banking/events",title:"Events",description:"Server-side",source:"@site/docs/banking/events.md",sourceDirName:"banking",slug:"/banking/events",permalink:"/docs/banking/events",draft:!1,editUrl:"https://github.com/distritic/phynix-docs/tree/main/docs/banking/events.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Attributes",permalink:"/docs/banking/account/attributes"},next:{title:"Exports",permalink:"/docs/banking/exports"}},u={},l=[{value:"Server-side",id:"server-side",level:2},{value:"banking:initCharacterAccount",id:"bankinginitcharacteraccount",level:3},{value:"banking:initBusinessAccount",id:"bankinginitbusinessaccount",level:3}],s={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"events"},"Events"),(0,r.kt)("h2",{id:"server-side"},"Server-side"),(0,r.kt)("h3",{id:"bankinginitcharacteraccount"},"banking:initCharacterAccount"),(0,r.kt)("p",null,"Initialize (and create if doesn't exist) a character's bank account object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'TriggerEvent("banking:initCharacterAccount", charId --[[int]], function(account --[[table]])\n  print("Initialised account: "..account.get("name"));\nend);\n-- charId: character ID of account owner\n-- account: returned account object through callback\n')),(0,r.kt)("h3",{id:"bankinginitbusinessaccount"},"banking:initBusinessAccount"),(0,r.kt)("p",null,"Initialize (and create if doesn't exist) a business' bank account object. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"characters")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"characterData")," field follow the format of ",(0,r.kt)("a",{parentName:"li",href:"account/attributes/#characters-table"},"characters")," and ",(0,r.kt)("a",{parentName:"li",href:"/docs/banking/account/attributes/#characterdata-table"},"characterData"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'TriggerEvent("banking:initBusinessAccount", accountName --[[string]], accountLabel --[[string]], characters --[[table]], characterData --[[table]], function(account --[[table]])\n  print("Initialised account: "..account.get("name"));\nend);\n-- accountName: name of account to initialise\n-- accountLabel: label of account if creating\n-- characters: default characters if creating\n-- characterData: default characterData if creating\n-- account: returned account object through callback\n')))}d.isMDXComponent=!0}}]);