// PASS BY REFRENCE
//IT IS BEING USED BY NON-PRIMITIVE LIKE ARRYS AND OBJECTS


function printarr(arr){
    arr[1]=25;
    console.log(arr);
} 
 let myarr = [23,52,14,8,3,29];
 console.log(myarr);
 printarr(myarr);
 console.log(myarr);