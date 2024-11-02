// 1
// let user = {}
user['name'] = 'John'
user['surname'] = 'Smith'
user['name'] = 'Pete'
delete user.name

console.log(user);

// 2
// let object = {}

function isEmpty(object) {
    for (let key in object) {
        return false
    }


    return true
}

console.log(isEmpty(object))

// 3
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let num = 0;

for (let key in salaries) {
    num += salaries[key]
}

console.log(num)

// 4
let menu = {
    width: 230,
    height: 125,
    title: 'My object',
}

function multiplyNumeric(obj) {
    const newObj = Object.assign({}, obj)

    for (let key in newObj) {
        if (typeof (newObj[key]) === 'number') {
            newObj[key] *= 2
        }
    }

    return newObj
}

const newMenu = multiplyNumeric(menu);
console.log(newMenu);


// 2 урок


// 1
const original = {
    a: 1,
    b: {
        c: 3
    }
}

function shallowClone(obj) {
    let newObj = {};

    for (let key in obj) {
        newObj[key] = obj[key]
    }

    return newObj
}

const clone = shallowClone(original)
console.log(clone);
clone.b.c = 3;
console.log(original);

// 2
rectangle = {
    width: 100,
    height: 200,
    getArea() {
        return this.width * this.height
    },
    getPerimeter() {
        return 2 * (this.width + this.height)
    },
}

console.log(rectangle.getArea())
console.log(rectangle.getPerimeter())

// 3
account = {
    balance: 0,
    desposit(amount) {
        this.balance += amount
    },
    withdraw(amount){
        if (this.balance > amount){
            this.balance -= amount
        } else {
            alert('Недостаточно средст')
        }
    },
    getBalance(){
        alert(this.balance)
    },
}

console.log(account.desposit(100))
console.log(account.withdraw(200))
console.log(account.getBalance())