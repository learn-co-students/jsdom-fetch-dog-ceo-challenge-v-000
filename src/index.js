console.log('%c HI', 'color: firebrick')

//object from the api for images
//{"message":["https:\/\/images.dog.ceo\/breeds\/weimaraner\/n02092339_174.jpg",
//             "https:\/\/images.dog.ceo\/breeds\/mastiff-bull\/n02108422_3709.jpg",
//             "https:\/\/images.dog.ceo\/breeds\/pitbull\/20190801_154956.jpg",
//             "https:\/\/images.dog.ceo\/breeds\/terrier-kerryblue\/n02093859_3291.jpg"],
//
//
// "status":"success"}
//object from the api for Breeds

// {message: {…}, status: "success"}
// message:
// affenpinscher: []
// african: []
// airedale: []
// akita: []
// appenzeller: []
// australian: ["shepherd"]
// buhund: ["norwegian"]
// bulldog: (3) ["boston", "english", "french"]
// bullterrier: ["staffordshire"]
document.addEventListener('DOMContentLoaded', function() {
function fetchDogs(){
  return fetch(imgUrl)
  .then(resp => resp.json())
  .then(json => renderTests(json.message))  // send the json object to a function
}

function fetchBreeds(){
  return fetch(breedsUrl)
  .then(resp => resp.json())
  .then(json => renderBreeds(json.message))
}

function renderTests(Images){
   const gridImage = document.getElementById('dog-image-container');
   Images.forEach((valor, index) => {
      let miniImage =  document.createElement('img');
      miniImage.width = "300";
      miniImage.setAttribute('src', valor);
      gridImage.appendChild(miniImage);
   });
 }

function addBreedSelectListener(){
  let breedDropdown = document.querySelector('#breed-dropdown');
  breedDropdown.addEventListener('change',(e) => {
    let ul = document.querySelector('#dog-breeds');
    removeOldUl(ul); //clean the li.
    let selectBreeds = aBreeds.filter( (item) => { return item[0] === e.target.value; });
    // console.log(selectBreeds) ;
    updateBreedList(selectBreeds);

  });
}

 function renderBreeds(Breeds){
   aBreeds =  Object.keys(Breeds);  //move the breeds keys in the object into the array
   updateBreedList(aBreeds);
   addBreedSelectListener(); //for the select option
 }

 function removeOldUl(ul){
    let ulChildrens = ul.querySelectorAll("ul li");
    ulChildrens.forEach( element => { //console.log(element);
       ul.removeChild(element)} );
    }

 function updateColor(e){
   e.target.style.color="red";
 }
 function updateBreedList(arrayBreed){
   let ul = document.querySelector('#dog-breeds');
   removeOldUl(ul);
   for (const p of arrayBreed){
     let li = document.createElement('li');
     li.textContent= p;
     li.style.cursor = 'pointer';
     //li.onclick = function(event) { updateColor(event) };
     li.addEventListener("click", updateColor);
     ul.appendChild(li);
   }
 }

 let aBreeds= [];
 const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
 const breedsUrl = "https://dog.ceo/api/breeds/list/all";
  fetchDogs();
  fetchBreeds();

})
