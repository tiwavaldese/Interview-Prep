
//Test Data: 1

// Calculating Jude BMI
let judeMass1 = 78;
let judeHeight1 = 1.69;

let judeBMI1 = judeMass1 / judeHeight1 ** 2;
console.log(judeBMI1.toFixed(2));

// Calculating Ben BMI

let benMass1 = 92;
let benHeight1 = 1.95;

let benBMI1 = benMass1 / benHeight1 ** 2;
console.log(benBMI1.toFixed(2));
 
// Comparing Jude and Ben BMI

function judeHeightBMI1(judeBMI1, benBMI1){
    if(judeBMI1 > benBMI1){
        return true
    }
    else{
        return false;
    }
}
console.log(judeHeightBMI1());

//Test Data: 2

// Calculating Jude BMI
let judeMass2 = 95;
let judeHeight2 = 1.88;

let judeBMI2 = judeMass2 / judeHeight2 ** 2;
console.log(judeBMI2.toFixed(2));


// Calculating Ben BMI
let benMass2 = 85;
let benHeight2 = 1.76;

let benBMI2 = benMass2 / benHeight2 ** 2;
benBMI2 = 85 / 1.76 ** 2;
console.log(benBMI2.toFixed(2));

// Comparing Jude and Ben BMI
function judeHeightBMI2(){
    if(judeBMI2 > benBMI2){
        return true;
    }
    else{
        return false;
    }
}
console.log(judeHeightBMI2());