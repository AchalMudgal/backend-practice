/*Assignment 1
Submission Date - 18th Feb, 2022, 10 AM
Requirements: "1. Iterate from 1 to 100(using for loop and if else statement) (Submittable assignment)
Print Relevel if divisible by 3
Print Buzz if divisible by 5
Print MindBuzz if divisible by 15
Print the number if all the above condition fails
Plea*/


for(let bNum = 1; bNum <= 100; bNum++){
    if(bNum%3 == 0){
        console.log("Relevel");
    }
    else if(bNum%5 == 0){
        console.log("Buzz");
    }else if(bNum%5 == 0 && bNum%3 == 0){
        console.log("MindBuzz");
    }else{
        console.log(bNum);
    }
} 
