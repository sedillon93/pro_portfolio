'use strict';

function Project(title, description, languages, dates, link){
  this.title = title,
  this.description = description,
  this.languages = languages,
  this.dates = dates,
  this.link = link
}

let projectTemplateHTML = $('#projectTemplate').html();
let compiledProjectTemplate = Handlebars.compile(projectTemplateHTML);
compiledProjectTemplate
