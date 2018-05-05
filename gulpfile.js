'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');
var requireDir  = require('require-dir');

// Require all tasks.
requireDir('./gulp/tasks', { recurse: true });


// Commonly used tasks defined here.
gulp.task('default', function() {
	runSequence(
		'clean',
		[
			'pug',
			'sass',
			'scripts',
			'images',
			'favicon'
		],
		'watch',
		'connect'
	);
});

// Build task.
gulp.task('build', function() {
	runSequence(
		'clean',
		[
			'build-images',
			'build-scripts',
			'build-css',
			'build-fonts',
			'pug'
		],
		'build-html',
		'connect'
	);
});
