const e=document.querySelector(".wall"),t=document.querySelector(".spider"),l=t.height/2,c=t.width/2,i=e.clientHeight,n=e.clientWidth;document.addEventListener("click",o=>{let d=o.clientX-e.offsetLeft-e.clientLeft-c,f=o.clientY-e.offsetTop-e.clientTop-l;t.style.left=`${d<0?0:d>n-2*c?n-2*c:d}px`,t.style.top=`${f<0?0:f>i-2*l?i-2*l:f}px`});//# sourceMappingURL=index.2c38e9a4.js.map

//# sourceMappingURL=index.2c38e9a4.js.map
