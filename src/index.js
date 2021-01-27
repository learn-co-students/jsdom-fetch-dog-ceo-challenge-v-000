let breeds = []
document.addEventListener("DOMContentLoaded", function() {
  loadImages()
  loadBreedOptions()
})


async function loadImages() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  const response = await fetch(imgUrl)
  const json = await response.json()
  json.message.forEach(image => addImage(image))
}


  function addImage(image) {
    let container = document.getElementById("dog-image-container")
    let newImgEl = document.createElement("img")
    newImgEl.src = image
    container.appendChild(newImgEl)
  }

  function loadBreedOptions() {
    const breedUrl = "https://dog.ceo/api/breeds/list/all"
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(results => {

      breeds = Object.keys(results.message);
      updateBreedList(breeds)
      addBreedSelectListener()
    })
  }

  function updateBreedList(breeds) {
    let ul = document.querySelector('#dog-breeds')
    removeChildren(ul)
    breeds.forEach(breed => addBreed(breed))
  }

  function removeChildren(element) {
    let child = element.lastElementChild;
    while (child) {
      element.removeChild(child)
      child = element.lastElementChild;
    }
  }

  function selectBreedStartingWith(letter) {
    updateBreedList(breeds.filter(breed => breed.startsWith(letter)))
  }

  function addBreedSelectListener() {
    let breedDropDown = document.querySelector('#breed-dropdown')
    breedDropDown.addEventListener('change', function (event) {
      selectBreedStartingWith(event.target.value);
    })
  }


  function addBreed(breed) {
    let ul = document.querySelector('#dog-breeds')
    let li = document.createElement('li')
    li.innerText = breed
    li.style.cursor = 'pointer'
    ul.appendChild(li)
    li.addEventListener('click', updateColor)
    console.log(li.innerText)
  }

  function updateColor(event) {
    event.target.style.color = 'blue'
  }
