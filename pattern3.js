let num = 5;
let str = "";

for(let i = 1 ; i <= num; i++){
    for(let space1 = 0; space1 <= num - i -1; space1++){
        str += "  ";
    }
    for(let star1 = 1; star1 <= i; star1++){
        str += " *  ";
    }
    str += '\n';
}

for(let j = 1; j <= num-1; j++){
    for(let space2 = 1; space2 <= j ; space2++){
        str += "  ";
    }
    for(let star2 = num -j; star2 > 0; star2--){
        str += " *  ";
    }
    str += '\n'
}

console.log(str);