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
}

const vector = new Vec(2, 5);
console.log(vector.plus(4, 2));
console.log(vector.minus(4, 2))