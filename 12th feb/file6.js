
//==============================

// var add = function(){
//     let a = 10;
//     let sum = a+20;
//     return sum;
// }
// console.log(add());

//=============================

var add = function(){
    let a = 10;
    function sum(){
        console.log(a+10);
    }
    return sum;

}
add()();