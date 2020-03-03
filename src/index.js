console.log('%c HI', 'color: firebrick')

let dogBreeds = [];

document.addEventListener('DOMContentLoaded', function() {
  loadImages();
  DogBreeds();
})

function loadImages() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl)
    .then(response => response.json())
    .then(results => {
      results.message.map(image => addImage(image))
    });
}

function addImage(imgUrl) {
  let imageContainer = document.querySelector('#dog-image-container');
  let newDogPic = document.createElement('img');
  newDogPic.src = imgUrl;
  imageContainer.appendChild(newDogPic);
}

function DogBreeds() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch(breedUrl)
    .then(response => response.json())
    .then(results => {
      dogBreeds = Object.keys(results.message);
      updateBreedList(dogBreeds);
      addBreedSelectListener();
    });
}

function updateBreedList(dogBreeds) {
  let ul = document.querySelector('#dog-breeds');
  removeChildren(ul);
  dogBreeds.map(breed => addBreed(breed));
}

function removeChildren(element) {
  let child = element.lastElementChild;
  while (child) {
    element.removeChild(child);
    child = element.lastElementChild;
  }
}

function addBreed(breed) {
  let ul = document.querySelector('#dog-breeds');
  let li = document.createElement('li');
  li.innerText = breed;
  ul.appendChild(li);
  li.addEventListener('click', updateBreedTextColor);
}

function addBreedSelectListener() {
  let breedDropdown = document.querySelector('#breed-dropdown');
  breedDropdown.addEventListener('change', function(event) {
    selectBreedsStartingWith(event.target.value);
  });
}

function updateBreedTextColor(onClick) {
  onClick.target.style.color = 'aqua';
}

function selectBreedsStartingWith(letter) {
  updateBreedList(dogBreeds.filter(breed => breed.startsWith(letter)));
}
