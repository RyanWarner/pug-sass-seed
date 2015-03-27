// Assets.

var gulp      = require( 'gulp' );
var connect   = require( 'connect' );


gulp.task( 'images', function(  )
{
	return gulp.src( IMAGE_FILES )
		.pipe( gulp.dest( OUTPUT_DIR + '/images/' ) )
		.pipe( connect.reload(  ) );
} );

gulp.task( 'favicon', function(  )
{
	return gulp.src( FAVICON )
		.pipe( gulp.dest( OUTPUT_DIR ) )
		.pipe( connect.reload(  ) );
} );