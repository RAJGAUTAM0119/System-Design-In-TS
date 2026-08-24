interface IWallet {
  owner: string
}

class DigitalWallet implements IWallet {
  constructor(public owner: string, protected balance: number) { }
  // constructor(public owner: string, private balance: number) { }

  deposit(amount: number): number {
    if (amount < 0) {
      throw new Error('Invalid amount')
    }

    if (amount === 0) {
      throw new Error('Deposit amount more then 0')
    }

    return this.balance += amount
  }

  withdraw(amount: number): number {
    if (amount > this.balance) {
      throw new Error("Insufficeint balance")
    }

    if (amount < 0) {
      throw new Error('Invalid amount')
    }

    if (amount === 0) {
      throw new Error('Withdraw amount more then 0')
    }
    return this.balance -= amount
  }



  getBalance(): number {
    return this.balance
  }
}

const account1 = new DigitalWallet("Raj", 500)
// console.log(account1.deposit(10))
// console.log(account1.withdraw(10))
// console.log(account1)

class premiumWallet extends DigitalWallet {
  showBalance() {
    console.log(this.balance)
  }
}

const premiumWallet1 = new premiumWallet("Ranjan", 500)
console.log(premiumWallet1.getBalance())