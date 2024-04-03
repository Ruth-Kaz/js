// We need a function that can transform a string into a number. What ways of achieving this do you know?

function stringToNumber(str) {
  if (typeof str === "number") {
    return str;
  } else {
    return Number(str);
  }
}

console.log(convertToNumber("1234"));

//   ChatGPT ________________________________

function convertToNumber(str) {
  return stringToNumber(str);
}

function stringToNumber(str) {
  if (typeof str === "number") {
    return str;
  } else {
    return Number(str);
  }
}

console.log(convertToNumber("1234"));

// Write a function that removes the spaces from the string, then return the resultant string.

function noSpace(x) {
  const deletespace = x.replace(" ", "");
  return x.replace;
}

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));

//   ChatGPT ________________________________

function noSpace(x) {
  return x.replace(/ /g, "");
}

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));

function busPeople(peopleInOut) {
  let totalPeople = 0; // Initialize total number of people on the bus

  for (let i = 0; i < peopleInOut.length; i++) {
    totalPeople += peopleInOut[i][0]; // People getting on the bus at each stop
    totalPeople -= peopleInOut[i][1]; // People getting off the bus at each stop
  }

  return totalPeople >= 0 ? totalPeople : 0; // Ensure total people is not negative
}

function isIsogram(str) {
  const word = str.length();
}

