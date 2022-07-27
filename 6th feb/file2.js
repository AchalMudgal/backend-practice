//4TH FEB ASSIGNMENT-2---->

function greatestNumber(number1,number2){
 if(number1>number2){
    str1 =`${number1} is the greatest`;
    return str1
 }else if(number1<number2){
    str2 =`${number2} is greatest`;
    return str2
     }
     else{
        str3 = `${number1} , ${number2} are equal`;
        return str3;
     }
 }
 let x = greatestNumber(15,12);

 console.log(x);