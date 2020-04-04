console.log('%c HI', 'color: firebrick')


// document.getElementById("dog-breeds")
// let originalBreeds = Object.keys(json.message)
let breeds = []
let dogBreed = []
let test = []
let letter = []
let result = []

//toggling color black to red and red to black
const colorObject = {
    "red": "", 
    "": "red"
}

window.onload = () => {
    fetchImage();
    fetchBreed();
}

// document.adddEventListener('click', callbackFunction)
// listening for click on drop dowm a - d.
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("breed-dropdown").addEventListener('change', removeBreeds) 
})

function fetchImage() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    //fetch the images using the url above
    fetch(imgUrl)
        .then(resp => resp.json())
        .then(json => {
            dogPictures = document.getElementById("dog-image-container")
            ////parse the response as JSON
            for (let i = 0; i < json.message.length; i++) {
                //add image elements to the DOM for each🤔 image in the array
                dogPictures.innerHTML += `<div><img src="${json.message[i]}" alt="Dog Pictures"></div>`
            } 
        });
}

function fetchBreed() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    //on page load, fetch all the dog breeds using the url above 
    fetch(breedUrl)
    .then(resp => resp.json())
        .then(json => renderBreeds(json.message))
}

function removeBreeds() {
    let filter = filterDogBreeds
    // console.log(event)
    let dogBreed = document.getElementById("dog-breeds")
        while (dogBreed.firstChild) {
        dogBreed.removeChild(dogBreed.firstChild);
        }
        filterDogBreeds(event)
}

function filterDogBreeds(event) {
    // sets letter to the value of the breed=dropdown "a -d "
    letter = (event.target.value)
            //  console.log(test);
            // Gets breeds that start with the letter selected.
             let result = test.filter((event) => event.startsWith(letter))
            //  console.log(result) 
             updateList(result)
                // return result
            //  test.appendChild(result)
            
};      

function renderBreeds(message) {
    //document.getElementById("dog-breeds")
    dogBreed = document.getElementById("dog-breeds")
        test = Object.keys(message) //originalBreeds 
    // iterate over the array
     for (let i = 0; i < test.length; i++) {
        dogBreed.innerHTML += `<li>${test[i]}</li>`
    } 
            dogBreed.addEventListener('click', function (event) {
            // as soon as the list item is clicked, change its color to red 
            event.target.style.color = colorObject[event.target.style.color];
            })
};

function updateList(message) {
    // itereate over each dog breed name
     for (let i = 0; i < test.length; i++) {
        // create li for each dog breed name
         let createLI = document.createElement('li') 
         if (message[i] != undefined){
            createLI.innerHTML=message[i]
            document.body.appendChild(createLI) //displays breeds that start with letter
         }
    }
}
  