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
    var dogBreeds = document.getElementById('dog-breeds')

  fetch(breedUrl)
  .then(resp => resp.json())
  .then(breeds => {
      Object.keys(breeds.message).forEach(function(dogBreed){
        //array getting the keys from array. and then using for each function
        var node = document.createElement("LI")
        node.innerHTML = dogBreed
        dogBreeds.appendChild(node)
        //appending to the UL

      })
      // foreach, has a function to do something with that breed
  })

}
