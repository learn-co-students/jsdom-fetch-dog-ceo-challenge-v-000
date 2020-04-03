console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function() {
  fetchImages()
  fetchBreeds()
})

// part 1
function fetchImages(){
  return fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(resp => resp.json())
    .then(json => renderBreedImages(json))
}
function renderBreedImages(json){
  const imageContainer = document.getElementById('dog-image-container');
  const urls = json['message'];

  let i;
  for(i = 0; i < urls.length; i++){
    const imageURL = urls[i];
    const img = document.createElement('img')
    img.src = imageURL;
    imageContainer.appendChild(img);
  }
}

// part 2
function fetchBreeds(){
  return fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(json => renderBreeds(json))
}
function renderBreeds(json){
  const breedUL = document.getElementById('dog-breeds');
  const breeds = json['message'];
  for (const breed in breeds) {
    const li = document.createElement('li');
    li.innerHTML = breed;
    // li.id = breed;
// added for part 4, adds a class with the first character of the dog breed
    li.classList.add(breed.charAt(0));
// added for part 3
    li.addEventListener('click', function(event){
      event.target.style.color = "blue";
    })
    breedUL.appendChild(li);
  }
}

// part 4
document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.getElementById('breed-dropdown');

  dropdown.addEventListener('change', function(event){
    let letter = event.target.value;
    let breeds = document.getElementById('dog-breeds').children

    let i;
    for (i = 0; i < breeds.length; i++){
      breeds[i].style.display = "list-item";
      if (letter != breeds[i].classList[0]){
        breeds[i].style.display = "none";
      }
    }
  });
});
