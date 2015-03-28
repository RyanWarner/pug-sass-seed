var gulp        = require( 'gulp' );
var gutil       = require( 'gulp-util' );

var connect     = require( 'gulp-connect' );
var cache       = require( 'gulp-cached' );

var eslint      = require( 'gulp-eslint' );

var pathTo      = require( '../../../config.js' );


// Scripts.

gulp.task( 'eslint', function(  )
{
	return gulp.src( pathTo.scripts.all )
		.pipe( eslint(  ) )
		.pipe( eslint.format(  ) );
} );

gulp.task( 'scripts', [ 'eslint' ], function(  )
{
	return gulp.src( pathTo.scripts.all )
		.pipe( gulp.dest( pathTo.scripts.destination ) )
		.pipe( connect.reload(  ) );
} );

