module.exports = function(grunt) {
  var fs = require('fs');
  var aws = (fs.existsSync('aws.json')) ? require('./aws.json') : {};

  require('grunt-set')(grunt, 'angular', {
    aws: aws,
    dev: 'src',
    dist: 'dist'
  });
};
