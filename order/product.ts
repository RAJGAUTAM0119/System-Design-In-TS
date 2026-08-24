interface IProduct {
  id: number,
  name: string,
  price: number
}

class Product implements IProduct {
  constructor(public readonly id: number, public name: string, public price: number) { }

  updateName(name: string): string {
    this.name = name
    return this.name
  }

  updatePrice(amount: number): number {
    this.price = amount
    return this.price
  }

  getProductInfo(): string {
    return `Product ${this.id}: ${this.name} - ₹${this.price}`;
  }
}

const product1 = new Product(2016, "bottle", 25)
// product1.id = 300
console.log(product1)
product1.name = "Water bottle"
product1.price = 30
console.log(product1.getProductInfo())

// product1 = new Product(2013, "glass Tumbler", 400)