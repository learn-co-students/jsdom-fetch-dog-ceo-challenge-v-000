/*
  NOTE: these are the functions created from the initial building
        blocks in preliminary_scripts.js

        An illustration for the flatiron_index.js (final) solution is located here:
        https://i.imgur.com/Gp7XTqb.jpg
*/
let breeds = [];

document.addEventListener('DOMContentLoaded', function () {
  loadImages();
  addDogNamesToBreedsArray();
  filterBreeds()
});

function loadImages() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl)
    .then(res=> res.json())
    .then(results => {
      results.message.forEach(image => addPicture(image))
    });
}

function addPicture(image) {
  let container = document.querySelector('#dog-image-container');
  let newImageEl = document.createElement('img');
  newImageEl.src = image;
  container.appendChild(newImageEl);
  console.log("Added image of a dog")
}

function addDogNamesToBreedsArray() {
  fetch('https://dog.ceo/api/breeds/list/all')
  .then(function(response) {
    return response.json();
  })
  .then(results => {

    breeds = Object.keys(results.message);
    addDogNamesToDOM(breeds)
  });
  console.log("Added dog names to the breeds array")
}

function addDogNamesToDOM(breeds) { // the (breeds) variable is used in the filterBreeds function where we replace "breeds" with: "myUpdatedBreedList"
  let ul = document.querySelector('#dog-breeds');

  /* NOTE: this code will not run when called directly in the DOMContentLoaded event */
  /* this whole "addDogNamesToDOM" function has to happen right after the breeds array is populated */
  /* therefore, this function is called inside the "addDogNamesToBreedsArray" function  */
  for (const key of breeds) {
    li = document.createElement('li');
    li.innerText = key;
    li.style.cursor = 'pointer';
    ul.appendChild(li);
    li.addEventListener('click', updateColor);
  }

  console.log("Added dog names to the DOM")
}

function updateColor() {
  event.target.style.color = 'palevioletred';
  console.log("Updated the text color")
}

function filterBreeds() {
  let breedDropdown = document.querySelector('#breed-dropdown');
  breedDropdown.addEventListener('change', function (event) {
    console.log('Alphabet selector was changed');
    console.log(event.target.value)
    deleteAllDogNames()
    myUpdatedBreedList = breeds.filter(breed => breed.startsWith(event.target.value))
    addDogNamesToDOM(myUpdatedBreedList)
  });
}

function deleteAllDogNames(){
  ul = document.querySelector('#dog-breeds');
  let child = ul.lastElementChild;
  while (child) {
    ul.removeChild(child);
    child = ul.lastElementChild;
  }
}
