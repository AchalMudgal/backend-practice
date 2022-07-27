function boysHostel(name,age){
    this.name = name,
    this.age = age
}
boysHostel.prototype.gender ="male";
let x = new boysHostel("achal",24);
console.log(x);
let y = new boysHostel("vipin",23);
console.log(y);
console.log(x.gender);
console.log(y.gender);
console.log(Object.getPrototypeOf(x));
