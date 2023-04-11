//complete this code
// parent class is person
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get getterForName() {
        return this.name;
    }

    set setterForAge(age) {
        this.age = age;
    }
}

// student and teacher are subclasses/child classes
class Student extends Person {
    study() {
        console.log(`${super.name} is studying.`);
    }
}

class Teacher extends Person {
    teach() {
        console.log(`${super.name} is teaching.`);
    }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
