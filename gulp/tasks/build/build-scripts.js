'use strict';

var gulp    = require('gulp');
var uglify  = require('gulp-uglify');
var path    = require('../../paths.js');



gulp.task('build-scripts', function() {
	return gulp.src(path.to.scripts.source)
		.pipe(uglify())
		.pipe(gulp.dest(path.to.destination));
});
