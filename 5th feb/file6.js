let n = 5;
let str ="";
for(let row = 1; row <= n; row++){
    for(let numStar = 1; numStar <= row; numStar++){
        str = str + "*";
    }
    str = str +'\n' 
}
console.log(str);
