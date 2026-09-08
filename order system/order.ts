class Customer {
  constructor(public id: number, public name: string, public email: string) { }
}


class Order {
  constructor(public orderId: number, public customer: string, public items: number) { }

  addItems() {
    return
  }
  removeItems() {
    return
  }
  getTotal() {
    return
  }
}


class OrderItem {
  constructor(public product: Product, public quantity: number) { }

  itemTotal() {
    return this.product.price * this.quantity
  }
}


class Product {
  constructor(public name: string, public id: number, public price: number) { }
}


const product1 = new Product("Keyboard", 2015, 1250)

const orderItem1 = new OrderItem(product1, 10)
console.log(orderItem1.itemTotal())