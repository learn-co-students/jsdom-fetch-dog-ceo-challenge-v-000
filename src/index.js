document.addEventListener('DOMContentLoaded', () => {
  fetchImages();
  fetchDogBreeds()
})

const fetchImages = () => {
  const imgURL = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgURL)
  .then(response => response.json())
  .then(json => addImages(json.message))
}
const breeds = []

const fetchDogBreeds= () => {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch(breedUrl)
  .then(response => response.json())
  .then(json => addDogBreeds(json))
}

const addImages = (json) => {
  const images = json
  let imageContainer = document.querySelector('#dog-image-container')
  images.map(image => {
    let imgItem = document.createElement('img')
    imgItem.src = image
    imageContainer.append(imgItem)
  })
}

const addDogBreeds = (json) => {
  const dogBreeds = Object.keys(json.message)
  breeds.push(...dogBreeds)
  let breedsList = document.querySelector('#dog-breeds')
  let dropdown = document.querySelector('#breed-dropdown')
  dogBreeds.map(breed => {
    let listItem = document.createElement('li')
    listItem.innerHTML = breed
    listItem.addEventListener('click', changeColor)
    breedsList.append(listItem)
    dropdown.addEventListener('change', filterBreed)
  })
}
const filterBreed = (event) => {
  // filter through breeds and see if it starts with (event.target.value)
  const letter = event.target.value
  const filtered = breeds.filter(breed => breed.startsWith(letter))
  // clear ul#dog-breeds and add new filtered ones 
  const breedsList = document.querySelector('#dog-breeds')
  breedsList.innerHTML = ''
  addFilteredBreeds(breedsList, filtered)
}

const addFilteredBreeds = (list, filtered) => {
  filtered.map(breed => {
    let listItem = document.createElement('li')
    listItem.innerHTML = breed;
    list.append(listItem)
  })
}

function changeColor() {
// have 'this'
  let color = random_rgba()
  this.style.color = color 
}

function random_rgba() {
  var o = Math.round, r = Math.random, s = 255;
  return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}