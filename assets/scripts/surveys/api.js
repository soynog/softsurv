'use strict';

// Require app-data to get user token, etc.
const app = require('../app-data');

// Functions for making API calls. Each function should make an AJAX call and take a success and failure callback.

// getUserSurveys function - GET
// shows all surveys associated with a given user
const getSurveys = function(success, failure) {
  let url = app.api + '/surveys';
  $.ajax({
    method: 'GET',
    url,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    }
  }).done(success)
  .fail(failure);
};

// showSurvey function - GET
// get the info for a single survey based on its id -- for answering a survey
// is this necessary? Or will it happen automatically when someone enters the url into the browser?

// createSurvey function - POST
// user creates a new survey with name, questions, etc.
const createSurvey = function(success, failure, question, options) {
  console.log("Creating Survey");
  let url = app.api + '/surveys';
  let data = {
    survey: {
      question,
      options,
    }
  };
  console.log(data);
  $.ajax({
    method: 'POST',
    url,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data
  }).done(success)
  .fail(failure);
};

// answerSurvey function - PATCH
// no authentication -- increments counter in survey based on question answer

// deleteSurvey function - DELETE
// delete survey

// Export functions as module
module.exports = {
  getSurveys,
  createSurvey,
};
