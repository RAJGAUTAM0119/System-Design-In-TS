"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UpiPayment {
    upiId;
    constructor(upiId) {
        this.upiId = upiId;
    }
    pay(amount) {
        console.log(`Payment made with Upi ${this.upiId} of amount ${amount}`);
    }
    refund(amount) {
        console.log(`Payment refunded of Rupees ${amount} to ${this.upiId}`);
    }
}
class CardPayment {
    cardNumber;
    date;
    cvv;
    constructor(cardNumber, date, cvv) {
        this.cardNumber = cardNumber;
        this.date = date;
        this.cvv = cvv;
    }
    pay(amount) {
        console.log(`Payment made with Card Number ${this.cardNumber} of amount ${amount}`);
    }
    refund(amount) {
        console.log(`Payment refunded of Rupees ${amount} to ${this.cardNumber}`);
    }
}
class PayPalPayment {
    email;
    constructor(email) {
        this.email = email;
    }
    pay(amount) {
        console.log(`Payment made with Paypal Email ${this.email} of amount ${amount}`);
    }
    refund(amount) {
        console.log(`Payment refunded of Rupees ${amount} to ${this.email}`);
    }
}
function processPayment(payment, amount) {
    payment.pay(amount);
}
const payments = [
    new UpiPayment("rajhello@sbiindia"),
    new CardPayment(12345678, "10/12/1220", 432),
    new PayPalPayment("rajgautam@gmail.com")
];
for (let payment of payments) {
    processPayment(payment, 500);
}
//# sourceMappingURL=payment.js.map