'use strict';

var portfolio = portfolio || {};

(function(module){
  let homeController = {};
  homeController.showHome = function(){
    $('body div').hide();
    $('.clearfix').show();
    $('.home').show();
  }
  portfolio.homeController = homeController;
})(portfolio)
