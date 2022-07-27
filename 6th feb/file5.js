let n = 3;
let pattern = "";
for(let row = 1; row <= n; row++){
  for(let space = 1; space <= n - row; space++){
    pattern = pattern + "   "
  }
  for(let star = 1; star <= row; star++){
    pattern = pattern + "  *   "
  }
  pattern = pattern + '\n';
}
for(let row = n-1; row >=1; row--){
  for(let space = 1; space <= n - row; space++){
    pattern = pattern + "   "
  }
  for(let star = 1; star <= row; star++){
    pattern = pattern + "  *   "
  }
  pattern = pattern + '\n';
}
console.log(pattern);