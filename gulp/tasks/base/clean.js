var gulp        = require( 'gulp' );
var gutil       = require( 'gulp-util' );
var open        = require( 'gulp-open' );
var del         = require( 'del' );

var config = require( '../config' );


gulp.task( 'clean', function(  )
{
	cache.caches = {  };

	del.sync( config.destination );
} );