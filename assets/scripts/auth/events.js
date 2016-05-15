'use strict';

// Require necessary modules
const getFormFields = require('../../../lib/get-form-fields'); // path from root--should work?
const authApi = require('./api');
const authUi = require('./ui');

// addHandlers function for User Auth Actions
// Each handler calls api function and passes ui functions as callbacks
const addHandlers = function() {
  console.log("Adding Auth Handlers");

  // Add sign-up handler
  $('#sign-up-form').on('submit', function (event) {
    event.preventDefault();
    console.log("Sign Up Requested");
    let data = getFormFields(this);
    console.log(data);
    authApi.signUp(authUi.signUpSuccess, authUi.failure, data);
  });

  // Add sign-in handler
  $('#sign-in-form').on('submit', function (event) {
    event.preventDefault();
    console.log("Sign In Requested");
    let data = getFormFields(this);
    console.log(data);
    authApi.signIn(authUi.signInSuccess, authUi.failure, data);
  });

  // Add sign-out handler
  $('#sign-out-button').on('click', function (event) {
    console.log("Sign Out Button Clicked");
    event.preventDefault();
    authApi.signOut(authUi.signOutSuccess, authUi.failure);
  });

  // Add change password handler
  $('#change-pw-form').on('submit', function (event) {
    console.log("Change Password Requested");
    event.preventDefault();
    let data = getFormFields(this);
    authApi.changePW(authUi.changePWSuccess, authUi.failure, data);
  });
};

// Export Add Handlers Function
module.exports = {
  addHandlers,
};
