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

const clearSplash = function(){

};
// Clears the surveys from the page
const clearSurveys = function() {
  console.log("Clearing Survey List");
  $('.show-all-user-surveys').html('');
};

// Clear Survey Response form
const clearResponseForm = function() {
  console.log("Clearing Survey Response Form");
  $('.survey-response-form-holder').empty();
};

// Clears the page of all content
const clearContent = function() {
  console.log("Clearing Page Content");
  clearSurveys();
  $('.survey-form-holder').html('');
};

// Renders Survey Response Form
const renderSurveyResponseForm = function(survey) {
  $('#sign-up-nav').addClass('hidden');
  $('#sign-in-nav').addClass('hidden');
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

const hideElements = function(eltArray) {
  eltArray.forEach((elt) => {
    $(elt).addClass('hidden');
  });
};

const showElements = function(eltArray) {
  eltArray.forEach((elt) => {
    $(elt).removeClass('hidden');
  });
};

// const hideNavButtons = function(hide1, hide2, hide3, appear1, appear2, appear3) {
//   $(hide1).addClass('hidden');
//   $(hide2).addClass('hidden');
//   $(hide3).addClass('hidden');
//   $(appear1).removeClass('hidden');
//   $(appear2).removeClass('hidden');
//   $(appear3).removeClass('hidden');
// };

// Display changes on sign in
const onSignIn = function() {
  $('.sign-in-error').addClass('hidden');
  $('.sign-in-modal').modal('toggle');
  $('.floating-add-button').removeClass('hidden');
  hideElements(['#sign-up-nav', '#sign-in-nav', '.splash-message']);
  showElements(['#my-survey-nav', '#change-pw-nav', '#sign-out-button']);
};

// Display changes on sign out
const onSignOut = function() {
  clearContent();
  $('.floating-add-button').addClass('hidden');
  hideElements(['#sign-out-button','#change-pw-nav', '#my-survey-nav']);
  showElements(['#sign-in-nav', '#sign-up-nav', '.splash-message']);
};

const showSurveyPage = function() {
  $('body').addClass('link-background');
  $('.floating-add-button').addClass(".hidden");
  clearSurveys();
};

// Display thank you message on survey Response
const onSurveyResponse = function() {
  clearResponseForm();
  let thankYou = require('./templates/survey-thank-you.handlebars');
  $('.survey-response-form-holder').append(thankYou);
};

module.exports = {
  renderNewSurveyForm,
  showAllUserSurveys,
  renderSurveyResponseForm,
  addSurveyOption,
  renderModal,
  clearSurveys,
  clearContent,
  onSignIn,
  onSignOut,
  onSurveyResponse,
  showSurveyPage,
  clearSplash
};
