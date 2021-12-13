setTimeout(() => {

    let header_name = document.querySelector('.header-user-name')
    console.log(header_name);
    let name_ = []
    class User {
        constructor(firstName, lastName, regDate) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.regDate = regDate;
        }
    }
    class UserList {
        constructor() {
            this.users = [];
        }
        add(user) {
            this.users.push(user);
        }
        getAllUsers() {
            for (let user of this.users) {
                name_.push(user)
                console.log(`Имя: ${user.firstName}\nФамилия: ${user.lastName}\nРегистрация: ${user.regDate.toLocaleDateString()}\n`)
            }
        }
    }

    let list = new UserList();
    let user, array;
    while (
        (user = prompt("Введите имя и фамилию пользователя для регистрации (одной строкой через пробел):"))
        && (array = user.split(" "))
        && array.length === 2
    ) {
        list.add(new User(array[0], array[1], new Date()));
    };

    list.getAllUsers();

    for (let item of name_) {
        console.log(item);
        header_name.innerHTML = item.firstName + ' ' + item.lastName
    }
}, 500);