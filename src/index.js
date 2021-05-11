console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedsUrl = "https://dog.ceo/api/breeds/list/all"

document.addEventListener("DOMContentLoaded", function() {
    console.log('DOM fully loaded and parsed');
    fetchDogPhotos();
    fetchDogBreeds();
});

function fetchDogPhotos() {
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => createImgElementsFromArray(json)) 
};

//we want to iterate through the images array
//img urls are within json.message

function createImgElementsFromArray(json) {
    const main = document.getElementById("dog-image-container")
    json["message"].forEach(imgUrl => {
      const newImg = document.createElement("img")
      newImg.src = imgUrl
      main.appendChild(newImg)
});
};

function fetchDogBreeds(){
    fetch(breedsUrl)
    .then(resp => resp.json())
    .then(json => createBreedsArrayFrom(json))
};

function createBreedsArrayFrom(json) {
    const breedsArray = Object.keys(json.message)
    breedsArray.forEach(breed => addBreed(breed));
};

//breedsArray
//["affenpinscher", "african", "airedale", "akita", "appenzeller", "australian", "basenji", "beagle", "bluetick", "borzoi", "bouvier", "boxer", "brabancon", "briard", "buhund", "bulldog", "bullterrier", "cairn", "cattledog", "chihuahua", "chow", "clumber", "cockapoo", "collie", "coonhound", "corgi", "cotondetulear", "dachshund", "dalmatian", "dane", "deerhound", "dhole", "dingo", "doberman", "elkhound", "entlebucher", "eskimo", "finnish", "frise", "germanshepherd", "greyhound", "groenendael", "havanese", "hound", "husky", "keeshond", "kelpie", "komondor", "kuvasz", "labradoodle", "labrador", "leonberg", "lhasa", "malamute", "malinois", "maltese", "mastiff", "mexicanhairless", "mix", "mountain", "newfoundland", "otterhound", "ovcharka", "papillon", "pekinese", "pembroke", "pinscher", "pitbull", "pointer", "pomeranian", "poodle", "pug", "puggle", "pyrenees", "redbone", "retriever", "ridgeback", "rottweiler", "saluki", "samoyed", "schipperke", "schnauzer", "setter", "sheepdog", "shiba", "shihtzu", "spaniel", "springer", "stbernard", "terrier", "vizsla", "waterdog", "weimaraner", "whippet", "wolfhound"]

function addBreed(breed){
    const ul = document.getElementById("dog-breeds");
    const li = document.createElement("li");
    li.innerHTML = breed;
    ul.appendChild(li);
    li.addEventListener("click", updateColor);
};

function updateColor(event) {
    event.target.style.color = 'purple';
    console.log(event)
};

function addBreedsSelectListener() {
    let breedDropdown = document.getElementById("breed-dropdown");
    breedDropdown.addEventListener('change', function(event) {
        letter = event.target.value
        console.log(letter)
        showBreedsByLetter(letter);
    });
};

function removeChildrenFromUl() {
    const ul = document.getElementById("dog-breeds");
    ul.innerHTML = "";
};
//clears all li elements

function showBreedsByLetter(letter){
    removeChildrenFromUl();
    console.log(breeds)
};


