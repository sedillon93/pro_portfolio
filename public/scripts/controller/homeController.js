'use strict';

var portfolio = portfolio || {};

(function(module){
  let homeController = function(){
    $('.homeView').show();
    $('.fa-bars').on('click', function(){
      $('.navbar').children().toggle();
    })
  }
  portfolio.homeController = homeController;
})(portfolio)
