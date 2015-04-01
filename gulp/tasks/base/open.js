var gulp   = require( 'gulp' );
var open   = require( 'gulp-open' );

var path   = require( '../../paths.js' );



gulp.task( 'open', function(  )
{
	var options = 
	{
		app: 'google chrome'
		//app: 'safari'
	};

	return gulp.src( path.to.destination + 'index.html' )
		.pipe( open( 'http://localhost:8080', options ) );
} );


