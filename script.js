console.log("Hello Wolrd");

console.log("R + u + t + h");

// Error! Make it work
console.log("Hallo");

// Error! Make it work
console.log("That doesn't work");

// should return true. Change only the operator to fix it.
console.log(50 + 2 === 52);

// should be false. Change only the operator to fix it.
console.log("333" !== 333);

// Wrong result: Expected 555 not 855. Change only the operator to fix it.
console.log((600 + 510) / 2);

// Wrong result: Expected a Number 4 received 22
console.log(2 + 2);

//Create a console.log that returns true when both division results are equal to 5
console.log(25 / 5); // Result: 5
console.log(50 / 10); // Result: 5

console.log(25 / 5 === 50 / 10);

function welcomeMsg(name) {
  return "Welcome " + name + "!";
}

console.log(welcomeMsg("Jane"));
console.log(welcomeMsg("Marc"));

function calcGrossPrice(netPrice, taxRate) {
  return netPrice * (1 + taxRate);
}

console.log(calcGrossPrice(20, 0.19));
console.log(calcGrossPrice(40, 0.16));

function addPositive(num1, num2) {
  // make unhappy (negative) numbers happy (positive)
  num1 = Math.abs(num1);
  num2 = Math.abs(num2);

  // Adding the two now happy numbers
  return num1 + num2;
}

console.log(addPositive(2, 3)); // Output: 5
console.log(addPositive(3, -5)); // Output: 8
console.log(addPositive(-1, -8)); // Output: 9

const userName = "Brad"; // Corrected: added quotes
// userName = "Jenna"; // Error: You can't reassign a value to a constant

function getUserNameLength(name) {
  // Corrected: Added parameter 'name' for the function
  const result = name.length;
  return result; // Corrected: Return the result.
}

console.log(getUserNameLength(userName) > 4); // Output should log false
console.log(getUserNameLength(userName) === 4); // Output should log true
