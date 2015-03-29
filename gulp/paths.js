// File globs.

var path = require( 'path' );

var pathToThisFile = __dirname;
var root = path.dirname( pathToThisFile );

var destination = root + '/build/';

module.exports =
{
	to:
	{
		destination: destination,
		jade:
		{
			source: root + '/site/**/*.jade',
			pages: root + '/site/**/*.jade',
			destination: destination
		},
		sass:
		{
			source: root + '/site/**/*.scss',
			main: root + '/site/main.scss',
			destination: destination
		},
		scripts:
		{
			source: root + '/site/scripts/**/*.js',
			main: root + '/site/scripts/main.js',
			destination: destination + 'scripts'
		},
		images:
		{
			source: root + '/images/**/*.*',
			destination: destination + 'images'
		},
		favicon:
		{
			source: root + '/favicon.png',
			destination: destination
		}
	}
};