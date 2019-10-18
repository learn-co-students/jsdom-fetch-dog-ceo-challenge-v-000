console.log('%c HI', 'color: firebrick')

function fetchDogs() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(response => response.json())
        .then(json => renderDogs(json))
}

function renderDogs(json) {
    const main = document.querySelector('#dog-image-container')
    json.forEach(picture => {
        
    })
}
