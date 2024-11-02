// 1

// let i = 3
// while(i){
//     alert(i--)
// }

// Выведет (последнее):
// 1

// 2

// i = 0
// while(i++ < 5) alert(i)
// Выведет: 1, 2, 3, 4, 5

// i = 0
// while(++i < 5) alert(i)
// Выведет: 1, 2, 3, 4

// // 3
// for(let i = 2; i < 10; i++){
//     if(i % 2 == 0) alert(i)
// }

// 4
// for(let i = 0; i < 3; i++){
//     alert(`number ${i}!`)
// }

// let i = 0
// while(i < 3){
//     alert(`number ${i}!`);
//     i++;
// }


// 1
let weekDay = prompt('Введите номер дня недели:')

switch(weekDay){
    case '1':
        alert('Понедельник')
        break
    case '2':
        alert('Вторник')
        break
    case '3':
        alert('Среда')
        break
    case '4':
        alert('Четверг')
        break
    case '5':
        alert('Пятница')
        break
    case '6':
        alert('Суббота')
        break
    case '7':
        alert('Воскресенье')
        break
    default:
        alert('Неверное значение')
}

// 2
let fileFormat = prompt('Введите формат файла:')

switch(fileFormat){
    case '.txt':
    case 'txt':
        alert('Текстовый файл')
        break
    case '.jpg':
    case 'jpg':
        alert('Изображение')
        break
    case '.mp3':
    case 'mp3':
        alert('Аудиофайл')
        break
}

// 3
let browser = prompt('Введите свой браузер')

if(browser === 'Edge'){
    alert('You`ve got the Edge')
} else if(browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera'){
    alert('Okay we support these browsers too')
} else{
    alert('We hope that this page looks ok!')
}