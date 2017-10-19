'use strict';

var portfolio = portfolio || {};

(function(module){
  let homeController = function(){
    $('body div').hide();
    $('.clearfix').show();
    $('.homeView').show();
  }
  portfolio.homeController = homeController;
})(portfolio)
