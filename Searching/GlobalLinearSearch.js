function globalLinearSearch(arr, key){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == key){
            result.push(i); //STORING THE POSTIONS WHERE KEY FOUND
        }
    }
    return result;
}

let arr = [4,5,1,2,1,5,9,5];
let key = 5;
let allPosition = globalLinearSearch(arr,key);
console.log(allPosition);