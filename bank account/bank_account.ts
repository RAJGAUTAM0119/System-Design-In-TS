class BankAccount {
  private _balance: number;
  private _owner: string;

  constructor(owner: string, balance: number) {

    if (owner.trim() === "") {
      throw new Error("Owner name cannot be empty");
    }

    if (balance < 0) {
      throw new Error("Balance cannot be negative");
    }

    this._balance = balance;
    this._owner = owner
  }

  get balance(): number {
    return this._balance
  }

  get owner(): string {
    return this._owner
  }

  set owner(name: string) {
    if (name.trim() === "") {
      throw new Error("Empty name is not valid")
    }
    this._owner = name
  }

  deposit(amount: number) {
    if (amount <= 0) {
      throw new Error("Amount can't be negative")
    }

    this._balance += amount
  }

  withdraw(amount: number) {
    if (amount <= 0) {
      throw new Error("Invalid amount")
    }

    if (amount > this._balance) {
      throw new Error("Insufficient balance")
    }

    this._balance -= amount
  }

  get accountSummary(): string {
    return `${this._owner} has ₹${this._balance} in the account`
  }
}

const account = new BankAccount("Raj", 5000);

console.log(account.owner);
console.log(account.balance);

account.owner = "Raj Gautam";
console.log(account.owner);

account.deposit(1000);

account.withdraw(500);

// account.deposit = -5000;

console.log(account.balance);
console.log(account.accountSummary);