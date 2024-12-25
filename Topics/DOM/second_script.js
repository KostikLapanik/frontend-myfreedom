// 1
let ol = document.querySelector('#elem')

// function clear(elem) {
//     let children = elem.children;

//     while (children.length > 0) {
//         for (let child of children) {
//             child.remove()
//         }
//     }
// }

function clear(elem){
    elem.innerHTML = '';
}

clear(ol)

// 2

let firstLi = document.querySelector('#one')
let secondLi = document.querySelector('#two')
firstLi.insertAdjacentHTML('afterend', `<li>2</li> <li>3</li>`)

// 3

let searchBarContainer = document.querySelector('.search-bar-container')
searchBarContainer.style.backgroundColor = '#f5f5f5'
setTimeout(() => searchBarContainer.style.backgroundColor = 'red', 2000)

// 4

let notificationDiv = document.querySelector('.notification')
notificationDiv.style.cssText += `display: flex; width: 100%; display: flex; flex-direction: column`
