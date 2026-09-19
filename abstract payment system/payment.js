"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Payment {
    transactionId;
    amount;
    constructor(transactionId, amount) {
        this.transactionId = transactionId;
        this.amount = amount;
    }
    validateAmount(amount) {
        if (amount <= 0) {
            throw new Error("Invalid amount");
        }
    }
}
class UpiPayment extends Payment {
    upiId;
    constructor(upiId, transactionId, amount) {
        super(transactionId, amount);
        this.upiId = upiId;
    }
    pay() {
        this.validateAmount(this.amount);
        console.log(`UPI Payment of Rs ${this.amount}`);
    }
    refund() {
        this.validateAmount(this.amount);
        console.log(`UPI Refund of Rs ${this.amount}`);
    }
}
class CardPayment extends Payment {
    cardNumber;
    cvv;
    expiry;
    constructor(cardNumber, cvv, expiry, amount, transactionId) {
        super(transactionId, amount);
        this.cardNumber = cardNumber;
        this.cvv = cvv;
        this.expiry = expiry;
    }
    pay() {
        this.validateAmount(this.amount);
        console.log(`Card Payment of Rs ${this.amount}`);
    }
    refund() {
        this.validateAmount(this.amount);
        console.log(`Card Refund of Rs ${this.amount}`);
    }
}
class PayPalPayment extends Payment {
    email;
    constructor(email, transactionId, amount) {
        super(transactionId, amount);
        this.email = email;
    }
    pay() {
        this.validateAmount(this.amount);
        console.log(`Paypal Payment of Rs ${this.amount}`);
    }
    refund() {
        this.validateAmount(this.amount);
        console.log(`Paypal Refund of Rs ${this.amount}`);
    }
}
const payments = [
    new UpiPayment("rajgautam@paytm", "trx1234", 277),
    new CardPayment(1111222233334444, 876, "20/03/2030", 355, 'trx9876'),
    new PayPalPayment("rajgautam@gmail.com", 'trx1573', 23)
];
for (let payment of payments) {
    payment.pay();
    payment.refund();
}
//# sourceMappingURL=payment.js.map