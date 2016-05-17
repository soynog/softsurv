'use strict';
const app = require('../app-data');
const display = require('../display');


// Set of functions to call on success/failure of AJAX requests.

// getUserSurveys success function
const getSurveysSuccess = function(data) {
  console.log("Surveys Loaded!");
  app.surveys = data.surveys;
  console.log(app);
  display.clearSurveys();
  display.showAllUserSurveys(app.surveys);
};

// answerSurvey success function
const respondSurveySuccess = function() {
  console.log('response success');
};

// showSurvey success function
const showSurveySuccess = function(data) {
  console.log("Survey Got!");
  console.log(data);
  display.clearSurveys();
  display.renderSurveyResponseForm({survey : data});
};

// createSurvey success function
const createSurveySuccess = function(data) {
  console.log("Survey Created!");
  console.log(data);
};

// deleteSurvey success function
const deleteSurveySuccess = function(){
  console.log('survey deleted');
  display.clearSurveys();
  // showSurveys();
};

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
  showSurveySuccess,
  respondSurveySuccess,
  deleteSurveySuccess
};
