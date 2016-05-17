// Helper Functions for Displaying Elements on the Page

'use strict';

// Renders User Auth Forms

// Renders New Survey Form
const renderNewSurveyForm = function() {
  console.log('render new survey form');
  let newSurveyForm = require('./templates/new-survey-form.handlebars');
  $('.survey-form-holder').append(newSurveyForm);
};

// Renders All User's Surveys
const showAllUserSurveys = function(surveys) {
  console.log('Showing All User Surveys');
  let showUserSurveys = require('./templates/show-user-surveys.handlebars');
  $('.show-all-user-surveys').append(showUserSurveys({
    surveys : surveys
  }));
};

// Clears the surveys from the page
const clearSurveys = function() {
  console.log("Clearing Survey List");
  $('.show-all-user-surveys').html('');
};

// Clears the page of all content
const clearContent = function() {
  console.log("Clearing Page Content");
  clearSurveys();
};

// Renders Survey Response Form
const renderSurveyResponseForm = function(survey) {
  console.log('Rendering Survey Response Form');
  let surveyResponse = require('./templates/survey-response-form.handlebars');
  $('.survey-response-form-holder').append(surveyResponse({survey: survey.survey}));
};

// Adds an additional survey option field
const addSurveyOption = function() {
  console.log('Rendering new survey button');
  let surveyOptionField = require('./templates/survey-option-field.handlebars');
  $('.survey-options-container').append(surveyOptionField);
};

const renderModal = function() {
  console.log('rendering modal form');
  let renderModal = require('./templates/modal-template.handlebars');
  $('.modal-body-container').append(renderModal());
};

const hideNavButtons = function(hide1, hide2, hide3, appear1, appear2, appear3) {
  $(hide1).addClass('hidden');
  $(hide2).addClass('hidden');
  $(hide3).addClass('hidden');
  $(appear1).removeClass('hidden');
  $(appear2).removeClass('hidden');
  $(appear3).removeClass('hidden');
};

module.exports = {
  renderNewSurveyForm,
  showAllUserSurveys,
  renderSurveyResponseForm,
  addSurveyOption,
  renderModal,
  hideNavButtons,
  clearSurveys,
  clearContent,
};
