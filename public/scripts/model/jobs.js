'use strict';

var portfolio = portfolio || {};
const jobs = [];

(function(module){
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

  Job.createJobs = function(jobsArray){
    jobsArray.forEach(function(jobData){
      let job = new Job(jobData)
      jobs.push(job);
    })

    jobs.forEach(function(job){
      $('.jobs').append(job.toHTML());
    });
  }

  Job.displayJobs = function(){
    if (!localStorage.jobData){
      $.getJSON('/data/jobs.json')
      .done(function(response){
        localStorage.setItem('jobData', JSON.stringify(response));
        if ($('.jobs').is(':empty')){
          Job.createJobs(response);
        }
      })
    }
    else if (localStorage.jobData){
      if ($('.jobs').is(':empty')){
        Job.createJobs(JSON.parse(localStorage.jobData));
      }
    }
  }
  module.Job = Job;
})(portfolio)
