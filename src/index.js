//console.log('%c HI', 'color: firebrick')
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function fetchDogs() {
    return fetch(imgUrl)
   .then(resp => resp.json())
   .then(json => renderDogs(json));
}

function renderDogs(json) {
  const main = document.getElementById('dog-image-container')
  const imageArray = json.message;
    imageArray.forEach(function(img){
    let imgEl = document.createElement('img')
    imgEl.src = img;
    main.appendChild(imgEl);
    });
  }


function fetchBreeds(){
 fetch(breedUrl)
 .then(resp => resp.json())
 .then(data =>renderBreeds(data));
}


function renderBreeds(data){
  breeds = data.message;
  const ul = document.getElementById('dog-breeds')
  for (let key in breeds) {
    let li = document.createElement("li");
    if (breeds[key].length >= 1) {
      li.innerText = key
      ul.appendChild(li)
      let ul2 =  document.createElement("ul");
       breeds[key].forEach(function(spec){
        let li2 = document.createElement("li");
        li2.innerText = spec;
        ul2.append(li2);
        li.append(ul2)
      });
      ;
    } else {
      li.innerText = key;
    }
    ul.appendChild(li);
  li.addEventListener('click', changeColor);
  }
}

function changeColor(e){
  e.target.classList.add('clicked');
}



document.addEventListener('DOMContentLoaded', function() {
  fetchBreeds();
  fetchDogs();
});
