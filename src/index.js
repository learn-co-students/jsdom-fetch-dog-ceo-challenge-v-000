let breeds = [];

document.addEventListener('DOMContentLoaded', function() {
  loadImgs();
  loadBreedOptions();
});


function loadImgs() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl)
    .then(res => res.json())
    .then(results => {
      results.message.forEach(image => addImg(image))
    });
  }


  function addImg(dogImg) {
    let container = document.querySelector('#dog-image-container');
    let newDogImg = document.createElement('img');
    newDogImg.src = dogImg;
    container.appendChild(newDogImg);
  }

function loadBreedOptions() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch(breedUrl)
  .then(res => res.json())
  .then(results => {
    breeds = Object.keys(results.message);
    updateBreedList(breeds);
    addBreedSelectListener();
  });
}

function updateBreedList(breeds) {
  let ul = document.querySelector('#dog-breeds');
  removeChildren(ul);
  breeds.forEach(breed => addBreed(breed));
}

function removeChildren(element) {
  let child = element.lastElementChild;
  while (child) {
    element.removeChild(child);
    child = element.lastElementChild;
  }
}

function selectBreedsStartingWith(letter) {
  updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
}

function addBreedSelectListener() {
  let breedDropdown = document.querySelector('#breed-dropdown');
  breedDropdown.addEventListener('change', function (event) {
    selectBreedsStartingWith(event.target.value);
  });
}

function addBreed(breed) {
  let ul = document. querySelector('#dog-breeds');
  let li =  document.createElement('li');
  li.innerText = breed;
  li.style.cursor = 'pointer';
  ul.appendChild(li);
  li.addEventListener('click', colorChoice);
}

function colorChoice(event) {
  event.target.style.color = 'green'
}
