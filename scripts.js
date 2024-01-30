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

// Calculating Jude BMI
let judeMass = 78;
let judeHeight = 1.69;

let judeBMI = judeMass / judeHeight ** 2;
judeBMI = 78 / 1.69 ** 2;
console.log(judeBMI);
                               
//OR
// function judeBMI(mass,height){
//     let BMI = mass / height ** 2
//     return BMI;
// }
// console.log(judeBMI(78,1.69));


// Calculating Ben BMI

let BenMass = 92;
let BenHeight = 1.95;

let BenBMI = BenMass / BenHeight ** 2;
BenBMI = 92 / 1.95 ** 2;
console.log(BenBMI);
 
//OR
// function BenBMI(mass,height){
// let BMI = mass / height ** 2
// return BMI;
// }
// console.log(BenBMI(92,1.95));
                            
// Comparing Jude and Ben BMI

function judeHeightBMI(){
    if(judeBMI > BenBMI){
        return true
    }
    else{
        return false;
    }
}
console.log(judeHeightBMI());