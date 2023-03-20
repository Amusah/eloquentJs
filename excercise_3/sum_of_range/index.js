const range = (start, end, step = 1) => {
    let result = [];
    //step = -Infinity;
    for(let i = start; i <= end; i+=step){
        result.push(i);
    }
    return result;
}
console.log(range(1, 10, 2));

const sum = arr => {
    let result = 0;
    for(let num of arr){
        result += num;
    }
    return result;
}
console.log(sum(range(1, 10)));