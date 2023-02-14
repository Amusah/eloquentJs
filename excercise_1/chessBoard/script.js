let chessBoard = '';
let gridSize = 8;
let gridRow = 1;

while(gridRow <= gridSize){
    let gridColumn = 1;
    while(gridColumn <= gridSize){
        chessBoard += '#';
        gridColumn += 1;
    }
    chessBoard += '\n';
    gridRow += 1;
}
console.log(chessBoard);