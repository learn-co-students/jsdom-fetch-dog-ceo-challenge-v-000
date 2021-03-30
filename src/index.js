let breedList = []

function fetchJson(url){
  return fetch(url).then(resp => resp.json())
}

function addImage(source){
  const imageContainer = document.getElementById('dog-image-container')
  image = document.createElement('img')
  image.src = source
  imageContainer.appendChild(image)
}

function addBreed(breed){
  const breedWrapper = document.getElementById('dog-breeds')
  let breedName = document.createElement('li')
  breedName.setAttribute('data-info', 'breed')
  breedName.textContent = breed
  breedWrapper.appendChild(breedName)
}

function populateImages(){
  fetchJson("https://dog.ceo/api/breeds/image/random/4")
  .then(json => { json.message.forEach( source => addImage(source)) })
}

function populateBreeds(){
  fetchJson("https://dog.ceo/api/breeds/list/all")
  .then(json => {
    for (const [key, value] of Object.entries(json.message)) {
      if (value.length > 0){
        for (let subBreed of value){
          addBreed(`${key} - ${subBreed}`)
          breedList.push(`${key} - ${subBreed}`)
        }
      }else{
        addBreed(`${key}`)
        breedList.push(`${key}`)
      }
    } 
  })
  const dogBreeds = document.getElementById("dog-breeds")
  dogBreeds.addEventListener("click", (event) =>{
    if (event.target.dataset.info === 'breed'){
      event.target.style.color = "#750000"
    }
  })
}

function populateFilter(){
  let menu = document.getElementById("breed-dropdown")
  alphabet = [...Array(26)].map(_=>(++i).toString(36),i=9)
  for (const x of alphabet){
    let valueItem = document.createElement('option')
    valueItem.setAttribute('value', x)
    valueItem.textContent = x
    menu.appendChild(valueItem)
  }
}

function filterByLetter(){
  let menu = document.getElementById("breed-dropdown")
  menu.addEventListener('change', (event) => {
    filteredBreeds = breedList.filter( (breed) => breed[0] === menu.value )
    console.log(filteredBreeds)
    let dogBreeds = document.getElementById("dog-breeds")
    while(dogBreeds.firstChild) dogBreeds.removeChild(dogBreeds.firstChild)
    filteredBreeds.forEach(breed => addBreed(breed))
  })
}

document.addEventListener("DOMContentLoaded", function(){
  populateImages()
  populateBreeds()
  populateFilter()
  filterByLetter()
})



