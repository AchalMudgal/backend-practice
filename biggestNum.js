function biggestNum(num1,num2,num3){

    let largestNum;

    if(num1 >= num2 && num1 >= num3){
        largestNum = num1;
    }else if(num2 >= num1 && num2 >= num3){
        largestNum = num2;
    }else{
        largestNum = num3;
    }

    console.log(`${largestNum} is the largest number between three number`);
}

biggestNum(15,5,30);