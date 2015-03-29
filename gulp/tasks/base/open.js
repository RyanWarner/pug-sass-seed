var gulp        = require( 'gulp' );
var open        = require( 'gulp-open' );

var config      = require( '../../config' );



gulp.task( 'open', function(  )
{
	console.log( config.destination + 'index.html' );
	var options = 
	{
		app: 'google chrome'
		//app: 'safari'
	};

	return gulp.src( config.destination + 'index.html' )
		.pipe( open( 'http://localhost:8080', options ) );
} );


