window.addEventListener("DOMContentLoaded", function() {
    getImages();
    getBreeds();
    let f = document.getElementById("breed-dropdown")
        f.addEventListener("change", function() {
            let letter = f.value
            getBreeds(letter)
        })
})

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'


function getImages() {
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(imgs => displayImages(imgs));
}

function displayImages(imgs) {
    let imgCont = document.getElementById("dog-image-container")
    imgs.message.forEach((e) => {
        let image = document.createElement("img");
        image.src = e
        imgCont.append(image)
    })
}

function getBreeds(letter) {
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(breeds => listBreeds(breeds, letter));
}

function listBreeds(breeds, letter) {
    let list = breeds.message;
    let cont = document.getElementById("dog-breeds")
    cont.innerHTML = ""

        for (key in list) {
            let breed = document.createElement("li");
            breed.innerText = key;
            changeColor(breed);
            if (letter) {
                if (key[0] === letter) {
                    cont.append(breed);
                }
            }
            else {
                cont.append(breed);
            }
        }
}


function changeColor(breed) {
    breed.addEventListener("click", function() {
        breed.style.color = "orange"
    })
}





