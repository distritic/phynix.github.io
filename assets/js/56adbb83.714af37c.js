"use strict";(self.webpackChunkphynix_docs=self.webpackChunkphynix_docs||[]).push([[7539],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=i,b=u["".concat(c,".").concat(h)]||u[h]||p[h]||r;return n?a.createElement(b,o(o({ref:t},d),{},{components:n})):a.createElement(b,o({ref:t},d))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7231:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:3},o="Attributes",l={unversionedId:"banking/account/attributes",id:"banking/account/attributes",title:"Attributes",description:"The account object is supplied with a set of useful attributes.",source:"@site/docs/banking/account/attributes.md",sourceDirName:"banking/account",slug:"/banking/account/attributes",permalink:"/docs/banking/account/attributes",draft:!1,editUrl:"https://github.com/distritic/phynix-docs/tree/main/docs/banking/account/attributes.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Methods",permalink:"/docs/banking/account/methods"},next:{title:"Events",permalink:"/docs/banking/events"}},c={},s=[{value:"Static",id:"static",level:2},{value:"id: <code>int</code>",id:"id-int",level:3},{value:"name: <code>string</code>",id:"name-string",level:3},{value:"label: <code>string</code>",id:"label-string",level:3},{value:"type: <code>string</code>",id:"type-string",level:3},{value:"balance: <code>int</code>",id:"balance-int",level:3},{value:"overdraftLimit: <code>int</code>",id:"overdraftlimit-int",level:3},{value:"frozen: <code>bool</code>",id:"frozen-bool",level:3},{value:"noteRequired: <code>bool</code>",id:"noterequired-bool",level:3},{value:"logLimit: <code>int</code>",id:"loglimit-int",level:3},{value:"Dynamic",id:"dynamic",level:2},{value:"characters: <code>table</code>",id:"characters-table",level:3},{value:"logs: <code>table</code>",id:"logs-table",level:3},{value:"characterData: <code>table</code>",id:"characterdata-table",level:3}],d={toc:s},u="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"attributes"},"Attributes"),(0,i.kt)("p",null,"The account object is supplied with a set of useful attributes."),(0,i.kt)("h2",{id:"static"},"Static"),(0,i.kt)("h3",{id:"id-int"},"id: ",(0,i.kt)("inlineCode",{parentName:"h3"},"int")),(0,i.kt)("p",null,"This is the unique identifier of the account."),(0,i.kt)("h3",{id:"name-string"},"name: ",(0,i.kt)("inlineCode",{parentName:"h3"},"string")),(0,i.kt)("p",null,"This is the unique name of the account."),(0,i.kt)("h3",{id:"label-string"},"label: ",(0,i.kt)("inlineCode",{parentName:"h3"},"string")),(0,i.kt)("p",null,"This is the label of the account."),(0,i.kt)("h3",{id:"type-string"},"type: ",(0,i.kt)("inlineCode",{parentName:"h3"},"string")),(0,i.kt)("p",null,"This is the account type. The available types are as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"personal")," for character accounts"),(0,i.kt)("p",{parentName:"li"},"Only the account owner (character it is assigned to) can access this account. No additional characters can be added.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"business")," for business accounts"),(0,i.kt)("p",{parentName:"li"},"The access permissions and ownership of these accounts should be handled by a ",(0,i.kt)("a",{parentName:"p",href:"/docs/business/object/get-object"},"business object"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"joint")," for joint accounts")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"state")," for state entity accounts"))),(0,i.kt)("h3",{id:"balance-int"},"balance: ",(0,i.kt)("inlineCode",{parentName:"h3"},"int")),(0,i.kt)("p",null,"This is the balance of the account."),(0,i.kt)("h3",{id:"overdraftlimit-int"},"overdraftLimit: ",(0,i.kt)("inlineCode",{parentName:"h3"},"int")),(0,i.kt)("p",null,"This is the minimum allowed balance (i.e. overdraft) of the account."),(0,i.kt)("h3",{id:"frozen-bool"},"frozen: ",(0,i.kt)("inlineCode",{parentName:"h3"},"bool")),(0,i.kt)("p",null,"This boolean will indicate whether the account is frozen. Frozen accounts will not accept any transactions, deposits or withdrawals."),(0,i.kt)("h3",{id:"noterequired-bool"},"noteRequired: ",(0,i.kt)("inlineCode",{parentName:"h3"},"bool")),(0,i.kt)("p",null,"This boolean will indicate whether the account requires a note with each transaction."),(0,i.kt)("h3",{id:"loglimit-int"},"logLimit: ",(0,i.kt)("inlineCode",{parentName:"h3"},"int")),(0,i.kt)("p",null,"This is the maximum number of log entries for an account, before previous entries are erased."),(0,i.kt)("h2",{id:"dynamic"},"Dynamic"),(0,i.kt)("h3",{id:"characters-table"},"characters: ",(0,i.kt)("inlineCode",{parentName:"h3"},"table")),(0,i.kt)("p",null,"The array of character identifiers allowed to access this account."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"{\n  14, 29, 847, 32, 938, ...\n}\n")),(0,i.kt)("h3",{id:"logs-table"},"logs: ",(0,i.kt)("inlineCode",{parentName:"h3"},"table")),(0,i.kt)("p",null,"This is a table of recent transactions stored on the account. These will be incrementally erased after the ",(0,i.kt)("inlineCode",{parentName:"p"},"logLimit")," is reached, starting with oldest first."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  {\n    ["a"] = 1000, -- amount\n    ["b"] = 4000, -- new balance\n    ["c"] = "WIT", -- transaction type\n    ["d"] = 1684315028, -- transaction date as epoch\n    ["i"] = false, -- inflow\n    ["n"] = "", -- notes\n    ["id"] = 14, -- character ID\n    ["char"] = "R. Gonzales" -- character name\n  },\n  ...\n}\n')),(0,i.kt)("h3",{id:"characterdata-table"},"characterData: ",(0,i.kt)("inlineCode",{parentName:"h3"},"table")),(0,i.kt)("p",null,"The dictionary of characters and their associated permissions for the account."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  ["14"] = {\n    ["name"] = "R. Gonzales",\n    ["perms"] = {\n      ["deposit"] = true,\n      ["withdraw"] = true\n    }\n  },\n  ...\n}\n')))}p.isMDXComponent=!0}}]);