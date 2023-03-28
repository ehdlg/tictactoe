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
  //Funcion que rellena el tablero 50-50 con las marcas de ambos jugadores
  const setBoard = (player1, player2) => {
    for (let i = 0; i < board.length; i++) {
      Math.random() < 0.49
        ? (board[i] = player1.getMark())
        : (board[i] = player2.getMark());
    }
  };
  //Devuelve el objeto con las funciones indicadas
  return { getBoard, setMark, setBoard };
})();

const Player = (playerMark = "") => {
  const mark = playerMark;
  const getMark = () => mark;
  return { getMark };
};

function Game(playerOne = "X", playerTwo = "O") {
  //Se declaran los dos jugadores en un array
  const players = [Player(playerOne), Player(playerTwo)];

  // gameBoard.setBoard(players[0], players[1]);
  console.log(gameBoard.getBoard());
}

Game();
