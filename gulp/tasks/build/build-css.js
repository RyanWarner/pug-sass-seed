'use strict';

var gulp     = require('gulp');
var connect  = require('gulp-connect');
var sass     = require('gulp-sass');
var prefix   = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var path     = require('../../paths.js');



gulp.task('build-css', function() {
	return gulp.src(path.to.sass.main)
		.pipe(sass())
		.pipe(prefix('last 2 versions', { cascade: true }))
		.pipe(cleanCSS())
		.pipe(gulp.dest(path.to.sass.destination))
		.pipe(connect.reload());
});
