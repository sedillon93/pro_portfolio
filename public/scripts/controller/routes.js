'use strict';

page('/home', portfolio.homeController);
page('/projects', portfolio.projectController.showProjects);
page('/jobs', portfolio.jobController.showJobs);

page();
