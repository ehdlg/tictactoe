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
  //Funcion que establece las celdas del tablero como string vacíos
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
    markedCells
  };
}
//IIFE para el controlador del juego
const gameController = (() => {
  //Variable que contiene el tablero de gameBoard
  const board = gameBoard.getBoard();
  //Array con los dos objetos jugadores
  const players = [Player("X", "Player One"), Player("O", "Player Two")];
  //Turno del jugador, por defecto jugador uno (indice 0)
  let activePlayer = 0;
  //Funcion que dependiendo del activePlayer, cambia de turno al sumar por 1 y hacer el modulo
  const switchPlayer = () => {
    activePlayer = (activePlayer + 1) % 2;
  };

  const getMarkedCells = () => {
    const playerMark = players[activePlayer].mark;
    let markedCells = [];
    for(let i = 0; i < board.length; i++){
      if(board[i] === playerMark){
        markedCells.push(i);
      }
    }
    return markedCells;
  };
  //Funcion que establece una ronda de juego
  const playRound = (cell) => {
    //Si la celda indicada está fuera del limite, se para la funcion
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
    board[cell] = players[activePlayer].mark;
    if (checkWin(activePlayer)) {
      console.log('has ganado');
    }else{
      console.log('has perdido');
    }
    switchPlayer();
    console.log(printBoard());
    return;
  };

  const whichTurn = () => {
    return `It's ${players[activePlayer].name}'s turn.`;
  };
  const printBoard = () => {
    console.log(whichTurn());
    let printedBoard = "";

    for (let i = 0; i < board.length; i++) {
      if (i % 3 === 0) {
        printedBoard += "\n";
      }
      printedBoard += ` [${board[i]}] `;
    }
    return printedBoard;
  };

  return { playRound, whichTurn, getMarkedCells, players };
})();

function checkWin() {
  let markedCells = gameController.getMarkedCells();

  for (let i = 0; i < winningConditions.length; i++) {
    const condition = winningConditions[i];
    if (condition.every(cell => markedCells.includes(cell))) {
      return true; // Se encontró una condición de victoria, se retorna true y se sale de la función
    }
  }

  return false; // No se encontró ninguna condición de victoria, se retorna false al finalizar el bucle
}
console.log(gameController.whichTurn());
