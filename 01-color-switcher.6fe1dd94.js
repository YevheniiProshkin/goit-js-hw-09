const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");t.addEventListener("click",(function(t){a=setInterval(d,1e3),t.target.disabled=!0,e.disabled=!1})),e.addEventListener("click",(function(e){clearInterval(a),e.target.disabled=!0,t.disabled=!1}));let a=null;function d(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}
//# sourceMappingURL=01-color-switcher.6fe1dd94.js.map