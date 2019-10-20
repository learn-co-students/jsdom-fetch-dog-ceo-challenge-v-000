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
	obj.forEach(function(el) {
	let newElement = document.createElement(elementType);
	newElement.innerHTML = el;
	if (addColorEvent) {
		addColorChangeEvent(newElement);
	}
	elementToAppendTo.appendChild(newElement)
 })
}

function addColorChangeEvent(element) {
	element.addEventListener('click', function(event) {
		event.target.style.color = '#8A795D';
	})
}

function getBreeds() {
	const breedUrl = 'https://dog.ceo/api/breeds/list/all';
	fetch(breedUrl)
	.then(resp => resp.json())
	.then(json => {
		 OBJECT = Object.keys(json.message);
		 const breedElement = document.getElementById('dog-breeds');
		 addElementToDOM(OBJECT, 'li', breedElement, true);
	 })
}

function addFilteredBreeds() {
	const menuElement = document.getElementById('breed-dropdown');
	menuElement.addEventListener('change', function() {
		removeElements();
		const breedElement = document.getElementById('dog-breeds');
		const filteredArray = filterElements(); 
		addElementToDOM(filteredArray, 'li', breedElement, false);
	})
}

function removeElements() {
		let listEl = document.querySelector('ul');
		listEl.innerHTML = "";
}

function filterElements() {
	let userMenuValue = document.querySelector('select').value;
	let filteredArray = [];
	let i;
	for (i = 0; i < OBJECT.length; i++) {
		if (userMenuValue === OBJECT[i][0]) {
			filteredArray.push(OBJECT[i]);
		}
	}
	return filteredArray;
}

window.onload = function() {
	getImages();
	getBreeds();
	addFilteredBreeds();
}
