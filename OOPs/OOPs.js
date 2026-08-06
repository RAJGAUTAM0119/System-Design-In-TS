"use strict";
// class Person {
// 	public name: string;
// 	public age: number;
Object.defineProperty(exports, "__esModule", { value: true });
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
class Book {
    title;
    author;
    price;
    constructor(title, author, price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }
    displayInfo() {
        return `The price of the book ${this.title} is $${this.price} and author of this book is ${this.author} `;
    }
    applyDiscount(percentage) {
        if (percentage > 100) {
            return "Invalid value";
        }
        const discountedPrice = this.price * (1 - percentage / 100);
        return this.price = discountedPrice;
    }
}
const book1 = new Book("The power of subcouncious mind", "Dr Joseph", 500);
console.log(book1.applyDiscount(100));
console.log(book1.displayInfo());
const book2 = new Book("The green soul", "Raj Gautam", 1000);
console.log(book2.applyDiscount(200));
console.log(book2.displayInfo());
//# sourceMappingURL=OOPs.js.map