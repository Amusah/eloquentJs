console.log('/*********SOLVING PROBLEM USING FOR LOOP***********/');
console.log('');

/*************WITH FOR LOOP***********/ 
let chess = '';
let gridSize = prompt('Enter grid size');
//let row = 1;

for(let row = 1; row <= gridSize; row++){
    for(let column = 1; column <= gridSize; column++){
        if((column + row) % 2 === 0){
            chess += ' ';
        }else{
            chess += '#';
        }
    }
    chess += '\n';
}
console.log(chess);
console.log('');


console.log('/*********SOLVING PROBLEM USING WHILE LOOP***********/');
console.log('');

/*************WITH WHILE LOOP***********/ 
let chessBoard = '';
//let gridSize = 8;
let gridRow = 1;

while(gridRow <= gridSize){
    let gridColumn = 1;
    while(gridColumn <= gridSize){
        if((gridColumn + gridRow) % 2 === 0){
            chessBoard += ' ';
        }else{
            chessBoard += '*';
        }
        gridColumn ++;
    }
    chessBoard += '\n';
    gridRow ++;
}
console.log(chessBoard);