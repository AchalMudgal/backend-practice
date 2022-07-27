// given a^2 + b^2 = sum ,find value of (a,b) pair

function solve(sum){
    let b = 0;
    let a = 0;
    for(a=0;a*a<=sum;a++){
        let result = Math.sqrt(sum - (a*a));
        if(result%1 == 0){
            b = result;
            break;
        }
    }
    console.log(a,b);
}
solve(13);