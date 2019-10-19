console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function () {
  dogImage()
  loadingBreeds()
});
// when DOM is loaded.. do this


function dogImage(){
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl)
  .then(resp => resp.json())
  .then(images => {
  images.message.forEach(image => loadingImage(image))
  } )

function loadingImage(dogUrl){
  var _img = document.getElementById('dog-image-container')
  var newImg = new Image
  newImg.src = dogUrl
  _img.appendChild(newImg)
}
}

function loadingBreeds(){
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch(breedUrl)
  .then(resp => resp.json())
  .then(breeds => )
  var longList = document.createElement("UL")
  var textnode = document.createTextNode("hello")
  node.appendChild(textnode)
  document.getElementById("dog-breeds").appendChild(node)
}
