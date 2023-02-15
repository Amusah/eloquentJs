let chessBoard = '';
let gridSize = prompt('Enter number of rows and columms');
let gridRow = 1;

while(gridRow <= gridSize){
    let gridColumn = 1;
    while(gridColumn <= gridSize){
        if((gridColumn + gridRow) % 2 === 0){
            chessBoard += ' ';
        }else{
            chessBoard += '#'
        }
        gridColumn += 1;
    }
    chessBoard += '\n';
    gridRow += 1;
}
console.log(chessBoard);