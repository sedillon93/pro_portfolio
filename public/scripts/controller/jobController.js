'use strict';
var portfolio = portfolio || {};

(function(module){
  const jobController = {};
  jobController.showJobs = function(){
    $('body div').hide();
    displayJobs();
    $('.jobView').show();
  }
  module.jobController = jobController;
})(portfolio)
