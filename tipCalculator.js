let bill = 275;
// function tipCalculator(){

// if(bill >= 50 && bill <= 300){
//     return tip = bill * 15/100;
// }
// else {
//     return tip = bill * 20/100;
// }

// }
// tip = tipCalculator(bill);
// let total = bill + tip;
let tip = bill >= 50 && bill <= 300 ? bill * 15/100 : bill * 20/100;
console.log(bill,tip);
