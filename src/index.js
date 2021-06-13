console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"

function fetchImages() {
    return fetch(imgUrl).then(resp=>resp.json()).then(json=>json.message.forEach(imageUrl => renderImage(imageUrl)));
}

function fetchBreeds() {
    return fetch(breedUrl).then(resp=>resp.json()).then(json=>{
        let breeds = Object.keys(json.message); 
        renderBreeds(breeds); 
        addFilterListener(breeds);
    });
}

function renderImage(imageUrl){
    let dogImageDiv = document.querySelector('#dog-image-container');
    let img = document.createElement('img');
    img.src = imageUrl;
    dogImageDiv.append(img);
}

function renderBreeds(breeds){
    const dogBreedsList = document.querySelector('#dog-breeds');
    dogBreedsList.innerHTML = "";
    breeds.forEach (breed => {
        let breedItem = document.createElement('li');
        breedItem.innerText = breed;
        breedItem.addEventListener('click', clickedBreed => clickedBreed.target.style.color = "red")
        dogBreedsList.append(breedItem);
    });
}

function addFilterListener(breeds){
    let dropdown = document.querySelector('#breed-dropdown');
    dropdown.addEventListener('change',(event)=>filterAndUpdate(event.target.value,breeds));
}

function filterAndUpdate(letter,breeds){
    let filteredBreeds = breeds.filter(breed => breed.startsWith(letter));
    renderBreeds(filteredBreeds);
}

document.addEventListener('DOMContentLoaded',()=> {fetchImages(); fetchBreeds();})