'use strict';

const projects = [];

function Project(projectData){
  this.title = projectData.title,
  this.description = projectData.description,
  this.languages = projectData.languages,
  this.dates = projectData.dates,
  this.link = projectData.link
}

Project.prototype.toHtml = function(){
  let projectTemplateHTML = $('#projectTemplate').html();
  let compiledProjectTemplate = Handlebars.compile(projectTemplateHTML);
  let filledProjectTemplate = compiledProjectTemplate(this);
}

function createProjects(projectData){
  projectData.forEach(function(project){
    var project = new Project(project);
    projects.push(project);
  })
}
