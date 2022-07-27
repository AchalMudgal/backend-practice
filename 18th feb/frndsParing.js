function frndsParing(n){
    if(n==1||n==2){
        return n;
    }
    let result = frndsParing(n-1)+(n-1)*frndsParing(n-2);
    return result;
}
console.log(frndsParing(4));