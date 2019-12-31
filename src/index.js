console.log('%c HI', 'color: firebrick');
const imgsUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

// utility function for random color generator
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

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

function breedArrayMessage(arr) {
     arr = Object.keys(arr);
    if (Array.isArray(arr)) { arr.forEach(breed => { breedMarkUp(breed) }); }
}


// element creator for breed and eventListener attachment
function breedMarkUp(resource) {
    let container = document.getElementById("dog-breeds");
     if (container){
         let li = document.createElement("li");
         let a = document.createElement("a");
         li.setAttribute("class","breed-classification")
         li.innerText = resource;
         container.appendChild(li);
         li.addEventListener("click", (self) => { colorText(self) });
     }   
}

// changes the elements color on click
function colorText(element){
    element.target.style.color = getRandomColor();
}

// dropdown code 
  function dropDown() {
     const dropdown = document.getElementById("breed-dropdown");
     if (typeof dropdown === "object") {
        for(const element of dropdown.children) 
            element.addEventListener("click", () => { hideElements() })
     }
 }

// end of dog's img and breed markup

// logic to hide iteams when using dropdown
function hideElements() {
    const list = document.getElementById("dog-breeds");
    const ListItems = list.getElementsByTagName("li");
    if (event.type === "click") {
        let targetValue = event.target.value;
        for(let item of ListItems){
            if (item.textContent.charAt(0) !== targetValue && item.textContent !== "---sort by:---") {    
                item.style.display = "none";
            }else{
                
                console.log("foo");
               item.style.display = "";
            }
        }
        
    }
}



/*
start of code initializers
*/
            
function fetchImgs(imgResource) {
                fetch(imgResource)
                .then(validateResponse)
                .then(responseAsJson)
                .then(jsonResponseMessage)
                .then(imgArrayMessage)
                .catch(logError);
            }


function breedConstruct(breedUrl){
    fetch(breedUrl)
    .then(validateResponse)
    .then(responseAsJson)
    .then(jsonResponseMessage)
    .then(breedArrayMessage)
    .then(dropDown)
    .catch(logError)
}


// event loader
window.onload = (fetchImgs(imgsUrl), breedConstruct(breedUrl) )

