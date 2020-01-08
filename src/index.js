console.log('%c HI', 'color: firebrick')


const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'



function getDogImages() {
  return fetch(imgUrl).then(resp => resp.json()).then(json => addImageElements(json));
}

function addImageElements(json) {
  const imagesDiv = document.getElementById("dog-image-container");
  json.message.forEach(image => {
    const newImageElem = document.createElement('img');
    newImageElem.src = image;
    imagesDiv.appendChild(newImageElem);
  });
    
}


function getDogBreeds() {
  return fetch(breedUrl).then(resp => resp.json()).then(json => listBreeds(json));
}

function listBreeds(json) {
  const dogBreedList = document.getElementById("dog-breeds");
  breeds = Object.keys(json.message)
  breeds.forEach(breed => {
    const newLiElem = document.createElement('li');
    newLiElem.textContent = breed;
    dogBreedList.appendChild(newLiElem);

  })
  // const allLiElements = document.getElementsByTagName('li');
  dogBreedList.addEventListener('click', function (event) {
    for (const liElem of dogBreedList.childNodes) {
      if (event.target.innerText === liElem.innerText) {
        liElem.style.color = "blue"
      }
    }
  })
}



document.addEventListener('DOMContentLoaded', function () {
  getDogImages()
  getDogBreeds()
})