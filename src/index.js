console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

window.addEventListener("DOMContentLoaded", () => {
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => getImages(json.message));
});

window.addEventListener("DOMContentLoaded", () => {
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => getBreeds(Object.keys(json.message)))
});

function getImages(imgAry) {
    for(i=0; i<imgAry.length; i++) {
        let addition = document.createElement('img');
        addition.setAttribute('src', imgAry[i]);
        document.querySelector("#dog-image-container").appendChild(addition);
    };
};

function getBreeds(breedAry) {
    for(i=0; i<breedAry.length; i++) {
        let breed = document.createElement('li');
        breed.textContent = breedAry[i];
        document.querySelector("#dog-breeds").appendChild(breed);
        breed.addEventListener("click", () => {
            breed.style.color = "#ff0000";
        });
    };
}; 

function filterBreeds() {
    let filterSelection = document.querySelector("#breed-dropdown option:checked").value;
    let existingList = document.querySelector("#dog-breeds");
    let child = existingList.lastElementChild;  
    while (child) { 
        existingList.removeChild(child); 
        child = existingList.lastElementChild; 
    };
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => getBreeds(Object.keys(json.message).filter(item => item[0] == filterSelection)))
};