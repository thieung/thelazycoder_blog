"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[826],{8177:(e,t,a)=>{a.r(t)},206:(e,t,a)=>{a(8177);var n="☀️";window.addEventListener("DOMContentLoaded",(function(){var e=new IntersectionObserver((function(e){e.forEach((function(e){var t=e.target.getAttribute("id");e.intersectionRatio>0?document.querySelector('nav li a[href="#'.concat(t,'"]')).classList.add("active"):document.querySelector('nav li a[href="#'.concat(t,'"]')).classList.remove("active")}))}));function t(e){if(document.querySelector(".utterances-frame")){var t={type:"set-theme",theme:"dark"===e?"github-dark":"github-light"};document.querySelector(".utterances-frame").contentWindow.postMessage(t,"https://utteranc.es")}}document.querySelectorAll("h2[id], h3[id]").forEach((function(t){e.observe(t)}));var a=document.getElementById("mode"),o=document.getElementById("chroma-theme");a.addEventListener("click",(function(){a.textContent===n?(a.textContent="🌙",document.documentElement.setAttribute("data-theme","dark"),localStorage.setItem("mode","🌙"),t("dark"),o.href="/css/syntax-dark.css"):(a.textContent=n,document.documentElement.setAttribute("data-theme","light"),localStorage.setItem("mode",n),t("light"),o.href="/css/syntax-light.css")}));var d=localStorage.getItem("mode");d?(a.textContent=d,d===n?document.documentElement.setAttribute("data-theme","light"):(document.documentElement.setAttribute("data-theme","dark"),t("light"),o.href="/css/syntax-dark.css")):(a.textContent=n,document.documentElement.setAttribute("data-theme","light"),localStorage.setItem("mode",n));var c=document.getElementById("tab-icon"),r=document.getElementById("tab-apple-icon");window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(c.href="/images/logo-dark.svg",r.href="/images/logo-dark.svg",document.getElementsByTagName("head")[0].appendChild(c),document.getElementsByTagName("head")[0].appendChild(r))})),document.addEventListener("copy",(function(e){e.clipboardData.setData("text/plain","Copying is not allowed on this webpage"),e.preventDefault()}),!1);var o=document.getElementById("tab-icon"),d=document.getElementById("tab-apple-icon");window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(function(e){e.matches?(o.href="/images/logo-dark.svg",d.href="/images/logo-dark.svg"):(o.href="/images/logo-light.svg",d.href="/images/logo-light.svg"),document.getElementsByTagName("head")[0].appendChild(o),document.getElementsByTagName("head")[0].appendChild(d)}))}},e=>{var t;t=206,e(e.s=t)}]);
//# sourceMappingURL=index.bundle.js.map