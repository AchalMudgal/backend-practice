// FILE5 ANOTHER METHOD
let a = 2;
let b = 5;
let result = 1;
while(b>0){
    if(b%2 != 0){
        result = result*a
    }
    a = a*a;
    b = parseInt(b/2);
}
console.log(result);