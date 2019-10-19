console.log('%c HI', 'color: firebrick')

function addImagesToDOM(obj) {
	let newArray = Array.from(obj.message)
	 newArray.forEach(function(el) {
	 let imageEl = document.createElement('img');
	 imageEl.src = el;
	 document.getElementById('dog-image-container').appendChild(imageEl)
	 })
}

function getImages() {
	const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
	fetch(imgUrl)
	.then(resp => resp.json())
	.then(json => addImagesToDOM(json))
}

function addElementToDOM(obj, elementType, elementToAppendTo, addColorEvent) {
	let newArray = Object.keys(obj.message);
	newArray.forEach(function(el) {
	let newElement = document.createElement(elementType);
	console.log(el)
	newElement.innerHTML = el;
	if (addColorEvent) {
		addColorChangeEvent(newElement);
	}
	elementToAppendTo.appendChild(newElement)
 })
}

function addColorChangeEvent(element) {
	element.addEventListener('click', function(event) {
		event.target.style.color = 'lime';
	})
}

function getBreeds() {
	const breedUrl = 'https://dog.ceo/api/breeds/list/all';
	let breedElement = document.getElementById('dog-breeds');
	fetch(breedUrl)
	.then(resp => resp.json())
	.then(json => addElementToDOM(json, 'li', breedElement, true)
)}





window.onload = function() {
	getImages();
	getBreeds();
}
