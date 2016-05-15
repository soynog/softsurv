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

// Sign Out Function - DELETE

// Change PW Function - PATCH

// Export functions as module
