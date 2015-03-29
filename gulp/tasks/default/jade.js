var gulp    = require( 'gulp' );
var gutil   = require( 'gulp-util' );

var flatten = require( 'gulp-flatten' );
var connect = require( 'gulp-connect' );
var cache   = require( 'gulp-cached' );

var jade    = require( 'gulp-jade' );

var path    = require( '../../paths.js' );
var error   = require( '../../error-handler.js' );

// Jade.

gulp.task( 'jade', function(  )
{
	return gulp.src( path.to.jade.pages )
		.pipe( jade(  ) )
		.on( 'error', error.handler )
		.pipe( flatten(  ) )
		.pipe( gulp.dest( path.to.jade.destination ) )
		.pipe( connect.reload(  ) );
} );
