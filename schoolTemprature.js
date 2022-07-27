/*Problem 1 –
Create a program which gives output for children to 
go out in park if the temperature is between 20 degrees Celsius – 25 degrees Celsius and if it’s not raining outside, 
ask them to be in play school if the temperature is between 18 degrees Celsius to 20 degrees Celsius and raining
otherwise, they should not step out of the home*/

function schoolTemp(temperature,weather){
    if(temperature >= 20 && temperature <=25 && weather == false){
        console.log("Go out in the park");
    }
    else if(temperature >=18 && temperature <= 20 && weather == true){
        console.log("Play in the school");
    }
    else{
        console.log("Don't step out of home");
    }
}
schoolTemp(22,false);
schoolTemp(19,true);
schoolTemp(5,true);
schoolTemp(45,false);