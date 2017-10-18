'use strict';
var portfolio = portfolio || {};

(function(module){
  const jobController = {};
  jobController.showJobs = function(){
    $('body div').hide();
    portfolio.Job.displayJobs();
    $('.clearfix').show();
    $('.jobView').show();
  }
  module.jobController = jobController;
})(portfolio)
