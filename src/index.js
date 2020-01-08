document.addEventListener("DOMContentLoaded", () => {
    loadImages();
    loadBreeds();
});


console.log('%c HI', 'color: firebrick')

function loadImages() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            // add image elements to the DOM FOR EACH image in the array //
            json.message.forEach(image => addImages(image));
        });
}

function addImages(image, index) {
    images = document.querySelector('#dog-image-container');
    newImage = document.createElement("img");
    newImage.src = image;
    images.appendChild(newImage);
}



// const breedUrl = 'https://dog.ceo/api/breeds/list/all'

// After the first challenge is completed, add JavaScript so that:

//     on page load, fetch all the dog breeds using the url above ⬆️
//     add the breeds to the page in an <ul> (take a look at the included index.html)

function loadBreeds() {
    fetch("https://dog.ceo/api/breeds/list/all")
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            json.message.forEach(breed => addBreeds(breed));
        });
}

function addBreeds(breed, index) {
    breeds = document.querySelector('#dog-breeds');
    newBreed = document.createElement("li");
    newBreed.innerText = breed;
    breeds.appendChild(newBreed);
}


// let breeds = [];

// document.addEventListener('DOMContentLoaded', function () {
//   loadImages();
//   loadBreedOptions();
// });

// function loadImages() {
//   const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
//   fetch(imgUrl)
//     .then(res=> res.json())
//     .then(results => {
//       results.message.forEach(image => addImage(image))
//     });
// }

// function addImage(dogPicUrl) {
//   let container = document.querySelector('#dog-image-container');
//   let newImageEl = document.createElement('img');
//   newImageEl.src = dogPicUrl;
//   container.appendChild(newImageEl);
// }

// function loadBreedOptions() {
//   const breedUrl = 'https://dog.ceo/api/breeds/list/all'
//   fetch(breedUrl)
//     .then(res => res.json())
//     .then(results => {

//       breeds = Object.keys(results.message);
//       updateBreedList(breeds);
//       addBreedSelectListener();
//     });
// }

// function updateBreedList(breeds) {
//   let ul = document.querySelector('#dog-breeds');
//   removeChildren(ul);
//   breeds.forEach(breed => addBreed(breed));
// }

// function removeChildren(element) {
//   let child = element.lastElementChild;
//   while (child) {
//     element.removeChild(child);
//     child = element.lastElementChild;
//   }
// }

// function selectBreedsStartingWith(letter) {
//   updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
// }

// function addBreedSelectListener() {
//   let breedDropdown = document.querySelector('#breed-dropdown');
//   breedDropdown.addEventListener('change', function (event) {
//     selectBreedsStartingWith(event.target.value);
//   });
// }

// function addBreed(breed) {
//   let ul = document.querySelector('#dog-breeds');
//   let li = document.createElement('li');
//   li.innerText = breed;
//   li.style.cursor = 'pointer';
//   ul.appendChild(li);
//   li.addEventListener('click', updateColor);
// }

// function updateColor(event) {
//   event.target.style.color = 'palevioletred';
// }