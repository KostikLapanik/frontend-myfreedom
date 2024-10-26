// Первое задание
const PLANET = 'Земля';
let currentUserName = 'Текущий пользователь';

// Второе
let yourName = prompt('Как вас зовут ?')
alert('Привет, ' + yourName)

// Третье
let userNumber = prompt('Введите число.')
let userDegree = prompt('Введите степень, в которую вы хотите возвести раннее введёное вами число.')
let result = Math.pow(userNumber, userDegree)
alert('Полученное число: ' + result)
alert('Тоесть число ' + userNumber + ' в степени ' + userDegree + ' равняется ' + result + '.')