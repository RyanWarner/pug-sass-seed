'use strict';

var gulp     = require('gulp');
var connect  = require('gulp-connect');
var eslint   = require('gulp-eslint');

var path     = require('../../paths.js');


// Scripts.

gulp.task('eslint', function() {
	return gulp.src(path.to.scripts.source)
		.pipe(eslint())
		.pipe(eslint.format());
});

gulp.task('scripts', ['eslint'], function() {
	return gulp.src(path.to.scripts.source)
		.pipe(gulp.dest(path.to.scripts.destination))
		.pipe(connect.reload());
});
