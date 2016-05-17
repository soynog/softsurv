'use strict';

// Require necessary modules
const surveyApi = require('./api');
const surveyUi = require('./ui');
const getFormFields = require('../../../lib/get-form-fields');
const display = require('../display');

// Add deleteSurvey handlers
const addDeleteHandlers = function() {
  $('.delete-survey').on('click', function (event) {
    event.preventDefault();
    console.log('survey delete requested');
    event.preventDefault();
    let targetId = $(this).data("target");
    surveyApi.deleteSurvey([surveyUi.deleteSurveySuccess, refreshSurveys], surveyUi.failure, targetId);
  });
};

// Calls get surveys, clears old content, and displays them on success
const refreshSurveys = function() {
  surveyApi.getSurveys([surveyUi.getSurveysSuccess, addDeleteHandlers], surveyUi.failure);
};

// addHandlers function for Surveys Actions
// Each handler calls api function and passes ui functions as callbacks
const addHandlers = function() {
  console.log("Adding Survey Handlers");

  $('.show-all-survey-button').on('click', function (event) {
    console.log("Show all surveys button clicked");
    event.preventDefault();
    refreshSurveys();
  });

  // Do we need this?
  // // Add showSurvey handler
  // $('.single-survey-url').on('click', function (event) {
  //   console.log('showing one survery');
  //   event.preventDefault();
  //   surveyApi.showSurvey(surveyUi.showSurveySuccess, surveyUi.failure);
  // });

  $('.add-option-button').on('click', function(event) {
    event.preventDefault();
    console.log("Adding a survey option");
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
    surveyApi.createSurvey([surveyUi.createSurveySuccess, refreshSurveys], surveyUi.failure, data.survey.question, options);
  });

  // Do we need this?
  // // Add answerSurvey handler
  // $('.survey-response-form').on('submit', function(event){
  //   event.preventDefault();
  //   let data = getFormFields(this);
  //   surveyUi.showSurveys();
  //   console.log(data);
  // });
};

// Export Add Handlers Function
module.exports = {
  addHandlers,
  refreshSurveys,
  addDeleteHandlers
};
