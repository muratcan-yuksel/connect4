const container=document.querySelector('.container');
// create 49 divs of which the last 7 are the base grids, i.e. taken
function createBoard() {
  for (let i =0; i<42; i++) {
    const grid= document.createElement('div');
    console.log(grid[i]);
    container.appendChild(grid);
  }
  for (let y= 0; y<7; y++) {
    const taken= document.createElement('div');
    console.log(taken);
    taken.setAttribute('class', 'taken');
    container.appendChild(taken);
  }
}


createBoard();
