/************************** BUGS AND ERRORS *******************************/
console.log("******** BUGS AND ERRORS **********");
console.log("// Strict mode");

function canYouSpotTheProblem() {
  "use strict";
  for (counter = 0; counter < 10; counter++) {
    console.log("Happy happy");
  }
}
//canYouSpotTheProblem();

function Person(name) {
  this.name = name;
}
let ferdinand = Person("Ferdinand");
console.log(name);

// with 'use strict'

function Person1(name) {
  "use strict";
  this.name = name;
}
// let henry = Person1('Henry'); // throws an error

// TESTING
console.log(" ");
console.log("// Testing");
console.log("A sample test program for standard toUpperCase() method");

function test(label, body) {
  if (!body()) console.log(`Failed ${label}`);
}

test("convert Latin text to uppercase", () => {
  return "hello".toUpperCase() == "HELLO";
});

test("convert Greek text to uppercase", () => {
  return "Xaipete".toUpperCase() == "XAIPETE";
});

// DEBUGGING
console.log(" ");
console.log("// Debugging");

function numberToString(n, base = 10) {
  let result = "",
    sign = "";
  if (n < 0) {
    sign = "-";
    n = -n;
  }
  do {
    result = String(n % base) + result;
    n /= base;
  } while (n > 0);
  return sign + result;
}

console.log(numberToString(13, 10));

// ERROR PROPAGATION
console.log(" ");
console.log("// Error Propagation");

/*
  function promptNumber(question){
    let result = Number(prompt(question));
    if (Number.isNaN(result)) return null;
    else return result;
  }
  console.log(promptNumber('How many trees do you see?'));

*/

function lastElement(...array) {
  if (array.length == 0) {
    return { failed: true };
  } else {
    return { element: array[array.length - 1] };
  }
}

console.log(lastElement(8, 9, 5, 4, 2));

// EXCEPTIONS
console.log(" ");
console.log("// Exceptions");

function promptDirection(question) {
  // let result = prompt(question);
  if (result.toLocaleLowerCase() == "left") return "L";
  if (result.toLocaleLowerCase() == "right") return "R";
  throw new Error(`Invalid direction: ${result}`);
}

function look() {
  if (promptDirection("Which way?") == "L") {
    return "a house";
  } else {
    return "two angry bears";
  }
}

try {
  console.log("You see", look());
} catch (error) {
  console.log("Something went wrong: " + error);
}

// CLEANING UP AFTER EXCEPTIONS
console.log(" ");
console.log("// Cleaning up after exceptions");

const accounts = {
  a: 100,
  b: 0,
  c: 20,
};

function getAccount() {
  let accountName = prompt("Enter an account name");
  if (!accounts.hasOwnProperty(accountName)) {
    throw new Error(`No such account: ${accountName}`);
  }
  return accountName;
}

/*
function transfer(from, amount){
  if(accounts[from] < amount) return;
  accounts[from] -= amount;
  accounts[getAccount()] += amount;
}
*/

// A more intelligent approach
function transfer(from, amount) {
  if (accounts[from] < amount) return;
  let progress = 0;
  try {
    accounts[from] -= amount;
    progress = 1;
    accounts[getAccount()] += amount;
    progress = 2;
  } finally {
    if (progress == 1) {
      accounts[from] += amount;
    }
  }
}

// SELECTIVE CATCHING
console.log(" ");
console.log("// Selective catching");

// infinite loop

// for(;;){
//   try {
//     let dir = promtDirection('Where?'); // <-typo!
//     console.log('You chose ', dir);
//     break;
//   } catch (error) {
//     console.log('Not a valid direction, Try again')

//   }
// }

class InputError extends Error {}

function promptDirection(question) {
  let result = prompt(question);
  if (result.toLocaleLowerCase() == "left") return "L";
  if (result.toLocaleLowerCase() == "right") return "R";
  throw new InputError(`Invalid direction: ${result}`);
}

for (;;) {
  try {
    let dir = promtDirection("Where?"); // <-typo!
    console.log("You chose ", dir);
    break;
  } catch (e) {
    if (e instanceof InputError) {
      console.log("Not a valid direction, Try again");
    } else {
      throw e;
    }
  }
}

// ASSERTIONS
console.log(" ");
console.log("// Assertions");

function firstElement(array) {
  if(array.length === 0){
    throw new Error('firstElement called with []');
  }
  return array[0];
}
