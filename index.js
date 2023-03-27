const gameBoard = (() => {
    
    const length = 9;
    const board = [];

    for(let i = 0; i < length; i++){
       board[i] = '';
    }

    const getBoard = () => board;
    const setMark = (player,index) => board[index] = player.getMark();
    
    return {getBoard, setMark};
})();

const Player = (playerMark='') => {
    const mark = playerMark;

    const getMark = () => mark;
    return {getMark};

};






