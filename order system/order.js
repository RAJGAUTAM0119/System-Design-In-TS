"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Customer {
    id;
    name;
    email;
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}
class Order {
    orderId;
    customer;
    items;
    constructor(orderId, customer, items) {
        this.orderId = orderId;
        this.customer = customer;
        this.items = items;
    }
    addItems() {
        return;
    }
    removeItems() {
        return;
    }
    getTotal() {
        return;
    }
}
class OrderItem {
    product;
    quantity;
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
    itemTotal() {
        return this.product.price * this.quantity;
    }
}
class Product {
    name;
    id;
    price;
    constructor(name, id, price) {
        this.name = name;
        this.id = id;
        this.price = price;
    }
}
const product1 = new Product("Keyboard", 2015, 1250);
const orderItem1 = new OrderItem(product1, 10);
console.log(orderItem1.itemTotal());
//# sourceMappingURL=order.js.map