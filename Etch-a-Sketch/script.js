
function buildGrid(x, y, cellSize, gridElement) {
    gridElement.style.display = "grid";
    gridElement.style.gridTemplateColumns = `repeat(${x}, ${cellSize}px)`;
    gridElement.style.gridTemplateRows = `repeat(${y}, ${cellSize}px)`;
   
    let squares = new DocumentFragment();
  
    for (let i = 0; i < x * y; i++) {
      let square = document.createElement('div');
      square.className = 'square';
      squares.appendChild(square);
    }
  
    gridElement.appendChild(squares);
}
  
buildGrid(16, 16, 40,  
    document.querySelector(".container"));

// 8bit = 8, 8, 80
// 16bit = 16, 16, 40
// 64bit = 64, 64, 10

    
