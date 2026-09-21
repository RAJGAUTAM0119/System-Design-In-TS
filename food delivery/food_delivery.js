"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Restaurent {
    menuItem;
    constructor(menuItem) {
        this.menuItem = menuItem;
    }
    addMenuItem(menuItem) { }
    removeMenuItem(menuItem) { }
}
class Customer {
    customerId;
    name;
    email;
    constructor(customerId, name, email) {
        this.customerId = customerId;
        this.name = name;
        this.email = email;
    }
}
class Order {
    orderId;
    customer;
    orderItems;
    constructor(orderId, customer, orderItems) {
        this.orderId = orderId;
        this.customer = customer;
        this.orderItems = orderItems;
    }
}
class OrderItem {
    menuItems;
    quantity;
    constructor(menuItems, quantity) {
        this.menuItems = menuItems;
        this.quantity = quantity;
    }
}
class MenuItem {
    itemId;
    name;
    price;
    constructor(itemId, name, price) {
        this.itemId = itemId;
        this.name = name;
        this.price = price;
    }
}
class Payment {
}
//# sourceMappingURL=food_delivery.js.map