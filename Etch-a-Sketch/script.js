
function buildGrid(x, y, cellSize, gridElement) {
    gridElement.style.display = "grid";
    gridElement.style.gridTemplateColumns = `repeat(${x}, ${cellSize}px)`;
    gridElement.style.gridTemplateRows = `repeat(${y}, ${cellSize}px)`;
   
    let squares = new DocumentFragment();
  
    for (let i = 0; i < (x * y); i++) {
      let square = document.createElement('div');
      square.className = 'square';
      squares.appendChild(square);
    }
  
    gridElement.appendChild(squares);
}
  
buildGrid(16, 16, 40,  
    document.querySelector(".container"));

function openPrompt() {
  let customGrid = prompt("Please enter you grid size", );
  if (customGrid != null) {
    const _number = Number(customGrid);
    if (!isNaN(_number) && typeof _number === 'number') {
      if (Number.isInteger(_number)) {
        buildGrid(customGrid, customGrid, 640/customGrid,  
          document.querySelector(".container"));
      }else{
        alert ( "Please enter the integer number!")
      }
    } else {
      alert ( "Input the number please!")
    }
  } 
}
