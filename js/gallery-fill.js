import paintingArray from "./painting-list.js";

const content = paintingArray.map((item) => {
    // creates article container
    let paintingArticle = document.createElement("article");
    // adds id equal to painting name
    paintingArticle.setAttribute("id", item.name);
    // adds "painting" to class name???
    paintingArticle.classList.add("image--container");
    // creates template literal to structure the data for display
    paintingArticle.innerHTML =  `
          <!-- injected painting info for ${item.name} -->
          <figure class="painting">
          <img class="myImages" src="${item.link}"></img>
          </figure>
          <h1 class="image--title" >${item.name} (${item.year})</h1>
          <h2 class="image--description">${item.medium} ${item.width}"X${item.height}"</h2>
    `;
    return paintingArticle;
  });
  
  // targets gallery container for paintings & illustrations by class name
  const div = document.querySelector(".gallery"); 

   // loops through the content array
  // appends/fills the container with HTML tied to object array data
 
  content.forEach((item) => {
    div.append(item);
  });