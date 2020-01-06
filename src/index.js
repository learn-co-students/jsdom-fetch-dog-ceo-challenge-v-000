console.log('%c HI', 'color: firebrick')


const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function getDogImages() {
  return fetch(imgUrl).then(resp => resp.json()).then(json => addImageElements(json));
}

function addImageElements(json) {
  const imagesDiv = document.getElementById("dog-image-container");
  json.message.forEach(image => {
    console.log(image);
    const newImageElem = document.createElement('img');
    newImageElem.src = image;
    imagesDiv.appendChild(newImageElem);
  });
    
}


function getDogBreeds() {
  return fetch(breedUrl).then(resp => resp.json()).then(json => listBreeds(json));
}

function listBreeds(json) {
  const dropdown = document.getElementById("breed-dropdown")
  dropdown.forEach()
  console.log(json)
}

document.addEventListener('DOMContentLoaded', function () {
  getDogImages()
  getDogBreeds()
})