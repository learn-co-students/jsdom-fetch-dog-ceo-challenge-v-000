console.log('%c HI', 'color: firebrick')
let dogArray = [];
fetch("https://dog.ceo/api/breeds/image/random/4")
.then(function(response) {  
	return response.json();
	})
.then(function(json) {  
    let dogArray = json;
    console.log(dogArray);
})

for (const element of dogArray) {
    const image = document.createElement('img');
    image.src = element;
    console.log(image.src);
    document.getElementById('dog-image-container').appendChild(image);
    console.log(element);
}

const image = document.createElement('img');
// image.src = dogArray[0];
// document.getElementById('dog-image-container').appendChild(image);
let imageDiv = document.getElementById("body#dog-image-container");
imageDiv.appendChild(image);