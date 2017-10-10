'use strict';

(function(){
  $('.navbar').children().hide();

  $('.fa-bars').on('click', function(){
    $('.navbar').children().toggle();
  })
})()
