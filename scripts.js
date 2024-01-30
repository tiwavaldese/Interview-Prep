// console.log('douanla tiwa, valdese');

// function number(x,y){
//     if(!isNaN(x) && !isNaN(y)){
//         return x + y;
//     }
// }
// let result = number(2 ,10);
// console.log(result);


// let userName = 'Tiwa'

// function length(){

//     console.log(userName.length)

// }
// length()


//Test Data: 1

// Calculating Jude BMI
let judeMass = 78;
let judeHeight = 1.69;

let judeBMI = judeMass / judeHeight ** 2;
judeBMI = 78 / 1.69 ** 2;
console.log(judeBMI);

// Calculating Ben BMI

let benMass = 92;
let benHeight = 1.95;

let benBMI = benMass / benHeight ** 2;
benBMI = 92 / 1.95 ** 2;
console.log(benBMI);
 
// Comparing Jude and Ben BMI

function judeHeightBMI(){
    if(judeBMI > benBMI){
        return true
    }
    else{
        return false;
    }
}
console.log(judeHeightBMI());

//Test Data: 2

function JudeBMI(mass,height){
    let BMI = mass / height ** 2;
    return BMI.toFixed(2);
}
console.log(JudeBMI(95,1.88));

function BenBMI(mass,height){
let BMI = mass / height ** 2;
return BMI.toFixed(2);
}
console.log(BenBMI(85,1.76));

function BenHeightBMI(){
    if(BenBMI > JudeBMI){
        return true;
    }
    else{
        return false;
    }
}
console.log(BenHeightBMI());