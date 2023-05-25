const gameBoard = (() => {
  const board = [];
  const length = 9;
  for (let i = 0; i < length; i++){
    board[i] = '';
  }

  const getBoard = () => board;
  const setMark = (mark, index) => board[index] = mark;
  
  return {getBoard, setMark}
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

  let activePlayer = player[0];

  const switchPlayer = () => {
    activePlayer === players[0] ? players[1] : players[0];
  }
  const playRound = (cell) => {
    if(board[cell] === ''){

    }else{
      console.log('The cell is already marked');
    }
  }
  return {players}
})()

console.log(gameController.players);