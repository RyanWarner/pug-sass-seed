'use strict';

var gulp    = require('gulp');
var flatten = require('gulp-flatten');
var connect = require('gulp-connect');
var pug     = require('gulp-pug');

var path    = require('../../paths.js');
var error   = require('../../error-handler.js');



// Compile Pug pages, flatten the path,
// then put the files in the build folder.

gulp.task('pug', function() {
	return gulp.src(path.to.pug.pages)
		.pipe(pug())
		.on('error', error.handler)
		.pipe(flatten())
		.pipe(gulp.dest(path.to.pug.destination))
		.pipe(connect.reload());
});
