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
  return { getBoard, setMark };
})();

const Player = (playerMark = "") => {
  const mark = playerMark;
  const getMark = () => mark;
  return { getMark };
};

const ScreenController = (() => {
  const drawBoard = () => {
    const divBoard = document.querySelector("#board");
    const board = gameBoard.getBoard();
    for (let i = 0; i < board.length; i++) {
      const divCell = document.createElement("div");
      divCell.classList.add("cell");
      divCell.textContent = board[i];
      divBoard.appendChild(divCell);
      console.log(divBoard);
    }
  };
  return { drawBoard };
})();

function Game(playerOne = "X", playerTwo = "O") {
  //Se declaran los dos jugadores en un array
  const players = [Player(playerOne), Player(playerTwo)];

  ScreenController.drawBoard();
}

Game();
