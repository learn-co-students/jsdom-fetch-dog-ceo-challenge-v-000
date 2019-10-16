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

    let selectBreed = document.getElementById("#breed-dropdown");
    selectBreed.addEventListener('keyup', filterBreeds);

    function filterBreeds() {
        console.log(a);
    }
}



document.addEventListener('DOMContentLoaded', function() {
    fetchDogs();
    fetchBreeds();
})
// liText.addEventListener('click', breedColorClick);