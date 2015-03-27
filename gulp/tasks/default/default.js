var gulp        = require( 'gulp' );
var runSequence = require( 'run-sequence' );


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
