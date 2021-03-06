'use strict';

var gulp   = require('gulp');
var path   = require('../../paths.js');



gulp.task('watch', function() {
	gulp.watch(path.to.pug.source, ['pug']);
	gulp.watch(path.to.sass.source, ['sass']);
	gulp.watch(path.to.scripts.source, ['scripts']);
	gulp.watch(path.to.images.source, ['images']);
});
