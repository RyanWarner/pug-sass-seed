// Assets.

var gulp      = require( 'gulp' );
var gutil     = require( 'gulp-util' );

var config    = require( '../../../config.js' );

var connect   = require( 'gulp-connect' );


gulp.task( 'images', function(  )
{
	return gulp.src( config.images )
		.pipe( gulp.dest( config.destination + '/images/' ) )
		.pipe( connect.reload(  ) );
} );

gulp.task( 'favicon', function(  )
{
	return gulp.src( config.favicon )
		.pipe( gulp.dest( config.destination ) )
		.pipe( connect.reload(  ) );
} );