// capture page and container div
const title = document.querySelector("div.title");

const button = document.createElement("button");
button.textContent = "change size";
button.classList.add("button");
button.addEventListener("click", changeSize);
title.appendChild(button);
// console.log(container.classList);

let size = 16;

function createGrid(size) {
  const container = document.createElement("div");
  container.classList.add("container");
  title.appendChild(container);
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.style.backgroundColor = "rgb(255,255,255)";
      square.addEventListener("mouseover", randomColor);
      container.appendChild(square);
    }
  }
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

createGrid(size);

function randomColor(e) {
  const randomRed = Math.floor(Math.random() * 256);
  const randomGreen = Math.floor(Math.random() * 256);
  const randomBlue = Math.floor(Math.random() * 256);
  e.target.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
}

function clearGrid(container) {
  container.remove();
}

function changeSize() {
  do {
    let newSize = prompt("Enter new size<100");
    size = parseInt(newSize);
  } while (size > 100 || size < 1);
  const container = document.querySelector("div.container");
  clearGrid(container);
  createGrid(size); 
}
