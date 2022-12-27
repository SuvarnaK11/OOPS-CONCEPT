class BankAccount {
    customerName;
    AccountNumber;
    // balance;
    // _balance;
     #balance;      //private field

    constructor(customerName, balance) {
        this.customerName = customerName,
        this.AccountNumber = Date.now(),
        // this._balance = balance
        this.#balance = balance
    }

    deposit(amount){
        // this._balance += amount
        this.#balance += amount
    }

    withdraw(amount){
        // this._balance -= amount
        this.#balance -= amount
    }

    // setBalance(amount){
    //     if(isNaN(amount)){
    //         throw new Error("invalid input");
    //     }
    //         this.#balance = amount;
    // }

    // getBalance(){
    //   return this.#balance;
    // }


    //setter
     set balance(amount){                              
        if(isNaN(amount)){
            throw new Error("invalid input");
        }
            this.#balance = amount;
    }


    //getter
    get balance(){
      return this.#balance;
    }
}

class CurrentAccount extends BankAccount{
    transactionLimit = 50000

    constructor(customerName, balance){
        super(customerName, balance)
    }


    //private method
    #calculateInterest(amount){
        console.log("calculating Interest");
    }

    takeBusinessLoan(amount){
        this.#calculateInterest(amount);
        console.log("taking business loan: " + amount);
    }
}

const myAcc = new CurrentAccount("radha", 2000);
// myAcc._balance = "hello";
// myAcc.#balance = "hello";

// myAcc.setBalance(5000);
// myAcc.setBalance('hi');

// console.log(myAcc.getBalance());


// console.log(myAcc.balance);
// myAcc.balance = 12000;
// console.log(myAcc);

myAcc.takeBusinessLoan(40000000);
console.log(myAcc);