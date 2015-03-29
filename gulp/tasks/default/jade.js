var gulp        = require( 'gulp' );
var gutil       = require( 'gulp-util' );

var flatten     = require( 'gulp-flatten' );
var connect     = require( 'gulp-connect' );
var cache       = require( 'gulp-cached' );

var jade        = require( 'gulp-jade' );

var config    = require( '../../config.js' );

// Jade.

gulp.task( 'jade', function(  )
{
	return gulp.src( config.jade.pages )
		.pipe( jade(  ) )
		.on( 'error', config.errorHandler )
		.pipe( flatten(  ) )
		.pipe( gulp.dest( config.destination ) )
		.pipe( connect.reload(  ) );
} );
