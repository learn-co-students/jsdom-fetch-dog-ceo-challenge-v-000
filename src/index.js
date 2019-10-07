let breeds = [];

document.addEventListener('DOMContentLoaded', function() {
	fetchDogs();
	fetchBreeds();
})

function fetchDogs() {
	const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
	fetch(imgUrl)
		.then(resp => resp.json())
		.then(json => renderDogs(json));
}

function renderDogs(json) {
	const dogs = document.getElementById('dog-image-container')
	json.message.forEach(dog => {
	  const img = document.createElement('img')
	  img.setAttribute("src", `${dog}`)
	  dogs.appendChild(img)
	})
}

function fetchBreeds() {
	const breedUrl = "https://dog.ceo/api/breeds/list/all"
	fetch(breedUrl)
		.then(resp => resp.json())
		.then(json => {
			breeds = Object.keys(json.message);
			updateBreedList(breeds);
			breedSelectListener();
		});
}

function renderBreed(breed) {
	let breedsUl = document.getElementById('dog-breeds')

	const li = document.createElement('li');
	let textnode = document.createTextNode(`${breed}`);
	li.appendChild(textnode);
	li.addEventListener('click', changeColor);
	breedsUl.appendChild(li);

}

function updateBreedList(breeds) {
	let breedsUl = document.getElementById('dog-breeds');
	removeChildren(breedsUl);
	breeds.forEach(breed => renderBreed(breed));
}

function removeChildren(element) {
	let child = element.lastElementChild;
	while (child) {
		element.removeChild(child);
		child = element.lastElementChild;
	}
}

function changeColor(element) {
	element.target.style.color = "#9400D3"
}

function breedSelectListener() {
	let breedSelectOptions = document.querySelector("#breed-dropdown")

	breedSelectOptions.addEventListener('change', function (event) {
		selectBreedsWith(event.target.value);
	})
}

function selectBreedsWith(letter) {
	updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
}
