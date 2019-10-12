console.log('%c HI', 'color: firebrick')


function fetchImgs() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(json => displayImgs(json))

}
function displayImgs(json) {
    let container = document.getElementById("dog-image-container")
    json.message.forEach(element => {
        let img = document.createElement("img")
        img.src = element
        img.alt = "Dog"
        container.appendChild(img)
    });
}

function fetchDogBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(json => showDogs(json))

}


function showDogs(json) {
    
    let keys = Object.keys(json.message)

    keys.forEach(element => addLIToDom(element))
    filterBreed(json)
}
function removeLI() {
    let li = document.querySelectorAll("li")
    let arr = Array.from(li)
    arr.forEach(function(l) {
        l.remove()
    })
}

function addLIToDom(breed) {
    const ul = document.getElementById("dog-breeds")
    let li = document.createElement("li")
        li.addEventListener("click", function() {
            li.style.color = "orange"
        })
        li.innerText = breed
        
        ul.appendChild(li)
}

function filterBreeds(breed, json) {
    let keys = Object.keys(json.message)
    
    
    keys.filter(li => {
         
        if (breed === li[0]) {
            
            addLIToDom(li)
        }
    })
    
}


function filterBreed(json) {
    debugger;
    let dropDown = document.querySelector('#breed-dropdown')
    dropDown.addEventListener("change", function(event) {
        removeLI()
        filterBreeds(event.target.value, json)
    })
    // console.log("dropdown", dropDown)
    
    // console.log("filterBreeds", filterBreeds(dropDown.options))
    // filterBreeds(dropDown.value)
    // e.options[e.selectedIndex].text
}





    document.addEventListener("DOMContentLoaded", function() {
        fetchImgs()
        fetchDogBreeds()
        
})