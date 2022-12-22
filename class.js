//Hoisting Doesn't work for classes

// const BankAccount = class{}    this can be also be done.

class BankAccount{
    customerName;
    AccountNumber;
    Balance;

    constructor(customerName, Balance){
        this.customerName = customerName;
        this.AccountNumber = Date.now();
        this.Balance = Balance;
    }

    deposit(amount){
        this.Balance += amount
    }

    withdraw(amount){
        this.Balance -= amount
    }
}

const myAcc = new BankAccount("radha", 100);
myAcc.deposit(100);
myAcc.withdraw(30);
console.log(myAcc);
