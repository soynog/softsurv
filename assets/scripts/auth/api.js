'use strict';

// Require app-data to get user token, etc.
const app = require('../app-data');

// Functions for making API calls. Each function should make an AJAX call and take a success and failure callback.

// Sign Up Function - POST
const signUp = (success, failure, data) => {
  console.log("Requesting Sign-up");
  console.log(data);
  $.ajax({
    method: 'POST',
    url: app.api + '/sign-up',
    data,
  }).done(success)
  .fail(failure);
};

// Sign In Function - POST
const signIn = (success, failure, data) => {
  console.log("Requesting Sign-in");
  console.log(data);
  $.ajax({
    method: 'POST',
    url: app.api + '/sign-in',
    data,
  }).done(success)
  .fail(failure);
};

// Sign Out Function - DELETE
const signOut = (success, failure) => {
  console.log("Requesting Sign-out");
  console.log(app);
  if(app.user) {
    $.ajax({
      method: 'DELETE',
      url: app.api + '/sign-out/' + app.user.id,
      headers: {
        Authorization: 'Token token=' + app.user.token,
      }
    }).done(success)
    .fail(failure);
  }
};

// Change PW Function - PATCH
const changePW = (success, failure, data) => {
  console.log("Requesting Password Change");
  console.log(data);
  if(app.user) {
    $.ajax({
      method: 'PATCH',
      url: app.api + '/change-password/' + app.user.id,
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
      data,
    }).done(success)
    .fail(failure);
  }
};

// Export functions as module
module.exports = {
  signUp,
  signIn,
  signOut,
  changePW,
};
