const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");e.disabled=!0;let d=null;t.addEventListener("click",(()=>{t.disabled=!0,e.disabled=!1,d=setInterval((()=>{document.body.style.background=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)}));
//# sourceMappingURL=01-color-switcher.975aab7e.js.map
