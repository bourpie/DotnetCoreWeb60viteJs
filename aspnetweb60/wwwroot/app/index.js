import{o as a,c as u,a as s,t as d,F as f,b as c,d as p,$ as m}from"./vendor.js";const g=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}};g();const h=s("p",null,[c("Learn about "),s("a",{href:"https://docs.microsoft.com/aspnet/core"},"building Web apps with ASP.NET Core"),c(".")],-1),y={setup(l){const t="Hello";return(i,r)=>(a(),u(f,null,[s("h1",{class:"display-4"},d(t)),h],64))}};p(y).mount("#app");window.jQuery=window.$=m;console.log("allo");
//# sourceMappingURL=index.js.map