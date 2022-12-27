class User{
    constructor(name, age, income){
        this.name = name,
        this.age = age,
        this.income = income
    }

    static compareByAge(user1, user2){
        return user1.age - user2.age;
    }

    static compareByIncome(user1, user2){
        return user1.income - user2.income;
    }
}

const user1 = new User("ram", 25, 10000);
const user2 = new User("sita", 27, 50000);
const user3 = new User("laxman", 22, 2000);

const users =[];
users.push(user1, user2, user3);

// users.sort(User.compareByAge);

users.sort(User.compareByIncome);

console.log(users);