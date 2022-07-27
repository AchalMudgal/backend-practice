function hcfOfNum(num1,num2){

    let reqHcf;

    for(let i = 1 ;i <= num1 && i <= num2; i++){

        if(num1%i == 0 && num2%i == 0){
            reqHcf = i;
        }
    }
    console.log(reqHcf);
}

hcfOfNum(75,10);