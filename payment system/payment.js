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
const payments = [
    new UpiPayment("rajhello@sbiindia"),
    new CardPayment(12345678, "10/12/1220", 432),
    new PayPalPayment("rajgautam@gmail.com")
];
function processPayment(payment, amount) {
    console.log(`Payment made with ${payment} of rupees ${amount}`);
}
processPayment(new UpiPayment("Rajgautam@gmail.com"), 500);
//# sourceMappingURL=payment.js.map