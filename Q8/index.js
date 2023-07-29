// Q8. In what order will the numbers 1-4 be logged to the console when the code below is executed? Why?

// (function() {

//     console.log(1); 

//     setTimeout(function(){console.log(2)}, 1000); 

//     setTimeout(function(){console.log(3)}, 0); 

//     console.log(4);

// })();

// The numbers 1-4 will be logged to the console in the following order:

// 1
// 3
// 4

// The reason for this is that the setTimeout() function schedules a callback function to be executed after a specified delay. In this case, the callback functions that are scheduled to be executed after a delay are logged to the console after the delay has elapsed.

// The first console.log() statement is executed immediately, because it is not inside of a setTimeout() function. The second setTimeout() function is scheduled to be executed after a delay of 1000 milliseconds (1 second). The third setTimeout() function is scheduled to be executed after a delay of 0 milliseconds (immediately).

// Therefore, the first console.log() statement will be executed, followed by the third setTimeout() function, followed by the second setTimeout() function. The order of the logs will be 1, 3, 4.



// Here is a breakdown of the code:

(function() {

    console.log(1); 

    // Schedule the callback function to be executed after 1000 milliseconds (1 second).
    setTimeout(function(){console.log(2)}, 1000); 

    // Schedule the callback function to be executed immediately.
    setTimeout(function(){console.log(3)}, 0); 

    console.log(4);

})();

