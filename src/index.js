console.log('%c HI', 'color: firebrick');
const imgUrl = 'https://dog.ceo/api/breeds/image/random/4';
const breedUrl = 'https://dog.ceo/api/breeds/list/all';


document.addEventListener('DOMContentLoaded', function(e) {

  addImagesToDom();
  addBreedListToDom();

  //const dropdown = document.getElementById('breed-dropdown');

  //dropdown.addEventListener('change', function(e) {
  //  const dogBreeds = document.getElementById('dog-breeds').getElementsByTagName('li');
  //  const selectedValue = dropdown.options[dropdown.selectedIndex].value;

    //dogBreeds.forEach(function(breed) {
      //if (breed.innerText[0] !== selectedValue) {
        //breed.style.display = none;
      //}
    //});

    //for (const breed of dogBreeds) {
    //  if (breed.innerText[0] !== selectedValue) {
    //    document.
    //    breed.style.display = none;
    //  }
  //  }
  //});


})

function addImagesToDom() {
  const imgContainer = document.getElementById("dog-image-container");

  fetch(imgUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    const imageArray = json.message;
    for (const element of imageArray) {
      let img = document.createElement('img');
      img.src = element;
      imgContainer.appendChild(img);
    }
  });
}

function addBreedListToDom() {
  const dogBreedContainer = document.getElementById("dog-breeds");

  fetch(breedUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    for (const breed in json.message) {
      let li = document.createElement('li');
      li.innerText = breed;
      dogBreedContainer.appendChild(li);
      li.addEventListener('click', function(e) {
        this.style.color = 'red';
      });
    }
    addBreedSelectListener();
  });
}

function addBreedSelectListener() {
  const dropdown = document.getElementById('breed-dropdown');
  dropdown.addEventListener('change', function(e) {
    selectBreedsStartingWith(event.target.value);
  });
}

function selectBreedsStartingWith(letter) {
  
}

//document.addEventListener('click')
