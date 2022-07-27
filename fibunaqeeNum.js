/*
Problem Statement:
Given the value of n, find out the nth term of the fibonacci series.
Fibonacci series is like 0,1,1,2,3,5,8,13… where the next element is always the sum of the previous two 
elements and the first two elements are 0 and 1.
*/


let num = 8
let nthFibunaqeeNum;
let prev = 0;
let current = 1;
let temp;

if(num == 1){
    nthFibunaqeeNum = 0;
}
else if(num == 2){
    nthFibunaqeeNum = 1;
}
else{
    for(let i = 3; i<= num;i++){
        temp = prev;
        prev = current;
        current = temp + prev;
    }
    nthFibunaqeeNum = current;
}
console.log(nthFibunaqeeNum);
