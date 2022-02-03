// Create painting class that hides varnish type if it is not varnished

class Painting {
  constructor(
    // Define parameters here
    link,
    name,
    year,
    medium,
    width,
    height,
  ) {
    //Define properties here
    this.link = link;
    this.name = name;
    this.year = year;
    this.medium = medium;
    this.width = width;
    this.height = height;
  }
}

export default Painting;
