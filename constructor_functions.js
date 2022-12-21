function BankAccount(customerName, balance=0){
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;

    this.deposit = function(amount){
        this.balance += amount
    };

    this.withdraw = (amount)=>{
        this.balance -= amount
    }
}

// const radhaAcc = new BankAccount("radha", 0)
// // console.log(radhaAcc.accountNumber)

// const surajAcc = new BankAccount("suraj", 2000)
// surajAcc.balance = 10000

// radhaAcc.deposit(4000);
// surajAcc.deposit(3000);

// radhaAcc.withdraw(2000);
// surajAcc.withdraw(13000);

// console.log(radhaAcc, surajAcc)

//===================================================================
const accounts = [];
const accountForm = document.querySelector('#accountForm');
const customername = document.querySelector('#customername');
const balance = document.querySelector('#balance');


accountForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    const account = new BankAccount(customername.value , +balance.value);
    accounts.push(account);
    console.log(accounts)
});

const depositForm = document.querySelector('#depositForm');
const accountNumber = document.querySelector('#accountNumber');
const amount = document.querySelector('#amount');

depositForm.addEventListener('submit', (e)=>{
    e.preventDefault();

   const account = accounts.find((account)=>account.accountNumber === +accountNumber.value);
    account.deposit(+amount.value);
    console.log(accounts);
}); 

const withdrawForm = document.querySelector('#withdrawForm');
const accountnumber = document.querySelector('#accountnumber');
const Amount = document.querySelector('#Amount');

withdrawForm.addEventListener('submit', (e)=>{
    e.preventDefault();

   const account = accounts.find((account)=> account.accountNumber === +accountnumber.value);

   account.withdraw(+Amount.value);
   console.log(accounts);
})
