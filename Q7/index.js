// Use Array.reduce() method to reverse the following given array
// const arr = [1, 2, 3, 4, 5]

const arr = [1, 2, 3, 4, 5];

const reversedArr = arr.reduce((accumulator, currentValue) => {
  // Append the current value to the beginning of the accumulator array.
  accumulator.unshift(currentValue);

  // Return the accumulator array.
  return accumulator;
}, []);

console.log(reversedArr); // [5, 4, 3, 2, 1]

// The Array.reduce() method takes a callback function as an argument. The callback function is called repeatedly, with the current value of the array as the first argument, and the accumulator as the second argument. The accumulator is an empty array by default.

// In this case, the callback function appends the current value of the array to the beginning of the accumulator array. The accumulator array is then returned by the callback function.