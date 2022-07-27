// JSON -- javascript object notation


// javascript object

let person =
{
    name : "achal",
    age : 24,
    speak : function(){
        console.log("i can speak");
    },
    siblings :["abc", "mno"],
    marks : {
        maths :75,
        english :55
    }
}
console.log(person);


// JSON object
//key --> "string"
//values -->strings, numbers , objects , array, boolean, null ( but not a function)


let person1 =
{
    "name" : "achal",
    "age" : 24,
    "siblings" :["abc", "mno"],
    "marks" : {
        "maths" :75,
        "english" :55
    }
}
console.log(person1);

