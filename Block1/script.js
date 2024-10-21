// 1
let userNumber = prompt('Введите число');

if (userNumber % 2 == 0){
    alert('Чётное!')
} else {
    alert('Не чётное!')
}

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