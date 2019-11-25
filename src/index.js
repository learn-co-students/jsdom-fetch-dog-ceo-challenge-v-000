document.addEventListener( "DOMContentLoaded", function () {
  fetchImages()
} );

function fetchImages() {
  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(function(response) {
    return response.json()
  })
  .then(function(json) {
    debugger
  for (const image in json.message) {
    const img = document.createElement('img')
      img.src = json.message[image]
      document.getElementById('dog-image-container').appendChild(img)
    }
  })
}