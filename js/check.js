function checkParticipant(idParticipant) {	

	if(idParticipant == null)
		return false;

	var someCheked = false;
		
	$.each(allParticipants, function( index, value ) {
		if(parseInt(value.id) === parseInt(idParticipant)) {
			value.checked = "1";
			someCheked = true;
			return false;
			//no JavaScript o return false dentro do each é igual ao break do Java ou C#;
		}
	});
	
	return someCheked;
}