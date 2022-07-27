 // DNF(Dutch national flag) Problem 

function swap(arr,aIdx,bIdx){
    let temp = arr[aIdx];
    arr[aIdx] = arr[bIdx];
    arr[bIdx] = temp;
}

function dnf(arry){
    let i = 0 // everything on the left of i is 0.
    let j = 0 // everything on the left of j is either 0 or 1.
    let k = arr.length - 1 // everything on the right of j 2.

    while(j<= k){
        if(arr[j] == 0){
            swap(arry,i,j);
            i++;
            j++;
        }else if(arr[j] == 2){
            swap(arry,j,k);
            k--;
        }else{
            j++;
        }
    }
}
let arr =[1,2,2,0,1,0,0,0,1];
console.log(arr);
dnf(arr);
console.log(arr);