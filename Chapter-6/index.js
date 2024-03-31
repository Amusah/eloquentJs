console.log(" ");
console.log("/*************THE SECRET LIFE OF OBJECTS*************/");
console.log(" ");
//methods
console.log("// methods");
let rabbit = {};
rabbit.speak = function (line) {
  console.log(`The rabbit says '${line}'`);
};
rabbit.speak("Hey there");

function speak(line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
}
let whiteRabbit = {
  type: "white",
  speak,
};
let hungryRabbit = {
  type: "hungry",
  speak,
};
whiteRabbit.speak("oh my ears and whiskers, " + "how late it's getting!");
hungryRabbit.speak("I could use a carrot right now");
/*
  methods are object properties that hold function values
  when a function is called as a method/in a method call
  such as objectName.method(), the this keyword points to the 
  object that called it or the object the method was called on
*/
console.log(" ");
console.log("//Explicitly calling the this keyword");
/* 
  we can use a function's call() method to explicitly 
  invoke the this keyword. It takes the (this)--which 
  is the intended object to be pointed at, as its first
  argument.
*/
//speak.call('this', 'Howdy');
speak.call(hungryRabbit, "Burp!");

function normalize() {
  console.log(this);
  console.log(this.coords.map((n) => n / this.length));
}
//normalize({coords: [0, 2, 3], length:5});
normalize.call({ coords: [0, 2, 3], length: 5 });

console.log(" ");
console.log("//Prototypes");

let empty = {};
console.log(empty.toString);
console.log(empty.toString());

console.log(Object.getPrototypeOf({}) == Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype));

console.log(Object.getPrototypeOf(Math.max) == Function.prototype);
console.log(Object.getPrototypeOf([]) == Array.prototype);

console.log(" ");
console.log(
  "//creating objects with specific prototypes using Object.create()"
);

let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  },
};
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEE!");

console.log(" ");
console.log("// Classes");

function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  return rabbit;
}
let rabb = new makeRabbit("White");
rabb.speak("Hey");

function Rabbit(type) {
  this.type = type;
}
// Adding a prototype that will be accessible by all instances
Rabbit.prototype.speak = function (line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
};
let wiredRabbit = new Rabbit("wired");
let blackRabbit = new Rabbit("black");
//wiredRabbit.spek('bonku');
// console.log(typeof whiteRabbit);
// console.log(blackRabbit.type);
console.log(Object.getPrototypeOf(wiredRabbit));
console.log(Rabbit.prototype);
console.log(Object.getPrototypeOf(wiredRabbit) === Rabbit.prototype); // true

/*
  By default, functions automatically get a property
  known as prototype.
*/
console.log(Function.prototype);
console.log(Object.getPrototypeOf(Rabbit));
console.log(Object.getPrototypeOf(Rabbit) == Function.prototype);

// Class Notation
class Rabit {
  // statement(declaration)
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`the ${this.type} rabbit says '${line}'`);
  }
  walk() {
    console.log(`the ${this.type} rabbit is galloping.`);
  }
}
let strangeRabit = new Rabit("strange");
let blueRabit = new Rabit("blue");
strangeRabit.speak("Hello");
blueRabit.walk();
console.log(
  Object.getPrototypeOf(strangeRabit) === Object.getPrototypeOf(blueRabit)
);

/*
  Proucing constructor function as a value....
  this is done by using the 'class' keyword as an expression.
  with this, omitting the class name is allowed.
*/
let object = new (class {
  // class expression(assigned)
  getWord() {
    return "hello world";
  }
})();
console.log(object.getWord());

//Overriding Derived Properties
console.log("//Overriding Derived Properties");
Rabit.prototype.teeth = "small";
console.log(blueRabit.teeth);
blueRabit.teeth = "long and sharp";
console.log(blueRabit.teeth);
console.log(strangeRabit.teeth);

// comparing toString() on Array.prototype and Object.prototype
console.log("// comparing toString() on Array.prototype and Object.prototype");
console.log(Array.prototype.toString == Object.prototype.toString);
let ar = [1, 2].toString();
console.log(ar);
console.log(typeof ar);

//calling Object.prototype.toString with an array produces a different string
console.log(
  "// calling Object.prototype.toString with an array produces a different string"
);
console.log(Object.prototype.toString.call([1, 2]));

// MAPS
console.log("// MAPS as data structure");
let ages = {
  Henry: 28,
  Mavis: 32,
  Josephine: 37,
};
console.log(`Henry is ${ages["Henry"]}`);
console.log("is Maxi's age known?", "Maxi" in ages);
console.log("is toString's age known?", "toString" in ages);

/*
  NB: toString was not listed in the ages object yet, it
  returns true this is because it was derived from the
  prototype object...just to know, a prototype is an object 
  that is used as a fallback source of properties.

  as such, it is not advisable to use plain objects as maps.
  unless otherwise you create an object with no prototype
  by passing null into Object.create(null);
*/
console.log("toString" in Object.create(null));
console.log(" ");
/*
  map is recommended if you intend using keys of any type
  unlike objects whose keys are strictly strings
*/

let staffAge = new Map();
staffAge.set("Henry", 28);
staffAge.set("Mavis", 32);
staffAge.set("Josephine", 37);

console.log(`Henry's age is ${staffAge.get("Henry")}`);
console.log("is Maxi's age known?", staffAge.has("Maxi"));
console.log("is toString's age known?", staffAge.has("toString"));
// console.log(staffAge.Henry)
console.log("");
// hasOwnProperty()
console.log("// hasOwnProperty()");

console.log({ x: 1 }.hasOwnProperty("x"));
console.log({ x: 1 }.hasOwnProperty("toString"));

console.log(" ");
// Polymorphism
console.log("// Polymorphism");
/*
  The String() function when called on an object, calls
  the toString() method of that object - 
  (exists in prototype by default) to try to create a
  useful string but sometimes turns out as [object object]

  Polymorphism can be refered to as method overriding and 
  overloading
*/
Rabit.prototype.toString = function () {
  console.log(this);
  return `a ${this.type} rabbit`;
};
console.log(String(blueRabit));

console.log(" ");
// Symbol
console.log("// Symbol");
let sym = Symbol("name");
console.log(sym === Symbol("name")); // false
Rabit.prototype[sym] = 55;
console.log(blueRabit[sym]);

const toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = function () {
  return `${this.length} cm of blue yarn`;
};
console.log([1, 2].toString()); // 1,2
console.log([1, 2][toStringSymbol]());

let stringObject = {
  [toStringSymbol]() {
    return "a jute rope";
  },
};
console.log(stringObject[toStringSymbol]());

console.log(" ");
// Symbol
console.log("// The Iterator Interface");
let okIterator = "OK"[Symbol.iterator]();
console.log(okIterator.next()); // {value: 'O', done: false}
console.log(okIterator.next()); // {value: 'O', done: false}
console.log(okIterator.next()); // {value: undefined, done: true}

// custom iterable data structure
class Matrix {
  constructor(width, height, element = (x, y) => undefined) {
    this.width = width;
    this.height = height;
    this.content = [];

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        this.content[y * width + x] = element(x, y);
      }
    }
  }
  get(x, y) {
    return this.content[y * this.width + x];
  }
  set(x, y, value) {
    this.content[y * this.width + x] = value;
  }
}

class MatrixIterator {
  constructor(matrix) {
    this.x = 0;
    this.y = 0;
    this.matrix = matrix;
  }

  next() {
    if (this.y == this.matrix.height) return { done: true };

    let value = {
      x: this.x,
      y: this.y,
      value: this.matrix.get(this.x, this.y),
    };

    this.x++;
    if (this.x == this.matrix.width) {
      this.x = 0;
      this.y++;
    }
    return { value, done: false };
  }
}

Matrix.prototype[Symbol.iterator] = function () {
  return new MatrixIterator(this);
};

let matrix = new Matrix(2, 2, (x, y) => `value ${x}, ${y}`);
for (let { x, y, value } of matrix) {
  console.log(x, y, value);
}

console.log(" ");
console.log("//Getters, Setters, and Statics");

let varyingSize = {
  get size() {
    return Math.floor(Math.random() * 100);
  },
};
console.log(varyingSize.size);

// setter
class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }
  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }
  set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
  }
  static fromFahrenheit(value) {
    return new Temperature((value - 32) / 1.8);
  }
}

let temp = new Temperature(22);
console.log(temp.fahrenheit);

temp.fahrenheit = 86;
console.log(temp.celsius);

let newTemp = Temperature.fromFahrenheit(100);
console.log(newTemp);

console.log(" ");
console.log("// Inheritance");

class SymmetricMatrix extends Matrix {
  constructor(size, element = (x, y) => undefined) {
    super(size, size, (x, y) => {
      if (x < y) return element(y, x);
      else return element(x, y);
    });
  }

  set(x, y, value) {
    super.set(x, y, value);
    if (x != y) {
      super.set(y, x, value);
    }
  }
}

let matrix2 = new SymmetricMatrix(5, (x, y) => `${x}, ${y}`);
console.log(matrix2.get(2, 3));

// The Instanceof operator
console.log("*********The instanceof operator*******");
console.log(new SymmetricMatrix(2) instanceof SymmetricMatrix);
console.log(new SymmetricMatrix(2) instanceof Matrix);
console.log(new Matrix(2, 2) instanceof SymmetricMatrix);
console.log([1] instanceof Array);
console.log(1);
setTimeout(function () {
  console.log(2);
}, 0);
console.log(3);
