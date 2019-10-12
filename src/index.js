console.log('%c HI', 'color: firebrick')

function fetchDogImages() {
  return fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json => addDogImages(json))
}

function addDogImages(json) {
  const imageContainer = document.getElementById("dog-image-container");
  json.message.forEach(image => {
    const newImg = document.createElement('img');
    newImg.src = image;
    imageContainer.appendChild(newImg);
  })
}

function fetchBreeds() {
  return fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(json => addBreeds(json))
}

function addBreeds(json) {
  const dogBreeds = document.getElementById("dog-breeds");
  json.message.forEach(breed => {
    const li = document.createElement('li');
    li.innerHTML = `<li>${breed}</li>`;
    dogBreeds.appendChild(li);
  })
}

document.addEventListener("DOMContentLoaded", function() {
  fetchDogImages()
})
