// const firstDiv = document.body.firstElementChild
// const ul = document.body.children[2]
// const lastLi = ul.lastElementChild

// console.log(firstDiv)
// console.log(ul)
// console.log(lastLi)


// ДЗ
// 1

let allButtons = document.querySelectorAll('button')

for (let button of allButtons) {
    button.innerText = 'Нажми на меня'
}

console.log(allButtons)

// 2
let firstContainer = document.querySelector('.container')
firstContainer.classList.add('active')
let transformedContainer = document.querySelector('.active')

console.log(transformedContainer)

// 3
let parent = document.querySelector('#parent')
//  или let parent = document.getElementById('parent')
let childrenList = parent.children

console.log(`Дети:`)
for (child of childrenList) {
    console.log(child)
}

// 4
let ourTarget = document.querySelector('#target')

function FindAllSiblingsOf(elem) {
    let nextSiblings = []

    while (elem.nextElementSibling) {
        nextSiblings.push(elem.nextElementSibling)
        elem = elem.nextElementSibling
    }

    let previousSiblings = []
    while (elem.previousElementSibling) {
        previousSiblings.unshift(elem.previousElementSibling)
        elem = elem.previousElementSibling
    }

    let siblings = previousSiblings.concat(nextSiblings).filter((element) => {
        return element.className == "sibling"
    })

    return siblings
}

console.log(FindAllSiblingsOf(ourTarget))