// 1

let JavaScriptOficialName = prompt('Какое «официальное» название JavaScript?')

if (JavaScriptOficialName == 'ECMAScript'){
    alert('Верно!')
} else{
    alert('Не знаете? ECMAScript!')
}

// 2

let login = prompt('Введите логин:');
let message;

message = (login === 'Сотрудник') 
  ? 'Привет' 
  : (login === 'Директор') 
  ? 'Здравствуйте' 
  : (login === '') 
  ? 'Нет логина' 
  : '';

alert(message);
console.log(message);

// 3

let userLogin = prompt('Введите логин:');
let result;

if (userLogin == 'Админ'){
    let password = prompt('Введите пароль:');

    if (password == 'Я главный'){
        result = 'Здравствуйте!';
    } else if (password == null || password == '') {
        result = 'Отменено';
    }

} else if(userLogin == '' || userLogin == null){
    result = 'Отменено';
} else{
    result = 'Я вас не знаю';
}

alert(result);
console.log(result);