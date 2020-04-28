// For mostly better code, check out https://github.com/learn-co-curriculum/jsdom-fetch-dog-ceo-challenge/blob/solution/src/index.js

console.log('%c HI', 'color: firebrick');

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

function addDogImages (json) {
  // Interesting; I put this in .then() without passing a json argument, and it works.
  // .then() must call this function under-the-hood, and pass in some JSON.
  const imgContainer = document.getElementById('dog-image-container');

  for (const imgURL of json.message) {
    const dogImage = document.createElement('img');

    dogImage.src = imgURL;
    dogImage.alt = `Dog ${json.message.indexOf(imgURL) + 1}`; // That, or change the for loop to use a counter.
    imgContainer.appendChild(dogImage);
  }
}

function createBreedList (breeds, dogBreedList) {
  /* Example output:
    <ul>
      <li>pitbull</li>
      <li>
        pointer
        <ul>
          <li>german pointer</li>
          <li>germanlonghair pointer</li>
        </ul>
      </li>
    </ul>
  */

  /* Old code for future reference:
    if (subBreeds.length > 0) { 
      // I originally put the subBreeds in the same list as the regular breeds, instead of in a sublist.
      // This made the list look messy and unorganized.
      for (const subBreed of subBreeds) { // Make subBreed li's unless there are no subBreeds
        const subBreedLi = document.createElement('li');
        subBreedLi.textContent = `${subBreed} ${breedKey}`;
        dogBreedList.appendChild(subBreedLi);
      }
    } else {
      const breed = document.createElement('li');
      breed.textContent = breedKey;
      dogBreedList.appendChild(breed);
    }
  */

  for (const breedName in breeds) { 
    const breedLi = document.createElement('li');
    const subBreeds = breeds[breedName];
    
    breedLi.textContent = breedName;
    
    if (subBreeds.length > 0) { // Add the sub-breeds (if any) to each breed.
      const subBreedList = document.createElement('ul');
  
      for (const subBreedName of subBreeds) {
        const subBreedLi = document.createElement('li');
  
        subBreedLi.textContent = `${subBreedName} ${breedName}`;
        subBreedList.appendChild(subBreedLi);
  
        subBreedLi.addEventListener('click', function () {
          changeTextColor(subBreedLi);
        }, false);
      }
  
      breedLi.appendChild(subBreedList);
    }
  
    breedLi.addEventListener('click', function () {
      changeTextColor(breedLi);
    }, false);
  
    dogBreedList.appendChild(breedLi);
  }
}

function addBreedList (json) {
  const breeds = json.message;
  const dogBreedList = document.getElementById('dog-breeds');
  const breedDropDown = document.getElementById('breed-dropdown');

  createBreedList(breeds, dogBreedList);

  breedDropDown.addEventListener("change", function () {
    // It's better do to this here (I think) than from outside of this function; all the needed constants are here.
    const firstLetter = breedDropDown.value;
    const sameFirstLetterBreeds = {};

    // If the user selects A, e.g., only display dog breeds starting with A.
    for (const breedName in breeds) {
      if (breedName.startsWith(firstLetter)) {
        sameFirstLetterBreeds[breedName] = breeds[breedName]; // I may be able to refactor this with .filter()
      }
    }
    
    dogBreedList.textContent = ''; // This right here solved a bug; I needed to first make the dogBreedList blank.

    createBreedList(sameFirstLetterBreeds, dogBreedList);
  }, false);
}

function changeTextColor (breed) {
  if (!breed.style.color || breed.style.color == 'black') {
    // Note: These li's don't have a default text color.
    breed.style.color = 'crimson';
  } else if (breed.style.color == 'crimson') {
    breed.style.color = 'cornflowerblue';
  } else if (breed.style.color == 'cornflowerblue') {
    breed.style.color = 'forestgreen';
  } else {
    breed.style.color = 'black';
  }
}

document.addEventListener('DOMContentLoaded', function () {
  fetch(imgUrl).then(response => response.json()).then(addDogImages);

  fetch(breedUrl).then(response => response.json()).then(addBreedList);
}, false);