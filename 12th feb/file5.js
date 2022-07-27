//COMPOSABILITY
// X + (Y * Z)

let add = (a,b) => a+b;
let multi = (a,b) => a*b;
let [x,y,z] = [10,7,2];

let result = add(x,multi(y,z));
console.log(result);