const student={
    name:"Nandan",
    printName: function(){
        console.log(this);
    },
};

student.printName();
const student2={
    name:"rahul"
};
student.printName.call(student2);


//The this keyword in JavaScript refers to the object that is currently calling the method. By default, it's the object to the left of the dot (.) when calling a method.
// The call method allows you to explicitly set what this should refer to when calling a function. This is useful when you want to borrow a method from one object to use it in the context of another object.



// .... //

const obj4={
    j:78,
    h:function(){
        const i=()=>{
            console.log(this);
        };

        i();
    }
}

obj4.h();