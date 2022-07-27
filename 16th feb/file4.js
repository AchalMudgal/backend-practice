// ANOTHER APPROCH OF FILE3 PROBLEM

function checkIfAnagrams(str1,str2){
    let sort = str => str.split("").sort((a,b) => a.localeCompare(b)).join("");
    if(sort(str1) == sort(str2)){
        return true;
    }
    return false;
}
     
let str1 ="aabc";
let str2 ="baac";
let result = checkIfAnagrams(str1,str2);
if(result){
    console.log(str1,str2,"are anagrams")
}else{
    console.log(str1,str2,"are not anagrams")
}
