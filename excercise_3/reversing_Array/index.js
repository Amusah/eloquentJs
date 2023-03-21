let oldArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const reverseArray = arr => {
    let newArray = [];
    for(let i = arr.length - 1; i >= 0; i--){
        newArray.push(arr[i]);
    }
    return newArray;
}
console.log(reverseArray(oldArray));
console.log(oldArray);


const reverseArrayInPlace = arr => {
    oldArray = []
    for(let i = arr.length-1; i >= 0; i--){
        oldArray.push(arr[i]);
    }
    return oldArray;
}
console.log(reverseArrayInPlace(oldArray));
console.log(oldArray);