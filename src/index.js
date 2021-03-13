console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'


document.addEventListener('DOMContentLoaded', (event) => {

  document.addEventListener('click', function (event) {
    // debugger
      event.target.style.color = "blue"
  });

  function getImages() {
    fetch(imgUrl)
      .then(function(response){
    // json is itself a method , so we have to call it to convert the json for it. before,
    // we were just calling the method instead of running it and returngin the result
        return response.json();
      })



      .then(function(json){
// it's good to put a string first ('hi', json) just to let you know while debugging
// where each console log is , as a small note to yourself, like 'second then' or something
//
// we had to check what the json data looked like when we got it, by clicking the down arrow in the
// console
// the very first step to take is to console log what the object looks like, right after
// you set up the fetch request. the objects will always look different depending on the sender
        console.log("first function", json)
        json.message.forEach(function(image) {
          let img = document.createElement('img')
          img.src = image;
          document.body.appendChild(img);
        });



      });

    }

  getImages()





  function getBreeds(){
    fetch(breedUrl)
      .then(function(response){
        return response.json();
      })

      .then(function(json){

        for (const key in json.message) {
          // console.log(json.message[key])
            let newLi = document.createElement("li")
            newLi.innerHTML = key
            newLi.className += "li-color"
            document.getElementById("dog-breeds").appendChild(newLi)
        }
        // json.message.keys.forEach(function(breed) {
        //   let newLi = document.createElement("li")
        //   newLi.innerHTML = breed
        //   document.findElementById("dog-breeds").appendChild(newLi)
        // });

      })

  }


  getBreeds();

  let dropdown = document.getElementById("breed-dropdown")
  dropdown.addEventListener('input', function(event) {
    // console.log("clicked on dropdown")
    // console.log(event.target.value)
  let uList = document.getElementById("dog-breeds")
  console.log(uList)
// ...





// works- gives a breed name (akita)

  let items = uList.getElementsByTagName("li");
  // console.log(items[1].innerHTML)

  for (var i = 0; i < items.length; ++i) {
    // console.log(items[i].innerHTML)
    if (event.target.value !== items[i].innerHTML.charAt(0)) {
      items[i].style.visibility = "hidden";
    } else {
      items[i].removeAttribute("style")
    }

}
    //
    // for (const item of uList) {
    //   if (event.target.value !== items[i].innerHTML.charAt(0)) {
    //     items[i].style.visibility = "hidden";
    //   } else {
    //     items[i].removeAttribute("hidden")
    //   }
    // }


// doesn't work now bc item isn't defined. saving for the iteration on the ul
  // if (event.target.value !== item.innerHTML.charAt(0)) {
  //   item.style.visibility = "hidden";
  // }


  })

// have to iterate over the unordered list, applying that code to each li


});
