let arr =[0,1,0,1,0,0,1];
let count0 = 0;
let count1 = 0;
for(let index = 0; index < arr.length ; index++){
    if(arr[index] == 0){
        count0++;
    }
    else{
        count1++;
    }
}
console.log(count0,count1);
for(let index = 0; index < arr.length; index++){
    if(count0 > 0){
        arr[index]=0;
        count0--;
    }
    else{
        arr[index]=1;
    }
    
}
console.log(arr);