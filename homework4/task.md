Домашнее задание
Задачи

1) Чему будут равны переменные а и х после исполнения кода в примере ниже?
let a = 2:
let x = 1 + (a *= 2)

2) Какие из перечисленных ниже alert выполнятся? Какие конкретно значения будут результатами выражений в условиях if(...)?
if (-1 || 0) alert("first");
if (-1 && 0) alert("second");
if (null || -1 && 1) alert("third");

3) Что выведет код ниже?
let value = NaN;
value &&= 10;
value ||= 20;
value &&= 30;
value = 40;
alert(value);

4) Перепишите этот код используя операторы нулевого слияния и присваивания.

let num1 = 10, num2 = 20, result;

if (result === null || result === undefined){ 
    if (num1 !== null && num1 !== undefined){
        result = numl;
    } else{
        result = num2;
    }
}
