"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    id;
    name;
    price;
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    updateName(name) {
        this.name = name;
        return this.name;
    }
    updatePrice(amount) {
        this.price = amount;
        return this.price;
    }
    getProductInfo() {
        return `Product ${this.id}: ${this.name} - ₹${this.price}`;
    }
}
const product1 = new Product(2016, "bottle", 25);
// product1.id = 300
console.log(product1);
product1.name = "Water bottle";
product1.price = 30;
console.log(product1.getProductInfo());
// product1 = new Product(2013, "glass Tumbler", 400)
//# sourceMappingURL=product.js.map