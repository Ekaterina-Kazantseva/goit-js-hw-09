!function(){function t(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}var e=document.querySelector("body"),o=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]"),l=null;o.addEventListener("click",(function(){o.disabled=!0,n.disabled=!1,console.log("Start!"),e.style.backgroundColor=t(),l=setInterval((function(){e.style.backgroundColor=t()}),1500)})),n.addEventListener("click",(function(){o.disabled=!1,n.disabled=!0,clearInterval(l),console.log("Stop!")}))}();
//# sourceMappingURL=01-color-switcher.4417bef6.js.map