// class Person {
// 	public name: string;
// 	public age: number;

// 	constructor(name: string, age: number) {
// 		this.name = name;
// 		this.age = age;
// 	}

// 	static species = "Homo sepiens";

// 	greet() {
// 		return `Hello ${this.name} your age is ${this.age}`;
// 	}
// 	truth() {
// 		return `Hello ${this.name} you are actually a ${Person.species}`;
// 	}
// }

// const user = new Person("Raj", 20);
// console.log(user.greet());
// console.log(user.truth());
// console.log(Person.species);

// function makePerson(name: string, age: number) {
// 	return { name, age, greet: () => `Hello ${name}` };
// }

// const newObj = makePerson("Raj", 20);
// newObj.name = "Gautam";
// console.log(newObj);

// class Course {
// 	constructor(
// 		public title: string,
// 		private credit: number,
// 	) {}

// 	printCourse(): void {
// 		console.log(`${this.title},${this.credit + 1}`);
// 	}
// }

// const obj1 = new Course("The secrets", 100);
// // obj1.credit = 110;
// obj1.printCourse();

// class errors extends Error {
// 	constructor(
// 		public statusCode: number,
// 		public message: string,
// 	) {
// 		super(message);
// 	}
// }

// const err = new errors(409, "forbidden");
// console.log(err);


// interface Drawable {
// 	draw(): void
// }

// class Circle implements Drawable {
// 	draw() {
// 		console.log("it is easy to draw a circle")
// 	}
// }

// class Square implements Drawable {
// 	draw() {
// 		console.log('It is easy to draw a square')
// 	}
// }

// const circle = new Circle()
// circle.draw()
// const square = new Square()
// square.draw()
// console.log(square instanceof Circle)
// console.log(square instanceof Square)

// const arr: Drawable[] = [circle, square]
// arr.forEach((obj) => {
// 	obj.draw()
// })

// class Animal {
// 	constructor(public name: string) { }

// 	speak() {
// 		console.log("Animal Speaks")
// 	}
// }

// class Dog extends Animal {
// 	constructor(name: string) {
// 		super(name)
// 	}

// 	speak() {
// 		super.speak()
// 		console.log('Dog barks')
// 	}
// }

// const dog = new Dog("Tommy")
// console.log(dog.name)
// dog.speak()

// class Book {
// 	constructor(public title: string, public author: string, public price: number) { }

// 	displayInfo(): string {
// 		return `The price of the book ${this.title} is $${this.price} and author of this book is ${this.author} `
// 	}

// 	applyDiscount(percentage: number): number | string {
// 		if (percentage > 100) {
// 			return "Invalid value"
// 		}
// 		const discountedPrice = this.price * (1 - percentage / 100)
// 		return this.price = discountedPrice
// 	}
// }

// const book1 = new Book("The power of subcouncious mind", "Dr Joseph", 500)
// console.log(book1.applyDiscount(100))
// console.log(book1.displayInfo())

// const book2 = new Book("The green soul", "Raj Gautam", 1000)
// console.log(book2.applyDiscount(200))
// console.log(book2.displayInfo())

// Coding Challenge 1(Easy)

// Create a Car class.

// Fields:

// brand
// model
// year
// color

// Requirements:

// Use parameter properties
// Add a displayInfo() method
// Create 3 objects

// class Car {
// 	constructor(public brand: string, public model: string, public year: number, public color: string) { }

// 	displayInfo(): string {
// 		return `The brand of the car is ${this.brand} the model of the car is ${this.model} the build year of the car is ${this.year} and the color of the car is ${this.color}`
// 	}
// }

// const car1 = new Car("BMW", "m-series", 2023, "Red")
// const car2 = new Car("Lexus", "Model-l", 1990, "White")
// const car3 = new Car("Toyota", "Fortunre", 2000, "Black")
// console.log(car1.displayInfo())
// console.log(car2)
// console.log(car3)




// Coding Challenge 2 (Medium)

// Design a Student class.

// Fields:

// id
// name
// course
// fees

// Constructor requirements:

// fees cannot be negative.
// If it is negative, throw an error.

// 	Example:

// new Student(1, "Raj", "MERN", -500);

// Should throw an error.

// class Student {
// 	constructor(public id: number, public name: string, public course: string, public fees: number) {
// 		if (this.fees < 0) {
// 			throw new Error("Fees cant be negative")
// 		}
// 	}

// }

// const student1 = new Student(12313, "Raj", "Ai and Ml", 200)
// console.log(student1)



// Coding Challenge 3(Thinking)

// Imagine you're designing an Employee class.

// Which fields belong in the constructor ?

// 	name
// email
// employeeId
// joiningDate
// salary
// lastLogin

// Which are mandatory ?

// 	Which should get default values ?

// 		Explain why, not just your choice.

// class Employee {
// 	constructor(public name: string, public email: string, public employeeId: string, public joiningDate: string) { }
// }

class Animal {
	constructor(public name: string) { }
	eat(): string {
		return `${this.name} eats food`
	}
}

class Dog extends Animal {

	bark(): string {
		return `${this.name} does woof`
	}
}

class Cat extends Animal {

	meow(): string {
		return `${this.name} does meow`
	}
}

const animals = [
	new Dog("Bruno"),
	new Cat("Milo"),
	new Dog("Rocky")
];

for (const animal of animals) {

	if (animal instanceof Dog) {
		console.log(animal.bark())
	}

	if (animal instanceof Cat) {
		console.log(animal.meow())
	}
}




// interface PaymentMethod {
// 	pay(amount: number, paymentMethod: string): void
// }

// class UPIPayment implements PaymentMethod {
// 	// constructor(public amount: number, public paymentMethod: string) { }
// 	pay(amount: number, paymentMethod: string): void {
// 		console.log(`You have to pay ${amount} from ${paymentMethod}`)
// 	}
// }

// class CardPayment implements PaymentMethod {
// 	// constructor(public amount: number, public paymentMethod: string) { }
// 	pay(amount: number, paymentMethod: string): void {
// 		console.log(`You have to pay ${amount} from ${paymentMethod}`)
// 	}
// }

// class CashPayment implements PaymentMethod {
// 	// constructor(public amount: number, public paymentMethod: string) { }
// 	pay(amount: number, paymentMethod: string): void {
// 		console.log(`You have to pay ${amount} from ${paymentMethod}  `)
// 	}
// }

// const payments: PaymentMethod[] = [
// 	new UPIPayment(),
// 	new CardPayment(),
// 	new CashPayment()
// ];

// for (const payment of payments) {
// 	if (payment instanceof UPIPayment) {
// 		payment.pay(923234, "UPI")
// 	}
// 	if (payment instanceof CardPayment) {
// 		payment.pay(2380324, "Card")
// 	}
// 	if (payment instanceof CashPayment) {
// 		payment.pay(500234, "Cash")
// 	}
// }

// interface IEmployee {
// 	name: string,
// 	work(): void
// }

// class Employee implements IEmployee {
// 	constructor(public name: string) { }
// 	work(): void {
// 		console.log("Employee is working")
// 	}
// }

// class Developer extends Employee {
// 	constructor(public name: string) {
// 		super(name)
// 	}
// 	override work(): void {
// 		console.log("Developer is working")
// 	}
// }

// class Manager extends Employee {
// 	constructor(public name: string) {
// 		super(name)
// 	}

// 	override work(): void {
// 		super.work()
// 		console.log('Manager is managing the team')
// 	}
// }

// const employees = [
// 	new Employee("Raj"),
// 	new Developer("Raj Gautam"),
// 	new Manager("Raj")
// ]

// for (let employee of employees) {
// 	employee.work()
// }