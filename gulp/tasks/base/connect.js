var gulp     = require( 'gulp' );
var connect  = require( 'gulp-connect' );

var path     = require( '../../paths.js' );



gulp.task( 'connect', function(  )
{
	connect.server(
	{
		root: path.to.destination,
		hostname: '0.0.0.0',
		livereload: true
	} );
} );
