MathJax={
    loader: {load: ['[tex]/color','[tex]/cancel','[tex]/enclose']},
    tex: {
       inlineMath: [['$', '$'], ['\\(', '\\)']],
       packages: {'[+]': ['color','cancel','enclose']},
       macros: {
          degree: "{^\\circ}"
       }
    },
    options:{
       skipHtmlTags: ["script","noscript","style","textarea","pre","code"]
    }
};
function jadiin(){
   var els = document.getElementsByTagName("m");
for (var i =0; i< els.length; i++) {
 e = els[i]
 e.id = "latex_temp_id"
 katex.render(e.textContent, latex_temp_id);
 e.id = "";
}
}
function jadiin2(){
   var els = document.getElementsByClassName("m")
for (var i =0; i< els.length; i++) {
 e = els[i]
 e.id = "latex_temp_id"
 katex.render(e.textContent, latex_temp_id);
 e.id = "";
}
}

function kasihin(awal){
   var banyaksoal = document.getElementsByClassName("nomor");
   var banyaktombol = document.getElementsByClassName("tbl");
   var jawaban = document.getElementsByClassName("isi");
   var tbltutup = document.getElementsByClassName("tutup");
   for(var indeks=0;indeks<banyaksoal.length;indeks++){
      banyaksoal[indeks].innerHTML = awal+indeks;
      banyaktombol[indeks].setAttribute("data-bs-target","#j"+indeks);
      banyaktombol[indeks].setAttribute("data-bs-toggle","collapse");
      jawaban[indeks].id = "j"+indeks;
      tbltutup[indeks].setAttribute("data-bs-target","#j"+indeks);
      tbltutup[indeks].setAttribute("data-bs-toggle","collapse");
  };
}
