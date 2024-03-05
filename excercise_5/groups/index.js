class Group {
  constructor() {
    // return this.members;
  }

  #members = [];

  add(val) {
    if (this.#members.includes(val)) return "item already exists";

    // this.#members.push(val);
    this.#members.push(val);
    return this.#members;
  }

  delete(val) {
    if (!this.#members.includes(val)) return "item not found";
    this.#members = this.#members.filter((el) => el !== val);
    return this.#members;
  }

  has(val) {
    return this.#members.includes(val);
  }

  static from(collection) {
    let group = new Group();
    for (let value of collection) {
      group.add(value);
    }
    return group;
  }

  [Symbol.iterator](){
    return new GroupIterator(this.#members);
  }
}

class GroupIterator{
  #members;
  #position;
  constructor(members){
    this.#members = members;
    this.#position = 0;
  }

  next(){
    if(this.#position >= this.#members.length){
      return {done: true};
    } else {
      let result = {value: this.#members[this.#position], done: false};

      this.#position++;
      return result;
    }
  }
}

for(let value of Group.from(["a", "b", "c"])){
  console.log(value);
}

const set = new Group()
console.log(set.add(2));
console.log(set.delete(5));
console.log(set.has(5));

let group = Group.from([10, 20]);
console.log(group.has(10));