'use strict';

// Require app-data so that user/state info can be updated.
const app = require('../app-data');

// Set of functions to call on success/failure of AJAX requests.

// Sign In Success function
const signInSuccess = function(data) {
  console.log(data.user.email + " signed in successfully.");
  console.log(data);
  app.user = data.user;
  console.log(app);
};

// Sign Up Success function
const signUpSuccess = function(data) {
  console.log("Successfully signed up " + data.user.email);
};

// Sign Out Success function
const signOutSuccess = function() {
  app.user = null;
  $('#sign-out-button').off('click');
  console.log("User signed out successfully.");
  console.log(app);
};

// Change Password Success function
const changePWSuccess = function() {
  console.log("Successfully changed password!");
  $('#change-pw-modal').modal('hide');
};

// General Success and Failure Functions
const success = function(data) {
  console.log(data);
};

const failure = function(error) {
  console.log(app);
  console.error(error);
};


// Export functions as module
module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  signUpSuccess,
  changePWSuccess,
};
