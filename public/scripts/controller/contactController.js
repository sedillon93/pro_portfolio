'use strict';

var portfolio = portfolio || {};

(function(module){
  let contactController = {};
  contactController.showContacts = function(){
    portfolio.Contacts.createContacts();
    $('body div').hide();
    $('.clearfix').show();
    $('.contactView').show();
  }
  module.contactController = contactController;
})(portfolio)
