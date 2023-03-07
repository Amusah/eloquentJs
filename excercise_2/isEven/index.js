// checking if a is even or odd recursively

// define function isEven()
let isEven = num => {
    // return true when num equals 0
    if(num === 0) return true
    //return false when num equals 1
    else if(num === 1) return false
    // while number is > 0
    else if(num > 0) return isEven(num - 2);
    // acceptin -N
    else return isEven(-num);
}
console.log(isEven(-1));