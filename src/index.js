console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', (event) => {
    loadImages();
    loadBreedList();
    
});

function loadImages() {
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(response => response.json())
    .then(result => addImages(result));
};

function addImages(result) {
    const arr = result.message
    for (const element of arr) {
        const img = document.createElement('img');
        img.src = element;

        const dogImgDiv = document.getElementById('dog-image-container');
        dogImgDiv.appendChild(img);
    };
};

function loadBreedList() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(result => {
        const breeds = Object.keys(result.message)
        addBreeds(breeds);
        selectBreedList(breeds);
    });
};

function addBreeds(breeds) {
    for (const breed of breeds) {
        const li = document.createElement('li');
        li.textContent = breed;
        const ul = document.querySelector('#dog-breeds');
        ul.appendChild(li);

        li.addEventListener('click', (event) => {
            event.target.style.color = 'blue';
        });
    };
};

function selectBreedList(breeds) {
    const breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', (event) => {
        const selectBreeds = breeds.filter(breed => breed.startsWith(event.target.value));
        removeBreedList(breeds);
        addBreeds(selectBreeds);
    });
};

function removeBreedList(breeds) {
    const lis = document.querySelectorAll('#dog-breeds li');
    const ul = document.querySelector('#dog-breeds');
    for (const li of lis) {
        ul.removeChild(li);
    };
};