console.log('%c HI', 'color: firebrick')


document.addEventListener('DOMContentLoaded', function () {
  loadImages();
  loadBreeds();
})

//challenge 1
//on page load, fetches the images using the url above ⬆️
function loadImages() {
  const imgUrl = 'https://dog.ceo/api/breeds/image/random/4';
  fetch(imgUrl)
  //parses the response as JSON
  .then(response => response.json())
  
  // adds image elements to the DOM for each 🤔 image in the array
  .then(json => {
    for (const element of json.message) {
      addImage(element)
    }
  })
}

function addImage(url) {
  const container = document.getElementById('dog-image-container');
  let newDog = document.createElement('img');
  newDog.src = url;
  container.appendChild(newDog)
}


//Challenge 2
//on page load, fetches all the dog breeds using the url above ⬆️
function loadBreeds() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all';
  fetch(breedUrl)
    .then(response => response.json())
    .then(json => {
      const breedList = Object.keys(json.message)
      for (const breed of breedList) {
        addBreed(breed)
      }
    })
}
//adds the breeds to the page in the <ul> provided in index.html
function addBreed(breed) {
  const breedList = document.getElementById('dog-breeds')
  let newBreed = document.createElement('li');
  newBreed.innerText = breed;
  newBreed.style.cursor = 'pointer';
  breedList.appendChild(newBreed)
  newBreed.addEventListener('click', colorChange)
}

//challenge 4
//Once all of the breeds are rendered in the <ul>, add JavaScript so that, when the user clicks on any one of the <li>s, the font color of that <li> changes. This can be a color of your choosing.
function colorChange(event) {
  event.target.style.color = "lightgreen";
}

//Challenge 4
//Once we are able to load all of the dog breeds onto the page, add JavaScript so that the user can filter breeds that start with a particular letter using a dropdown.

const breedSelect = document.getElementById('breed-dropdown')
breedSelect.addEventListener('change', updateBreeds)

function updateBreeds(event) {
  letter = breedSelect.value
  
}


