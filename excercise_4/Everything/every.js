// Using Loop
let every = (arr, testFunc) => {
    //let isTrue
    for(let i of arr){
       if(!testFunc(i)) return false;
    }
    return true;
}

console.log(every([1,2,4,16,4], n => n < 10));


// Using every() method
let everyFunction = (arr, test) => {
    return arr.every(n => test(n))
}
console.log(everyFunction([10,20,24,30,40], n => n % 2 === 0));