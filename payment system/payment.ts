interface IPayment {
  pay(amount: number): void,
  refund(amount: number): void
}

class UpiPayment implements IPayment {
  constructor(private upiId: string) { }

  pay(amount: number): void {
    console.log(`Payment made with Upi ${this.upiId} of amount ${amount}`)
  }

  refund(amount: number): void {
    console.log(`Payment refunded of Rupees ${amount} to ${this.upiId}`)
  }
}

class CardPayment implements IPayment {
  constructor(private cardNumber: number, private date: string, private cvv: number) { }

  pay(amount: number): void {
    console.log(`Payment made with Card Number ${this.cardNumber} of amount ${amount}`)
  }

  refund(amount: number): void {
    console.log(`Payment refunded of Rupees ${amount} to ${this.cardNumber}`)
  }
}

class PayPalPayment implements IPayment {
  constructor(private email: string) { }

  pay(amount: number): void {
    console.log(`Payment made with Paypal Email ${this.email} of amount ${amount}`)
  }

  refund(amount: number): void {
    console.log(`Payment refunded of Rupees ${amount} to ${this.email}`)
  }
}

const payments: IPayment[] = [
  new UpiPayment("rajhello@sbiindia"),
  new CardPayment(12345678, "10/12/1220", 432),
  new PayPalPayment("rajgautam@gmail.com")
]

function processPayment(payment: IPayment, amount: number): void {
  console.log(`Payment made with ${payment} of rupees ${amount}`)
}

processPayment(new UpiPayment("Rajgautam@gmail.com"), 500)