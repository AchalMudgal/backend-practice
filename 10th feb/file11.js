let person ={
    numOfHand : 2,
    numOfLegs : 2
}
Object.seal(person);

console.log(person);
person.numOfHand = 4;// seal lets to change the value
delete person.numOfHand;// seal didn't allowed to delete 
person.eyes = 2;// no value added bcz of seal property
console.log(person);
console.log(Object.isSealed(person));// to check is it sealed 