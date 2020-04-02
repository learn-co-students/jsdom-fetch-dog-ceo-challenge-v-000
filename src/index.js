console.log('%c HI', 'color: firebrick')


// document.getElementById("dog-breeds")
// let originalBreeds = Object.keys(json.message)
let breeds = []
let dogBreed = []
let test = []
let letter = []

//toggling color black to red and red to black
const colorObject = {
    "red": "", 
    "": "red"
}

window.onload = () => {
    fetchImage();
    fetchBreed();
    filterBreeds();
}

// document.adddEventListener('click', callbackFunction)
// listening for click on drop dowm a - d.
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("breed-dropdown").addEventListener('click', filterDogBreeds) 
})

function filterDogBreeds(event) {
    // console.log(event.target.value)
    // sets letter to the value of the breed=dropdown "a -d "
    letter = (event.target.value)
    let filtered = fetchBreed()
    // const startsWithN = countries.filter((country) => country.startsWith("N"));
            //  let startsWith(event) = breeds.filter(breed) => breed.startsWith(letter);
            //  let startsWith("letter") = breeds.filter((breed) => breed.startsWith("letter"));
        //    let list = filterBreeds().filter((breed) => breed.startsWith(letter));
           
//         console.log(startsWith("letter"));
    
             console.log(test);
              
             let result = test.filter((event) => event.startsWith(letter))
             console.log(result)
             return result
            //  test.appendChild(result)
};          

function updateList() {
    // fetchBreed()
    filterBreeds()
    let updatedList = test 
    return updatedList //returns test 

    const breedList = document.querySelector(`#breed-dropdown`)
    breedList.appendChild(updatedList)(`result`)

        // filterDogBreeds()
        // let = updatedList = result
    
}

// function createMenuItem(name) {
//     let li = document.createElement('li');
//     li.textContent = name;
//     return li;
// }
// get the ul#menu
// const menu = document.querySelector('#menu');

// add menu item
// menu.appendChild(createMenuItem('Home'));
// menu.appendChild(createMenuItem('Services'));
// menu.appendChild(createMenuItem('About Us'));








    //  console.log("breeds", breeds)
        //console.log("letter", letter) //displays letter a-d selected
    //  breeds.filter((breed) => breed.startsWith("letter"));
        //  console.log(startsWith("letter"));
    // let startsWith(letter) = breeds.filter((breed) => breed.startsWith(letter));
    //         console.log(startsWith("letter"));

        // WRONG LANGUAGE TRANSLATE TO JAVASCRIPT!
        // $('.myFilters li').on("click", function() {
        // ('breeds').on("click", function() {
        // var letter = $(this).text()[0];
        //     //   $('.myFilterItems li').each(function() {
        //     $('.breedsItems').each(function() {
        //         if ($(this).text()[0] == letter) {
        //            $(this).show();
        //                 } else {
        //                    $(this).hide();
        //                 }
                      
        //         });
        //     );

         // ('.breeds li').on("click", function() {
                    //     var letter = $(this).text()[0];
                    //     $('.breedsItems li').each(function() {
                    //       if ($(this).text()[0] == letter) {
                    //         $(this).show();
                    //       } else {
                    //         $(this).hide();
                    //       }
                      
                    //     });
                    //   });

                    //   for (i = 0; i < breeds.length; i++) {
                    //     a = breeds[i].getElementById("a")["0"];
                    //     txtValue = a.textContent || a.innerText 
                //         if (txtValue.toUpperCase().indexOf(filter) >-1) {
                //             breeds[i].style.display = ""; 
                //         // elsif

                //         // elsif

                //         // elsif
                //         } else {
                //             breeds[i].style.display = "none";
                //         }
                //  }

// function filterBreeds() {
//         // const countries = ['Norway', 'Sweden',  'Denmark', 'New Zealand'];
//         const breeds = breedUrl()
//         dogBreed = document.getElementById("dog-breeds")
    
//         // const startsWithN = countries.filter((country) => country.startsWith("N"));
//         let startsWith("letter") = breeds.filter((breed) => breed.startsWith("letter"));
//         console.log(startsWith("letter"));
// }

// function filterBreeds() {
//     const breeds = breedUrl()
//     dogBreed = document.getElementById("dog-breeds")
//     // Set empty <ul> dog-breeds
//     dogFilter = document.getElementById("")
    
//     // Iterate over list using for each
//     dogBreed.forEach(function (item, index) {
//         console.log(item, index);
//     })

//     // Filter breeds that start with letter in <li>

// }

   // ('.breeds li').on("click", function() {
                    //     var letter = $(this).text()[0];
                    //     $('.breedsItems li').each(function() {
                    //       if ($(this).text()[0] == letter) {
                    //         $(this).show();
                    //       } else {
                    //         $(this).hide();
                    //       }
                      
                    //     });
                    //   });

                                        //   for (i = 0; i < breeds.length; i++) {
                    //     a = breeds[i].getElementById("a")["0"];
                    //     txtValue = a.textContent || a.innerText 
                //         if (txtValue.toUpperCase().indexOf(filter) >-1) {
                //             breeds[i].style.display = ""; 
                //         // elsif

                //         // elsif

                //         // elsif
                //         } else {
                //             breeds[i].style.display = "none";
                //         }
                //  }


        
    

function fetchImage() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    //fetch the images using the url above
    fetch(imgUrl)
        .then(resp => resp.json())
        .then(json => {
            dogPictures = document.getElementById("dog-image-container")
            ////parse the response as JSON
            for (let i = 0; i < json.message.length; i++) {
                //add image elements to the DOM for each🤔 image in the array
                dogPictures.innerHTML += `<div><img src="${json.message[i]}" alt="Dog Pictures"></div>`
            } 
        });
}


function fetchBreed() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    //on page load, fetch all the dog breeds using the url above 
    fetch(breedUrl)
    .then(resp => resp.json())
        .then(json => {
            //document.getElementById("dog-breeds")
            dogBreed = document.getElementById("dog-breeds")
                test = Object.keys(json.message) //originalBreeds 
           
             for (let i = 0; i < test.length; i++) {
                
                dogBreed.innerHTML += `<li>${test[i]}</li>`
            } 
                    dogBreed.addEventListener('click', function (event) {
                    // as soon as the list item is clicked, change its color to red 
                    event.target.style.color = colorObject[event.target.style.color];
             })
        });
}

function filterBreeds() {
    dogBreed.innerHTML = ""
    for (let i = 0; i < test.length; i++) {
        //Create li 
        newDog = document.createElement('li')
            breedName = test[i]
            //debugger
                newDog.innerText = breedName
                    if (breedName.filter = "letter") {
                        dogBreed.appendChild(newDog)
                    } else {
                        dogBreed.appendChild(newDog)
                    }
            // dogBreed.appendChild(newDog)
    }
}
