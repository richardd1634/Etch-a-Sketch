createGrid();

function createGrid() {
  const btn = document.getElementById("grid-btn");
  const container = document.getElementById("grid-container");

  btn.addEventListener("click", drawGrid);

  function drawGrid() {
    clearBlocks(container); // Reset

    let size = getGridSize();

    if (size === null) {
      return;
    }

    container.style.gridTemplateColumns = "repeat(" + size + ", auto)";

    for (let i = 0; i < Math.pow(size, 2); i++) {
      const block = document.createElement("div");
      block.className = "block";
      container.appendChild(block);
      block.addEventListener("mouseover", paintBlock);

      function paintBlock() {
        block.style.backgroundColor = pickRandomColor();
        return;
      }
    }

    function pickRandomColor() {
      const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * hex.length)];
      }
      console.log(color);
      return color;
    }
  }

  function clearBlocks(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

  function getGridSize() {
    let size = parseInt(
      prompt("Please, enter a number between 1 and 100", "16")
    );
    console.log(size);
    if (size < 1 || size > 100 || isNaN(size)) {
      alert("Invalid!");
    } else {
      return size;
    }
  }
}
