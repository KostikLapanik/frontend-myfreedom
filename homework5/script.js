// 1
// 1 вариант
// let userNumber = prompt('Введите число больше 100');

// while (userNumber < 100) {
//   if (userNumber === null) {
//     console.log("Пользователь нажал Esc");
//     break;
//   }

//   userNumber = prompt('Введите число больше 100 (еще одна попытка)');
// }

// 2 вариант
// let userNumber = prompt('Введите число больше 100');

// while (true) {
//   if (userNumber === null) {
//     console.log("Пользователь нажал Esc");
//     break;
//   }

//   if (userNumber < 100) {
//     userNumber = prompt('Введите число больше 100 (еще одна попытка)');
//   } 
// }


// 2
// const number = +prompt('Введите число от 0 до 3', '')

// if (number === 0){
//     alert('Вы ввели число 0')
// }
// if (number === 1){
//     alert('Вы ввели число 1')
// }
// if (number === 2 || number === 3){
//     alert('Вы ввели число 2, а может 3')
// }

// const number = +prompt('Введите число от 0 до 3', '')

// switch(number){
//     case 0:
//         alert('Вы ввели число 0');
//         break;
//     case 1:
//         alert('Вы ввели число 1');
//         break;
//     case 2:
//     case 3:
//         alert('Вы ввели число 2, а может 3')
//     default:
//         alert('Вы ввели не то число')
// }


// 3
for(let i = 1; i <= 10; i++){
    alert(`5 на ${i} = ${5 * i}`)
}