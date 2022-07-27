//Create a program to find if the number is positive, negative or zero.

function natureOfNum(number){

    switch(true){
        case(number > 0):
        response = "Number is value positive";
        break;
        
        case(number < 0):
        response = "Number is value negative";
        break;

        case(number === 0):
        response = "Number is value zero"
        break;

        default:
            response = "Comparision not possible"
    }

    console.log(response);
}

natureOfNum(-6);
natureOfNum(15);
natureOfNum("$$");
natureOfNum("abc");
natureOfNum(0);