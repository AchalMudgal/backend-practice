function factorial(x){
    if(x==0){
        return 1;
    }
    let smallerProblem = factorial(x-1);
    return x * smallerProblem;
}
let num = 5;
console.log(factorial(num));
