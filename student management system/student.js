"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    id;
    name;
    age;
    email;
    courses;
    constructor(id, name, age, email, courses) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.email = email;
        this.courses = courses;
    }
    enrollInCourse(course) {
        if (this.courses.includes(course)) {
            throw new Error("Can't enroll in same course twice");
        }
        this.courses.push(course);
        return this;
    }
    dropCourse(course) {
        if (!this.courses.includes(course)) {
            throw new Error("Can't drop from the course not enrolled in");
        }
        let courseIndex = this.courses.indexOf(course);
        if (courseIndex !== -1) {
            this.courses.splice(courseIndex, 1);
        }
        return this;
    }
    getCourse() {
    }
}
const student1 = new Student(20160033905, "Raj Gautam", 20, "raj@gmail.com", ["web dev", "teaching", "commnication", "trading"]);
const student2 = new Student(20160033906, "Abhi", 19, "abhi@gmail.com", ["ai and machine learing", "n8n", "gen ai"]);
const student3 = new Student(20160033907, "Sachin Jhakkar", 40, "sachi@gmail.com", ["teaching", "math", "chemistry", "physics"]);
console.log(student1);
console.log(student2);
console.log(student3);
// console.log(student1.dropCourse("Webdev"))
class Course {
    id;
    name;
    fee;
    duration;
    constructor(id, name, fee, duration) {
        this.id = id;
        this.name = name;
        this.fee = fee;
        this.duration = duration;
    }
    getCourseInfo() {
        const courseInfo = `The id of the course is ${this.id} and the name of the course is ${this.name} fees and duration of the course is ${this.fee} and ${this.duration} Years repectively`;
        return courseInfo;
    }
}
const course1 = new Course(92323, "Ai and ML", 120000, 1.5);
console.log(course1);
const course2 = new Course(92324, "Ai and ML", 120000, 1.5);
console.log(course2);
const course3 = new Course(92325, "Ai and ML", 120000, 1.5);
console.log(course3);
const course4 = new Course(92326, "Ai and ML", 120000, 1.5);
console.log(course4);
const course5 = new Course(92327, "Ai and ML", 120000, 1.5);
console.log(course5);
class StudentManagementSystem {
    constructor() {
    }
    enrollStudent() { }
}
//# sourceMappingURL=student.js.map