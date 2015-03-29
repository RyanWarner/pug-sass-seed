var gulp      = require( 'gulp' );
var gutil     = require( 'gulp-util' );

var config    = require( '../../config.js' );

var connect   = require( 'gulp-connect' );

var sass        = require( 'gulp-sass' );
var prefix      = require( 'gulp-autoprefixer' );
var scsslint    = require( 'gulp-scss-lint' );
var csscomb     = require( 'gulp-csscomb' );




gulp.task( 'csscomb', function (  )
{
	return gulp.src( config.sass.all )
		.pipe( cache( 'csscomb' ) )
		.pipe( csscomb(  ) )
		.on( 'error', config.errorHandler )
		.pipe( gulp.dest( root + '/site' ) );
} );

gulp.task( 'scss-lint', function(  )
{
	return gulp.src( config.sass.all )
		.pipe( scsslint( { 'config': 'scss-linting-config.yml' } ) )
		.on( 'error', config.errorHandler );
} );

gulp.task( 'sass', [ 'scss-lint' ], function(  )
{
	return gulp.src( config.sass.main )
		//.pipe( cache( 'sass' ) )
		.pipe( sass(  ) )
		.on( 'error', config.errorHandler )
		.pipe( prefix( 'last 2 versions', { cascade: true } ) )
		.on( 'error', config.errorHandler )
		.pipe( gulp.dest( config.destination ) )
		.pipe( connect.reload(  ) );
} );