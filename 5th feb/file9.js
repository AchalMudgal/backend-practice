let numOrignal = 371;
let num = numOrignal;
let numDigit = 0;
while(num>0){
    let lastDigit = num%10
    numDigit++;
    num = parseInt(num/10);
}
console.log(numDigit);

let sum =0;
num = numOrignal;
while(num>0){
    let lastDigit = num%10;
    sum = sum + Math.pow(lastDigit,numDigit);
    num = parseInt(num/10);
}
console.log(sum);
let result = sum == numOrignal ? "armstrong number" : " not amrstrong number";
console.log(result);

