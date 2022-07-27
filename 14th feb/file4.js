let arr =[9,8,5,2,1,7,8,2,1,9,5];
let num = occuredOnce(arr);
console.log(num);

function occuredOnce(arr){
    let result = 0; 
    for(let i = 0; i < arr.length; i++){
        result = result^arr[i];
    }
    return result;
}