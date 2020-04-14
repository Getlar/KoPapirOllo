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
  window.location.href = "https://getlar.github.io/WebPage";
}
