console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    fetchPics();
    fetchBreeds();
})

breeds = []

function fetchPics() {
    const url = 'https://dog.ceo/api/breeds/image/random/4';
    return fetch(url).then(function(response) { return response.json(); }).then(json => renderPics(json));
}

function renderPics(json) {
    const dogImageContainer = document.getElementById('dog-image-container');
    for (const element of json.message) {
        const image = document.createElement('img')
        image.src = element
        dogImageContainer.appendChild(image)
    }
}

function fetchBreeds() {
    const url = 'https://dog.ceo/api/breeds/list/all';
    return fetch(url).then(function(response) { return response.json(); }).then(function(json) {
        for (const key in json.message) {
            breeds.push(key);
        }
        displayBreeds(breeds);
    });
}
    

function displayBreeds(breeds) {
    const ul = document.getElementById('dog-breeds')
    for (const breed of breeds) {
        const item = document.createElement('li')
        item.innerHTML = breed;
        ul.appendChild(item);
    }
    changeColor();
    selectBreeds();
}

function changeColor() {
    const list = document.getElementsByTagName('li');
    for (const li of list) {
        li.addEventListener("click", function() {
            li.style.color = 'red'});
    }
}

function selectBreeds() {
    let dropdown = document.getElementById("breed-dropdown");
    dropdown.addEventListener('change', function() {
        dropdownValue = dropdown.value;
        console.log(dropdownValue)
        displayFilterBreeds(dropdownValue)
    })
}

function displayFilterBreeds(dropdownValue) {
    currentList = document.getElementById('dog-breeds')
    while (currentList.hasChildNodes()) {  
        currentList.removeChild(currentList.firstChild);
    }
    filterBreeds = breeds.filter(breedname => breedname.charAt(0) == dropdownValue);
    displayBreeds(filterBreeds);
}