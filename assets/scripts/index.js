'use strict';


const authEvents = require('./auth/events');

$(() => {
  authEvents.addHandlers();
});
