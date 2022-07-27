function reverseString(str){

    let updatedStr = "";
    for(let i = str.length - 1; i >= 0; i--){
        updatedStr += str[i];
    }
    return updatedStr;
}

let str1 = "Nobody can stop me now";
let result = reverseString(str1);
console.log(result);