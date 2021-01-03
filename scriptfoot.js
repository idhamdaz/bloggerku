jadiin();
var apalah;

for(apalah=0;apalah < document.querySelectorAll("button").length;apalah++){
    if(document.querySelectorAll("button")[apalah].hasAttribute("data-target")){document.querySelectorAll("button")[apalah].setAttribute("data-bs-target",document.querySelectorAll("button")[apalah].getAttribute("data-target"))};
    if(document.querySelectorAll("button")[apalah].hasAttribute("data-toggle")){document.querySelectorAll("button")[apalah].setAttribute("data-bs-toggle",document.querySelectorAll("button")[apalah].getAttribute("data-toggle"))};
};
var cecelah;
for(cecelah=0;cecelah < document.querySelectorAll( ".text-right").length;cecelah++){
    document.querySelectorAll( ".text-right")[cecelah].className+= " text-end"
}
var dongdong;
for(dongdong=0;dongdong < document.querySelectorAll( ".float-right").length;dongdong++){
    document.querySelectorAll( ".float-right")[dongdong].className+= " float-end"
}    
var engingeng;
for(engingeng=0;engingeng < document.querySelectorAll( ".badge-danger ").length;engingeng++){
    document.querySelectorAll( ".badge-danger")[engingeng].className+= " bg-danger"
}
