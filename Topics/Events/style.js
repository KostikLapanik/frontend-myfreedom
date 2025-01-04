// 1
let textDisappearButton = document.querySelector('#textdisappearbutton')
let text = document.querySelector('#text')

textDisappearButton.addEventListener('click', () => text.style.display = 'none')

// 2
let selfDisappearButton = document.querySelector('#disappearbutton')

selfDisappearButton.addEventListener('click', () => selfDisappearButton.style.display = 'none')

// 3
let button = document.querySelector('#button')
button.addEventListener('click', () => alert("1")) // работает
button.removeEventListener('click', () => alert("1")) // неработает
button.onclick = () => alert(3) // работает 
