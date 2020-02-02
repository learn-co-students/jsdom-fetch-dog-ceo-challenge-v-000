console.log('%c HI', 'color: firebrick')
let breeds = [];

document.addEventListener("DOMContentLoaded", function(){
    loadImages();
    loadBreed();
})

function loadImages(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => {json.message.forEach(image => addImage(image))
    });
}

function addImage(dogPicUrl){
    let container = document.querySelector('#dog-image-container');
    let newImageEl = document.createElement('img');
    newImageEl.src = dogPicUrl;
    container.appendChild(newImageEl);
}

function loadBreed(){
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => {
        breeds = Object.keys(json.message);
        updateBreedList(breeds);
        addBreedSelectListener();
    });
}

function updateBreedList(breeds){
    let ul = document.querySelector('#dog-breeds');
    removeChildren(ul);
    breeds.forEach(breed => addBreed(breed));
}

function removeChildren(element){
    let child = element.lastElementChild;
    while(child){
        element.removeChild(child);
        child = element.lastElementChild;
    }
}

function selectBreedsStartingWith(letter){
    updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
}

function addBreedSelectListener(){
    let breedDropdown = document.querySelector("#breed-dropdown");
    breedDropdown.addEventListener('change', function(event){
        selectBreedsStartingWith(event.target.value);
    })
}

function addBreed(breed){
    let ul = document.querySelector("#dog-breeds");
    let li = document.createElement('li');
    li.innerText = breed;
    li.style.cursor = 'pointer';
    ul.appendChild(li);
    li.addEventListener('click', updateColor);
}

function updateColor(event){
    event.target.style.color = 'red'
}