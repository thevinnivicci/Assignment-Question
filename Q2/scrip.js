// Explain the output of the above-given code and explain why?


for (var i = 0; i < 5; i++) {

  setTimeout(() => console.log(i), 100)

}

// The output of the above code is:
// 0
// 1
// 2
// 3
// 4
//The reason for this is that the setTimeout() function schedules a callback function to be executed after a specified delay. In this case, the callback function is console.log(i), which will log the value of the variable i to the console. The for loop iterates 5 times, and each time it iterates, it schedules the console.log(i) callback function to be executed after a delay of 100 milliseconds. Therefore, the output of the code is the values 0, 1, 2, 3, and 4, each logged 100 milliseconds after the previous one
