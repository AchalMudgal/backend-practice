
//SUM OF A PAIR OF A ARRY 

function getPair(arr,targetValue){
    arr.sort((a,b) =>a-b);
    let start = 0;
    let end = arr.length - 1;
    while(start<end){
        let currentSum = arr[start]+arr[end];
        //console.log(arr[start] + "+" + arr[end] +"="+ currentSum)
        if(currentSum<targetValue){
            start++;
        }
        else if(currentSum>targetValue){
            end--;
        }
        else{
            console.log("Pair Found",arr[start],arr[end]);
            break;
        }
    }
}

let arr =[9,5,2,1,6,4];
let sum = 6;
getPair(arr,sum);
