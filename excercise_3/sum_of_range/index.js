const range = (start, end, step = 1) => {
    let result = [];
    //step = -Infinity;
    if(step > 0){
        for(let i = start; i <= end; i+=step){
            result.push(i);
        }
    }else{
        for(let i = start; i >= end; i+=step){
            result.push(i);
        }
    }
    return result;
}
console.log(range(10, 2, -2));

const sum = arr => {
    let result = 0;
    for(let num of arr){
        result += num;
    }
    return result;
}
console.log(sum(range(1, 10)));