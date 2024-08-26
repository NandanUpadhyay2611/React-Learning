class Student{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    printStudent(){
        console.log("the name of student is",this.name);
        console.log("the age of student is",this.age);
        
    }
}

const student1 = new Student('Alice', 20);
student1.printStudent();


// Inheritence

class Car{
    constructor(brand){
        this.brand=brand;
    }

    display(){
        return 'I have a '+ this.brand;
        
    }
}

class Model extends Car{
    constructor(brand,Model){
        super(brand);
        this.Model=Model;
    }

    show(){
        return this.display() + ' It is a ' + this.Model;
    }

}

const mycar = new Model("Ford", "Mustang");
console.log(mycar.show());