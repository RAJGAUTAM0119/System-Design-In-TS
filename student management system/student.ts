interface ICourse {
	name: string,
	fee: number,
	duration: number,
	getId(): number
}

interface IStudent {
	name: string,
	age: number,
	email: string,
	courses: ICourse[],
	getId(): number
}

class Course implements ICourse {
	constructor(private id: number, public name: string, public fee: number, public duration: number) { }

	getId() {
		return this.id
	}

	getCourseInfo() {
		const courseInfo = `The id of the course is ${this.id} and the name of the course is ${this.name} fees and duration of the course is ${this.fee} and ${this.duration} Years repectively`
		return courseInfo
	}
}

const course1 = new Course(92323, "artificial intelligence and machine learning", 120000, 1.5)
// console.log(course1)
const course2 = new Course(92324, "MERN stack development", 85000, 1)
// console.log(course2)
const course3 = new Course(92325, "MEAN stcak development", 88000, 1)
// console.log(course3)
const course4 = new Course(92326, "Cyber security with ai", 100000, 1.2)
// console.log(course4)
const course5 = new Course(92327, "data analytics", 90000, 1)
// console.log(course5)

class Student implements IStudent {
	constructor(private id: number, public name: string, public age: number, public email: string, public courses: ICourse[]) { }

	enrollInCourse(course: ICourse) {
		if (this.courses.includes(course)) {
			throw new Error("Can't enroll in same course twice")
		}

		this.courses.push(course)

		return this
	}

	dropCourse(course: ICourse) {
		if (!this.courses.includes(course)) {
			throw new Error("Can't drop from the course not enrolled in")
		}

		let courseIndex = this.courses.indexOf(course)

		if (courseIndex !== -1) {

			this.courses.splice(courseIndex, 1)
		}

		return this
	}

	getCourses() {
		return this.courses
	}

	getId() {
		return this.id
	}
}

const student1 = new Student(20160033905, "Raj Gautam", 20, "raj@gmail.com", [])
student1.enrollInCourse(course1)
student1.enrollInCourse(course2)
student1.enrollInCourse(course3)
// console.log(student1.getCourse())


const student2 = new Student(20160033906, "Abhi", 19, "abhi@gmail.com", [])
student2.enrollInCourse(course1)
student2.enrollInCourse(course2)
student2.enrollInCourse(course3)

const student3 = new Student(20160033907, "Sachin Jhakkar", 40, "sachi@gmail.com", [])
student3.enrollInCourse(course1)
// student3.enrollInCourse(course2)
// student3.enrollInCourse(course3)


class StudentManagementSystem {
	private students: IStudent[] = []
	private courses: ICourse[] = []

	addStudent(student: IStudent): IStudent[] {
		this.students.push(student)
		return this.students
	}

	addCourse(course: ICourse): ICourse[] {
		this.courses.push(course)
		return this.courses
	}

	removeStudent(studentId: number) {
		const student: IStudent | undefined = this.students?.find(
			data => data.getId() === studentId
		)
		if (!student) {
			throw new Error("Student not found")
		}
		if (!this.students.includes(student)) {
			throw new Error("The student is not found")
		}
		const indexOfStudent = this.students.indexOf(student)

		this.students.splice(indexOfStudent, 1)
		return this.students
	}

	removeCourse(courseId: number): ICourse[] {
		const course: ICourse | undefined = this.courses?.find(
			data => data.getId() === courseId
		)
		if (!course) {
			throw new Error("Course not found")
		}
		const indexOfCourse = this.courses.indexOf(course)

		this.courses.splice(indexOfCourse, 1)
		return this.courses
	}

	enrollStudent(studentId: number, courseId: number) {
		const student = this.students.find(
			data => data.getId() === studentId
		)

		if (!student) {
			throw new Error("Student not found")
		}

		const course = this.courses.find(
			data => data.getId() === courseId
		)

		if (!course) {
			throw new Error("Course not found")
		}

		student.courses?.push(course)

		return student

	}
}

const system = new StudentManagementSystem()


system.addStudent(student1)
system.addStudent(student2)
system.addStudent(student3)

system.addCourse(course1)
system.addCourse(course2)
system.addCourse(course3)
system.addCourse(course4)
system.addCourse(course5)


system.enrollStudent(20160033907, 92326)

console.log(student3.getCourses())