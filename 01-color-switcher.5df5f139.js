const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),o=document.body;let a=null;t.addEventListener("click",(e=>{e.stopPropagation(),t.disabled=!0,a=setInterval((()=>{const t=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;o.style.backgroundColor=t}),1e3)})),e.addEventListener("click",(e=>{e.stopPropagation(),clearInterval(a),t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.5df5f139.js.map
