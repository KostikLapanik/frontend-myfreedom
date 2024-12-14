// 1
const currentDate = new Date();
const day = String(currentDate.getDate()).padStart(2, '0')
const month = String(currentDate.getMonth() + 1).padStart(2, '0')
const year = String(currentDate.getFullYear()).padStart(2, '0')
console.log(`Сегодня:\n${day} день\n${month} месяца\n${year} года`)

// 2
const hours = String(currentDate.getHours()).padStart(2, '0')
const minutes = String(currentDate.getMinutes()).padStart(2, '0')
const seconds = String(currentDate.getSeconds()).padStart(2, '0')
console.log(`\nСейчас:\n${hours} часов\n${minutes} минут\n${seconds} секунд`)

// 3
console.log(`\nСейчас: ${year}-${month}-${day} и ${hours}:${minutes}:${seconds}`)

// 4 - 7
const pastDate = new Date(2022, 0, 1);
const millisecondsInOneHour = 3600000

let millisecondsSubtraction = currentDate - pastDate // in milliseconds

let hoursSubtraction = Math.floor(millisecondsSubtraction / millisecondsInOneHour)
let daysSubtraction = Math.floor(hoursSubtraction / 24)
let monthsSubtraction = Math.floor(daysSubtraction / 30)
let yearsSubtraction = Math.floor(monthsSubtraction / 12)

console.log(`C ${pastDate} прошло:
    ${hoursSubtraction} полных часов
    ${daysSubtraction} полных дней
    ${monthsSubtraction} полных месяцев
    ${yearsSubtraction} полного(ых) года (лет)
    `)