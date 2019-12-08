console.log('%c HI', 'color: firebrick')


function fetchDogs() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

  const dogs = fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => {
            json.message.forEach(image => renderImages(image))
        });
  return dogs;
};

function renderImages(image) {
  const imgContainer = document.querySelector('div#dog-image-container');
    const img = document.createElement('img');
    img.src = image;
    imgContainer.appendChild(img);
};

function fetchBreeds() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  const breeds = fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => {
      const breeds = Object.keys(json.message);
      renderBreeds(breeds)
    })
};

function renderBreeds(breeds) {
  const ul = document.querySelector('ul#dog-breeds');
  const dropdown = document.getElementById("breed-dropdown");
  let letter = dropdown.options[dropdown.selectedIndex].value;
    breeds.forEach(breed => {
        if (breed.startsWith(letter)) {
            const li = document.createElement('li');
            li.innerText = breed;
            ul.appendChild(li);
            li.addEventListener("click", function (event) {
                event.target.style.color = "red";
            });
        }
    });
};

function filterBreeds() {
    const dropdown = document.getElementById("breed-dropdown");
    var letter = dropdown.options[dropdown.selectedIndex].value;
};

document.addEventListener('DOMContentLoaded', function() {
  fetchDogs();
  fetchBreeds();
})
