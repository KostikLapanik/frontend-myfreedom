// 1
// let user = {}
user['name'] = 'John'
user['surname'] = 'Smith'
user['name'] = 'Pete'
delete user.name

console.log(user);

// 2
// let object = {}

function isEmpty(object){
    for(let key in object){
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

for(let key in salaries){
    num += salaries[key]
}

console.log(num)