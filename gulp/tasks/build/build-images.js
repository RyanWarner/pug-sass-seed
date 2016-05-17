'use strict';

var gulp        = require( 'gulp' );

var imagemin    = require( 'gulp-imagemin' );
var pngquant    = require( 'imagemin-pngquant' );

var path        = require( '../../paths.js' );


gulp.task( 'build-images', [ 'favicon' ], function (  )
{
	return gulp.src( path.to.images.source )
		.pipe( imagemin(
		{
			progressive: true,
			svgoPlugins: [ { removeViewBox: false } ],
			use: [ pngquant(  ) ]
		} ) )
		.pipe( gulp.dest( path.to.images.destination ) );
} );
