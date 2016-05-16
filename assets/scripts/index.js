'use strict';

const authEvents = require('./auth/events');
const display = require('./display');
const surveyEvents = require('./surveys/events');
const urlParams = require('./url-params');

$(() => {
  let params = urlParams.getUrlParams();
  if (params) {
    console.log("Grabbing params");
    console.log(params);
  } else {
    console.log("Ain't no paramters heah");
    authEvents.addHandlers();
    display.renderNewSurveyForm();
    display.showAllUserSurveys();
    surveyEvents.addHandlers();
  }
});
