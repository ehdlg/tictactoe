const winningConditions = [
  [0,1,2],
  [0,4,8],
  []
]

const gameBoard = (() => {
  const board = [];
  const length = 9;
  const setBoard = () =>{
    for (let i = 0; i < length; i++){
      board[i] = '';
    }
  }
  setBoard();

  const resetBoard = () => setBoard();
  

  const getBoard = () => board;
  const setMark = (mark, index) => board[index] = mark;
  
  return {getBoard, setMark, resetBoard}
})();

function Player(mark, name){
  return {
    mark,
    name
  }
}

const gameController = (() =>{
  const board = gameBoard.getBoard();
  const players = [
    Player('X', 'Player One'),
    Player('O', 'Player Two')
  ]

  let activePlayer = 0;

  const switchPlayer = () => {
    activePlayer = (activePlayer + 1) % 2;
  }
  const playRound = (cell) => {
    if(cell > board.length - 1 || cell < 0){
      console.log('The cell is off limits');
      return;
    }

    if(board[cell] !== ''){
      console.log('The cell is already marked');
      return;
    }

    board[cell] = players[activePlayer].mark;
    console.log(checkWinner());
    switchPlayer();
    console.log(printBoard());
    return;
  }

  const whichTurn = () => {
    return `It's ${players[activePlayer].name}'s turn.`
  }
  const printBoard = () => {
    console.log(whichTurn());
    let printedBoard = '';
    
    for(let i = 0; i < board.length; i++){
      if (i % 3 === 0) {
        printedBoard += '\n';
      }
      printedBoard += ` [${board[i]}] `;
    }
    return printedBoard;
  }
  return {playRound, whichTurn}
})()

function checkWinner(){
  
  return true;
}
console.log(gameController.whichTurn());