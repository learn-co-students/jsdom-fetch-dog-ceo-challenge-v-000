// add load event
document.addEventListener('DOMContentLoaded', () => {

    // select dropdown
    let dropdown = document.querySelector('#breed-dropdown')

    // select image container
    let imageContainer = document.querySelector('#dog-image-container');

    // select breed container
    let breedContainer = document.querySelector('#dog-breeds');

    // set images url
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

    // set breeds url
    const breedUrl = 'https://dog.ceo/api/breeds/list/all';

    // set images state
    let imagesState;

    // set breeds state
    let breedsState;

    // set filteredState
    let filteredState;

    // fetch imgaes from url
    fetch( imgUrl )
        // convert json to obj
        .then(res => res.json())

        // add images to state
        .then(data => {
            imagesState = data.message;
            // call img render
            imgRender(imagesState);
        })

    // fetch breeds from url
    fetch( breedUrl )
        //  convert json to obj
        .then( res => res.json() )
        // add breeds to state
        .then( data => {

            breedsState = data.message;

            // call breed render
            breedRender(breedsState);

        })

    // fn: imgRender add images to dom from images state
    function imgRender( imagesState ) {
        imagesState.forEach((img) => {
            let thumbNail = document.createElement('img');
            thumbNail.setAttribute('src', img);
            imageContainer.appendChild(thumbNail);
        })
    }

    // fn: breedRender add breeds to ul, param: breed state
    function breedRender( breedsState ) {

        for ( const breed in breedsState ) {

            // create breed li
            let li = document.createElement('li');
            let text = document.createTextNode(breed);
            li.appendChild(text);

            // add id for color change
            li.setAttribute('class', 'color-trigger')

            // append to breedContainer
            breedContainer.insertAdjacentElement('beforeend', li);
        }
    }



    // add event listener to breed container for li click
    breedContainer.addEventListener( 'click' , (e) => {

        // set target style font color to blue
        if ( e.target.classList[0] === 'color-trigger' ) {
            e.target.style.color = 'blue';
        }
    });


    // add event listener to drop down selection
    dropdown.onchange = function filterBreeds() {


        // clear breed Container
        while ( breedContainer.firstChild ) {
            breedContainer.removeChild(breedContainer.firstChild)
        }

        // get dropdown value
        let filterFor = dropdown.value;

        // set filtered state
        filteredState = {};

        // filter breed state for select value
        for ( breed in breedsState ) {

            if ( breed.startsWith(filterFor) ) {
                filteredState[breed] = 0;
            }
        }

        // call breed Render with filered state
        breedRender( filteredState );

        // reset filtered state
        filteredState = {};
    }

});
