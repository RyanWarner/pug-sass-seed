var gulp      = require( 'gulp' );
var gutil     = require( 'gulp-util' );

var connect   = require( 'gulp-connect' );
var cache     = require( 'gulp-cached' );

var eslint    = require( 'gulp-eslint' );

var path      = require( '../../paths.js' );


// Scripts.

gulp.task( 'eslint', function(  )
{
	return gulp.src( path.to.scripts.source )
		.pipe( eslint(  ) )
		.pipe( eslint.format(  ) );
} );

gulp.task( 'scripts', [ 'eslint' ], function(  )
{
	return gulp.src( path.to.scripts.source )
		.pipe( gulp.dest( path.to.scripts.destination ) )
		.pipe( connect.reload(  ) );
} );

