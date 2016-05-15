'use strict';

const authEvents = require('./auth/events');
const display = require('./display');

$(() => {
  authEvents.addHandlers();
  display.renderNewSurveyForm();
});
