//Write power function for any positive integer
//Hint : Power function F(x^n) = x*x*x…n times; where x is the base and n is the exponent

function powerSum(base,exponent){
    let result = 1;
    if(exponent == undefined){
        exponent = 2;
    }
    for(let i = 1; i <= exponent; i++){
        result = result * base;
    }
    return result;
}

let sum = powerSum(5,3);
console.log(sum);