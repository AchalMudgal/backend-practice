//FUNCTION CAN BE RETURNED FROM A FUNCTION

let welcome = function(){
    return function(){
        console.log("hello folks");
    }
}
welcome();               // NOT PRINTING ANYTHING
console.log(welcome());  // ANOYNUMUS FUNCTION
welcome()();             // NOW IT IS WORKING
