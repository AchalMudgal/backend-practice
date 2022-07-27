function pyramidPattern(num){
    let reqString = "";
    //outer loop
    for(let i = 1; i <= num; i++){
        //loop for spaces
        for(let space = num; space > i; space--){
            reqString += " ";
        }
        //loop for star
        for(let star = 1; star <= 2*i - 1; star++){
            reqString += "*";
        }
        reqString += '\n'
    }
    return reqString;
}

let result = pyramidPattern(5);
console.log(result);