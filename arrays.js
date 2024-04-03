/* Implement a removeItem function.
The first parameter is an array.
The second parameter is a number. It's the non-zero-based index of the item that should get deleted.
Remove the item and return an array.
Ensure that the original array was not mutated.
TODO: Implement the removeItem function */

function removeItem(array, index) {
  const newarray = array.slice(); // slice creates a copy
  newarray.splice(index - 1, 1); // splice is your toy box
  return newarray;
}

const ainmals = ["Dog", "Cat", "Lion"];
console.log(removeItem(ainmals, 1)); // telling the box which toy you want
// result should be: ["Cat", "Lion"]

console.log(ainmals);
// result should be still: ["Dog", "Cat", "Lion"]

const fruits = ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"];
console.log(removeItem(fruits, 3));
// result should be: ["Watermelon", "Banana", "Kiwi", "Pineapple", "Apple"]

console.log(fruits);
// result should be still: ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"]

/*Implement a sumOfCharacters function.

 The function has one parameter, which is an array.
 Check the type of each array entry. If it's a string then store the count of characters.
 The function returns the total sum of all characters.*/
// TODO: Implement the sumOfCharacters function

function sumOfCharacters(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "string") {
      // If it's a string, add the length of the string to the totalCharacters
      total += array[i].length;
    }
  }
  return total;
}
const arr1 = ["Luke", "Anakin", true, "Obi Wan", 333];
console.log(sumOfCharacters(arr1));
// result should be: 17

const arr2 = [
  "Code is",
  "like humor",
  ".",
  "When you have",
  "to explain it, it's bad!",
];
console.log(sumOfCharacters(arr2));
// result should be: 55

/*
Q:
what does this do " for (let i = 0; i < array.length; i++)"?

A:
Starting the Loop:

Imagine you have a bunch of toys lined up on a shelf, and you want to look at each toy one by one.
for is like a special way to start this toy-looking adventure.
Making a Little Counter:

You want to keep track of how many toys you've looked at, right? So, you get a little notebook and a pencil.
let i = 0 is like writing "Start counting from 0" in your notebook. The i is your special toy counter.
Looking at Each Toy:

Now, you start looking at each toy, starting from the first one.
i < array.length is like saying, "Keep looking at toys as long as I haven't reached the end of the shelf."
array.length tells you how many toys are on the shelf. So, as long as your counter (i) is less than the total number of toys, you keep looking.
Moving to the Next Toy:

After you've looked at a toy, you want to move to the next one, right? You don't want to keep looking at the same toy forever!
i++ is like adding 1 to your counter after you've looked at each toy. So, you move from toy 1 to toy 2, then to toy 3, and so on.
So, for (let i = 0; i < array.length; i++) is like saying, "Hey, let's start looking at toys from the first one. Keep looking at toys until we've looked at all of them. 
After each toy, let's move on to the next one."
________________________________________________________________________________________________________________________________

Q:what about if (typeof array[i] === "string")

A:ChatGPT

Checking Each Toy:
Now, as you're looking at each toy, you want to make sure you're only counting certain types of toys, like maybe only the ones that are action figures or dolls.
typeof array[i] === "string" is like checking if the toy you're looking at is a specific type, in this case, if it's a string toy.
typeof array[i] tells you what type of toy it is. If it's a string, it means it's a word toy.
=== "string" is like saying, "Is this toy exactly the type I'm looking for?" If it's not a word toy, you skip counting it.
So, when you put it all together, for (let i = 0; i < array.length; i++) along with if (typeof array[i] === "string") means:

"Hey, let's start looking at toys from the first one. Keep looking at toys until we've looked at all of them. After each toy, let's move on to the next one. 
But only count the toys that are words."
It's like a special toy adventure where you're only counting the toys that are words! 

________________________________________________________________________________________________________________________________

Q:why not "newarray.splice(array - 1, 1)" instead of index?

A:
Imagine you have a box full of toys, and you want to take out one toy from the box. You need to know which toy to take out, right? So, you ask someone, "Which toy 
should I take out?"

When you ask, you don't say, "Take out the box - 1 toy." That wouldn't make sense, right? You need to tell them which toy to take out, not do math with the whole box!

Similarly, when we use splice() to take out a toy (or an item) from an array (which is like a box of toys), we need to tell it which toy (or item) to take out. 
We do that by giving it the number of the toy (or item) we want to take out - not the whole box!

So, when we write newarray.splice(array - 1, 1), it's like saying, "Take out the toy that's in the box at position 'array - 1'." We're telling it exactly which toy 
to take out, not doing math with the whole box.*/

