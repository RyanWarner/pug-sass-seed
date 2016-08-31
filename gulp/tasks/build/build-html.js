'use strict';

var gulp       = require('gulp');
var minifyHTML = require('gulp-minify-html');

var path       = require('../../paths.js');



gulp.task('build-html', function() {
	return gulp.src(path.to.destination + '/**/*.html')
		.pipe(minifyHTML())
		.pipe(gulp.dest(path.to.destination));
});
