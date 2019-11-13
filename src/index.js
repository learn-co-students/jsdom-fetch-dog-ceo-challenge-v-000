console.log('%c HI', 'color: firebrick')

function filterBreeds(letter){
	fetch(breedUrl).then(function(response){
		return response.json()
	}).then(function(json){
		for(const key in json.message){
			if (key[0] === letter){
				createBreedList(key)
			}
		}
	})
}

function createBreedList(key){
	let listItem = document.createElement("li")
	listItem.innerText = key
	listItem.addEventListener("click", function(){
		listItem.style.color = "red"
	})
	document.getElementById("dog-breeds").appendChild(listItem)
}

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

fetch(imgUrl).then(function(response){
	return response.json()
	}).then(function(json){
	for(const url of json.message){
		imgContainer = document.createElement("img")
		imgContainer.src = url
		imgContainer.style.display = "block"
		document.getElementById("dog-image-container").appendChild(imgContainer)
	}
	
})

fetch(breedUrl).then(function(response){
	return response.json()
}).then(function(json){
	for(const key in json.message){
		createBreedList(key)
	}
})

const letterSelector = document.getElementById("breed-dropdown")

letterSelector.addEventListener("change", function(){
	document.getElementById("dog-breeds").innerHTML = ""
	filterBreeds(letterSelector.value)
})

