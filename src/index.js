document.addEventListener("DOMContentLoaded", () => {
    loadImages();
    loadBreeds();
});


console.log('%c HI', 'color: firebrick')

function loadImages() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            json.message.forEach(image => addImages(image));
        });
}

function addImages(image, index) {
    images = document.querySelector('#dog-image-container');
    newImage = document.createElement("img");
    newImage.src = image;
    images.appendChild(newImage);
}


// STEP 2

// const breedUrl = 'https://dog.ceo/api/breeds/list/all'

// After the first challenge is completed, add JavaScript so that:

//     on page load, fetch all the dog breeds using the url above ⬆️
//     add the breeds to the page in an <ul> (take a look at the included index.html)

function loadBreeds() {
    fetch("https://dog.ceo/api/breeds/list/all")
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            breeds = Object.keys(json.message);
            addBreeds(breeds);
            console.log(json)
        });
}

function addBreeds(breeds) {
    var breedSection = document.querySelector('#dog-breeds');
    breeds.forEach(function(breed) {
        var newBreed = document.createElement("li");
        newBreed.innerText = breed;
        breedSection.appendChild(newBreed);
        newBreed.style.cursor = 'pointer';
        newBreed.addEventListener("click", changeColor);
    });
}

// STEP 3

// Once all of the breeds are rendered in the <ul>, add JavaScript so that the font color of a particular <li> changes on click. This can be a color of your choosing.

// When the user clicks any of the dog breed list items, the color the text should change.

function changeColor() {
    event.target.style.color = "green";
    return false;
}

// STEP 4 

// Once we are able to load all of the dog breeds onto the page, add JavaScript so that the user can filter breeds that start with a particular letter using a dropdown.

// For example, if the user selects 'a' in the dropdown, only show the breeds with names that start with the letter a. For simplicity, the dropdown only includes the letters a-d. However, we can imagine expanding this to include the entire alphabet



function filterBreeds() {

    var breedDropdown = document.getElementById('#breed-dropdown');
    breedDropdown.addEventListener('change', function(event) {
        // Declare variables
        var input, filter, list, listItem;
        input = document.getElementById("#breed-dropdown");
        filter = input.value;
        list = document.getElementById("#dog-breeds");
        listItem = list.getElementsByTagName("li");

        //   var lis = $("#ulelement li");
        //     if(lis.length > threshold) {
        //    lis.eq(lis.length - 1).remove();
        // }

        // var x = 'some string';
        // alert(x.charAt(0)); // alerts 's'

        loadBreeds();

        if (listItem.charAt(0) != filter) {
            list.removeChild(listItem);
        }
    });
}




// let breeds = [];


// function loadBreedOptions() {
//   const breedUrl = 'https://dog.ceo/api/breeds/list/all'
//   fetch(breedUrl)
//     .then(res => res.json())
//     .then(results => {

//       breeds = Object.keys(results.message);
//       updateBreedList(breeds);
//       addBreedSelectListener();
//     });
// }

// function updateBreedList(breeds) {
//   let ul = document.querySelector('#dog-breeds');
//   removeChildren(ul);
//   breeds.forEach(breed => addBreed(breed));
// }

// function removeChildren(element) {
//   let child = element.lastElementChild;
//   while (child) {
//     element.removeChild(child);
//     child = element.lastElementChild;
//   }
// }

// function selectBreedsStartingWith(letter) {
//   updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
// }

// function addBreedSelectListener() {
//   let breedDropdown = document.querySelector('#breed-dropdown');
//   breedDropdown.addEventListener('change', function (event) {
//     selectBreedsStartingWith(event.target.value);
//   });
// }

// function addBreed(breed) {
//   let ul = document.querySelector('#dog-breeds');
//   let li = document.createElement('li');
//   li.innerText = breed;
//   li.style.cursor = 'pointer';
//   ul.appendChild(li);
//   li.addEventListener('click', updateColor);
// }