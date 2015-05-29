function executeRaffle() {	

	var participant = {"raffled":null, "message":"Participantes válidos insuficientes!"};

	var allChekeds = $.grep(allParticipants, function(n, i) {
		return n.checked === "1";
	});

	if(typeof allChekeds === "undefined")
		return participant;
	
	if(allChekeds.length > 1 )
		return { "raffled":allChekeds[Math.floor(Math.random()*allChekeds.length)], "message":"" };
	
	return participant;
}