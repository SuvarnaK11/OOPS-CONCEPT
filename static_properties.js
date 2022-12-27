// class config{
//     static id = '1';
//     static name = 'username';
//     static apiToken = 'abcd'
// }
// console.log(config.id);
// console.log(config.name);


class User {

    static id = 1;

    constructor(name, age, income) {
        this.name = name,
            this.age = age,
            this.income = income,
            this.id = User.id++
    }

    static cache = {
        '1': 'some value'
    }


    // static hasCache(){
    //     // console.log(this.cache);
    //     this.checkCache();
    // }

    // static checkCache(){
    //     console.log(this.cache)
    // }

    // isCachePresent(){
    //     console.log(User.cache)
    // }

    static {
        console.log("Initialized");       //calls only once
    }

    static checkCache() {
        console.log(this.cache)
    }
}

// const user1 = new User("ram", 25, 10000);
// const user2 = new User("sita", 27, 50000);
// const user3 = new User("laxman", 22, 2000);

// const users =[];
// users.push(user1, user2, user3);

// console.log(users);

// User.hasCache();

// const user1 = new User("ram", 25, 10000);
// user1.isCachePresent();

User.checkCache();
User.checkCache();
User.checkCache();
User.checkCache();
User.checkCache();
