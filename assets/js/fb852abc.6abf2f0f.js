"use strict";(self.webpackChunkphynix=self.webpackChunkphynix||[]).push([[662],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(n),p=l,h=m["".concat(u,".").concat(p)]||m[p]||d[p]||i;return n?a.createElement(h,r(r({ref:t},s),{},{components:n})):a.createElement(h,r({ref:t},s))}));function p(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9738:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var a=n(7462),l=n(3366),i=(n(7294),n(3905)),r=["components"],o={},u="Library",c={unversionedId:"utils/library",id:"utils/library",isDocsHomePage:!1,title:"Library",description:"How to Import",source:"@site/docs/utils/library.md",sourceDirName:"utils",slug:"/utils/library",permalink:"/docs/utils/library",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/utils/library.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Exports",permalink:"/docs/utils/exports"},next:{title:"Introduction",permalink:"/docs/inventory/intro"}},s=[{value:"How to Import",id:"how-to-import",children:[],level:2},{value:"Client-side",id:"client-side",children:[{value:"IsPedDead",id:"ispeddead",children:[],level:3},{value:"DrawText3D",id:"drawtext3d",children:[],level:3},{value:"DrawMissionText",id:"drawmissiontext",children:[],level:3},{value:"DrawTimer",id:"drawtimer",children:[],level:3},{value:"DrawCountdown",id:"drawcountdown",children:[],level:3},{value:"ShowHelp",id:"showhelp",children:[],level:3},{value:"CreateTimer",id:"createtimer",children:[],level:3},{value:"CreateBar",id:"createbar",children:[],level:3},{value:"CreateBar2",id:"createbar2",children:[],level:3},{value:"GetVehicleInFront",id:"getvehicleinfront",children:[],level:3},{value:"GetVehicleInDirection",id:"getvehicleindirection",children:[],level:3},{value:"KeyboardInput",id:"keyboardinput",children:[],level:3},{value:"LoadModel",id:"loadmodel",children:[],level:3},{value:"RequestEntityControl",id:"requestentitycontrol",children:[],level:3},{value:"LoadAnimDict",id:"loadanimdict",children:[],level:3},{value:"LoadPtfx",id:"loadptfx",children:[],level:3},{value:"LoadScaleform",id:"loadscaleform",children:[],level:3},{value:"CommaValue",id:"commavalue",children:[],level:3},{value:"RemoveWhitespace",id:"removewhitespace",children:[],level:3},{value:"WaitForNetId",id:"waitfornetid",children:[],level:3},{value:"CopyTable",id:"copytable",children:[],level:3},{value:"GetVehicleSeatPedIsIn",id:"getvehicleseatpedisin",children:[],level:3},{value:"Round",id:"round",children:[],level:3},{value:"EnumerateObjects",id:"enumerateobjects",children:[],level:3},{value:"EnumeratePeds",id:"enumeratepeds",children:[],level:3},{value:"EnumerateVehicles",id:"enumeratevehicles",children:[],level:3},{value:"EnumeratePickups",id:"enumeratepickups",children:[],level:3}],level:2},{value:"Server-side",id:"server-side",children:[{value:"CommaValue",id:"commavalue-1",children:[],level:3},{value:"RemoveWhitespace",id:"removewhitespace-1",children:[],level:3},{value:"CopyTable",id:"copytable-1",children:[],level:3}],level:2}],d={toc:s};function m(e){var t=e.components,n=(0,l.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"library"},"Library"),(0,i.kt)("h2",{id:"how-to-import"},"How to Import"),(0,i.kt)("p",null,"In order to use these utilities, you must import the ",(0,i.kt)("inlineCode",{parentName:"p"},"Utils")," object which stores all helper functions. The directory from which the file is imported is different for client and server."),(0,i.kt)("p",null,"To import the library server-side, you must include the following line in your resource ",(0,i.kt)("inlineCode",{parentName:"p"},"fxmanifest.lua")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="fxmanifest.lua"',title:'"fxmanifest.lua"'},'server_script "@px_utils/server/lib/common.lua"\n')),(0,i.kt)("p",null,"To import the library client-side, you must include the following line in your resource ",(0,i.kt)("inlineCode",{parentName:"p"},"fxmanifest.lua")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="fxmanifest.lua"',title:'"fxmanifest.lua"'},'client_script "@px_utils/client/lib/common.lua"\n')),(0,i.kt)("h2",{id:"client-side"},"Client-side"),(0,i.kt)("h3",{id:"ispeddead"},"IsPedDead"),(0,i.kt)("p",null,"This function will return whether the ped is dead. It should be used over the native ",(0,i.kt)("inlineCode",{parentName:"p"},"IsPedDeadOrDying")," function, as it checks for specific death state from ",(0,i.kt)("inlineCode",{parentName:"p"},"px_death"),". An example can be seen below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},'local plyPed = PlayerPedId();\nif Utils:IsPedDead(plyPed) then\n  TriggerEvent("core:notify", "You are dead :(");\nend\n')),(0,i.kt)("h3",{id:"drawtext3d"},"DrawText3D"),(0,i.kt)("p",null,"Draw text in three-dimenstional space. This function must be called in a loop."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},"Utils:DrawText3D(x --[[int]], y --[[int]], z --[[int]], distance --[[int]], label --[[string]]);\n-- x: the x-coordinate to draw at\n-- y: the y-coordinate to draw at\n-- z: the z-coordinate to draw at\n-- distance: a distance check from your player ped to the coordinate\n-- label: the text to display\n")),(0,i.kt)("p",null,"Example usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},'Citizen.CreateThread(function()\n  local plyPed = PlayerPedId();\n  while true do\n    Citizen.Wait(0);\n\n    local plyPos = GetEntityCoords(plyPed);\n    Utils:DrawText3D(plyPos.x, plyPos.y, plyPos.z, 3.0, "Hello World!");\n  end\nend)\n')),(0,i.kt)("h3",{id:"drawmissiontext"},"DrawMissionText"),(0,i.kt)("p",null,"Draw native mission text."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},"Utils:DrawMissionText(label --[[string]], duration --[[int]]);\n-- label: the text to display\n-- duration: time in seconds to display\n")),(0,i.kt)("h3",{id:"drawtimer"},"DrawTimer"),(0,i.kt)("p",null,"Draw a native countdown, must be called in a loop."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},"Utils:DrawTimer(startTime --[[int]], duration --[[int]], x --[[int]], y --[[int]], label --[[string]]);\n-- startTime: game timer at start of draw\n-- duration: duration of draw in millisecond\n-- x: on-screen x-coordinate of timer\n-- y: on-screen y-coordinate of timer\n-- label: timer label\n")),(0,i.kt)("p",null,"Example usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},'Citizen.CreateThread(function()\n  local startTime = GetGameTimer();\n  local duration = 5000; -- milliseconds\n  while GetGameTimer() - startTime < duration do\n    Citizen.Wait(0);\n    Utils:DrawTimer(startTime, duration, 1.42, 1.475, "EXAMPLE");\n  end\nend);\n')),(0,i.kt)("h3",{id:"drawcountdown"},"DrawCountdown"),(0,i.kt)("p",null,"Draw a native timer, must be called in a loop."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},"Utils:DrawCountdown(startTime --[[int]], duration --[[int]], x --[[int]], y --[[int]]);\n-- startTime: game timer at start of draw\n-- duration: duration of draw in millisecond\n-- x: on-screen x-coordinate of timer\n-- y: on-screen y-coordinate of timer\n")),(0,i.kt)("p",null,"Example usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},"Citizen.CreateThread(function()\n  local startTime = GetGameTimer();\n  local duration = 5000; -- milliseconds\n  while GetGameTimer() - startTime < duration do\n    Citizen.Wait(0);\n    Utils:DrawCountdown(startTime, duration, 1.42, 1.475);\n  end\nend);\n")),(0,i.kt)("h3",{id:"showhelp"},"ShowHelp"),(0,i.kt)("p",null,"Show a native help notification."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},"Utils:ShowHelp(label --[[string]], sound --[[bool]]);\n-- label: label of help message\n-- sound?: whether a sound should be played\n")),(0,i.kt)("h3",{id:"createtimer"},"CreateTimer"),(0,i.kt)("p",null,"Create a native countdown timer (looped)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},"Utils:CreateTimer(duration --[[int]]);\n-- duration: time of countdown in milliseconds\n")),(0,i.kt)("h3",{id:"createbar"},"CreateBar"),(0,i.kt)("p",null,"Create a native timer bar (looped)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},"Utils:CreateBar(duration --[[int]], label --[[string]], fRun --[[function]]);\n-- duration: duration of timer bar in milliseconds\n-- label: timer bar label\n-- fRun?: a function which will be ran in-loop during draw\n")),(0,i.kt)("h3",{id:"createbar2"},"CreateBar2"),(0,i.kt)("p",null,"Create a native timer bar (looped). This timer will show slightly ",(0,i.kt)("em",{parentName:"p"},"above")," the previous one. Why is it a new function? I don't know."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},"Utils:CreateBar2(duration --[[int]], label --[[string]], fRun --[[function]]);\n-- duration: duration of timer bar in milliseconds\n-- label: timer bar label\n-- fRun?: a function which will be ran in-loop during draw\n")),(0,i.kt)("h3",{id:"getvehicleinfront"},"GetVehicleInFront"),(0,i.kt)("p",null,"Get the vehicle in front of the player ped."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},"local vehicle --[[int]] = Utils:GetVehicleInFront();\n")),(0,i.kt)("h3",{id:"getvehicleindirection"},"GetVehicleInDirection"),(0,i.kt)("p",null,"Get the vehicle in the specified direction by casting a ray."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},"local vehicle --[[int]] = Utils:GetVehicleInDirection(coordFrom --[[vector3]], coordTo --[[vector3]]);\n-- coordFrom: starting position\n-- coordTo: ending position\n")),(0,i.kt)("h3",{id:"keyboardinput"},"KeyboardInput"),(0,i.kt)("p",null,"Create a native keyboard input prompt."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},'local output --[[string]] = Utils:KeyboardInput(textEntry --[[string]], inputText --[[string]], maxLength --[[int]]);\n-- textEntry: heading title for input\n-- inputText: default input text, use "" for none\n-- maxLength: max length of input in character count\n')),(0,i.kt)("h3",{id:"loadmodel"},"LoadModel"),(0,i.kt)("p",null,"Load a model synchronously. This function will break if the model has not loaded after five seconds."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},"Utils:LoadModel(model --[[int]]);\n-- model: model hash key to load\n")),(0,i.kt)("h3",{id:"requestentitycontrol"},"RequestEntityControl"),(0,i.kt)("p",null,"Request entity control synchronously. This function will break if control is not gained after five seconds."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},"Utils:RequestEntityControl(entity --[[int]]);\n-- entity: entity to control\n")),(0,i.kt)("h3",{id:"loadanimdict"},"LoadAnimDict"),(0,i.kt)("p",null,"Load an animation dictionary synchronously. This function will break if the dictionary has not loaded after five seconds."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},"Utils:LoadAnimDict(animDict --[[string]]);\n-- animDict: animation dictionary name\n")),(0,i.kt)("h3",{id:"loadptfx"},"LoadPtfx"),(0,i.kt)("p",null,"Load a partice FX dictionary synchronously. This function will break if the dictionary has not loaded after five seconds."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},"Utils:LoadPtfx(ptfxDict --[[string]]);\n-- ptfxDict: particle FX dictionary name\n")),(0,i.kt)("h3",{id:"loadscaleform"},"LoadScaleform"),(0,i.kt)("p",null,"Load a scaleform movie synchronously. This function will break if the scaleform movie has not loaded after five seconds."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},"Utils:LoadScaleform(dict --[[stirng]]);\n-- dict: scaleform name\n")),(0,i.kt)("h3",{id:"commavalue"},"CommaValue"),(0,i.kt)("p",null,"Separate a number using commas."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},"local value --[[string]] = Utils:CommaValue(number --[[int]]);\n-- number: number to format\n")),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},'local value = Utils:CommaValue(1384732);\n-- value = "1,384,732"\n')),(0,i.kt)("h3",{id:"removewhitespace"},"RemoveWhitespace"),(0,i.kt)("p",null,"Remove any whitespace from the front and end of a string."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},"local formatted --[[string]] = Utils:RemoveWhitespace(str --[[string]]);\n-- str: string to format\n")),(0,i.kt)("h3",{id:"waitfornetid"},"WaitForNetId"),(0,i.kt)("p",null,"Wait for a network ID to exist, has a default timeout of 1000 milliseconds."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},"Utils:WaitForNetId(netId --[[int]], timeout --[[int]]);\n-- netId: network Id to wait for\n-- timeout: timeout in milliseconds\n")),(0,i.kt)("h3",{id:"copytable"},"CopyTable"),(0,i.kt)("p",null,"Create a deep copy of a table."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},"local newTable --[[table]] = Utils:CopyTable(sourceTable --[[table]]);\n-- sourceTable: table to be copied\n")),(0,i.kt)("h3",{id:"getvehicleseatpedisin"},"GetVehicleSeatPedIsIn"),(0,i.kt)("p",null,"Get the vehicle seat index that the ped is in."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},"local seatIndex --[[int]] = Utils:GetVehicleSeatPedIsIn(vehicle --[[int]], ped --[[int]]);\n-- vehicle: the target vehicle\n-- ped: the target ped\n")),(0,i.kt)("h3",{id:"round"},"Round"),(0,i.kt)("p",null,"Round a number to the specified amount of decimal places."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},"local rounded --[[float]] = Utils:Round(number --[[float]], numDecimalPlaces --[[int]]);\n-- number: the number to be rounded\n-- numDecimalPlaces: the number of decimal places to round to\n")),(0,i.kt)("h3",{id:"enumerateobjects"},"EnumerateObjects"),(0,i.kt)("p",null,"Enumerate all existing objects."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},"for object in Utils:EnumerateObjects() do\n  ...\nend\n")),(0,i.kt)("h3",{id:"enumeratepeds"},"EnumeratePeds"),(0,i.kt)("p",null,"Enumerate all existing peds."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},"for ped in Utils:EnumeratePeds() do\n  ...\nend\n")),(0,i.kt)("h3",{id:"enumeratevehicles"},"EnumerateVehicles"),(0,i.kt)("p",null,"Enumerate all existing vehicles."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},"for vehicle in Utils:EnumerateVehicles() do\n  ...\nend\n")),(0,i.kt)("h3",{id:"enumeratepickups"},"EnumeratePickups"),(0,i.kt)("p",null,"Enumerate all existing pickups."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},"for pickup in Utils:EnumeratePickups() do\n  ...\nend\n")),(0,i.kt)("h2",{id:"server-side"},"Server-side"),(0,i.kt)("h3",{id:"commavalue-1"},"CommaValue"),(0,i.kt)("p",null,"Separate a number using commas."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},"local value --[[string]] = Utils:CommaValue(number --[[int]]);\n-- number: number to format\n")),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},'local value = Utils:CommaValue(1384732);\n-- value = "1,384,732"\n')),(0,i.kt)("h3",{id:"removewhitespace-1"},"RemoveWhitespace"),(0,i.kt)("p",null,"Remove any whitespace from the front and end of a string."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},"local formatted --[[string]] = Utils:RemoveWhitespace(str --[[string]]);\n-- str: string to format\n")),(0,i.kt)("h3",{id:"copytable-1"},"CopyTable"),(0,i.kt)("p",null,"Create a deep copy of a table."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},"local newTable --[[table]] = Utils:CopyTable(sourceTable --[[table]]);\n-- sourceTable: table to be copied\n")))}m.isMDXComponent=!0}}]);