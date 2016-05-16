'use strict';

// Require necessary modules
const surveyApi = require('./api');
const surveyUi = require('./ui');
const getFormFields = require('../../../lib/get-form-fields');
const display = require('../display');

// addHandlers function for Surveys Actions
// Each handler calls api function and passes ui functions as callbacks
const addHandlers = function() {
  console.log("Adding Survey Handlers");

  $('.show-all-survey-button').on('click', function (event) {
    console.log("show all");
    event.preventDefault();
    surveyApi.getSurveys(surveyUi.getSurveysSuccess, surveyUi.failure);
  });

  // Add showSurvey handler
  $('.single-survey-url').on('click', function (event) {
    console.log('showing one survery');
    event.preventDefault();
    surveyApi.showSurvey(surveyUi.showSurveySuccess, surveyUi.failure);
  });

  $('.add-survey-option').on('click', function(event) {
    console.log("Adding a survey option");
    event.preventDefault();
    display.addSurveyOption();
  });

  $('#new-survey-form').on('submit', function (event) {
    event.preventDefault();
    console.log("create request");
    let data = getFormFields(this);
    console.log(data);
    console.log(data.survey.question);
    let options = data.survey.options;
    console.log(options);
    surveyApi.createSurvey(surveyUi.createSurveySuccess, surveyUi.failure, data.survey.question, options);
  });

  // Add answerSurvey handler

  // Add deleteSurvey handler
//   $('.delete-survey').on('click', function (event) {
//     event.preventDefault();
//     console.log('survey delete requested');
//
//   });
};

// Export Add Handlers Function
module.exports = {
  addHandlers,
};
