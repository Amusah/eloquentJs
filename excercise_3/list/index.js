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
console.log(arrayToList([1,2,3]))