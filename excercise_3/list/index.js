/*
const arrayToList = arr => {
    return list = {
        value: arr[0],
        rest:  {
            value: arr[1],
            rest: {
                value: arr[2]
            }
        }
    }
}
*/

const arrayToList = arr => {
    let list = null;
    for(let i = arr.length - 1; i >= 0; i--){
        list = {value: arr[i], rest: list};
    }
    return list;
}
console.log(arrayToList([1,2,3,6,4]));