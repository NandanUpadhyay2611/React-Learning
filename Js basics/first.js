// let,var,const keywords


var globalVar="Global var"
// console.log(globalVar)
function localVariable(){
    var locVar="Local var";
    console.log(locVar);
}
// localVariable();
// console.log(locVar)

function abe(){ //redeclaration of a varialble (var) is allowed within the same scope but not out of scope ...outside it will be considered as a new variable (prety obvious)   same goes with reassignment
    var x=50;
    
    console.log(20);
}
// x=10;
// abe();
// console.log(x);


// with let keyword redeclaration is not possible
// reinitiallization is possible
function reassignmentAndReinitiallization(){
    let z=78
    z=22
    console.log(z);
    
}
reassignmentAndReinitiallization();
