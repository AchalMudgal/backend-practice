let person ={
    numOfHand : 2,
    numOfLegs : 2
}
Object.freeze(person);
console.log(person);
person.numOfHand = 4;
delete person.numOfHand;
console.log(person);
console.log(Object.isFrozen(person));// to cheak wether it is frozen