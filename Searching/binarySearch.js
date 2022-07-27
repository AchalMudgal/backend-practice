function binarySearch(arr, key){

    let start = 0;
    let end = arr.length-1;

    while(start <= end){
        let mid = Math.floor((start+end)/2);
        if(arr[mid] == key){
            return mid; // REQUIRE KEY POSITION FOUND
        }
        //KEY ELEMENT IS SMALLER THEN MID ELEMENT -> GO LEFT
        else if(key < arr[mid]){
            end = mid-1;
        }
        else{
            start = mid+1;
        }
    }
    return NaN;
}

let arr = [2,10,14,17,22,25,29,34,39,41];
let key = 34;
let keyPosition = binarySearch(arr,key);
console.log(keyPosition);