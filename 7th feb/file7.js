//FIBUNAQEE NUMBERS
let n = 5;
let nthfibunaqe;
let prev = 0;
let current = 1;
let temp;
if(n == 0){
    nthfibunaqe = 0
}else if(n == 1){
    nthfibunaqe = 1
}else{
    for(let i = 2; i<=n;i++){
        temp = prev;
        prev = current;
        current = temp+prev;
    }
    nthfibunaqe = current
}
console.log(nthfibunaqe);
