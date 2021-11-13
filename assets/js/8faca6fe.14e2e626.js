"use strict";(self.webpackChunkphynix=self.webpackChunkphynix||[]).push([[567],{3905:function(e,t,r){r.d(t,{Zo:function(){return h},kt:function(){return d}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),o=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},h=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),p=o(r),d=n,m=p["".concat(s,".").concat(d)]||p[d]||u[d]||i;return r?a.createElement(m,c(c({ref:t},h),{},{components:r})):a.createElement(m,c({ref:t},h))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var o=2;o<i;o++)c[o]=r[o];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9208:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return o},toc:function(){return h},default:function(){return p}});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),c=["components"],l={sidebar_position:5},s="Exports",o={unversionedId:"characters/exports",id:"characters/exports",isDocsHomePage:!1,title:"Exports",description:"Server-side",source:"@site/docs/characters/exports.md",sourceDirName:"characters",slug:"/characters/exports",permalink:"/docs/characters/exports",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/characters/exports.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Events",permalink:"/docs/characters/events"},next:{title:"Accessing the Object",permalink:"/docs/users/class/get-object"}},h=[{value:"Server-side",id:"server-side",children:[{value:"SaveCurrentCharacter",id:"savecurrentcharacter",children:[],level:3},{value:"CreateNewCharacter",id:"createnewcharacter",children:[],level:3},{value:"LoadCharactersForSelection",id:"loadcharactersforselection",children:[],level:3},{value:"InitializeCharacter",id:"initializecharacter",children:[],level:3},{value:"GetCharacter",id:"getcharacter",children:[],level:3},{value:"GetCharacters",id:"getcharacters",children:[],level:3},{value:"GetCharacterField",id:"getcharacterfield",children:[],level:3},{value:"SetCharacterField",id:"setcharacterfield",children:[],level:3},{value:"GetNumCharactersWithJob",id:"getnumcharacterswithjob",children:[],level:3},{value:"DoesCharacterHaveItem",id:"doescharacterhaveitem",children:[],level:3},{value:"DoesCharacterHaveLicense",id:"doescharacterhavelicense",children:[],level:3},{value:"SaveAllCharacters",id:"saveallcharacters",children:[],level:3}],level:2}],u={toc:h};function p(e){var t=e.components,r=(0,n.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"exports"},"Exports"),(0,i.kt)("h2",{id:"server-side"},"Server-side"),(0,i.kt)("h3",{id:"savecurrentcharacter"},"SaveCurrentCharacter"),(0,i.kt)("p",null,"This function is used to save any updated character fields by the player ID of the character to the database."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},"exports.px_chars:SaveCurrentCharacter(src --[[int]])\n-- src: player ID of character to save\n")),(0,i.kt)("h3",{id:"createnewcharacter"},"CreateNewCharacter"),(0,i.kt)("p",null,"This function is used by the character selection interface to create a new character."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},'local data = {\n  ["name"] = {\n    ["first"] = "Miles",\n    ["middle"] = "",\n    ["last"] = "Blaine"\n  },\n  ["dateOfBirth"] = "1987-05-12",\n  ["gender"] = "m"\n}\nexports.px_chars:CreateNewCharacter(src --[[int]], data --[[table]])\n-- src: player ID of character owner\n-- data: base information about the character\n')),(0,i.kt)("h3",{id:"loadcharactersforselection"},"LoadCharactersForSelection"),(0,i.kt)("p",null,"This function is used by the character selection interface to populate data fields."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},"exports.px_chars:LoadCharactersForSelection(identifier --[[string]], cb --[[function]]);\n-- identifier: Discord identifier\n-- cb: callback returning character data\n")),(0,i.kt)("h3",{id:"initializecharacter"},"InitializeCharacter"),(0,i.kt)("p",null,"This function is used by the character selection interface to initialise a character."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},"exports.px_chars:InitializeCharacter(src --[[int]], charId --[[int]], doSpawnAtProperty --[[bool]]);\n-- src: the player ID to initialise the character on\n-- charId: the character ID of character to initialise\n-- doSpawnAtProperty?: when true, the character will spawn at their property\n")),(0,i.kt)("h3",{id:"getcharacter"},"GetCharacter"),(0,i.kt)("p",null,"This function is used to fetch a character by player ID."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},"local char --[[table]] = exports.px_chars:GetCharacter(src --[[int]]);\n-- src: the player ID to get the character of\n")),(0,i.kt)("h3",{id:"getcharacters"},"GetCharacters"),(0,i.kt)("p",null,"This function is used to fetch a table of all characters initialised."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},'local chars --[[table]] = exports.px_chars:GetCharacters();\nfor src, char in pairs(chars) do\n  print("Player Id: "..src);\n  print("Character Name: "..char.getName());\nend\n')),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You should use the event ",(0,i.kt)("a",{parentName:"p",href:"events#charsgetcharacters"},"chars:getCharacters")," to return the table of characters rather than this export. This is because exports have greater limitations to return value size in memory. If you have too many players connected, you may experience errors with using the export."))),(0,i.kt)("h3",{id:"getcharacterfield"},"GetCharacterField"),(0,i.kt)("p",null,"This function is used to return a specific field of a character. This is useful when the character object is only required to fetch a single value, as it is quicker."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},"local charField --[[any]] = exports.px_chars:GetCharacterField(src --[[int]], key --[[string]]);\n-- src: the player ID to get the character field of\n-- key: the field key used to return the field value\n")),(0,i.kt)("p",null,"For example, this call will check the job of a character using the ",(0,i.kt)("inlineCode",{parentName:"p"},"GetCharacterField")," export."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},'-- Faster Method\nRegisterServerEvent("tow:isJobTow")\nAddEventHandler("tow:isJobTow", function()\n  local job = exports.px_chars:GetCharacterField(source, "job");\n  TriggerClientEvent("tow:currentJob", job == "tow");\nend);\n\n-- Slower Method\nRegisterServerEvent("tow:isJobTow")\nAddEventHandler("tow:isJobTow", function()\n  local char = exports.px_chars:GetCharacter(source);\n  local job = char.get("job");\n  TriggerClientEvent("tow:currentJob", job == "tow");\nend);\n')),(0,i.kt)("h3",{id:"setcharacterfield"},"SetCharacterField"),(0,i.kt)("p",null,"This function is used to set a specific character field. This is useful when the character object is only required to set a single value, as it is quicker."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},"exports.px_chars:SetCharacterField(src --[[int]], key --[[string]], value --[[any]]);\n-- src: the player ID to set the character field of\n-- key: the key of the field value\n-- value: the new field value\n")),(0,i.kt)("p",null,"For example, this call will set the job of a character using the ",(0,i.kt)("inlineCode",{parentName:"p"},"SetCharacterField")," export."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},'-- Faster Method\nRegisterServerEvent("tow:setOnDuty")\nAddEventHandler("tow:setOnDuty", function()\n  exports.px_chars:SetCharacterField(source, "job", "tow");\n  TriggerClientEvent("core:notify", source, "Your job is now tow");\nend);\n\n-- Slower Method\nRegisterServerEvent("tow:setOnDuty")\nAddEventHandler("tow:setOnDuty", function()\n  local char = exports.px_chars:GetCharacter(source);\n  char.set("job", "tow");\n  TriggerClientEvent("core:notify", source, "Your job is now tow");\nend);\n')),(0,i.kt)("h3",{id:"getnumcharacterswithjob"},"GetNumCharactersWithJob"),(0,i.kt)("p",null,"This function is used to return the total number of characters with a specific job."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},"local numCharactersWithJob --[[int]] = exports.px_chars:GetNumCharactersWithJob(job --[[string]]);\n-- job: the specific job to count\n")),(0,i.kt)("h3",{id:"doescharacterhaveitem"},"DoesCharacterHaveItem"),(0,i.kt)("p",null,"This function is used to return whether a character has an item."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},"local hasItem --[[bool]] = exports.px_chars:DoesCharacterHaveItem(src --[[int]], item --[[string/table]]);\n-- src: the player ID of the character to check\n-- item: the item to check for\n")),(0,i.kt)("h3",{id:"doescharacterhavelicense"},"DoesCharacterHaveLicense"),(0,i.kt)("p",null,"This function is used to return whether a character has a license. If the character does have the license, license data will be returned. This still evaluates to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," in an ",(0,i.kt)("inlineCode",{parentName:"p"},"if ... then")," statement."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},'local hasLicense --[[table/bool]] = exports.px_chars:DoesCharacterHaveLicense(src --[[int]], licenseName --[[string]]);\n-- src: the player ID of the character to check\n-- licenseName: the license name to check for, e.g. "driver"\n')),(0,i.kt)("h3",{id:"saveallcharacters"},"SaveAllCharacters"),(0,i.kt)("p",null,"This function is used to save any updates character fields of all characters to the database."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},"exports.px_chars:SaveAllCharacters();\n")))}p.isMDXComponent=!0}}]);