// ===== filter() =====
// Creates a new array containing only elements that pass the given condition.
// The original array is NOT changed.

let ages = [12, 17, 18, 24, 15, 30];

// Keep only the ages 18 and above
let adults = ages.filter(age => age >= 18);

console.log(adults); // Output: [18, 24, 30]
console.log(ages);   // Original array remains: [12, 17, 18, 24, 15, 30]



// ===== map() =====
// Creates a new array by applying a function to each element of the original array.
// It does NOT change the original array.

let numbers = [1, 2, 3, 4, 5];

// Multiply each number by 2
let doubled = numbers.map(num => num * 2);

console.log(doubled); // Output: [2, 4, 6, 8, 10]
console.log(numbers); // Original array is unchanged: [1, 2, 3, 4, 5]

// ===== includes() =====
// Checks if an array contains a certain value.
// Returns true or false.
let colors = ["red", "green", "blue"];
console.log(colors.includes("green")); // Output: true
console.log(colors.includes("yellow")); // Output: false

// ===== forEach() =====
// Executes a provided function once for each array element.
// Does not return a new array.
let fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit, index) => {
  console.log(index + ": " + fruit);
});
// Output:
// 0: apple
// 1: banana
// 2: cherry

// ===== flatMap() =====
// Maps each item, then flattens the result one level deep.
// It's like doing map() followed by flat(1).
let words = ["hello", "world"];
let result = words.flatMap(word => word.split(''));
console.log(result); 
// Output: ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']

// ===== flat() =====
// Flattens nested arrays. By default, it flattens one level deep.
// Use a depth number (like flat(2)) to go deeper.
let nested = [1, 2, [3, 4], [5, [6, 7]]];
let flattened = nested.flat(); // One level deep
console.log(flattened); // Output: [1, 2, 3, 4, 5, [6, 7]]

let fullyFlattened = nested.flat(2); // Two levels deep
console.log(fullyFlattened); // Output: [1, 2, 3, 4, 5, 6, 7]

// ===== findIndex() =====
// Works like find(), but instead of returning the value, it returns the index of the first matching element.
let numbers1 = [10, 20, 30, 40];
let index = numbers1.findIndex(num => num > 25);
console.log(index); // Output: 2