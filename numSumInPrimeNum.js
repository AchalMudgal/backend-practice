//Given a number A which is an even integer, you need to print two prime numbers whose sum will be equal to A

function isPrime(num){
    for(let i=2; i<=Math.sqrt(num); i++){
        if(num%i == 0){
            return false
        }
    }
    return true;
}

function numForSum(num){

    for(let j=2; j<=num/2; j++){
        if((isPrime(j)) && isPrime(num-j)){
            console.log(j , num-j);
            return;
        }
    }
}

numForSum(4);
numForSum(15);