/************************** BUGS AND ERRORS *******************************/
console.log("******** BUGS AND ERRORS **********");
console.log('// Strict mode');

function canYouSpotTheProblem(){
  'use strict';
  for(counter = 0; counter < 10; counter++){
    console.log('Happy happy');
  }
}
//canYouSpotTheProblem();

function Person(name){ this.name = name}
let ferdinand = Person('Ferdinand');
console.log(name);


// with 'use strict'

function Person1(name){ 
  "use strict";
  this.name = name; 
}
// let henry = Person1('Henry');


// TESTING
console.log(' ');
console.log('// Testing');
console.log('A sample test program for standard toUpperCase() method');

function test(label, body){
  if(!body()) console.log(`Failed ${label}`);
}

test('convert Latin text to uppercase', () => {
  return 'hello'.toUpperCase() == 'HELLO';
});

