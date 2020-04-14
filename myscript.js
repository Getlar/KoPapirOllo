document.addEventListener("DOMContentLoaded", function(event)){
  betoltes();
  var egymasUtaniNyeresegek = 0;
  var nyeresekSzama=0;
  var vesztesekSzama=0;
  var kovecske = document.getElementById('ko');
  var papirocska = document.getElementById('papir');
  var ollocska = document.getElementById('ollo');
  var nyertecske = document.getElementById('nyert');
  var vesztecske = document.getElementById('vesztett');
  var sorozatocska = document.getElementById('sorozat')
  ;

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      myBtn.style.display = "block";
    } else {
      myBtn.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  function returnMain(){
    window.location.href = "index.html";
  }

  function gotoPage(){
    if (egymasUtaniNyeresegek <5) {
      alert("Még nem érted el az ötöt!")
      return false;
    }else{
      window.location.href = "https://getlar.github.io/WebPage";
    }
  }
  function betoltes(){
    kovecske.addEventListener('click', ()=> felhasznaloKatt('ko'));
    ollocska.addEventListener('click', ()=> felhasznaloKatt('ollo'));
    papirocska.addEventListener('click', ()=> felhasznaloKatt('papir'));
  }
}
