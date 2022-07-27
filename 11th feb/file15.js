let str ="RAMAVTAR";
let occurence ={};
 for(index in str){
     let letter = str[index];
     //noconsole.log(occurence);
    if(occurence[letter]){
        occurence[letter]++
    }else{
        occurence[letter]=1;
    }
    }
    console.log(occurence);