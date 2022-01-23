class Account {

  constructor(username) {
    this.username = username;
    this.balance = 0;
  }

}

class Transaction {

  constructor(amount, account) {
    this.amount = amount,
    this.account = account
  }
  commit() {
    this.account.balance += this.value
  }
}

class Withdrawal extends Transaction {

  get value() {
    return -this.amount;
  }

}

class Deposit extends Transaction {

  get value() {
    return this.amount;
  }

}


// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account('Jordan');

t1 = new Deposit(120, myAccount);
t1.commit();
console.log('Transaction 1:', t1);

t2 = new Withdrawal(20, myAccount);
t2.commit();
console.log('Transaction 2:', t2);

console.log('Balance:', myAccount.balance);
