//console.log('%c HI', 'color: firebrick')
   
let breeds = []


//listen for DOM to load
document.addEventListener("DOMContentLoaded", function() {
  loadImages()
  loadBreedOptions()
})



//fetch url, iterate over message array in results, & call addImage() for each image
/*function loadImages() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl) 
  .then(resp => resp.json())
  .then(results => {
    results.message.forEach(image => addImage(image))
  console.log("image loaded")
  })
}*/


//using await so I don't need to chain .then statements
async function loadImages() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  const response = await fetch(imgUrl) 
  const json = await response.json()
  json.message.forEach(image => addImage(image))
}



//pass image to function, grab the container, create new img element, set the source, append new element to the container
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
    .then(results => {        //results are an object in message
      
      breeds = Object.keys(results.message);
      updateBreedList(breeds) 
      addBreedSelectListener()
      //console.log(breeds)
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
  
  