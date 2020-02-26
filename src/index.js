
console.log('%c HI', 'color: blue')


document.addEventListener('DOMContentLoaded', function() {
	getImages()
	getBreeds()
})

const getImages = () => {
	const imgURL = "https://dog.ceo/api/breeds/image/random/4"

	fetch(imgURL)
	.then(response => response.json())	
	// .then(data => console.log(data))
	.then(data => {
		data.message.forEach(image => addImage(image))
	})
}

const addImage = (dogURL) => {
	let container = document.querySelector('#dog-image-container')
	let imageElement = document.createElement('img')
	imageElement.src = dogURL
	container.appendChild(imageElement)
}

const getBreeds = () => {
	const breedURL = 'https://dog.ceo/api/breeds/list/all'
	fetch(breedURL)
	.then(response => response.json())
	.then(results => {
		
		breeds = Object.keys(results.message)

		// breeds = results.message.keys
		// console.log(breeds.length)
		// let breeds = Object.assign( {}, results.message.key)
		console.log('breeds:', breeds)
		breeds.forEach(breed => {
			createBreedList(breed)
			getLetter(breeds)
		})
	})
}
//but dogURL was an array and this is an object 
const createBreedList = (dogBreed) => {
	let ul = document.querySelector('#dog-breeds')
	let li = document.createElement('li')
	li.innerHTML = dogBreed
	li.addEventListener('click', changeColor)
	ul.appendChild(li)
}


const changeColor = (event) => {
  	event.target.style.color = "lime"
}


//1 get letter 
const getLetter = (breeds) => {
	let breedDropdown = document.querySelector("#breed-dropdown")
	breedDropdown.addEventListener('change', () => {
		const letter = event.target.value;
		filterForLetter(letter, breeds)
	})
}
// 2 pass in data, and filter and 
const filterForLetter = (letter, breeds) => {
	const filteredBreeds = breeds.filter(breed => breed[0] === letter)
	// or use startsWith(letter)
	addFilteredListToDom(filteredBreeds)
	}

//3 send to dom 
const addFilteredListToDom = (filteredBreeds) => {
	let ul = document.querySelector('#dog-breeds')
	ul.innerHTML = ""
	filteredBreeds.forEach(breed => createBreedList(breed))
}


