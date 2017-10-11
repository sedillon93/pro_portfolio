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
  let fillProjectTemplate = Handlebars.compile(projectTemplateHTML);
  return fillProjectTemplate(this);
}

function createProjects(projectData){
  // console.log(projectData);
  projectData.forEach(function(project){
    var projectObj = new Project(project);
    projects.push(projectObj);
  })

  projects.forEach(function(project){
    $('.projects').append(project.toHtml());
  })
}

function displayProjects(){
  $.get('data/projects.json', function(response){
    // localStorage.setItem('rawProject', JSON.stringify(response));
    createProjects(response);
  })
}
