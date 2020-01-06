console.log('%c HI', 'color: firebrick')


const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
function onPageLoad() {
  window.addEventListener('DOMContentLoaded', (event) => {
    fetch(imgUrl).then(function(response) {
      return response.json();
    }).then(addImageElements(json))
  });
}
function addImageElements(json) {
  const imagesDiv = document.getElementById("dog-image-container");
  for (let jsonLink in json) {
    let newImageElem = document.createElement('IMG');
    newImageElem.src = jsonLink;
    imagesDiv.appendChild(newImageElem);
  }
}