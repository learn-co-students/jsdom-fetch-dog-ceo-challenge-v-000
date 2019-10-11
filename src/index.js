console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
function fetchImages() {
  return fetch(imgUrl)
    .then(response => response.json())
    .then(json => renderImages(json));
}

function renderImages(json) {
  const dogImages = document.getElementById("dog-image-container")
  json.message.forEach(image => {
    const img = document.createElement("img")
    img.setAttribute("src", `${image}`);
    dogImages.appendChild(img);
  })
}

document.addEventListener("DOMContentLoaded", function() {
  fetchImages()
})

const breedUrl = "https://dog.ceo/api/breeds/list/all"
function fetchBreeds() {
  return fetch(breedUrl)
    .then(response => response.json())
    .then(json => renderBreeds(json));
}

function renderBreeds(json) {
  const dogBreeds = document.getElementById("dog-breeds")
  for (const breed in json.message) {
    const li = document.createElement("li")
    li.innerHTML = `${breed}`;
    dogBreeds.appendChild(li);

    li.addEventListener("click", function() {
      li.style.color = "#32a852";
    })

    filterBreeds(li)
  }
}

function filterBreeds(li) {
  const filteredBreeds = document.getElementById("breed-dropdown")

  filteredBreeds.addEventListener("change", function(event) {
    if (filteredBreeds.value == "" || li.innerHTML.charAt(0) == filteredBreeds.value) {
      li.style.display = "";
    }
    else if (li.innerHTML.charAt(0) != filteredBreeds.value) {
      li.style.display = "none";
    }
  })
}

document.addEventListener("DOMContentLoaded", function() {
  fetchBreeds()
})
