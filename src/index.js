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
    .then(json => getBreeds(json))
}

function getBreeds(json) {
    let breedKeys = Object.keys(json.message)
    breedKeys.forEach(breed => renderBreeds(breed))
}

function renderBreeds(breed) {
    const ul = document.getElementById('dog-breeds')
    let li = document.createElement('li')
        li.addEventListener('click', function() {
            li.style.color = "green"
        })
    li.innerText = breed
    ul.appendChild(li)  
}

function filterBreeds() {
    let input = document.getElementById('breed-dropdown').value
    let ul = document.getElementById('dog-breeds')
    let li = ul.getElementsByTagName('li')

    for (i = 0; i < li.length; i++) {
        let a = li[i];
        let textValue = a.textContent || a.innerText;
        if (textValue.indexOf(input) > -1 && textValue.indexOf(input) < 1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";  
        }
    }
}

document.addEventListener("DomContentLoaded", function() {
    fetchDogs();
    fetchBreeds();
})