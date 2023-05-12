/*
    we're creating a function that behaves as a loop
    the function takes in four arguments
    --an int value,
    --a function to test the truthiness all falsiness of the value
    --a function to update the value while truthy
    --a function that prints out the result when falsy
*/

function customLoop(val, test, update, print){
    //let num = val;
    while(test(val)){
        print(val);
        val = update(val);
    }
    // if(test(num)){
    //     print(num)
    //     num = update(num);
    // } else {
    //     return num;
    // }
}

customLoop(5, n => n > 0, n => n - 1, console.log);
console.log('Printing from the lowest to highest')
customLoop(1, n => !(n > 10), n => n + 1, console.log);

/*
    customLoop(5, 5 => 5 > 0, 5 => 5 - 1, 5,4,3,2,1)
*/