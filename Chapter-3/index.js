/*******CLOSURE*******/

function wrapValue(n) {
  let local = n;
  return () => local;
}
let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());

/*******RECURSION*******/

// finding factorial with recursion
function factorial(n) {
  //n >= 4 ? return 4 : return n * factorial(n++)
  if (n === 1 || n === 0) return 1;
  else return n * factorial(n - 1);
}
console.log(factorial(4));

// similar approach

function findFactorial(num) {
  //let nextNum = num - 1;
  if (num > 0) {
    return num * findFactorial(num - 1);
  } else return 1;
}
console.log(findFactorial(4));

//finding factorial with for loop
let fact = 1;
for (let i = 1; i <= 4; i++) {
  fact *= i;
}
console.log(fact);

// printing a number in reverse using recursion
function countDown(num) {
  console.log(num);
  if (num > 0) {
    countDown(num - 1);
  }
  //console.log(num)
}
//console.log(countDown(4));
countDown(4);

//printing a number in reverse using for loop
function printReverse(num) {
  for (let i = num; i >= 0; i--) {
    console.log(i);
  }
}
printReverse(4);

// finding the exponent of a number using recursion
function power(base, expo) {
  if (expo === 0) {
    return 1;
  } else {
    return base * power(base, expo - 1);
  }
}
console.log(power(2, 3));

// finding the exponent of a number using for loop
const findPower = function (base, exponent) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};
console.log("its " + findPower(2, 3));

function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return (
        find(current + 5, `(${history} + 5)`) ||
        find(current * 3, `(${history} * 3)`)
      );
    }
  }
  return find(1, "1");
}
console.log(findSolution(13));

/***********GROWING FUNCTIONS***********/

function printFarmInventory(cows, chickens) {
  let cowString = String(cows);
  while (cowString.length < 3) {
    cowString = "0" + cowString;
  }
  console.log(`${cowString} cows`);

  let chickenString = String(chickens);
  while (chickenString.length < 3) {
    chickenString = "0" + chickenString;
  }
  console.log(`${chickenString} chickens`);
}
printFarmInventory(7, 11);

//Another approach
function zeroPad(number, width) {
  let string = String(number);
  while (string.length < width) {
    string = "0" + string;
  }
  return string;
}

function printInventory(cows, chickens, pigs) {
  console.log(`${zeroPad(cows, 3)} Cows`);
  console.log(`${zeroPad(chickens, 3)} Chickens`);
  console.log(`${zeroPad(pigs, 3)} Pigs`);
}
printInventory(7, 6, 9);
