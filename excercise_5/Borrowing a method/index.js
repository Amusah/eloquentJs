// Borrowing a method

const map = Object.create(null);

map.fName = 'Henry';
map.lName = 'Amusah';
map.hasOwnProperty = function(prop){
  return prop in map;
}

console.log(Object.getPrototypeOf(map))
console.log(map.hasOwnProperty('fName'));
console.log(map.hasOwnProperty('hasOwnProperty'));



/**************Solution from book***************/
let map2 = {one: true, two: true, hasOwnProperty: true};
console.log(Object.prototype.hasOwnProperty.call(map2, 'one'));
console.log(Object.prototype.hasOwnProperty.call(map2, 'three'));
