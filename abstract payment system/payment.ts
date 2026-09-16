abstract class Payment {
  public constructor(protected transactionId: string, protected amount: number) { }

  public validateAmount(amount: number) {
    if (amount <= 0) {
      throw new Error("Invalid amount")
    }
  }

  abstract pay(amount: number): void

  abstract refund(amount: number): void

}

class UpiPayment extends Payment {

  constructor(private upiId: string, transactionId: string, amount: number) {
    super(transactionId, amount)
  }

  pay(amount: number): void {
    this.validateAmount(amount)
    console.log(`UPI Payment of Rs ${amount}`)
  }

  refund(amount: number): void {
    this.validateAmount(amount)
    console.log(`UPI Refund of Rs ${amount}`)
  }
}

class CardPayment extends Payment {

  constructor(private cardNumber: number, private cvv: number, private expiry: string, amount: number, transactionId: string) {
    super(transactionId, amount)
  }

  pay(amount: number): void {
    this.validateAmount(amount)
    console.log(`Card Payment of Rs ${amount}`)
  }

  refund(amount: number): void {
    this.validateAmount(amount)
    console.log(`Card Refund of Rs ${amount}`)
  }
}

class PayPalPayment extends Payment {

  constructor(private email: string, transactionId: string, amount: number) {
    super(transactionId, amount)
  }

  pay(amount: number): void {
    this.validateAmount(amount)
    console.log(`Paypal Payment of Rs ${amount}`)
  }

  refund(amount: number): void {
    this.validateAmount(amount)
    console.log(`Paypal Refund of Rs ${amount}`)
  }
}

const payments: Payment[] = [
  new UpiPayment("rajgautam@paytm", "trx1234", 255),
  new CardPayment(1111222233334444, 876, "20/03/2030", 340, 'trx9876'),
  new PayPalPayment("rajgautam@gmail.com", 'trx1573', 4335)
]

for (let payment of payments) {
  payment.pay(34)
  payment.refund(43)
}