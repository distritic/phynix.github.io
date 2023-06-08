"use strict";(self.webpackChunkphynix_docs=self.webpackChunkphynix_docs||[]).push([[9802],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return r?a.createElement(g,i(i({ref:t},c),{},{components:r})):a.createElement(g,i({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2237:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const l={},i="Exports",o={unversionedId:"core/exports",id:"core/exports",title:"Exports",description:"Client-side",source:"@site/docs/core/exports.md",sourceDirName:"core",slug:"/core/exports",permalink:"/docs/core/exports",draft:!1,editUrl:"https://github.com/distritic/phynix-docs/tree/main/docs/core/exports.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Events",permalink:"/docs/core/events"},next:{title:"Keymapping",permalink:"/docs/core/keymapping"}},s={},p=[{value:"Client-side",id:"client-side",level:2},{value:"TriggerServerEventCallback",id:"triggerservereventcallback",level:3},{value:"GetClosestPlayer",id:"getclosestplayer",level:3},{value:"Server-side",id:"server-side",level:2},{value:"GetGroups",id:"getgroups",level:3},{value:"CanGroupTarget",id:"cangrouptarget",level:3},{value:"GetIdentifier",id:"getidentifier",level:3},{value:"GetRandomNumberPlate",id:"getrandomnumberplate",level:3},{value:"RegisterServerEventCallback",id:"registerservereventcallback",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"exports"},"Exports"),(0,n.kt)("h2",{id:"client-side"},"Client-side"),(0,n.kt)("h3",{id:"triggerservereventcallback"},"TriggerServerEventCallback"),(0,n.kt)("p",null,"This export will trigger a server event which acts as a callback to the client. It must be caught using ",(0,n.kt)("a",{parentName:"p",href:"#RegisterServerEventCallback"},"RegisterServerEventCallback")," respectively."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},"exports.phynix:TriggerServerEventCallback(eventName --[[string]], ... --[[any]], handler --[[function]]);\n-- eventName: name of event to trigger\n-- ...: an arbitrary number of arguments for the server\n-- handler(...): a handler with an arbitrary number of arguments returned by the server\n")),(0,n.kt)("p",null,"This can be used as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},'-- client\nlocal playerId = 1;\nexports.phynix:TriggerServerEventCallback("chars:getNameByPlayerId", playerId, function(targetName)\n  TriggerEvent("core:notify", "Name of player with ID "..playerId.." is "..targetName);\nend);\n\n-- server\nexports.phynix:RegisterServerEventCallback("chars:getNameByPlayerId", function(src, playerId, cb)\n  local targetChar = exports.px_chars:GetCharacter(playerId);\n  local targetName = targetChar.getFullName();\n  cb(targetName);\nend);\n')),(0,n.kt)("h3",{id:"getclosestplayer"},"GetClosestPlayer"),(0,n.kt)("p",null,"This export will return the closest player ID to the current client."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},"local playerId --[[int]] = exports.phynix:GetClosestPlayer(range --[[int]])\n-- range: the number of units to check near the client\n-- playerId: the player ID of the closest player (false if none found)\n")),(0,n.kt)("h2",{id:"server-side"},"Server-side"),(0,n.kt)("h3",{id:"getgroups"},"GetGroups"),(0,n.kt)("p",null,"This export will return a dictionary of groups and their attributes."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},"local groups --[[table]] = exports.phynix:GetGroups();\n")),(0,n.kt)("h3",{id:"cangrouptarget"},"CanGroupTarget"),(0,n.kt)("p",null,"This export will return ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," if the ",(0,n.kt)("inlineCode",{parentName:"p"},"base")," can target (is equal, or greater than) the ",(0,n.kt)("inlineCode",{parentName:"p"},"targetGroup"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},"local canTarget --[[bool]] = exports.phynix:CanGroupTarget(base --[[string]], targetGroup --[[string]]);\n")),(0,n.kt)("p",null,"For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},'local foo = exports.phynix:CanGroupTarget("admin", "mod");\n-- foo = true\n\nlocal bar = exports.phynix:CanGroupTarget("mod", "admin");\n-- bar = false\n')),(0,n.kt)("h3",{id:"getidentifier"},"GetIdentifier"),(0,n.kt)("p",null,"This export returns the specified identifier of the user."),(0,n.kt)("p",null,"Possible identifiers ",(0,n.kt)("inlineCode",{parentName:"p"},"type")," includes: ",(0,n.kt)("inlineCode",{parentName:"p"},'"discord"'),", ",(0,n.kt)("inlineCode",{parentName:"p"},'"ip"'),", ",(0,n.kt)("inlineCode",{parentName:"p"},'"license"'),", ",(0,n.kt)("inlineCode",{parentName:"p"},'"license2"'),", ",(0,n.kt)("inlineCode",{parentName:"p"},'"steam"'),", ",(0,n.kt)("inlineCode",{parentName:"p"},'"fivem"'),", ",(0,n.kt)("inlineCode",{parentName:"p"},'"xbl"')," and ",(0,n.kt)("inlineCode",{parentName:"p"},'"live"'),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},"local identifier --[[string]] = exports.phynix:GetIdentifier(src --[[int]], type --[[string]]);\n")),(0,n.kt)("h3",{id:"getrandomnumberplate"},"GetRandomNumberPlate"),(0,n.kt)("p",null,"This export generates a random number plate in the format ",(0,n.kt)("inlineCode",{parentName:"p"},"NNSSSNNN")," where ",(0,n.kt)("inlineCode",{parentName:"p"},"N")," is any natural number between ",(0,n.kt)("inlineCode",{parentName:"p"},"0-9")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"S")," is any letter between ",(0,n.kt)("inlineCode",{parentName:"p"},"A-Z"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},"local plate --[[string]] = exports.phynix:GetRandomNumberPlate();\n")),(0,n.kt)("h3",{id:"registerservereventcallback"},"RegisterServerEventCallback"),(0,n.kt)("p",null,"This export will register a server event which acts as a callback to the client. It must be triggered using ",(0,n.kt)("a",{parentName:"p",href:"#TriggerServerEventCallback"},"TriggerServerEventCallback")," respectively."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},"exports.phynix:RegisterServerEventCallback(eventName --[[string]], handler --[[function]]);\n-- eventName: name of event (triggered by client)\n-- handler(src, ..., cb): a handler with an arbitrary number of arguments sent by the client\n-- cb(...): a callback with an arbitrary number of arguments returned by the server\n")),(0,n.kt)("p",null,"This can be used as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},'-- client\nlocal playerId = 1;\nexports.phynix:TriggerServerEventCallback("chars:getNameByPlayerId", playerId, function(targetName)\n  TriggerEvent("core:notify", "Name of player with ID "..playerId.." is "..targetName);\nend);\n\n-- server\nexports.phynix:RegisterServerEventCallback("chars:getNameByPlayerId", function(src, playerId, cb)\n  local targetChar = exports.px_chars:GetCharacter(playerId);\n  local targetName = targetChar.getFullName();\n  cb(targetName);\nend);\n')))}m.isMDXComponent=!0}}]);