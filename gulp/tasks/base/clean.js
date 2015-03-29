var gulp        = require( 'gulp' );
var del         = require( 'del' );
var cache       = require( 'gulp-cached' );

var config      = require( '../../config' );



gulp.task( 'clean', function(  )
{
	cache.caches = {  };

	del.sync( config.destination );
} );