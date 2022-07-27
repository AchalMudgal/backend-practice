let num = 0;
let typeOfNumber;
switch(true){
    case(num > 0):
    typeOfNumber = "Positive";
    break;
    case( num < 0):
    typeOfNumber ="Negative";
    break;
    case( num == 0):
    typeOfNumber ="zero";
}
console.log(typeOfNumber);