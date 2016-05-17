'use strict';

const authEvents = require('./auth/events');
const display = require('./display');
const surveyEvents = require('./surveys/events');
const urlParams = require('./url-params');
const surveyApi = require('./surveys/api');
const surveyUi = require('./surveys/ui');

$(() => {
  let params = urlParams.getUrlParams();
  if (params) {

    $('body').addClass('link-background');
    $('.floating-add-button').addClass(".hidden");

    console.log("Grabbing params");
    console.log(params);
    surveyApi.showSurvey(surveyUi.showSurveySuccess,surveyUi.failure,params.id);
  } //else {
  // Wrap this in an else statement after testing
  $('body').addClass('main-background');
    display.renderModal();
    console.log("Ain't no paramters heah");
    authEvents.addHandlers();
    display.renderNewSurveyForm();
    display.showAllUserSurveys();
    surveyEvents.addHandlers();



  //}
});
