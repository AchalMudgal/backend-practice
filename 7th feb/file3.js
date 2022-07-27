let a = 16;
let b = 9;
let lcm = a>b ? a:b;
while(true){
    if(lcm%a==0 && lcm%b==0){
        break;
    }
    lcm++;
}
console.log(lcm);
