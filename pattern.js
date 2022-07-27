let num = 3;
let str = "";

for(let i = 1; i <= num; i++){
    for(let space = 1; space <= num-i; space++){
        str += "  ";
    }
    for(let star = 1; star <= i*2-1; star++){
        str += "* "
    }
    str += '\n';
}

console.log(str);