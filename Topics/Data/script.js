// 1
function setCookie(name, value, expiresDays = 1) {
    const MILLI_SECONDS_IN_DAY = 86400e3
    let expiresDaysInMilliSeconds = expiresDays * MILLI_SECONDS_IN_DAY
    let expiresData = new Date(Date.now() + expiresDaysInMilliSeconds)
    expiresData = expiresData.toUTCString();

    let encodeName = encodeURIComponent(name)
    let encodeValue = encodeURIComponent(value)

    document.cookie = `${encodeName}=${encodeValue}; expires=${expiresData}`;
}

setCookie('userid', '123', 3)

// 2
setCookie('username', 'Misha', 4)
setCookie('userage', '37')

function hasCookie(name) {
    let cookieArray = document.cookie.split(';')
    let isFoundedName = false;

    cookieArray.forEach(elem => {
        elem = elem.trim().toLowerCase();

        if (elem.includes(name)) {
            isFoundedName = true
        }
    });

    return isFoundedName
}

let nameSelector = prompt('Введите название cookie, которое хотите праверить:');
nameSelector = nameSelector.toLowerCase()

if (hasCookie(nameSelector)) {
    alert(`Cookie ${nameSelector} существуют!`)
} else {
    alert(`Cookie ${nameSelector} не существуют.`)
}
