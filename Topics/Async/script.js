// 1
// setTimeout(() => {
//     console.log("Hello, World!")
// }, 5000)

// 2
// let count = 0;

// let intervalId = setInterval(() => {
//     console.log(count++);

//     if (count > 10) {
//         clearInterval(intervalId);
//         console.log('Счетчик остановлен.')
//     };
// }, 1000)

// 3
// console.log('1');
// setTimeout(() => console.log('2'), 0);
// Promise.resolve().then(() => console.log('3'));
// console.log('4');
// 1 4 3 2

// 4
// console.log('1');
// setTimeout(() => {
//     console.log('2');
//     Promise.resolve().then(() => console.log('3'));
// }, 0);
// Promise.resolve().then(() => console.log('4'));
// console.log('5')
// 1 5 4 2 3

// 5
async function fetchData() {
    setTimeout(() => {
        try{
            console.log('Data fetched successfully');
        } catch(error){
            console.log('Failed to fetch data');
            console.error(error);
        }
    }, 2000)
}

console.log(fetchData())