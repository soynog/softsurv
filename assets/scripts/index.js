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
  surveyEvents.addHandlers();
  surveyEvents.refreshSurveys();
};

// Welcome/Sign In Page
const welcomePage = function() {
  console.log("Loading Welcome Page");

  display.clearContent();
  $('body').addClass('main-background');

  $('.splash-message').removeClass('hidden');

	display.renderModal();
  authEvents.addHandlers(userHomePage);
};

// Survey Response Page
const surveyResponsePage = function(surveyId) {
  console.log("Loading Survey Response Page");
  display.clearContent();
  $('.splash-message').addClass('hidden');
  surveyApi.showSurvey([surveyUi.showSurveySuccess, surveyEvents.addResponseHandlers], surveyUi.failure, surveyId);
};

// If there is an id passed as a parameter, go to the survey response page. Otherwise, proceed to the welcome page.
$(() => {
  let params = urlParams.getUrlParams();

  if (params && params.id) {
    surveyResponsePage(params.id);
  } else {
    welcomePage();
  }
});
