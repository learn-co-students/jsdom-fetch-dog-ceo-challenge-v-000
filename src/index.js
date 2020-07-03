console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function() {
   loadImgs();
   loadBreeds();
});

function loadImgs(){
   const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
   
   return fetch(imgUrl)
   .then(resp => resp.json())
   .then(dogImgs => {dogImgs.message.forEach(picUrl => addImgEl(picUrl))
   });
};

function addImgEl(picUrl){
   let element = document.querySelector('#dog-image-container');
   let newImg = document.createElement('img');
   newImg.src = picUrl; 
   element.appendChild(newImg);
};

function loadBreeds(){
   const breedUrl = 'https://dog.ceo/api/breeds/list/all'

   return fetch(breedUrl)
   .then(resp => resp.json())
   .then(json => {

      breeds = Object.keys(json.message);
      updateBreedList(breeds);
      addBreedSelectListener();
   });
};

function updateBreedList(breeds) {
   let ul = document.querySelector('#dog-breeds');
   removeChildren(ul);
   breeds.forEach(breed => addBreed(breed));
 }

 function removeChildren(element) {
   let child = element.lastElementChild;
   while (child) {
     element.removeChild(child);
     child = element.lastElementChild;
   }
 }

 function selectBreedsStartingWith(letter) {
   updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
 }

 function addBreedSelectListener() {
   let breedDropdown = document.querySelector('#breed-dropdown');
   breedDropdown.addEventListener('change', function (event) {
     selectBreedsStartingWith(event.target.value);
   });
 }

function addBreed(breed){
   let ul = document.getElementById('dog-breeds');
   let listB = document.createElement('li');
   listB.innerText = breed;
   listB.style.cursor = 'pointer';
   ul.appendChild(listB);
   listB.addEventListener('click', updateColor)

};

function updateColor(e) {
   e.target.style.color = "palevioletred";
}