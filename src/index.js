
document.addEventListener("DOMContentLoaded", () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    
    loadImages(imgUrl)
    loadDogBreeds(breedUrl)
})

function loadImages(url) {
  return fetch(url)
          .then(resp => resp.json())
          .then(json => renderImages(json.message))
}

function renderImages(json) {
  const container = document.getElementById('dog-image-container')
  
  json.forEach(imgUrl => {
    const img = document.createElement('img')
    img.src = `${imgUrl}`
    container.appendChild(img)
  })
}

function loadDogBreeds(url) {
    return fetch(url)
          .then(resp => resp.json())
          .then(json => renderDogBreeds(json.message))
}

function renderDogBreeds(json) {
    const container = document.getElementById('dog-breeds')
    const breeds = Object.keys(json)
    const dogs = json

    breeds.forEach(breed => {
        const li = document.createElement('li')
              li.addEventListener('click', (event) => {
                  event.preventDefault()
                  changeTextColor(event)
              })
        const hasMultipleBreeds = dogs[breed].length >= 1 ? true : false
        
        if (hasMultipleBreeds) {
            for(let i = 0; i < dogs[breed].length; i++) {
                li.innerHTML = `${breed} ${dogs[breed][i]}`
                container.appendChild(li)
            }
        } else {
            li.innerHTML = `${breed}`
            container.appendChild(li)
        }
    })
}

function changeTextColor(element) {
    element.target.style.color = 'red';
}