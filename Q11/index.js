// Check the below given code, if there are any issues, fix them and explain the output

const numbers = [1, 2, 3, 4, 5];

const result = numbers.reduce((acc, num) => {

  if (num % 2 === 0) {

    acc.evens.push(num);

  } else {

    acc.odds.push(num);
  }
  return acc;
});

console.log(result);



// There are two issues with the code you provided. First, the variable acc is not defined before it is used. Second, the .push() method only works on arrays, so you cannot use it to push a number onto the odds property of the acc object.

// To fix these issues, we can add the following code to the beginning of the code:

// const acc = {
//     evens: [],
//     odds: [],
//   };


// Here is the complete code with the fixes:

const numbers = [1, 2, 3, 4, 5];

const acc = {
  evens: [],
  odds: [],
};

const result = numbers.reduce((acc, num) => {
  if (num % 2 === 0) {
    acc.evens.push(num);
  } else {
    acc.odds.push(num);
  }
  return acc;
});

console.log(result);

// The output of the code will be the following object:

// {
//   evens: [2, 4],
//   odds: [1, 3, 5],
// }