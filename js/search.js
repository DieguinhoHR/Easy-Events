function searchParticipant(searchValue) {	

	var defaultResult = {"results":[], "message":"Nenhum participante encontrado!"};

	if(searchValue == null || searchValue == "")
		return defaultResult;
	
	var allFound = $.grep(allParticipants, function(n, i) {
		return n.name.indexOf(searchValue) >= 0;
	});	
	
	if(allFound.length == 0)
		return defaultResult;
	
	return {"results":allFound, "message":""};
}