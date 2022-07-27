let weekdaynum = 4;
let weekday;
switch(true){
    case(weekdaynum == 1):
    weekday ="Monday";
    break;
    case(weekdaynum == 2):
    weekday ="Tuesday";
    break;
    case(weekdaynum == 3):
    weekday ="wednesday";
    break;
    case(weekdaynum == 4):
    weekday ="thursday";
    break;
    case(weekdaynum == 5):
    weekday ="friday";
    break;
    case(weekdaynum == 6):
    weekday ="saturday";
    break;
    case(weekdaynum == 7):
    weekday ="Sunday";
    break;
    default:
        weekday ="Invalid";
}
console.log(weekday);