require("./app.css")

HTMLCollection.prototype.forEach = Array.prototype.forEach;

class Scatterer {
  scatterAll(className) {
    document.getElementsByClassName(className)
      .forEach(this.scatter);
  }

  scatter(element) {
    let shiftMax = 500;
    let xShift = Math.random() * shiftMax - shiftMax / 2;
    let yShift = Math.random() * shiftMax - shiftMax / 2;
    element.style.transform = "translate(" + xShift + "px, " + yShift + "px)";
  }
}

let s = new Scatterer;
s.scatterAll("letter");
