//Problem 2 –
//Create a program to print the result as pass if the marks obtained is greater than or equal to 40 using ternary operator

function passingMarks(marks){

    let result = (marks >= 40)? "Pass" : "Fail";

    console.log(result);
}
passingMarks(85);
