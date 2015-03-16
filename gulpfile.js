var gulp        = require( 'gulp' );
var gutil       = require( 'gulp-util' );
var open        = require( 'gulp-open' );
var clean       = require( 'gulp-clean' );
var flatten     = require( 'gulp-flatten' );
var connect     = require( 'gulp-connect' );
var cache       = require( 'gulp-cached' );
var runSequence = require( 'run-sequence' );

var jade        = require( 'gulp-jade' );

var sass        = require( 'gulp-sass' );
var prefix      = require( 'gulp-autoprefixer' );


// Linting plugins.

var scsslint    = require( 'gulp-scss-lint' );
var csscomb     = require( 'gulp-csscomb' );
var eslint      = require( 'gulp-eslint' );



//Build plugins

var concat      = require( 'gulp-concat' );
var uglify      = require( 'gulp-uglify' );
var minifyHTML  = require( 'gulp-minify-html' );
var minifyCSS   = require( 'gulp-minify-css' );
var imagemin    = require( 'gulp-imagemin' );
var pngquant    = require( 'imagemin-pngquant' );



// File locations.

var OUTPUT_DIR   = 'build/';

var MAIN_JS_FILENAME  = 'script.js';

var ALL_JADE_FILES   = __dirname + '/site/**/*.jade';
var JADE_FILES       = __dirname + '/site/pages/**/*.jade';
var SASS_FILES       = __dirname + '/site/**/*.scss';
var SCRIPT_FILES     = 'scripts/**/*.js';
var IMAGE_FILES      = 'images/**/*.*';
var FAVICON          = 'favicon.png';



// Error handler. 
// Look for errors after every action that could possibly produce one.

var handleError = function ( err )
{
	console.log( 'Error: ' +  err );
	gutil.beep(  );
	this.emit( 'end' );
};




gulp.task( 'watch', function(  )
{
	gulp.watch( ALL_JADE_FILES, [ 'jade' ] );
	gulp.watch( SASS_FILES, [ 'sass' ] );
	gulp.watch( SCRIPT_FILES, [ 'js' ] );
	gulp.watch( IMAGE_FILES, [ 'images' ] );
} );

gulp.task( 'clean', function(  )
{
	cache.caches = {  };

	return gulp.src( OUTPUT_DIR,
		{
			read: false
		} )
		.pipe( clean(  ) );
} );



// Jade.

gulp.task( 'jade', function(  )
{
	return gulp.src( JADE_FILES )
		.pipe( jade(  ) )
		.on( 'error', handleError )
		.pipe( flatten(  ) )
		.pipe( gulp.dest( OUTPUT_DIR ) )
		.pipe( connect.reload(  ) );
} );



// Styles.

gulp.task( 'csscomb', function (  )
{
	return gulp.src( SASS_FILES )
		.pipe( cache( 'csscomb' ) )
		.pipe( csscomb(  ) )
		.on( 'error', handleError )
		.pipe( gulp.dest( './site' ) );
} );

gulp.task( 'scss-lint', function(  )
{
	return gulp.src( SASS_FILES )
		.pipe( scsslint( { 'config': 'scss-linting-config.yml' } ) )
		.on( 'error', handleError );
} );

gulp.task( 'sass', [ 'scss-lint' ], function(  )
{
	return gulp.src( __dirname + '/site/main.scss' )
		// .pipe( cache( 'sass' ) )
		.pipe( sass(  ) )
		.on( 'error', handleError )
		.pipe( prefix( 'last 2 versions', { cascade: true } ) )
		.on( 'error', handleError )
		.pipe( gulp.dest( OUTPUT_DIR ) )
		.pipe( connect.reload(  ) );
} );



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



// Assets.

gulp.task( 'images', function(  )
{
	return gulp.src( IMAGE_FILES )
		.pipe( gulp.dest( OUTPUT_DIR + '/images/' ) )
		.pipe( connect.reload(  ) );
} );

gulp.task( 'favicon', function(  )
{
	return gulp.src( FAVICON )
		.pipe( gulp.dest( OUTPUT_DIR ) )
		.pipe( connect.reload(  ) );
} );




gulp.task( 'connect', function(  )
{
	connect.server(
	{
		root: OUTPUT_DIR,
		hostname: '0.0.0.0',
		livereload: true
	} );
} );

gulp.task( 'open', function(  )
{
	var options = 
	{
		app: 'google chrome'
		//app: 'safari'
	};

	return gulp.src( OUTPUT_DIR + 'index.html' )
		.pipe( open( 'http://localhost:8080', options ) );
} );



// ---------------+
// Build tasks.   |
// ---------------+

gulp.task( 'build-scripts', function(  )
{
	return gulp.src( SCRIPT_FILES )
		.pipe( concat( MAIN_JS_FILENAME ) )
		.pipe( uglify(  ) )
		.pipe( gulp.dest( OUTPUT_DIR + 'scripts' ) );
} );

gulp.task( 'build-html', function(  )
{
	return gulp.src( OUTPUT_DIR + '/**/*.html' )
		.pipe( minifyHTML(  ) )
		.pipe( gulp.dest( OUTPUT_DIR ) );
} );

gulp.task( 'build-css', function(  )
{
	return gulp.src( './site/main.scss' )
		.pipe( sass(  ) )
		.on( 'error', handleError )
		.pipe( prefix( 'last 2 versions', { cascade: true } ) )
		.on( 'error', handleError )
		.pipe( minifyCSS(  ) )
		.pipe( gulp.dest ( OUTPUT_DIR + 'css' ) );
} );

gulp.task( 'build-images', [ 'favicon' ], function (  )
{
	return gulp.src( IMAGE_FILES )
		.pipe( imagemin(
		{
			progressive: true,
			svgoPlugins: [ { removeViewBox: false } ],
			use: [ pngquant(  ) ]
		} ) )
		.pipe( gulp.dest( OUTPUT_DIR + 'images' ) );
} );

gulp.task( 'build', function(  )
{
	runSequence(
		'clean',
		[
			'build-images',
			'build-scripts',
			'build-css'
		],
		'jade',
		'build-html',
		'connect'
	);
} );



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
			'js',
			'images',
			'favicon'
		],
		'watch',
		'connect',
		'open'
	);
} );
