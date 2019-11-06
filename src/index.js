function fetchImages (){
  fetch('https://dog.ceo/api/breeds/image/random/4')
  .then(response => response.json())
  .then(json => renderImages(json))
};

function renderImages (json){
  let div = document.getElementById("dog-image-container");
  json.message.forEach(image => {
    let newImage = document.createElement("img")
    newImage.src = image;
    div.appendChild(newImage);
  });
};

function fetchBreeds (){
  fetch('https://dog.ceo/api/breeds/list/all')
  .then(response => response.json())
  .then(json => renderBreeds(json))
};

function renderBreeds (json){
  let ul = document.getElementById("dog-breeds");
  let breedArray = Object.keys(json.message)
  breedArray.forEach(breed => {
    if (json.message[breed].length === 0){
      let newBreed = document.createElement("li")
      newBreed.innerText = breed;
      ul.appendChild(newBreed);
    } else {
      json.message[breed].forEach(type => {
        let newBreed = document.createElement("li")
        newBreed.innerText = type + " " + breed;
        ul.appendChild(newBreed);
      });
    }
  });
};

document.addEventListener('DOMContentLoaded', function() {
  fetchImages();
  fetchBreeds();

  let ul = document.getElementById("dog-breeds");
  let dropDown = document.getElementById("breed-dropdown");

  dropDown.onchange =  function (event){
    let filterBy = event.target.value;
    Array.from(ul.children).forEach(li => {
      if (li.innerText[0] === filterBy){
        li.style.display = "list-item"
      } else {
        li.style.display = "none"
      }
    });
  }

  ul.addEventListener("click", function (event){
    event.target.style.color = "blue"
  })
});
