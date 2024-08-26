//destructuring

//es5
const progLang=['HTML','CSS','Js','Python','C','Java'];
var lang1=progLang[0];
var lang2=progLang[1];
// console.log("lang 1: "+lang1);


//es6
const [first,second, ,fourth]=progLang;

// console.log("1st  prog Lang: "+first);

// console.log(" 4rth prog Lang: "+fourth);


//spread Operator

const fruits=['apple','banana','cherry','mango'];
const veg=['carrot','broccoli','spinach'];
//copy
const fruitsCopy=[...fruits,...veg];

console.log(fruitsCopy[2])

// fruitsCopy.forEach(element => {
//     console.log(element);
    
// });

//add element

const allFoods=['guava', ...fruits,'pineapple'];
console.log(allFoods);

const person={name:'nandan',age:20};
const address={city:'vapi',country:'India'};


