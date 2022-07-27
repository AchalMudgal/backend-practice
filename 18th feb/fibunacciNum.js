function fibNum(n){
    if(n==0 || n==1){
        return n;
    }
    return fibNum(n-1) + fibNum(n-2);
}
console.log(fibNum(8));