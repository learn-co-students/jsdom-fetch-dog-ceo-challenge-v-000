console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const images = document.getElementById('dog-image-container')
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener("DOMContentLoaded", function(){
    loadImages();
    loadBreeds();
})

function loadImages() {
  fetch(imgUrl)
    .then((response) =>
      response.json())
    .then(json => {json.message.forEach(image => addImage(image))
    })
  }
  
function addImage(photo){
    let container = document.querySelector('#dog-image-container');
    let imageElement = document.createElement('img');
    imageElement.src = photo;
    container.appendChild(imageElement);
}

function loadBreeds() {
  fetch(breedUrl)
    .then(resp => resp.json())
    .then(results => {

      breeds = Object.keys(results.message);
      breeds.forEach(breed => addBreed(breed))      
    })    
  }

function addBreed(breed) {
  let list = document.getElementById('dog-breeds');
  let listElement = document.createElement('li');
  listElement.innerText = breed;
  list.appendChild(listElement);
  listElement.addEventListener('click', changeColor)
}

  function changeColor(event) {
  event.target.style.color = 'green';
}

