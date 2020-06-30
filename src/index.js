const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
var filterOption = ''

document.addEventListener("DOMContentLoaded", () => {
    loadImages(imgUrl)
    loadDogBreeds(breedUrl)
})

function loadImages(url) {
    return fetch(url)
            .then(resp => resp.json())
            .then(json => renderImages(json.message))
}

function renderImages(json) {
    const container = document.getElementById('dog-image-container')
  
    json.forEach(imgUrl => {
        const img = document.createElement('img')
              img.src = `${imgUrl}`
        container.appendChild(img)
    })
}

function loadDogBreeds(url) {
    return fetch(url)
            .then(resp => resp.json())
            .then((json) => {
              renderDogBreeds(json.message)
              addDropdownListener()
            })
}

function renderDogBreeds(json) {
    const container = document.getElementById('dog-breeds')
    const dogs = json
    var breeds = Object.keys(json)
    // if no filter option is in place, assign the breeds otherwise assign filtered breeds
    breeds = filterOption == '' ? breeds : breeds.filter(breed => breed[0] == filterOption)

    breeds.forEach(breed => {
        const li = document.createElement('li')
              li.addEventListener('click', (event) => {
                  event.preventDefault()
                  changeTextColor(event)
              })

        const breedVariations = dogs[breed]
        const hasMultipleBreedVariations = breedVariations.length >= 1 ? true : false
        
        if (hasMultipleBreedVariations) {
            for(let i = 0; i < breedVariations.length; i++) {
                const li = document.createElement('li')
                      li.innerHTML = `${breed} ${breedVariations[i]}`
                container.appendChild(li)
            }
        } else {
            li.innerHTML = `${breed}`
            container.appendChild(li)
        }
    })
}

function changeTextColor(element) {
    element.target.style.color = 'red';
}

function addDropdownListener() {
    document.getElementById('breed-dropdown').addEventListener("change", (event) => {
        event.preventDefault()
        let selectedValue = event.target.value
        filter(selectedValue)
    })
}

function filter(option) {
    let container = document.getElementById("dog-breeds")
        container.querySelectorAll('*').forEach(child => child.remove());
    console.log('clearing listed dogs in dom')
    filterOption = option
    loadDogBreeds(breedUrl)
}