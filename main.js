let carousel = document.getElementById('carousel')
let sectionCard = document.getElementById('card')

const url = 'https://sky-frontend.herokuapp.com/movies';

function getApi() {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      data.map(element => {
        getHighlights(element.items)
      })
    })
    fetch(url)
    .then(res => res.json())
    .then(data => {
        getCarouselCat(data[2].movies)
    })
}

function getHighlights(e) {
  carousel.innerHTML =
    `<div class="carousel-item active">
      <img class="d-block w-100" src="${e[0].images[0].url}"  alt="Highlights">
      <div class="carousel-caption d-none d-md-block"></div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="${e[1].images[0].url}"  alt="Highlights">
      <div class="carousel-caption d-none d-md-block"></div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="${e[2].images[0].url}"  alt="Highlights">
      <div class="carousel-caption d-none d-md-block"></div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="${e[3].images[0].url}"  alt="Highlights">
      <div class="carousel-caption d-none d-md-block"></div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="${e[4].images[0].url}"  alt="Highlights">
      <div class="carousel-caption d-none d-md-block"></div>
    </div>` 
}

function getCarouselCat(obj) {
  let categories = new Map();
  for (let i = 0; i < obj.length; i++) {
    let splits = obj[i].categories.split(', ');
    splits.forEach(element => {
      let categName = categories.get(element);
      if (categName === undefined) {
        categName = [obj[i]];
        categories.set(element, categName);
      } else {
        categName.push(obj[i])
      }
    });
  }
  categories.forEach(function (obj, categoria) {
    let catTitle = document.createElement('h5')
    sectionCard.appendChild(catTitle)
    catTitle.innerHTML += categoria
    for (let i = 0; i < obj.length; i++) {
      sectionCard.innerHTML += 
      `<div  style="margin:10px;">
        <img src="${obj[i].images[0].url}" class="img-responsive" style="width:10vw" alt="Image">
      </div>`
    }
  }, categories)
}

getApi()