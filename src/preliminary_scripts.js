/*
  Notes correspond to the instructions here:
  https://learn.co/tracks/full-stack-web-development-v8/module-14-front-end-web-programming-in-javascript/section-4-communication-with-the-server/dog-ceo-fetch-practice
  these are the initial building blocks used to build the final Javascript functions.
  after each of the scripts below were found to be working properly, they were
  assembled into the burd_index.js; this step is necessary to allow
  the user to interact with the DOM.  as elements are added in the
  burd_index.js, the Javascript console will produce errors like this:
  "Uncaught TypeError: Cannot read property 'contains' of null"
  ...as the user begins to click on images, lists, and other items.

*/

document.addEventListener('DOMContentLoaded', function () {
});

/* (Challenge 2) */
/* grab four dog images from the dog.ceo api */
fetch('https://dog.ceo/api/breeds/image/random/4')
.then(function(response) {
  return response.json();
})
.then(function(json) {
  console.log(json)
});

/* (Challenge 1) */
/* select the DOM location to insert the dog pictures from dog.ceo */
let container = document.querySelector('#dog-image-container');

/* (Challenge 1) */
/* create a new element in the DOM to hold a dog picture*/
let newImageEl = document.createElement('img');

/* (Challenge 1) */
/* define the source of the picture that will go in the new element */
/* NOTE: this .jpg is just a placeholder until the logic is developed */
newImageEl.src = "https://images.dog.ceo/breeds/spaniel-sussex/n02102480_4217.jpg";

/* (Challenge 1) */
/* this will add the new element to the correct DOM location */
container.appendChild(newImageEl);

/* (Challenge 2) */
/* grab the API object containing the complete list of dog breeds */
fetch('https://dog.ceo/api/breeds/list/all')
.then(function(response) {
  return response.json();
})
.then(function(json) {
  console.log(json)
});

/* now print out each name of each dog breed located in the API's object */
fetch('https://dog.ceo/api/breeds/list/all')
.then(function(response) {
  return response.json();
})
.then(function(json) {
  for (const key in json.message) {
    console.log(key);
  }
});

/* now create an empty array to store those dog names in */
let breeds = [];

/* now print out each name of each dog in the API's object and push them to the empty array */
fetch('https://dog.ceo/api/breeds/list/all')
.then(function(response) {
  return response.json();
})
.then(results => {

  breeds = Object.keys(results.message);
});

/*
    Now populate the DOM with the dog breed array with the following steps:
*/


/* (Challenge 2) */
/* select the DOM location to add the dog breeds and:
   "add the breeds to the page in an <ul>:
   per instruction on the Flatiron lesson plan
*/
let ul = document.querySelector('#dog-breeds');

/* create the element that will hold an individual dog breed name */
let li = document.createElement('li');

/* apply the first dog breed name in the array to the newly created element */
/* li.innerText = breeds[0] */

/* add the new element with the dog breed name to the page in an <ul> */
/* ul.appendChild(li); */

/* iterate through the entire breeds array and print each dog name */
for (const key of breeds) {
  console.log(key);
}

/* iterate through the entire breeds array and add a new item to the DOM for each name */
for (const key of breeds) {
  x = document.createElement('li');
  x.innerText = key;
  ul.appendChild(x);
}


/* select the last breed in the list of breeds on the DOM */
let child = ul.lastElementChild

/* while a last breed exists on the list, remove it from the DOM */
while (child) {
  ul.removeChild(child);
  child = ul.lastElementChild;
}
