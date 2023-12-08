let value;

value = false;
value = true;

if (value) {
  console.log("Value is truthy. \tValue: ", value);
} else {
  console.log("Value is falsy. \tValue: ", value);
}

value = 5;
value = " ";

// getting a random number
const max = 10; //defines the max value - so here random number between 0 and 10
let number = Math.random() * max;
console.log("number: ", number);

// removing decimal numbers after comma
number = math.floor(number);
console.log("number: ", number);

// both steps before can be written in one line of code
// number = math.floor(math.random() * max);

// method 1
if (number > 2) {
  number--;
} else {
  number++;
}

// method 2
const boolValue = number > 2;
if (boolValue) {
  number--;
} else {
  number++;
}

// method 3
// ternary operator
// condition ? expressionIfTrue : expressionIfFalse
number > 2 ? number++ : number--;

console.log("After IF -> number: ", number);

const animal = "Panda";
let emoji;

// if (animal === 'Panda') {
//   emoji = '🐼';
// }else {
//   if (animal === 'Tiger') {
//     else {
//       emoji = '🤔'
//     }
//   }
//   }

switch (animal) {
  case "Panda":
    emoji = "🐼";
    break;
  case "Tiger":
    emoji = "🐯";
    break;
  case "Dog":
    emoji = "🐶";
    break;
  default:
    emoji = "❓";
}

console.log("What animal is this? ", animal);
