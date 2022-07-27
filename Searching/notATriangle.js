//https://www.spoj.com/problems/NOTATRI/

function upperBound(arr,key){

    let start = 0;
    let end = arr.length - 1;
    let ans = -1;

    while(start <= end){
        let mid = Math.floor((start+end)/2);

        if(key < arr[mid]){
            ans = mid;
            end = mid-1;
        }
        else{
            start = mid+1;
        }
    }
    if(ans == -1){
        ans = arr.length;
    }

    return ans;
}


function triangle(arr,n){
    arr.sort((a,b) => a-b);

    let ans = 0;
    for(let a=0; a<n; a++){
        for(let b = a+1;  b < n-1; b++){
            let sumAB = arr[a] + arr[b];
            ans += n - upperBound(arr, sumAB);
        }
    }
    return ans;
}
let n = 4; 
let arr = [4,2,9,6];
let result = triangle(arr, n);
console.log(result);
