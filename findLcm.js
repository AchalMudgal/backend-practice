//Given two numbers, find the least possible positive integer that is divided by them.

function findLcm(num1,num2){

    for(let lcm = 1; lcm <= (num1*num2); lcm++){

        if(lcm%num1 == 0 && lcm%num2 == 0){
            console.log(`LCM of ${num1} and ${num2} is ${lcm}`);
            break;
        }
    }
}
findLcm(25,15);