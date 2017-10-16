'use strict';

(function(){
  let showJobs = function(){
    $('body div').hide();
    displayJobs();
    $('.jobView').show();
  }
  return showJobs;
})()
