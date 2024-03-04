/****************A VECTOR TYPE****************/

class Vec {
  x;
  y;
  constructor(x, y){
    this.x = x;
    this.y = y;
  }

  plus(x, y){
    return {
      x: this.x + x,
      y: this.y + y
    }
  }

  minus(x, y){
    return {
      x: this.x - x,
      y: this.y - y
    }
  }
  get length(){
    return Math.sqrt(this.x + this.x + this.y + this.y)
  }
}

// const vector = new Vec(2, 5);
// console.log(vector.plus(4, 2));
// console.log(vector.minus(4, 2));

// console.log(new Vec(1, 2).plus(new Vec(2, 3)))

console.log(new Vec(1, 2).plus(new Vec(2, 3)));