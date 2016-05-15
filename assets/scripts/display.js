// Helper Functions for Displaying Elements on the Page

'use strict';

// Renders User Auth Forms

// Renders New Survey Form
const renderNewSurveyForm = function() {
  let newSurveyForm = require('./templates/new-survey-form.handlebars');
  $('.survey-form-holder').append(newSurveyForm);
};


module.exports = {
  renderNewSurveyForm,
};
