// File globs.

var path = require( 'path' );

var pathToThisFile = __dirname;
var root = path.dirname( pathToThisFile );

var destination = root + '/build/';

module.exports =
{
	destination: destination,
	jade:
	{
		all: root + '/site/**/*.jade',
		pages: root + '/site/**/*.jade'
	},
	sass:
	{
		all: root + '/site/**/*.scss',
		main: root + '/site/main.scss',
		destination: destination + 'css'
	},
	scripts:
	{
		all: root + '/site/scripts/**/*.js',
		main: root + '/site/scripts/main.js',
		destination: destination + 'scripts'
	},
	images:
	{
		all: root + '/images/**/*.*',
		destination: destination + 'images/'
	},
	favicon: root + '/favicon.png',
	errorHandler: function(  )
	{
		console.log( 'Error: ' +  err );
		gutil.beep(  );
		this.emit( 'end' );
	}
};