// console.log("Hello World!");
// console.error()
// console.table()
// console.warn()
// console.time()
// console.timeEnd()

// Variable declaration
// string, number, boolean, object, function
let name = "Marina Suzanne"; // string
let age = 21; // number
let isSingle = true; // boolean
let hobbies = ["singing", " playing instrument", " playing video games"];
let jsonObject = { name, age, isSingle, hobbies };
let run = function () {
  console.log(name + " is running.");
};

console.log(
  " My name is " + name + "\n",
  "My age is " + age + "\n",
  "Am I not taken? " + isSingle + "\n",
  "My hobbies are " + hobbies,
  run
);

console.log(jsonObject);
console.log("\n" + "===========================================" + "\n")


// let _let = "something";
// let _function = "something";

// console.log(typeof name);

// If else statement...
// >, <, !, ==, >=, <=, ||, &&, === // Condition operator
// + - * / % // Math operands
// if (age === "25") console.log(`${age} == ${25}`);
// else console.log(`${age} != ${25}`);

// 1 to 18 = bata pa
// 19 - 21 = college na
// 22 ++ = unemployed

// if (age >= 22) console.log("I\'m unemployed");
// else if (age >= 19 && age <= 21) console.log("I'\m in College level");
// else console.log("Young, Wild, & Free");

console.log("TODO: Refactor the if else statement above to a switch statement." + "\n")
switch (true) {
  case age >= 22:
    console.log("My age is " + age + " and I\'m unemployed");
    break;
  case age >= 19 && age <= 21:
    console.log("My age is " + age + " and I\'m in College level");
    break;
  case age <=18:
    console.log("My age is " + age + " and I\'m Young, Wild, & Free");
    break;
  default:
    console.log("An error has occurred.");
}
console.log("\n" + "===========================================" + "\n")

// let a = 0;
// // Loops
// while (a < 10) {
//   console.log("*");
//   a++;
//   if (a == 5) break;
// }

// for (let b = 0; b <= 10; b++) {
//   console.log("x".repeat(b));
//   if (b == 5) break;
// }

// TODO:
/*
        *
       ***
      *****
     *******
    *********
     *******
      *****
       ***
        *
*/

// hobbies.forEach((hobby, i) => {
//   if (i >= 1) return;
//   console.log(hobby, i);
// });

// // Requiring / Importing other js files.
// const _functions = require("./functions.js");
// _functions.consoleMessage("Log this message.");

console.log("TODO: Diamond Loop" + "\n");
function createDiamond (numberOfAsterisks){
    // If <numberOfAsterisks> is an odd number, add +1, to make it an even number.
    //Loop to create diamond using <numberOfAsterisks>.
    
    console.log("\n" + "Number of Asterisks: " + numberOfAsterisks + "\n");

    if (numberOfAsterisks % 2 != 0) {
      numberOfAsterisks = numberOfAsterisks + 1
      console.log("Total number of Asterisks in the middle: " + numberOfAsterisks);
    }

    for (let x = 0; numberOfAsterisks >=x; x++) {
      if (x % 2 != 0) {

      }else {
        let spaces = ((numberOfAsterisks - x) / 2);
        console.log((" ".repeat(spaces)) + ("*".repeat(x)));
      }
    };

    for (let b = numberOfAsterisks - 2; 0 <= b; b--) {
      if (b % 2  != 0) {
        
      }else {
        let spaces = ((numberOfAsterisks - b) / 2);
        console.log((" ".repeat(spaces)) + ("*".repeat(b)));
      }
    };

  }

  createDiamond(13);