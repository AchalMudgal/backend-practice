//2. Write a function that compares two numbers and returns the larger of the two.
//Bonus: Output appropriate message if numbers cant be compared or are equal.

function greaterNum(num1,num2){

    if(num1 == num2){
        console.log(`${num1} and ${num2} are equal`);
    }
    else if(num1>num2){
        console.log(`${num1} is greater than ${num2}`);
    }
    else if(num1<num2){
        console.log(`${num2} is greater than ${num1}`);
    }
    else{
        console.log(`${num1} and ${num2} are not compareble`);
    }
}

greaterNum(12,20);
greaterNum(50,20);
greaterNum(5,5);
greaterNum(-56,20);
greaterNum(56,-20);
greaterNum(6,"shyam");
