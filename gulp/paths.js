// File globs.

'use strict';

var path = require('path');

var pathToThisFile = __dirname;
var root = path.dirname(pathToThisFile);
var destination = root + '/dist/';

module.exports = {
	to: {
		destination: destination,
		pug: {
			source: root + '/site/**/*.pug',
			pages: root + '/site/**/*.pug',
			destination: destination
		},
		sass: {
			source: root + '/site/**/*.scss',
			main: root + '/site/main.scss',
			destination: destination
		},
		scripts: {
			source: root + '/site/scripts/**/*.js',
			main: root + '/site/scripts/main.js',
			destination: destination + 'scripts'
		},
		images: {
			source: root + '/images/**/*.*',
			destination: destination + 'images'
		},
		fonts: {
			source: '',
			destination: destination + 'fonts'
		},
		favicon: {
			source: root + '/favicon.png',
			destination: destination
		}
	}
};
