//Given two numbers A and B, You are supposed to find A to power B without using any built-in function.

function powerOfNum(a,n){
    
    let sum = 1

    while(n > 0){
        sum = sum*a;
        n -= 1
    }
    console.log(sum);
}

powerOfNum(10,2);
