const btn = document.getElementById("grid-btn");
const container = document.getElementById("grid-container");

container.style.gridTemplateColumns = "repeat(16, auto)";
createBlocks();

function createBlocks() {
  for (let i = 0; i < Math.pow(16, 2); i++) {
    const block = document.createElement("div");
    block.className = "block";

    container.appendChild(block);
  }
}
console.log(btn.id);
