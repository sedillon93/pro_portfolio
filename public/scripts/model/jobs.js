'use strict';

function Job(jobData){
  this.title: jobData.title,
  this.employer: jobData.employer,
  this.description: jobData.description,
  this.dates: jobData.dates
}

Job.prototype.toHTML(){
  let jobHTML = $('#job_template').html();
  let fillJobTemplate = Handlebars.compile(jobHTMl);
  return fillJobTemplate(this);
}

function createJobs(){

}
