//CHALLENGE 1



document.addEventListener('DOMContentLoaded', function() {
    fetchDogs()
    fetchBreeds() 
    
})

function fetchDogs() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(x => displayDogs(x))  //x is the result from previous line
}

function displayDogs(x) {
    const imagesHome = document.getElementById('dog-image-container')
    x.message.forEach(string => {
        const newImg = document.createElement('img')
        newImg.src = string
        imagesHome.appendChild(newImg)
    })
}

//CHALLENGE 2

function fetchBreeds() {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(resp => resp.json())
    .then(y => {
        displayBreeds(y)
        selectBreedsFromLetter()
    })
}

function displayBreeds(y) {
    const breedsList = document.getElementById('dog-breeds')
    for (const name in y.message) {
        const line = document.createElement('li')
        line.id=name
        line.classList.add("breed")
        line.innerHTML = name
        breedsList.appendChild(line)
    }
}

//CHALLENGE 3

document.addEventListener('click', (e) => {  //anonymous function with e
    if (e.target.id === e.target.innerHTML) {
        e.target.style.color = "green";
    }
})

//CHALLENGE 4

function selectBreedsFromLetter() {
    let allLists = document.getElementsByClassName('breed')
    let listArray = new Array()

    for (let i=0; i<allLists.length; i++) {
        listArray.push(allLists[i])
    }

    let breedDropDown = document.querySelector('#breed-dropdown')

    breedDropDown.addEventListener('change', function(e) {
        let refreshList = listArray.forEach(list => list.style.display="block")
        if (e.target.value==="default") {
            refreshList
        } else {
            refreshList
            filterArray()
        }
    })

    function filterArray() {
        for (let list of listArray) {
            if (!list.innerText.startsWith(breedDropDown.value)) {
                list.style.display="none"
            }
        }
    }
}











    










    











