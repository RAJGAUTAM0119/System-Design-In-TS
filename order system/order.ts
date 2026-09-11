class Customer {
  constructor(public id: number, public name: string, public email: string) { }
}


class Order {
  constructor(public orderId: number, public customer: Customer, private items: OrderItem[] = []) { }

  addItems(item: OrderItem): string {
    this.items.push(item)
    return "Item added successfully!!!"
  }
  removeItems(item: OrderItem): void {
    const index = this.items.indexOf(item)

    if (index !== -1) {
      this.items.splice(index, 1)
    }
  }
  getTotal(): number {
    return this.items.reduce((total, item) => total + item.itemTotal(), 0)
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

const raj = new Customer(101, "Raj Gauam", "rajgautam0119@@gmail.com")

const keyboard = new Product("Mechanical Keyboard with RGB backlights", 102, 1200)

const keyboardItem = new OrderItem(keyboard, 10)

const keyboardOrder = new Order(2006, raj, [keyboardItem])

const mouse = new Product("Mouse", 2016, 800);

const mouseItem = new OrderItem(mouse, 10);

console.log(keyboardOrder.addItems(mouseItem))
console.log(keyboardOrder.getTotal())