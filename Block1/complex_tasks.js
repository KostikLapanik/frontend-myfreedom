// Задачи повышенной сложности
// 1
let userName = prompt('Введите своё имя')
let userAge = prompt('Введите свой возраст')

function checkAge(age, userName) {
    if (age < 18 && age > 0) {
        alert(`Привет, ${userName} . Вы ещё не совершеннолетний`)
    } else {
        alert(`Привет, ${userName} . Вы совершеннолетний`)
    }
}

while (isNaN(parseInt(userAge))) {
    userAge = prompt('Введите свой настоящий возраст')
}

checkAge(userAge, userName)