document.addEventListener("DOMContentLoaded", function() {
    fetchImages()
    fetchBreeds()
})
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
function fetchImages() {
    fetch(imgUrl)
    .then(response => response.json())
    
    .then(data => data.message.map(k => {
         addImages(k)
    }))


   
}

function addImages(image) {
    let imgContainer = document.querySelector("#dog-image-container")
    let img = document.createElement("img")
    img.src = image
    imgContainer.appendChild(img)
}

const breedUrl = "https://dog.ceo/api/breeds/list/all"
function fetchBreeds() {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json())
    .then(breeds => breeds.message.forEach(breed => displayBreed(breed)))
}

function displayBreed(breed) {
    let ul = document.getElementById("dog-breeds")
    let li = document.createElement("li")
    li.innerText = breed
    ul.appendChild(li)
}