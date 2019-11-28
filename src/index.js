document.addEventListener( "DOMContentLoaded", function () {
  fetchImages()
  fetchBreeds()
} );

function fetchImages() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl)
  .then(function(response) {
    return response.json()
  })
  .then(function(json) {
    for (const image in json.message) {
      const img = document.createElement('img')
        img.src = json.message[image]
        document.getElementById('dog-image-container').appendChild(img)
      }
  })
}

function fetchBreeds() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch(breedUrl)
  .then(response => response.json())
  .then(json => {
    breeds = Object.keys(json.message)
    for (const breed in breeds) {
      let li = document.createElement('li')
      li.innerText = breeds[breed]
      document.getElementById('dog-breeds').appendChild(li)
    }
  })
}

