console.log('%c HI', 'color: firebrick')

let breeds = []

function fetchDogPics() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

  fetch(imgUrl)
    .then(response => response.json())
    .then(json => {
      for (const image in json.message) {
        renderDogPics(json.message[image])
      }
    })
}

function renderDogPics(dogPic) {
  const main = document.getElementById('dog-image-container')
  const image = document.createElement('img')

  image.src = dogPic
  main.appendChild(image)
}

function fetchDogBreeds() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'

  fetch(breedUrl)
    .then(response => response.json())
    .then(json => {
      // the return value is an Array containing all of the keys at the top level of the Object
      breeds = Object.keys(json.message)
      // display all dog breeds on page
      renderDogBreeds(breeds)
      // filter breeds that start with a particular letter
      addBreedSelectListener()
    })
}

function renderDogBreeds(breeds) {
  const ul = document.getElementById('dog-breeds')

  for (breed of breeds) {
    const li = document.createElement('li')

    li.innerText = breed
    ul.appendChild(li)
    li.addEventListener('click', changeColor)
  }
}

function changeColor(event) {
  event.target.style.color = 'blue'
}

function addBreedSelectListener() {
  const dropDown = document.getElementById('breed-dropdown')

  dropDown.addEventListener('change', updateBreedList)
}

function updateBreedList(event) {
  // get the <ul>
  const breedsList = document.getElementById('dog-breeds')
  // remove existing <li>
  breedsList.querySelectorAll('li').forEach(n => n.remove());
  // update <ul> with breeds that start with event.target.value
  renderDogBreeds(breeds.filter(breed => breed.startsWith(event.target.value)));
}

document.addEventListener('DOMContentLoaded', function() {
  fetchDogPics()
  fetchDogBreeds()
})