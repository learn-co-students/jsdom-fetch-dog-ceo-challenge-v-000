// console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", function () {
    // console.log("The DOM has loaded");
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => { 
        for (let i = 0; i < json.message.length; i++) {
            console.log(i)
            document.getElementById("dog-image-container").innerHTML += `<img src="${json.message[i]}"/>`;
        }
    });
});
