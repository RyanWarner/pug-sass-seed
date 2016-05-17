'use strict';

var gulp    = require( 'gulp' );
var fontmin = require( 'gulp-fontmin' );

var path    = require( '../../paths.js' );


gulp.task( 'build-fonts', function(  )
{
	return gulp.src( path.to.fonts.source )
		.pipe( fontmin(  ) )
		.pipe( gulp.dest( path.to.fonts.destination ) );
} );
