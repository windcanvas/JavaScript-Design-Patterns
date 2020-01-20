class People {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    eat() {
        alert(`${this.name} eat something`)
    }
    speak() {
        alert(`My name is ${this.name}, age ${this.age}`)
    }
}

class Student extends People {
    constructor(name, age, number) {
        super(name, age)
        this.number = number
    }
    study() {
        alert(`${this.name} study`)
    }
}

let xiaoming = new Student('xiaomimg', 10, 'A1')
xiaoming.study()
alert(xiaoming.number)
xiaoming.eat()

let xiaohong = new Student('xiaohong', 11, 'A2')
xiaohong.study()
xiaohong.speak()
