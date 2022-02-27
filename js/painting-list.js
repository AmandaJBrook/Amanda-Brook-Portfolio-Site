import Painting from "./painting-class.js";

// list of paintings for gallery with id="painting--illustration"
// const dfox = new Painting ("./images/D Fox restoration (2022).jpg", "D Fox Photo Recovery", "2022", "Photoshop", 4, 6);
const jack = new Painting("./images/Jack (2021).jpg", "Jack", "2021", "Oil", 11, 14);
const zucchi = new Painting("./images/Zucchi (2021).jpg", "Zucchi", "2021", "Oil", 8, 10);
const alexis = new Painting("./images/Alexis (2020).jpg", "Alexis", "2020", "Oil", 11, 14);
const smokey = new Painting("./images/Smokey (2019).jpg", "Smokey", "2019", "Oil", 12, 12);
const bandit = new Painting("./images/Bandit (2019).jpg", "Bandit", "2019", "Oil", 12, 12);
const willy = new Painting("./images/Willy (2019).jpg", "Willy", "2019", "Digital (Procreate)", 8, 10);

// Adds Painting objects into an array
const paintingArray = [jack, zucchi, alexis, smokey, bandit, willy];

// Export the array to be used in other files
export default paintingArray;
