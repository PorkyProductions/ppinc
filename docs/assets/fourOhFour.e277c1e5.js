import"./modulepreload-polyfill.0d94a2e8.js";/* empty css                    *//* empty css               */const e=document.querySelector("hog"),r=document.querySelector("noHog"),o=document.querySelector("404");let t=()=>{const n=e.clientWidth,c=e.clientHeight;e.style.transform=`scale(${n/c})`,requestAnimationFrame(t)};e?t():(console.log("Hedgehog not found"),r.innerHTML="Hedgehog not found");o.addEventListener("click",()=>{o.style.fontSize=`${parseInt(o.style.fontSize)+1}px`});
