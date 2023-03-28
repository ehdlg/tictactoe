const gameBoard = (() => {
  const length = 9;
  const board = [];

  for (let i = 0; i < length; i++) {
    board[i] = '';
  }

  const getBoard = () => board;
  const setMark = (player, index) => (board[index] = player.getMark());
  const setBoard = (player1, player2) =>  {
   for(let i = 0; i < board.length; i++){
    Math.random() < 0.49 ? board[i] = player1.getMark() : board[i] = player2.getMark();
   }
  }

  return { getBoard, setMark, setBoard };
})();

const Player = (playerMark = "") => {
  const mark = playerMark;

  const getMark = () => mark;
  return { getMark };
};

function Game(playerOne = 'X', playerTwo = 'O') {
    const players = [Player(playerOne), Player(playerTwo)];
    gameBoard.setBoard(players[0], players[1]);
    console.log(gameBoard.getBoard());
}

Game();

