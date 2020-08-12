console.log('%c HI', 'color: firebrick')

var letter;
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function fetchImgs() {
    return fetch(imgUrl)
      .then(resp => resp.json())
      .then(json => renderImgs(json))
}
  
function renderImgs(json) {
    const main = document.getElementById('dog-image-container')
    json["message"].forEach(imgUrl => {
        const img = document.createElement('img')
        img.src = imgUrl
        main.appendChild(img)
    })
}

function fetchDogBreeds() {
    return fetch(breedUrl)
        .then(resp => resp.json())
        .then(json => renderBreeds(json, letter))
}

function renderBreeds(json, letter) {
    const ul = document.getElementById("dog-breeds")
    Object.keys(json["message"]).forEach(breed => {
        if (breed.startsWith(letter)) {
            const li = document.createElement("li")
            li.innerHTML = breed
            ul.appendChild(li)
            li.addEventListener('click', event => {
                li.style.color = "magenta"
            })
        }
    })
}

function addBreedSelectListener() {
    let breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', function (event) {
      letter = event.target.value;
    });
  }

document.addEventListener('DOMContentLoaded', function() {
    fetchImgs()
    fetchDogBreeds()
})

