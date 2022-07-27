let num = 5;
let str = "";

for(let i = 1; i <= num;i++){
    for(let star = 1; star <= i; star++){
        str += "* ";
    }
 
    str += '\n';
}

for(let j = num - 1; j > 0; j--){
    for(let star1 = j ; star1 > 0; star1--){
        str += "* ";
    }

    str += '\n';
}

console.log(str);