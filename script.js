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
        if (!block.style.backgroundColor) {
          block.style.backgroundColor = pickRandomColor();
          console.log(block.style.backgroundColor);
        } else {
          block.style.backgroundColor = darkenColor(
            block.style.backgroundColor
          );
        }
        return;
      }
    }

    function pickRandomColor() {
      return `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
    }

    function darkenColor(rgbColor) {
      let rgbValues = rgbColor.match(/\d+/g);

      for (let i = 0; i < 3; i++) {
        if (rgbValues[i] > 1) {
          rgbValues[i] -= 25;
        } else {
          rgbValues[i] = 0;
        }
      }
      return `rgb(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]})`;
    }
  }

  function randomNum() {
    return Math.floor(Math.random() * 256);
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
