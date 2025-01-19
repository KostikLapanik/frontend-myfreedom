// 1
let formElement = document.querySelector('#some_form')
let textAreaElement = formElement.elements.some_textarea
let buttonElement = formElement.elements.some_button

const DEFAULT_VALUE = localStorage.getItem('text') ?? ''
textAreaElement.innerHTML = DEFAULT_VALUE

textAreaElement.addEventListener('input', (event) => {
    localStorage.setItem('text', event.target.value)
    // или localStorage.setItem('text', textAreaElement.value)
})

buttonElement.addEventListener('click', () => {
    localStorage.removeItem('text')
    textAreaElement.value = ''
})

// 2
function setCookie(name, value) {
    let encodeName = encodeURIComponent(name)
    let encodeValue = encodeURIComponent(value)

    document.cookie = `${encodeName}=${encodeValue}`;
}

setCookie('userid', '123')
setCookie('username', 'Misha')
setCookie('userage', '37')

function hasCookie(name) {
    let arrayCookies = document.cookie.split(';')

    return arrayCookies.some(item => item.includes(name));
}

let nameSelector = prompt('Введите название cookie, которое хотите праверить:');
nameSelector = nameSelector.toLowerCase()

if (hasCookie(nameSelector)) {
    alert(`Cookie ${nameSelector} существуют!`)
} else {
    alert(`Cookie ${nameSelector} не существуют.`)
}