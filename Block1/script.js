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