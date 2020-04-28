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
    imgContainer.appendChild(dogImage);
  }
}

function addBreedList (json) {
  // Each key has a value of an array, some of which contain sub-breeds.
  // I think I should try to get an output like this:
  /*
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

  const breeds = json.message;
  const dogBreedList = document.getElementById('dog-breeds');
  const breedDropDown = document.getElementById('breed-dropdown');

  breedDropDown.addEventListener("change", function () {
    // I think I need to use that for loop below, but break it out into a helper method.
    // If the breed starts with breedDropDown.value, make an <li> with it and add it to the <ul>.
    // Do the same with subBreeds - limit them by letter.
    // There should be a String method that gets the first letter. -> startsWith()
    // filterBreedsByLetter(breedDropDown.value);
    const firstLetter = breedDropDown.value;

    // I must have tried to do too much all at once; there's another bug in here.

    for (const breedName in breeds) {
      if (breedName.startsWith(firstLetter)) {
        const breed = document.createElement('li');
        const subBreeds = breeds[breedName];

        breed.textContent = breedName;

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
      
          breed.appendChild(subBreedList);
        }
    
        breed.addEventListener('click', function () {
          changeTextColor(breed);
        }, false);
    
        dogBreedList.appendChild(breed);
      }
    }
  });
  // If the user selects A, e.g., only display dog breeds starting with A.

  for (const breedName in breeds) { 
    const breed = document.createElement('li');
    const subBreeds = breeds[breedName];
    
    breed.textContent = breedName;
    
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
  
      breed.appendChild(subBreedList);
    }

    breed.addEventListener('click', function () {
      changeTextColor(breed);
    }, false);

    dogBreedList.appendChild(breed);
  }

  // if (subBreeds.length > 0) { // Update: This didn't look good.
  //   for (const subBreed of subBreeds) { // Make subBreed li's unless there are no subBreeds
  //     const subBreedLi = document.createElement('li');
  //     subBreedLi.textContent = `${subBreed} ${breedKey}`;
  //     dogBreedList.appendChild(subBreedLi);
  //   }
  // } else {
  //   const breed = document.createElement('li');
  //   breed.textContent = breedKey;
  //   dogBreedList.appendChild(breed);
  // }
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

// function filterBreedsByLetter(letter) {
//   // Get the container of the dog breeds
//   const dogBreeds = document.getElementById('dog-breeds');

//   // Get all of the dog breeds
//   const eachBreed = dogBreeds.querySelectorAll('li');

//   // Display only the dog breeds that start with 'letter'
//   // Somehow, I need to replace dogBreeds' HTML without losing the rest of the HTML.
//   // The user might select A, then B. I want to display the dog breeds that start with A,
//   // But not lose the ones that start with B.

//   // I need a copy of all of the dog breeds somewhere that I can refer to - but NOT alter - here.
//   // I may not need to get the elements here, just limit them by first letter.
// }

document.addEventListener('DOMContentLoaded', function () {
  fetch(imgUrl).then(response => response.json()).then(addDogImages);

  fetch(breedUrl).then(response => response.json()).then(addBreedList);
}, false);