function BankAccount(customerName, balance){
    this.customerName = customerName;
    this.AccountNumber = Date.now();
    this.balance = balance
}

BankAccount.prototype.deposit = function(amount){
    this.balance += amount
}

BankAccount.prototype.withdraw = function(amount){
    this.balance -= amount
}

function SavingAccount(customerName, balance){
        BankAccount.call(this, customerName, balance);

        this.transactionLimit = 50000;
}

SavingAccount.prototype = Object.create(BankAccount.prototype)

const myAcc = new SavingAccount("radha", 300);

myAcc.deposit(700);
myAcc.withdraw(500);
console.log(myAcc);
