class Group {
  constructor(){
    this.group = [];
    // return this.group;
  }

  add(val){
    if(this.group.includes(val))
    return 'item already exists';

    // this.group.push(val);
    this.group.push(val);
    return this.group
  }

  delete(val){
    if(!this.group.includes(val)) return 'item not found';
    return [...this.group].filter(el => el !== val)
  }

  has(val){
    return this.group.includes(val) ? true : false;
  }
}

const set = new Group()
console.log(set.add(2));
console.log(set.add(5));
console.log(set.add(8));
console.log(set.delete(5))
console.log(set.has(5))