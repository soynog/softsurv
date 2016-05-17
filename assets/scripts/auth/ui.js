'use strict';

// Require app-data so that user/state info can be updated.
const app = require('../app-data');
const display =require('../display');
// Set of functions to call on success/failure of AJAX requests.

// Sign In Success function
const signInSuccess = function(data) {
  console.log(data.user.email + " signed in successfully.");
  $('.sign-in-error').hide();
  $('.floating-add-button').show();
  console.log(data);
  app.user = data.user;
  console.log(app);
  $('.sign-in-modal').modal('toggle');
  $('.floating-add-button').removeClass('hidden');
  display.hideNavButtons('#sign-up-nav', '#sign-in-nav', null, '#my-survey-nav', '#change-pw-nav', '#sign-out-button');
};

// Sign Up Success function
const signUpSuccess = function(data) {
  console.log("Successfully signed up " + data.user.email);
  $('.sign-up-error').hide();
  $('.sign-up-modal').modal('toggle');

};

// Sign Out Success function
const signOutSuccess = function() {
  app.user = null;
  app.surveys = null;
  $('#sign-out-button').on('click');
  console.log("User signed out successfully.");
  console.log(app);
  display.clearSurveys();
  $('.floating-add-button').addClass('hidden');
  display.hideNavButtons('#sign-out-button','#change-pw-nav', '#my-survey-nav', '#sign-in-nav', '#sign-up-nav');
};

// Change Password Success function
const changePWSuccess = function() {
  console.log("Successfully changed password!");
  $('#change-pw-modal').modal('hide');
  $('.change-pw-error').hide();
  $('.change-pw-modal').modal('toggle');
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
  $('.sign-up-error').show();
};

const signInFailure = function(error) {
  console.log(error);
  $('.sign-in-error').show();
};

const changePWFailure = function(error) {
  console.log(error);
  $('.change-pw-error').show();
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
