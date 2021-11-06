import "./hello-world-button.scss"

export default class HelloWorldButton {
  buttonClassName = "hello-world-button";

  render() {
    const button = document.createElement("button");
    button.innerText = "Hello World!";
    button.classList.add(this.buttonClassName);
    const body = document.querySelector("body");
    button.onclick = function () {
      const p = document.createElement("p");
      p.innerHTML = "hello world button paragraph!";
      p.classList.add("hello-world-text");
      body.appendChild(p);
    };
    body.appendChild(button);
  }
}
