let numorignal = 2791+4;
let num = numorignal;
let numDigits = 0;
while(num>0){
    let lastdigit = num%10;
    numDigits++;
    num = parseInt(num/10);
}
console.log(numDigits)
num = numorignal;
let sum = 0;
if(numDigits>2){
  do{
    num = num/10;
    let lastdigit = parseInt(num%10);
    sum = sum + lastdigit;
  }while(parseInt(num/100)!= 0);

}else{
    sum = -1;
}
console.log(sum);