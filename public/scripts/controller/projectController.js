'use strict';

var portfolio = portfolio || {};

(function(module){
  const projectController = {};
  projectController.showProjects = function(){
    $('body div').hide();
    displayProjects();
    $('.projectView').show();
  }
  portfolio.projectController = projectController;
})(portfolio);
