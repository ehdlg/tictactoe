function Tablero(){
    const filas = 3;
    const columnas = 3;
    const tablero = [];

    for(let i = 0; i < filas; i++){
        tablero[i] = [];
        for(let j = 0; j < columnas; j++){
            tablero[i][j] = '';
        }
    }

    const getTablero = function() {
        return tablero;
    }
    return {getTablero};
}

const tablero = Tablero();

console.log(tablero.getTablero());