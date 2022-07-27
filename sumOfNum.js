//Create a program to get sum of all digits of a number

function sumOfDigits(num){
    let sum = 0;
   while(num != 0){
     sum = sum + (num%10);
     num = parseInt(num/10);
   }
   return sum;
 }
 
 let num = 5896;
 let result = sumOfDigits(num);
 console.log(result);