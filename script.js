const btn = document.getElementById("grid-btn");
const container = document.getElementById("grid-container");

btn.addEventListener("click", createGrid);

function createGrid() {
  let size = getGridSize();

  if (size === null) {
    return;
  }

  container.style.gridTemplateColumns = "repeat(" + size + ", auto)";

  for (let i = 0; i < Math.pow(size, 2); i++) {
    const block = document.createElement("div");
    block.className = "block";
    container.appendChild(block);
  }
}

function getGridSize() {
  let size = parseInt(prompt("Please, enter a number between 1 and 100", "16"));
  if (size < 1 || size > 100 || size === NaN) {
    alert("Invalid!");
  } else {
    return size;
  }
}
