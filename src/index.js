console.log('%c HI', 'color: firebrick')



function fetchDogs() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
.then(resp => resp.json())
.then(data => renderDogs(data));
    
  }
  
  function renderDogs(dogs) {
    const main = document.querySelector('#dog-image-container');
    console.log(dogs);
    dogs.message.forEach(dog => {
        
        const image = document.createElement('img');
        image.src  = dog;
        main.appendChild(image);
    });
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    fetchDogs();
  });
  