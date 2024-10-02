// 1
// let a = 2;
// let x = 1 + (a *= 2);

// Выведет:
a = 4;
x = 5;

// 2
// 1)if (-1 || 0) alert("first");
// 2)if (-1 && 0) alert("second");
// 3)if (null || -1 && 1) alert("third");

// Выполняться 1, 3
// Выдаст:
// 1) -1
// 2) false
// 3) 1

// 3
// let value = NaN;
// value &&= 10; не выполнеться 
// value ||= 20; выполнется, value = 20
// value &&= 30; выполнется, value = 30
// value = 40; выполнется, value = 40
// alert(value);

// Этот код выведет:
// value = 40

// 4
// let num1 = 10, num2 = 20, result;
// 
// if (result === null || result === undefined){ 
//     if (num1 !== null && num1 !== undefined){
//         result = numl;
//     } else{
//         result = num2;
//     }
// }

let num1 = 10, num2 = 20, result;

result ??= num1 ?? num2; 