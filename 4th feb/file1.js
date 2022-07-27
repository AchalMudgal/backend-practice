var sum = 0;
for(var x=0 ,y=0; x<10, y<10; ++x, y=x+2){
    console.log(x);
    console.log(y);
    sum+=x;
    console.log(sum);
}
console.log(sum);