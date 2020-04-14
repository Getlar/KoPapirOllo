
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
    if (sorozat < 5) {
      alert("Még nem érted el az ötöt!")
    }else{
      window.location.href = "https://getlar.github.io/WebPage";
    }
  }

  var nyert = 0;
  var vesztett = 0;
  var dontetlen = 0;
  var sorozat = 0;
  var nyertecske = document.getElementById('nyert');
  var vesztecske = document.getElementById('vesztett');
  var dontetlenecske = document.getElementById('dont');
  var sorozatocska = document.getElementById('sorozat');
  var lehetosegek = ['ollo','ko','papir'];

  function ollo(){
    var gepValasztas = Math.floor(Math.random()*3);
    if (lehetosegek[gepValasztas] === 'ollo'){
      dont(lehetosegek[gepValasztas]);
    }
    if (lehetosegek[gepValasztas] === 'ko'){
      vesztettel(lehetosegek[gepValasztas]);
    }
    if (lehetosegek[gepValasztas] === 'papir'){
      nyertel(lehetosegek[gepValasztas]);
    }
  }

  function papir(){
    var gepValasztas = Math.floor(Math.random()*3);
    if (lehetosegek[gepValasztas] === 'ollo'){
      vesztettel(lehetosegek[gepValasztas]);
    }
    if (lehetosegek[gepValasztas] === 'ko'){
      nyertel(lehetosegek[gepValasztas]);
    }
    if (lehetosegek[gepValasztas] === 'papir'){
      dont(lehetosegek[gepValasztas]);
    }
  }

  function ko(){
    var gepValasztas = Math.floor(Math.random()*3);
    if (lehetosegek[gepValasztas] === 'ollo'){
      nyertel(lehetosegek[gepValasztas]);
    }
    if (lehetosegek[gepValasztas] === 'ko'){
      dont(lehetosegek[gepValasztas]);
    }
    if (lehetosegek[gepValasztas] === 'papir'){
      vesztettel(lehetosegek[gepValasztas]);
    }
  }

  function nyertel(gepValasz){
    document.getElementById('nyertele').innerHTML = "Nyertél!";
    document.getElementById('nyertele').style.color = "green";
    if (gepValasz === 'ko') {
      document.getElementById('gepkep').src="assetek/ko.png";
    }
    if (gepValasz === 'papir') {
      document.getElementById('gepkep').src="assetek/papi.png";
    }
    if (gepValasz === 'ollo') {
      document.getElementById('gepkep').src="assetek/ollo.png";
    }
    document.getElementById('geperedmeny').style.display = "block";
    setTimeout(function(){
      document.getElementById('geperedmeny').style.display = "none";
    },1000)
    sorozat++;
    nyert ++;
    nyertecske.innerHTML = nyert;
    sorozatocska.innerHTML = sorozat;
    doIT();
  }

  function vesztettel(gepValasz){
    document.getElementById('nyertele').innerHTML = "Vesztettél!";
    document.getElementById('nyertele').style.color = "red";
    if (gepValasz === 'ko') {
      document.getElementById('gepkep').src="assetek/ko.png";
    }
    else if (gepValasz === 'papir') {
      document.getElementById('gepkep').src="assetek/papi.png";
    }
    else if (gepValasz === 'ollo') {
      document.getElementById('gepkep').src="assetek/ollo.png";
    }
    document.getElementById('geperedmeny').style.display = "block";
    setTimeout(function(){
      document.getElementById('geperedmeny').style.display = "none";
    },1000)
    vesztett ++;
    sorozat = 0;
    sorozatocska.innerHTML = sorozat;
    vesztecske.innerHTML = vesztett;
    doIT();
  }

  function dont(gepValasz){
    document.getElementById('nyertele').innerHTML = "Döntetlen!";
    document.getElementById('nyertele').style.color = "yellow";
    if (gepValasz === 'ko') {
      document.getElementById('gepkep').src="assetek/ko.png";
    }
    else if (gepValasz === 'papir') {
      document.getElementById('gepkep').src="assetek/papi.png";
    }
    else if (gepValasz === 'ollo') {
      document.getElementById('gepkep').src="assetek/ollo.png";
    }
    document.getElementById('geperedmeny').style.display = "block";
    setTimeout(function(){
      document.getElementById('geperedmeny').style.display = "none";
    },1000)
    dontetlen++;
    sorozat = 0;
    sorozatocska.innerHTML = sorozat;
    dontetlenecske.innerHTML = dontetlen;
    doIT();
  }
  function doIT(){
    if (vesztett == 10) {
      setTimeout(function(){
        window.alert("Sajnos Vesztettél!");
        nyert = 0;
        vesztett = 0;
        dontetlen = 0;
        sorozat = 0;
        sorozatocska.innerHTML = sorozat;
        vesztecske.innerHTML = vesztett;
        nyertecske.innerHTML = nyert;
        dontetlenecske.innerHTML = dontetlen;
      },1500)
    }
    if (nyert == 10){
      setTimeout(function(){
        window.alert("Jó játék volt, Nyertél!");
        nyert = 0;
        vesztett = 0;
        dontetlen = 0;
        sorozat = 0;
        sorozatocska.innerHTML = sorozat;
        vesztecske.innerHTML = vesztett;
        nyertecske.innerHTML = nyert;
        dontetlenecske.innerHTML = dontetlen;
      },1500)
  }
}
