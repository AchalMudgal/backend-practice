//3. Program to check if a number is a perfect square

function isPerfectSquare(num){
    let root = Math.floor(Math.sqrt(num));

    if(root*root == num){
        console.log(`${num} is a perfect square`);
    }
    else{
        console.log(`${num} is not a perfect square`);
    }
}

isPerfectSquare(25);
isPerfectSquare(15);
isPerfectSquare(121)