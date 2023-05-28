const winningConditions = [
  [0, 1, 2], // Fila 1
  [3, 4, 5], // Fila 2
  [6, 7, 8], // Fila 3
  [0, 3, 6], // Columna 1
  [1, 4, 7], // Columna 2
  [2, 5, 8], // Columna 3
  [0, 4, 8], // Diagonal principal
  [2, 4, 6], // Diagonal secundaria
];
/**
 * IIFE para el tablero
 */
const gameBoard = (() => {
  //Array tablero
  const board = [];
  //Longitud del tablero
  const length = 9;
  //Funcion que establece las celda]]]s del tablero como string vacíos
  const setBoard = () => {
    for (let i = 0; i < length; i++) {
      board[i] = "";
    }
  };
  //Se llama a la función setBoard para establecer el tablero
  setBoard();
  //Funcion que reinicar el tablero llamando a setBoard()
  const resetBoard = () => setBoard();
  //Funcion que devuevle el tablero
  const getBoard = () => board;
  //Funcion que establece la marca del jugador en el indice indicado
  const setMark = (mark, index) => (board[index] = mark);
  //Devuelve las funciones getBoard, setMark y resetBoard
  return { getBoard, setMark, resetBoard };
})();
//Factory function para los jugadores, devuevel un objeto con los parametros mark y name
function Player(mark, name) {
  let markedCells = [];
  return {
    mark,
    name,
    markedCells,
  };
}

const screenController = (() => {
  let divBoard = document.querySelector("#board");
  const board = gameBoard.getBoard();
  const printBoard = () => {
    while (divBoard.hasChildNodes()) {
      divBoard.removeChild(divBoard.firstChild);
    }
    for (let i = 0; i < board.length; i++) {
      let divCell = document.createElement("div");
      divCell.classList.add("cell");
      divCell.dataset.cell = i;
      divCell.textContent = board[i];
      divCell.addEventListener("click", handleClickCell.bind(this));
      divBoard.appendChild(divCell);
    }
  };

  const handleClickCell = (event) => {
    if (!gameController.gameFinished) {
      const cellElement = event.target;
      gameController.playRound(cellElement.dataset.cell);
    }
  };
  return {
    printBoard,
  };
})();
//IIFE para el controlador del juego
const gameController = (() => {
  //Variable que contiene el tablero de gameBoard
  const board = gameBoard.getBoard();
  //Array con los dos objetos jugadores
  const players = [Player("X", "Player One"), Player("O", "Player Two")];
  //Turno del jugador, por defecto jugador uno (indice 0)
  let indexActivePlayer = 0;
  let gameFinished = false;
  //Funcion que dependiendo del activePlayer, cambia de turno al sumar por 1 y hacer el modulo
  const switchPlayer = () => {
    indexActivePlayer = (indexActivePlayer + 1) % 2;
  };

  const isDraw = () => {
    return board.filter((cell) => cell === "X" || cell === "O").length === 8;
  };

  const getMarkedCells = () => {
    const playerMark = players[indexActivePlayer].mark;
    let markedCells = [];
    for (let i = 0; i < board.length; i++) {
      if (board[i] === playerMark) {
        markedCells.push(i);
      }
    }
    return markedCells;
  };
  //Funcion que establece una ronda de juego
  const playRound = (cell) => {
    //Si la celda indicada está fuera del limite, se para la funcion
    if (gameFinished) {
      console.log("The game has already finished, please restart the game");
      return;
    }
    if (cell > board.length - 1 || cell < 0) {
      console.log("The cell is off limits");
      return;
    }

    //Si la celda no está vacía (ya está marcada), se para la funcion
    if (board[cell] !== "") {
      console.log("The cell is already marked");
      return;
    }
    //En caso de que no haya ningun error en la celda, se procede a establecer la marca del jugador en el tablero
    board[cell] = players[indexActivePlayer].mark;
    if (checkWin(indexActivePlayer)) {
      console.log(`${players[indexActivePlayer].name} wins!`);
      gameFinished = true;
    } else if (isDraw()) {
      console.log("Draw!");
      gameFinished = true;
    } else {
      switchPlayer();
    }
    screenController.printBoard();
    return;
  };

  const whichTurn = () => {
    return `It's ${players[indexActivePlayer].name}'s turn.`;
  };

  return { playRound, whichTurn, getMarkedCells, playRound, gameFinished };
})();
//Fucnion que comprueba si el jugador activo ha ganado la partida
function checkWin() {
  //Se obtienen las celdas marcadas del jugador
  let markedCells = gameController.getMarkedCells();
  //Se recorren las condiciones de victoriay se comprueba con every() que los indices (celda) de condicion de vicotria se encuentran en las celdas marcadas
  for (let i = 0; i < winningConditions.length; i++) {
    const condition = winningConditions[i];
    if (condition.every((cell) => markedCells.includes(cell))) {
      return true; // Se encontró una condición de victoria, se retorna true y se sale de la función
    }
  }
  return false; // No se encontró ninguna condición de victoria, se retorna false al finalizar el bucle
}

screenController.printBoard();
