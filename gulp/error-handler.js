module.exports =
{
	handler: function( error )
	{
		console.log( 'Error: ' +  error );
		gutil.beep(  );
		this.emit( 'end' );
	}
};
