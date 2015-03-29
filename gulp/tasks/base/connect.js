var gulp        = require( 'gulp' );
var connect     = require( 'gulp-connect' );

var config      = require( '../../config' );



gulp.task( 'connect', function(  )
{
	connect.server(
	{
		root: config.destination,
		hostname: '0.0.0.0',
		livereload: true
	} );
} );
