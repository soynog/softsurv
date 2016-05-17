'use strict';

// Require app-data to get user token, etc.
const app = require('../app-data');

// Functions for making API calls. Each function should make an AJAX call and take a success and failure callback.

// getUserSurveys function - GET
// shows all surveys associated with a given user
const getSurveys = function(success, failure) {
  console.log("Getting User Surveys");
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
const showSurvey = function(success, failure, id) {
  let url = app.api + '/surveys/' + id;
  $.ajax({
    method: 'GET',
    url
  }).done(success)
  .fail(failure);
};

// createSurvey function - POST
// user creates a new survey with name, questions, etc.
const createSurvey = function(success, failure, question, options) {
  console.log("Creating Survey");
  let url = app.api + '/surveys';
  let optionsBundle = [];
  for (let i = 0; i < options.length; i++){
    optionsBundle.push(
      {
        text:options[i],
        votes: 0
      }
    );
  }
  console.log(optionsBundle);
  let data = {
    survey: {
      question,
      options : optionsBundle,
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
const respondSurvey = function(success, failure, id, data) {
  console.log("patch survey");
  let url = app.api + '/respond/' + id;
  let patchData = { index : data.surveyOptions };
  console.log(id);
  console.log(patchData);
  $.ajax({
    method: 'PATCH',
    url,
    data: patchData,
  }).done(success)
  .fail(failure);
};



// deleteSurvey function - DELETE
  const deleteSurvey = function(success, failure, id) {
    console.log("deleting survey");
    let url = app.api + '/surveys/' + id;
    $.ajax({
      method: 'DELETE',
      url,
      headers: {
        Authorization: 'Token token=' + app.user.token,
      }
    }).done(success)
    .fail(failure);
  };

// Export functions as module
module.exports = {
  getSurveys,
  showSurvey,
  createSurvey,
  deleteSurvey,
  respondSurvey,
};
