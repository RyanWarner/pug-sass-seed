var gulp      = require( 'gulp' );
var gutil     = require( 'gulp-util' );
var connect   = require( 'gulp-connect' );

var cache     = require( 'gulp-cached' );
var sass      = require( 'gulp-sass' );
var prefix    = require( 'gulp-autoprefixer' );
var scsslint  = require( 'gulp-scss-lint' );
var csscomb   = require( 'gulp-csscomb' );

var path      = require( '../../paths.js' );
var error     = require( '../../error-handler.js' );




gulp.task( 'csscomb', function (  )
{
	return gulp.src( path.to.sass.source )
		.pipe( cache( 'csscomb' ) )
		.pipe( csscomb(  ) )
		.on( 'error', error.handler )
		.pipe( gulp.dest( './site' ) );
} );

gulp.task( 'scss-lint', [ 'csscomb' ], function(  )
{
	return gulp.src( path.to.sass.source )
		.pipe( scsslint( { 'config': 'scss-linting-config.yml' } ) )
		.on( 'error', error.handler );
} );

gulp.task( 'sass', [ 'scss-lint' ], function(  )
{
	return gulp.src( path.to.sass.main )
		//.pipe( cache( 'sass' ) )
		.pipe( sass(  ) )
		.on( 'error', error.handler )
		.pipe( prefix( 'last 2 versions', { cascade: true } ) )
		.on( 'error', error.handler )
		.pipe( gulp.dest( path.to.sass.destination ) )
		.pipe( connect.reload(  ) );
} );