import "./hello-world-button.scss"

export default class HelloWorldButton {
  render() {
    const button = document.createElement("button");
    button.innerText = "Hello World!";
    button.classList.add("hello-world-button");
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
