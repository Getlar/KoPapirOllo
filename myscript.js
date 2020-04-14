var egymasUtaniNyeresegek = 0;


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
