// File globs.

var path = require( 'path' );

var pathToThisFile = __dirname;
var root = path.dirname( pathToThisFile );

module.exports =
{
	destination: root + '/build/',
	jade:
	{
		all: root + '/site/**/*.jade',
		pages: root + '/site/**/*.jade'
	},
	sass:
	{
		all: root + '/site/**/*.scss',
		main: root + '/site/main.scss'
	},
	scripts: root + '/scripts/**/*.js',
	images: root + '/images/**/*.*',
	favicon: root + '/favicon.png',
	errorHandler: function(  )
	{
		console.log( 'Error: ' +  err );
		gutil.beep(  );
		this.emit( 'end' );
	}
};