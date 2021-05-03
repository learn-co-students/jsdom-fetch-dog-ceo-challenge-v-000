console.log('%c HI', 'color: firebrick');

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

document.addEventListener("DOMContentLoaded", function() {
  fetchImages();
  fetchBreeds();
  getInput();
})

function fetchImages() {
  fetch(imgUrl)
  .then(resp => resp.json())
  .then(json => renderImages(json))
}

function renderImages(json) {
  const dogImages = document.getElementById('dog-image-container')
  json.message.forEach(image => {
    let img = document.createElement('img')

    dogImages.appendChild(img)
    img.src = image
  })
}

const breedUrl = 'https://dog.ceo/api/breeds/list/all';

function fetchBreeds() {
  fetch(breedUrl)
  .then(resp => resp.json())
  .then(json => renderBreeds(json))
}

function renderBreeds(json) {
  dogBreeds = document.getElementById('dog-breeds');
  breedNames = Object.keys(json.message);
  breedNames.forEach(breed => {
    let li = document.createElement('li')
    li.innerHTML = breed
    li.addEventListener("click", function() {
      li.style.color = "red"
    })
    dogBreeds.appendChild(li)
  })
}


function getInput() {
  menu = document.getElementById("breed-dropdown");
  menu.addEventListener("change", function() {
    filterBreeds();
  })
}

function filterBreeds() {
  dogBreeds.innerHTML = '';
  selectedBreeds = breedNames.filter(breed => breed[0].charAt(0) === menu.value);
  console.log(menu.value);
  selectedBreeds.forEach(breed => {
    console.log(breed)
    let li = document.createElement('li')
    li.innerHTML = breed
    li.addEventListener("click", function() {
      li.style.color = "red"
    })
  dogBreeds.appendChild(li);
  })
}
