console.log('%c HI', 'color: firebrick');
const imgsUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';



// start of dog's img and breed markup
function validateResponse(response) {
    if (!response.ok){
        throw Error (response.statusText);
    }
    return response;
}

function responseAsJson(response) {
    return response.json();
}

function jsonResponseMessage(jsonResponse) {
    return jsonResponse.message; 
}

function logError(error) {
    console.log('un error occured: \n', error );
}


function imgArrayMessage(arr){
    if (Array.isArray(arr)){ arr.forEach( img => { imgMarkUp(img) } ); } 
}

function breedArrayMessage(arr) {
     arr = Object.keys(arr);
    if (Array.isArray(arr)) { arr.forEach(breed => { breedMarkUp(breed) }); }
}

function imgMarkUp(resource){
    const container = document.getElementById("dog-image-container");
    // checks to see if a <ul> exist. 
    while(!container.querySelector("ul")){
        const ul = document.createElement("ul");
        container.appendChild(ul);
    }
    // creates an <li>
    const li = document.createElement("li");
    // attaches the <li> to the <ul>
    container.querySelector("ul").appendChild(li);
    // // creates an <img>
    const img = document.createElement("img");
    // // attaches the url to <img> src property
    img.setAttribute("src",resource);
    img.setAttribute("class","dog-imgs");
    
    // // attacches the <img> to the <li>
    li.appendChild(img);          
}



function breedMarkUp(resource) {
    let container = document.getElementById("dog-breeds");
     if (container){
         let li = document.createElement("li");
         let a = document.createElement("a");
         li.setAttribute("class","breed-classification")
         li.innerText = resource;
         container.appendChild(li);
         li.addEventListener("click", (self) => { colorText(self)});
     }   
}

// end of dog's img and breed markup
function fetchImgs(imgResource) {
    fetch(imgResource)
    .then(validateResponse)
    .then(responseAsJson)
    .then(jsonResponseMessage)
    .then(imgArrayMessage)
    .catch(logError);
}

// changes the elements color on click
 function colorText(element){
     element.target.style.color = getRandomColor();
}

// random color generator
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function fetchBreed(breedUrl){
    fetch(breedUrl)
    .then(validateResponse)
    .then(responseAsJson)
    .then(jsonResponseMessage)
    .then(breedArrayMessage)
    .catch(logError)
}

// event loader
window.onload = ( fetchImgs(imgsUrl), fetchBreed(breedUrl) )

// Challenge 3
// Once all of the breeds are rendered in the < ul >, 
// add JavaScript so that the font color of a particular < li > changes on click.
// This can be a color of your choosing.

// When the user clicks any of the dog breed list items,
// the color the text should change.
