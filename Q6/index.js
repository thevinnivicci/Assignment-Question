//  What is callback hell? Explain different ways to solve callback hell with examples each.


// Callback hell is a phenomenon in JavaScript that occurs when you nest multiple callbacks inside of each other. This can make your code difficult to read and maintain, and it can also be error-prone.

// Here is an example of callback hell:

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
    // Nested callbacks!
    getUserData(userId)
      .then(getUserAvatar)
      .then((data) => {
        // The `data` object contains both the user data and the user's avatar.
        return data;
      });
  };
  
//   In this example, the getUserDataAndAvatar function calls the getUserData and getUserAvatar promises. When the getUserData promise is resolved, the getUserAvatar promise is called. When the getUserAvatar promise is resolved, the getUserDataAndAvatar function returns the result of the getUserAvatar promise.

// Here is an example of how to solve callback hell using promises:

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
    // Use promises to avoid callback hell!
    const promise = getUserData(userId)
      .then(getUserAvatar)
      .then((data) => {
        // The `data` object contains both the user data and the user's avatar.
        return data;
      });
  
    // Return the promise.
    return promise;
  };
  
//   Here is an example of how to solve callback hell using async/await:

async function getUserDataAndAvatar(userId) {
    // Use async/await to avoid callback hell!
    const userData = await getUserData(userId);
    const avatar = await getUserAvatar(userData);
  
    // The `data` object contains both the user data and the user's avatar.
    return { data };
  }
  