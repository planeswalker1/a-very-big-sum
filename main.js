// pseudo code:
// task:
// given an array of numbers
// Create a function that returns the sum of the array

// make a function that returns the sum of an array of elements
// use .reduce()
// return the sum

function aVeryBigSum (array) {
  return array.reduce(function (total, currentNumber) {
    return total + currentNumber;
  }, 0);
}

console.log(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]));