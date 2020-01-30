console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", function(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    const dropdown = document.querySelector("#breed-dropdown")
    const imgTag = url => `<img src="${url}" alt="doggo" style="width: 50px">`
    const breedLi = breed => `<li class="breed-li">${breed}</li>`

    fetch(imgUrl)
        .then(resp => resp.json())
        .then(addImages)

    fetch(breedUrl)
        .then(resp => resp.json())
        .then(addBreeds)

    function addImages(images) {
        for (const img of images.message) {
            appendImg(img)
        }
    }

    function addBreeds(breeds) {
        for (const breed in breeds.message) {
            if (breeds.message[breed].length === 0) {
                appendLi(breed)
            } else {
                for (const subBreed in breeds.message[breed]){
                    const sB = breeds.message[breed][subBreed]
                    console.log(`${breed} ${sB}`)
                    const specificBreed = `${breed} ${sB}`
                    appendLi(specificBreed)
                }
            }
            
        }
        addListeners()
    }

    function appendImg(img){
        document.querySelector("#dog-image-container").innerHTML += imgTag(img)
    }

    function appendLi(breed){
        document.querySelector("#dog-breeds").innerHTML += breedLi(breed)
    }

    function addListeners(){
        const breedLis = document.querySelectorAll(".breed-li")
        for(const li of breedLis){li.addEventListener("click", changeFont)}

        dropdown.addEventListener("change", filterDoggos)
    }

    function changeFont(e){
        e.target.style.fontFamily = "Impact,Charcoal,sans-serif";
    }

    function filterDoggos(e) {
        console.log('getting dogs starting with ' + e.target.value)
        const breedLis = document.querySelectorAll(".breed-li")
        for(const li of breedLis){
            if(li.textContent[0] === e.target.value){
                li.style.display = 'block'
            } else {
                li.style.display = 'none'
            }
        }
    }
})