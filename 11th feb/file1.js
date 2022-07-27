let n = 5;
let r = 3;
let m = (n-r);
let nFactorial = 1;
let rFactorial = 1;
let nrFactorial =1;
for(let i = 1; i <=n; i++){
    nFactorial = nFactorial*i;
}


for(let j = 1; j<= r; j++){
     rFactorial = rFactorial*j;
}     


for(let k = 1; k<=(n-r) ; k++){
     nrFactorial = nrFactorial*k;
}



let sum = nFactorial/(rFactorial*nrFactorial);
console.log(sum);

 
