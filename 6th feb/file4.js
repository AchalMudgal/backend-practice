let n = 5;
let pattern ="";
for(let row = 1; row <= n; row++){
  for(let star = 1; star <= row; star++){
    pattern = pattern+"*  ";
  }
  pattern = pattern + '\n'
}
for(let row = n-1; row >=1; row--){
  for(let star = 1; star <= row; star++ ){
    pattern = pattern +"*  ";
  }
  pattern = pattern + '\n';
}
console.log(pattern);