'use strict';

const jobs = [];

function Job(jobData){
  this.title = jobData.title,
  this.employer = jobData.employer,
  this.description = jobData.description,
  this.dates = jobData.dates
}

Job.prototype.toHTML = function(){
  let jobHTML = $('#job_template').html();
  let fillJobTemplate = Handlebars.compile(jobHTMl);
  return fillJobTemplate(this);
}

function createJobs(jobsArray){
  jobData.forEach(function(jobData){
    let job = new Jobs(jobData)
    jobs.push(job);
  })

  jobs.forEach(function(job){
    $('.jobs').append(job.toHTML());
  });
}

function displayJobs(){

}
