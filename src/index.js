// console.log('%c HI', 'color: firebrick')

const fetchDogs = function() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/10";
    fetch(imgUrl)
        .then(response => response.json())
        .then(json => renderDogs(json))
}

const renderDogs = function (json) {
const div = document.querySelector('#dog-image-container');
    json.message.forEach(key => {
    const ele = document.createElement('div')
    const img = document.createElement('img')
        // console.log(key);        
        img.setAttribute("src", key);
        ele.appendChild(img);
        div.appendChild(ele);
    })
}

const fetchBreeds = function() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all';
    fetch(breedUrl)
        .then(response => response.json())
        .then(json => renderBreeds(json))
}

const renderBreeds = function (json) {
    const ul = document.querySelector('#dog-breeds');
    Object.keys(json.message).forEach((element) => {
        // console.log(`element is ${element}`);  
        // let index = 0;
        const li = document.createElement('li');
        const liText = document.createElement('liText');
        liText.textContent = element;
        // console.log(liText.textContent = element);      
        // const liText = document.createElement('text').innerText;
        li.appendChild(liText);
        ul.appendChild(li);
        li.addEventListener("click", () => {
            li.style.color = "red";
        })       
    })
    // const breedColorClick = function () {
    //     console.log(document.getElementsByTagName('liText'));
    //     // liText.setAttribute('onclick', element);
    //     // liText.addEventListener('click', breedColorClick);
    // }

}

// grab ul and append new list

const updateBreeds = (breed) => {
    const ul = document.getElementById("dog-breeds");
    const li = document.createElement('li');
    li.innerText = breed; 
    ul.appendChild(li);
}

function filterBreeds(letter) {
    const dropdown = document.getElementById("#breed-dropdown");
    dropdown.addEventListener('change', () => {
        let filteredBreeds = dogs.filter(breed => breed.startsWith(letter))
        renderBreeds(filteredBreeds)
    })
}

document.addEventListener('DOMContentLoaded', function() {
    fetchDogs();
    fetchBreeds();
})
// liText.addEventListener('click', breedColorClick);

// let dogs

// fetch(breedUrl)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (myJson) {
//         dogs = myJson.message;
// }) 

// document.getElementById("breed-dropdown").onchange=function() {
//   let letter = this.value  

//   dogsUL.innerHTML = ''

//   for (let dog in dogs) {
//     if (letter == dog[0]) {
//       dogLi = document.createElement("li");
//       dogLi.innerHTML = dog
//       dogsUL.appendChild(dogLi)

//       dogs[dog].forEach(dog => {
//         const nestedDogUL =  document.createElement("ul");
//         const nestedDogLi = document.createElement("li");
//         nestedDogLi.innerHTML = dog
//         nestedDogUL.appendChild(nestedDogLi)
//         dogLi.appendChild(nestedDogUL)
//       });
//     }
//   }
//   makeRedonClick();
// } 