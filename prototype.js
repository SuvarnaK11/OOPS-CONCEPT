function BankAccount(customerName, balance = 0) {
    this.customerName = customerName;
    this.AccountNumber = Date.now();
    this.balance = balance;

}

// const myAcc = new BankAccount("radha");
// console.log(myAcc);

// console.log(BankAccount.prototype);

BankAccount.prototype.test = "hi...This is prototype";

BankAccount.prototype.deposit = function (amount) {
    this.balance += amount
}

BankAccount.prototype.withdraw = function (amount) {
    this.balance -= amount
}

console.log(BankAccount.prototype);

const newAcc = new BankAccount("suraj", 1000);
newAcc.deposit(3000);
newAcc.withdraw(500)
console.log(newAcc);