console.log('%c HI', 'color: firebrick')

function fetchDogs() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(response => response.json())
        .then(json => renderDogs(json))
}

function renderDogs(json) {
    const main = document.querySelector('#dog-image-container')
    json.message.forEach(picture => {
        const img = document.createElement('img')
        img.src = picture
        main.appendChild(img)
    })
}

function fetchBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(json => renderBreeds(json))
}

function renderBreeds(json) {
    const ul = document.getElementById('dog-breeds')
    let li = document.createElement('li')
    li.innerHTML = //breed name here
}

document.addEventListener('DomContentLoaded', function() {
    fetchDogs()
})