let arr =[-1,5,6,-4,-9,2];

function swap(arr,aIdx,bIdx){
    let temp = arr[aIdx];
    arr[aIdx] = arr[bIdx];
    arr[bIdx] = temp;
}

function arrangeArry(arr){
    let m = 0;// starting point
    let n = arr.length - 1;// ending point
    while(m<=n){
        if(arr[m]<0){
            swap(arr,n,m);
            n--;
        }else{
            m++;
        }
    }
}
console.log(arr);
arrangeArry(arr);
console.log(arr);