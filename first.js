///////////////// Variables

// let num = 4;
// console.log(num);

// let userName = "vamshi";
// console.log(userName);

///////////////////// Constants ****************

let radius = 5;
const pi = 3.14;

let area = pi ** radius ;

console.log(area);

//////////////////// Datatypes ****************

// let num1 = 4;
// console.log(typeof num1);

let userName1 = "vamshi";
console.log(typeof userName1);

let firstname = "vamshi";
let lastname = "reddy";

let fullname = firstname + " " + lastname; 

console.log((typeof fullname),fullname);

// let name = "vamshi\tdhar \"vams\"";
// console.log(name);

// let name = "vamshi \bdhar \"vams\"";
// console.log(name);

/////////////////////// Arithmetic Operators //////////////////////

// let number1 = 4 ;
// let number2 = 2;

// let result = number1 + number2;
// console.log(result);

// let number1 = false ;
// let number2 = true ;

// let result = number1 + number2;
// console.log(result);

// let number1 = 4 ;

// let result = ++number1;

// let result = number1* 5;

// let result = Math.pow(number1, 2);

// console.log(result);

//////////////////// Relational Operators //////////////

// let x = "pen"; 
// let y = "pencil" ;

// // let result = x > y ;
// // let result = x < y ;

// let result = x === y ;
// console.log(result);

/////////////////// Logical Operators ////////////

// let x = 4, y = 5, z = 6;

// // let result = x > y && y < z;

// let result = x > y || y < z;
// let n = !result; 
// console.log(result, n);

////////////////////////Conditional Statements //////////////////

// let num1 = 8 ;
// let num2 = 8;

// if (num1 > num2) {
//     console.log( "num1 is greatest" );
// } else if (num1 < num2) {
//     console.log( "num2 is greatest" );
// } else {
//     console.log("num1 is equal to num2");
// }


// let num1 = 8 ;
// let num2 = 9;
// let num3 = 10;

// if (num1 > num2 && num1 > num3) {
//     console.log( "num1 is greatest" );
// } else if (num2 > num3) {
//     console.log( "num2 is greatest" );
// } else {
//     console.log( "num3 is greatest" );
// }
// console.log("done");

///////////////////////////Ternary operator/////////////////

// let num = 9;

// let result = num%2 === 0 ? "Even" : "Odd";

// console.log( result );

////////////////////////////// Switch Statements////////////

let day = "  ";

switch ( day ) {
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
        console.log( "office" );
        break;
    case "friday":
        console.log( "WFH" );
        break;
    case "saturday":
    case "sunday":
        console.log(" weekend");
    default: 
        console.log( "Holiday" );
}

////////////////////////// Template Literal ////////////////

let num1 = 8 , num2 = 10 ;
let output = num1 + num2; 

console.log(`the addition of ${num1} and ${num2} is ${output}`);

console.log (`vamshidhar
Reddy`)

//////////////////// Loops //////////////////
/////// While loop starts

// let i = 4;

// while (i<=9){
//     console.log("loop")
//     i++;
// }

// let i = 10;

// while (i<=9){
//     console.log("loop")
//     i++;
// }

///////////// Do while loop starts

// let i = 20;

// do {
//     console.log("loop");
//     i++;
// } while (i < 10);

/////////////////// For loop starts

for (i=0 ; i <4; i++) {
    console.log("loop");
    for (j=0 ; j <=3 ; j++) {
        console.log("for loop");
    }
}

///////////////////OBJECT ///////

let emp = {
    name: "vams ",
    tech: "JS",
    laptop: {
        model: "i7",
        gen : 7,
        brand :"hp"
    }
}
// console.log(emp['name']);
// console.log(emp.tech);
// console.log(emp.laptop.brand);

// delete emp.laptop.gen;

//// for in loop 
for (let key in emp){
    console.log(key,emp[key]);
}

//////////////////// FUNCTIONS //////////////////////

// function hello(){
//     console.log("Hello world");
// }
// hello();

function hello(){
    return `Hello ${user}`;
}
let user = "vamshi"
let str = hello(user);
console.log(str);

////////// Function Expressions //////////////////////////////////

// let add = function (n1 , n2, n3) {
//     return n1 + n2 + n3;
// }
// let result = add(10, 2, 8);
// console.log(result);

let n1 = Math.abs(5);
let n2 = Math.abs(-7);

let add = (n1, n2) => (n1 + n2);

let result = add(n1, n2);
console.log(result);

//////////////////////This Method////////////////////

let laptop1 = {
    cpu : 'i7',
    ram : 16,
    brand : "HP",

    compare : function(other){
        if (this.cpu > other.cpu) {
            console.log(this);
        }else {
            console.log(other);
        }
    },
    getConfig : function( ) {
        console.log(this.cpu);
    }
}
let laptop2 = {
    cpu : 'i5',
    ram : 16,
    brand : "HP",

    getConfig : function( ) {
        console.log(this.cpu);
    }
}
laptop1.compare(laptop2)

/////////////// Constructor Function //////////////

function Emp (name, tech) {
    this.name = name;
    this.tech = tech;

    this.work = function (){
        console.log("hello world!");
    }
}

let emp1 = new Emp("vams" , "JS");
let emp2 = new Emp("naveen" , "react");

emp1.tech = "php";

console.log(emp1);

emp1.work();