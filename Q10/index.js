//  What will the following code's output be in sequence and explain why?
function printNumber(num) {

  console.log(num);

}

console.log(1);

setTimeout(printNumber, 0, 2);

setTimeout(printNumber, 100, 3);

console.log(4);

// The code below will output the following in sequence:

// 1
// 2
// 4
// 3




// The reason for this is that the code first logs the number 1 to the console. Then, it schedules two setTimeout() functions to be executed after a delay. The first setTimeout() function is scheduled to be executed after a delay of 0 milliseconds (immediately). The second setTimeout() function is scheduled to be executed after a delay of 100 milliseconds.

// The first setTimeout() function calls the printNumber() function with the argument 2. The printNumber() function logs the number 2 to the console.

// The second setTimeout() function calls the printNumber() function with the argument 3. The printNumber() function logs the number 3 to the console.

// Finally, the code logs the number 4 to the console.




