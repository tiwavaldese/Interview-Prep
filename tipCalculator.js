let tip = 41.25;
let billValue = 275;

function tipCalculator(){
if(tip === 15){
    return billValue >= 50 && billValue <= 300;
}
else if(tip === 20){
    return billValue * 20/100;
}
else {
    return billValue
}
}
let total = tip +  billValue;
console.log(tip,billValue,total);
console.log(tipCalculator());
