var gulp   = require( 'gulp' );
var del    = require( 'del' );
var cache  = require( 'gulp-cached' );

var path   = require( '../../paths.js' );



gulp.task( 'clean', function(  )
{
	cache.caches = {  };

	del.sync( path.to.destination );
} );