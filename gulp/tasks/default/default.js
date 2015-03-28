var gulp        = require( 'gulp' );
var runSequence = require( 'run-sequence' );
var requireDir  = require( 'require-dir' );

requireDir( '../base' );
requireDir( './tasks' );


// ----------------+
// Default task.   |
// ----------------+

gulp.task( 'default', function(  )
{
	runSequence(
		'clean',
		[
			'jade', 
			'sass',
			'scripts',
			'images',
			'favicon'
		],
		'watch',
		'connect'
	);
} );
