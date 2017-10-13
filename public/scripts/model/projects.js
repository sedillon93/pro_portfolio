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
  let projectTemplateHTML = $('#project_template').html();
  let fillProjectTemplate = Handlebars.compile(projectTemplateHTML);
  return fillProjectTemplate(this);
}

function createProjects(projectData){
  projectData.forEach(function(project){
    var projectObj = new Project(project);
    projects.push(projectObj);
  })

  projects.forEach(function(project){
    $('.projects').append(project.toHtml());
  })
}

function displayProjects(){
  if (!localStorage.projectData){
    $.getJSON('/data/projects.json')
      .done(function(response){
        localStorage.setItem('projectData', JSON.stringify(response));
        if ($('.projects').is(':empty')){
          createProjects(response)
        }
      });
  }
  else if ($('.projects').is(':empty')){
    createProjects(JSON.parse(localStorage.projectData));
  }
}
