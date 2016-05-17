'use strict';

const authEvents = require('./auth/events');
const display = require('./display');
const surveyEvents = require('./surveys/events');
const urlParams = require('./url-params');
const surveyApi = require('./surveys/api');
const surveyUi = require('./surveys/ui');
const app = require('./app-data');


// // Refresh User surveys
// const refreshUserSurveys = function() {
//   console.log("Refreshing User Surveys");
//   surveyEvents.showSurveys();
// };

// User Home Page
const userHomePage = function() {
  console.log("Loading User Home Page");
  display.renderNewSurveyForm();
  surveyEvents.addHandlers();
  surveyEvents.refreshSurveys();
};

// Welcome/Sign In Page
const welcomePage = function() {
  console.log("Loading Welcome Page");

  display.clearContent();
  $('body').addClass('main-background');

  // display.hideNavButtons('#sign-out-button','#change-pw-nav', '#my-survey-nav', '#sign-in-nav', '#sign-up-nav');
	display.renderModal();
  authEvents.addHandlers(userHomePage);
};

// Survey Response Thank You
const responseThankYouPage = function() {
  console.log("Loading Thank You Page");
};

// Survey Response Page
const surveyResponsePage = function(surveyId) {
  console.log("Loading Survey Response Page");
  $('body').addClass('link-background');
  $('.floating-add-button').addClass(".hidden");

  // Refactor to pass add handlers and go to thank you page as on-success functions for showSurvey
  surveyApi.showSurvey(surveyUi.showSurveySuccess, surveyUi.failure, surveyId);
};

$(() => {
  let params = urlParams.getUrlParams();

  if (params && params.id) {
    surveyResponsePage(params.id);
  } else {
    welcomePage();
  }
});
