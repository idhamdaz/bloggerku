var navi = ["/2020/08/exercise-zone-persamaan-nilai-mutlak.html"];
var pagi = document.getElementsByClassName("pagi");
if(navi.length>1){
    document.getElementById("linknav1").classList.replace("d-none","d-block");
    document.getElementById("linknav2").classList.replace("d-none","d-block");
    for (var indeks10=0;indeks10<pagi.length;indeks10++){
        for(var indeksnav=0;indeksnav<navi.length;indeksnav++){
            pagi[indeks10].innerHTML += "<li class='page-item'><a class='page-link' href='"+navi[indeksnav]+"'>"+(indeksnav+1)+"</a></li>"
        }
    }
}
function navke(berapa){
    if(navi.length>1){
        for(var indeks11=0;indeks11<pagi.length;indeks11++){
            document.getElementsByClassName("pagi")[indeks11].getElementsByTagName("li")[berapa-1].getElementsByTagName("a")[0].classList.add("disabled");
            document.getElementsByClassName("pagi")[indeks11].getElementsByTagName("li")[berapa-1].classList.add("active")
        }
    }
    kasihin((berapa-1)*10+1);
}
