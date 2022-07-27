let printName = function(){
    return function(){
        return function(){
            console.log("what's up man")
        }
    }
}
printName()()();