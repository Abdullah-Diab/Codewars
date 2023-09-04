// Coding Challenge #1 : Even or Odd
console.group(`01 Even or Odd`);
// Your Task: Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

const evenOdd = function(num) {
  return num % 2 === 0 ? `${num} is Even` : `${num} is Odd`
}

console.log(evenOdd(1));
console.log(evenOdd(2));
console.groupEnd();

// Coding Challenge #2 : Sum of positive
console.group(`02 Sum of positive `);
// Your Task: You get an array of numbers, return the sum of all of the positives ones.
// Example: [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

const sumPositive = function(arr) {
  let sum = 0;
  arr.forEach(function(num){
    sum += Math.max(0, num);
    // if (num > 0){sum += num;}
  });
  return sum;
}

console.log(sumPositive([1,-4,7,12]));
console.groupEnd();
