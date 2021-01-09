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

var PNMSV= [["/2020/08/exercise-zone-persamaan-nilai-mutlak.html","/2021/01/exercise-zone-persamaan-nilai-mutlak.html"],[],[]];
var PtNMSV = [["/2020/03/exercise-zone-pertidaksamaan-nilai.html","/2020/09/exercise-zone-pertidaksamaan-nilai.html"],["/2020/03/sbmptn-zone-pertidaksamaan-nilai-mutlak.html"],[]];
var BarDerArit = [["/2020/08/exercise-zone-barisan-dan-deret.html","/2020/08/exercise-zone-barisan-dan-deret_26.html","/2020/11/exercise-zone-barisan-dan-deret.html"],["/2020/08/sbmptn-zone-barisan-dan-deret-aritmetika.html"],["/2020/08/olimpiade-zone-barisan-dan-deret.html"]];
var idtipe=[["navstandar","standar"],["navsbmptn","sbmptn"],["navhots","hots"]];
var persling = [["/2020/03/exercise-zone-persamaan-lingkaran.html"],[],[]];
var sukban = [["/2018/02/suku-banyak-polinom-soal-dan-pembahasan.html","/2019/07/suku-banyak-polinom-2-soal-dan.html"],[],["https://www.matematikazone.id/2020/09/hots-zone-suku-banyak-polinom.html"]];
var peldistbin = [["/2021/01/exercise-zone-peluang-distribusi.html"],[],[]];
var himp = [["/2019/08/himpunan-soal-dan-pembahasan.html"],[],["/2020/10/hots-zone-himpunan.html"]];
function soal(materi, tipesoal, halaman)  {
      for (var indeks2 = 0; indeks2 < 3; indeks2++) {
         if (materi[tipesoal + indeks2 - 1].length > 0) {
            document.getElementById(idtipe[indeks2][0]).classList.replace("d-none", "d-block");
            document.getElementById(idtipe[indeks2][1]).setAttribute("href", materi[tipesoal + indeks2 - 1][0]);
         }
      }
      var pagi = document.getElementsByClassName("pagi");
      var navi = document.getElementsByClassName("navi");
      if (materi[tipesoal - 1].length > 1) {
         for (var indeks10 = 0; indeks10 < navi.length; indeks10++) {
            navi[indeks10].classList.replace("d-none", "d-block");
            for (var indeksnav = 0; indeksnav < materi[tipesoal - 1].length; indeksnav++) {
               pagi[indeks10].innerHTML += "<li class='page-item'><a class='page-link' href='" + materi[tipesoal - 1][indeksnav] + "'>" + (indeksnav + 1) + "</a></li>";
            }
            pagi[indeks10].getElementsByTagName("li")[halaman - 1].getElementsByTagName("a")[0].removeAttribute("href");
            pagi[indeks10].getElementsByTagName("li")[halaman - 1].classList.add("active");
         }
      }
      kasihin((halaman - 1) * 10 + 1);
   }