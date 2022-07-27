let person ={
    name : "achal",
    age : 24,
    siblings : ["ankit","kratika"],
    marks :{
        maths : 75,
        science : 60
    },
    speak : function(){
        console.log("bla bla bla bla");
    }
}
let x = Object.create(person);
console.log(x.name);

let y = Object.create(person);
y.name = "chandni";
y.age = 25
console.log(y);

console.log(y.name,y.age);
console.log(person);