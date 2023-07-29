// What is promise chaining? Explain with an example.

// Promise chaining is a technique in JavaScript that allows you to chain together multiple promises. This can be useful for performing multiple asynchronous operations in sequence.

const getUserData = (userId) => {
    return new Promise((resolve, reject) => {
      // Get the user data from the database.

      // Resolve the promise with the user data.
      resolve(userData);
    });
  };
  
  const getUserAvatar = (userData) => {
    return new Promise((resolve, reject) => {
      // Get the user's avatar from the server.
    
      // Resolve the promise with the user's avatar.
      resolve(avatar);
    });
  };
  
  const getUserDataAndAvatar = (userId) => {
    // Chain the `getUserData` and `getUserAvatar` promises.
    return getUserData(userId)
      .then(getUserAvatar)
      .then((data) => {
        // The `data` object contains both the user data and the user's avatar.
        return data;
      });
  };

//   In this example, the getUserDataAndAvatar function first calls the getUserData promise. When the getUserData promise is resolved, the getUserAvatar promise is called. When the getUserAvatar promise is resolved, the getUserDataAndAvatar function returns the result of the getUserAvatar promise.