const newVariable = "is this even checking out?"
console.log('%c HI', 'color: firebrick')
window.addEventListener('DOMContentLoaded', (event) => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const imageList = document.querySelector("div#dog-image-container");
    const breedUrl = 'https://dog.ceo/api/breeds/list/all';
    const breedDropdown = document.getElementById("breed-dropdown");

    const breedList = document.querySelector("ul#dog-breeds");
    // const dogBreedArray = Array.from(document.querySelectorAll("ul#dog-breeds > li"))
    
    

    // these fetches look kinda ugly...would be worth refactoring!
   fetch(imgUrl)
        .then (function(response){
            return response.json();
        })
        .then(function(images){
            for (const image of images.message) {
                let newImg = document.createElement("img");
                newImg.src = image;
                imageList.appendChild(newImg);
            }
            
        })

    fetch(breedUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(breeds) {
            for (const breed of Object.keys(breeds.message)) {
                let newBreed = document.createElement("li");
                newBreed.innerHTML = breed;
                newBreed.addEventListener("click", e => e.target.style.color = "blue");
                breedList.appendChild(newBreed);
            }
        })
        
        breedDropdown.onchange = function() {
            let letter = breedDropdown.value;
            filterBreeds(letter);
        }

        function filterBreeds(letter) {
            const dogBreedArray = Array.from(document.querySelectorAll("ul#dog-breeds > li"))
            const breedListNames = dogBreedArray.map(li => li.innerHTML);

            console.log(letter);
            console.log(dogBreedArray);
            console.log(breedListNames);
            const result = breedListNames.filter(name => name[0] === letter);
            console.log(result);
        }
        
});


// In case you want to get all the li elements as an array:
// let dogBreedList = Array.from(document.querySelectorAll("ul#dog-breeds > li"))

// In order to implement the dropdown filter you're gonna need a bunch of things:

// a way to tell which letter is selected.
// a way to filter the dog breed names. so that means you need to be able to recognize the first letter of each word (put an event listener to set some sort of attribute?)
// ok, so what do you do with the breeds that you recognize as matching the parameter?
//  collect the entire elements in an array?delete everything in the ul, then populate it with the collected elements?
//  


// working code to get value of selected item from dropdown:

// let dropdownList = document.getElementById("breed-dropdown")
// dropdownList.onchange = function() {
//     let x = document.getElementById("breed-dropdown").value;
//     console.log(x)
//   }


// once you grab the value of the selected option, call a function passing in the value, and filter the results according
// to the selected option. how do you do that?


