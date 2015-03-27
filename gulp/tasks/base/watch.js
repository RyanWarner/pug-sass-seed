var gulp        = require( 'gulp' );
var config      = require( '../../config.js' );



gulp.task( 'watch', function(  )
{
	gulp.watch( config.jade.all, [ 'jade' ] );
	gulp.watch( config.sass, [ 'sass' ] );
	gulp.watch( config.scripts, [ 'scripts' ] );
	gulp.watch( config.images, [ 'images' ] );
} );
