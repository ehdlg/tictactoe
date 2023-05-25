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