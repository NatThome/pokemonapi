let sectionCard = document.getElementById('card')

const url = 'https://sky-frontend.herokuapp.com/movies';
fetch(url)
  .then(res => res.json())
  .then(data => {
    data.map(element => {
      for (let elem in element.movies) {
      //  sectionCard.innerHTML +=`${element.movies[elem].title}`;
        for (let pudim in element.movies[elem].images) {
          sectionCard.innerHTML +=          
        `<div class="card" style="margin: 10px">
            <img class="card-img-top" style="max-width: 18rem;" src="${(element.movies[elem].images[pudim].url)}" alt="Card image cap">
          
        </div>`
          break;
        }
      }
    })
  }
  )