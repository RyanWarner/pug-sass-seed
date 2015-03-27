var gulp        = require( 'gulp' );

var connect     = require( 'gulp-connect' );
var cache       = require( 'gulp-cached' );


// Linting plugins.

var scsslint    = require( 'gulp-scss-lint' );
var csscomb     = require( 'gulp-csscomb' );
var eslint      = require( 'gulp-eslint' );


// Scripts.

gulp.task( 'eslint', function(  )
{
	return gulp.src( SCRIPT_FILES )
		.pipe( eslint(  ) )
		.pipe( eslint.format(  ) );
} );

gulp.task( 'js', [ 'eslint' ], function(  )
{
	return gulp.src( SCRIPT_FILES )
		.pipe( gulp.dest( OUTPUT_DIR + 'scripts' ) )
		.pipe( connect.reload(  ) );
} );

