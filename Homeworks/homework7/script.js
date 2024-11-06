// 1
person = {
    name: 'Kostya',
    age: 13,
    greet() {
        alert(`Привет ${this.name}`)
    },
    haveBirthday() {
        this.age += 1
    },
}

person.greet()
person.haveBirthday()
console.log(person.age)

// 2
counter = {
    count: 0,
    increment() {
        this.count++
    },
    decrement() {
        this.count--
    },
    reset() {
        this.count = 0
    },
}

for (let i = 0; i < 5; i++) {
    counter.increment()
}

for (let i = 0; i < 3; i++) {
    counter.decrement()
}

console.log(counter.count)

counter.reset()

console.log(counter.count)

// 3

Settings = {
    name: 'Lapa',
    age: 1,
    setProperty(key, value) {
        if (this.hasOwnProperty(key)) {
            this[key] = value
        } else {
            alert(`Свойство ${key} не существует`)
        }
    }
}

Settings.setProperty('name', 'Kostya')
Settings.setProperty('age', 13)
Settings.setProperty('some other string', 'some value')
console.log(Settings)