import "./heading.css";

export default class Heading {
  mainHeadingClass = "heading-one-class";
  render() {
    const h1 = document.createElement("h1");
    h1.innerHTML = "webpack is awesome.";
    h1.classList.add(this.mainHeadingClass);
    const body = document.querySelector("body");
    body.appendChild(h1);
  }
}
