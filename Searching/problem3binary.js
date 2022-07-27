
//IN A GIVEN SORTED ARRY.
//FIND FIRST ELEMENT WHICH IS greater THAN X
//IF X= 7
// ARR = [2, 10, 14, 17, 22, 25, 29, 34, 39, 41]

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
        return NaN;
    }

    return ans;
}

let arr = [2, 10, 14, 17, 22, 25, 29, 34, 39, 41];
let key = 18;
let solution = upperBound(arr,key)
console.log("Element: ",arr[solution],"Index :",solution);
