"use strict";(self.webpackChunkphynix_docs=self.webpackChunkphynix_docs||[]).push([[4166],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),y=a,m=p["".concat(c,".").concat(y)]||p[y]||d[y]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},1457:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},i="Introduction",s={unversionedId:"inventory/intro",id:"inventory/intro",title:"Introduction",description:"Inventories contain a dictionary of items and metadata, such as total weight or maximum capacity. These are an abstract data structure. Each inventory is uniquely identified by its name, which should be follow some conventions:",source:"@site/docs/inventory/intro.md",sourceDirName:"inventory",slug:"/inventory/intro",permalink:"/docs/inventory/intro",draft:!1,editUrl:"https://github.com/distritic/phynix-docs/tree/main/docs/inventory/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Exports",permalink:"/docs/items/exports"},next:{title:"Commands",permalink:"/docs/inventory/commands"}},c={},l=[{value:"Data Structure",id:"data-structure",level:2},{value:"Creating an Inventory",id:"creating-an-inventory",level:2},{value:"Temporary",id:"temporary",level:3},{value:"Persistent",id:"persistent",level:3}],u={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Inventories contain a dictionary of ",(0,a.kt)("a",{parentName:"p",href:"/docs/items/intro"},"items")," and metadata, such as total weight or maximum capacity. These are an abstract data structure. Each inventory is ",(0,a.kt)("strong",{parentName:"p"},"uniquely")," identified by its name, which should be follow some conventions:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The inventory name should be all-lowercase"),(0,a.kt)("li",{parentName:"ol"},"The inventory name should use dashes (",(0,a.kt)("inlineCode",{parentName:"li"},"-"),") to represent spaces")),(0,a.kt)("h2",{id:"data-structure"},"Data Structure"),(0,a.kt)("p",null,"All inventories loaded in the session are cached by the server. All movement logic happens server-side, meaning there is no reliance on the client to make changes to the inventory structure. A typical inventory object follows this structure:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  ["rows"] = 5,\n  ["max_weight"] = 100,\n  ["weight"] = 32,\n  ["name"] = "house-4893",\n  ["items"] = {\n    ["0"] = {\n      ["name"] = "pistol",\n      ["label"] = "Pistol",\n      ["itemid"] = 453432689,\n      ["weight"] = 12,\n      ["stackable"] = false,\n      ["quantity"] = 1,\n      ["created"] = 1636664281,\n      ["serial"] = "K1038384"\n    },\n    ["2"] = {\n      ["name"] = "pistolammo",\n      ["label"] = "Pistol Ammo",\n      ["itemid"] = 64,\n      ["weight"] = 5,\n      ["stackable"] = true,\n      ["quantity"] = 4,\n      ["created"] = 1636664362\n    }\n  }\n}\n')),(0,a.kt)("h2",{id:"creating-an-inventory"},"Creating an Inventory"),(0,a.kt)("p",null,"The inventory you might want to create depends on your use case. For instance, if the inventory is only needed for a current session, a temporary inventory should be created - that way unused inventories don't take up space in the database. Fortunately, the framework differentiates inventory types so this is quite simple to achieve."),(0,a.kt)("h3",{id:"temporary"},"Temporary"),(0,a.kt)("p",null,"A temporary inventory can be created using the ",(0,a.kt)("a",{parentName:"p",href:"events#inventorycreatesecondaryinventorytemp"},"inventory:createSecondaryInventoryTemp")," event. "),(0,a.kt)("h3",{id:"persistent"},"Persistent"),(0,a.kt)("p",null,"A persistent inventory can be created using the ",(0,a.kt)("a",{parentName:"p",href:"events#inventorycreateinventory"},"inventory:createInventory")," event."))}d.isMDXComponent=!0}}]);