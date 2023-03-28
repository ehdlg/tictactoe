const gameBoard = (() => {
  const length = 9;
  const board = [];
  //Rellena el array con sring vacíos
  for (let i = 0; i < length; i++) {
    board[i] = "";
  }
  /**Devuelve el tablero */
  const getBoard = () => board;
  //Establece en el indice indicado la marca del jugador
  const setMark = (player, index) => (board[index] = player.getMark());
  
  //Devuelve el objeto con las funciones indicadas
  return { getBoard, setMark};
})();

const Player = (playerMark = "") => {
  const mark = playerMark;
  const getMark = () => mark;
  return { getMark };
};

const ScreenController = (() => {
  const drawBoard = () => {
    const board = document.querySelector("#board");
    for(let i = 0; i < gameBoard.getBoard().length; i++){
      
    }
  }
})();

function Game(playerOne = "X", playerTwo = "O") {
  //Se declaran los dos jugadores en un array
  const players = [Player(playerOne), Player(playerTwo)];

  // gameBoard.setBoard(players[0], players[1]);
  console.log(gameBoard.getBoard());
}

Game();
