// 1
// Замените код Function Expression стрелочной функцией:

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

let answerYes = () => alert("Вы согласились.");
let answerNo = () => alert("Вы отменили выполнение.");

ask( "Вы согласны?", answerYes, answerNo)

// 2
let yourName = prompt('Введите своё имя', 'Никто')

function greet(userName, callback){
    console.log(`Hello ${userName}`);
    callback()
}

function greetCallback(){
    console.log('Good bye')
}

greet(yourName, greetCallback)

// 3
let yourNumber = prompt('Введите число')

function doubleNumber(num, callback){
    let doubleNumber = num * 2
    callback(doubleNumber)
}

function doubleNumberCallback(doubleNumber){
    console.log(doubleNumber);
}

doubleNumber(yourNumber, doubleNumberCallback)