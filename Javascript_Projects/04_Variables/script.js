let message;

message = "Hello"; //store the string 'Hello' int the variable named message
alert(message); //shows the variable content

let mesage2 = 'Hello!' //define the variable and assign the value 

alert(mesage2);

// we can also declare multiple variables in one line : 

let user = 'John', age = 25, message3 = 'Hello';
//That might seem shorter, 
// but we don’t recommend it. For the sake of better readability,
//  please use a single line per variable.

let user1 = 'Duck';
ageu1 = 25;
message4 = 'Hello';

/* this is also correct 
           let user = 'John',
                age = 25,
                message = 'Hello';
                
Or even in the “comma-first” style:

             let user = 'John'
                , age = 25
                , message = 'Hello';
                */

//2. var  - in older scripts var is used to declare variables 
// but now it is not recommended to use var 
// because it has some issues like it does not have block scope 
// and it can be redeclared and updated.

var message5 ='Hello Sakshi';

let message6 = "This";

// repeated 'let' leads to an error
let message6 = "That"; // SyntaxError: 'message' has already been declared

// Variable namings
//valid 
let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"

alert($ + _); // 3

/*invalid 
let 1a; // cannot start with a digit

let my-name; // hyphens '-' aren't allowed in the name*/

/* reserved keywords

let let = 5; // can't name a variable "let", error!
let return = 5; // also can't name it "return", error!
   
it generates error because let and return are reserved keywords
*/

//To declare a constant (unchanging) variable, use const instead of let:
const myBirthday = '18.04.1982';
alert(myBirthday);

/*const myBirthday = '18.04.1982';

myBirthday = '01.01.2001'; // error, can't reassign the constant! */

let hello = "Hello world!";
let message7;

message7 = hello;

alert(message7); // Hello world!
