function linearSearch(arr,key){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == key){
            return i;//RETURNING THE POSITION WHERE WE FOUND KEY
        }
    }
}
let arr = [5,8,1,2,-1,3,0];
let key = 3;
let position = linearSearch(arr,key);
console.log(position);