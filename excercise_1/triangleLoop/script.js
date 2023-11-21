//Write a loop that makes seven calls to console.log to output the following

let str = '#';
let counter = 0;


while(counter < 7){
    console.log(str);
    counter += 1;
    str += '#';
}

for (let count = 0; count < 7; count++){
    console.log(str);
    str += '#';
}


console.log('***********Dimond************')
let diamond = prompt('Enter number');
for(let i = 1; i <= diamond; i++){
  let str = '*';
  let space = ' ';
  console.log(space.repeat((diamond - i)) + str.repeat(i * 2 - 1));
}
for(let i = diamond - 1; i >= 1; i--){
  let str = '*';
  let space = ' ';
  console.log(space.repeat((diamond-i)) + str.repeat(i * 2 - 1))
}
