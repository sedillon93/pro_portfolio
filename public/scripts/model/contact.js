'use strict';

var portfolio = portfolio || {};

(function(){
  // let Contacts = {};
  // Contacts.createContacts = function(){
  let contactHTML = $('#contact_template').html();
  let fillContactTemplate = Handlebars.compile(contactHTML);
  if ($('.contact').is(':empty')) {
    $('.contact').append(fillContactTemplate({email: 'sedillon93@gmail.com', phone: '215-806-8039'}));
  }
  // }
  // module.Contacts = Contacts;
})()
