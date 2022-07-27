//ARRANGE THE ARRAY HAVING 0 & 1 [1,0,1,1,1,0,0,1].
let arry = [1,0,1,1,1,0,0,1];
let num0 = 0;
let num1 = 0;
for(let i = 0; i < arry.length; i++){
    if(arry[i] == 0){
        num0++;
    }
    else{
        num1++;
    }
}
console.log(num0,num1);
for(let i = 0; i < arry.length; i++){
    if(num0 > 0){
        arry[i]=0;
        num0--;
    }
    else{
        arry[i]=1;
    }
}
console.log(arry);
