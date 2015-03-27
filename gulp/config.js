// File globs.

module.exports =
{
	destination: __dirname + '/build/',
	jade:
	{
		all: __dirname + '/site/**/*.jade',
		pages: __dirname + '/site/**/*.jade'
	},
	sass: __dirname + '/site/**/*.scss',
	scripts: __dirname + 'scripts/**/*.js',
	images: __dirname + 'images/**/*.*',
	favicon: __dirname + 'favicon.png',
	errorHandler: function(  )
	{
		console.log( 'Error: ' +  err );
		gutil.beep(  );
		this.emit( 'end' );
	}
};