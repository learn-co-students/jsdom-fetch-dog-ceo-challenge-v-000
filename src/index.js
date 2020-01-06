console.log('%c HI', 'color: firebrick')


const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function onPageLoad() {
  return fetch(imgUrl).then(resp => resp.json()).then(json => addImageElements(json));
}

function addImageElements(json) {
  const imagesDiv = document.getElementById("dog-image-container");
  json.message.forEach(image => {
    console.log(image);
    const newImageElem = document.createElement('img');
    newImageElem.src = image;
    imagesDiv.appendChild(newImageElem);
  });
    
}

document.addEventListener('DOMContentLoaded', function () {
  onPageLoad()
})