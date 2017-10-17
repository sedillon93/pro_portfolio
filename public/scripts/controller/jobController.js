'use strict';
var portfolio = portfolio || {};

(function(){
  const jobController = {};
  jobController.showJobs = function(){
    $('body div').hide();
    displayJobs();
    $('.jobView').show();
  }
  portfolio.jobController = jobController;
})(portfolio)
