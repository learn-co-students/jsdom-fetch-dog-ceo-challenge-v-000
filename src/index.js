console.log('%c HI', 'color: firebrick')

document.addEventListener(DOMContentLoaded, (event)=>{
    loadimages();
    loadBreedList();
});

function loadImages() {
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(response => response.json())
    .then(result=>addImages(result));
};