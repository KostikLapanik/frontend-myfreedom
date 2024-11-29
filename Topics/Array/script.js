// 1


// let array = [];

// 1
// let fiveNumbersArray = [1, 2, 3, 4, 5]

// 2
// let fruits = ['apple', 'banana', 'orange']

// 3
// let names = ['John', 'Alice', 'Bob']

// 4
// let arrayOf = Array.of('hello', 'world', 'javascript')

// 5
// let numbers = [1, 2, 3, 4, 5]
// console.log(numbers[2]);

// 6
// numbers[0]
// numbers.at(1)
// numbers.shift()

// 7
// numbers[4]
// numbers.at(-1)
// numbers.pop()


//  2


let arr = [1, 2, 3, 4, 5, 'Ну что-нибудь ещё']
// 1
arr.splice(0, 1)
arr.splice(arr.length + 1, 0, 11)
console.log(arr);
// arr = [2, 3, 4, 5, 'Ну что-нибудь ещё', 11]

// 2
let newArr = arr.slice(1, -1)
console.log(newArr);
// [ 3, 4, 5, "Ну что-нибудь ещё" ]

// 3
let arr2 = [7, 8, 9, 10]
let arr3 = arr.concat(arr2)
console.log(arr3);
// [ 2, 3, 4, 5, "Ну что-нибудь ещё", 11, 7, 8, 9, 10 ]

// 4
arr.forEach((element) => console.log(element));

// 5
let array = [1, 2, 3, 4, 5, 3, 6, 7, 8]
console.log(`Первая тройка по индексу - ${array.indexOf(3)}`);
console.log(`Вторая тройка по индексу - ${array.lastIndexOf(3)}`);

// 6
if (array.includes(3) === true){
    console.log('Тройка состоит в массиве')
} else{
    console.log('Тройка не состоит в массиве')
}

// 7
let findMoreThenThreeElement = array.find(item => item > 3)
console.log('Первый элемент в массиве больше 3 -', findMoreThenThreeElement);

// Вот от сюда ДЗ!!!
// 8
let newArray = [1, 2, 3, 4, 1, 1, 2, 3, 3, 5, 4, 14, 1, 3, 0, 2]
console.log('Первый элемент в массиве больше 3 под индексом - ', newArray.findIndex(item => item > 3)) // 3
console.log('Последний элемент в массиве больше 3 под индексом - ', newArray.findLastIndex(item => item > 3)) // 11

// 9
let newSortedArray = newArray.filter(item => item > 3)
console.log(newSortedArray)
