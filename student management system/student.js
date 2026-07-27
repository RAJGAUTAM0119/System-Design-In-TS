"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    id;
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
class Student extends Person {
    email;
    courses;
    constructor(name, studentID, email, courses) {
        super(name, studentID);
        this.email = email;
        this.courses = courses;
    }
    enroll(course) {
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
console.log(student1);
// student1.enroll("telugu");
// student1.enroll("persian");
// student1.enrolled();
//# sourceMappingURL=student.js.map