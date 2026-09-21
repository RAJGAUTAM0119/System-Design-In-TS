class Restaurent {
  constructor(public menuItem: string) { }

  addMenuItem(menuItem: string) { }

  removeMenuItem(menuItem: string) { }
}

class Customer {
  constructor(private customerId: number, public name: string, private email: string) { }
}

class Order {
  constructor(private orderId: number, protected customer: Customer, protected orderItems: OrderItem[]) { }
}

class OrderItem {
  constructor(protected menuItems: MenuItem[], public quantity: number) { }
}

class MenuItem {
  constructor(private itemId: number, public name: string, public price: number) { }
}

class Payment {

}