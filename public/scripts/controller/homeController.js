'use strict';

var portfolio = portfolio || {};

(function(module){
  let homeController = {};
  homeController.showHome = function(){
    $('body div').hide();
    $('.clearfix').show();
    $('.homeView').show();
  }
  portfolio.homeController = homeController;
})(portfolio)
