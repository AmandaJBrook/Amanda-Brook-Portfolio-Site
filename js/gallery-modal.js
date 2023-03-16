// import content from "./gallery-fill.js";
//Modal Script
 
// create references to the modal...
let modal = document.getElementById('myModal');
// to all images -- note I'm using a class!
let images = document.getElementsByClassName("myImages");
// the image in the modal
let modalImg = document.getElementById("img01");
// and the caption in the modal
let imageTitle = document.getElementsByClassName("image--title");

let imageDescription = document.getElementById("image--description");

// Go through all of the images with a custom class
for (const element of images) {
    let img = element;

    // attaches click listener for ~this~ image
    img.onclick = function(evt) {
    console.log(evt);
    modal.style.display = "block";
    modalImg.src = this.src;
    imageTitle.innerHTML = this.alt;
    }
}

let span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}
 