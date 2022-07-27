//PROBLEM: you are having sorted arry where every element is occuring twice
//except one of the elements .
//find that unique element
//[1,1,3,3,4,4,6,6,7,9,9,11,11] 

function searchUnique(arr,start,end){
    //base case
    if(start > end){
        return;
    }

    if(start == end){//unique element found
        return start;
    }

    let mid = start + Math.floor((end-start)/2);
    
    //cheak if mid is even
    if(mid%2 == 0){
        if(arr[mid] == arr[mid+1]){
            //search on right
            return searchUnique(arr,mid+2,end);
        }else{
            //search on left
            return searchUnique(arr,start,mid);
        }

    }else{// when mid is odd
        if(arr[mid] == arr[mid-1]){
            //search on right
            return searchUnique(arr,mid+1,end);
        }else{// search on left
            return searchUnique(arr,start,mid);
        }
    }
}

let arr = [1,1,3,5,5,7,7,9,9,11,11,15,15];
let start = 0;
let end = arr.length-1;
let position = searchUnique(arr,start,end);
console.log("element:",arr[position],"postion:",position);

