 let hcf = 1;
 let num1 = 16;
 let num2 = 28;
 for(let x =2; x<=num1 &&  x<= num2; x++){
     if( num1%x== 0 && num2%x == 0){
         hcf=x;
     }
 }

 console.log(hcf);