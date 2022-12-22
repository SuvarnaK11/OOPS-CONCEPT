class BankAccount{
    customerName;
    AccountNumber;
    balance;

    constructor(customerName, balance){
        this.customerName = customerName;
        this.AccountNumber = Date.now();
        this.balance = balance;
    }

    deposit(amount){
        this.balance += amount
    }

    withdraw(amount){
        this.balance  -= amount
    }
}

// const myAcc = new BankAccount("radha", 500);
// console.log(myAcc);

class SavingAccount extends BankAccount{
       transactionLimit = 50000;

    constructor(customerName, balance){
        super(customerName, balance)
    }
}

const newAcc = new SavingAccount("suvarna" , 70000);
newAcc.deposit(20000);
newAcc.withdraw(50000);
console.log(newAcc);