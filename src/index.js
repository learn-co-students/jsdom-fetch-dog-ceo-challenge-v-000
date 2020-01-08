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
  let dogBreedList = document.getElementById("dog-breeds");
  breeds = Object.keys(json.message)
  breeds.forEach(breed => {
    let newLiElem = document.createElement('li');
    newLiElem.textContent = breed;
    newLiElem.addEventListener('click', changeColor)
    dogBreedList.appendChild(newLiElem);

  })
}

function changeColor(event) {
  event.target.style.color = "blue";
}

function dropdownFiltering() {
  const dropdownElem = document.getElementById('breed-dropdown');
  const dogBreedList = document.getElementById("dog-breeds");
  dropdownElem.addEventListener('change', function (){
    dogBreedList.children.
    console.log(this.value)

  })
}



document.addEventListener('DOMContentLoaded', function () {
  getDogImages()
  getDogBreeds()
  dropdownFiltering()
})