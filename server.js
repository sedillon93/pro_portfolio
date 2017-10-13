'use strict';

const EXPRESS = require('express');
const PARSER = require('body-parser');

const PORT = process.env.PORT || 3000;
const APP = EXPRESS();

APP.use(EXPRESS.static('public'));

APP.get('/', function(request, response){
  response.sendFile('index.html', {root: './public'});
})

APP.get('/projects', function(request, response){
  response.sendFile('projects.json', {root: './public/data'})
})

APP.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})
