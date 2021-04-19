console.log('%c HI', 'color: firebrick')


document.addEventListener('DOMContentLoaded', function () {
  loadImages();
  loadBreeds();
})

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

function addBreed(breed) {
  const breedList = document.getElementById('dog-breeds')
  let newBreed = document.createElement('li');
  newBreed.innerText = breed;
  newBreed.style.cursor = 'pointer';
  breedList.appendChild(newBreed)
  newBreed.addEventListener('click', colorChange)
}

function colorChange(event) {
  event.target.style.color = "lightgreen";
}

