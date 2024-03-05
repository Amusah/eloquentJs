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
