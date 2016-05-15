'use strict';

// Require necessary modules
const surveyApi = require('./api');
const surveyUi = require('./ui');
const getFormFields = require('../../../lib/get-form-fields');

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

  $('#new-survey-form').on('submit', function (event) {
    event.preventDefault();
    console.log("create request");
    let data = getFormFields(this);
    console.log(data);
    console.log(data.survey.question);
    console.log(data.survey.options);
    surveyApi.createSurvey(surveyUi.createSurveySuccess, surveyUi.failure, data.survey.question, data.survey.options);
  });

  // Add answerSurvey handler

  // Add deleteSurvey handler
};

// Export Add Handlers Function
module.exports = {
  addHandlers,
};
