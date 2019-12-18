document.addEventListener("DOMContentLoaded", () => {
  loadImages();
});


console.log('%c HI', 'color: firebrick')

function loadImages() {
  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(function(response) {
    return response.json();
  }).then(function(json) {
    // add image elements to the DOM FOR EACH image in the array //
    json.forEach(image => addImages(image));
  });
}

function addImages(image, index) {
    document.getElementByTagName("img").appendChild(image);
}
