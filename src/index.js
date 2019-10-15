// console.log('%c HI', 'color: firebrick')
// window.onload = () => {
//         fetchDogs()
//         // renderDogs()
//         document.getElementById("breed-dropdown").addEventListener("change", handleBreedSelection)
// } 

const fetchDogs = function() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl)
        .then(response => response.json())
        .then(json => renderDogs(json))
}

const renderDogs = function (json) {
const div = document.querySelector('#dog-image-container');
    json.message.forEach(key => {
    const img = document.createElement('img')
        // console.log(key);        
        img.setAttribute("src", key)
        div.appendChild(img)
    })
}



document.addEventListener('DOMContentLoaded', function() {
    fetchDogs();
})