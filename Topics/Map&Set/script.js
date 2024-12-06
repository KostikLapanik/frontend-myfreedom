// 1
let map = new Map()
map.set(12, 'это число 12')
map.set(false, 'нет это не тру') 
console.log(map.get(12)) // 'это число 12'

if (map.has(false)){
    console.log(map.get(false), '. Это false.') // нет это не тру . Это false.
}

for (let i of map){
    console.log(i)
}

map.delete(false)
map.set(true, 'а теперь это тру')
console.log(map)
console.log('Это размер до очистки ', map.size)
map.clear()
console.log('Это после', map.size)

// 2
let set = new Set()

set.add('user_1')
set.add('user_2')
set.add('user_3')
set.add('user_4')
set.add('user_1')
set.add('user_4')

console.log(set)
set.delete('user_4')

if (set.has('user_4')){
    console.log('Да я вижу такого пользователя')
} else{
    console.log('Такого пользователя нет')
}

console.log('Это размер до очистки set ', set.size)
set.clear()
console.log('Это после очистки set', set.size)