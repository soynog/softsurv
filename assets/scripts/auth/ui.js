'use strict';

// Require app-data so that user/state info can be updated.
const app = require('../app-data');
const display =require('../display');
// Set of functions to call on success/failure of AJAX requests.

// Sign In Success function
const signInSuccess = function(data) {
  console.log(data.user.email + " signed in successfully.");
  console.log(data);
  app.user = data.user;
  console.log(app);
  display.onSignIn();
};

// Sign Up Success function
const signUpSuccess = function(data) {
  console.log("Successfully signed up " + data.user.email);
  $('.sign-up-error').addClass('hidden');
  $('.sign-up-modal').modal('toggle');
};

// Sign Out Success function
const signOutSuccess = function() {
  app.user = null;
  app.surveys = null;
  console.log("User signed out successfully.");
  console.log(app);
  display.onSignOut();
};

// Change Password Success function
const changePWSuccess = function() {
  console.log("Successfully changed password!");
  $('.change-pw-error').addClass('hidden');
  $('.change-pw-modal').modal('hide');
};

// General Success and Failure Functions
const success = function(data) {
  console.log(data);
};

const failure = function(error) {
  console.log(app);
  console.error(error);
};

// Failure Functions for User Crud. Shows/Hides error messages
const signUpFailure = function(error) {
  console.log(error);
  $('.sign-up-error').removeClass('hidden');
};

const signInFailure = function(error) {
  console.log(error);
  $('.sign-in-error').removeClass('hidden');
};

const changePWFailure = function(error) {
  console.log(error);
  $('.change-pw-error').removeClass('hidden');
};


// Export functions as module
module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  signUpSuccess,
  changePWSuccess,
  signUpFailure,
  signInFailure,
  changePWFailure
};
