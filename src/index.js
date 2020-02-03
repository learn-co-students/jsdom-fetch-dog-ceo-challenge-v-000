console.log('%c HI', 'color: firebrick');

function execute(f, url){
  fetch(url)
  .then(resp => resp.json())
  .then(json => f(json));
}


function populateDogImgContainer(json){
  const dogImgContainer = document.getElementById('dog-image-container');
  const dogImgs = json.message;
  
  for (const img of dogImgs){
    let div = document.createElement('div');
    let i = document.createElement('img');
    i.src = img;
    
    div.appendChild(i);
    dogImgContainer.appendChild(div);
  }
}

function colorizeLi(li){
  li.addEventListener('click', function(){
    this.style.color = "firebrick";
  });
}

function listDogBreeds(json){
  const ul = document.getElementById('dog-breeds');
  const breeds = json.message
  
  for(let breed in breeds){
    let li = document.createElement('li')
    li.innerText = breed;
    colorizeLi(li);
    ul.appendChild(li);
  }
}

function sortBreeds(){
  const dropdownValue = document.getElementById('breed-dropdown').value;
  const breeds = document.querySelectorAll('#dog-breeds li');
  
  for (const breed of breeds){
    breed.style.display = "";
  }
  
  for (const breed of breeds){
    let first_letter = breed.innerText[0];
    
    if (first_letter !== dropdownValue){
      breed.style.display = "none";
    }
  }
}

document.addEventListener("DOMContentLoaded", function(){
  execute(populateDogImgContainer, "https://dog.ceo/api/breeds/image/random/4");
  execute(listDogBreeds, "https://dog.ceo/api/breeds/list/all");
});