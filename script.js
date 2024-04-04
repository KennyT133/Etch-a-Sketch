const container = document.getElementById("container");

document.getElementById("generateGrid").addEventListener("click", function() {
  const size = document.getElementById("gridSize").value;
  makeGrid(size, size);
});

function makeGrid(rows, cols) {
  container.innerHTML = ''; 
  const totalContainerWidth = 960; 
  const cellSize = totalContainerWidth / cols; 
  for (let c = 0; c < rows * cols; c++) {
    let div = document.createElement("div");
    div.style.border = '1px solid black';
    div.style.height = `${cellSize}px`;
    div.style.width = `${cellSize}px`;
    div.addEventListener("mouseover", mouseOver);
    div.addEventListener("mouseout", mouseOut);
    container.appendChild(div);
  };
}

function mouseOver(e){
  e.target.style.backgroundColor = "black";
}
function mouseOut(e){
  e.target.style.backgroundColor = "white";
}
makeGrid(16, 16);
