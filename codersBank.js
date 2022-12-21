function BankAccount(customerName, balance){
    this.customerName = customerName;
    this.AccountNumber = Date.now();
    this.balance = balance;

    this.deposit = function (amount){
        this.balance += amount
    };
    this.withdraw = (amount)=> {
        this.balance -= amount
    }
}

// const myAcc = new BankAccount("Suvarna", 1000);
// console.log(myAcc);
const Accounts = []

const acoountForm = document.querySelector('#acoountForm');
const customerName = document.querySelector('#customerName');
const initialBalance = document.querySelector('#initialBalance');

acoountForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    const account = new BankAccount(customerName.value , +initialBalance.value)
    Accounts.push(account);
    console.log(Accounts)
});

const depositForm = document.querySelector('#depositForm');
const AccountNumber = document.querySelector('#AccountNumber');
const Amount = document.querySelector('#Amount');

depositForm.addEventListener('submit', (e)=>{
    e.preventDefault();

   const accountD = Accounts.find((account)=> account.AccountNumber === +AccountNumber.value);
   accountD.deposit(+Amount.value);
   console.log(Accounts)
});

const withdrawForm = document.querySelector('#withdrawForm');
const Accountnumber = document.querySelector('#Accountnumber');
const withdrawAmount = document.querySelector('#withdrawAmount');

withdrawForm.addEventListener('submit', (e)=>{
    e.preventDefault();

   const accountW = Accounts.find((account)=>account.AccountNumber === +Accountnumber.value);
   accountW.withdraw(+withdrawAmount.value);
   console.log(Accounts);

})