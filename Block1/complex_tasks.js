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

// 2
let yourName = prompt('Введите своё имя')
let yourAge = prompt('Введите свой возраст')
let yourSex = prompt('Введите свой пол (м - мужской, ж - женский)')
let yourMaritalStatus;

switch (yourSex) {
    case 'ж':
        yourMaritalStatus = prompt('Введите своё семейное положение (замужем/не замужем)')
        break
    case 'м':
        yourMaritalStatus = prompt('Введите своё семейное положение (женат/не женат)')
        break
    default:
        yourMaritalStatus = 'Нет информации'
}

function checkSex(sex) {
    if (sex == 'м') {
        alert('Вы мужчина.')
    } else if (sex == 'ж') {
        alert('Вы женщина.')
    } else {
        alert('no data')
    }
}

function checkMaritalStatus(maritalStatus) {
    if (maritalStatus == 'замужем') {
        alert('Вы замужем')
    } else if (maritalStatus == 'не замужем') {
        alert('Вы не замужем')
    } else if (maritalStatus == 'женат') {
        alert('Вы женат')
    } else if (maritalStatus == 'не женат') {
        alert('Вы не женат')
    } else {
        alert('no data')
    }
}

function checkAge(age, userName, sex) {
    while (isNaN(parseInt(age))) {
        age = prompt('Введите свой настоящий возраст')
    }

    if (age < 18 && age > 1) {
        if (sex == 'ж') {
            alert(`Привет, ${userName} . Вы ещё не совершеннолетняя.`)
        } else {
            alert(`Привет, ${userName} . Вы ещё не совершеннолетний.`)
        }
    } else if (age > 18 && age < 123) {
        if (sex == 'ж') {
            alert(`Привет, ${userName} . Вы совершеннолетняя.`)
        } else {
            alert(`Привет, ${userName} . Вы совершеннолетний.`)
        }
    }
}

checkAge(yourAge, yourName, yourSex)
checkSex(yourSex)
checkMaritalStatus(yourMaritalStatus)