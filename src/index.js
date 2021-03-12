console.log('%c HI', 'color: firebrick');
let dogBreedsInnerHtml = ""

document.addEventListener("DOMContentLoaded", function() {

  fetchDogBreeds()
  fetchImages()
  addDogBreedFilterEvent()

});

function addDogBreedFilterEvent() {

  document.querySelector("#breed-dropdown").addEventListener("change", event=>{
    console.log(event.target.value)

    filterDogBreedsWith(event.target.value)


  })

  function filterDogBreedsWith(char) {

    restoreDogBreedList()

    const breedList = document.querySelectorAll("#dog-breeds li")
    const collection = []

    for (const breed of breedList) {
      if ( breed.innerText.startsWith(char.toUpperCase()) ) {
        collection.push(breed)
      }
    }
    updateListWithCollection(breedList, collection)
  }

  function updateListWithCollection(list, collection) {

    const listParent = list[0].parentElement
    listParent.innerHTML = ""

    for (const item of collection) {
      const li = document.createElement('li')
      li.innerText = item.innerText
      listParent.appendChild(li)
      li.addEventListener("click", event => { event.target.style.color = "purple" })
    }
  }

  function restoreDogBreedList() {
    const breedList = document.querySelector("#dog-breeds")
    breedList.innerHTML = dogBreedsInnerHtml
  }

}

function fetchDogBreeds() {
  fetch('https://dog.ceo/api/breeds/list/all').then(resp=>resp.json()).then(data=>{
    displayDogBreeds(data.message)
    dogBreedsInnerHtml = document.querySelector("#dog-breeds").innerHTML
  })

  function displayDogBreeds(breeds) {
    for (const key in breeds) {
      const li = document.createElement('li')
      li.innerText = key[0].toUpperCase() + key.slice(1)
      document.querySelector("#dog-breeds").appendChild(li)
      li.addEventListener("click", event=>{ event.target.style.color = "purple" })
    }
  }
}

function fetchImages() {
  let urls = []
  fetch("https://dog.ceo/api/breeds/image/random/4").then(resp=>resp.json()).then(data=>{

    if (data.status === "success") {
      // console.log(imgURLS)
      urls = data.message
      displayImages()
    } else {
      console.error("API errored")
      return null
    }
  })

  function displayImages() {
    for (const url of urls) {
      const img = document.createElement('img')
      img.src = url
      document.querySelector("#dog-image-container").appendChild(img)
    }
  }
} // end of func fetchImages()