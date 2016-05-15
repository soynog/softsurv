'use strict';

// Require app-data so that user/state info can be updated.

// Set of functions to call on success/failure of AJAX requests.

// getUserSurveys success function
const getSurveysSuccess = function(data) {
  console.log("Surveys Loaded!");
  app.surveys = data.surveys;
  console.log(app);
};

// showSurvey success function

// createSurvey success function
const createSurveySuccess = function(data) {
  console.log("Survey Created!");
  console.log(data);
};

// answerSurvey success function

// deleteSurvey success function

// General Success and Failure Functions
const success = function(data) {
  console.log(data);
};

const failure = function(error) {
  console.error(error);
};

// Export functions as module
module.exports = {
  failure,
  success,
  createSurveySuccess,
  getSurveysSuccess,
};
