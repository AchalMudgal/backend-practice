function anagramFrquncy(str1){
    let freqArry = new Array(26); 
    for(let i=0;i<26;i++){
        freqArry[i] = 0;
    }
    for(let i = 0;i<str1.length;i++){
        let idxForCharOfStr1 = str1.charCodeAt(i)-'a'.charCodeAt(0);
        freqArry[idxForCharOfStr1]++;
    }
    let resultString ="";
    for(let i =0; i<str1.length;i++){
        let idxForCharOfStr1 = str1.charCodeAt(i)-'a'.charCodeAt(0);
        resultString = resultString+str1[i]+freqArry[idxForCharOfStr1];
    }
    return resultString;
}
let str1 ="aabcccshlmnm";
let result = anagramFrquncy(str1);
console.log(result);
