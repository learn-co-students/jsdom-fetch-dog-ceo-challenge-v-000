console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function() {
 dogImages();

 fetchList()
 
  document.getElementById("breed-dropdown").onchange = function(){
    element = document.getElementsByClassName("dog-list")
    while(element[0]) {
      element[0].parentNode.removeChild(element[0]);
    }
    return fetchList()
  }

})

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'



function dogImages() {
  fetch(imgUrl)
  .then(function(response) {
    return response.json();
  })
  .then(showDogs)
}

const showDogs = dogs => {
  let dogDiv = document.querySelector('#dog-image-container');
  dogs.message.forEach(dogURL => {
    dogDiv.innerHTML += `<img src="${dogURL}"><br>`
  })
}

//challenge 2

function dogBreeds() {
  fetch(breedUrl)
  .then(function(response) {
    return response.json();
  })
  .then(showDogs)
}

const addBreedsList = dogbreed => {
  let dogDiv = document.querySelector('#dog-image-container');
  dogs.message.forEach(dogURL => {
    dogDiv.innerHTML += `<img src="${dogURL}"><br>`
  })
}

function fetchList() {
  return fetch(breedUrl)
  .then(function(response) {
    return response.json();
   })
   .then(function(json) {
     fetchedList = json
     filterList(fetchedList)
   });
}

function setList(fetchedList, letter) {
  let listContainer = document.getElementById("dog-breeds")
  listObject = fetchedList["message"]

  console.log("I'm called when clicked")
  for (const key in listObject) {
    console.log(letter)
    if (key["0"] === letter) {
      let listItem = document.createElement("li");
      listItem.className = "dog-list";
      listItem.innerText = key;
      listContainer.appendChild(listItem);
          
      listItem.addEventListener("click", function() {
        console.log(this)
        this.style.color = "red";
      }
    )}
  }
};


// Challenge 4: //

function filterList() {
  let filterLetters = document.getElementById("breed-dropdown")
  let selectedFilterLetter = filterLetters.options[filterLetters.selectedIndex].text
  
  return setList(fetchedList, selectedFilterLetter)
  
}
