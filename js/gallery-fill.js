import paintingArray from "./painting-list.js";
import designArray from "./design-list.js";
import webArray from "./web-list.js";

const paintingcontent = paintingArray.map((item) => {
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
          <img class="myImages" data-lazy="${item.link}"></img>
          </figure>
          <h1 class="image--title" >${item.name} (${item.year})</h1>
          <h2 class="image--description">${item.medium} ${item.width}"X${item.height}"</h2>
    `;
    return paintingArticle;
  });
  
  // targets gallery container for paintings & illustrations by class name
  const div = document.querySelector("#painting--illustration"); 

   // loops through the content array
  // appends/fills the container with HTML tied to object array data
 
  paintingcontent.forEach((item) => {
    div.append(item);
  });

const designcontent = designArray.map((item) => {
  // creates article container
  let designArticle = document.createElement("article");
  // adds id equal to design name
  designArticle.setAttribute("id", item.name);
  // adds "design" to class name???
  designArticle.classList.add("image--container");
  // creates template literal to structure the data for display
  designArticle.innerHTML =  `
        <!-- injected design info for ${item.name} -->
        <figure class="design">
        <img class="myImages" data-lazy="${item.link}"></img>
        </figure>
        <h1 class="image--title" >${item.name} (${item.year})</h1>
        <h2 class="image--description">${item.program}</h2>
  `;
  return designArticle;
});

// targets gallery container for designs & illustrations by class name
const divb = document.querySelector("#graphic--design"); 

  // loops through the content array
// appends/fills the container with HTML tied to object array data

designcontent.forEach((item) => {
  divb.append(item);
});

const websitecontent = webArray.map((item) => {
  // creates article container
  let websiteArticle = document.createElement("article");
  // adds id equal to website name
  websiteArticle.setAttribute("id", item.name);
  // adds "website" to class name???
  websiteArticle.classList.add("image--container");
  // creates template literal to structure the data for display
  websiteArticle.innerHTML =  `
        <!-- injected website info for ${item.name} -->
        <figure class="website">
        <img class="myImages" data-lazy="${item.link}"></img>
        </figure>
        <h1 class="image--title" >${item.name} (${item.year})</h1>
        <h2 class="image--description">${item.task}</h2>
  `;
  return websiteArticle;
});

// targets gallery container for websites & illustrations by class name
const divc = document.querySelector("#web--design"); 

  // loops through the content array
// appends/fills the container with HTML tied to object array data

websitecontent.forEach((item) => {
  divc.append(item);
});