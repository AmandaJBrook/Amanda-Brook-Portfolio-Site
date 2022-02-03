// import content from "./gallery-fill.js";
//Modal Script
 
// create references to the modal...
var modal = document.getElementById('myModal');
// to all images -- note I'm using a class!
var images = document.getElementsByClassName("myImages");
// the image in the modal
var modalImg = document.getElementById("img01");
// and the caption in the modal
var imageTitle = document.getElementsByClassName("image--title");

var imageDescription = document.getElementById("image--description");

// Go through all of the images with a custom class
for (var i = 0; i < images.length; i++) {
    var img = images[i];

    // and attach our click listener for this image.
    img.onclick = function(evt) {
    console.log(evt);
    modal.style.display = "block";
    modalImg.src = this.src;
    imageTitle.innerHTML = this.alt;
    }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}
 