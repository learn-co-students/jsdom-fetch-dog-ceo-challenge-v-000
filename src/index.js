async function loadImages() {
  const frame = document.getElementById('dog-image-container');
  const imageData = await fetchImages();
  renderImages(imageData);
  
  function renderImages(imageData) {
    const imageLinks = imageData.message;
    imageLinks.forEach(imageLink => {
      const dogImage = document.createElement('img');
      dogImage.src = imageLink;
      frame.appendChild(dogImage);
    })
  };
};

async function fetchImages() {
  const resp = await fetch("https://dog.ceo/api/breeds/image/random/4");
  return await resp.json();
};

// Render list of breeds
  // Replace list of breeds according to dropdown filter
    // Listen for change
    // Retrieve selected value
    // Filter breeds by starting letter
    // Render new breeds list

async function loadBreeds() {
  const breedList = document.getElementById('dog-breeds');
  const dropdown = document.getElementById('breed-dropdown');
  const allBreeds = await fetchBreeds();
  renderBreeds(allBreeds);

  function emptyBreedList() {
    const liCollection = document.querySelectorAll('#dog-breeds li');
    for (let i = 0; li = liCollection[i]; i++) {
      li.parentNode.removeChild(li);
    };
  };

  dropdown.addEventListener('change', (event) => {
    emptyBreedList();
    let letter = event.target.value;
    const mainBreeds = Object.keys(allBreeds);
    let filtered = mainBreeds.filter(mainBreed => mainBreed.startsWith(letter));
    renderBreeds(filtered);
  });

  function renderBreeds(breeds) {
    for (const key in breeds) {
      const dogBreed = document.createElement('li');
      dogBreed.innerText = key;
      dogBreed.addEventListener('click', textColor);
      
      if (Array.isArray(breeds[key]) && breeds[key].length) {
        const breedSubList = document.createElement('ul');
        
        breeds[key].forEach(subBreed => {
          const dogSubBreed = document.createElement('li');
          dogSubBreed.innerText = subBreed;
          dogSubBreed.style.color = "#000000";
          dogSubBreed.addEventListener('click', textColor);
          breedSubList.appendChild(dogSubBreed);
        })
        
        dogBreed.appendChild(breedSubList);
      }
  
      breedList.appendChild(dogBreed);
    }
  };

  function textColor(event) {
    event.currentTarget.style.color = "#009AE4";
  };

  async function fetchBreeds() {
    const resp = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await resp.json();
    return data.message;
  };
};


document.addEventListener('DOMContentLoaded', function() {
  loadImages();
  loadBreeds();
});

// ** DO WHAT WORKS NOW - REFACTOR LATER!!