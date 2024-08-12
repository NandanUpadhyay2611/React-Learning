

function g(){
    console.log("Before declaration: ",t);
   
    console.log("After declaration: ",t);
}


function H(){
    console.log("Before declaration: ",t);
   t=22
    console.log("After declaration: ",t);
    var t;
}
// t=22;
H();
// g();
// var t  //this becomes global


//In JavaScript, variable declarations using var are hoisted to the top of their scope (in this case, the global scope), but the initialization remains in place.
// Hoisting means that during the creation phase of the execution context (before any code is executed), the var t declaration is moved to the top, but it is initialized as undefined until the assignment t = 22 is encountered during execution.






// function HoistingLet(){
//     console.log("Before declaration: ",t);
 
//     console.log("After declaration: ",t);
  
// }
// t=22;
// HoistingLet();
// let t;  // Hoisting is not possible using let keyword


// function H(){
//     console.log("Before declaration: ",t);
 
//     console.log("After declaration: ",t);
  
// }

// H();  // Hoisting is not possible using const keyword

// const t=22;