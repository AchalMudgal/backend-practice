//FUNCTION CAN BE PASSED AS AN ARGUMENT
let greet = function(anotherfunction){
    console.log("hello",anotherfunction());
}

let name = function(){
    return "achal";
}
greet(name);
 let student = function(){
     return "students";
 }
 greet(student);  