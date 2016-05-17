'use strict';

const authEvents = require('./auth/events');
const display = require('./display');
const surveyEvents = require('./surveys/events');
const urlParams = require('./url-params');
const surveyApi = require('./surveys/api');
const surveyUi = require('./surveys/ui');

// User Home Page
const userHomePage = function() {
  console.log("Loading User Home Page");
  display.renderNewSurveyForm();
  display.showAllUserSurveys();
  surveyEvents.addHandlers();
};

// Refresh User surveys
const refreshUserSurveys = function() {

};

// Welcome/Sign In Page
const welcomePage = function() {
  console.log("Loading Welcome Page");
  $('body').addClass('main-background');
	display.renderModal();
  authEvents.addHandlers(userHomePage, welcomePage);
};

// Survey Response Thank You
const responseThankYouPage = function() {
  console.log("Loading Thank You Page");
};

// Survey Response Page
const surveyResponsePage = function(surveyId) {
  console.log("Loading Survey Response Page");
  $('body').addClass('link-background');
  display.hideNavButtons('.floating-add-button', '#sign-in-nav', '#sign-up-nav', '#back-to-homepage');

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
