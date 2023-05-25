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
  const players = [
    Player('X', 'Player One'),
    Player('O', 'Player Two')
  ]
  return {players}
})()

console.log(gameController.players);