class People {
    name
    age
    protectd weight
    constructor(name, age) {
        this.name = name
        this.age = age
        this.weight = 120
    }
    eat() {
        alert(`${this.name} eat something`)
    }
    speak() {
        alert(`My name is ${this.name}, age ${this.age}`)
    }
}

class Student extends People {
    number
    private girlfriend
    constructor(name, age, number) {
        super(name, age)
        this.number = number
        this.girlfriend = 'xiaoli'
    }
    study() {
        alert(`${this.name} study`)
    }
    getWeight() {
        alert(`weight ${this.weight}`)
    }
}

let xiaoming = new Student('xiaomimg', 10, 'A1')
xiaoming.getWeight()
alert(xiaoming.girlfriend)

