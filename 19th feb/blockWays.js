// HORIZONTAL AND VERTICAL BLOCKS ARRANGMENT QUESTIONf

function blockWays(n){
    if(n==1||n==2){
        return n;
    }
    return blockWays(n-1)+ blockWays(n-2);
}
console.log(blockWays(5));