class Person {
    constructor(name) {
        this.name = name
    }
    getName() {
        return this.name
    }
}

let p = new Person('liqilong')
alert(p.getName())