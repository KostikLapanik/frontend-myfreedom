// 1
// let userNumber = prompt('Введите число');

// if (userNumber % 2 == 0){
//     alert('Чётное!')
// } else {
//     alert('Не чётное!')
// }

// 2
let firstNumber = prompt('Введите первое число')
let secondNumber = prompt('Введите второе число')

if (firstNumber == secondNumber){
    alert('Числа равны.')
} else if (firstNumber > secondNumber){
    alert('Первое число больше!')
} else{
    alert('Второе число больше первого!')
}

// 3
let userLogin = prompt('Введите логин')
let userPassword = prompt('Введите пароль')

if (userLogin == userPassword){
    alert('Доступ разрешён')
} else {
    alert('Доступ запрещён')
}

// 4
let n = prompt('Введите число');
let result = 0
let i = 0

while(i < n){
    result += i
    i++
}

alert(result)

// 5
for(let i = 1; i < 11; i++){
    console.log(`3 умножить на ${i} = ${i * 3}`);
}

// 6
let firstUserNumber = prompt('Введите первое число')
let secondUserNumber = prompt('Введите второе число')
let thirdUserNumber = prompt('Введите третье число')

if(firstUserNumber > secondUserNumber && firstUserNumber > thirdUserNumber){
    alert(`Число ${firstUserNumber} больше всех!`)
} else if(secondUserNumber > firstUserNumber && secondUserNumber > thirdUserNumber){
    alert(`Число ${secondUserNumber} больше всех!`)
} else if(thirdUserNumber > firstUserNumber && thirdUserNumber > secondUserNumber){
    alert(`Число ${thirdUserNumber} больше всех!`)
} else{
    alert('Числа равны')
}

// 7
for(let i = 1; i < 21; i++){
    if(i % 3 == 0){
        console.log(i);
    } 
}

// 8
let userNumber;

do{
    userNumber = prompt('Введите положительное число')

    if(userNumber > 0){
        alert(`Квадрат вашего числа равен ${userNumber*userNumber}`)
    }
} while(userNumber < 0)

// 9
let weekDay = prompt('Введите номер дня недели')

switch(weekDay){
    case '1':
        alert('Ваш день недели: понедельник');
        break;
    case '2':
        alert('Ваш день недели: вторник');
        break;
    case '3':
        alert('Ваш день недели: среда');
        break;
    case '4':
        alert('Ваш день недели: четверг');
        break;
    case '5':
        alert('Ваш день недели: пятница');
        break;
    case '6':
        alert('Ваш день недели: суббота');
        break;
    case '7':
        alert('Ваш день недели: воскресенье');
        break;
    default:
        alert('Вы что не знаете сколько дней в недели?')
}