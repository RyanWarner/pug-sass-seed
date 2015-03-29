module.exports =
{
	handler: function(  )
	{
		console.log( 'Error: ' +  err );
		gutil.beep(  );
		this.emit( 'end' );
	}
};
