console.log('%c HI', 'color: firebrick')


// document.getElementById("dog-breeds")
// let originalBreeds = Object.keys(json.message)
let breeds = []


window.onload = () => {
    fetchImage();
    breedUrl();
    // document.getElementById("breed-dropdown").addEventListener("change", selectDropdown ) // filterBreeds()
    // document.getElementById("breed-dropdown").addEventListener("change", filterBreeds()) // 
    document.addEventListener('DOMContentLoaded', function () {
        filterBreeds();
    });
}

function selectDropdown(event) {
    // console.log(event.target.value)
    // sets letter to the value of the breed=dropdown "a -d "
    letter = event.target.value
    // console.log("breeds", breeds)

        //console.log("tetter", letter) //displays letter a-d selected
    // breeds.filter((breed) => breed.startsWith("letter"));
    //     console.log(startsWith("letter"));
    let startsWith("letter") = breeds.filter((breed) => breed.startsWith("letter"));
            console.log(startsWith("letter"));

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
 };
        
    

function fetchImage() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    //fetch the images using the url above
    fetch(imgUrl)
        .then(resp => resp.json())
        .then(json => {
            document.getElementById("dog-breeds")
            dogBreed = document.getElementById("dog-breeds")
            ////parse the response as JSON
            for (let i = 0; i < json.message.length; i++) {
                //add image elements to the DOM for each🤔 image in the array
                dogBreed.innerHTML += `<li><img src="${json.message[i]}" alt="Dog Breeds"></li>`
            } 
        });
}

//toggling color black to red and red to black
const colorObject = {
    "red": "", 
    "": "red"
}

function breedUrl() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    //on page load, fetch all the dog breeds using the url above 
    fetch(breedUrl)
    .then(resp => resp.json())
        .then(json => {
            //document.getElementById("dog-breeds")
            dogBreed = document.getElementById("dog-breeds")
                test = Object.keys(json.message) //originalBreeds 
                 //debugger
                    dogBreed.addEventListener('click', function (event) {
                    // as soon as the list item is clicked, change its color to red 
                    event.target.style.color = colorObject[event.target.style.color];
             })
             breeds = test
            //  filterBreeds(breedList) breedList is not defined               //  breedName = dogName
            filterBreeds()

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
        });
}

// function filterBreeds(breedList) {
    function filterBreeds() {
    dogBreed.innerHTML = ""
    for (let i = 0; i < test.length; i++) {
        //Create li 
        newDog = document.createElement('li')
            breedName = test[i]
            //debugger
                newDog.innerText = breedName
                dogBreed.appendChild(newDog)
    }
}
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