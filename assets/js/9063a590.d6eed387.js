"use strict";(self.webpackChunkphynix_docs=self.webpackChunkphynix_docs||[]).push([[2033],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),u=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,g=d["".concat(o,".").concat(m)]||d[m]||p[m]||i;return r?a.createElement(g,s(s({ref:t},c),{},{components:r})):a.createElement(g,s({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:n,s[1]=l;for(var u=2;u<i;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1677:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_position:2},s="Methods",l={unversionedId:"core/users/methods",id:"core/users/methods",title:"Methods",description:"adjustChatSuggestions",source:"@site/docs/core/users/methods.md",sourceDirName:"core/users",slug:"/core/users/methods",permalink:"/docs/core/users/methods",draft:!1,editUrl:"https://github.com/distritic/phynix-docs/tree/main/docs/core/users/methods.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Accessing the Object",permalink:"/docs/core/users/get-object"},next:{title:"Attributes",permalink:"/docs/core/users/attributes"}},o={},u=[{value:"adjustChatSuggestions",id:"adjustchatsuggestions",level:2},{value:"set",id:"set",level:2},{value:"get",id:"get",level:2},{value:"displayMoney",id:"displaymoney",level:2},{value:"setSessionVar",id:"setsessionvar",level:2},{value:"getSessionVar",id:"getsessionvar",level:2},{value:"getIdentifier",id:"getidentifier",level:2},{value:"getSteamId",id:"getsteamid",level:2},{value:"getComId",id:"getcomid",level:2},{value:"getGroup",id:"getgroup",level:2},{value:"isStaff",id:"isstaff",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"methods"},"Methods"),(0,n.kt)("h2",{id:"adjustchatsuggestions"},"adjustChatSuggestions"),(0,n.kt)("p",null,"This function will refresh all chat command suggestions. Only commands which the user can access will show suggestions."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},"user.adjustChatSuggestions(job --[[string]], wl --[[table]]);\n-- job?: the current character job\n-- wl?: the current character whitelist dictionary\n")),(0,n.kt)("h2",{id:"set"},"set"),(0,n.kt)("p",null,"This function is used to set a field in the user object. The collection of fields which exist for a user are declared in the ",(0,n.kt)("a",{parentName:"p",href:"attributes"},"Attributes")," guide."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},"user.set(key --[[string]], value --[[any]]);\n-- key: the field to be updated\n-- value: the new value assigned to the field\n")),(0,n.kt)("h2",{id:"get"},"get"),(0,n.kt)("p",null,"This function is used to return a field from the user object. The collection of fields which exist for a user are delared in the ",(0,n.kt)("a",{parentName:"p",href:"attributes"},"Attributes")," guide."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},"local value --[[any]] = user.get(key --[[string]]);\n-- key: the field to return\n")),(0,n.kt)("h2",{id:"displaymoney"},"displayMoney"),(0,n.kt)("p",null,"This function will temporarily show your money display."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},"user.displayMoney(money --[[int]]);\n-- money: the money of the character\n")),(0,n.kt)("h2",{id:"setsessionvar"},"setSessionVar"),(0,n.kt)("p",null,"This function will store a temporary session variable of a user."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},"user.setSessionVar(key --[[string]], value --[[any]]);\n-- key: the field to be updated\n-- value: the new value assigned to the field\n")),(0,n.kt)("h2",{id:"getsessionvar"},"getSessionVar"),(0,n.kt)("p",null,"This function will return a temporary session variable of a user."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},"local value --[[any]] = user.get(key --[[string]]);\n-- key: the field to return\n")),(0,n.kt)("h2",{id:"getidentifier"},"getIdentifier"),(0,n.kt)("p",null,"This function will return the identifier of a user."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},"local identifier --[[string]] = user.getIdentifier();\n")),(0,n.kt)("h2",{id:"getsteamid"},"getSteamId"),(0,n.kt)("p",null,"This function will return the steam ID of a user."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},"local steamId --[[string]] = user.getSteamId();\n")),(0,n.kt)("h2",{id:"getcomid"},"getComId"),(0,n.kt)("p",null,"This function will return the steam community ID of a user."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},"local comId --[[int]] = user.getComId();\n")),(0,n.kt)("h2",{id:"getgroup"},"getGroup"),(0,n.kt)("p",null,"This function will return the group of a user."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},"local group --[[string]] = user.getGroup();\n")),(0,n.kt)("h2",{id:"isstaff"},"isStaff"),(0,n.kt)("p",null,"This function will return whether a user belongs to a staff group."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},"local isStaff --[[bool]] = user.isStaff(includeDev --[[bool]]);\n-- includeDev?: whether developer groups should be included\n")))}p.isMDXComponent=!0}}]);