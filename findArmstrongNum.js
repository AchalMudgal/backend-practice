//Find if a given number is an Armstrong number or not.
//Hint : Armstrong number is a number that is equal to the sum of cubes of its digits

function armstrongNum(num){
    
    let sum = 0;
    let tempValue = num;
    while(tempValue != 0){
        let digit = (tempValue%10);
        let numCube = (digit*digit*digit);
        sum = sum + numCube;

        tempValue = parseInt(tempValue/10);
    }
    
    if(num == sum){
        console.log(`${num} is a Armstrong number`);
    }
    else{
        console.log(`${num} is not a Armstrong`);
    }
}
armstrongNum(153);
armstrongNum(11);
armstrongNum(3);
armstrongNum(407);
