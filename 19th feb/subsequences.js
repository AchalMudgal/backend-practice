function subsequence(output,input){
    if(input==""){                  //BASE CASE
        console.log(output);
        return;
    }

    //selfwork
    let firstchar = input.charAt(0);
    let restOfChar = input.substring(1); //REST OF INPUT STRING

    //RECURSIVE CALL
    subsequence(output+ firstchar , restOfChar);//INCLUDE
    subsequence(output,restOfChar);//EXCLUDE

}

subsequence("","abc");