//Write a loop that makes seven calls to console.log to output the following

let str = '#';
let counter = 0;

/*
while(counter < 7){
    console.log(str);
    counter += 1;
    str += '#';
}
*/

for (let count = 0; count < 7; count++){
    console.log(str);
    str += '#';
}
