function executeRaffle() {	

	var participant = {"raffled":null, "message":"Participantes válidos insuficientes!"};

	var allChekeds = $.grep(allParticipants, function(n, i) {
		return n.checked === "1";
	});
	
	if(typeof allChekeds === "undefined")
		return participant;
	
	if(allChekeds.length <= 1)
		return participant;
	
	var allChekedsIds = [];	
	$.each(allChekeds, function(i, n) {
		allChekedsIds.push(parseInt(n.id));
	});	
	
	var raffledsParticipantsIds = [];
	$.each(raffledsParticipants, function(i, n) {
		raffledsParticipantsIds.push(parseInt(n.id));
	});		
	
	var difference = [];
	$.grep(allChekedsIds, function(n, i) {
		if ($.inArray(n, raffledsParticipantsIds) == -1) {
			difference.push($.grep(allParticipants, function(value, j) {
				return parseInt(value.id) === n;
			})[0]);
		}
	});	

	if(difference.length == 0)
		return participant;

	if(difference.length == 1) {
		raffledsParticipants.push(difference[0]);
		return { "raffled":difference[0], "message":"" };
	}

	var raffled = difference[Math.floor(Math.random()*difference.length)];

	raffledsParticipants.push(raffled);
		
	return { "raffled":raffled, "message":"" };
}