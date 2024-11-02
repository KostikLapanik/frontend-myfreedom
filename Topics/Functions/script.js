// function min(a, b){
//     if(a < b) {
//         return a
//     } else {
//         return b
//     }
// }

// let firstNumber = prompt('Введите первое число');
// let secondNumber = prompt('Введите первое число');

// alert(min(firstNumber, secondNumber));

// function pow(x, n){
//     return Math.pow(x, n)
// }

// let userNumber = prompt('Введите число');
// let numberDegree = prompt('Введите степень числа');

// console.log(pow(userNumber, numberDegree));

function greet(userName, callback){
    console.log(`Hello ${userName}`);
    callback()
}

function callback(){
    console.log('Good bye')
}

greet('Костя', callback)

function doubleNumber(num, callback){
    let doubleNumber = num * 2
    callback(doubleNumber)
}

function callback(doubleNumber){
    console.log(doubleNumber);
}

doubleNumber('2', callback)