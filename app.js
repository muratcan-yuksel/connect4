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

let displayCurrentPlayer= document.getElementById('current-player');
const squares= document.querySelectorAll('.container div');
const result= document.getElementById("result");
let currentPlayer=1;

for (let i=0; i<squares.length; i++) {
  squares[i].onclick=()=>{
    if(squares[i + 7].classList.contains("taken") && !squares[i].classList.contains("taken")){
        if(currentPlayer == 1){
            squares[i].classList.add("taken");
            squares[i].classList.add("player-one");
            currentPlayer = 2;
            displayCurrentPlayer.innerHTML=currentPlayer;
        }else if(currentPlayer == 2){
            squares[i].classList.add("taken");
            squares[i].classList.add("player-two");
            currentPlayer = 1;
            displayCurrentPlayer.innerHTML=currentPlayer;
        }   
     }
  };
}
