//GIVEN A NUMBER ( LET = 17) CONVERT IT INTO ITS BINARY FORM

let convertToBinary = (num) =>
{
    let binaryNum = 0;
    let rem,quotient,i=1,step = 1

    while(num != 0){
         
        rem = num%2;
        quotient = parseInt(num/2);

        num = quotient;
        step++;
        binaryNum = binaryNum + rem*i;
        i = i*10;
    }
    console.log(binaryNum)
}

convertToBinary(16);