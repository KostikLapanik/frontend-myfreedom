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
// async function fetchData() {
//     setTimeout(() => {
//         try{
//             console.log('Data fetched successfully');
//         } catch(error){
//             console.log('Failed to fetch data');
//             console.error(error);
//         }
//     }, 2000)
// }

// console.log(fetchData())


// часть 2


// 1
// let promise = new Promise((resolve) => {
//     resolve('Hello world');
// });
// promise.then((value) => {
//     console.log(value);
// });

// 2
// let promise = new Promise((resolve, reject) => {
//     reject('Something went wrong');
//     throw new TypeError();
// });

// promise
//     .then((value) => {
//         console.log(value);
//     })
//     .catch((error) => {
//         console.error(error)
//     });

// 3
let firstPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Промис 1 выполнен.');
    }, 500)
})

let secondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Промис 2 отклонён.');
    }, 200)
})

let thirdPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Промис 3 выполнен.');
    }, 300)
})

let promiseArray = [firstPromise, secondPromise, thirdPromise];

// function allSettledFunc(value) {
//     // 1 способ
//     for (let i in value) {
//         const promise = value[i];
//         const promiseStatus = promise.status;
//         const promiseNumber = Number(i) + 1;
//         let promiseMassage;
//         promiseStatus === "fulfilled" ?  promiseMassage = promise.value : promiseMassage = promise.reason;

//         console.log(`Промис ${promiseNumber}: ${promiseStatus} - ${promiseMassage}`)
//     }

//     // 2 способ
//     // value.forEach((item, i) => {
//     //     console.log(`Промис ${i + 1}: ${item.status} - ${item.value || item.reason}`)
//     // })
// }

// Promise.allSettled(promiseArray).then((promisesData) => {
//     allSettledFunc(promisesData);
// })

// console.log();

// 4
Promise.all(promiseArray).then(data => console.log(data));

// 5
Promise.race(promiseArray).then(data => console.log(data));