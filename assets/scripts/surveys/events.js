'use strict';

// Require necessary modules
const surveyApi = require('./api');
const surveyUi = require('./ui');
const getFormFields = require('../../../lib/get-form-fields');
const display = require('../display');
const urlParams = require('../url-params');

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

//New survey modal
// $('#floating-action-button').on('click', function(event) {
//   event.preventDefault();
//   $('#new-survey-modal').modal('show');
// });

// addHandlers function for Surveys Actions
// Each handler calls api function and passes ui functions as callbacks
const addHandlers = function() {
  console.log("Adding Survey Handlers");

  $('.show-all-survey-button').on('click', function (event) {
    console.log("Show all surveys button clicked");
    event.preventDefault();
    refreshSurveys();
  });

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
    $('.new-survey-modal').modal('hide');
  });
};

// Add Handlers for Survey Response form
const addResponseHandlers = function() {
  $('.survey-response-form').on('submit', function(event){
    console.log("Adding Survey Response Handlers");
    event.preventDefault();
    let id = urlParams.getUrlParams().id;
    let data = getFormFields(this);
    console.log(data);
    surveyApi.respondSurvey(surveyUi.respondSurveySuccess, surveyUi.failure, id, data);
  });
};

// Export Add Handlers Function
module.exports = {
  addHandlers,
  refreshSurveys,
  addDeleteHandlers,
  addResponseHandlers
};
