let person ={
    name : "sanjeet",
    age : 100,
    gender : "female",
    speak: function(){
        console.log("I am speaking")
    },
    eat: function(){
        console.log("i am eating sandwich")
    },
    sleep: function(){
        console.log("I am sleeping");    
    }
}
console.log(person);

console.log(person.name);

console.log(person["age"]);

person.sleep();

person.eat();

person["speak"]();

console.log(person["sleep"]);

console.log(Object.keys(person));

console.log(Object.values(person));

 for(key in person){
     console.log(key);
     }

 for(key in person){ 
     console.log(key,person[key]);
 }