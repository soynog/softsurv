'use strict';

// Require necessary modules
const docsApi = require('./api');
const docsUi = require('./ui');

// addHandlers function for Surveys Actions
// Each handler calls api function and passes ui functions as callbacks
const addHandlers = function() {
  console.log("Adding Survey Handlers");

  // Add getUserSurveys handler

  // Add showSurvey handler

  // Add createSurvey handler

  // Add answerSurvey handler

  // Add deleteSurvey handler
};

// Export Add Handlers Function
module.exports = {
  addHandlers,
};
