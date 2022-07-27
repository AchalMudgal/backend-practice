//Given a positive number you need to write a program in javascript to find the sum of the inner digits of that number.

function innerDigitSum(num){
    let sum = 0

    let length = num.toString().length;

    if(length < 3){
        return -1;
    }

    do{
        num = parseInt(num/10);
        sum += (num%10);
    }
    while(parseInt(num/100) !== 0){
        return sum;
    }
}

let result = innerDigitSum(1765);
console.log(result);
