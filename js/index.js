// This is a comment

// This was used before 2015

var oldUse;
oldUse = "Try not to use it!";

console.log("old Use:", oldUse);
// will print out string and variable --> "old Use: Try not to use it!"

// Since 2015 the following is used

let newVariable;

const myValueWillNotChange = "You are stuck with me, I will stay the same!";

console.log("myValueWillNotChange", myValueWillNotChange);

//BigInt
const myBigInt = 3000n;
console.log("myBigInt: ", myBigInt);

//Array
// Arrays can contain and mix&match any data type
const myArray = ["Element 1", "Element 2", false, "Element 3", 23];

console.log("myArray: ", myArray);

//Objects
//Objects also can contain and mix&match any data type

const myObject = {
  cohortName: "Coriander",
  amountStudents: 16,
  academy: "Spiced",
  knowsJS: true,
};

console.log("myObject: ", myObject);

//Let's do math

const isANumber = "1";
const amIANumber = 2;

console.log("isANumber: ", isANumber);
console.log("amIANumber: ", amIANumber);

//if one variable is a string, the sum will also be a string, although ine variable is a number
let sum = isANumber + amIANumber;

console.log("the sum is: ", sum);

//parseInt transforms a string to a number
let newSum = parseInt(isANumber) + amIANumber;

console.log("the sum is: ", newSum);
