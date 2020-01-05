function imageFetch() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json => createImageHTML(json));
}

function fetchAll() {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(resp => resp.json())
    .then(json => createDogList(json))
}

function createImageHTML(imgJSON) {
    dogArea = document.getElementById("dog-image-container");
    dogArray = imgJSON.message;
    for (const link of dogArray) {
        image = document.createElement('img');
        image.setAttribute("src", link);
        lineBreak = document.createElement("br");
        dogArea.appendChild(image);
        dogArea.appendChild(lineBreak);
    }
}

function createDogList(dogJson) {
    dogBreedsObj = dogJson.message;
    for(const breed in dogBreedsObj) {
        dogs[breed] = [];
    }
    outputDogList(dogs);
}

function outputDogList(dogObj) {
    dogListArea = document.getElementById("dog-breeds");
    dogListArea.innerHTML = '';
    for (const dog in dogObj) {
        li = document.createElement('li');
        li.innerText = dog;
        dogListArea.appendChild(li)        
    }
    monitorDogList();
    monitorDogFilter();    
}

function monitorDogList() {
    dogList = document.querySelectorAll('li')
    for(const dogItem of dogList) {
        dogItem.addEventListener("click", function() {
            dogItem.style.color = 'red';
        });
    }
}

function monitorDogFilter() {
    selection = document.getElementById("breed-dropdown");
     selection.addEventListener("change", function() {
        filterBreed(selection.value);
    });

}

function filterBreed(letter) {
    newDogs = Object.assign({}, dogs);
    for (const dog in newDogs) {
        if (dog[0] != letter) {
            delete newDogs[dog];
        }
    }
    outputDogList(newDogs);
}

document.addEventListener('DOMContentLoaded', function() {
    dogs = {};
    imageFetch();
    fetchAll();
  })
