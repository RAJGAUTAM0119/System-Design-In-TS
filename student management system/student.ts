interface PersonalInfo {
	name: string,
	id: number
}

class Person {
	constructor(public name: string, public id: number) {

	}
}

class Student extends Person implements PersonalInfo {
	constructor(
		name: string,
		studentID: number,
		public email: string,
		public courses: string[],
	) {
		super(name, studentID)
	}

	enroll(course: string) {
		this.courses.push(course);
	}

	enrolled() {
		this.courses.forEach((data) => {
			console.log(data);
		});
	}
}

const student1 = new Student("Raj", 20160033905, "rajgatuam0119@gmail.com", [
	"hindi",
	"english",
]);
console.log(student1)
// student1.enroll("telugu");
// student1.enroll("persian");

// student1.enrolled();
