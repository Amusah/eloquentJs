// this functio unwraps all subarrays into a single array unit
let flattenArray = (array) => {
    return array.reduce((acc, val) => {
        return acc.concat(val)
    }, []);
}
console.log(flattenArray([[2,5,7,3], [6,5,8,9,3], [54, 75, 87, 12, 90]]));