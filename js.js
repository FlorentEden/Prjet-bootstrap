var caat = 1;

function CreateCommentaire() {
  if (caat<2) {
    var carouselInner = document.getElementById('carouselInner');
    var carouselItem = document.createElement('div');
    carouselItem.setAttribute("class", "carousel-item");
    CreateCarouselIndicator();
    carouselInner.appendChild(carouselItem);
    var row = document.createElement('div');
    row.setAttribute("class", "row");
    carouselItem.appendChild(row);
    var col1 = document.createElement('div');
    col1.className += "col-6";
    col1.className += " col-md-6";
    row.appendChild(col1);
    var card = document.createElement('div');
    card.className += "card";
    card.className += " cardHeight";
    col1.appendChild(card);
    var cardBody = document.createElement('div');
    card.className += "card-body";
    card.appendChild(cardBody);
    var carouselBlue = document.createElement('div');
    carouselBlue.className += "carouselBlue";
    cardBody.appendChild(carouselBlue);
    var commentaireText = document.getElementById('inputCreate');
    var pCarousel = document.createElement('p');
    pCarousel.className += "pcarousel";
    pCarousel.innerText = commentaireText.value;
    cardBody.appendChild(pCarousel);
    caat++;
  }   else if (caat==2) {
    carouselInner = document.getElementById('carouselInner');
    var tab = [];
    tab.push(carouselInner.children);
    var tabInner = tab[0];
    var tab2 = tabInner[tabInner.length-1].firstChild;
    console.log(tab2);
    var col1 = document.createElement('div');
    col1.className += "col-6";
    col1.className += " col-md-6";
    tab2.appendChild(col1);
    var card = document.createElement('div');
    card.className += "card";
    card.className += " cardHeight";
    col1.appendChild(card);
    var cardBody = document.createElement('div');
    card.className += "card-body";
    card.appendChild(cardBody);
    var carouselBlue = document.createElement('div');
    carouselBlue.className += "carouselBlue";
    cardBody.appendChild(carouselBlue);
    var commentaireText = document.getElementById('inputCreate');
    var pCarousel = document.createElement('p');
    pCarousel.className += "pcarousel";
    pCarousel.innerText = commentaireText.value;
    cardBody.appendChild(pCarousel);
    caat = 1;
  }
}

function CreateCarouselIndicator() {
  var carouselIndicatorLI = document.getElementsByClassName('petitRond');
  var carouselIndicatorOL = document.getElementById('indicatorsOl');
  var carouselIndicator = document.createElement('li');
  carouselIndicator.setAttribute('class', 'petitRond');
  carouselIndicator.setAttribute('data-slide-to', carouselIndicatorLI.length);
  carouselIndicator.setAttribute('data-target', '#carouselExampleIndicators');
  carouselIndicatorOL.appendChild(carouselIndicator);
}

function searchDomain() {
  var request = new XMLHttpRequest();
  var inputValue = document.getElementById('InputSearch').value;

  request.open('GET', 'https://private-5c1a2-dnsflo1.apiary-mock.com/');

  request.onreadystatechange = function () {
    if (this.readyState === 4) {
      console.log('Status:', this.status);
      console.log('Headers:', this.getAllResponseHeaders());
      console.log('Body:', JSON.parse(this.response));
      var fffff = JSON.parse(this.response);
      console.log(fffff.list);
      for (var i = 0; i < fffff.list.length; i++) {
        if (fffff.list[i].name == inputValue) {
          alert(fffff.list[i].name+" "+fffff.list[i].price);
        }
      }
    }
  };

  request.send();
}


  //setInterval(postComm, 1500);


var cccccc;
var dddd;
var newComm = 0;

function postComm(){
  var request = new XMLHttpRequest();
  request.open('GET', 'http://92.222.69.104/articleImage/all');
  request.onreadystatechange = function () {
    if (this.readyState === 4) {
      cccccc = JSON.parse(this.response);
      console.log(cccccc.content);
      dddd = cccccc.content;
      if (newComm < dddd.length) {
        CreateCommentaire2();
        console.log(newComm);
      }
      newComm++;
    }
  };

  request.send();
}

function arrestation() {
  var data = null;

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
  	if (this.readyState === this.DONE) {
  		console.log(this.responseText);
  	}
  });

  xhr.open("GET", "https://produkce-geocoding-v1.p.rapidapi.com/broadcast/weather-forecast?continent=EU");
  xhr.setRequestHeader("x-rapidapi-host", "produkce-geocoding-v1.p.rapidapi.com");
  xhr.setRequestHeader("x-rapidapi-key", "66d94958b5msh623fd265b765373p131597jsn9739ef9be180");

  xhr.send(data);
}

var nbArticle = 0;


function CreateCommentaire2() {
  if (caat<2 && dddd[nbArticle].category == "Fruit") {
    var carouselInner = document.getElementById('carouselInner');
    var carouselItem = document.createElement('div');
    carouselItem.setAttribute("class", "carousel-item");
    CreateCarouselIndicator();
    carouselInner.appendChild(carouselItem);
    var row = document.createElement('div');
    row.setAttribute("class", "row");
    carouselItem.appendChild(row);
    var col1 = document.createElement('div');
    col1.className += "col-6";
    col1.className += " col-md-6";
    row.appendChild(col1);
    var card = document.createElement('div');
    card.className += "card";
    card.className += " cardHeight";
    col1.appendChild(card);
    var cardBody = document.createElement('div');
    card.className += "card-body";
    card.appendChild(cardBody);
    var carouselBlue = document.createElement('div');
    carouselBlue.className += "carouselBlue";
    cardBody.appendChild(carouselBlue);
    var pCarousel = document.createElement('p');
    pCarousel.className += "pcarousel";
    console.log(dddd);
    pCarousel.innerText = dddd[nbArticle].descriptionSmall;
    cardBody.appendChild(pCarousel);
    var pCarousel2 = document.createElement('p');
    pCarousel2.className += "auteurp";
    pCarousel2.innerText = dddd[nbArticle].auteur;
    cardBody.appendChild(pCarousel2);
    var pCarousel3 = document.createElement('p');
    pCarousel3.className += "companyp";
    pCarousel3.innerText = "- "+dddd[nbArticle].company;
    cardBody.appendChild(pCarousel3);
    caat++;
    nbArticle++;


  }   else if (caat==2 && dddd[nbArticle].category == "Fruit") {
    carouselInner = document.getElementById('carouselInner');
    var tab = [];
    tab.push(carouselInner.children);
    var tabInner = tab[0];
    var tab2 = tabInner[tabInner.length-1].firstChild;
    var col1 = document.createElement('div');
    col1.className += "col-6";
    col1.className += " col-md-6";
    tab2.appendChild(col1);
    var card = document.createElement('div');
    card.className += "card";
    card.className += " cardHeight";
    col1.appendChild(card);
    var cardBody = document.createElement('div');
    card.className += "card-body";
    card.appendChild(cardBody);
    var carouselBlue = document.createElement('div');
    carouselBlue.className += "carouselBlue";
    cardBody.appendChild(carouselBlue);
    var pCarousel = document.createElement('p');
    pCarousel.className += "pcarousel";
    pCarousel.innerText = dddd[nbArticle].descriptionSmall;
    cardBody.appendChild(pCarousel);
    var pCarousel2 = document.createElement('p');
    pCarousel2.className += "auteurp";
    pCarousel2.innerText = dddd[nbArticle].auteur;
    cardBody.appendChild(pCarousel2);
    var pCarousel3 = document.createElement('p');
    pCarousel3.className += "companyp";
    pCarousel3.innerText = "- "+dddd[nbArticle].company;
    cardBody.appendChild(pCarousel3);
    caat = 1;
    nbArticle++;
  }
}
