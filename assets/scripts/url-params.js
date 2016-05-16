'use strict';

// Helper Functions for encoding and grabbing parameter values from encoded URL

// Gets the current url, splits the paramters off the end and returns an object with each parameter and value as key:value pairs
const getUrlParams = function() {
  console.log("Getting Parameters from URL");
  let url = location.href;
  let splitUrl = url.split('?');
  if (splitUrl.length > 1) {
    let paramStrings = splitUrl[1].split('&').map((el) => el.split('='));
    let params = {};
    paramStrings.forEach((p) => params[p[0]] = p[1]);
    console.log(params);
    return params;
  } else {
    return null;
  }
};

module.exports = {
  getUrlParams,
};
