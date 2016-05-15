'use strict';

const authEvents = require('./auth/events');
const display = require('./display');
const surveyEvents = require('./surveys/events');

$(() => {
  authEvents.addHandlers();
  display.renderNewSurveyForm();
  surveyEvents.addHandlers();
});
