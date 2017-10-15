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
  let fillJobTemplate = Handlebars.compile(jobHTML);
  return fillJobTemplate(this);
}

function createJobs(jobsArray){
  jobsArray.forEach(function(jobData){
    let job = new Job(jobData)
    jobs.push(job);
  })

  jobs.forEach(function(job){
    $('.jobs').append(job.toHTML());
  });
}

function displayJobs(){
  if (!localStorage.jobData){
    $.getJSON('/data/jobs.json')
      .done(function(response){
        localStorage.setItem('jobData', JSON.stringify(response));
        if ($('.jobs').is(':empty')){
          createJobs(response);
        }
      })
  }
  else if (localStorage.jobData){
    if ($('.jobs').is(':empty')){
      createJobs(JSON.parse(localStorage.jobData));
    }
  }
  //if there is something in localStorage but not in the DOM, get the data from localStorage
}
