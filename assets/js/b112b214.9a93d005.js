"use strict";(self.webpackChunkphynix=self.webpackChunkphynix||[]).push([[165],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return y}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),v=c(n),y=o,d=v["".concat(s,".").concat(y)]||v[y]||p[y]||i;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=v;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},1987:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return v}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={},s="Exports",c={unversionedId:"inventory/exports",id:"inventory/exports",isDocsHomePage:!1,title:"Exports",description:"Server-side",source:"@site/docs/inventory/exports.md",sourceDirName:"inventory",slug:"/inventory/exports",permalink:"/docs/inventory/exports",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/inventory/exports.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Events",permalink:"/docs/inventory/events"}},u=[{value:"Server-side",id:"server-side",children:[{value:"DoesInventoryExist",id:"doesinventoryexist",children:[],level:3},{value:"IsInventoryAvailable",id:"isinventoryavailable",children:[],level:3}],level:2}],p={toc:u};function v(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"exports"},"Exports"),(0,i.kt)("h2",{id:"server-side"},"Server-side"),(0,i.kt)("h3",{id:"doesinventoryexist"},"DoesInventoryExist"),(0,i.kt)("p",null,"Checks whether the specified inventory is cached in memory."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},"local doesExist --[[bool]] = exports.px_inventory:DoesInventoryExist(invName --[[string]]);\n-- invName: inventory name\n")),(0,i.kt)("h3",{id:"isinventoryavailable"},"IsInventoryAvailable"),(0,i.kt)("p",null,"Checks whether the specified inventory is not currently in use (open)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},"local isAvailable --[[bool]] = exports.px_inventory:IsInventoryAvailable(invName --[[string]]);\n-- invName: inventory name\n")))}v.isMDXComponent=!0}}]);