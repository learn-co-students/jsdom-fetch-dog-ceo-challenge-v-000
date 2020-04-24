console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function () {
    fetchImages();
    fetchBreeds();
    changeColor();
})


function fetchImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    return fetch(imgUrl).then(resp => resp.json())
    .then(json => renderImages(json));
}
 

function renderImages(json) { 
    const main = document.getElementById('dog-image-container')
    for (const element of json.message) {
        const image = document.createElement('img') 
        image.src = element
        main.appendChild(image)
    }
}

function fetchBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    return fetch(breedUrl).then(resp => resp.json())
    .then(json => breedName(json));

}

function breedName(json){
    const breeds = document.getElementById('dog-breeds');
    for (const breedName in json.message) {
        const breedLi = document.createElement('li');
        breedLi.innerHTML = breedName;
        breeds.appendChild(breedLi);
    }

}

function changeColor(){
     const listItems = document.getElementsByTagName('li');
    
    for (const li of listItems){
        li.addEventListener('click', function(){
            li.style.color = 'blue'});
        }

}
