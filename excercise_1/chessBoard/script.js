let chess = '';
let grid = 8;
//let row = 1;

for(let row = 1; row <= grid; row++){
    for(let column = 1; column <= grid; column++){
        if((column + row) % 2 === 0){
            chess += '.';
        }else{
            chess += '#';
        }
    }
    chess += '\n';
}
console.log(chess);

/*************WITH WHILE LOOPS***********/ 
let chessBoard = '';
let gridSize = 8;
let gridRow = 1;

while(gridRow <= gridSize){
    let gridColumn = 1;
    if((gridColumn + gridRow) % 2 === 0){
        chessBoard += ' ';
    }else{

    }
}