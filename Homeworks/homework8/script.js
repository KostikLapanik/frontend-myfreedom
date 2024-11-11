// Задачки с урока, которые мы не успели решить
// 1
function getSumOfArrayElements(array) {
    let sumOfArrayElements = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] == 'number') {
            sumOfArrayElements += Number(array[i])
        }
    }

    return sumOfArrayElements
}

let someArray = [1, 2, 3, 4, 'le', 6, 'some', 'string']

alert(getSumOfArrayElements(someArray))

// 2
function getSumOfArrayElements(array) {
    let sumOfArrayElements = 0;
    for (let item of array) {
        if (typeof item == 'number') {
            sumOfArrayElements += Number(item)
        }
    }

    return sumOfArrayElements
}

let someAnotherArray = [1, 2, 3, 4, 'le', 6, 'some', 'string', 3, 1]

alert(getSumOfArrayElements(someAnotherArray))

// 3
let people = [
    { name: 'John', age: 25, address: '123 Main St' },
    { name: 'Jane', age: 17, address: '456 Elm St' },
    { name: 'Bob', age: 30, address: '789 Oak St' },
    { name: 'Alice', age: 22, address: 123 },
    { name: 'Mike', age: 35, address: '901 Maple St' }
];

function getNameAndAddressOfAdults(people) {
    let NameAndAddressOfAdults = [];

    for (let i = 0; i < people.length; i++) {
        if (people[i]['age'] >= 18 && typeof people[i]['address'] == 'string') {
            NameAndAddressOfAdults.push(people[i]['name'])
        }
    }

    return NameAndAddressOfAdults
}

console.log(getNameAndAddressOfAdults(people))

// ДЗ
// 1
let array = ['s', 'o', 'm', 'e', 'srting', 's']

function pushHelloToArray(arr) {
    arr.push('Hello')
}

pushHelloToArray(array)
console.log(array)

// 2
// Тоже самое было вверху (строка 18)

// 3
function sumInput() {
    let userInput = parseInt(prompt('Введите значение'))
    let sumInputArray = []

    while (true) {
        if (!isNaN(userInput)) {
            sumInputArray.push(userInput)
            userInput = parseInt(prompt('Введите значение'))
        } else {
            break
        }
    }

    return sumInputArray
}

console.log(sumInput())