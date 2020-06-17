console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {
  fetchAndLoadImages();
  fetchAndLoadBreeds();
});

function fetchAndLoadImages() {
  fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(response => response.json())
    .then(results => {
      results.message.forEach(image => addImage(image))
    });
}

function addImage(imageUrl) {
  const container = document.querySelector('#dog-image-container');
  const newImage = document.createElement('img');
  newImage.src = imageUrl;
  container.appendChild(newImage);
}

function fetchAndLoadBreeds() {
  fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(results => {
      // get breed names
      breeds = Object.keys(results.message);
      updateBreeds(breeds);
      addBreedSelectListener();
    });
}

function updateBreeds(breeds) {
  let ul = document.querySelector('#dog-breeds');
  // remove the childern of ul
  let child = ul.lastElementChild;
  while (child) {
    ul.removeChild(child);
    child = ul.lastElementChild;
  }
  breeds.forEach(breed => addBreed(breed));
}

function addBreed(breed) {
  let ul = document.querySelector('#dog-breeds');
  let li = document.createElement('li');
  li.innerText = breed;
  li.style.cursor = 'pointer';
  ul.appendChild(li);
  li.addEventListener('click', (event) => {
    event.target.style.color = 'red';
  });
}

function addBreedSelectListener() {
  let breedDropdown = document.querySelector('#breed-dropdown');
  breedDropdown.addEventListener('change', (event) => {
    selectBreedsStartingWith(event.target.value);
  });
}

function selectBreedsStartingWith(letter) {
  updateBreeds(breeds.filter(breed => breed.startsWith(letter)));
}


