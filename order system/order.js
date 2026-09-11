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
    constructor(orderId, customer, items = []) {
        this.orderId = orderId;
        this.customer = customer;
        this.items = items;
    }
    addItems(item) {
        this.items.push(item);
        return "Item added successfully!!!";
    }
    removeItems(item) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }
    getTotal() {
        return this.items.reduce((total, item) => total + item.itemTotal(), 0);
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
const raj = new Customer(101, "Raj Gauam", "rajgautam0119@@gmail.com");
const keyboard = new Product("Mechanical Keyboard with RGB backlights", 102, 1200);
const keyboardItem = new OrderItem(keyboard, 10);
const keyboardOrder = new Order(2006, raj, [keyboardItem]);
const mouse = new Product("Mouse", 2016, 800);
const mouseItem = new OrderItem(mouse, 10);
console.log(keyboardOrder.addItems(mouseItem));
console.log(keyboardOrder.getTotal());
//# sourceMappingURL=order.js.map