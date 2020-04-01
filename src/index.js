const divContainer = document.getElementById("dogs");
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
var filterBtn = document.getElementById("breed-dropdown");


//
// filterBtn.addEventListener("click", function(){
//   console.log(filterBtn);
// })
function loadPage(){
  fetch(imgUrl)
  .then(function(response){
    return response.json();
  }).then(function(json){
    let dogImgContainer = document.getElementById("dog-image-container");
    json.message.forEach(function(imgURI){
      var newImg = document.createElement("IMG");
      newImg.src = imgURI;
      newImg.style.width = "25%";
      dogImgContainer.append(newImg);
    });
    });
  }

const breedUrl = 'https://dog.ceo/api/breeds/list/all';
  function onLoad(){
    fetch(breedUrl)
    .then(function(response){
      return response.json();
    }).then(function(json){
      var jsonObj = json.message;
      var dogArr = Object.keys(jsonObj);
      let dogbreeds = document.getElementById("dog-breeds");
      let colorDog = dogArr[4];
      dogArr.forEach(function(dogName){
        var newDog = document.createElement("li");
        newDog.innerHTML = dogName;
        dogbreeds.append(newDog);
        var tag = document.getElementsByTagName("li")
        // console.log(tag[0])
        tag[0].addEventListener("click", function(){
          tag[0].textContent.fontcolor("red");
          //will not change color!!!!
          //in console output is shown correctly
        })
      })
    })}
