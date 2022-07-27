let n =5;
for(let i=1; i<=n; i++){
    //console.log(i);
    for(let j=1; j<=n; j++){
        if(i==j){
            break;
        }
        console.log(i,j);
    }
}