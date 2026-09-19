abstract class Payment {
  public constructor(protected transactionId: string, protected amount: number) { }

  public validateAmount(amount: number) {
    if (amount <= 0) {
      throw new Error("Invalid amount")
    }
  }

  abstract pay(): void

  abstract refund(): void

}

class UpiPayment extends Payment {

  constructor(private upiId: string, transactionId: string, amount: number) {
    super(transactionId, amount)
  }

  pay(): void {
    this.validateAmount(this.amount)
    console.log(`UPI Payment of Rs ${this.amount}`)
  }

  refund(): void {
    this.validateAmount(this.amount)
    console.log(`UPI Refund of Rs ${this.amount}`)
  }
}

class CardPayment extends Payment {

  constructor(private cardNumber: number, private cvv: number, private expiry: string, amount: number, transactionId: string) {
    super(transactionId, amount)
  }

  pay(): void {
    this.validateAmount(this.amount)
    console.log(`Card Payment of Rs ${this.amount}`)
  }

  refund(): void {
    this.validateAmount(this.amount)
    console.log(`Card Refund of Rs ${this.amount}`)
  }
}

class PayPalPayment extends Payment {

  constructor(private email: string, transactionId: string, amount: number) {
    super(transactionId, amount)
  }

  pay(): void {
    this.validateAmount(this.amount)
    console.log(`Paypal Payment of Rs ${this.amount}`)
  }

  refund(): void {
    this.validateAmount(this.amount)
    console.log(`Paypal Refund of Rs ${this.amount}`)
  }
}

const payments: Payment[] = [
  new UpiPayment("rajgautam@paytm", "trx1234", 277),
  new CardPayment(1111222233334444, 876, "20/03/2030", 355, 'trx9876'),
  new PayPalPayment("rajgautam@gmail.com", 'trx1573', 23)
]

for (let payment of payments) {
  payment.pay()
  payment.refund()
}